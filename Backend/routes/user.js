const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken")
const { User, Account } = require("../db");
const JWT_SECRET = require("../config");
const { authMiddleware } = require("./middleware");
const router = express.Router();

// add signin/ signup routes

const signupSchema = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
})


router.post("/signup", async (req, res) => {
    const body = req.body;
    // console.log(body)

    // return
    const { success } = signupSchema.safeParse(body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    // here we are checking whether the user is already exists in the db base or not
    const user = User.findOne({
        username: body.username
    })
    console.log(user.id)

    if (user.id) {
        return res.json({
            message: "Email already taken / Incorrect inputs"
        })
    }

  
   console.log(body)
   

  // Here we are creating the user data in the user table
    const dbUser = await User.create(body)

    const userId = dbUser._id

      // here wea are adding some amount in the account
    await Account.create({
        userId,
        balance:1+Math.random()*10000
    })



    const token = jwt.sign({
        userId: dbUser.id
    }, JWT_SECRET)

    res.json({
        message: "User Created Sucessfully",
        token: token
    })



})


const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string()
})


router.post("/signin", async (req, res) => {

    const body = req.body
    const { success } = signinSchema.safeParse(body)

    if (!success) {
        return res.status(411).json({
            message: "Error while logging in"
        })
    }
   
    console.log(body)
    // return

    const existingUser = await User.findOne({
        username:body.username
    },{password:body.password})

    if (existingUser) {
        const token = jwt.sign({
            userId: existingUser._id
        }, JWT_SECRET)
        return res.json({
            token,
            message:"loggin Sucessful"
        })
    }

    return res.json({
        message: "Error while logging in"
    })



})



// here we are creating a route that allows users to update their details in db

const updateSchema = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
})






router.put("/", authMiddleware, async (req, res) => {
    const body = req.body
    const { success } = updateSchema.safeParse(body)

    if (!success) {
        return res.status(411).json({
            message: "Error while updating information"
        })
    }


    await User.updateOne({ _id: req.userId }, body)


    res.json({
        message: "Updated successfully"
    })


})



// Here we are creating a route that returns the details of other users, just like a filter

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";
    
    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

     res.json({
        user:users.map(user =>({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            _id:user._id

        }))
     })


})



module.exports = router
const express = require("express");
const zod = require("zod")
const { Account } = require("../db");
const { authMiddleware } = require("./middleware");
const  mongoose  = require("mongoose");
const router = express.Router();


router.get("/balance", authMiddleware ,async(req, res)=>{

    const account = await Account.findOne({
        userId:req.userId
    })
     

    res.json({
        balance:account.balance
    })

})

const trnasferSchema = zod.object({
    to:zod.string(),
    amount:zod.number()
})


router.post("/transfer",authMiddleware,async (req, res)=>{

    const session = await mongoose.startSession();

    session.startTransaction();

    const body = req.body
    const {amount, to} = req.body
    const {success} = trnasferSchema.safeParse(body)

    if(!success){
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        })
    }


    const account = Account.findOne({userId:req.userId}).session(session);

    if(!account || account.balance< amount){
        await session.abortTransaction();
        return req.status(400).json({
            message:"Insufficient Balance"
        })
    }

    const toAccount = Account.findOne({userId:to}).session(session);

    if(!toAccount){
        await abortTransaction();
        return res.status(400).json({
            message:"Invalid Account"
        })
    }

   // Here we are deducting balance from the sender 
    await Account.updateOne({userId:req.userId},{$inc: {balance: -amount}}).session(session)
    // here we are crediting the balance to the reciever
    await Account.updateOne({userId:to},{$inc : {balance:amount}}).session(session)

      // commit the trnsaction
      await session.commitTransaction();
    res.json({
        message:"Transfer sucessful"
    })

})




module.exports = router


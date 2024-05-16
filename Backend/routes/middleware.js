
const jwt = require("jsonwebtoken")
const JWT_SECRET = require('../config')

const authMiddleware = (req, res, next)=>{

    const authHeader = req.headers.authorization;
    console.log(JWT_SECRET)
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(403).json({msg:"isseu with bearer"})
    }
    const token = authHeader.split(" ")[1];

    try{
        const decoded = jwt.verify(token,JWT_SECRET)
        if(decoded.userId){
            req.userId = decoded.userId
            next()
        }
        else{
            return res.status(403).json({msg:"it's here"})
        }

    }catch(e){
        return  res.status(403).json({msg:e})
    }
}


module.exports = {authMiddleware}
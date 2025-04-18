const express=require("express")
const cookieParser=require("cookie-parser")
const app=express()
const jwt=require("jsonwebtoken")
const userModel = require("../models/userModel")
app.use(cookieParser())
require("dotenv").config()

module.exports=async(req,res,next)=>{
    try{
        if(!req.cookies.token){
            return res.status(400).send("Please login first")
        }

        let decoded = jwt.verify(req.cookies.token,process.env.JWT_SECRET_KEY)
        if(!decoded){
            return res.status(401).json({ message: "Please login first" });
        }
        let user=await userModel.findOne({mail:decoded.mail})
        if(!user){
            return res.status(400).send("Something went wrong")
        }
        req.user=user
        next()
    }
    catch(err){
        console.error(err)
    }
}
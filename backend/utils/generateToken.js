const express=require("express")
const jwt=require("jsonwebtoken")
require("dotenv").config()


const generateToken=(user)=>{
    return jwt.sign({mail:user.mail,id:user._id},process.env.JWT_SECRET_KEY)
}
module.exports.generateToken=generateToken
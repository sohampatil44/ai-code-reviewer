const express=require("express")
const router =express.Router()
const bcrypt=require("bcryptjs")
const userModel=require("./models/userModel.js")
const {generateToken} = require("../../utils/generateToken")
const cookieParser=require("cookie-parser")


router.get("/register",(req,res)=>{
    res.render("register")
})

router.post("/register",(req,res)=>{
    let{name,mail,password}=req.body
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt,async(err,hash)=>{
            let user=await userModel.create({
                name:name,
                mail:mail,
                password:hash
            })
            res.render("login")

        })
    })
    
})

router.post("/login",async(req,res)=>{
    let{mail,password}=req.body

    let user = await userModel.findOne({mail:mail})
    if(!user){
        return res.status(400).send("Mail or Password is invalid")
    }
    await bcrypt.compare(password,user.password,(err,result)=>{
        if(!result){
            return res.status(400).send("Mail or Password is invalid")
        }

    })
    let token = generateToken(user)
    res.cookie("token",token)
    res.redirect("/ai/home")
})

router.get("/login",(req,res)=>{
    res.render("login")
})
    



module.exports=router

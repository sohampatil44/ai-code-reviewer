
const express= require("express")
const app=express()
const aiRoutes=require("./routes/ai.routes")
const path =require("path")
const indexRouter=require("./routes/indexRouter")
const userModel=require("../models/userModel")
const cookieParser = require("cookie-parser")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs")
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("working")
})

app.use("/ai",aiRoutes)
app.use("/",indexRouter)

module.exports=app
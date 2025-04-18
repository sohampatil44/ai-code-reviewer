const express=require("express")
const aiController=require("../controllers/ai.controller")
const router=express.Router()
const isLoggedIn=require("../../middlewares/isLoggedIn")

router.post("/get-review",aiController.getReview)
  


router.get("/home",isLoggedIn,(req,res)=>{
    res.render("home")
})


module.exports=router

 
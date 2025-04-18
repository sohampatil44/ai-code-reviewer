const generateContent = require("../services/ai.service")

module.exports.getReview =  async(req,res)=>{
    const code = req.body.code
      
    if(!code){
        return res.status(400).send("Please enter a prompt")

    }
    const response=await generateContent(code)

    res.render("result",{response:response})
}
const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/pinteresting")
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.error(err)
})

const userSchema=mongoose.Schema({

    name:String,

    password:String,

    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,ref:"post"
        }
    ],

    mail:String,

    
})
module.exports=mongoose.model("user",userSchema)
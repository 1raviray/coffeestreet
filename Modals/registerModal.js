const mongoose=require("mongoose")
const registerSchema=new mongoose.Schema({
    username: String,
      phoneNumber: Number,
      email: String,
      password: String
})
module.exports=mongoose.model("registers",registerSchema)
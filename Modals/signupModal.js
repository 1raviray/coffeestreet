const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true},
    cpassword:{type:String,require:true},
})
module.exports=mongoose.model("")
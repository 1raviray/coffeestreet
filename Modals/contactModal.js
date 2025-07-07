const mongoose = require("mongoose")

const contactschema=new mongoose.Schema({
    Name:String,
    Email:String,
    Phonenumber:Number,
    Message:String
})
module.exports=mongoose.model("contacts",contactschema)
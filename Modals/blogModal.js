const mongoose = require("mongoose")

const blogSchema=new mongoose.Schema({
Title:String,
Image:String,
DateandTime:String,
WriterName:String,
Content:String
})
module.exports=mongoose.model("blogs",blogSchema)
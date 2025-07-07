const mongoose = require("mongoose")

// mongoose.connect("mongodb://localhost:27017/coffee")
mongoose.connect("mongodb+srv://mylogin00000:KItAtvl3i7iB3snp@ravi.rgqha.mongodb.net/coffee")
.then(()=>console.log("db connected"))
.catch((err)=>console.log("error in database",err))
require("./db")
const express = require("express");
const app=express();
const cors=require("cors")
app.use(cors())
app.use(express.json())

const contactrouter=require("../CoffeeServer/Routers/contactus")
const productrouter=require("./Routers/productRouter")
const blogrouter=require("./Routers/blogRouter")
const registerrouter=require("./Routers/registerRouter")

app.use("/coffee",productrouter)
app.use("/registers",registerrouter)
app.use("/Blog",blogrouter)
app.use("/contactUs",contactrouter)

app.listen(3010,()=>console.log("API started"))
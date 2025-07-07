const express=require("express")
const router=express.Router()
const registerModal=require("../Modals/registerModal")
const jwt=require("jsonwebtoken")
const middleware = require("./LoginMiddleware")

router.get("/",async (req,res)=>{
    const data=await registerModal.find();
    res.send(data)
})

router.post("/",async (req,res)=>{
    const {email,password}=req.body
    const exists=await registerModal.findOne({email:email})
    if(exists){
        res.send({status:"false",message:"already exists"})
    }else{
        const register=new registerModal(req.body)
        const result=await register.save()
        res.send({status:"true",message:"Signup success"})
    }
})

router.delete("/:_id",async(req,res)=>{
    const query={_id:req.params._id}
    const result = await registerModal.deleteOne(query)
    res.send(result)
})

router.get("/myprofile",middleware,async(req,res)=>{
    let exist=await registerModal.findById(req.user._id)
    if(!exist){
        res.send("User not found")
    }else{
        res.send(exist)
    }
})

router.get("/:_id",async(req,res)=>{
    const query={_id:req.params._id}
    const result = await registerModal.findOne(query)
    res.send(result)
})

router.put("/:_id",async(req,res)=>{
    const query={_id:req.params._id}
    const result = await registerModal.updateOne(query,{$set:req.body})
    res.send(result)
})

//Login

router.post("/login",async(req,res)=>{
    const {email,password}=req.body
    const exists=await registerModal.findOne({email:email})
    if (!exists) {
        res.send({ message: "User Not Found", status: false })
    }
    else if (exists.password != password) {
        res.send({ message: "Invalid Password", status: false })
    }
    else {
        let payload={
            user:{
                _id:exists._id
            }
        }
        const token=jwt.sign(payload,"coffeestreet",{expiresIn:"1m"})
        res.json({ message: "Success", status: true,token });
    }
})



module.exports=router
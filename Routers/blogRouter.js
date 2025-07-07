const express=require("express")
const router=express.Router()
const blogModal=require("../Modals/blogModal")

router.get("/", async (req,res)=>{
    const data= await blogModal.find()
    res.send(data)
})

router.post("/", async (req,res)=>{
    const product=new blogModal(req.body)
    const result=await product.save()
    res.send(result)
})

router.get("/:_id",async (req,res)=>{
    const query={_id:req.params._id}
    const data=await blogModal.findOne(query)
    res.send(data)
})



module.exports=router
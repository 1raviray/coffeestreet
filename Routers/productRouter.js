const express=require("express")
const router=express.Router()
const productModal=require("../Modals/productModal")

router.get("/", async (req,res)=>{
    const data= await productModal.find()
    res.send(data)
})

router.post("/", async (req,res)=>{
    const product=new productModal(req.body)
    const result=await product.save()
    res.send(result)
})

router.get("/:_id",async (req,res)=>{
    const query={_id:req.params._id}
    const data=await productModal.findOne(query)
    res.send(data)
})
router.put("/:_id",async (req,res)=>{
    const query={_id:req.params._id}
    const data=await productModal.updateOne(query,{$set:req.body})
    res.send(data)
})

router.delete("/:_id",async(req,res)=>{
    const query={_id:req.params._id}
    const data = await productModal.deleteOne(query)
    res.send(data)
})


module.exports=router
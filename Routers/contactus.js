const express=require("express")
const router=express.Router()

const contactModal=require("../Modals/contactModal")

router.post("/", async (req,res)=>{
    const contact = new contactModal(req.body)
    const result = await contact.save()
    res.send(result)
})

router.get("/", async (req,res)=>{
    const data= await contactModal.find()
    res.send(data)
})

router.delete("/:_id",async(req,res)=>{
    const query={_id:req.params._id}
    const data = await contactModal.deleteOne(query)
    res.send(data)
})


module.exports=router
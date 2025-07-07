const jwt = require("jsonwebtoken")

const middleware=(req,res,next)=>{
    try{
        let token=req.header("x-token");
        if(!token){
            res.send("Token not there")
        }else{
            let decode=jwt.verify(token,"coffeestreet");
            req.user=decode.user
            next()
        }
    }catch(err){
        res.send("middleware error",err)
    }
}

module.exports=middleware
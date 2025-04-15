const express = require("express");
const router = express.Router();

router.post("/user",async(req, res)=>{
    try{
        const user = req.body;
        if(!user){
            return res.status(400).json({message:"User parameter cannot be empty"});
        }
        return res.status(201).json({message:"user created"});
    }catch(err){
        return res.status(500).json({message:"Internal server error"});
    }    
});
router.get("/user/:id", async(req,res)=>{
    try{

        const{id} = req.params;
        return res.status(201).json({message:"User Found"});
    }catch(err){
        return res.status(404).json({message:"User not Found!"});
    }
});
module.exports = router;
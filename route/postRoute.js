const express=require("express")

const {PostModel}=require("../model/post.model")

const postroute=express.Router()

postroute.post("/post",async(req,res)=>{
    const item=req.body;
    try{
        const data=new PostModel(item);
        await data.save()
        res.send("Data has been posted successfully")
    }catch(err){
        console.log(err)
    }
})

postroute.get("/getdata",async(req,res)=>{
    try{
        const data=await PostModel.find();
        res.send(data)
    }
    catch(err){
        console.log(err)
        console.log("error while fetching the data")
    }
})

module.exports={postroute}
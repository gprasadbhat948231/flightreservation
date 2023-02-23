const express=require("express")

const {UserModel}=require("../Model/user.model");

const userRouter=express.Router()

userRouter.post("/register", async(req,res)=>{
    const payload=req.body;
    try{
        const user=new UserModel(payload);
        await user.save()
        res.send("Registration Successful")
    }
    catch(err){
        console.log(err);
        console.log("error while registering")
    }
} )

userRouter.post("/login",async(req,res)=>{
    let {email,password}=req.body;
    try{
        const user=await UserModel.find({email:email,password:password})
        console.log(user)
        if(user.length!=0){
            res.send("Login Successful")
        }
        else{
            res.send("Wrong Credentials");
        }
    }
    catch(err){
        console.log(err)
        console.log("error while login")
    }
})
module.exports={userRouter};
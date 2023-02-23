const express=require('express')
const {connection}=require("./Config/db");
const {userRouter}=require("./Route/user.route")
const {flight}=require("./Route/flight.route")
const app=express();
app.use(express.json())
app.use("/users",userRouter);
app.use("/flight",flight)
app.listen(4500,async()=>{
    try{
        await connection
        console.log("Connected to Db")
    }
    catch(err){
        console.log("Error while connecting to db")
    }
})
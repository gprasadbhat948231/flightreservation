const mongoose=require("mongoose")


const postSchema=mongoose.Schema({
    Name:String,
    Description:String,
    Category:String,
    Imageurl:String,
    Location:String,
    Date:String,
    Price:Number
})

const PostModel=mongoose.model("post",postSchema)

module.exports={PostModel}
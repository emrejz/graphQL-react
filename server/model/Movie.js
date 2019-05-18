const mongoose=require("mongoose")
const Schema =mongoose.Schema

const MovieSchema=new Schema({
    directorID:String,
    title:String,
    description:String,
    year:Number,
})

module.exports=mongoose.model("movie",MovieSchema)
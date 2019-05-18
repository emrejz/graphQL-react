const mongoose=require("mongoose")

module.exports=()=>{
mongoose.connect(process.env.MONGO_DB_URL,{ useNewUrlParser: true })
.then(res=>console.log("mongo ok"))
.catch(err=>console.log("mongo err"))
mongoose.Promise=global.Promise
}
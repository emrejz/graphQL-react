const express=require("express")
const expressGraphql=require("express-graphql")
const app=express()

app.use("/graphql",expressGraphql({
    
}))

app.listen(3000,()=>{
    console.log("server ok")
})
const express=require("express")
const expressGraphql=require("express-graphql")
const app=express()
const schema=require("./schema/schema")
const db=require("./helpers/db")
const cors=require("cors")
app.use(cors())
require("dotenv").config();
db();
app.use("/graphql",expressGraphql({
    schema,
    graphiql:true
}))

app.listen(3000,()=>{
   
}) 
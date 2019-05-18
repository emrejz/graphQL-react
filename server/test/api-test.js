const  chai = require('chai')
const chaiHttp = require('chai-http');
const should=chai.should()
const app=require("../app")
const mongoose=require("mongoose")
const MovieSchma=require("../model/Movie")
 
chai.use(chaiHttp);

describe("Movie api test",()=>{
    it("post data",done=>{
        const movie={
            _id=mongoose.Types.ObjectId("5ce049999d94351dbcbccec5"),
            title:"test",
            description:"test",
            year:1999,
            directorID:"5ce049999d94351dbcbccec5"
        }
        const testMovie=new MovieSchma(movie)
        testMovie.save().then(res=>)

    })
})
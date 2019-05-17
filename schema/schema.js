const graphql=require("graphql")

const {GraphQLObjectType,GraphQLInt,GraphQLString}=graphql

const MovieType=new GraphQLObjectType({
    name:"Movie",
    fields:()=>({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        description:{type:GraphQLString},
        year:{type:GraphQLInt},
    })
})
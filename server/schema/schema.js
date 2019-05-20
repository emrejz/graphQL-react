const graphql=require("graphql")
const MovieSchema=require("../model/Movie")
const DirectorSchema=require("../model/Director")


const {GraphQLObjectType,GraphQLNonNull, GraphQLList,GraphQLSchema,GraphQLID,GraphQLInt,GraphQLString}=graphql

const MovieType = new GraphQLObjectType({
	name: 'Movie',description:"falan filan",
	fields: () => ({
		id: { type: GraphQLString },
		title: { type: GraphQLString },
		description: { type: GraphQLString }, 
        year: { type: GraphQLInt },
        directorID:{type:GraphQLString},
		director: {
			type: DirectorType,
			resolve(parent, args){
			
				return DirectorSchema.findById(parent.directorID)
			}
		}
	})
});

const DirectorType = new GraphQLObjectType({
	name: 'Director',
	fields: () => ({
		id:{type:GraphQLString},  
		name: { type: GraphQLString },
		birth: { type: GraphQLInt },
		movies: {
			type: new GraphQLList(MovieType),
			resolve(parent, args){
			
				return MovieSchema.find({directorID:parent.id})
			}
		}
	})
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		movie: {
			type: MovieType,
			args: { id: { type: GraphQLString } },
			resolve(parent, args){
				return MovieSchema.findById(args.id)
			}
		},
		director: {
			type: DirectorType,
			args: { id: { type: GraphQLString } },
			resolve(parent, args){
				return DirectorSchema.findById(args.id)
			}
		},
		movies: {
			type: new GraphQLList(MovieType),
			resolve(parent, args){
				return MovieSchema.find({})
			}
		},
		directors: {
			type: new GraphQLList(DirectorType),
			resolve(parent, args){
				return DirectorSchema.find({})
			}
		}
	}
});

const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addMovie: {
			type: MovieType,
			args: {
			
				title: { type:new GraphQLNonNull(GraphQLString) },
				description: { type: GraphQLString },
				year: { type: GraphQLInt },
				directorID: { type: new GraphQLNonNull(GraphQLString) }
			},
			resolve(parent, args){
				const {title,directorID}=args

				const movie = new MovieSchema({
					title: args.title,
					description: args.description,
					year: args.year,
					directorID: args.directorID
				});

				return movie.save()
			}
        },
        addDirector:{
            type:DirectorType,
            args:{
                name:{type:new GraphQLNonNull(GraphQLString)},
                birth:{type:GraphQLInt}
            },
            resolve(parent,args){
                const director=new DirectorSchema({
                    name:args.name,
                    birth:args.birth
                })
                return director.save()
            }
        }
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation
});

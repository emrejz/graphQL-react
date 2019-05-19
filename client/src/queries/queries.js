import {gql} from "apollo-boost";

export const directorsQuery=gql`
{
    directors{
        id,name,birth
    }
}`

export const moviesQuery=gql`
{
    movies{
        id,title,description,year,directorID
    }
}`

export const movieQuery=gql`
query($id:String){
    movie(id:$id){
        title,description,year,director{
            name
        }
    }
}`

export const newMovieMutation=gql`
	mutation($title:String!, $description:String, $year:Int, $directorID:String!){
		addMovie(title:$title, description:$description, year:$year, directorID:$directorID){
            title
		}
	}
`
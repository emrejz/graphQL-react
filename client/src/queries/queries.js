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

export const newMovieMutation=gql`
	mutation($title:String!, $description:String, $year:Int, $directorID:ID!){
		addMovie(title:$title, description:$description, year:$year, directorID:$directorID){
            title
		}
	}
`
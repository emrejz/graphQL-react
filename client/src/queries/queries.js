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
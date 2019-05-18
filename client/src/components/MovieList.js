import React, { Component } from 'react'
import {gql} from 'apollo-boost'
import {  Query } from 'react-apollo'

const getMovies=gql`
  {
  movies{
    title,description,directorID,year,id
    }}`
class MovieList extends Component {
  render() {
    return (
      <div>
        <ul className="MovieList">
            <Query query={getMovies}>
              {({loading,error,data})=>{
                  if(loading)return <div>LOADING</div>
                  if(error)return <div>ERROR</div>
                  return data.movies.map(movie=>
                  <li key={movie.id}>
                    {movie.title}
                  </li>
                  )
              }}
            </Query>
        </ul>
      </div>
    )
  }
}
export default MovieList
import React, { Component } from 'react'
import {moviesQuery} from "../queries/queries"
import {  Query } from 'react-apollo'

class MovieList extends Component {
  render() {
    return (
      <div>
        <ul className="MovieList">
            <Query query={moviesQuery}>
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
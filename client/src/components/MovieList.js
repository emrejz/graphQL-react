import React, { Component } from 'react'
import { moviesQuery } from "../queries/queries"
import { Query } from 'react-apollo'

class MovieList extends Component {
  
  render() {
    return (
      <div className="container" data-state="Movie App">
        <div className="device" data-view="list">
          <ul className="layer" data-layer="list">
            <Query query={moviesQuery}>
              {({ loading, error, data }) => {
                if (loading) return <div>LOADING</div>
                if (error) return <div>ERROR</div>
                return data.movies.map(movie =>
                  <li className="content" key={movie.id}>
                    <div className="bg"></div>
                    <div className="avatar"></div>
                    <div className="title"> {movie.title}</div>
                    <p>{movie.description}</p>
                  </li>
                )
              }}
            </Query>
          </ul>
        </div>
      </div>
    )
  }
}
export default MovieList
import React, { Component } from 'react'
import {gql} from 'apollo-boost'
import {  graphql } from 'react-apollo'

const getMovies=gql`
  {
  movies{
    title,description,directorID,year,id
    }}`
class MovieList extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <ul className="MovieList">
            <li>emre</li>
        </ul>
      </div>
    )
  }
}
export default graphql(getMovies)(MovieList)
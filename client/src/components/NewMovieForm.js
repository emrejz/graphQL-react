import React, { Component } from 'react'
import { Query} from 'react-apollo'
import {directorsQuery} from "../queries/queries"


export default class NewMovieForm extends Component {
  render() {
    return (
      <div>
        <form>
            <div>
                <label htmlFor="titleInp">Title</label>
                <input type="text" id="titleInp" placeholder="enter title" />
            </div>
            <div>
                <label htmlFor="descInp">Description</label>
                <input type="text" id="descInp" placeholder="enter description" />
            </div>
            <div>
                <label htmlFor="yearInp">Year</label>
                <input type="text" id="yearInp" placeholder="enter year" />
            </div>
            <div>
                <label htmlFor="directorSlc">Director</label>
                <select id="directorSlc">
                    <option disabled={true}>Selecet Director</option>
                    <Query query={directorsQuery}>
                        {({loading,error,data})=>{
                            if(loading) return <option disabled={true}>Loading</option>
                            if(error) return <option disabled={true}>Error</option>
                            return data.directors.map(director=><option key={director.id}>{director.name}</option>)
                        }}
                    </Query>
                </select>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
      </div>
    )
  }
}

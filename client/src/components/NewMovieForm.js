import React, { Component } from 'react'
import { Query,Mutation} from 'react-apollo'
import {directorsQuery,moviesQuery,newMovieMutation} from "../queries/queries"


export default class NewMovieForm extends Component {
    state={
        title:"",
        description:"",
        year:null,
        directorID:""
    }
    onChng=(e)=>{
      this.setState(
       { [e.target.id]:e.target.value}
      )
    }
  render() {
    return (
     <Mutation mutation={newMovieMutation}>
         {(addMovie,{loading,error})=>(
              <div>
              <form onSubmit={(e)=>{
                  e.preventDefault();
                  addMovie({
                    variables:{
                        title:this.state.title,
                        description:this.state.description,
                        year:parseInt(this.state.year,10),
                        directorID:this.state.directorID
                    },
                    refetchQueries:[{query:moviesQuery}]
                  })
              }}>
                  <div>
                      <label htmlFor="title">Title</label>
                      <input onChange={this.onChng} type="text" id="title" placeholder="enter title" />
                  </div>
                  <div>
                      <label htmlFor="description">Description</label>
                      <input onChange={this.onChng} type="text" id="description" placeholder="enter description" />
                  </div>
                  <div>
                      <label htmlFor="year">Year</label>
                      <input onChange={this.onChng} type="text" id="year" placeholder="enter year" />
                  </div>
                  <div>
                      <label htmlFor="directorID">Director</label>
                      <select onChange={this.onChng} id="directorID">
                          <option disabled={true}>Selecet Director</option>
                          <Query query={directorsQuery}>
                              {({loading,error,data})=>{
                                  if(loading) return <option  disabled={true}>Loading</option>
                                  if(error) return <option disabled={true}>Error</option>
                                  return data.directors.map(director=><option key={director.id} value={director.id}>{director.name}</option>)
                              }}
                          </Query>
                      </select>
                  </div>
                  <div> 
                      <button type="submit">Submit</button>
                  </div>
              </form>
              {loading && <h1>LOADING</h1>}
              {error && <h1>ERROR</h1>}
            </div>
         )}
     </Mutation>
    )
  }
}

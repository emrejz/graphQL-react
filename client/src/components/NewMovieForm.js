import React, { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import { directorsQuery, moviesQuery, newMovieMutation } from "../queries/queries"


export default class NewMovieForm extends Component {
    state = {
        title: "",
        description: "",
        year: "",
        directorID: "",
        displayReq:"none"
    }
 
    formReset=()=>{
        this.setState({
            title: "",
            description: "",
            year: "",
            directorID: ""
        })
    }   
    onChng = (e) => {
        this.setState(
            { [e.target.id]: e.target.value }
        )
    }
    render() {
        return (
            <Mutation mutation={newMovieMutation}
             onCompleted={()=>this.formReset()}>
                {(addMovie, { loading, error }) => (
                    <div className="container" data-state="New Movie">
                        <div className="device" data-view="list">
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                const {title,year,description,directorID}=this.state;
                                if(!title.trim()!==""&&directorID.trim()!==""){
                                this.setState({displayReq:"none"})
                                 addMovie({
                                    variables: {
                                        title: this.state.title.trim(),
                                        description: this.state.description.trim(),
                                        year: parseInt(this.state.year.trim(), 10),
                                        directorID: this.state.directorID.trim()
                                    },
                                    refetchQueries: [{ query: moviesQuery }]
                                })}
                                else{
                                    this.setState({displayReq:"block"})
                                } 
                            }}>
                                <div>
                                    <div style={{"color":"red","display":this.state.displayReq}}>Title and director required</div>
                                    <label htmlFor="title">Title</label>
                                    <input value={this.state.title} onChange={this.onChng} type="text" id="title" placeholder="enter title" />
                                </div>
                                <div>
                                    <label htmlFor="description">Description</label>
                                    <input value={this.state.description} onChange={this.onChng} type="text" id="description" placeholder="enter description" />
                                </div>
                                <div>
                                    <label htmlFor="year">Year</label>
                                    <input value={this.state.year} onChange={this.onChng} type="text" id="year" placeholder="enter year" />
                                </div>
                                <div>
                                    <label htmlFor="directorID">Director</label>
                                    <select  value={this.state.directorID} onChange={this.onChng} id="directorID">
                                        <option disabled  >Selecet Director</option>
                                        <Query query={directorsQuery}>
                                            {({ loading, error, data }) => {
                                               
                                                if (loading) return <option disabled={true}>Loading</option>
                                                if (error) return <option disabled={true}>Error</option>
                                                
                                                return data.directors.map(director =>{ return <option key={director.id} value={director.id}>{director.name}</option>})
                                            }}
                                        </Query>
                                    </select>
                                </div>
                                <div>
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                        {loading && <h1>LOADING</h1>}
                        {error && <h1>ERROR</h1>}
                    </div>
                )}
            </Mutation>
        )
    }
}

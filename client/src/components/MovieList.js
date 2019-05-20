import React, { Component } from 'react'
import { moviesQuery,movieQuery } from "../queries/queries"
import { Query } from 'react-apollo'
import { Modal } from 'antd'
import 'antd/dist/antd.css'


class MovieList extends Component {
  state = { visible: false,id:"" };

  showModal = (id) => {  
    this.setState({
      id,
      visible: true,
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <div className="container" data-state="Movie App">
        <Modal
          title="Movie Detail"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}>
          <Query query={movieQuery} variables={{id:this.state.id}}>{({loading,error,data})=>{
          if(loading) return <div>Loading</div>
          if(error) return <div>Error</div>
            return <div>
              <h2>{ data.movie.title }</h2>
							<p style={{"fontSize":"15px"}}>{ data.movie.year }</p>
							<p style={{"fontSize":"15px"}}>{ data.movie.description }</p>
							<br/>
							<h3>{ data.movie.director.name }</h3>
									<ul className="director-list" >{
										data.movie.director.movies.map(movie => (
                      <li style={{"backgroundColor":"yellow"}} key={movie.id}>
                        <div className="bg"></div>
                        <div className="title">{movie.title}</div>
                      </li>
										))
                  }
                  </ul>
            </div>
        }}</Query>
        </Modal>
        <div className="device" data-view="list">
          <ul className="layer" data-layer="list">
            <Query query={moviesQuery}>
              {({ loading, error, data }) => {
                if (loading) return <div>LOADING</div>
                if (error) return <div>ERROR</div>
                return data.movies.map(({id,title,description}) =>
                  <li className="content" key={id} onClick={()=>this.showModal(id)}>
                    <div className="bg"></div>
                    <div className="avatar"></div>
                    <div className="title"> {title}</div>
                    <p>{description}</p>
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
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
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}>
          <Query query={movieQuery} variables={{id:this.state.id}}>{({loading,error,data})=>{
          if(loading) return <div>Loading</div>
          if(error) return <div>Error</div>
            console.log(data)
            return <div>test</div>
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
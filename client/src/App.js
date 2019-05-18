import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import MovieList from './components/MovieList'
import NewMovieForm from './components/NewMovieForm'

const client=new ApolloClient({
  uri:"http://localhost:3000/graphql"
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App"> 
      <NewMovieForm/>
      <MovieList/>
      </div>
    </ApolloProvider>
  );
}

export default App;

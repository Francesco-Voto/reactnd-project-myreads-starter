import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchPage from './SearchPage';
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks/>
        )}/>
        <Route path='/search' render={({history}) => (
          <SearchPage />
        )}/>
      </div>
    );
  }
}

export default BooksApp

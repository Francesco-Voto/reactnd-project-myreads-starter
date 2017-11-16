import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchPage from './SearchPage';
// import * as BooksAPI from './BooksAPI'
import './App.css'

const categories = [
  {
    title: 'Currently Reading',
    value: 'currentlyReading'
  },
  {
    title: 'Want to Read',
    value: 'wantToRead'
  },
  {
    title: 'Read',
    value: 'read'
  }
]

class BooksApp extends Component {

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks categories={ categories }/>
        )}/>
        <Route path='/search' render={({history}) => (
          <SearchPage />
        )}/>
      </div>
    );
  }
}

export default BooksApp

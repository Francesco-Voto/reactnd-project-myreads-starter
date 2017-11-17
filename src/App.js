import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchPage from './SearchPage';
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    book.shelf = shelf
    this.setState((state) => ({
      books: [...state.books.filter((bookItem) => bookItem.id !== book.id), book]
    }))
  }

  render(){
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
            books={ this.state.books }
            updateBook={this.updateBook}
          />
        )}/>
        <Route path='/search' render={({history}) => (
          <SearchPage />
        )}/>
      </div>
    );
  }
}

export default BooksApp

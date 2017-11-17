import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchPage from './SearchPage';
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {

  state = {
    books: [],
    queriedBooks: []
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    book.shelf = shelf;
    this.setState((state) => ({
      books: [...state.books.filter((bookItem) => bookItem.id !== book.id), book]
    }))
  };

  updateQuery = (query) => {
    BooksAPI.search(query, 30)
      .then((books) => {
        this.setState({ queriedBooks: books });
      });
  };

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
          <SearchPage
            books={ this.state.queriedBooks }
            updateBook={this.updateBook}
            updateQuery={this.updateQuery}
          />
        )}/>
      </div>
    );
  }
}

export default BooksApp

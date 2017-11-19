import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import Book from './Book';
import * as BooksAPI from './BooksAPI'
import './App.css';

class SearchPage extends Component {

  static propTypes = {
    updateBook: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
  };

  state = {
    query: '',
    queriedBooks: []
  };


  updateQuery = (query) => {
    this.setState({ query });
    if(query) {
      BooksAPI.search(query, 30)
        .then((books) => {
          this.setState({queriedBooks: books.error ? [] : books});

        })
        .catch(error => this.setState({queriedBooks: []}));
    }else{
      this.setState({queriedBooks: []})
    }
  };


  render() {
    const { updateBook, books } = this.props;
    const { query, queriedBooks } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search'to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {queriedBooks.map((queriedBook) =>{

              const i = books.findIndex(book => queriedBook.id === book.id);
              if(i !== -1){
                queriedBook.shelf = books[i].shelf
              }
              return(
                <Book
                  key={queriedBook.id}
                  book={queriedBook}
                  updateBook={(shelf) => updateBook(queriedBook, shelf)}
                />
              )
            })}
          </ol>
        </div>
      </div>
    )}
}

export default SearchPage;
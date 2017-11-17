import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import Book from './Book';
import './App.css';

class SearchPage extends Component {

  static propTypes = {
    books: PropTypes.array,
    updateQuery: PropTypes.func.isRequired,
    updateBook: PropTypes.func.isRequired
  };

  static defaultProps = {
    books: []
  };

  state = {
    query: ''
  };

  updateQuery = (query) => {
    const { updateQuery } = this.props;
    this.setState({ query: query.trim() });
    updateQuery(this.state.query);
  };

  render() {
    const { books, updateBook } = this.props;
    const { query } = this.state;
    console.log(this.props);
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search'to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
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
            {books.map((book) => (
              <Book
                key={book.id}
                book={book}
                updateBook={(shelf) => updateBook(book, shelf)}
              />
            ))}
          </ol>
        </div>
      </div>
    )}
}

export default SearchPage;
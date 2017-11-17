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
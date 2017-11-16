import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import './App.css'

class ListBooks extends Component {

  static propTypes = {
    categories: PropTypes.arrayOf(
      PropTypes.shape(
        {
          title: PropTypes.string,
          value: PropTypes.string,
        }
      )).isRequired
  }

  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }

  render() {
    const { categories } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          { categories.map((category) => (
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">{ category.title }</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.state.books.filter((book) => book.shelf === category.value).map((book) => (
                      <Book
                        key={book.id}
                        book={book}
                      />
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )}
}

export default ListBooks;
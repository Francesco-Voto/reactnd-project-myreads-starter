import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'
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
];

const ListBooks = (props) => {
  const { books, updateBook } = props;

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        { categories.map((category) => (
          <div key={category.value}>
            <div className="bookshelf">
              <h2 className="bookshelf-title">{ category.title }</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books.filter((book) => book.shelf === category.value).map((book) => (
                    <Book
                      key={book.id}
                      book={book}
                      updateBook={(shelf) => updateBook(book, shelf)}
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
  )
};

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired
};

export default ListBooks;
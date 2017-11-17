import React from 'react';
import PropTypes from 'prop-types'
import './App.css'

const Book = (props) => {

  const { updateBook, book: { imageLinks: { thumbnail }, title, authors, shelf }} = props;

  console.log(props);
  return(
    <div className="book">
      <div className="book-top">
        <div className="book-cover"
             style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }} />
        <div className="book-shelf-changer">
          <select value={shelf} onChange={(event) => updateBook(event.target.value)}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      {authors && authors.map((author) => (
        <div key={author} className="book-authors">
          {author}
        </div>
      ))}

    </div>
  );
};

Book.propTypes = {
  updateBook: PropTypes.func.isRequired,
  book: PropTypes.shape({
    imageLinks: PropTypes.shape({
      thumbnail: PropTypes.string,
    }),
    title: PropTypes.string,
    shelf:PropTypes.oneOf(['currentlyReading', 'wantToRead', 'read']),
    authors: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default Book;
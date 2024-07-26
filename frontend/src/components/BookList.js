import React from 'react';

function BookList({ books }) {
  return (
    <div className="row">
      {books.map((book) => (
        <div className="col-md-4" key={book._id}>
          <div className="card mb-4">
            <img src={book.coverImage} className="card-img-top" alt={book.name} />
            <div className="card-body">
              <h5 className="card-title">{book.name}</h5>
              <p className="card-text">{book.description}</p>
              <p className="card-text">Author: {book.author}</p>
              <p className="card-text">Language: {book.language}</p>
              <p className="card-text">Published Year: {book.publishedYear}</p>
              <p className="card-text">Price: ${book.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;
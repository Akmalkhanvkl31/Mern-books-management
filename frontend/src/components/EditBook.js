import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

function EditBook() {
  const [book, setBook] = useState({
    name: '',
    description: '',
    price: '',
    author: '',
    language: '',
    publishedYear: '',
    coverImage: '',
  });

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      const res = await axios.get(`/api/books/${id}`);
      setBook(res.data);
    };
    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/books/${id}`, book, {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      });
      history.push('/dashboard');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={book.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={book.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={book.price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            id="author"
            name="author"
            value={book.author}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="language" className="form-label">Language</label>
          <input
            type="text"
            className="form-control"
            id="language"
            name="language"
            value={book.language}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="publishedYear" className="form-label">Published Year</label>
          <input
            type="number"
            className="form-control"
            id="publishedYear"
            name="publishedYear"
            value={book.publishedYear}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="coverImage" className="form-label">Cover Image URL</label>
          <input
            type="text"
            className="form-control"
            id="coverImage"
            name="coverImage"
            value={book.coverImage}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Book</button>
      </form>
    </div>
  );
}

export default EditBook;
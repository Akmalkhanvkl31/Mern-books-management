import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from '../components/Booklist';
import SearchBar from '../components/Searchbar';

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get('/api/books');
      setBooks(res.data);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <SearchBar setBooks={setBooks} />
      <BookList books={books} />
    </div>
  );
}

export default Home;

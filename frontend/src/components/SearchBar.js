import React, { useState } from 'react';
import axios from 'axios';

function SearchBar({ setBooks }) {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`/api/books?search=${query}`);
      setBooks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="mb-4" onSubmit={handleSearch}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search for books by name, author, or language"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">Search</button>
      </div>
    </form>
  );
}

export default SearchBar;
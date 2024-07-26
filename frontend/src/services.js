import axios from 'axios';

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export const register = async (userData) => {
  const res = await axios.post('/api/auth/register', userData);
  return res.data;
};

export const login = async (userData) => {
  const res = await axios.post('/api/auth/login', userData);
  return res.data;
};

export const getBooks = async () => {
  const res = await axios.get('/api/books');
  return res.data;
};

export const addBook = async (bookData) => {
  const res = await axios.post('/api/books', bookData);
  return res.data;
};

export const updateBook = async (id, bookData) => {
  const res = await axios.put(`/api/books/${id}`, bookData);
  return res.data;
};

export const deleteBook = async (id) => {
  const res = await axios.delete(`/api/books/${id}`);
  return res.data;
};
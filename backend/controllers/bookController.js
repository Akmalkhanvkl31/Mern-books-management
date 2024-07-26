const Book = require('../models/Book');

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.addBook = async (req, res) => {
  const { name, description, price, author, language, publishedYear, coverImage } = req.body;
  try {
    const newBook = new Book({ name, description, price, author, language, publishedYear, coverImage });
    const book = await newBook.save();
    res.json(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateBook = async (req, res) => {
  const { name, description, price, author, language, publishedYear, coverImage } = req.body;
  try {
    let book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ msg: 'Book not found' });
    }
    book = await Book.findByIdAndUpdate(req.params.id, { name, description, price, author, language, publishedYear, coverImage }, { new: true });
    res.json(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteBook = async (req, res) => {
  try {
    let book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ msg: 'Book not found' });
    }
    await Book.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Book removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
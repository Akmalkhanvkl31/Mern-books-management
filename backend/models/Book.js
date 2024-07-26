const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  author: { type: String, required: true },
  language: { type: String, required: true },
  publishedYear: { type: Number, required: true },
  coverImage: { type: String, required: true },
});
module.exports = mongoose.model('Book', BookSchema);
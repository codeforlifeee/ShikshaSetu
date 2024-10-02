
// models/Ebook.js
const mongoose = require('mongoose');

const ebookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  author: { type: String },
  url: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now },
  accessedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const Ebook = mongoose.model('Ebook', ebookSchema);
module.exports = Ebook;

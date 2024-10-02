
// models/Class.js
const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  schedule: { type: Date, required: true },
  resources: [
    { type: { type: String }, url: { type: String } }
  ],
  dateCreated: { type: Date, default: Date.now }
});

const Class = mongoose.model('Class', classSchema);
module.exports = Class;

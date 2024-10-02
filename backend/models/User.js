// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'teacher'], required: true },  // role
  notifications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Notification' }],
  certificates: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Certificate' }],
  classes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }],
  ebooks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ebook' }],
  dateCreated: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
module.exports = User;

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['student', 'teacher'],
    default: 'student',
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;


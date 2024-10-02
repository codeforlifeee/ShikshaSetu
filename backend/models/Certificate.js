
// models/Certificate.js
const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  courseTitle: { type: String, required: true },
  issueDate: { type: Date, required: true },
  certificateUrl: { type: String, required: true }
});

const Certificate = mongoose.model('Certificate', certificateSchema);
module.exports = Certificate;

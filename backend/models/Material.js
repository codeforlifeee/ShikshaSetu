
const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  file: String, // URL or path to the file
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Material = mongoose.model('Material', materialSchema);
module.exports = Material;

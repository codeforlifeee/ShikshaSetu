
const Test = require('../models/Test');

exports.createTest = async (req, res) => {
  const { title, questions } = req.body;

  try {
    const newTest = await Test.create({ title, questions, createdBy: req.user.id });
    res.status(201).json(newTest);
  } catch (error) {
    res.status(500).json({ message: 'Error creating test', error: error.message });
  }
};

exports.getTests = async (req, res) => {
  try {
    const tests = await Test.find({ createdBy: req.user.id });
    res.json(tests);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tests', error: error.message });
  }
};

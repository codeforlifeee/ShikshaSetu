const Test = require('../models/Test');

exports.getTests = async (req, res) => {
  try {
    const tests = await Test.find();
    res.status(200).json(tests);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching tests' });
  }
};

exports.createTest = async (req, res) => {
  const { testName, questions } = req.body;

  try {
    const newTest = new Test({ testName, questions });
    await newTest.save();
    res.status(201).json(newTest);
  } catch (err) {
    res.status(500).json({ message: 'Error creating test' });
  }
};

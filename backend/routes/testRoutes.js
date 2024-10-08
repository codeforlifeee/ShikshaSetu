const express = require('express');
const { getTests, createTest } = require('../controllers/testController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', getTests);
router.post('/', authMiddleware, createTest);

module.exports = router;

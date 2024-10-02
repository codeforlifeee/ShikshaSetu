
const express = require('express');
const { createTest, getTests } = require('../controllers/testController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', verifyToken, createTest);
router.get('/', verifyToken, getTests);

module.exports = router;

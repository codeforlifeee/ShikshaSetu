const express = require('express');
const { chat } = require('../controllers/chatController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', verifyToken, chat);

module.exports = router;

///////////

// routes/chatRoutes.js
const express = require('express');
const router = express.Router();
const { chatWithBot } = require('../controllers/chatController');

router.post('/', chatWithBot);

module.exports = router;



const express = require('express');
const { getChatbotResponse } = require('../controllers/chatController');

const router = express.Router();

router.get('/chatbot', getChatbotResponse);

module.exports = router;


// routes/userRoutes.js
const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { getNotifications, addNotification } = require('../controllers/userController');
const router = express.Router();

router.get('/notifications', protect, getNotifications);
router.post('/notifications', protect, addNotification);

module.exports = router;

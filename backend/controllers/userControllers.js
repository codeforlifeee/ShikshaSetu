// controllers/userController.js
const User = require('../models/User');

const getNotifications = async (req, res) => {
  try {
    const user = await User.findById(req.user);
    res.status(200).json(user.notifications);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const addNotification = async (req, res) => {
  const { notification } = req.body;

  try {
    const user = await User.findById(req.user);
    user.notifications.push(notification);
    await user.save();

    res.status(201).json({ message: 'Notification added' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getNotifications, addNotification };

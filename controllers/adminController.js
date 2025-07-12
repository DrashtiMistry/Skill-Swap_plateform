import User from '../models/User.js';
import Notification from '../models/Notification.js';

export const banUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  user.isBanned = true;
  await user.save();
  res.json({ msg: 'User banned' });
};

export const createNotification = async (req, res) => {
  const note = await Notification.create({ message: req.body.message });
  res.status(201).json(note);
};

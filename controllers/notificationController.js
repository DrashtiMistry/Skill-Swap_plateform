import Notification from '../models/Notification.js';

export const getNotifications = async (req, res) => {
  const notifications = await Notification.find().sort({ dateTime: -1 });
  res.json(notifications);
};

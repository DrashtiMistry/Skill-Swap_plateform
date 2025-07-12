import mongoose from 'mongoose';

const NotificationSchema = new mongoose.Schema({
  message: String,
  dateTime: { type: Date, default: Date.now }
});

export default mongoose.model('Notification', NotificationSchema);

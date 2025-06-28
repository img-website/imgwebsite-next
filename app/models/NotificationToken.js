import mongoose from 'mongoose';

const notificationTokenSchema = new mongoose.Schema({
  token: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.NotificationToken || mongoose.model('NotificationToken', notificationTokenSchema);

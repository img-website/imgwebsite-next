import mongoose from 'mongoose';

const notificationTokenSchema = new mongoose.Schema({
  token: { type: String, required: true, unique: true },
  email: { type: String },
  newsletter: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.models.NotificationToken || mongoose.model('NotificationToken', notificationTokenSchema);

import mongoose from 'mongoose';

const pushSubscriberSchema = new mongoose.Schema({
  endpoint: { type: String, required: true, unique: true },
  keys: {
    p256dh: { type: String, required: true },
    auth: { type: String, required: true }
  }
});

const PushSubscriber = mongoose.models.PushSubscriber || mongoose.model('PushSubscriber', pushSubscriberSchema);
export default PushSubscriber;

import mongoose from 'mongoose';

const pushSubscriptionSchema = new mongoose.Schema(
  {
    endpoint: { type: String, required: true, unique: true },
    keys: {
      p256dh: String,
      auth: String,
    },
    created_date: { type: Date, default: Date.now },
  },
  { timestamps: { createdAt: 'created_date', updatedAt: false } }
);

const PushSubscription =
  mongoose.models.PushSubscription ||
  mongoose.model('PushSubscription', pushSubscriptionSchema);

export default PushSubscription;

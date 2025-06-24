import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  storedName: { type: String, required: true, unique: true }, // slugified filename, unique
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin', required: true },
}, { timestamps: true });

export default mongoose.models.Image || mongoose.model('Image', imageSchema);

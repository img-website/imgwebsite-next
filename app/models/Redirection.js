import mongoose from 'mongoose';

const redirectionSchema = new mongoose.Schema(
  {
    from: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    to: {
      type: String,
      required: true,
      trim: true,
    },
    methodCode: {
      type: Number,
      enum: [301, 302, 307, 308], // 301 (Permanent Redirect), 302 (Found), 307 (Temporary Redirect), 308 (Permanent Redirect with method preservation)
      required: true,
      default: 301,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Redirection || mongoose.model('Redirection', redirectionSchema);

import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    width: { type: Number, required: true, default: 1200 },
    height: { type: Number, required: true, default: 630 },
    alt: { type: String, required: true },
    type: {
      type: String,
      required: true,
      enum: ['image/jpeg', 'image/png', 'image/webp'],
      default: 'image/jpeg',
    },
  },
  { _id: false }
);

const dynamicMetaSchema = new mongoose.Schema({
  pageUrl: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  keywords: [{ type: String }],
  openGraph: {
    title: String,
    description: String,
    images: [imageSchema],
    url: String
  },
  twitter: {
    title: String,
    description: String,
    images: [String]
  },
  robots: {
    index: { type: Boolean, default: false },
    follow: { type: Boolean, default: false },
    nocache: { type: Boolean, default: false },
    googleBot: {
      index: { type: Boolean, default: false },
      follow: { type: Boolean, default: false },
      noimageindex: { type: Boolean, default: false },
      'max-video-preview': { type: Number, default: -1 },
      'max-image-preview': { type: String, default: 'large' },
      'max-snippet': { type: Number, default: -1 },
    },
  },
  other: {
    classification: String
  },
  alternates: {
    canonical: String
  }
}, { timestamps: true, versionKey: false });

export default mongoose.models.DynamicMeta || mongoose.model('DynamicMeta', dynamicMetaSchema);

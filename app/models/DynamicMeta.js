import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  alt: { type: String, required: true },
  type: { type: String, required: true }
}, { _id: false });

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
    index: Boolean,
    follow: Boolean,
    nocache: Boolean,
    googleBot: {
      index: Boolean,
      follow: Boolean,
      noimageindex: Boolean,
      'max-video-preview': Number,
      'max-image-preview': String,
      'max-snippet': Number
    }
  },
  other: {
    classification: String
  },
  alternates: {
    canonical: String
  }
}, { timestamps: true, versionKey: false });

export default mongoose.models.DynamicMeta || mongoose.model('DynamicMeta', dynamicMetaSchema);

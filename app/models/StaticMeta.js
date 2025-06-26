import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  alt: { type: String, required: true },
  type: { type: String, required: true },
}, { _id: false });

const staticMetaSchema = new mongoose.Schema({
  creator: { type: String, required: true },
  publisher: { type: String, required: true },
  applicationName: { type: String, required: true },
  verification: {
    google: { type: String, required: true },
    microsoft: { type: String, required: true },
    other: {
      fb: { type: String, required: true },
    },
  },
  appleWebApp: {
    title: { type: String, required: true },
    statusBarStyle: { type: String, required: true },
    capable: { type: Boolean, required: true },
    startupImage: {
      mainImageUrl: { type: String, required: true },
      url: { type: String, required: true },
    },
  },
  icons: {
    icon: [{ url: { type: String, required: true }, sizes: { type: String, required: true } }],
    shortcut: { type: String, required: true },
    apple: { type: String, required: true },
    other: [{ rel: { type: String, required: true }, url: { type: String, required: true }, color: String }],
  },
  generator: { type: String, required: true },
  formatDetection: {
    email: { type: Boolean, required: true },
    address: { type: Boolean, required: true },
    telephone: { type: Boolean, required: true },
  },
  pinterest: {
    richPin: { type: Boolean, required: true },
  },
  category: { type: String, required: true },
  twitter: {
    site: { type: String, required: true },
    creator: { type: String, required: true },
    images: [{ type: String, required: true }],
  },
  openGraph: {
    url: { type: String, required: true },
    siteName: { type: String, required: true },
    locale: { type: String, required: true },
    type: { type: String, required: true },
    images: [imageSchema],
  },
  authors: [{ name: { type: String, required: true }, url: String }],
  keywords: [{ type: String, required: true }],
  description: { type: String, required: true },
  title: {
    default: { type: String, required: true },
  },
}, { timestamps: true, versionKey: false });

export default mongoose.models.StaticMeta || mongoose.model('StaticMeta', staticMetaSchema);

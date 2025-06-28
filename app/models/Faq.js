import mongoose from 'mongoose';

const qaSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { _id: false }
);

const faqSchema = new mongoose.Schema(
  {
    pageUrl: { type: String, required: true, unique: true },
    faqs: { type: [qaSchema], default: [] },
    created_date: { type: Date, default: Date.now },
    modified_date: { type: Date, default: Date.now },
  },
  {
    timestamps: { createdAt: 'created_date', updatedAt: 'modified_date' },
  }
);

export default mongoose.models.Faq || mongoose.model('Faq', faqSchema);

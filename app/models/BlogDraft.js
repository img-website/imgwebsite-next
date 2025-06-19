import mongoose from 'mongoose';

const blogDraftSchema = new mongoose.Schema(
  {
    blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', default: null },
    slug: { type: String, index: true, unique: true }
  },
  {
    strict: false,
    timestamps: { createdAt: 'created_date', updatedAt: 'modified_date' }
  }
);

const BlogDraft = mongoose.models.BlogDraft || mongoose.model('BlogDraft', blogDraftSchema);

export default BlogDraft;

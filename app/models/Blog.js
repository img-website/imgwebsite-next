import mongoose from 'mongoose';
import slugify from 'slugify';

const blogSchema = new mongoose.Schema({
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  title: {
    type: String,
    required: [true, 'Blog title is required'],
    trim: true,
    maxlength: [200, 'Title cannot be more than 200 characters'],
    unique: true
  },
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
  blogWrittenDate: { type: Date, default: Date.now },
  slug: { type: String, unique: true, index: true },
  shortDescription: {
    type: String,
    required: [true, 'Blog short description is required'],
    maxlength: [500, 'Short description cannot be more than 500 characters']
  },
  description: { type: String, required: [true, 'Blog description is required'] },
  banner: { type: String },
  thumbnail: { type: String },
  imageAlt: { type: String },
  xImage: { type: String },
  xImageAlt: { type: String },
  ogImage: { type: String },
  ogImageAlt: { type: String },
  metaTitle: { type: String },
  metaKeyword: { type: String },
  metaDescription: { type: String },
  metaOgDescription: { type: String },
  metaOgTitle: { type: String },
  metaXTitle: { type: String },
  metaXDescription: { type: String },
  commentShowStatus: { type: Boolean, default: true },
  status: { type: String, enum: ['draft', 'published', 'archived'], default: 'draft' },
  publishedDateTime: { type: Date },
  faq: { type: String },
  bgColor: { type: String },
  bgColorStatus: { type: Boolean, default: false },
  createdDate: { type: Date, default: Date.now },
  modifiedDate: { type: Date, default: Date.now }
}, {
  timestamps: { createdAt: 'createdDate', updatedAt: 'modifiedDate' }
});

blogSchema.pre('save', function(next) {
  if (this.isModified('title')) {
    const baseSlug = slugify(this.title, { lower: true, strict: true, trim: true });
    this.slug = `${baseSlug}-${Date.now().toString().slice(-4)}`;
  }
  next();
});

blogSchema.index({
  title: 'text',
  description: 'text',
  shortDescription: 'text'
});

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);
export default Blog;

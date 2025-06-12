import mongoose from 'mongoose';
import slugify from 'slugify';

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Blog title is required'],
    trim: true,
    maxlength: [200, 'Title cannot be more than 200 characters'],
    unique: true
  },
  slug: {
    type: String,
    unique: true,
    index: true
  },
  content: {
    type: String,
    required: [true, 'Blog content is required']
  },
  excerpt: {
    type: String,
    required: [true, 'Blog excerpt is required'],
    maxlength: [500, 'Excerpt cannot be more than 500 characters']
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: [true, 'Blog author is required']
  },
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }],
  tags: [{
    type: String,
    trim: true
  }],
  featured_image: {
    type: String,
    required: [true, 'Featured image is required']
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  meta_title: {
    type: String,
    required: [true, 'Meta title is required'],
    maxlength: [60, 'Meta title cannot be more than 60 characters']
  },
  meta_description: {
    type: String,
    required: [true, 'Meta description is required'],
    maxlength: [160, 'Meta description cannot be more than 160 characters']
  },
  views: {
    type: Number,
    default: 0
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  modified_date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: { 
    createdAt: 'created_date',
    updatedAt: 'modified_date'
  }
});

// Generate slug before saving
blogSchema.pre('save', function(next) {
  if (this.isModified('title')) {
    // Create base slug from title
    let baseSlug = slugify(this.title, { 
      lower: true,
      strict: true,
      trim: true
    });
    
    // Add timestamp to ensure uniqueness
    this.slug = `${baseSlug}-${Date.now().toString().slice(-4)}`;
  }
  next();
});

// Index for search functionality
blogSchema.index({ 
  title: 'text', 
  content: 'text',
  excerpt: 'text'
});

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default Blog;

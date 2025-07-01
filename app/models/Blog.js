import mongoose from 'mongoose';
import slugify from 'slugify';

const blogSchema = new mongoose.Schema(
  {
    status: {
      type: Number,
      enum: [1, 2, 3, 4], // 1=draft, 2=published, 3=archived
      default: 1,
      index: true // allow efficient queries by status
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: function() { return this.status !== 1; },
      index: true // index for faster lookups by category
    },
    title: {
      type: String,
      required: function() { return this.status !== 1; },
      trim: true,
      maxlength: [200, 'Title cannot be more than 200 characters']
      // unique: true // removed, handled by custom logic if needed
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Author',
      required: function() { return this.status !== 1; },
      index: true // speed up queries filtering by author
    },
    blog_written_date: {
      type: Date,
      required: function() { return this.status !== 1; }
    },
    slug: {
      type: String,
      unique: false, // Unique check handled in pre-validate hook for status 2/3/4 only
      index: function() { return this.status !== 1; },
      required: function() { return this.status !== 1; }
    },
    short_description: {
      type: String,
      required: function() { return this.status !== 1; },
      maxlength: [500, 'Short description cannot be more than 500 characters']
    },
    description: {
      type: String,
      required: function() { return this.status !== 1; }
    },
    banner: {
      type: String,
      // required: function() { return this.status !== 1; }
    },
    thumbnail: {
      type: String,
      // required: function() { return this.status !== 1; }
    },
    image_alt: {
      type: String,
      required: function() { return this.status !== 1; }
    },
    x_image: {
      type: String,
      // required: function() { return this.status !== 1; }
    },
    x_image_alt: {
      type: String,
      required: function() { return this.status !== 1; }
    },
    og_image: {
      type: String,
      // required: function() { return this.status !== 1; }
    },
    og_image_alt: {
      type: String,
      required: function() { return this.status !== 1; }
    },
    meta_title: {
      type: String,
      required: function() { return this.status !== 1; },
    },
    meta_keyword: {
      type: [String],
      required: function() { return this.status !== 1; },
    },
    meta_description: {
      type: String,
      required: function() { return this.status !== 1; },
    },
    meta_og_title: {
      type: String,
      required: function() { return this.status !== 1; },
    },
    meta_og_description: {
      type: String,
      required: function() { return this.status !== 1; },
    },
    meta_x_title:  {
      type: String,
      required: function() { return this.status !== 1; },
    },
    meta_x_description: {
      type: String,
      required: function() { return this.status !== 1; },
    },
    faqs: [
      {
        question: String,
        answer: String
      }
    ],
    published_date_time: Date,
    bg_color_status: {
      type: Boolean,
      default: false
    },
    bg_color: String,
    created_date: {
      type: Date,
      default: Date.now
    },
    modified_date: {
      type: Date,
      default: Date.now
    },
  },
  {
    timestamps: {
      createdAt: 'created_date',
      updatedAt: 'modified_date'
    }
  }
);

blogSchema.pre('validate', async function (next) {
  if (this.isModified('slug')) {
    this.slug = slugify(this.slug, { lower: true, strict: true, trim: true });
    // Only check uniqueness for published/archived/archived
    if (this.status === 2 || this.status === 3 || this.status === 4) {
      const existing = await mongoose.models.Blog.findOne({
        slug: this.slug,
        _id: { $ne: this._id }
      });
      if (existing) {
        this.invalidate('slug', 'Slug must be unique');
      }
    }
  }
  next();
});


// Compound text index for search capability
blogSchema.index({ title: 'text', short_description: 'text', description: 'text' });

// Single field indexes to optimize filtering queries
blogSchema.index({ status: 1 });
blogSchema.index({ author: 1 });
blogSchema.index({ category: 1 });

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

// Ensure all indexes are created when the model is compiled
Blog.init().catch((err) => {
  console.error('Blog index creation failed:', err);
});

export default Blog;

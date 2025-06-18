import mongoose from 'mongoose';
import slugify from 'slugify';

const blogSchema = new mongoose.Schema(
  {
    status: {
      type: Number,
      enum: [1, 2, 3], // 1=draft, 2=published, 3=archived
      default: 1
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: [true, 'Blog category is required']
    },
    title: {
      type: String,
      required: [true, 'Blog title is required'],
      trim: true,
      maxlength: [200, 'Title cannot be more than 200 characters'],
      unique: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Author',
      required: [true, 'Blog author is required']
    },
    blog_written_date: {
      type: Date,
      required: [true, 'Blog written date is required']
    },
    slug: {
      type: String,
      unique: true,
      index: true,
      required: true
    },
    short_description: {
      type: String,
      required: [true, 'Blog short description is required'],
      maxlength: [500, 'Short description cannot be more than 500 characters']
    },
    description: {
      type: String,
      required: [true, 'Blog description is required']
    },
    banner: {
      type: String,
      required: [true, 'Banner image is required']
    },
    thumbnail: {
      type: String,
      required: [true, 'Thumbnail image is required']
    },
    image_alt: {
      type: String
    },
    x_image: {
      type: String
    },
    x_image_alt: {
      type: String
    },
    og_image: {
      type: String
    },
    og_image_alt: {
      type: String
    },
    meta_title: {
      type: String
    },
    meta_keyword: [String],
    meta_description: {
      type: String
    },
    meta_og_title: String,
    meta_og_description: String,
    meta_x_title: String,
    meta_x_description: String,
    comment_show_status: {
      type: Boolean,
      default: true
    },
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
    }
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

    const existing = await mongoose.models.Blog.findOne({
      slug: this.slug,
      _id: { $ne: this._id }
    });

    if (existing) {
      this.invalidate('slug', 'Slug must be unique');
    }
  }
  next();
});


blogSchema.index({ title: 'text', short_description: 'text', description: 'text' });

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default Blog;

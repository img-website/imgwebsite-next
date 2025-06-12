import mongoose from 'mongoose';
import slugify from 'slugify';

const authorSchema = new mongoose.Schema({
  status: {
    type: Number,
    enum: [1, 2, 3],
    default: 1
  },
  deleted_at: {
    type: Date,
    default: null
  },
  author_name: {
    type: String,
    required: [true, 'Please provide author name'],
    trim: true,
    maxlength: [100, 'Author name cannot be more than 100 characters'],
    unique: true
  },
  slug: {
    type: String,
    unique: true,
    index: true,
    required: true // Make slug required
  },
  description: {
    type: String,
    required: [true, 'Please provide author description'],
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  linkedin_link: {
    type: String,
    validate: {
      validator: function(v) {
        if (!v) return true; // Optional field
        return /^https?:\/\/(www\.)?linkedin\.com\/.+/.test(v);
      },
      message: 'Please provide a valid LinkedIn URL'
    }
  },
  facebook_link: {
    type: String,
    validate: {
      validator: function(v) {
        if (!v) return true; // Optional field
        return /^https?:\/\/(www\.)?facebook\.com\/.+/.test(v);
      },
      message: 'Please provide a valid Facebook URL'
    }
  },
  twitter_link: {
    type: String,
    validate: {
      validator: function(v) {
        if (!v) return true; // Optional field
        return /^https?:\/\/(www\.)?twitter\.com\/.+/.test(v);
      },
      message: 'Please provide a valid Twitter URL'
    }
  },
  image: {
    type: String,
    required: [true, 'Please provide author image']
  },  blog_count: {
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

// Generate slug from author name before validation
authorSchema.pre('validate', async function(next) {
  if (this.isModified('author_name')) {
    // Create base slug from name
    let baseSlug = slugify(this.author_name, { 
      lower: true,      // Convert to lowercase
      strict: true,     // Remove special characters
      trim: true
    });

    // Check if slug exists
    let slugExists = true;
    let counter = 0;
    let candidateSlug = baseSlug;

    while (slugExists) {
      // Check if this slug already exists (excluding this document if it's an update)
      const existingAuthor = await mongoose.models.Author.findOne({ 
        slug: candidateSlug,
        _id: { $ne: this._id }
      });

      if (!existingAuthor) {
        slugExists = false;
      } else {
        // If slug exists, try with a counter
        counter += 1;
        candidateSlug = `${baseSlug}-${counter}`;
      }
    }

    this.slug = candidateSlug;
  }
  next();
});

// Add text index for search
authorSchema.index({ author_name: 'text', description: 'text' });

// Add after schema definition but before model creation
authorSchema.pre(['find', 'findOne', 'countDocuments'], function() {
  // Handle soft delete in the middleware
  const showDeleted = this.getOptions().showDeleted;
  
  // If showDeleted is not explicitly set to true, exclude soft-deleted items
  if (!showDeleted && !this._conditions.deleted_at) {
    this.where({ deleted_at: null });
  }
});

const Author = mongoose.models.Author || mongoose.model('Author', authorSchema);

export default Author;

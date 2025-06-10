import mongoose from 'mongoose';
import slugify from 'slugify';

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide genre name'],
    trim: true,
    maxlength: [50, 'Genre name cannot be more than 50 characters']
  },
  slug: {
    type: String,
    unique: true,
    index: true
  },
  description: {
    type: String,
    required: [true, 'Please provide genre description'],
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },
  icon: {
    type: String,
    validate: {
      validator: function(v) {
        if (!v) return true; // Optional field
        return /^https?:\/\/.+\..+/.test(v);
      },
      message: 'Please provide a valid URL for icon'
    }
  },
  // SEO Fields
  meta_title: {
    type: String,
    required: [true, 'Please provide meta title'],
    maxlength: [60, 'Meta title cannot be more than 60 characters']
  },
  meta_description: {
    type: String,
    required: [true, 'Please provide meta description'],
    maxlength: [160, 'Meta description cannot be more than 160 characters']
  },
  keywords: [{
    type: String,
    trim: true
  }],
  // Optional: Multi-language support
  translations: {
    type: Map,
    of: String,
    default: {}
  }
}, {
  timestamps: true
});

// Auto-generate slug from name before saving
genreSchema.pre('save', function(next) {
  if (!this.isModified('name')) {
    return next();
  }
  
  this.slug = slugify(this.name, {
    lower: true,
    strict: true,
    trim: true
  });
  next();
});

// Add index for search functionality
genreSchema.index({ name: 'text', slug: 'text' });

const Genre = mongoose.models.Genre || mongoose.model('Genre', genreSchema);

export default Genre; 
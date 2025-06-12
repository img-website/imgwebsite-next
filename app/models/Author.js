import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
  author_name: {
    type: String,
    required: [true, 'Please provide author name'],
    trim: true,
    maxlength: [100, 'Author name cannot be more than 100 characters']
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
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
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

const Author = mongoose.models.Author || mongoose.model('Author', authorSchema);

export default Author;

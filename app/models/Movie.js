import mongoose from 'mongoose';
import Fuse from 'fuse.js';

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  slug: {
    type: String,
    unique: true,
    index: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  },
  releaseDate: {
    type: Date,
    required: [true, 'Release date is required']
  },
  duration: {
    type: Number,
    required: [true, 'Duration is required']
  },
  rating: {
    type: Number,
    default: 0
  },
  genres: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Genre'
  }],
  director: {
    type: String,
    required: [true, 'Director is required'],
    trim: true
  },
  cast: [{
    name: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    }
  }],
  posterImage: {
    type: String,
    required: [true, 'Poster image is required']
  },
  bannerImage: {
    type: String,
    required: [true, 'Banner image is required']
  },
  trailerUrl: {
    type: String,
    required: [true, 'Trailer URL is required']
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },
  metaTitle: {
    type: String,
    trim: true
  },
  metaDescription: {
    type: String,
    trim: true
  },
  keywords: {
    type: String,
    trim: true
  },
  translations: {
    type: Map,
    of: {
      title: String,
      description: String
    }
  }
}, { timestamps: true });

// Generate slug from title before saving
movieSchema.pre('save', function(next) {
  if (!this.isModified('title')) return next();
  
  this.slug = this.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  
  next();
});

// Add virtual fields
movieSchema.virtual('formattedDuration').get(function() {
  const hours = Math.floor(this.duration / 60);
  const minutes = this.duration % 60;
  return `${hours}h ${minutes}m`;
});

// Create the model
const Movie = mongoose.models.Movie || mongoose.model('Movie', movieSchema);

// Add search method to the model
Movie.searchMovies = async function(searchTerm, options = {}) {
  // Get all active movies
  const movies = await this.find({ status: 'active' })
    .populate('genres', 'name slug')
    .lean();

  // Configure Fuse.js options
  const fuseOptions = {
    keys: [
      { name: 'title', weight: 0.7 },
      { name: 'description', weight: 0.3 },
      { name: 'director', weight: 0.5 },
      { name: 'cast.name', weight: 0.4 },
      { name: 'translations.title', weight: 0.6 },
      { name: 'translations.description', weight: 0.2 }
    ],
    threshold: 0.3,
    includeScore: true,
    ...options
  };

  // Create Fuse instance
  const fuse = new Fuse(movies, fuseOptions);

  // Perform search
  const results = fuse.search(searchTerm);

  // Return only the items
  return results.map(result => result.item);
};

export default Movie; 
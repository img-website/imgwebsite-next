import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Movie from '@/app/models/Movie';
import Genre from '@/app/models/Genre';
import { verifyToken, extractToken } from '@/app/lib/auth';
import { uploadMovieImage } from '@/app/middleware/imageUpload';

/**
 * @route POST /api/v1/movies
 * @desc Add a new movie
 * @access Private (Admin only)
 */
export async function POST(req) {
  try {
    // Verify admin token
    const token = extractToken(req.headers);
    if (!token) {
      return NextResponse.json({
        success: false,
        error: 'Authentication required'
      }, { status: 401 });
    }

    const decoded = verifyToken(token);
    if (!decoded || decoded.role !== 'admin') {
      return NextResponse.json({
        success: false,
        error: 'Admin access required'
      }, { status: 403 });
    }

    await connectDB();

    const formData = await req.formData();
    
    // Upload poster image
    const posterResult = await uploadMovieImage(formData, 'poster');
    if (!posterResult.success) {
      return NextResponse.json({
        success: false,
        error: posterResult.error
      }, { status: 400 });
    }

    // Upload banner image
    const bannerResult = await uploadMovieImage(formData, 'banner');
    if (!bannerResult.success) {
      return NextResponse.json({
        success: false,
        error: bannerResult.error
      }, { status: 400 });
    }

    // Extract other data from form
    const data = {
      title: formData.get('title'),
      description: formData.get('description'),
      genres: JSON.parse(formData.get('genres') || '[]'),
      releaseDate: formData.get('releaseDate'),
      duration: parseInt(formData.get('duration')),
      director: formData.get('director'),
      cast: JSON.parse(formData.get('cast') || '[]'),
      trailerUrl: formData.get('trailerUrl'),
      metaTitle: formData.get('metaTitle'),
      metaDescription: formData.get('metaDescription'),
      keywords: formData.get('keywords'),
      translations: JSON.parse(formData.get('translations') || '{}'),
      posterImage: posterResult.imagePath,
      bannerImage: bannerResult.imagePath,
      // Generate initial slug
      slug: formData.get('title')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
    };

    // Validate required fields
    if (!data.title || !data.description || !data.genres.length || !data.releaseDate || 
        !data.duration || !data.director || !data.posterImage || !data.bannerImage || 
        !data.trailerUrl) {
      return NextResponse.json({
        success: false,
        error: 'All required fields must be provided'
      }, { status: 400 });
    }

    // Create movie
    const movie = await Movie.create(data);

    return NextResponse.json({
      success: true,
      data: movie
    }, { status: 201 });

  } catch (error) {

    if (error.code === 11000) {
      return NextResponse.json({
        success: false,
        error: 'Movie with this title already exists'
      }, { status: 400 });
    }

    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return NextResponse.json({
        success: false,
        error: messages.join(', ')
      }, { status: 400 });
    }

    return NextResponse.json({
      success: false,
      error: 'Error adding movie'
    }, { status: 500 });
  }
}

/**
 * @route GET /api/v1/movies
 * @desc Get all movies
 * @access Public
 */
export async function GET(req) {
  try {
    await connectDB();

    // Get query parameters
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const genre = searchParams.get('genre');
    const year = searchParams.get('year');
    const rating = searchParams.get('rating');
    const sortBy = searchParams.get('sortBy') || 'createdAt';
    const sortOrder = parseInt(searchParams.get('sortOrder')) || -1;
    const search = searchParams.get('search');

    // Build query
    const query = { status: 'active' };

    // Add genre filter if provided
    if (genre) {
      const genreDoc = await Genre.findOne({ name: { $regex: new RegExp(genre, 'i') } });
      if (genreDoc) {
        query.genres = genreDoc._id;
      }
    }

    // Add year filter if provided
    if (year) {
      const startDate = new Date(year, 0, 1);
      const endDate = new Date(parseInt(year) + 1, 0, 1);
      query.releaseDate = { $gte: startDate, $lt: endDate };
    }

    // Add rating filter if provided
    if (rating) {
      query.rating = { $gte: parseFloat(rating) };
    }

    // Get movies with pagination
    let movies;
    if (search) {
      // Use Fuse.js search
      const allMovies = await Movie.searchMovies(search, {
        threshold: 0.3, // Lower threshold for more results
        ignoreLocation: true, // Search anywhere in the text
        minMatchCharLength: 2 // Minimum characters to match
      });

      // Apply other filters
      movies = allMovies.filter(movie => {
        if (genre && !movie.genres.some(g => g._id.toString() === query.genres.toString())) {
          return false;
        }
        if (year) {
          const movieYear = new Date(movie.releaseDate).getFullYear();
          if (movieYear !== parseInt(year)) return false;
        }
        if (rating && movie.rating < parseFloat(rating)) {
          return false;
        }
        return true;
      });

      // Apply pagination
      movies = movies.slice((page - 1) * limit, page * limit);
    } else {
      // Normal query if no search term
      movies = await Movie.find(query)
        .sort({ [sortBy]: sortOrder })
        .skip((page - 1) * limit)
        .limit(limit)
        .populate('genres', 'name slug')
        .lean();
    }

    return NextResponse.json({
      success: true,
      data: movies,
      pagination: {
        total: search ? movies.length : await Movie.countDocuments(query),
        page,
        limit,
        totalPages: Math.ceil((search ? movies.length : await Movie.countDocuments(query)) / limit)
      }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
} 
import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Movie from '@/app/models/Movie';
import Genre from '@/app/models/Genre';
import { verifyToken, extractToken } from '@/app/lib/auth';
import { uploadMovieImage } from '@/app/middleware/imageUpload';

/**
 * @route GET /api/v1/movies/:id
 * @desc Get movie details
 * @access Public
 */
export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = params;
    const movie = await Movie.findById(id).populate('genres', 'name slug');

    if (!movie) {
      return NextResponse.json({
        success: false,
        error: 'Movie not found'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: movie
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Error fetching movie'
    }, { status: 500 });
  }
}

/**
 * @route PUT /api/v1/admin/movies/:id
 * @desc Update movie
 * @access Private (Admin only)
 */
export async function PUT(req, { params }) {
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

    const { id } = params;
    const formData = await req.formData();
    
    // Upload poster image if provided
    let posterImage = null;
    if (formData.has('posterImage')) {
      const posterResult = await uploadMovieImage(formData, 'poster');
      if (!posterResult.success) {
        return NextResponse.json({
          success: false,
          error: posterResult.error
        }, { status: 400 });
      }
      posterImage = posterResult.imagePath;
    }

    // Upload banner image if provided
    let bannerImage = null;
    if (formData.has('bannerImage')) {
      const bannerResult = await uploadMovieImage(formData, 'banner');
      if (!bannerResult.success) {
        return NextResponse.json({
          success: false,
          error: bannerResult.error
        }, { status: 400 });
      }
      bannerImage = bannerResult.imagePath;
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
      translations: JSON.parse(formData.get('translations') || '{}')
    };

    // Add image paths if they were uploaded
    if (posterImage) data.posterImage = posterImage;
    if (bannerImage) data.bannerImage = bannerImage;

    // Find movie
    const movie = await Movie.findById(id);
    if (!movie) {
      return NextResponse.json({
        success: false,
        error: 'Movie not found'
      }, { status: 404 });
    }

    // Check if any values have actually changed
    let hasChanges = false;
    const changes = {};

    // Check each field for changes
    const fieldsToCheck = [
      'title', 'description', 'genres', 'releaseDate', 'duration',
      'director', 'cast', 'trailerUrl', 'metaTitle', 'metaDescription',
      'keywords', 'translations'
    ];

    for (const field of fieldsToCheck) {
      if (data[field] !== undefined && JSON.stringify(data[field]) !== JSON.stringify(movie[field])) {
        hasChanges = true;
        changes[field] = data[field];
      }
    }

    // Check image changes
    if (posterImage && posterImage !== movie.posterImage) {
      hasChanges = true;
      changes.posterImage = posterImage;
    }
    if (bannerImage && bannerImage !== movie.bannerImage) {
      hasChanges = true;
      changes.bannerImage = bannerImage;
    }

    // If no changes, return early
    if (!hasChanges) {
      return NextResponse.json({
        success: true,
        message: 'No changes detected',
        data: movie
      });
    }

    // Update movie with only changed fields
    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      { $set: changes },
      { new: true, runValidators: true }
    ).populate('genres', 'name slug');

    return NextResponse.json({
      success: true,
      data: updatedMovie
    });

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
      error: 'Error updating movie'
    }, { status: 500 });
  }
}

/**
 * @route DELETE /api/v1/movies/:id
 * @desc Delete movie
 * @access Private (Admin only)
 */
export async function DELETE(req, { params }) {
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

    const { id } = params;
    const { searchParams } = new URL(req.url);
    const force = searchParams.get('force') === 'true';

    // Find movie
    const movie = await Movie.findById(id);
    if (!movie) {
      return NextResponse.json({
        success: false,
        error: 'Movie not found'
      }, { status: 404 });
    }

    if (force) {
      // Force delete
      await Movie.findByIdAndDelete(id);
    } else {
      // Soft delete
      movie.status = 'inactive';
      await movie.save();
    }

    return NextResponse.json({
      success: true,
      message: force ? 'Movie deleted successfully' : 'Movie marked as inactive'
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Error deleting movie'
    }, { status: 500 });
  }
} 
import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Genre from '@/app/models/Genre';
import Movie from '@/app/models/Movie';
import { verifyToken, extractToken } from '@/app/lib/auth';

/**
 * @route PUT /api/v1/genres/:id
 * @desc Update a genre
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

    const data = await req.json();
    const { id } = params;

    // Find genre
    const genre = await Genre.findById(id);
    if (!genre) {
      return NextResponse.json({
        success: false,
        error: 'Genre not found'
      }, { status: 404 });
    }

    // Update genre
    // Note: If name is changed, slug will be auto-updated via pre-save hook
    const updatedGenre = await Genre.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true, runValidators: true }
    );

    return NextResponse.json({
      success: true,
      data: updatedGenre
    });

  } catch (error) {
    console.error('Update genre error:', error);

    if (error.code === 11000) {
      return NextResponse.json({
        success: false,
        error: 'Genre with this name already exists'
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
      error: 'Error updating genre'
    }, { status: 500 });
  }
}

/**
 * @route DELETE /api/v1/genres/:id
 * @desc Delete a genre
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

    // Find genre
    const genre = await Genre.findById(id);
    if (!genre) {
      return NextResponse.json({
        success: false,
        error: 'Genre not found'
      }, { status: 404 });
    }

    // Check if any movie is using this genre
    const movieCount = await Movie.countDocuments({ genres: id });
    
    if (movieCount > 0 && !force) {
      // Soft delete by setting status to inactive
      genre.status = 'inactive';
      await genre.save();

      return NextResponse.json({
        success: true,
        message: 'Genre marked as inactive because it is being used by movies',
        data: genre
      });
    }

    // If force delete or no movies using it, delete from DB
    await Genre.findByIdAndDelete(id);

    // If force delete, also update movies to remove this genre
    if (force && movieCount > 0) {
      await Movie.updateMany(
        { genres: id },
        { $pull: { genres: id } }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Genre deleted successfully'
    });

  } catch (error) {
    console.error('Delete genre error:', error);
    return NextResponse.json({
      success: false,
      error: 'Error deleting genre'
    }, { status: 500 });
  }
}

/**
 * @route GET /api/v1/genres/:id
 * @desc Get single genre
 * @access Public
 */
export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = params;

    const genre = await Genre.findById(id).select('-__v');
    if (!genre) {
      return NextResponse.json({
        success: false,
        error: 'Genre not found'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: genre
    });

  } catch (error) {
    console.error('Get genre error:', error);
    return NextResponse.json({
      success: false,
      error: 'Error fetching genre'
    }, { status: 500 });
  }
} 
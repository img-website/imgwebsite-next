import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Genre from '@/app/models/Genre';
import { verifyToken, extractToken } from '@/app/lib/auth';

/**
 * @route POST /api/v1/genres
 * @desc Add a new genre
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

    const data = await req.json();

    // Create new genre
    const genre = await Genre.create(data);

    return NextResponse.json({
      success: true,
      data: genre
    }, { status: 201 });

  } catch (error) {

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
      error: 'Error adding genre'
    }, { status: 500 });
  }
}

/**
 * @route GET /api/v1/genres
 * @desc Get all genres with filters
 * @access Public
 */
export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    
    // Build query
    const query = {};

    // Status filter
    const status = searchParams.get('status');
    if (status && ['active', 'inactive'].includes(status)) {
      query.status = status;
    }

    // Search filter
    const search = searchParams.get('search');
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { slug: { $regex: search, $options: 'i' } }
      ];
    }

    // Get genres
    const genres = await Genre.find(query)
      .select('-__v')
      .sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      count: genres.length,
      data: genres
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Error fetching genres'
    }, { status: 500 });
  }
} 
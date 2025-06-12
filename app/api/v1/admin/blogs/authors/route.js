import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Author from '@/app/models/Author';
import { verifyToken, extractToken } from '@/app/lib/auth';
import { uploadAuthorImage } from '@/app/middleware/imageUpload';

/**
 * @route GET /api/v1/admin/blogs/authors
 * @desc Get all authors
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
        { author_name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    // Sort options
    const sortBy = searchParams.get('sortBy') || 'created_date';
    const sortOrder = parseInt(searchParams.get('sortOrder')) || -1;
    const sortOptions = { [sortBy]: sortOrder };

    // Pagination
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const skip = (page - 1) * limit;

    // Get authors with pagination
    const [authors, total] = await Promise.all([
      Author.find(query)
        .sort(sortOptions)
        .skip(skip)
        .limit(limit)
        .select('-__v'),
      Author.countDocuments(query)
    ]);

    return NextResponse.json({
      success: true,
      data: authors,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Error fetching authors'
    }, { status: 500 });
  }
}

/**
 * @route POST /api/v1/admin/blogs/authors
 * @desc Add a new author
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

    // Upload author image
    let imagePath = formData.get('image');
    if (imagePath && typeof imagePath !== 'string') {
      const imageResult = await uploadAuthorImage(formData.get('image'));
      if (!imageResult.success) {
        return NextResponse.json({
          success: false,
          error: imageResult.error
        }, { status: 400 });
      }
      imagePath = imageResult.imagePath;
    }

    // Create author data object
    const authorData = {
      author_name: formData.get('author_name'),
      description: formData.get('description'),
      linkedin_link: formData.get('linkedin_link'),
      facebook_link: formData.get('facebook_link'),
      twitter_link: formData.get('twitter_link'),
      image: imagePath,
      status: formData.get('status') || 'active'
    };

    // Create new author
    const author = await Author.create(authorData);

    return NextResponse.json({
      success: true,
      data: author
    }, { status: 201 });

  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return NextResponse.json({
        success: false,
        error: messages.join(', ')
      }, { status: 400 });
    }

    return NextResponse.json({
      success: false,
      error: 'Error creating author'
    }, { status: 500 });
  }
}

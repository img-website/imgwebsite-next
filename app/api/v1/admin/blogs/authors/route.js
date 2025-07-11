import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Author, { AUTHOR_STATUS } from '@/app/models/Author';
import Blog from '@/app/models/Blog';
import { verifyToken, extractToken } from '@/app/lib/auth';
import { uploadAuthorImage } from '@/app/middleware/imageUpload';

/**
 * @route GET /api/v1/admin/blogs/authors
 * @desc Get all authors with filters, sorting, and pagination
 * @access Public
 */
export async function GET(request) {
  try {
    await connectDB();
    const searchParams = request.nextUrl.searchParams
    
    // Get all query parameters
    const search = searchParams.get('search');
    const showDeleted = searchParams.get('deleted') === 'true';
    const status = searchParams.get('status');
    const sortBy = searchParams.get('sortBy') || 'created_date';
    const sortOrder = parseInt(searchParams.get('sortOrder')) || -1;
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const skip = (page - 1) * limit;

    // Build base query for filtering
    const baseQuery = {};
    
    // Handle deleted items
    if (!showDeleted) {
      baseQuery.deleted_at = null;
    }

    // Status filter
    if (status) {
      const numericStatus = parseInt(status, 10);
      // Only add status to query if it's a valid value
      if (![1, 2, 3].includes(numericStatus)) {
        return NextResponse.json({
          success: false,
          error: 'Invalid status value. Must be 1 (Active), 2 (Inactive), or 3 (Suspended)'
        }, { status: 400 });
      }
      baseQuery.status = numericStatus;
    }

    const query = { ...baseQuery };
    if (search) {
      const regex = new RegExp(search, 'i');
      query.$or = [
        { author_name: regex },
        { description: regex },
        { slug: regex },
      ];
    }

    const total = await Author.countDocuments(query, { showDeleted });

    const authors = await Author.find(query, null, { showDeleted })
      .select('-__v')
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(limit)
      .lean(); // Using lean for better performance

    // Update blog counts for all authors
    const authorsWithCounts = await Promise.all(authors.map(async (author) => {
      const blogCount = await Blog.countDocuments({ author: author._id, status: 2 });
      return {
        ...author,
        blog_count: blogCount
      };
    }));

    return NextResponse.json({
      success: true,
      data: authorsWithCounts,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error('Error fetching authors:', error);
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
    const token = extractToken(req.headers);
    if (!token) {
      return NextResponse.json({
        success: false,
        error: 'Authentication required'
      }, { status: 401 });
    }

    const decoded = verifyToken(token);
    if (!decoded || (decoded.role !== 'admin' && decoded.role !== 'superadmin')) {
      return NextResponse.json({
        success: false,
        error: 'Admin access required'
      }, { status: 403 });
    }

    await connectDB();
    
    const formData = await req.formData();

    // Check if author with same name exists
    const existingAuthor = await Author.findOne({ 
      author_name: formData.get('author_name')
    });

    if (existingAuthor) {
      return NextResponse.json({
        success: false,
        error: 'Author with this name already exists'
      }, { status: 400 });
    }

    // Upload author image
    const imageFile = formData.get('image');
    if (!imageFile) {
      return NextResponse.json({
        success: false,
        error: 'Author image is required'
      }, { status: 400 });
    }

    const imageResult = await uploadAuthorImage(imageFile);
    if (!imageResult.success) {
      return NextResponse.json({
        success: false,
        error: imageResult.error
      }, { status: 400 });
    }

    // Create author data object with proper numeric status
    const status = Number(formData.get('status')) || 1;
    if (![1, 2, 3].includes(status)) {
      return NextResponse.json({
        success: false,
        error: 'Status must be 1 (Active), 2 (Inactive), or 3 (Suspended)'
      }, { status: 400 });
    }

    const authorData = {
      author_name: formData.get('author_name'),
      description: formData.get('description'),
      linkedin_link: formData.get('linkedin_link'),
      facebook_link: formData.get('facebook_link'),
      twitter_link: formData.get('twitter_link'),
      image: imageResult.filename,
      status: status,
      blog_count: 0
    };

    // Create new author
    const author = await Author.create(authorData);

    return NextResponse.json({
      success: true,
      data: author
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating author:', error);
    if (error.code === 11000) {
      return NextResponse.json({
        success: false,
        error: 'Author with this name already exists'
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
      error: 'Error creating author'
    }, { status: 500 });
  }
}

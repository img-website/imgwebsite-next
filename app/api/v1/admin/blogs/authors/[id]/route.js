import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Author from '@/app/models/Author';
import { verifyToken, extractToken } from '@/app/lib/auth';
import { uploadAuthorImage } from '@/app/middleware/imageUpload';

/**
 * @route GET /api/v1/admin/blogs/authors/:id
 * @desc Get author details
 * @access Public
 */
export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = params;
    const author = await Author.findById(id).select('-__v');

    if (!author) {
      return NextResponse.json({
        success: false,
        error: 'Author not found'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: author
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Error fetching author'
    }, { status: 500 });
  }
}

/**
 * @route PUT /api/v1/admin/blogs/authors/:id
 * @desc Update author
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

    // Find author
    const author = await Author.findById(id);
    if (!author) {
      return NextResponse.json({
        success: false,
        error: 'Author not found'
      }, { status: 404 });
    }

    // Handle image upload if provided
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

    // Update author data
    const updateData = {
      author_name: formData.get('author_name') || author.author_name,
      description: formData.get('description') || author.description,
      linkedin_link: formData.get('linkedin_link') || author.linkedin_link,
      facebook_link: formData.get('facebook_link') || author.facebook_link,
      twitter_link: formData.get('twitter_link') || author.twitter_link,
      status: formData.get('status') || author.status
    };

    // Only update image if new one is provided
    if (imagePath) {
      updateData.image = imagePath;
    }

    // Update modified date
    updateData.modified_date = new Date();

    const updatedAuthor = await Author.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    return NextResponse.json({
      success: true,
      data: updatedAuthor
    });

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
      error: 'Error updating author'
    }, { status: 500 });
  }
}

/**
 * @route DELETE /api/v1/admin/blogs/authors/:id
 * @desc Delete author (soft or hard delete)
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

    // Find author
    const author = await Author.findById(id);
    if (!author) {
      return NextResponse.json({
        success: false,
        error: 'Author not found'
      }, { status: 404 });
    }

    if (force) {
      // Hard delete
      await Author.findByIdAndDelete(id);
      return NextResponse.json({
        success: true,
        message: 'Author permanently deleted'
      });
    } else {
      // Soft delete
      author.status = 'inactive';
      await author.save();
      return NextResponse.json({
        success: true,
        message: 'Author marked as inactive',
        data: author
      });
    }

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Error deleting author'
    }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '@/app/lib/db';
import Author, { AUTHOR_STATUS } from '@/app/models/Author';
import Blog from '@/app/models/Blog';
import { verifyToken, extractToken } from '@/app/lib/auth';
import { uploadAuthorImage } from '@/app/middleware/imageUpload';
import { deleteObject } from '@/lib/s3';

/**
 * @route GET /api/v1/admin/blogs/authors/:id
 * @desc Get author details with blog count
 * @access Public
 */
export async function GET(request, { params }) {
  try {
    await connectDB();

    const { id } = await params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({
        success: false,
        error: 'Invalid author ID'
      }, { status: 400 });
    }    
    
    const searchParams = request.nextUrl.searchParams
    const showDeleted = searchParams.get('deleted') === 'true';

    // Find author, optionally including soft-deleted ones
    const query = { _id: id };
    const options = {};
    if (showDeleted) {
      options.showDeleted = true;
    }
    const author = await Author.findOne(query, null, options).select('-__v');

    if (!author) {
      return NextResponse.json({
        success: false,
        error: 'Author not found'
      }, { status: 404 });
    }

    // Get blog count
    const blogCount = await Blog.countDocuments({ author: id, status: 2 });
    author.blog_count = blogCount;
    await author.save();

    return NextResponse.json({
      success: true,
      data: author
    });

  } catch (error) {
    console.error('Error fetching author:', error);
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
export async function PUT(request, { params }) {
  try {
    // Verify admin token
    const token = extractToken(request.headers);
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
    }    await connectDB();

    const { id } = await params;
    if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
      return NextResponse.json({
        success: false,
        error: 'Invalid author ID format'
      }, { status: 400 });
    }

    const formData = await request.formData();
    if (!formData) {
      return NextResponse.json({
        success: false,
        error: 'No form data provided'
      }, { status: 400 });
    }

    // Find author
    const author = await Author.findById(id);
    if (!author) {
      return NextResponse.json({
        success: false,
        error: 'Author not found'
      }, { status: 404 });
    }

    // Check if new name already exists
    const newName = formData.get('author_name');
    if (newName && newName !== author.author_name) {
      const existingAuthor = await Author.findOne({ 
        author_name: newName,
        _id: { $ne: id }
      });

      if (existingAuthor) {
        return NextResponse.json({
          success: false,
          error: 'Author with this name already exists'
        }, { status: 400 });
      }
    }    // Handle image upload if provided
    let imageName = author.image;
    const imageFile = formData.get('image');
    if (imageFile && typeof imageFile !== 'string') {
      const imageResult = await uploadAuthorImage(imageFile);
      if (!imageResult.success) {
        return NextResponse.json({
          success: false,
          error: imageResult.error
        }, { status: 400 });
      }
      imageName = imageResult.filename;
    }
    
    // Update author data
    const updateData = {
      author_name: newName || author.author_name,
      description: formData.get('description') || author.description,
      linkedin_link: formData.get('linkedin_link') || author.linkedin_link,
      facebook_link: formData.get('facebook_link') || author.facebook_link,
      twitter_link: formData.get('twitter_link') || author.twitter_link,
      status: Number(formData.get('status')) || author.status,
      image: imageName,
      modified_date: new Date()
    };

    const updatedAuthor = await Author.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    // Get current blog count
    const blogCount = await Blog.countDocuments({ author: id, status: 2 });
    updatedAuthor.blog_count = blogCount;
    await updatedAuthor.save();

    return NextResponse.json({
      success: true,
      data: updatedAuthor
    });

  } catch (error) {
    console.error('Error updating author:', error);
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
      error: 'Error updating author'
    }, { status: 500 });
  }
}

/**
 * @route DELETE /api/v1/admin/blogs/authors/:id
 * @desc Delete author (soft or hard delete)
 * @access Private (Admin only)
 */
export async function DELETE(request, { params }) {
  try {
    // Verify admin token
    const token = extractToken(request.headers);
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
    const { id } = await params;
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({
        success: false,
        error: 'Invalid author ID'
      }, { status: 400 });
    }
    const { searchParams } = new URL(request.url);
    const force = searchParams.get('force') === 'true';

    // Check for published blogs before deleting
    const publishedBlogCount = await Blog.countDocuments({ author: id, status: 2 });
    if (publishedBlogCount > 0) {
      return NextResponse.json({
        success: false,
        error: 'Cannot delete author with published blogs.'
      }, { status: 400 });
    }

    // Find author (including soft-deleted ones)
    const author = await Author.findOne(
      { _id: id },
      null,
      { showDeleted: true } // Include soft-deleted authors
    );
    
    if (!author) {
      return NextResponse.json({
        success: false,
        error: 'Author not found'
      }, { status: 404 });
    }    // If force=true, always perform hard delete
    if (force) {
      await Author.findByIdAndDelete(id, { showDeleted: true }); // Include soft-deleted for hard delete
      if (author.image) {
        await deleteObject(`authors/${author.image}`);
      }
      return NextResponse.json({
        success: true,
        message: 'Author has been permanently deleted'
      });
    }

    // If already soft deleted, return success (idempotent)
    if (author.deleted_at) {
      return NextResponse.json({
        success: true,
        message: 'Author is already soft deleted',
        data: author
      });
    }

    // Perform soft delete
    author.deleted_at = new Date();
    await author.save();
    return NextResponse.json({
      success: true,
      message: 'Author has been soft deleted',
      data: author
    });

  } catch (error) {
    console.error('Error deleting author:', error);
    return NextResponse.json({
      success: false,
      error: 'Error deleting author'
    }, { status: 500 });
  }
}

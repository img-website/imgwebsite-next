import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '@/app/lib/db';
import Category from '@/app/models/Category';
import Blog from '@/app/models/Blog';
import { verifyToken, extractToken } from '@/app/lib/auth';

export async function GET(request, { params }) {
  try {
    await connectDB();

    const { id } = await params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: 'Invalid category ID' }, { status: 400 });
    }
    const searchParams = request.nextUrl.searchParams
    const showDeleted = searchParams.get('deleted') === 'true';

    const query = { _id: id };
    const options = {};
    if (showDeleted) {
      options.showDeleted = true;
    }
    const category = await Category.findOne(query, null, options).select('-__v');

    if (!category) {
      return NextResponse.json({ success: false, error: 'Category not found' }, { status: 404 });
    }

    // Always return up-to-date blog_count in GET and save to DB
    const blogCount = await Blog.countDocuments({ category: id, status: 2 });
    category.blog_count = blogCount;
    await category.save();
    const categoryObj = category.toObject();
    return NextResponse.json({ success: true, data: categoryObj });

  } catch (error) {
    console.error('Error fetching category:', error);
    return NextResponse.json({ success: false, error: 'Error fetching category' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const token = extractToken(request.headers);
    if (!token) {
      return NextResponse.json({ success: false, error: 'Authentication required' }, { status: 401 });
    }
    const decoded = verifyToken(token);
    if (!decoded || (decoded.role !== 'admin' && decoded.role !== 'superadmin')) {
      return NextResponse.json({ success: false, error: 'Admin access required' }, { status: 403 });
    }
    await connectDB();

    const { id } = await params;
    if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
      return NextResponse.json({ success: false, error: 'Invalid category ID format' }, { status: 400 });
    }

    const formData = await request.formData();
    if (!formData) {
      return NextResponse.json({ success: false, error: 'No form data provided' }, { status: 400 });
    }

    const category = await Category.findById(id);
    if (!category) {
      return NextResponse.json({ success: false, error: 'Category not found' }, { status: 404 });
    }

    const newName = formData.get('category_name');
    if (newName && newName !== category.category_name) {
      const existingCategory = await Category.findOne({ category_name: newName, _id: { $ne: id } });
      if (existingCategory) {
        return NextResponse.json({ success: false, error: 'Category with this name already exists' }, { status: 400 });
      }
      category.category_name = newName;
    }

    const newDescription = formData.get('description');
    if (newDescription !== null) {
      category.description = newDescription;
    }

    const status = Number(formData.get('status'));
    if ([1, 2, 3].includes(status)) {
      category.status = status;
    }

    category.modified_date = new Date();
    await category.save();

    const blogCount = await Blog.countDocuments({ category: id, status: 2 });
    category.blog_count = blogCount;
    await category.save();

    return NextResponse.json({ success: true, data: category });

  } catch (error) {
    console.error('Error updating category:', error);
    if (error.code === 11000) {
      return NextResponse.json({ success: false, error: 'Category with this name already exists' }, { status: 400 });
    }
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return NextResponse.json({ success: false, error: messages.join(', ') }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: 'Error updating category' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const token = extractToken(request.headers);
    if (!token) {
      return NextResponse.json({ success: false, error: 'Authentication required' }, { status: 401 });
    }
    const decoded = verifyToken(token);
    if (!decoded || (decoded.role !== 'admin' && decoded.role !== 'superadmin')) {
      return NextResponse.json({ success: false, error: 'Admin access required' }, { status: 403 });
    }

    await connectDB();
    const { id } = await params;
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: 'Invalid category ID' }, { status: 400 });
    }
    const searchParams = request.nextUrl.searchParams
    const force = searchParams.get('force') === 'true';

    // Prevent deletion if category has published blogs
    const blogCount = await Blog.countDocuments({ categories: id, status: 2 });
    if (blogCount > 0) {
      return NextResponse.json({
        success: false,
        error: 'Cannot delete category with published blogs.'
      }, { status: 400 });
    }

    const category = await Category.findOne({ _id: id }, null, { showDeleted: true });
    if (!category) {
      return NextResponse.json({ success: false, error: 'Category not found' }, { status: 404 });
    }
    if (force) {
      await Category.findByIdAndDelete(id, { showDeleted: true });
      return NextResponse.json({ success: true, message: 'Category has been permanently deleted' });
    }
    if (category.deleted_at) {
      return NextResponse.json({ success: true, message: 'Category is already soft deleted', data: category });
    }
    category.deleted_at = new Date();
    await category.save();
    return NextResponse.json({ success: true, message: 'Category has been soft deleted', data: category });
  } catch (error) {
    console.error('Error deleting category:', error);
    return NextResponse.json({ success: false, error: 'Error deleting category' }, { status: 500 });
  }
}

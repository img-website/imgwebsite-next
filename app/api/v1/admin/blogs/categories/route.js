import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Category from '@/app/models/Category';
import Blog from '@/app/models/Blog';
import Fuse from 'fuse.js';
import { verifyToken, extractToken } from '@/app/lib/auth';

export async function GET(request) {
  try {
    await connectDB();
    const searchParams = request.nextUrl.searchParams

    const search = searchParams.get('search');
    const showDeleted = searchParams.get('deleted') === 'true';
    const status = searchParams.get('status');
    const sortBy = searchParams.get('sortBy') || 'created_date';
    const sortOrder = parseInt(searchParams.get('sortOrder')) || -1;
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const skip = (page - 1) * limit;

    const baseQuery = {};
    if (!showDeleted) {
      baseQuery.deleted_at = null;
    }
    if (status) {
      const numericStatus = parseInt(status, 10);
      if (![1, 2, 3].includes(numericStatus)) {
        return NextResponse.json({
          success: false,
          error: 'Invalid status value. Must be 1 (Active), 2 (Inactive), or 3 (Suspended)'
        }, { status: 400 });
      }
      baseQuery.status = numericStatus;
    }

    let allCategories = await Category.find(baseQuery, null, { showDeleted })
      .select('-__v')
      .lean();

    if (search) {
      const fuseOptions = {
        keys: ['category_name', 'description', 'slug'],
        threshold: 0.3,
        includeScore: true
      };
      const fuse = new Fuse(allCategories, fuseOptions);
      const searchResults = fuse.search(search);
      allCategories = searchResults.map(result => result.item);
    }

    const total = allCategories.length;

    if (sortBy) {
      allCategories.sort((a, b) => {
        const aValue = a[sortBy];
        const bValue = b[sortBy];
        return sortOrder * (aValue > bValue ? 1 : -1);
      });
    }

    const categories = allCategories.slice(skip, skip + limit);

    const categoriesWithCounts = await Promise.all(categories.map(async (cat) => {
      const blogCount = await Blog.countDocuments({ categories: cat._id, status: 2 });
      return { ...cat, blog_count: blogCount };
    }));

    return NextResponse.json({
      success: true,
      data: categoriesWithCounts,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json({ success: false, error: 'Error fetching categories' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const token = extractToken(req.headers);
    if (!token) {
      return NextResponse.json({ success: false, error: 'Authentication required' }, { status: 401 });
    }
    const decoded = verifyToken(token);
    if (!decoded || (decoded.role !== 'admin' && decoded.role !== 'superadmin')) {
      return NextResponse.json({ success: false, error: 'Admin access required' }, { status: 403 });
    }

    await connectDB();

    const formData = await req.formData();

    const existingCategory = await Category.findOne({ category_name: formData.get('category_name') });
    if (existingCategory) {
      return NextResponse.json({ success: false, error: 'Category with this name already exists' }, { status: 400 });
    }

    const status = Number(formData.get('status')) || 1;
    if (![1, 2, 3].includes(status)) {
      return NextResponse.json({ success: false, error: 'Status must be 1 (Active), 2 (Inactive), or 3 (Suspended)' }, { status: 400 });
    }

    const categoryData = {
      category_name: formData.get('category_name'),
      description: formData.get('description'),
      status: status
    };

    const category = await Category.create(categoryData);

    return NextResponse.json({ success: true, data: category }, { status: 201 });

  } catch (error) {
    console.error('Error creating category:', error);
    if (error.code === 11000) {
      return NextResponse.json({ success: false, error: 'Category with this name already exists' }, { status: 400 });
    }
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return NextResponse.json({ success: false, error: messages.join(', ') }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: 'Error creating category' }, { status: 500 });
  }
}

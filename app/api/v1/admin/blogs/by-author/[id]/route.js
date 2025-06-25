// API route: /api/v1/admin/blogs/by-author/[id]/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Blog from '@/app/models/Blog';

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    if (!id) {
      return NextResponse.json({ success: false, error: 'Author ID required' }, { status: 400 });
    }
    // Only published blogs
    const blogs = await Blog.find({ author: id, status: 2 }).select('title slug');
    return NextResponse.json({ success: true, message: 'Blogs fetched successfully', data: blogs });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error fetching blogs' }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '@/app/lib/db';
import Blog from '@/app/models/Blog';
import { verifyToken, extractToken } from '@/app/lib/auth';
import { sendNotification } from '@/app/actions/pwa';

export async function POST(request, { params }) {
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
      return NextResponse.json({ success: false, error: 'Invalid blog ID' }, { status: 400 });
    }

    const blog = await Blog.findById(id).lean();
    if (!blog) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }

    if (blog.status !== 2) {
      return NextResponse.json({ success: false, error: 'Only published blogs can be notified' }, { status: 400 });
    }

    const icon = blog.banner
      ? (blog.banner.startsWith('http')
          ? blog.banner
          : `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/blogs/${blog.banner}`)
      : undefined;
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${blog.slug}`;

    await sendNotification(blog.short_description, blog.title, icon, url);
    return NextResponse.json({ success: true, message: 'Notification sent' });
  } catch (error) {
    console.error('Error sending notification:', error);
    return NextResponse.json({ success: false, error: 'Error sending notification' }, { status: 500 });
  }
}

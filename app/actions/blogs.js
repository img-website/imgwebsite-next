'use server';

import connectDB from '@/app/lib/db';
import Blog from '@/app/models/Blog';

export async function getBlogs() {
  try {
    await connectDB();
    const blogs = await Blog.find({}, 'title banner status created_date slug').lean();
    return blogs.map(b => ({
      ...b,
      _id: b._id.toString(),
    }));
  } catch (err) {
    console.error('Error fetching blogs:', err);
    return [];
  }
}

'use server';

import connectDB from '@/app/lib/db';
import Blog from '@/app/models/Blog';

export async function getBlogs() {
  await connectDB();
  const blogs = await Blog.find()
    .select('title status created_date slug banner')
    .lean();
  return blogs.map((b) => ({
    id: b._id.toString(),
    title: b.title,
    status: b.status,
    created_date: b.created_date,
    slug: b.slug,
    banner: b.banner,
  }));
}

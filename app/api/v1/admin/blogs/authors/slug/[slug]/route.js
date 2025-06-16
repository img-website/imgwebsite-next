import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Author from '@/app/models/Author';
import Blog from '@/app/models/Blog';

export async function GET(request, { params }) {
  try {
    await connectDB();
    const slug = params.slug;
    const { searchParams } = new URL(request.url);
    const showDeleted = searchParams.get('deleted') === 'true';

    const query = { slug };
    if (showDeleted) {
      query.showDeleted = true;
    }
    const author = await Author.findOne(query).select('-__v');
    if (!author) {
      return NextResponse.json({ success: false, error: 'Author not found' }, { status: 404 });
    }

    const blogCount = await Blog.countDocuments({ author: author._id, status: 'published' });
    author.blog_count = blogCount;
    await author.save();

    return NextResponse.json({ success: true, data: author });
  } catch (error) {
    console.error('Error fetching author:', error);
    return NextResponse.json({ success: false, error: 'Error fetching author' }, { status: 500 });
  }
}

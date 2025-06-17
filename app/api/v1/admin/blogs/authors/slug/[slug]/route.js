import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Author from '@/app/models/Author';
import Blog from '@/app/models/Blog';
import slugify from 'slugify';

export async function GET(request, { params }) {
  try {
    await connectDB();
    const slugParam = params.slug;
    const { searchParams } = new URL(request.url);
    const showDeleted = searchParams.get('deleted') === 'true';

    // Try to find author by slug first
    let author = await Author.findOne({ slug: slugParam }, null, { showDeleted }).select('-__v');

    // If not found, attempt slugifying the param or searching by name
    if (!author) {
      const slugCandidate = slugify(slugParam, { lower: true, strict: true, trim: true });
      author = await Author.findOne({ slug: slugCandidate }, null, { showDeleted }).select('-__v');
    }

    if (!author) {
      author = await Author.findOne({ author_name: slugParam }, null, { showDeleted }).select('-__v');
    }

    // If still not found, and param looks like an id, try lookup by id then use slug
    if (!author && slugParam.match(/^[0-9a-fA-F]{24}$/)) {
      author = await Author.findById(slugParam, null, { showDeleted }).select('-__v');
    }

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

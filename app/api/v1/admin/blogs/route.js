import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Blog from '@/app/models/Blog';
import { verifyToken, extractToken } from '@/app/lib/auth';
import { uploadBlogImage } from '@/app/middleware/imageUpload';

export async function GET(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const search = searchParams.get('search');
    const status = searchParams.get('status');
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const skip = (page - 1) * limit;

    const query = {};
    if (status) query.status = status;
    if (search) query.$text = { $search: search };

    const total = await Blog.countDocuments(query);
    const blogs = await Blog.find(query)
      .populate('author', 'author_name')
      .populate('categories', 'category_name')
      .skip(skip)
      .limit(limit)
      .sort({ created_date: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      data: blogs.map(b => ({ ...b, id: b._id.toString() })),
      pagination: { total, page, limit, pages: Math.ceil(total / limit) }
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ success: false, error: 'Error fetching blogs' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const token = extractToken(req.headers);
    if (!token) {
      return NextResponse.json({ success: false, error: 'Authentication required' }, { status: 401 });
    }
    const decoded = verifyToken(token);
    if (!decoded || decoded.role !== 'admin') {
      return NextResponse.json({ success: false, error: 'Admin access required' }, { status: 403 });
    }

    await connectDB();
    const formData = await req.formData();
    const bannerFile = formData.get('banner');
    const banner = await uploadBlogImage(bannerFile);
    if (!banner.success) {
      return NextResponse.json({ success: false, error: banner.error }, { status: 400 });
    }
    const thumbFile = formData.get('thumbnail');
    const thumb = thumbFile ? await uploadBlogImage(thumbFile) : { success: true };
    if (thumb && !thumb.success) {
      return NextResponse.json({ success: false, error: thumb.error }, { status: 400 });
    }
    const ogFile = formData.get('ogImage');
    const ogImg = ogFile ? await uploadBlogImage(ogFile, 1200, 630) : { success: true };
    if (ogImg && !ogImg.success) {
      return NextResponse.json({ success: false, error: ogImg.error }, { status: 400 });
    }
    const xFile = formData.get('xImage');
    const xImg = xFile ? await uploadBlogImage(xFile) : { success: true };
    if (xImg && !xImg.success) {
      return NextResponse.json({ success: false, error: xImg.error }, { status: 400 });
    }

    const blog = await Blog.create({
      category: formData.get('category'),
      title: formData.get('title'),
      authorId: formData.get('authorId'),
      blogWrittenDate: formData.get('blogWrittenDate') || new Date(),
      shortDescription: formData.get('shortDescription'),
      description: formData.get('description'),
      banner: banner.filename,
      thumbnail: thumb.filename,
      imageAlt: formData.get('imageAlt') || '',
      xImage: xImg.filename,
      xImageAlt: formData.get('xImageAlt') || '',
      ogImage: ogImg.filename,
      ogImageAlt: formData.get('ogImageAlt') || '',
      metaTitle: formData.get('metaTitle'),
      metaKeyword: formData.get('metaKeyword'),
      metaDescription: formData.get('metaDescription'),
      metaOgDescription: formData.get('metaOgDescription'),
      metaOgTitle: formData.get('metaOgTitle'),
      metaXTitle: formData.get('metaXTitle'),
      metaXDescription: formData.get('metaXDescription'),
      commentShowStatus: formData.get('commentShowStatus') === 'true',
      status: formData.get('status') || 'draft',
      publishedDateTime: formData.get('publishedDateTime'),
      faq: formData.get('faq'),
      bgColor: formData.get('bgColor'),
      bgColorStatus: formData.get('bgColorStatus') === 'true'
    });

    return NextResponse.json({ success: true, data: { ...blog.toObject(), id: blog._id.toString() } }, { status: 201 });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json({ success: false, error: 'Error creating blog' }, { status: 500 });
  }
}

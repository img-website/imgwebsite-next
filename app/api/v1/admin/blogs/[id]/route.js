import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Blog from '@/app/models/Blog';
import { verifyToken, extractToken } from '@/app/lib/auth';
import { uploadBlogImage } from '@/app/middleware/imageUpload';

export async function GET(req, { params }) {
  try {
    await connectDB();
    const blog = await Blog.findById(params.id)
      .populate('author', 'author_name')
      .populate('categories', 'category_name')
      .lean();
    if (!blog) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: { ...blog, id: blog._id.toString() } });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json({ success: false, error: 'Error fetching blog' }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
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
    const blog = await Blog.findById(params.id);
    if (!blog) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }

    const formData = await req.formData();
    const title = formData.get('title');
    if (title) blog.title = title.trim();
    const shortDescription = formData.get('shortDescription');
    if (shortDescription) blog.shortDescription = shortDescription.trim();
    const description = formData.get('description');
    if (description) blog.description = description.trim();
    const authorId = formData.get('authorId');
    if (authorId) blog.authorId = authorId;
    const category = formData.get('category');
    if (category) blog.category = category;
    const bannerFile = formData.get('banner');
    if (bannerFile && typeof bannerFile !== 'string') {
      const img = await uploadBlogImage(bannerFile);
      if (!img.success) {
        return NextResponse.json({ success: false, error: img.error }, { status: 400 });
      }
      blog.banner = img.filename;
    }
    const thumbFile = formData.get('thumbnail');
    if (thumbFile && typeof thumbFile !== 'string') {
      const img = await uploadBlogImage(thumbFile);
      if (!img.success) {
        return NextResponse.json({ success: false, error: img.error }, { status: 400 });
      }
      blog.thumbnail = img.filename;
    }
    const ogFile = formData.get('ogImage');
    if (ogFile && typeof ogFile !== 'string') {
      const img = await uploadBlogImage(ogFile, 1200, 630);
      if (!img.success) {
        return NextResponse.json({ success: false, error: img.error }, { status: 400 });
      }
      blog.ogImage = img.filename;
    }
    const xFile = formData.get('xImage');
    if (xFile && typeof xFile !== 'string') {
      const img = await uploadBlogImage(xFile);
      if (!img.success) {
        return NextResponse.json({ success: false, error: img.error }, { status: 400 });
      }
      blog.xImage = img.filename;
    }
    const status = formData.get('status');
    if (status) blog.status = status;
    const metaTitle = formData.get('metaTitle');
    if (metaTitle) blog.metaTitle = metaTitle.trim();
    const metaKeyword = formData.get('metaKeyword');
    if (metaKeyword) blog.metaKeyword = metaKeyword.trim();
    const metaDesc = formData.get('metaDescription');
    if (metaDesc) blog.metaDescription = metaDesc.trim();
    const metaOgDesc = formData.get('metaOgDescription');
    if (metaOgDesc) blog.metaOgDescription = metaOgDesc.trim();
    const metaOgTitle = formData.get('metaOgTitle');
    if (metaOgTitle) blog.metaOgTitle = metaOgTitle.trim();
    const metaXTitle = formData.get('metaXTitle');
    if (metaXTitle) blog.metaXTitle = metaXTitle.trim();
    const metaXDesc = formData.get('metaXDescription');
    if (metaXDesc) blog.metaXDescription = metaXDesc.trim();
    const imageAlt = formData.get('imageAlt');
    if (imageAlt) blog.imageAlt = imageAlt.trim();
    const xImageAlt = formData.get('xImageAlt');
    if (xImageAlt) blog.xImageAlt = xImageAlt.trim();
    const ogImageAlt = formData.get('ogImageAlt');
    if (ogImageAlt) blog.ogImageAlt = ogImageAlt.trim();
    const publishedDateTime = formData.get('publishedDateTime');
    if (publishedDateTime) blog.publishedDateTime = publishedDateTime;
    const faq = formData.get('faq');
    if (faq) blog.faq = faq;
    const bgColor = formData.get('bgColor');
    if (bgColor) blog.bgColor = bgColor;
    const bgColorStatus = formData.get('bgColorStatus');
    if (bgColorStatus !== null) blog.bgColorStatus = bgColorStatus === 'true';
    const commentShowStatus = formData.get('commentShowStatus');
    if (commentShowStatus !== null) blog.commentShowStatus = commentShowStatus === 'true';
    await blog.save();
    return NextResponse.json({ success: true, data: { ...blog.toObject(), id: blog._id.toString() } });
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json({ success: false, error: 'Error updating blog' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
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
    const blog = await Blog.findById(params.id);
    if (!blog) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }
    await blog.deleteOne();
    return NextResponse.json({ success: true, message: 'Blog deleted' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json({ success: false, error: 'Error deleting blog' }, { status: 500 });
  }
}

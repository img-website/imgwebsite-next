import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '@/app/lib/db';
import Blog from '@/app/models/Blog';
import BlogDraft from '@/app/models/BlogDraft';
import { verifyToken, extractToken } from '@/app/lib/auth';
import { uploadBlogImage } from '@/app/middleware/imageUpload';
import slugify from 'slugify';

export async function GET(request, context) {
  try {
    await connectDB();

    const id = context.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: 'Invalid blog ID' }, { status: 400 });
    }

    const query = { _id: id };

    const blog = await Blog.findOne(query)
      .populate('author')
      .populate('category');

    if (!blog) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: blog });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json({ success: false, error: 'Error fetching blog' }, { status: 500 });
  }
}

export async function PUT(request, context) {
  try {
    const token = extractToken(request.headers);
    if (!token) {
      return NextResponse.json({ success: false, error: 'Authentication required' }, { status: 401 });
    }

    const decoded = verifyToken(token);
    if (!decoded || decoded.role !== 'admin') {
      return NextResponse.json({ success: false, error: 'Admin access required' }, { status: 403 });
    }

    await connectDB();

    const id = context.params.id;
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: 'Invalid blog ID' }, { status: 400 });
    }

    const formData = await request.formData();
    if (!formData) {
      return NextResponse.json({ success: false, error: 'No form data provided' }, { status: 400 });
    }

    const blog = await Blog.findById(id);
    if (!blog) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }

    const newSlug = formData.get('slug');
    if (newSlug) {
      const slugified = slugify(newSlug, { lower: true, strict: true, trim: true });
      if (slugified !== blog.slug) {
        const existingSlug = await Blog.findOne({ slug: slugified, _id: { $ne: id } });
        const existingDraft = await BlogDraft.findOne({ slug: slugified });
        if (existingSlug || existingDraft) {
          return NextResponse.json({ success: false, error: 'Slug already exists' }, { status: 400 });
        }
        blog.slug = slugified;
      }
    }

    const statusValue = Number(formData.get('status'));
    if ([1, 2, 3].includes(statusValue)) {
      if (statusValue === 1 && blog.status !== 1) {
        return NextResponse.json(
          { success: false, error: 'Cannot revert to draft once published or archived' },
          { status: 400 }
        );
      }
      blog.status = statusValue;
    }

    const bannerFile = formData.get('banner');
    if (bannerFile) {
      const res = await uploadBlogImage(bannerFile, 'banner');
      if (!res.success) {
        return NextResponse.json({ success: false, error: res.error }, { status: 400 });
      }
      blog.banner = res.filename;
    }

    const thumbnailFile = formData.get('thumbnail');
    if (thumbnailFile) {
      const res = await uploadBlogImage(thumbnailFile, 'thumbnail');
      if (!res.success) {
        return NextResponse.json({ success: false, error: res.error }, { status: 400 });
      }
      blog.thumbnail = res.filename;
    }

    const xImgFile = formData.get('xImage');
    if (xImgFile) {
      const res = await uploadBlogImage(xImgFile, 'xImage');
      if (!res.success) {
        return NextResponse.json({ success: false, error: res.error }, { status: 400 });
      }
      blog.x_image = res.filename;
    }

    const ogImgFile = formData.get('ogImage');
    if (ogImgFile) {
      const res = await uploadBlogImage(ogImgFile, 'ogImage');
      if (!res.success) {
        return NextResponse.json({ success: false, error: res.error }, { status: 400 });
      }
      blog.og_image = res.filename;
    }

    const metaKeywordString = formData.get('metaKeyword');
    if (metaKeywordString !== null) {
      blog.meta_keyword = metaKeywordString
        .split(',')
        .map((k) => k.trim())
        .filter((k) => k);
    }

    const fields = {
      category: 'category',
      title: 'title',
      authorId: 'author',
      blogWrittenDate: 'blog_written_date',
      shortDescription: 'short_description',
      description: 'description',
      imageAlt: 'image_alt',
      xImageAlt: 'x_image_alt',
      ogImageAlt: 'og_image_alt',
      metaTitle: 'meta_title',
      metaDescription: 'meta_description',
      metaOgTitle: 'meta_og_title',
      metaOgDescription: 'meta_og_description',
      metaXTitle: 'meta_x_title',
      metaXDescription: 'meta_x_description',
      commentShowStatus: 'comment_show_status',
      publishedDateTime: 'published_date_time',
      bgColorStatus: 'bg_color_status',
      bgColor: 'bg_color'
    };

    for (const [formField, modelField] of Object.entries(fields)) {
      const val = formData.get(formField);
      if (val !== null) {
        if (modelField.endsWith('_date') || modelField.endsWith('_time')) {
          blog[modelField] = val ? new Date(val) : null;
        } else if (modelField === 'comment_show_status' || modelField === 'bg_color_status') {
          blog[modelField] = val === 'true';
        } else {
          blog[modelField] = val;
        }
      }
    }

    await blog.save();

    return NextResponse.json({ success: true, data: blog });
  } catch (error) {
    console.error('Error updating blog:', error);
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err) => err.message);
      return NextResponse.json({ success: false, error: messages.join(', ') }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: 'Error updating blog' }, { status: 500 });
  }
}

export async function DELETE(request, context) {
  try {
    const token = extractToken(request.headers);
    if (!token) {
      return NextResponse.json({ success: false, error: 'Authentication required' }, { status: 401 });
    }

    const decoded = verifyToken(token);
    if (!decoded || decoded.role !== 'admin') {
      return NextResponse.json({ success: false, error: 'Admin access required' }, { status: 403 });
    }

    await connectDB();
    const id = context.params.id;
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: 'Invalid blog ID' }, { status: 400 });
    }
    const blog = await Blog.findById(id);
    if (!blog) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }

    if (blog.status !== 1) {
      return NextResponse.json(
        { success: false, error: 'Published or archived blogs cannot be deleted' },
        { status: 400 }
      );
    }

    await Blog.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: 'Blog has been permanently deleted' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json({ success: false, error: 'Error deleting blog' }, { status: 500 });
  }
}


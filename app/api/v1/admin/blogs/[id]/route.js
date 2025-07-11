import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '@/app/lib/db';
import Blog from '@/app/models/Blog';
import { verifyToken, extractToken } from '@/app/lib/auth';
import { uploadBlogImage } from '@/app/middleware/imageUpload';
import { deleteObject } from '@/lib/s3';
import slugify from 'slugify';

export async function GET(request, { params }) {
  try {
    await connectDB();

    const { id } = await params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: 'Invalid blog ID' }, { status: 400 });
    }

    const objectId = new mongoose.Types.ObjectId(String(id));
    const blogs = await Blog.aggregate([
      { $match: { _id: objectId } },
      {
        $lookup: {
          from: 'authors',
          localField: 'author',
          foreignField: '_id',
          as: 'author',
        },
      },
      { $unwind: { path: '$author', preserveNullAndEmptyArrays: true } },
      {
        $lookup: {
          from: 'categories',
          localField: 'category',
          foreignField: '_id',
          as: 'category',
        },
      },
      { $unwind: { path: '$category', preserveNullAndEmptyArrays: true } },
      { $limit: 1 },
    ]);
    const blog = blogs[0];
    if (!blog) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: blog });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json({ success: false, error: 'Error fetching blog' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
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

    const formData = await request.formData();
    if (!formData) {
      return NextResponse.json({ success: false, error: 'No form data provided' }, { status: 400 });
    }

    const blog = await Blog.findById(id);
    if (!blog) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }

    const newSlug = formData.get('slug');
    // Slug unique check only for published/archived/scheduled
    const statusValue = Number(formData.get('status'));
    if (newSlug && (statusValue === 2 || statusValue === 3 || statusValue === 4)) {
      const slugified = slugify(newSlug, { lower: true, strict: true, trim: true });
      if (slugified !== blog.slug) {
        const existingSlug = await Blog.findOne({ slug: slugified, _id: { $ne: id } });
        if (existingSlug) {
          return NextResponse.json({ success: false, error: 'Slug already exists' }, { status: 400 });
        }
        blog.slug = slugified;
      }
    } else if (newSlug) {
      // For draft, just update slug without unique check
      blog.slug = slugify(newSlug, { lower: true, strict: true, trim: true });
    }

    if ([1, 2, 3, 4].includes(statusValue)) {
      if (statusValue === 1 && blog.status !== 1) {
        return NextResponse.json(
          { success: false, error: 'Cannot revert to draft once published or archived' },
          { status: 400 }
        );
      }
      blog.status = statusValue;
    }

    // Banner image update logic
    const bannerField = formData.get('banner');
    if (bannerField === '') {
      blog.banner = '';
    } else if (bannerField) {
      const res = await uploadBlogImage(bannerField, 'banner');
      if (!res.success) {
        return NextResponse.json({ success: false, error: res.error }, { status: 400 });
      }
      blog.banner = res.filename;
    }

    // Thumbnail image update logic
    const thumbnailField = formData.get('thumbnail');
    if (thumbnailField === '') {
      blog.thumbnail = '';
    } else if (thumbnailField) {
      const res = await uploadBlogImage(thumbnailField, 'thumbnail');
      if (!res.success) {
        return NextResponse.json({ success: false, error: res.error }, { status: 400 });
      }
      blog.thumbnail = res.filename;
    }

    // xImage update logic
    const xImgField = formData.get('xImage');
    if (xImgField === '') {
      blog.x_image = '';
    } else if (xImgField) {
      const res = await uploadBlogImage(xImgField, 'xImage');
      if (!res.success) {
        return NextResponse.json({ success: false, error: res.error }, { status: 400 });
      }
      blog.x_image = res.filename;
    }

    // ogImage update logic
    const ogImgField = formData.get('ogImage');
    if (ogImgField === '') {
      blog.og_image = '';
    } else if (ogImgField) {
      const res = await uploadBlogImage(ogImgField, 'ogImage');
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

    const faqsString = formData.get('faqs');
    if (faqsString !== null) {
      try {
        blog.faqs = faqsString ? JSON.parse(faqsString) : [];
      } catch {
        return NextResponse.json({ success: false, error: 'Invalid FAQs format' }, { status: 400 });
      }
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
      publishedDateTime: 'published_date_time',
      bgColorStatus: 'bg_color_status',
      bgColor: 'bg_color'
    };

    for (const [formField, modelField] of Object.entries(fields)) {
      const val = formData.get(formField);
      if (val !== null) {
        if (modelField.endsWith('_date') || modelField.endsWith('_time')) {
          blog[modelField] = val ? new Date(val) : null;
        } else if (modelField === 'bg_color_status') {
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

export async function DELETE(request, { params }) {
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

    const deletionPromises = [];
    if (blog.banner) deletionPromises.push(deleteObject(`uploads/blogs/${blog.banner}`));
    if (blog.thumbnail) deletionPromises.push(deleteObject(`uploads/blogs/${blog.thumbnail}`));
    if (blog.x_image) deletionPromises.push(deleteObject(`uploads/blogs/${blog.x_image}`));
    if (blog.og_image) deletionPromises.push(deleteObject(`uploads/blogs/${blog.og_image}`));
    await Promise.allSettled(deletionPromises);

    return NextResponse.json({ success: true, message: 'Blog has been permanently deleted' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json({ success: false, error: 'Error deleting blog' }, { status: 500 });
  }
}


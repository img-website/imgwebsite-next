import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Blog from '@/app/models/Blog';
import Author from '@/app/models/Author';
import Category from '@/app/models/Category';
import { verifyToken, extractToken } from '@/app/lib/auth';
import { uploadBlogImage } from '@/app/middleware/imageUpload';
import slugify from 'slugify';

export async function GET(request) {
  try {
    await connectDB();
    const searchParams = request.nextUrl.searchParams

    const search = searchParams.get('search');
    const status = searchParams.get('status');
    const sortBy = searchParams.get('sortBy') || 'created_date';
    const sortOrder = parseInt(searchParams.get('sortOrder')) || -1;
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const skip = (page - 1) * limit;

    const query = {};
    if (status) {
      const numericStatus = parseInt(status, 10);
      if (![1, 2, 3, 4].includes(numericStatus)) {
        return NextResponse.json(
          { success: false, error: 'Invalid status value. Must be 1 (Draft), 2 (Published), 3 (Archived), or 4 (Scheduled)' },
          { status: 400 }
        );
      }
      query.status = numericStatus;
    }

    if (search) {
      const regex = new RegExp(search, 'i');
      query.$or = [
        { title: { $regex: regex } },
        { short_description: { $regex: regex } },
        { slug: { $regex: regex } }
      ];
    }

    const [blogs, total] = await Promise.all([
      Blog.find(query)
        .populate('author')
        .populate('category')
        .select('-__v')
        .sort({ [sortBy]: sortOrder })
        .skip(skip)
        .limit(limit)
        .lean(),
      Blog.countDocuments(query)
    ]);

    return NextResponse.json({
      success: true,
      data: blogs,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ success: false, error: 'Error fetching blogs' }, { status: 500 });
  }
}

export async function POST(request) {
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

    const formData = await request.formData();

    const slug = slugify(formData.get('slug') || '', { lower: true, strict: true, trim: true });

    const statusValue = Number(formData.get('status')) || 1;
    if (![1, 2, 3, 4].includes(statusValue)) {
      return NextResponse.json(
        { success: false, error: 'Status must be 1 (Draft), 2 (Published), 3 (Archived), or 4 (Scheduled)' },
        { status: 400 }
      );
    }

    // Slug unique check only for published/archived/scheduled
    if (slug && (statusValue === 2 || statusValue === 3 || statusValue === 4)) {
      const existingSlug = await Blog.findOne({ slug });
      if (existingSlug) {
        return NextResponse.json({ success: false, error: 'Slug already exists' }, { status: 400 });
      }
    }

    const bannerFile = formData.get('banner');
    const banner = bannerFile ? await uploadBlogImage(bannerFile, 'banner') : null;
    if (bannerFile && !banner.success) {
      return NextResponse.json({ success: false, error: banner.error }, { status: 400 });
    }

    const thumbnailFile = formData.get('thumbnail');
    const thumbnail = thumbnailFile ? await uploadBlogImage(thumbnailFile, 'thumbnail') : null;
    if (thumbnailFile && !thumbnail.success) {
      return NextResponse.json({ success: false, error: thumbnail.error }, { status: 400 });
    }

    const xImgFile = formData.get('xImage');
    const xImage = xImgFile ? await uploadBlogImage(xImgFile, 'xImage') : null;
    if (xImgFile && !xImage.success) {
      return NextResponse.json({ success: false, error: xImage.error }, { status: 400 });
    }

    const ogImgFile = formData.get('ogImage');
    const ogImage = ogImgFile ? await uploadBlogImage(ogImgFile, 'ogImage') : null;
    if (ogImgFile && !ogImage.success) {
      return NextResponse.json({ success: false, error: ogImage.error }, { status: 400 });
    }

    const metaKeywordString = formData.get('metaKeyword') || '';
    const metaKeyword = metaKeywordString
      .split(',')
      .map((k) => k.trim())
      .filter((k) => k);

    let faqs = [];
    const faqsString = formData.get('faqs');
    if (faqsString) {
      try {
        faqs = JSON.parse(faqsString);
      } catch {
        return NextResponse.json({ success: false, error: 'Invalid FAQs format' }, { status: 400 });
      }
    }

    const blogData = {
      category: formData.get('category'),
      title: formData.get('title'),
      author: formData.get('authorId'),
      blog_written_date: formData.get('blogWrittenDate') ? new Date(formData.get('blogWrittenDate')) : null,
      slug,
      short_description: formData.get('shortDescription'),
      description: formData.get('description'),
      banner: banner?.filename,
      thumbnail: thumbnail?.filename,
      image_alt: formData.get('imageAlt'),
      x_image: xImage?.filename,
      x_image_alt: formData.get('xImageAlt'),
      og_image: ogImage?.filename,
      og_image_alt: formData.get('ogImageAlt'),
      meta_title: formData.get('metaTitle'),
      meta_keyword: metaKeyword,
      meta_description: formData.get('metaDescription'),
      meta_og_title: formData.get('metaOgTitle'),
      meta_og_description: formData.get('metaOgDescription'),
      meta_x_title: formData.get('metaXTitle'),
      meta_x_description: formData.get('metaXDescription'),
      faqs,
      status: statusValue,
      published_date_time: formData.get('publishedDateTime') ? new Date(formData.get('publishedDateTime')) : null,
      bg_color_status: formData.get('bgColorStatus') === 'true',
      bg_color: formData.get('bgColor')
    };

    const blog = await Blog.create(blogData);

    return NextResponse.json({ success: true, data: blog }, { status: 201 });
  } catch (error) {
    console.error('Error creating blog:', error);
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err) => err.message);
      return NextResponse.json({ success: false, error: messages.join(', ') }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: 'Error creating blog' }, { status: 500 });
  }
}


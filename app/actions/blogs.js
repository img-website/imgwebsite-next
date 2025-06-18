'use server';
import { revalidatePath } from 'next/cache';
import Blog from '@/app/models/Blog';
import connectDB from '@/app/lib/db';
import { uploadBlogImage } from '@/app/middleware/imageUpload';

export async function createBlog(formData) {
  try {
    await connectDB();
    const title = formData.get('title')?.trim();
    const shortDescription = formData.get('shortDescription')?.trim();
    const description = formData.get('description')?.trim();
    const authorId = formData.get('authorId');
    const category = formData.get('category');
    const bannerFile = formData.get('banner');
    if (!title || !shortDescription || !description || !authorId || !category || !bannerFile) {
      return { success: false, error: 'Please fill in all required fields' };
    }
    const bannerRes = await uploadBlogImage(bannerFile);
    if (!bannerRes.success) {
      return { success: false, error: bannerRes.error };
    }
    const thumbnailFile = formData.get('thumbnail');
    const thumbRes = thumbnailFile ? await uploadBlogImage(thumbnailFile) : { success: true };
    if (thumbRes && !thumbRes.success) {
      return { success: false, error: thumbRes.error };
    }
    const ogFile = formData.get('ogImage');
    const ogRes = ogFile ? await uploadBlogImage(ogFile, 1200, 630) : { success: true };
    if (ogRes && !ogRes.success) {
      return { success: false, error: ogRes.error };
    }
    const xImageFile = formData.get('xImage');
    const xRes = xImageFile ? await uploadBlogImage(xImageFile) : { success: true };
    if (xRes && !xRes.success) {
      return { success: false, error: xRes.error };
    }
    if (!imageRes.success) {
      return { success: false, error: imageRes.error };
    }
    const blog = new Blog({
      category,
      title,
      authorId,
      blogWrittenDate: formData.get('blogWrittenDate') || new Date(),
      shortDescription,
      description,
      banner: bannerRes.filename,
      thumbnail: thumbRes.filename,
      imageAlt: formData.get('imageAlt') || '',
      xImage: xRes.filename,
      xImageAlt: formData.get('xImageAlt') || '',
      ogImage: ogRes.filename,
      ogImageAlt: formData.get('ogImageAlt') || '',
      metaTitle: formData.get('metaTitle')?.trim() || title,
      metaKeyword: formData.get('metaKeyword')?.trim() || '',
      metaDescription: formData.get('metaDescription')?.trim() || shortDescription,
      metaOgDescription: formData.get('metaOgDescription')?.trim() || '',
      metaOgTitle: formData.get('metaOgTitle')?.trim() || '',
      metaXTitle: formData.get('metaXTitle')?.trim() || '',
      metaXDescription: formData.get('metaXDescription')?.trim() || '',
      commentShowStatus: formData.get('commentShowStatus') === 'true',
      status: formData.get('status') || 'draft',
      publishedDateTime: formData.get('publishedDateTime') || null,
      faq: formData.get('faq') || '',
      bgColor: formData.get('bgColor') || '',
      bgColorStatus: formData.get('bgColorStatus') === 'true'
    });
    await blog.save();
    revalidatePath('/admin/blogs');
    return { success: true, data: { ...blog.toObject(), _id: blog._id.toString() } };
  } catch (error) {
    console.error('Blog creation error:', error);
    return { success: false, error: error.message || 'Failed to create blog' };
  }
}

export async function updateBlog(id, formData) {
  try {
    await connectDB();
    const blog = await Blog.findById(id);
    if (!blog) {
      return { success: false, error: 'Blog not found' };
    }
    const title = formData.get('title')?.trim();
    if (title) blog.title = title;
    const shortDescription = formData.get('shortDescription')?.trim();
    if (shortDescription) blog.shortDescription = shortDescription;
    const description = formData.get('description')?.trim();
    if (description) blog.description = description;
    const authorId = formData.get('authorId');
    if (authorId) blog.authorId = authorId;
    const category = formData.get('category');
    if (category) blog.category = category;
    const bannerFile = formData.get('banner');
    if (bannerFile && typeof bannerFile !== 'string') {
      const res = await uploadBlogImage(bannerFile);
      if (!res.success) return { success: false, error: res.error };
      blog.banner = res.filename;
    }
    const thumbnailFile = formData.get('thumbnail');
    if (thumbnailFile && typeof thumbnailFile !== 'string') {
      const res = await uploadBlogImage(thumbnailFile);
      if (!res.success) return { success: false, error: res.error };
      blog.thumbnail = res.filename;
    }
    const ogFile = formData.get('ogImage');
    if (ogFile && typeof ogFile !== 'string') {
      const res = await uploadBlogImage(ogFile, 1200, 630);
      if (!res.success) return { success: false, error: res.error };
      blog.ogImage = res.filename;
    }
    const xImageFile = formData.get('xImage');
    if (xImageFile && typeof xImageFile !== 'string') {
      const res = await uploadBlogImage(xImageFile);
      if (!res.success) return { success: false, error: res.error };
      blog.xImage = res.filename;
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
    blog.modifiedDate = new Date();
    await blog.save();
    revalidatePath('/admin/blogs');
    revalidatePath(`/admin/blogs/${id}`);
    return { success: true, data: { ...blog.toObject(), _id: blog._id.toString() } };
  } catch (error) {
    console.error('Blog update error:', error);
    return { success: false, error: error.message || 'Failed to update blog' };
  }
}

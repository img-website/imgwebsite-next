'use server';
import { revalidatePath } from 'next/cache';
import Blog from '@/app/models/Blog';
import connectDB from '@/app/lib/db';
import { uploadBlogImage } from '@/app/middleware/imageUpload';

export async function createBlog(formData) {
  try {
    await connectDB();
    const title = formData.get('title')?.trim();
    const excerpt = formData.get('excerpt')?.trim();
    const content = formData.get('content')?.trim();
    const author = formData.get('author');
    const imageFile = formData.get('featured_image');
    if (!title || !excerpt || !content || !author || !imageFile) {
      return { success: false, error: 'Please fill in all required fields' };
    }
    const imageRes = await uploadBlogImage(imageFile);
    if (!imageRes.success) {
      return { success: false, error: imageRes.error };
    }
    const blog = new Blog({
      title,
      excerpt,
      content,
      author,
      featured_image: imageRes.filename,
      status: formData.get('status') || 'draft',
      meta_title: formData.get('meta_title')?.trim() || title,
      meta_description: formData.get('meta_description')?.trim() || excerpt,
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
    const excerpt = formData.get('excerpt')?.trim();
    if (excerpt) blog.excerpt = excerpt;
    const content = formData.get('content')?.trim();
    if (content) blog.content = content;
    const author = formData.get('author');
    if (author) blog.author = author;
    const imageFile = formData.get('featured_image');
    if (imageFile && typeof imageFile !== 'string') {
      const res = await uploadBlogImage(imageFile);
      if (!res.success) return { success: false, error: res.error };
      blog.featured_image = res.filename;
    }
    const status = formData.get('status');
    if (status) blog.status = status;
    const metaTitle = formData.get('meta_title');
    if (metaTitle) blog.meta_title = metaTitle.trim();
    const metaDesc = formData.get('meta_description');
    if (metaDesc) blog.meta_description = metaDesc.trim();
    blog.modified_date = new Date();
    await blog.save();
    revalidatePath('/admin/blogs');
    revalidatePath(`/admin/blogs/${id}`);
    return { success: true, data: { ...blog.toObject(), _id: blog._id.toString() } };
  } catch (error) {
    console.error('Blog update error:', error);
    return { success: false, error: error.message || 'Failed to update blog' };
  }
}

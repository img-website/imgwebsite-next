'use server';

import { revalidatePath } from 'next/cache';
import Blog from '@/app/models/Blog';
import connectDB from '@/app/lib/db';
import { uploadBlogImage } from '@/app/middleware/imageUpload';

export async function createBlog(formData) {
  try {
    await connectDB();
    const title = formData.get('title')?.trim();
    const content = formData.get('content')?.trim();
    const excerpt = formData.get('excerpt')?.trim();
    const author = formData.get('author');
    const categories = formData.getAll('categories');
    const tags = formData.get('tags')?.split(',').map(t => t.trim()).filter(Boolean) || [];
    const meta_title = formData.get('meta_title')?.trim();
    const meta_description = formData.get('meta_description')?.trim();
    const status = formData.get('status') || 'draft';
    const imageFile = formData.get('featured_image');

    if (!title || !content || !excerpt || !author || !imageFile) {
      return { success: false, error: 'Missing required fields' };
    }

    const uploadResult = await uploadBlogImage(imageFile);
    if (!uploadResult.success) {
      return { success: false, error: uploadResult.error };
    }

    const blog = await Blog.create({
      title,
      content,
      excerpt,
      author,
      categories,
      tags,
      featured_image: uploadResult.filename,
      meta_title,
      meta_description,
      status,
    });

    revalidatePath('/admin/blogs');
    const res = blog.toObject();
    res._id = res._id.toString();
    return { success: true, data: res };
  } catch (error) {
    console.error('Blog creation error:', error);
    return { success: false, error: error.message || 'Failed to create blog' };
  }
}

export async function updateBlog(id, formData) {
  try {
    await connectDB();
    const blog = await Blog.findById(id);
    if (!blog) return { success: false, error: 'Blog not found' };

    const fields = ['title','content','excerpt','meta_title','meta_description','status'];
    fields.forEach(f => {
      const val = formData.get(f);
      if (val !== null) blog[f] = val.trim();
    });
    const author = formData.get('author');
    if (author) blog.author = author;
    const categories = formData.getAll('categories');
    if (categories.length) blog.categories = categories;
    const tags = formData.get('tags');
    if (tags !== null) blog.tags = tags.split(',').map(t => t.trim()).filter(Boolean);
    const imageFile = formData.get('featured_image');
    if (imageFile && typeof imageFile !== 'string') {
      const uploadResult = await uploadBlogImage(imageFile);
      if (!uploadResult.success) {
        return { success: false, error: uploadResult.error };
      }
      blog.featured_image = uploadResult.filename;
    }

    blog.modified_date = new Date();
    await blog.save();
    revalidatePath('/admin/blogs');
    revalidatePath(`/admin/blogs/${id}`);
    const updated = blog.toObject();
    updated._id = updated._id.toString();
    return { success: true, data: updated };
  } catch (error) {
    console.error('Blog update error:', error);
    return { success: false, error: error.message || 'Failed to update blog' };
  }
}

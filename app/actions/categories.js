'use server';

import { revalidatePath } from 'next/cache';
import Category from '@/app/models/Category';
import connectDB from '@/app/lib/db';

export async function createCategory(formData) {
  try {
    await connectDB();

    const name = formData.get('category_name')?.trim();
    const description = formData.get('description')?.trim();

    if (!name || !description) {
      return { success: false, error: 'Please fill in all required fields' };
    }
    if (name.length > 100) {
      return { success: false, error: 'Category name cannot exceed 100 characters' };
    }
    if (description.length > 500) {
      return { success: false, error: 'Description cannot exceed 500 characters' };
    }

    const existingCategory = await Category.findOne({ category_name: name });
    if (existingCategory) {
      return { success: false, error: 'A category with this name already exists' };
    }

    const category = new Category({ category_name: name, description, status: 1 });
    await category.save();

    revalidatePath('/admin/blogs/categories');

    const catRes = category.toObject();
    catRes._id = catRes._id.toString();

    return { success: true, data: catRes };
  } catch (error) {
    console.error('Category creation error:', error);
    return { success: false, error: error.message || 'Failed to create category' };
  }
}

export async function updateCategory(id, formData) {
  try {
    await connectDB();

    const category = await Category.findById(id);
    if (!category) {
      return { success: false, error: 'Category not found' };
    }

    const name = formData.get('category_name')?.trim();
    if (name && name !== category.category_name) {
      if (name.length > 100) {
        return { success: false, error: 'Category name cannot exceed 100 characters' };
      }
      const existing = await Category.findOne({ category_name: name, _id: { $ne: id } });
      if (existing) {
        return { success: false, error: 'A category with this name already exists' };
      }
      category.category_name = name;
    }

    const description = formData.get('description')?.trim();
    if (description) {
      if (description.length > 500) {
        return { success: false, error: 'Description cannot exceed 500 characters' };
      }
      category.description = description;
    }

    const status = Number(formData.get('status'));
    if ([1, 2, 3].includes(status)) {
      category.status = status;
    }

    category.modified_date = new Date();
    await category.save();

    revalidatePath('/admin/blogs/categories');
    revalidatePath(`/admin/blogs/categories/${id}`);

    const updated = category.toObject();
    updated._id = updated._id.toString();

    return { success: true, data: updated };
  } catch (error) {
    console.error('Category update error:', error);
    return { success: false, error: error.message || 'Failed to update category' };
  }
}

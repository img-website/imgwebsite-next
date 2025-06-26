'use server';

import { revalidatePath } from 'next/cache';
import SchemaEntry from '@/app/models/SchemaEntry';
import connectDB from '@/app/lib/db';

export async function createSchemaEntry(data) {
  try {
    await connectDB();
    const entry = await SchemaEntry.create(data);
    revalidatePath('/admin/schema');
    return { success: true, data: { ...entry.toObject(), _id: entry._id.toString() } };
  } catch (error) {
    console.error('Schema entry creation error:', error);
    return { success: false, error: error.message };
  }
}

export async function updateSchemaEntry(id, data) {
  try {
    await connectDB();
    const entry = await SchemaEntry.findByIdAndUpdate(id, data, { new: true });
    if (!entry) return { success: false, error: 'Not found' };
    revalidatePath('/admin/schema');
    revalidatePath(`/admin/schema/${id}`);
    return { success: true, data: { ...entry.toObject(), _id: entry._id.toString() } };
  } catch (error) {
    console.error('Schema entry update error:', error);
    return { success: false, error: error.message };
  }
}

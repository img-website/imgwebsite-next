'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import Author from '@/app/models/Author';
import connectDB from '@/app/lib/db';
import { uploadAuthorImage } from '@/app/middleware/imageUpload';

export async function createAuthor(formData) {
  try {
    await connectDB();

    // Validate required fields
    const name = formData.get('author_name')?.trim();
    const description = formData.get('description')?.trim();
    const imageFile = formData.get('image');

    if (!name || !description || !imageFile) {
      return {
        success: false,
        error: 'Please fill in all required fields'
      };
    }

    // Validate name length
    if (name.length > 100) {
      return {
        success: false,
        error: 'Author name cannot exceed 100 characters'
      };
    }

    // Validate description length
    if (description.length > 500) {
      return {
        success: false,
        error: 'Description cannot exceed 500 characters'
      };
    }    // Handle image upload
    let imageUrl = '';
    try {
      const uploadResult = await uploadAuthorImage(imageFile);
      if (uploadResult.success && uploadResult.filename) {
        imageUrl = uploadResult.filename;
      } else {
        return {
          success: false,
          error: 'Failed to upload image. Please try again.'
        };
      }
    } catch (error) {
      return {
        success: false,
        error: 'Failed to upload image. Please try again.'
      };
    }

    // Validate social media links if provided
    const socialLinks = ['linkedin_link', 'facebook_link', 'twitter_link'];
    const authorData = {
      author_name: name,
      description,
      image: imageUrl,
      status: 1 // Active by default
    };

    // Only add social links if they are provided and valid
    for (const link of socialLinks) {
      const value = formData.get(link)?.trim();
      if (value) {
        // Validate URL format
        try {
          new URL(value); // This will throw if the URL is invalid
          authorData[link] = value;
        } catch (e) {
          return {
            success: false,
            error: `Invalid ${link.replace('_', ' ')} URL format`
          };
        }
      }
    }

    for (const link of socialLinks) {
      const value = formData.get(link)?.trim();
      if (value) {
        authorData[link] = value;
      }
    }

    // Check if author name already exists
    const existingAuthor = await Author.findOne({ author_name: name });
    if (existingAuthor) {
      return {
        success: false,
        error: 'An author with this name already exists'
      };
    }

    // Create and save the author
    const author = new Author(authorData);
    await author.save();
    
    // Revalidate the authors list page
    revalidatePath('/admin/blogs/authors');
    
    const authorResponse = author.toObject();
    authorResponse._id = authorResponse._id.toString();

    return {
      success: true,
      data: authorResponse
    };
  } catch (error) {
    console.error('Author creation error:', error);
    return { 
      success: false, 
      error: error.message || 'Failed to create author'
    };
  }
}

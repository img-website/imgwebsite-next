import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request, { params }) {
  try {
    const { path: getPath } = await params;
    const filepath = path.join(process.cwd(), 'uploads', ...getPath);
    
    // Check if file exists
    try {
      await fs.access(filepath);
    } catch {
      return new NextResponse('File not found', { status: 404 });
    }

    // Read file
    const file = await fs.readFile(filepath);
    const response = new NextResponse(file);
    
    // Set content type
    const ext = path.extname(filepath).toLowerCase();
    const contentType = {
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.webp': 'image/webp',
      '.gif': 'image/gif'
    }[ext] || 'application/octet-stream';
    
    response.headers.set('Content-Type', contentType);
    response.headers.set('Cache-Control', 'public, max-age=31536000'); // Cache for 1 year
    return response;
  } catch (error) {
    console.error('Error serving file:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

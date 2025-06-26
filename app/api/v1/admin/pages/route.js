import { NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const baseDir = path.join(process.cwd(), 'app/(frontend)');
    const entries = await readdir(baseDir, { withFileTypes: true });
    const pages = ['/', ...entries.filter(e => e.isDirectory()).map(e => {
      const name = e.name.replace(/\.php$/, '');
      return `/${name}`;
    })];
    return NextResponse.json({ success: true, data: pages });
  } catch (error) {
    console.error('Error listing pages:', error);
    return NextResponse.json({ success: false, error: 'Error listing pages' }, { status: 500 });
  }
}


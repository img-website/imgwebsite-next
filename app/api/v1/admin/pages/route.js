import { NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const baseDir = path.join(process.cwd(), 'app/(frontend)');
    const entries = await readdir(baseDir, { withFileTypes: true });
    const pages = [
      { url: '/', name: 'Home' },
      ...entries
        .filter((e) => e.isDirectory())
        .map((e) => {
          const url = `/${e.name}`;
          const slug = e.name.replace(/\.php$/, '');
          const name = slug
            .split('-')
            .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
            .join(' ');
          return { url, name };
        }),
    ];
    return NextResponse.json({ success: true, data: pages });
  } catch (error) {
    console.error('Error listing pages:', error);
    return NextResponse.json({ success: false, error: 'Error listing pages' }, { status: 500 });
  }
}


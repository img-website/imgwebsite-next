import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    const { path: getPath } = await params;
    const key = getPath.join('/');
    const url = `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/${key}`;
    return NextResponse.redirect(url, 302);
  } catch (error) {
    console.error('Error serving file:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

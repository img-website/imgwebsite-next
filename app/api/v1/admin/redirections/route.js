import { NextResponse } from 'next/server';
import { readRedirections, addRedirection } from '@/app/lib/redirectionsFile';
import { redirectionSchema } from '@/app/lib/validations/redirection';
import { clearRedirectionsCache } from '@/app/lib/redirections';

// GET: Get all redirections
export async function GET() {
  try {
    const redirections = await readRedirections();
    redirections.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    return NextResponse.json({
      success: true,
      message: 'Redirections fetched successfully',
      data: redirections,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Error fetching redirections' },
      { status: 500 }
    );
  }
}

// POST: Add a new redirection
export async function POST(request) {
  try {
    const body = await request.json();
    const parsed = redirectionSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.errors[0].message },
        { status: 400 }
      );
    }
    // Remove domain from URLs if present
    function stripDomain(url) {
      try {
        const u = new URL(url, 'http://dummy');
        return u.pathname + u.search + u.hash;
      } catch {
        return url;
      }
    }
    parsed.data.from = stripDomain(parsed.data.from);
    parsed.data.to = stripDomain(parsed.data.to);
    const redirections = await readRedirections();
    if (redirections.some((r) => r.from === parsed.data.from)) {
      return NextResponse.json(
        { success: false, error: 'Redirection from this URL already exists' },
        { status: 400 }
      );
    }
    const newRedirection = {
      id: Date.now().toString(36),
      ...parsed.data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    await addRedirection(newRedirection);
    clearRedirectionsCache();
    return NextResponse.json(
      {
        success: true,
        message: 'Redirection created successfully',
        data: newRedirection,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Error creating redirection' },
      { status: 500 }
    );
  }
}

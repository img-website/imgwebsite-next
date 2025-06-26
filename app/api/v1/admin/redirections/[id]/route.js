import { NextResponse } from 'next/server';
import {
  readRedirections,
  writeRedirections,
} from '@/app/lib/redirectionsFile';
import { redirectionSchema } from '@/app/lib/validations/redirection';
import { clearRedirectionsCache } from '@/app/lib/redirections';

// Helper to strip domain from URL
function stripDomain(url) {
  try {
    const u = new URL(url, 'http://dummy');
    return u.pathname + u.search + u.hash;
  } catch {
    return url;
  }
}

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const list = await readRedirections();
    const redirection = list.find((r) => r.id === id);
    if (!redirection) {
      return NextResponse.json(
        { success: false, error: 'Redirection not found' },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: redirection });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Error fetching redirection' },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    const list = await readRedirections();
    const idx = list.findIndex((r) => r.id === id);
    if (idx === -1) {
      return NextResponse.json(
        { success: false, error: 'Redirection not found' },
        { status: 404 }
      );
    }
    const [deleted] = list.splice(idx, 1);
    await writeRedirections(list);
    clearRedirectionsCache();
    return NextResponse.json({
      success: true,
      message: 'Redirection deleted successfully',
      data: deleted,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Error deleting redirection' },
      { status: 500 }
    );
  }
}

export async function PATCH(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const parsed = redirectionSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.errors[0].message },
        { status: 400 }
      );
    }
    parsed.data.from = stripDomain(parsed.data.from);
    parsed.data.to = stripDomain(parsed.data.to);
    const list = await readRedirections();
    const idx = list.findIndex((r) => r.id === id);
    if (idx === -1) {
      return NextResponse.json(
        { success: false, error: 'Redirection not found' },
        { status: 404 }
      );
    }
    // Check for existing from URL on another item
    if (list.some((r) => r.from === parsed.data.from && r.id !== id)) {
      return NextResponse.json(
        { success: false, error: 'Redirection from this URL already exists' },
        { status: 400 }
      );
    }
    list[idx] = {
      ...list[idx],
      ...parsed.data,
      updatedAt: new Date().toISOString(),
    };
    await writeRedirections(list);
    clearRedirectionsCache();
    return NextResponse.json({
      success: true,
      message: 'Redirection updated successfully',
      data: list[idx],
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Error updating redirection' },
      { status: 500 }
    );
  }
}

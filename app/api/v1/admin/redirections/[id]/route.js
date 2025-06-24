import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Redirection from '@/app/models/Redirection';
import { redirectionSchema } from '@/app/lib/validations/redirection';
import { clearRedirectionsCache } from '@/app/lib/redirections';

// DELETE: Delete a redirection
export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const deleted = await Redirection.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ success: false, error: 'Redirection not found' }, { status: 404 });
    }
    clearRedirectionsCache();
    return NextResponse.json({ success: true, message: 'Redirection deleted successfully', data: deleted });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error deleting redirection' }, { status: 500 });
  }
}

// PATCH: Update a redirection
export async function PATCH(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await request.json();
    const parsed = redirectionSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: parsed.error.errors[0].message }, { status: 400 });
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
    // Check if another redirection with the same 'from' URL exists (excluding current)
    const exists = await Redirection.findOne({ from: parsed.data.from, _id: { $ne: id } });
    if (exists) {
      return NextResponse.json({ success: false, error: 'Redirection from this URL already exists' }, { status: 400 });
    }
    const updated = await Redirection.findByIdAndUpdate(id, parsed.data, { new: true });
    if (!updated) {
      return NextResponse.json({ success: false, error: 'Redirection not found' }, { status: 404 });
    }
    clearRedirectionsCache();
    return NextResponse.json({ success: true, message: 'Redirection updated successfully', data: updated });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error updating redirection' }, { status: 500 });
  }
}

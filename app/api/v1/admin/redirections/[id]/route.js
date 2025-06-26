import { NextResponse } from 'next/server';
import {
  readRedirectionsWithNotice,
  syncRedirectionsFromDB,
} from '@/app/lib/redirectionsFile';
import connectDB from '@/app/lib/db';
import Redirection from '@/app/models/Redirection';
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
    const { redirections, wasCreated } = await readRedirectionsWithNotice();
    const redirection = redirections.find((r) => r.id === id);
    if (!redirection) {
      return NextResponse.json(
        { success: false, error: 'Redirection not found' },
        { status: 404 }
      );
    }
    return NextResponse.json({
      success: true,
      data: redirection,
      ...(wasCreated && {
        notice: 'Redirections JSON file was missing and has been recreated.',
      }),
    });
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
    await connectDB();
    const doc = await Redirection.findByIdAndDelete(id);
    if (!doc) {
      return NextResponse.json(
        { success: false, error: 'Redirection not found' },
        { status: 404 }
      );
    }
    const { wasCreated } = await syncRedirectionsFromDB();
    clearRedirectionsCache();
    return NextResponse.json({
      success: true,
      message: 'Redirection deleted successfully',
      data: {
        id: doc._id.toString(),
        from: doc.from,
        to: doc.to,
        methodCode: doc.methodCode,
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt,
      },
      ...(wasCreated && {
        notice: 'Redirections JSON file was missing and has been recreated.',
      }),
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
    await connectDB();
    const exists = await Redirection.findOne({
      from: parsed.data.from,
      _id: { $ne: id },
    });
    if (exists) {
      return NextResponse.json(
        { success: false, error: 'Redirection from this URL already exists' },
        { status: 400 }
      );
    }
    const doc = await Redirection.findByIdAndUpdate(
      id,
      { ...parsed.data, updatedAt: new Date() },
      { new: true }
    );
    if (!doc) {
      return NextResponse.json(
        { success: false, error: 'Redirection not found' },
        { status: 404 }
      );
    }
    const { wasCreated } = await syncRedirectionsFromDB();
    clearRedirectionsCache();
    return NextResponse.json({
      success: true,
      message: 'Redirection updated successfully',
      data: {
        id: doc._id.toString(),
        from: doc.from,
        to: doc.to,
        methodCode: doc.methodCode,
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt,
      },
      ...(wasCreated && {
        notice: 'Redirections JSON file was missing and has been recreated.',
      }),
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Error updating redirection' },
      { status: 500 }
    );
  }
}

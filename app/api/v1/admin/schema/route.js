import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import SchemaEntry from '@/app/models/SchemaEntry';
import { verifyToken, extractToken } from '@/app/lib/auth';

function addDomainToBreadcrumb(data) {
  if (data && Array.isArray(data.items)) {
    const base = process.env.NEXT_PUBLIC_BASE_URL;
    data.items = data.items.map((it) => ({
      ...it,
      item: it.item.startsWith('http') ? it.item : `${base}${it.item}`,
    }));
  }
  return data;
}

function stripDomainBreadcrumb(data) {
  if (data && Array.isArray(data.items)) {
    data.items = data.items.map((it) => {
      try {
        return { ...it, item: new URL(it.item).pathname };
      } catch {
        return it;
      }
    });
  }
  return data;
}

export async function GET(request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const pageUrl = searchParams.get('pageUrl');
    const type = searchParams.get('type');
    const isGlobal = searchParams.get('global') === 'true';

    if (isGlobal) {
      if (!type) {
        const entries = await SchemaEntry.find({ isGlobal: true }).lean();
        return NextResponse.json({ success: true, data: entries });
      }
      const entry = await SchemaEntry.findOne({ type, isGlobal: true }).lean();
      return NextResponse.json({ success: true, data: entry || null });
    }

    if (pageUrl) {
      const entry = await SchemaEntry.findOne({ pageUrl, isGlobal: false }).lean();
      if (!entry) {
        return NextResponse.json({ success: true, data: null });
      }
      if (type) {
        const data = entry.schemas ? entry.schemas[type] : undefined;
        if (!data) return NextResponse.json({ success: true, data: null });
        if (type === 'BreadcrumbList') addDomainToBreadcrumb(data);
        return NextResponse.json({ success: true, data: { _id: entry._id, type, data } });
      }
      if (entry.schemas && entry.schemas.BreadcrumbList) {
        addDomainToBreadcrumb(entry.schemas.BreadcrumbList);
      }
      return NextResponse.json({ success: true, data: entry });
    }

    const entries = await SchemaEntry.find({ isGlobal: false }).sort({ created_date: -1 }).lean();
    for (const e of entries) {
      if (e.schemas && e.schemas.BreadcrumbList) {
        addDomainToBreadcrumb(e.schemas.BreadcrumbList);
      }
    }
    return NextResponse.json({ success: true, data: entries });
  } catch (error) {
    console.error('Error fetching schema entries:', error);
    return NextResponse.json({ success: false, error: 'Error fetching schema entries' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const token = extractToken(request.headers);
    if (!token) {
      return NextResponse.json({ success: false, error: 'Authentication required' }, { status: 401 });
    }
    const decoded = verifyToken(token);
    if (!decoded || decoded.role !== 'admin') {
      return NextResponse.json({ success: false, error: 'Admin access required' }, { status: 403 });
    }

    await connectDB();
    const body = await request.json();
    if (!body.type || !body.data) {
      return NextResponse.json({ success: false, error: 'Missing type or data' }, { status: 400 });
    }

    if (body.type === 'BreadcrumbList') {
      stripDomainBreadcrumb(body.data);
    }

    const isGlobal = ['Organization', 'LocalBusiness', 'LocalBusiness2'].includes(body.type);
    if (isGlobal) {
      const entry = await SchemaEntry.create({ type: body.type, data: body.data, isGlobal: true });
      return NextResponse.json({ success: true, data: entry }, { status: 201 });
    }

    if (!body.pageUrl) {
      return NextResponse.json({ success: false, error: 'Missing pageUrl' }, { status: 400 });
    }

    const existing = await SchemaEntry.findOne({ pageUrl: body.pageUrl, isGlobal: false });
    if (existing) {
      if (existing.schemas && existing.schemas[body.type]) {
        return NextResponse.json({ success: false, error: 'Schema already exists' }, { status: 400 });
      }
      await SchemaEntry.updateOne({ _id: existing._id }, { $set: { [`schemas.${body.type}`]: body.data } });
      return NextResponse.json({ success: true, data: { _id: existing._id, type: body.type, data: body.data } }, { status: 201 });
    }

    const entry = await SchemaEntry.create({ pageUrl: body.pageUrl, schemas: { [body.type]: body.data }, isGlobal: false });
    return NextResponse.json({ success: true, data: { _id: entry._id, type: body.type, data: body.data } }, { status: 201 });
  } catch (error) {
    console.error('Error creating schema entry:', error);
    return NextResponse.json({ success: false, error: 'Error creating schema entry' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const token = extractToken(request.headers);
    if (!token) {
      return NextResponse.json({ success: false, error: 'Authentication required' }, { status: 401 });
    }
    const decoded = verifyToken(token);
    if (!decoded || decoded.role !== 'admin') {
      return NextResponse.json({ success: false, error: 'Admin access required' }, { status: 403 });
    }
    await connectDB();
    const body = await request.json();
    if (!body.type || !body.data) {
      return NextResponse.json({ success: false, error: 'Missing type or data' }, { status: 400 });
    }
    if (body.type === 'BreadcrumbList') {
      stripDomainBreadcrumb(body.data);
    }
    const isGlobal = ['Organization', 'LocalBusiness', 'LocalBusiness2'].includes(body.type);

    if (isGlobal) {
      const entry = await SchemaEntry.findOneAndUpdate(
        { type: body.type, isGlobal: true },
        { type: body.type, data: body.data, isGlobal: true },
        { new: true, upsert: true }
      );
      return NextResponse.json({ success: true, data: entry });
    }

    if (!body.pageUrl) {
      return NextResponse.json({ success: false, error: 'Missing pageUrl' }, { status: 400 });
    }

    const entry = await SchemaEntry.findOneAndUpdate(
      { pageUrl: body.pageUrl, isGlobal: false },
      { $set: { [`schemas.${body.type}`]: body.data }, $setOnInsert: { pageUrl: body.pageUrl, isGlobal: false } },
      { new: true, upsert: true }
    );
    return NextResponse.json({ success: true, data: { _id: entry._id, type: body.type, data: body.data } });
  } catch (error) {
    console.error('Error updating schema entry:', error);
    return NextResponse.json({ success: false, error: 'Error updating schema entry' }, { status: 500 });
  }
}

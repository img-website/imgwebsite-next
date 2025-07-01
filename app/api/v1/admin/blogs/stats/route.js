import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Blog from '@/app/models/Blog';

export async function GET(request) {
  try {
    await connectDB();
    const params = request.nextUrl.searchParams;
    const rangeParam = params.get('range') || '90d';
    const map = { '90d': 90, '30d': 30, '7d': 7 };
    const days = map[rangeParam] || 90;
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - days + 1);

    const pipeline = [
      {
        $match: {
          status: 2,
          created_date: { $gte: startDate, $lte: endDate }
        }
      },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$created_date' } },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ];

    const results = await Blog.aggregate(pipeline);
    const counts = new Map(results.map(r => [r._id, r.count]));
    const data = [];
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const key = d.toISOString().slice(0, 10);
      data.push({ date: key, count: counts.get(key) || 0 });
    }
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error fetching blog stats:', error);
    return NextResponse.json({ success: false, error: 'Error fetching blog stats' }, { status: 500 });
  }
}

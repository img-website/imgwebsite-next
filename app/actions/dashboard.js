'use server'

import connectDB from '@/app/lib/db';
import Blog from '@/app/models/Blog';
import Lead from '@/app/models/Lead';
import Newsletter from '@/app/models/Newsletter';
import Admin from '@/app/models/Admin';

export async function getDashboardStats() {
  await connectDB();
  const [blogs, leads, newsletters, admins] = await Promise.all([
    Blog.countDocuments({ status: 2 }),
    Lead.countDocuments(),
    Newsletter.countDocuments(),
    Admin.countDocuments()
  ]);
  return { blogs, leads, newsletters, admins };
}

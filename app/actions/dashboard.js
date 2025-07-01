'use server'

import connectDB from '@/app/lib/db';
import Blog from '@/app/models/Blog';
import Lead from '@/app/models/Lead';
import Newsletter from '@/app/models/Newsletter';
import Admin from '@/app/models/Admin';

export async function getDashboardStats() {
  await connectDB();

  const now = new Date();
  const startOfThisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);

  const metrics = await Promise.all([
    // Totals
    Blog.countDocuments({ status: 2 }),
    Lead.countDocuments(),
    Newsletter.countDocuments(),
    Admin.countDocuments(),
    // This month counts
    Blog.countDocuments({ status: 2, created_date: { $gte: startOfThisMonth } }),
    Lead.countDocuments({ created_date: { $gte: startOfThisMonth } }),
    Newsletter.countDocuments({ createdAt: { $gte: startOfThisMonth } }),
    Admin.countDocuments({ createdAt: { $gte: startOfThisMonth } }),
    // Last month counts
    Blog.countDocuments({
      status: 2,
      created_date: { $gte: startOfLastMonth, $lt: startOfThisMonth }
    }),
    Lead.countDocuments({
      created_date: { $gte: startOfLastMonth, $lt: startOfThisMonth }
    }),
    Newsletter.countDocuments({
      createdAt: { $gte: startOfLastMonth, $lt: startOfThisMonth }
    }),
    Admin.countDocuments({
      createdAt: { $gte: startOfLastMonth, $lt: startOfThisMonth }
    })
  ]);

  const [
    blogsTotal,
    leadsTotal,
    newslettersTotal,
    adminsTotal,
    blogsCurrent,
    leadsCurrent,
    newslettersCurrent,
    adminsCurrent,
    blogsPrev,
    leadsPrev,
    newslettersPrev,
    adminsPrev
  ] = metrics;

  function buildMetric(total, current, prev) {
    const diff = current - prev;
    const percent = prev > 0 ? ((diff / prev) * 100).toFixed(1) : '100.0';
    return {
      count: total,
      positive: diff >= 0,
      percent: `${diff >= 0 ? '+' : ''}${percent}%`
    };
  }

  return {
    blogs: buildMetric(blogsTotal, blogsCurrent, blogsPrev),
    leads: buildMetric(leadsTotal, leadsCurrent, leadsPrev),
    newsletters: buildMetric(newslettersTotal, newslettersCurrent, newslettersPrev),
    admins: buildMetric(adminsTotal, adminsCurrent, adminsPrev)
  };
}

"use client";
import { useCachedApi } from '@/hooks/use-cached-api';
import { BlogTable } from '@/components/blogTable';
import { TableSkeleton } from '@/components/skeleton/table-skeleton';

export default function BlogsPageClient({ canAdd }) {
  const { data, loading } = useCachedApi('blogs', async () => {
    const res = await fetch('/api/v1/admin/blogs');
    const json = await res.json();
    const blogs = Array.isArray(json?.data) ? json.data : [];
    const statusMap = { 1: 'draft', 2: 'published', 3: 'archived', 4: 'scheduled' };
    return blogs.map(blog => {
      const obj = {
        id: blog.id,
        title: blog.title,
        status: statusMap[blog.status] || 'draft',
        created_date: blog.created_date,
        slug: blog.slug,
      };
      if (blog.banner) {
        obj.banner = blog.banner?.startsWith('http')
          ? blog.banner
          : `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/blogs/${blog.banner}`;
      }
      return obj;
    });
  });

  if (loading || !data) return <TableSkeleton />;

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <BlogTable data={data} canAdd={canAdd} />
    </div>
  );
}

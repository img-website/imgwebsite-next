"use client";
import { BlogTable } from "@/components/blogTable";
import BlogTableSkeleton from "@/components/skeleton/blog-table-skeleton";
import { useBlogs } from "@/hooks/use-blogs";
import { usePermission } from "@/hooks/use-permission";

export default function Page() {
  const { blogs } = useBlogs();
  const canAdd = usePermission('blogs', 'write');

  const statusMap = { 1: 'draft', 2: 'published', 3: 'archived', 4: 'scheduled' };
  const data = blogs ? blogs.map(blog => {
    const obj = {
      id: blog._id || blog.id,
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
  }) : [];

  if (!blogs) {
    return <BlogTableSkeleton />;
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <BlogTable data={data} canAdd={canAdd} />
    </div>
  );
}

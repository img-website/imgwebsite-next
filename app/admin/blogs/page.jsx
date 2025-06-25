import { BlogTable } from "@/components/blogTable";

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/blogs`, { cache: 'no-store' });
  const json = await res.json();
  const blogs = Array.isArray(json?.data) ? json.data : [];
  const statusMap = { 1: 'draft', 2: 'published', 3: 'archived', 4: 'scheduled' };
  const data = blogs.map(blog => {
    const obj = {
      id: blog._id,
      title: blog.title,
      status: statusMap[blog.status] || 'draft',
      created_date: blog.created_date,
      slug: blog.slug,
    };
    if (blog.banner) {
      obj.banner = blog.banner?.startsWith('http')
        ? blog.banner
        : `${process.env.NEXT_PUBLIC_BASE_URL}/api/uploads/blogs/${blog.banner}`;
    }
    return obj;
  });

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <BlogTable data={data} />
      </div>
    </>
  );
}

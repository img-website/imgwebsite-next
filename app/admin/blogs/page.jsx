import { cookies } from "next/headers";
import { BlogTable } from "@/components/blogTable";
import { hasServerPermission } from "@/helpers/permissions";
import { getBlogs } from "@/app/actions/blogs";

export default async function Page() {
  const store = await cookies();
  const canAdd = hasServerPermission(store, 'blogs', 'write');

  const blogs = await getBlogs();
  const statusMap = { 1: 'draft', 2: 'published', 3: 'archived', 4: 'scheduled' };
  const data = blogs.map(blog => {
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

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <BlogTable data={data} canAdd={canAdd} />
      </div>
    </>
  );
}

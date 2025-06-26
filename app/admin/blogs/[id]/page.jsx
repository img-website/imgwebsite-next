import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DeleteBlogButtons from "@/components/delete-blog-buttons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import 'tinymce/skins/ui/oxide/content.min.css';
import 'tinymce/skins/content/default/content.min.css';

export default async function Page({ params }) {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/blogs/${id}`, { cache: 'no-store' });
  const json = await res.json();
  const blog = json?.data;

  if (!blog) {
    return <div className="p-4">Blog not found</div>;
  }

  const statusMap = { 1: 'Draft', 2: 'Published', 3: 'Archived', 4: 'Scheduled' };
  const bannerSrc = blog.banner?.startsWith('http') ? blog.banner : `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/blogs/${blog.banner}`;
  const thumbnailSrc = blog.thumbnail?.startsWith('http') ? blog.thumbnail : `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/blogs/${blog.thumbnail}`;

  return (
    <>
      <div className="w-full p-4">
        <Card>
          <CardHeader>
            <CardTitle>Blog Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <Image src={bannerSrc} alt={blog.title} width={160} height={90} className="rounded" unoptimized={true} />
              <Image src={thumbnailSrc} alt={blog.title} width={120} height={80} className="rounded" unoptimized={true} />
              <p><strong>Title:</strong> {blog.title}</p>
              <p><strong>Slug:</strong> {blog.slug}</p>
              <p><strong>Category:</strong> {blog.category?.category_name}</p>
              <p><strong>Author:</strong> {blog.author?.author_name}</p>
              <p><strong>Created:</strong> {new Date(blog.created_date).toLocaleString()}</p>
              {/* Show scheduled publish date/time if status is Scheduled */}
              {blog.status === 4 && blog.published_date_time && (
                <p><strong>Scheduled Publish:</strong> {new Date(blog.published_date_time).toLocaleString()}</p>
              )}
              {/* Show published date/time if status is Published */}
              {blog.status === 2 && blog.published_date_time && (
                <p><strong>Published:</strong> {new Date(blog.published_date_time).toLocaleString()}</p>
              )}

              <div><strong>Status:</strong> {statusMap[blog.status]}</div>
              
              <div
                className="mce-content-body [&_*]:[all:revert]"
                dangerouslySetInnerHTML={{ __html: blog.description }}  // Render HTML content
              />



            </div>
            <div className="mt-4 flex gap-2">
              <Link href={`/admin/blogs/${blog._id}/edit`}>
                <Button type="button">Edit</Button>
              </Link>
              {blog.status === 1 && <DeleteBlogButtons id={blog._id} />}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

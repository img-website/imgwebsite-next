"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DeleteBlogButtons from "@/components/delete-blog-buttons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { use as usePromise } from "react";
import { useBlog } from "@/hooks/use-blogs";
import BlogDetailSkeleton from "@/components/skeleton/blog-detail-skeleton";
import 'tinymce/skins/ui/oxide/content.min.css';
import 'tinymce/skins/content/default/content.min.css';

export default function Page({ params }) {
  const { id } = usePromise(params);
  const { blog } = useBlog(id);

  if (blog === undefined) {
    return <BlogDetailSkeleton />;
  }

  if (blog === null) {
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
              <Image priority={true} src={bannerSrc} alt={blog.title} width={384} height={219} className="rounded" />
              <Image priority={true} src={thumbnailSrc} alt={blog.title} width={256} height={146} className="rounded" />
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

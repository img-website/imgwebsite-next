import { DynamicBreadcrumb } from "@/components/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Page({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/blogs/${params.id}`, { cache: 'no-store' });
  const json = await res.json();
  const blog = json?.data;
  if (!blog) {
    return <div className="p-4">Blog not found</div>;
  }
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
          <DynamicBreadcrumb />
        </div>
      </header>
      <Separator />
      <div className="w-full p-4">
        <Card>
          <CardHeader>
            <CardTitle>{blog.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p><strong>Status:</strong> {blog.status}</p>
            <p><strong>Excerpt:</strong> {blog.excerpt}</p>
            <p><strong>Content:</strong></p>
            <div className="whitespace-pre-wrap">{blog.content}</div>
            <p><strong>Created:</strong> {new Date(blog.created_date).toLocaleString()}</p>
          </CardContent>
        </Card>
        <div className="mt-4 flex gap-2">
          <Link href={`/admin/blogs/${blog._id}/edit`}><Button type="button">Edit</Button></Link>
        </div>
      </div>
    </>
  );
}

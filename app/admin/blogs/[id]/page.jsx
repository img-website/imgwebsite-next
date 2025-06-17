import { DynamicBreadcrumb } from "@/components/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default async function Page({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/blogs/${params.id}`, { cache: 'no-store' });
  const json = await res.json();
  const blog = json?.data;
  if (!blog) return <div className="p-4">Blog not found</div>;
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
      <div className="p-4 space-y-4">
        <h2 className="text-3xl font-bold">{blog.title}</h2>
        <p className="text-muted-foreground">By {blog.author?.author_name || ''}</p>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </>
  );
}

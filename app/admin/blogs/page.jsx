import { BlogTable } from "@/components/blogTable";
import { DynamicBreadcrumb } from "@/components/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/blogs`, { cache: 'no-store' });
  const json = await res.json();
  const blogs = Array.isArray(json?.data) ? json.data : [];
  const data = blogs.map(b => ({
    id: b._id,
    title: b.title,
    status: b.status,
    created_date: b.created_date,
  }));

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
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <BlogTable data={data} />
      </div>
    </>
  );
}

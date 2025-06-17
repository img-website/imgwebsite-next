import EditCategoryForm from "./EditCategoryForm";
import { DynamicBreadcrumb } from "@/components/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default async function Page({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/blogs/categories/${params.id}`, { cache: 'no-store' });
  const json = await res.json();
  const category = json?.data;

  if (!category) {
    return <div className="p-4">Category not found</div>;
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
        <EditCategoryForm category={category} />
      </div>
    </>
  );
}

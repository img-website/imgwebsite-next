import { DynamicBreadcrumb } from "@/components/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ImageTable } from "@/components/ImageTable";

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/images`, { cache: 'no-store' });
  const json = await res.json();
  const images = Array.isArray(json?.data) ? json.data : [];
  const data = images.map(img => ({
    id: img._id,
    storedName: img.storedName,
    uploadedBy: img.uploadedBy,
    url: img.storedName?.startsWith('http')
      ? img.storedName
      : `${process.env.NEXT_PUBLIC_BASE_URL}/api/uploads/images/${img.storedName}?t=${Date.now()}`,
    createdAt: img.createdAt,
    // add more fields if needed
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
        <ImageTable data={data} />
      </div>
    </>
  );
}

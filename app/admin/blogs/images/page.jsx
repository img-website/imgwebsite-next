import { ImageTable } from "@/components/ImageTable";
import { cookies } from "next/headers";
import { hasServerPermission } from "@/helpers/permissions";

export default async function Page() {
  const store = await cookies();
  const canAdd = hasServerPermission(store, 'images', 'write');
  const canEdit = hasServerPermission(store, 'images', 'edit');

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/images`, { cache: 'no-store' });
  const json = await res.json();
  const images = Array.isArray(json?.data) ? json.data : [];
  const data = images.map(img => ({
    id: img._id,
    storedName: img.storedName,
    uploadedBy: img.uploadedBy,
    url: img.storedName?.startsWith('http')
      ? img.storedName
      : `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/${img.storedName}?t=${Date.now()}`,
    createdAt: img.createdAt,
    // add more fields if needed
  }));


  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <ImageTable data={data} canAdd={canAdd} canEdit={canEdit} />
      </div>
    </>
  );
}

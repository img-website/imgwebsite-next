"use client";
import { ImageTable } from "@/components/ImageTable";
import ImageTableSkeleton from "@/components/skeleton/image-table-skeleton";
import { useImages } from "@/hooks/use-images";
import { usePermission } from "@/hooks/use-permission";

export default function Page() {
  const { images } = useImages();
  const canAdd = usePermission('images', 'write');
  const canEdit = usePermission('images', 'edit');

  const data = images
    ? images.map((img) => ({
        id: img._id,
        storedName: img.storedName,
        uploadedBy: img.uploadedBy,
        url: img.storedName?.startsWith('http')
          ? img.storedName
          : `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/${img.storedName}?t=${Date.now()}`,
        createdAt: img.createdAt,
      }))
    : [];

  if (!images) {
    return <ImageTableSkeleton />;
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <ImageTable data={data} canAdd={canAdd} canEdit={canEdit} />
    </div>
  );
}

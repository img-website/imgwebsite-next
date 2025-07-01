"use client";
import { useCachedApi } from '@/hooks/use-cached-api';
import { ImageTable } from '@/components/ImageTable';
import { TableSkeleton } from '@/components/skeleton/table-skeleton';

export default function ImagesPageClient({ canAdd, canEdit }) {
  const { data, loading } = useCachedApi('images', async () => {
    const res = await fetch('/api/v1/admin/images');
    const json = await res.json();
    const images = Array.isArray(json?.data) ? json.data : [];
    return images.map(img => ({
      id: img._id,
      storedName: img.storedName,
      uploadedBy: img.uploadedBy,
      url: img.storedName?.startsWith('http')
        ? img.storedName
        : `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/${img.storedName}?t=${Date.now()}`,
      createdAt: img.createdAt,
    }));
  });

  if (loading || !data) return <TableSkeleton />;

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <ImageTable data={data} canAdd={canAdd} canEdit={canEdit} />
    </div>
  );
}

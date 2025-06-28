import { ImageTable } from "@/components/ImageTable";

export default async function Page() {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? '';
  const res = await fetch(`${base}/api/v1/admin/images`, { cache: 'no-store' });
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
        <ImageTable data={data} />
      </div>
    </>
  );
}

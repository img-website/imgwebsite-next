import EditCategoryForm from "./EditCategoryForm";

export default async function Page({ params }) {
  const { id } = await params;
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? '';
  const res = await fetch(`${base}/api/v1/admin/blogs/categories/${id}`, { cache: 'no-store' });
  const json = await res.json();
  const category = json?.data;

  if (!category) {
    return <div className="p-4">Category not found</div>;
  }

  return (
    <>
      <div className="w-full p-4">
        <EditCategoryForm category={category} />
      </div>
    </>
  );
}

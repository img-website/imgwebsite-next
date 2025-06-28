import { CategoryTable } from "@/components/categoryTable";

export default async function Page() {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? '';
  const res = await fetch(`${base}/api/v1/admin/blogs/categories`, { cache: 'no-store' });
  const json = await res.json();
  const categories = Array.isArray(json?.data) ? json.data : [];
  const statusMap = { 1: 'active', 2: 'inactive', 3: 'suspended' };
  const data = categories.map(cat => ({
    id: cat._id,
    category_name: cat.category_name,
    description: cat.description,
    status: statusMap[cat.status] || 'inactive',
    created_date: cat.created_date,
    modified_date: cat.modified_date,
    blog_count: cat.blog_count,
  }));

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <CategoryTable data={data} />
      </div>
    </>
  );
}

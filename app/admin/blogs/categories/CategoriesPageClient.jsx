"use client";
import { useCachedApi } from '@/hooks/use-cached-api';
import { CategoryTable } from '@/components/categoryTable';

export default function CategoriesPageClient({ canAdd, canEdit }) {
  const { data, loading } = useCachedApi('categories', async () => {
    const res = await fetch('/api/v1/admin/blogs/categories');
    const json = await res.json();
    const categories = Array.isArray(json?.data) ? json.data : [];
    const statusMap = { 1: 'active', 2: 'inactive', 3: 'suspended' };
    return categories.map(cat => ({
      id: cat._id,
      category_name: cat.category_name,
      description: cat.description,
      status: statusMap[cat.status] || 'inactive',
      created_date: cat.created_date,
      modified_date: cat.modified_date,
      blog_count: cat.blog_count,
    }));
  });

  if (loading || !data) return <div className="p-4">Loading...</div>;

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <CategoryTable data={data} canAdd={canAdd} canEdit={canEdit} />
    </div>
  );
}

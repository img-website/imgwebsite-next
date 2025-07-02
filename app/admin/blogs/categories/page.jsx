"use client";
import { CategoryTable } from "@/components/categoryTable";
import CategoryTableSkeleton from "@/components/skeleton/category-table-skeleton";
import { useCategories } from "@/hooks/use-categories";
import { usePermission } from "@/hooks/use-permission";

export default function Page() {
  const { categories } = useCategories();
  const canAdd = usePermission('categories', 'write');
  const canEdit = usePermission('categories', 'edit');

  const statusMap = { 1: 'active', 2: 'inactive', 3: 'suspended' };
  const data = categories ? categories.map(cat => ({
    id: cat._id,
    category_name: cat.category_name,
    description: cat.description,
    status: statusMap[cat.status] || 'inactive',
    created_date: cat.created_date,
    modified_date: cat.modified_date,
    blog_count: cat.blog_count,
  })) : [];

  if (!categories) {
    return <CategoryTableSkeleton />;
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <CategoryTable data={data} canAdd={canAdd} canEdit={canEdit} />
    </div>
  );
}

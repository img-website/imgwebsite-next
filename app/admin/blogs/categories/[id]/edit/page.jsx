"use client";
import EditCategoryForm from "./EditCategoryForm";
import { useCategory } from "@/hooks/use-categories";
import CategoryEditSkeleton from "@/components/skeleton/category-edit-skeleton";

export default function Page({ params }) {
  const { category, loading } = useCategory(params.id);

  if (loading && !category) {
    return <CategoryEditSkeleton />;
  }

  if (!loading && !category) {
    return <div className="p-4">Category not found</div>;
  }

  return (
    <div className="w-full p-4">
      <EditCategoryForm category={category} />
    </div>
  );
}

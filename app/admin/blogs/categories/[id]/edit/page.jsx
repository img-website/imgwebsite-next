"use client";
import EditCategoryForm from "./EditCategoryForm";
import { useCategory } from "@/hooks/use-categories";
import { use as usePromise } from "react";
import CategoryEditSkeleton from "@/components/skeleton/category-edit-skeleton";

export default function Page({ params }) {
  const { id } = usePromise(params);
  const { category } = useCategory(id);

  if (category === undefined) {
    return <CategoryEditSkeleton />;
  }

  if (category === null) {
    return <div className="p-4">Category not found</div>;
  }

  return (
    <div className="w-full p-4">
      <EditCategoryForm category={category} />
    </div>
  );
}

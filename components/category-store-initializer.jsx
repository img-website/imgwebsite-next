"use client";
import { useEffect } from "react";
import { useCategoryStore } from "@/app/store/use-category-store";

export default function CategoryStoreInitializer({ categories, category }) {
  const setCategories = useCategoryStore((state) => state.setCategories);
  const setCategoryDetail = useCategoryStore((state) => state.setCategoryDetail);

  useEffect(() => {
    if (categories) {
      setCategories(categories);
    }
  }, [categories, setCategories]);

  useEffect(() => {
    if (category) {
      setCategoryDetail(category._id || category.id, category);
    }
  }, [category, setCategoryDetail]);

  return null;
}

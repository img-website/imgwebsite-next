"use client";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckIcon, CalendarIcon, FileTextIcon, CircleIcon } from "lucide-react";
import DeleteCategoryButtons from "@/components/delete-category-buttons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useCategory } from "@/hooks/use-categories";
import { use as usePromise } from "react";
import CategoryDetailSkeleton from "@/components/skeleton/category-detail-skeleton";
import { Separator } from "@/components/ui/separator";

export default function Page({ params }) {
  const { id } = usePromise(params);
  const { category } = useCategory(id);
  const statusMap = { 1: 'active', 2: 'inactive', 3: 'suspended' };

  if (category === undefined) {
    return <CategoryDetailSkeleton />;
  }

  if (category === null) {
    return <div className="p-4">Category not found</div>;
  }

  return (
    <div className="w-full p-4">
      <Card className="max-sm:py-0 max-sm:border-0 max-sm:shadow-none">
        <CardHeader className="max-sm:px-0">
          <CardTitle className="text-lg font-semibold">Category Details</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="max-sm:px-0">
          <div className="flex flex-col gap-2 items-start">
            <div className="text-2xl font-bold mb-1 max-sm:text-xl w-full">{category.category_name}</div>
            <div className="text-muted-foreground mb-4 max-sm:text-sm w-full">{category.description}</div>
            <div className="flex flex-col gap-3 w-full max-w-md">
              <div className="flex items-center justify-between bg-muted/50 rounded-lg px-3 py-2">
                <div className="flex items-center gap-3">
                  <CircleIcon className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium text-base max-sm:text-sm">{statusMap[category.status]?.charAt(0).toUpperCase() + statusMap[category.status]?.slice(1) || "-"}</span>
                </div>
              </div>
              <div className="flex items-center justify-between bg-muted/50 rounded-lg px-3 py-2">
                <div className="flex items-center gap-3">
                  <FileTextIcon className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium text-base max-sm:text-sm">{category.blog_count} Blogs</span>
                </div>
              </div>
              <div className="flex items-center justify-between bg-muted/50 rounded-lg px-3 py-2">
                <div className="flex items-center gap-3">
                  <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium text-base max-sm:text-sm">{new Date(category.created_date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <Separator />
        <CardFooter className="max-sm:px-0">
          <div className="flex gap-2 justify-end w-full">
            <Link href={`/admin/blogs/categories/${category._id}/edit`}>
              <Button type="button">Edit</Button>
            </Link>
            <DeleteCategoryButtons id={category._id} />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

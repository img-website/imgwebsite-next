import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DeleteCategoryButtons from "@/components/delete-category-buttons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page({ params }) {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/blogs/categories/${id}`, { cache: 'no-store' });
  const json = await res.json();
  const category = json?.data;

  if (!category) {
    return (
      <div className="p-4">Category not found</div>
    );
  }

  const statusMap = { 1: 'active', 2: 'inactive', 3: 'suspended' };

  return (
    <>
      <div className="w-full p-4">
        <Card>
          <CardHeader>
            <CardTitle>Category Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p><strong>Name:</strong> {category.category_name}</p>
              <p><strong>Description:</strong> {category.description}</p>
              <p><strong>Status:</strong> {statusMap[category.status]}</p>
              <p><strong>Blogs:</strong> {category.blog_count}</p>
              <p><strong>Created:</strong> {new Date(category.created_date).toLocaleString()}</p>
              {category.deleted_at && (
                <p><strong>Deleted:</strong> {new Date(category.deleted_at).toLocaleString()}</p>
              )}
            </div>
            <div className="mt-4 flex gap-2">
              <Link href={`/admin/blogs/categories/${category._id}/edit`}>
                <Button type="button">Edit</Button>
              </Link>
              <DeleteCategoryButtons id={category._id} />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

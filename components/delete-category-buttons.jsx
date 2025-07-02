"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import apiFetch from "@/helpers/apiFetch";
import { useCategory, useCategories } from "@/hooks/use-categories";
import { Copy } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export default function DeleteCategoryButtons({ id }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(false);
  const { refresh: refreshCategory } = useCategory(id);
  const { refresh: refreshCategories } = useCategories();

  const handleOpen = async () => {
    setOpen(true);
    setLoading(true);
    // Fetch blogs for this category
    const res = await fetch(`/api/v1/admin/blogs/by-category/${id}`);
    const data = await res.json();
    setBlogs(data.success ? data.data : []);
    setLoading(false);
  };

  const handleDelete = async () => {
    try {
      const url = `/api/v1/admin/blogs/categories/${id}`;
      const res = await apiFetch(url, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        refreshCategory();
        refreshCategories();
        toast.success(data.message || "Category deleted");
        router.push("/admin/blogs/categories");
      } else {
        toast.error(data.error || "Failed to delete category");
      }
    } catch (error) {
      toast.error("Failed to delete category");
    } finally {
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive" className="cursor-pointer" onClick={handleOpen}>Delete</Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col">
        <DialogHeader>
          <DialogTitle>Delete Category</DialogTitle>
          {blogs && blogs.length > 0 ? (
            <DialogDescription className="flex flex-col gap-4">
              This category has published blogs. You must delete or reassign these blogs before deleting the category.
            </DialogDescription>
            ):(
            <DialogDescription>
              This will soft delete the category. Continue?
            </DialogDescription>
            )}
        </DialogHeader>
        {loading ? (
          <div className="space-y-2">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-8 w-full rounded bg-muted" />
            ))}
          </div>
        ) : blogs && blogs.length > 0 ? (
          <>
              {blogs.map(blog => (
                <div key={blog._id} className="flex items-center gap-2 bg-muted rounded px-3 py-2">
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="flex-1 line-clamp-1 w-full text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={blog.title}
                  >
                    {blog.title}
                  </Link>
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    onClick={() => {
                      navigator.clipboard.writeText(`${window.location.origin}/blogs/${blog.slug}`);
                      toast.success("Copied!");
                    }}
                    aria-label="Copy blog URL"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleDelete}>
                Delete
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

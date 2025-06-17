"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import TokenFromCookie from "@/helpers/tokenFromCookie";

export default function DeleteCategoryButtons({ id }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    try {
      const token = TokenFromCookie();
      const url = `/api/v1/admin/blogs/categories/${id}`;
      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (data.success) {
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
        <Button variant="destructive" className="mt-4 cursor-pointer">Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Category</DialogTitle>
          <DialogDescription>
            This will soft delete the category. Continue?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

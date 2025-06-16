"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import TokenFromCookie from "@/helpers/tokenFromCookie";

export default function DeleteAuthorButtons({ id }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    try {
      const token = TokenFromCookie();
      const url = `/api/v1/admin/blogs/authors/${id}`;
      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.message || "Author deleted");
        router.push("/admin/blogs/authors");
      } else {
        toast.error(data.error || "Failed to delete author");
      }
    } catch (error) {
      toast.error("Failed to delete author");
    } finally {
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive" className="mt-4">Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Author</DialogTitle>
          <DialogDescription>
            This will soft delete the author. Continue?
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

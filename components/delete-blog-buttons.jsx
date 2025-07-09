"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2Icon, XIcon } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import apiFetch from "@/helpers/apiFetch";
import { useBlogStore } from "@/app/store/use-blog-store";

export default function DeleteBlogButtons({ id }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const removeBlog = useBlogStore((state) => state.removeBlog);

  const handleDelete = async () => {
    try {
      const url = `/api/v1/admin/blogs/${id}`;
      const res = await apiFetch(url, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.message || "Blog deleted");
        removeBlog(id);
        router.push("/admin/blogs");
      } else {
        toast.error(data.error || "Failed to delete blog");
      }
    } catch (error) {
      toast.error("Failed to delete blog");
    } finally {
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive" className="cursor-pointer">
          <Trash2Icon className="w-4 h-4 mr-1 -ml-1" />
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent className="max-sm:w-[calc(100%-24px)] max-sm:rounded-lg">
        <DialogHeader>
          <DialogTitle>Delete Blog</DialogTitle>
          <DialogDescription>
            This will permanently delete the blog. Continue?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="max-sm:grid max-sm:grid-cols-2 max-sm:gap-3 flex justify-end gap-4">
          <Button variant="outline" onClick={() => setOpen(false)} className="cursor-pointer">
            <XIcon className="w-4 h-4" />
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleDelete} className="cursor-pointer">
            <Trash2Icon className="w-4 h-4" />
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

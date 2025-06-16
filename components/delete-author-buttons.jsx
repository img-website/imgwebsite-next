"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import TokenFromCookie from "@/helpers/tokenFromCookie";

export default function DeleteAuthorButtons({ id }) {
  const router = useRouter();

  const handleDelete = async (force) => {
    const confirmMessage = force
      ? "This will permanently delete the author. Continue?"
      : "Soft delete this author?";
    if (!window.confirm(confirmMessage)) return;
    try {
      const token = TokenFromCookie();
      const url = force
        ? `/api/v1/admin/blogs/authors/${id}?force=true`
        : `/api/v1/admin/blogs/authors/${id}`;
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
    }
  };

  return (
    <div className="flex gap-2 mt-4">
      <Button variant="outline" onClick={() => handleDelete(false)}>
        Soft Delete
      </Button>
      <Button variant="destructive" onClick={() => handleDelete(true)}>
        Hard Delete
      </Button>
    </div>
  );
}

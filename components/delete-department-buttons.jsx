"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
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
import { Skeleton } from "@/components/ui/skeleton";

import React from "react";

export default function DeleteDepartmentButtons({
  id,
  children,
  open: controlledOpen,
  onOpenChange,
}) {
  const router = useRouter();
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = onOpenChange || setInternalOpen;
  const [admins, setAdmins] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => setOpen(true);

  React.useEffect(() => {
    async function fetchAdmins() {
      setLoading(true);
      const res = await fetch(`/api/v1/admin/admins/by-department/${id}`);
      const data = await res.json();
      setAdmins(data.success ? data.data : []);
      setLoading(false);
    }
    if (open) {
      fetchAdmins();
    } else {
      setAdmins(null);
    }
  }, [open, id]);

  const handleDelete = async () => {
    try {
      const url = `/api/v1/admin/departments/${id}`;
      const res = await apiFetch(url, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        toast.success("Department deleted");
        router.refresh();
      } else {
        toast.error(data.error || "Failed to delete department");
      }
    } catch (error) {
      toast.error("Failed to delete department");
    } finally {
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children ? (
          React.cloneElement(children, { onClick: handleOpen })
        ) : (
          <Button
            variant="destructive"
            className="cursor-pointer"
            onClick={handleOpen}
          >
            Delete
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="flex flex-col">
        <DialogHeader>
          <DialogTitle>Delete Department</DialogTitle>
          {admins && admins.length > 0 ? (
            <DialogDescription className="flex flex-col gap-4">
              This department is assigned to the following admins. You must reassign them before deleting the department.
            </DialogDescription>
          ) : (
            <DialogDescription>This will delete the department. Continue?</DialogDescription>
          )}
        </DialogHeader>
        {loading ? (
          <div className="space-y-2">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-8 w-full rounded bg-muted" />
            ))}
          </div>
        ) : admins && admins.length > 0 ? (
          <>
            {admins.map((a) => (
              <div key={a._id} className="flex items-center gap-2 bg-muted rounded px-3 py-2 text-sm">
                {a.email}
              </div>
            ))}
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Close
              </Button>
            </DialogFooter>
          </>
        ) : (
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}



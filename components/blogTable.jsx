"use client";
import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/date-picker";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import apiFetch from "@/helpers/apiFetch";
import RedirectionForm from "@/components/RedirectionForm";
import { deleteRedirection } from "@/actions/redirections";

function BlogActions({ blog }) {
  const router = useRouter();
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openSchedule, setOpenSchedule] = React.useState(false);
  const [scheduleDate, setScheduleDate] = React.useState("");
  const [scheduleTime, setScheduleTime] = React.useState("");
  const [loadingSchedule, setLoadingSchedule] = React.useState(false);
  const [openRedirection, setOpenRedirection] = React.useState(false);
  // Use slug for blog url
  const fromUrl = blog.slug ? `/blogs/${blog.slug}` : "";
  const handleStatusChange = async (status, publishedDateTime) => {
    // If blog is archived and status is being set to republish(2) or schedule(4), delete redirection
    if (blog.status === "archived" && (status === 2 || status === 4)) {
      if (fromUrl) {
        await deleteRedirection(fromUrl);
      }
    }
    try {
      const formData = new FormData();
      formData.append("status", status);
      if (publishedDateTime) formData.append("publishedDateTime", publishedDateTime);
      const res = await apiFetch(`/api/v1/admin/blogs/${blog.id}`, {
        method: "PUT",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Status updated");
        router.refresh();
      } else {
        toast.error(data.error || "Failed to update status");
      }
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  const handleSendNotification = async () => {
    try {
      const res = await apiFetch(`/api/v1/admin/blogs/${blog.id}/notify`, {
        method: "POST",
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Notification sent");
      } else {
        toast.error(data.error || "Failed to send notification");
      }
    } catch (error) {
      toast.error("Failed to send notification");
    }
  };

  const handleDelete = async () => {
    try {
      const res = await apiFetch(`/api/v1/admin/blogs/${blog.id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.message || "Blog deleted");
        router.refresh();
      } else {
        toast.error(data.error || "Failed to delete blog");
      }
    } catch (error) {
      toast.error("Failed to delete blog");
    } finally {
      setOpenDelete(false);
    }
  };

  // Reset date/time when dialog opens
  React.useEffect(() => {
    if (openSchedule) {
      setScheduleDate("");
      setScheduleTime("");
    }
  }, [openSchedule]);

  // Auto-select time when date is picked and time is empty
  React.useEffect(() => {
    if (scheduleDate && !scheduleTime) {
      setScheduleTime("00:00");
    }
  }, [scheduleDate]);

  return (
    <>
      {/* Redirection Dialog */}
      <Dialog open={openRedirection} onOpenChange={setOpenRedirection}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Redirection</DialogTitle>
            <DialogDescription>
              Create a redirection for this blog. "From URL" is prefilled.
            </DialogDescription>
          </DialogHeader>
          <RedirectionForm 
            fromDefault={fromUrl} 
            onSuccess={async () => {
              setOpenRedirection(false);
              await handleStatusChange(3); // 3 = archived
            }} 
          />
        </DialogContent>
      </Dialog>
      <Dialog open={openDelete} onOpenChange={setOpenDelete}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Blog</DialogTitle>
            <DialogDescription>
              This will permanently delete the blog. Continue?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenDelete(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => navigator.clipboard.writeText(blog.id)}>
            Copy blog ID
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            {blog.status === "draft" ? (
              <Link href={`/admin/blogs/add?id=${blog.id}`}>Edit</Link>
            ) : (
              <Link href={`/admin/blogs/${blog.id}/edit`}>Edit</Link>
            )}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleSendNotification}>
            Send Notification
          </DropdownMenuItem>
          {blog.status !== "draft" && (
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Change Status</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                {/* Only show Archive for published blogs */}
                {blog.status === "published" && (
                  <DropdownMenuItem onClick={() => setOpenRedirection(true)}>
                    Archive
                  </DropdownMenuItem>
                )}
                {/* Only show Republish and Schedule for archived blogs */}
                {blog.status === "archived" && (
                  <>
                    <DropdownMenuItem onClick={() => handleStatusChange(2)}>
                      Republish
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setOpenSchedule(true)}>
                      Schedule
                    </DropdownMenuItem>
                  </>
                )}
                {/* Only show Publish and Reschedule for scheduled blogs */}
                {blog.status === "scheduled" && (
                  <>
                    <DropdownMenuItem onClick={() => handleStatusChange(2)}>
                      Publish
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setOpenSchedule(true)}>
                      Reschedule
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          )}
          {blog.status === "draft" && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive" onClick={() => setOpenDelete(true)}>
                Delete
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      {/* Schedule/Reschedule Dialog */}
      <Dialog open={openSchedule} onOpenChange={setOpenSchedule}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{blog.status === "archived" ? "Schedule Blog" : "Reschedule Blog"}</DialogTitle>
            <DialogDescription>
              Select publish date and time for scheduling this blog.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-2 w-full mb-4">
            <div className="grow">
              <DatePicker
                value={scheduleDate}
                onChange={setScheduleDate}
                placeholder="Select date"
                className="w-full"
              />
            </div>
            <Input
              type="time"
              value={scheduleTime}
              onChange={e => setScheduleTime(e.target.value)}
              className="shrink-0 w-auto"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenSchedule(false)}>
              Cancel
            </Button>
            <Button
              onClick={async () => {
                if (!scheduleDate || !scheduleTime) {
                  toast.error("Please select both date and time");
                  return;
                }
                setLoadingSchedule(true);
                await handleStatusChange(4, `${scheduleDate}T${scheduleTime}`);
                setLoadingSchedule(false);
                setOpenSchedule(false);
              }}
              disabled={loadingSchedule}
            >
              {loadingSchedule ? "Scheduling..." : "Schedule"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}


export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "banner",
    header: "Banner",
    cell: ({ row }) => {
      const src = row.getValue("banner");
      const title = row.original.title || "Blog Banner";
      return (
        <Avatar className="w-10 h-10 rounded-lg">
          <AvatarImage src={src} alt={title} className="object-cover" />
          <AvatarFallback>{title?.[0] || "B"}</AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Title
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="font-medium">
        <Link href={`/admin/blogs/${row.original.id}`} className="hover:underline">
          {row.getValue("title")}
        </Link>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      return (
        <Badge
          variant={status === "published" ? "default" : "secondary"}
          className="capitalize"
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "created_date",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Created Date
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue("created_date"));
      return new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(date);
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <BlogActions blog={row.original} />,
  },
];

export function BlogTable({ data }) {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex gap-3 items-center py-4">
        <Input
          placeholder="Filter by title..."
          value={table.getColumn("title")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button asChild>
          <Link href="/admin/blogs/add"><Plus /> Add Blog</Link>
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

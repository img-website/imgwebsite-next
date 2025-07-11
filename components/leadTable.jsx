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
import { hasClientPermission } from "@/helpers/permissions";
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
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { toast } from "sonner";
import apiFetch from "@/helpers/apiFetch";
import { useLeadStore } from "@/app/store/use-lead-store";
import { getPublicUrl } from "@/lib/s3";

function LeadActions({ lead }) {
  const [openAttachments, setOpenAttachments] = React.useState(false);
  const moveLead = useLeadStore((state) => state.moveLead);

  const handleStatusChange = async (status) => {
    try {
      const formData = new FormData();
      formData.append("status", status);
      const res = await apiFetch(`/api/v1/admin/leads/${lead.id}`, {
        method: "PUT",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Status updated");
        moveLead(lead.id, status);
      } else {
        toast.error(data.error || "Failed to update status");
      }
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  return (
    <>
      <Dialog open={openAttachments} onOpenChange={setOpenAttachments}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Attachments</DialogTitle>
          </DialogHeader>
          {lead.attachments && lead.attachments.length > 0 ? (
            <div className="space-y-2">
              {lead.attachments.map((file, idx) => (
                <a
                  key={idx}
                  href={getPublicUrl(`leads/${file}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline block"
                >
                  {file}
                </a>
              ))}
            </div>
          ) : (
            <p>No attachments</p>
          )}
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
          {hasClientPermission('leads', 'edit') && (
            <DropdownMenuItem asChild>
              <Link href={`/admin/leads/${lead.id}/edit`}>Edit</Link>
            </DropdownMenuItem>
          )}
          {lead.status === "upcoming" ? (
            <DropdownMenuItem onClick={() => handleStatusChange(2)}>
              Move to Career
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem onClick={() => handleStatusChange(1)}>
              Move to Leads
            </DropdownMenuItem>
          )}
          {lead.attachments && lead.attachments.length > 0 && (
            <DropdownMenuItem onClick={() => setOpenAttachments(true)}>
              Attachments
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
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
    accessorKey: "contact_name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="font-medium">
        <Link href={`/admin/leads/${row.original.id}`} className="hover:underline">
          {row.getValue("contact_name")}
        </Link>
      </div>
    ),
  },
  {
    accessorKey: "mobile_number",
    header: "Mobile",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "organization",
    header: "Organization",
  },
  {
    accessorKey: "requirements",
    header: "Requirements",
    cell: ({ row }) => (
      <div className="line-clamp-2">{row.getValue("requirements")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      return (
        <Badge
          variant={status === "career" ? "default" : "secondary"}
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
        timeZone: "UTC",
      }).format(date);
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <LeadActions lead={row.original} />,
  },
];

export function LeadTable({ data }) {
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
          placeholder="Filter by name..."
          value={table.getColumn("contact_name")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("contact_name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm max-sm:text-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              <span className="max-sm:hidden">Columns</span> <ChevronDown className="ml-2 h-4 w-4 max-sm:hidden" />
              <span className="sm:hidden"><ArrowUpDown className="h-4 w-4" /></span>
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
        {hasClientPermission('leads', 'write') && (
          <Button asChild>
            <Link href="/admin/leads/add"><Plus /> <span className="max-sm:hidden">Add Lead</span></Link>
          </Button>
        )}
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
        <div className="text-muted-foreground flex-1 sm:text-sm text-xs">
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
            <span className="max-sm:hidden">Previous</span>
            <span className="sm:hidden"><ChevronDown className="h-4 w-4 rotate-90" /></span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="max-sm:hidden">Next</span>
            <span className="sm:hidden"><ChevronDown className="h-4 w-4 -rotate-90" /></span>
          </Button>
        </div>
      </div>
    </div>
  );
}

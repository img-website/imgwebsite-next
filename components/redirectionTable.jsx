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
import { usePermission } from "@/hooks/use-permission";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import apiFetch from "@/helpers/apiFetch";
import { useRedirectionStore } from "@/app/store/use-redirection-store";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

function RedirectionActions({ redirection, canEdit, canDelete }) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const deleteRedirection = useRedirectionStore((s) => s.deleteRedirection);

  const handleDelete = async () => {
    try {
      const res = await apiFetch(`/api/v1/admin/redirections/${redirection.id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Redirection deleted");
        if (data.notice) toast.info(data.notice);
        deleteRedirection(redirection.id);
        setOpen(false);
        router.refresh();
      } else {
        toast.error(data.error || "Failed to delete redirection");
        if (data.notice) toast.info(data.notice);
      }
    } catch (error) {
      toast.error("Failed to delete redirection");
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Redirection?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete this redirection.
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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => navigator.clipboard.writeText(redirection.id)}>
            Copy ID
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {canEdit && (
            <DropdownMenuItem asChild>
              <Link href={`/admin/redirections/${redirection.id}/edit`}>Edit</Link>
            </DropdownMenuItem>
          )}
          {canDelete && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600" onClick={() => setOpen(true)}>
                Delete
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

function createColumns(canEdit, canDelete) {
  return [
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
    accessorKey: "from",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        From
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="font-mono text-xs text-blue-700">{row.getValue("from")}</span>
    ),
  },
  {
    accessorKey: "to",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        To
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="font-mono text-xs text-green-700">{row.getValue("to")}</span>
    ),
  },
  {
    accessorKey: "methodCode",
    header: "Type",
    cell: ({ row }) => (
      <span className="text-xs font-semibold">{row.getValue("methodCode")}</span>
    ),
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Created
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const date = row.getValue("createdAt");
      return date
        ? new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
            timeZone: "UTC",
          }).format(new Date(date))
        : "-";
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Updated",
    cell: ({ row }) => {
      const date = row.getValue("updatedAt");
      return date
        ? new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
            timeZone: "UTC",
          }).format(new Date(date))
        : "-";
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => (
      <RedirectionActions
        redirection={row.original}
        canEdit={canEdit}
        canDelete={canDelete}
      />
    ),
  },
  ];
}

export function RedirectionTable({ data, canAdd = false, canEdit = false, canDelete = false }) {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({
    updatedAt: false,
  });
  const [rowSelection, setRowSelection] = React.useState({});

  const clientCanAdd = usePermission('redirections', 'write');
  const clientCanEdit = usePermission('redirections', 'edit');
  const clientCanDelete = usePermission('redirections', 'delete');

  const finalCanAdd = canAdd || clientCanAdd;
  const finalCanEdit = canEdit || clientCanEdit;
  const finalCanDelete = canDelete || clientCanDelete;

  const columns = React.useMemo(
    () => createColumns(finalCanEdit, finalCanDelete),
    [finalCanEdit, finalCanDelete]
  );

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
          placeholder="Filter by from URL..."
          value={table.getColumn("from")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("from")?.setFilterValue(event.target.value)
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
                  onCheckedChange={(value) =>
                    column.toggleVisibility(!!value)
                  }
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
        {finalCanAdd && (
          <Button asChild>
            <Link href="/admin/redirections/add"><Plus /> <span className="max-sm:hidden">Add Redirection</span></Link>
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

"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import apiFetch from "@/helpers/apiFetch";
import { MODULES } from "@/lib/modules";
import { RBAC_ACTIONS } from "@/lib/rbac-actions";
import { useDepartmentStore } from "@/app/store/use-department-store";

const schema = z
  .object({
    name: z.string().min(2, { message: "Name required" }),
    permissions: z.record(z.record(z.boolean())),
  })
  .refine(
    (val) =>
      Object.values(val.permissions || {}).some((m) =>
        Object.values(m).some(Boolean)
      ),
    { path: ["permissions"], message: "Select at least one permission" }
  );

export default function DepartmentForm({ department, onSuccess }) {
  const defaultPermissions = React.useMemo(() => {
    const obj = {};
    MODULES.forEach((m) => {
      obj[m.key] = {};
      RBAC_ACTIONS.forEach((a) => {
        obj[m.key][a] = false;
      });
    });
    return obj;
  }, []);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: department?.name || "",
      permissions: department?.permissions || defaultPermissions,
    },
  });

  const departments = useDepartmentStore((state) => state.departments);
  const setDepartments = useDepartmentStore((state) => state.setDepartments);
  const setDepartmentDetail = useDepartmentStore(
    (state) => state.setDepartmentDetail,
  );
  const updateDepartment = useDepartmentStore((state) => state.updateDepartment);

  React.useEffect(() => {
    if (department) {
      form.reset({
        name: department.name || "",
        permissions: department.permissions || defaultPermissions,
      });
    }
  }, [department]);

  const watchPermissions = form.watch("permissions");

  const moduleAllChecked = React.useCallback(
    (key) => RBAC_ACTIONS.every((a) => watchPermissions?.[key]?.[a]),
    [watchPermissions]
  );

  const allChecked = MODULES.every((m) => moduleAllChecked(m.key));

  const toggleModuleAll = (key, value) => {
    RBAC_ACTIONS.forEach((a) =>
      form.setValue(`permissions.${key}.${a}`, !!value, { shouldDirty: true })
    );
  };

  const toggleAll = (value) => {
    MODULES.forEach((m) => toggleModuleAll(m.key, value));
  };

  async function onSubmit(values) {
    try {
      const body = {
        name: values.name.trim(),
        permissions: values.permissions || {},
      };
      const url = department
        ? `/api/v1/admin/departments/${department._id}`
        : "/api/v1/admin/departments";
      const method = department ? "PUT" : "POST";
      const res = await apiFetch(url, { method, data: body });
      const data = await res.json();
      if (data.success) {
        toast.success(department ? "Department updated" : "Department created");
        if (data.data) {
          const dep = { ...data.data, id: data.data._id || data.data.id };
          if (department) {
            updateDepartment(dep.id, dep);
            setDepartmentDetail(dep.id, dep);
          } else {
            setDepartmentDetail(dep.id, dep);
            setDepartments(departments ? [dep, ...departments] : [dep]);
          }
        }
        if (!department) {
          form.reset();
        }
        if (onSuccess) onSuccess(data.data);
      } else {
        toast.error(data.error || "Failed to create");
      }
    } catch (e) {
      toast.error("Failed to create");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Department name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Checkbox checked={allChecked} onCheckedChange={toggleAll} />
            <span className="text-sm font-medium">Check all modules</span>
          </div>
          <div className="rounded-md border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-40">Module</TableHead>
                  {RBAC_ACTIONS.map((action) => (
                    <TableHead key={action} className="capitalize text-center">
                      {action}
                    </TableHead>
                  ))}
                  <TableHead className="text-center">All</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {MODULES.map((mod) => (
                  <TableRow key={mod.key}>
                    <TableCell className="font-medium">{mod.label}</TableCell>
                    {RBAC_ACTIONS.map((action) => (
                      <TableCell key={action} className="text-center">
                        <FormField
                          control={form.control}
                          name={`permissions.${mod.key}.${action}`}
                          render={({ field }) => (
                            <FormItem className="flex items-center justify-center">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </TableCell>
                    ))}
                    <TableCell className="text-center">
                      <Checkbox
                        checked={moduleAllChecked(mod.key)}
                        onCheckedChange={(val) => toggleModuleAll(mod.key, val)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <Button
          type="submit"
          className="cursor-pointer"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting
            ? department
              ? "Updating..."
              : "Creating..."
            : department
            ? "Update Department"
            : "Create Department"}
        </Button>
      </form>
    </Form>
  );
}

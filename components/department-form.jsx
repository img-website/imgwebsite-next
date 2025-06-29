"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import apiFetch from "@/helpers/apiFetch";
import { MODULES } from "@/lib/modules";
import { RBAC_ACTIONS } from "@/lib/rbac-actions";

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

  React.useEffect(() => {
    if (department) {
      form.reset({
        name: department.name || "",
        permissions: department.permissions || defaultPermissions,
      });
    }
  }, [department]);

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
        if (!department) {
          form.reset();
        }
        if (onSuccess) onSuccess();
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
          {MODULES.map((mod) => (
            <div key={mod.key} className="flex items-center gap-4">
              <span className="w-40 font-medium">{mod.label}</span>
              {RBAC_ACTIONS.map((action) => (
                <FormField
                  key={action}
                  control={form.control}
                  name={`permissions.${mod.key}.${action}`}
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center gap-2">
                      <FormLabel className="capitalize">{action}</FormLabel>
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              ))}
            </div>
          ))}
        </div>
        <Button type="submit" disabled={form.formState.isSubmitting}>
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

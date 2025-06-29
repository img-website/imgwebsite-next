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

const schema = z.object({
  name: z.string().min(2, { message: "Name required" }),
  permissions: z.record(z.record(z.boolean())).optional(),
});

export default function DepartmentForm({ onSuccess }) {
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
    defaultValues: { name: "", permissions: defaultPermissions },
  });

  async function onSubmit(values) {
    try {
      const body = {
        name: values.name.trim(),
        permissions: values.permissions || {},
      };
      const res = await apiFetch("/api/v1/admin/departments", { method: "POST", data: body });
      const data = await res.json();
      if (data.success) {
        toast.success("Department created");
        form.reset();
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
          {form.formState.isSubmitting ? "Creating..." : "Create Department"}
        </Button>
      </form>
    </Form>
  );
}

"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import apiFetch from "@/helpers/apiFetch";

const schema = z.object({
  name: z.string().min(2, { message: "Name required" }),
  permissions: z.string().optional(),
});

export default function DepartmentForm({ onSuccess }) {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { name: "", permissions: "{}" },
  });

  async function onSubmit(values) {
    try {
      const body = { name: values.name.trim() };
      try {
        body.permissions = JSON.parse(values.permissions || "{}");
      } catch {
        toast.error("Invalid permissions JSON");
        return;
      }
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
        <FormField
          control={form.control}
          name="permissions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Permissions JSON</FormLabel>
              <FormControl>
                <Textarea className="min-h-[100px]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Creating..." : "Create Department"}
        </Button>
      </form>
    </Form>
  );
}

"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { updateCategory } from "@/app/actions/categories";
import { refreshModule } from "@/app/store/use-api-store";

const categoryFormSchema = z.object({
  category_name: z.string()
    .min(2, { message: "Category name must be at least 2 characters" })
    .max(100, { message: "Category name cannot exceed 100 characters" }),
  description: z.string()
    .min(10, { message: "Description must be at least 10 characters" })
    .max(500, { message: "Description cannot exceed 500 characters" }),
  status: z.number().optional(),
});

export default function EditCategoryForm({ category }) {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(categoryFormSchema),
    defaultValues: {
      category_name: category.category_name || "",
      description: category.description || "",
      status: category.status || 1,
    },
  });

  async function onSubmit(data) {
    try {
      const formData = new FormData();
      formData.append("category_name", data.category_name.trim());
      formData.append("description", data.description.trim());
      formData.append("status", String(data.status || 1));
      const result = await updateCategory(category._id, formData);
      if (result.success) {
        toast.success("Category updated successfully!");
        refreshModule('categories', '/api/v1/admin/blogs/categories');
        router.push(`/admin/blogs/categories/${category._id}`);
        router.refresh();
      } else {
        toast.error(result.error || "Failed to update category");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Edit Category</CardTitle>
          <CardDescription>Update category details below.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="category_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Technology" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Brief description about the category"
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select onValueChange={(value) => field.onChange(Number(value))} value={String(field.value)}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">Active</SelectItem>
                        <SelectItem value="2">Inactive</SelectItem>
                        <SelectItem value="3">Suspended</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end gap-4">
                <Button type="submit" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Updating..." : "Update Category"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

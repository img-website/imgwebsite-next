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
  FormDescription,
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
import { useCategory } from "@/hooks/use-categories";
import { useCategoryStore } from "@/app/store/use-category-store";
import { Loader2Icon, PlusCircleIcon } from "lucide-react";

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
  useCategory(category._id); // ensure detail cached
  const updateCat = useCategoryStore(state => state.updateCategory);
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
        if (result.data) {
          updateCat(category._id, result.data);
        }
        toast.success("Category updated successfully!");
        router.push(`/admin/blogs/categories/${category._id}`);
      } else {
        toast.error(result.error || "Failed to update category");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <Card className="max-sm:py-0 max-sm:border-0 max-sm:shadow-none">
        <CardHeader className="max-sm:px-0">
          <CardTitle>Edit Category</CardTitle>
          <CardDescription className="max-sm:text-xs">Update category details below.</CardDescription>
        </CardHeader>
        <CardContent className="max-sm:px-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="category_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category Name</FormLabel>
                    <FormControl>
                      <Input className="max-sm:text-sm" placeholder="Technology" {...field} />
                    </FormControl>
                    {form.formState.errors.category_name ? (
                      <FormMessage className="max-sm:text-xs" />
                    ) : (
                      <FormDescription className="max-sm:text-xs">
                        This is the public name of the category.
                      </FormDescription>
                    )}
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
                        className="min-h-[120px] max-sm:text-sm"
                        {...field}
                      />
                    </FormControl>
                    {form.formState.errors.description ? (
                      <FormMessage className="max-sm:text-xs" />
                    ) : (
                      <FormDescription className="max-sm:text-xs">
                        Write a brief description about the category (max 500 characters)
                      </FormDescription>
                    )}
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
                      <FormControl className="w-full">
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
              <div className="flex w-full gap-2 justify-end bg-white z-50 sticky bottom-4 pt-4 border-t shadow-[0px_10px_0px_10px_rgba(255,255,255,1)]">
                <Button
                  type="submit"
                  className="cursor-pointer"
                  disabled={form.formState.isSubmitting}
                >
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2Icon className="w-4 h-4 animate-spin inline-block align-middle" />
                    Updating...
                  </>
                ) : (
                  <>
                    <PlusCircleIcon className="w-4 h-4 inline-block align-middle" />
                    Update Category
                  </>
                )}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

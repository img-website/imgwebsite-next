"use client";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon, Loader2Icon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { createCategory } from "@/app/actions/categories";
import { useCategoryStore } from "@/app/store/use-category-store";
import { useRouter } from "next/navigation";

const categoryFormSchema = z.object({
  category_name: z.string()
    .min(2, { message: "Category name must be at least 2 characters" })
    .max(100, { message: "Category name cannot exceed 100 characters" }),
  description: z.string()
    .min(10, { message: "Description must be at least 10 characters" })
    .max(500, { message: "Description cannot exceed 500 characters" }),
});

export default function Page() {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(categoryFormSchema),
    defaultValues: {
      category_name: "",
      description: "",
    },
  });
  const categories = useCategoryStore((state) => state.categories);
  const setCategories = useCategoryStore((state) => state.setCategories);
  const setCategoryDetail = useCategoryStore((state) => state.setCategoryDetail);
  async function onSubmit(data) {
    try {
      const formData = new FormData();
      formData.append('category_name', data.category_name.trim());
      formData.append('description', data.description.trim());
      const result = await createCategory(formData);
      if (result.success) {
        if (result.data) {
          const newCategory = result.data;
          setCategoryDetail(newCategory._id || newCategory.id, newCategory);
          setCategories(categories ? [newCategory, ...categories] : [newCategory]);
        }
        toast.success("Category created successfully!");
        form.reset();
        router.push(`/admin/blogs/categories`);
      } else {
        toast.error(result.error || "Failed to create category");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  }

  return (
    <>
      <div className="w-full p-4">
        <div className="flex flex-col gap-6">
          <Card className="max-sm:py-0 max-sm:border-0 max-sm:shadow-none">
            <CardHeader className="max-sm:px-0">
              <CardTitle>Add New Category</CardTitle>
              <CardDescription className="max-sm:text-xs">
                Create a new blog category. Fill in the required information below.
              </CardDescription>
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
                  <div className="flex w-full gap-2 justify-end bg-white z-50 sticky bottom-4 pt-4 border-t shadow-[0px_10px_0px_10px_rgba(255,255,255,1)]">
                    <Button
                      type="submit"
                      className="cursor-pointer"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? (
                        <>
                          <Loader2Icon className="w-4 h-4 animate-spin inline-block align-middle" />
                          Creating...
                        </>
                      ) : (
                        <>
                          <PlusCircleIcon className="w-4 h-4 inline-block align-middle" />
                          Create Category
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

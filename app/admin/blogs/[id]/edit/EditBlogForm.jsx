"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { updateBlog } from "@/app/actions/blogs";
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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import ImageCropperInput from "@/components/image-cropper-input";
import { Button } from "@/components/ui/button";

const blogFormSchema = z.object({
  title: z.string().min(2).max(200),
  excerpt: z.string().min(10).max(500),
  content: z.string().min(10),
  featured_image: z.any().optional(),
});

export default function EditBlogForm({ blog }) {
  const form = useForm({
    resolver: zodResolver(blogFormSchema),
    defaultValues: {
      title: blog.title || "",
      excerpt: blog.excerpt || "",
      content: blog.content || "",
    },
  });

  async function onSubmit(data) {
    const formData = new FormData();
    formData.append('title', data.title.trim());
    formData.append('excerpt', data.excerpt.trim());
    formData.append('content', data.content.trim());
    if (data.featured_image?.[0]) {
      formData.append('featured_image', data.featured_image[0]);
    }
    const result = await updateBlog(blog._id, formData);
    if (result.success) {
      toast.success("Blog updated");
    } else {
      toast.error(result.error || "Failed to update blog");
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit Blog</CardTitle>
        <CardDescription>Update blog details.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="excerpt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Excerpt</FormLabel>
                  <FormControl>
                    <Textarea className="min-h-[80px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea className="min-h-[120px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="featured_image"
              render={({ field: { onChange, value } }) => (
                <FormItem>
                  <FormLabel>Featured Image</FormLabel>
                  <FormControl>
                    <ImageCropperInput aspectRatio={1080/617} value={value} onChange={onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end gap-4">
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Updating..." : "Update Blog"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

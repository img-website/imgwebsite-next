"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { DynamicBreadcrumb } from "@/components/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { createBlog } from "@/app/actions/blogs";
import RichTextEditor from "@/components/rich-text-editor";

const blogSchema = z.object({
  title: z.string().min(2).max(200),
  excerpt: z.string().min(10).max(500),
  content: z.string().min(10),
  author: z.string().min(1),
  featured_image: z.any().refine((file) => file?.length === 1, "Image is required"),
  status: z.enum(["draft", "published", "archived"]).default("draft"),
  meta_title: z.string().min(2).max(60),
  meta_description: z.string().min(2).max(160),
});

export default function Page() {
  const form = useForm({ resolver: zodResolver(blogSchema), defaultValues: { status: "draft" } });
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    fetch(`/api/v1/admin/blogs/authors`).then(res => res.json()).then(json => {
      setAuthors(Array.isArray(json?.data) ? json.data : []);
    });
  }, []);

  async function onSubmit(data) {
    const formData = new FormData();
    formData.append('title', data.title.trim());
    formData.append('excerpt', data.excerpt.trim());
    formData.append('content', data.content);
    formData.append('author', data.author);
    if (data.featured_image?.[0]) formData.append('featured_image', data.featured_image[0]);
    formData.append('status', data.status);
    formData.append('meta_title', data.meta_title.trim());
    formData.append('meta_description', data.meta_description.trim());
    const result = await createBlog(formData);
    if (result.success) {
      toast.success("Blog created successfully!");
      form.reset();
    } else {
      toast.error(result.error || "Failed to create blog");
    }
  }

  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
          <DynamicBreadcrumb />
        </div>
      </header>
      <Separator />
      <div className="w-full p-4">
        <Card>
          <CardHeader>
            <CardTitle>Add Blog</CardTitle>
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
                      <FormControl><Input {...field} /></FormControl>
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
                      <FormControl><Textarea {...field} /></FormControl>
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
                      <FormControl><RichTextEditor value={field.value} onChange={field.onChange} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="author"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Author</FormLabel>
                      <FormControl>
                        <select {...field} className="border rounded px-2 py-1">
                          <option value="">Select author</option>
                          {authors.map(a => (
                            <option key={a._id} value={a._id}>{a.author_name}</option>
                          ))}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="featured_image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Featured Image</FormLabel>
                      <FormControl><Input type="file" accept="image/*" onChange={e => field.onChange(e.target.files)} /></FormControl>
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
                      <FormControl>
                        <select {...field} className="border rounded px-2 py-1">
                          <option value="draft">Draft</option>
                          <option value="published">Published</option>
                          <option value="archived">Archived</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="meta_title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Meta Title</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="meta_description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Meta Description</FormLabel>
                      <FormControl><Textarea {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={form.formState.isSubmitting}>{form.formState.isSubmitting ? 'Creating...' : 'Create Blog'}</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

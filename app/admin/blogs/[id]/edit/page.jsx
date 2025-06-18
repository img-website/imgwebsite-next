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
import { updateBlog } from "@/app/actions/blogs";
import RichTextEditor from "@/components/rich-text-editor";
import ImageCropperInput from "@/components/image-cropper-input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const blogSchema = z.object({
  title: z.string().min(2).max(200),
  category: z.string().min(1),
  authorId: z.string().min(1),
  blogWrittenDate: z.string().optional(),
  shortDescription: z.string().min(10).max(500),
  description: z.string().min(10),
  banner: z.any().optional(),
  thumbnail: z.any().optional(),
  imageAlt: z.string().optional(),
  xImage: z.any().optional(),
  xImageAlt: z.string().optional(),
  ogImage: z.any().optional(),
  ogImageAlt: z.string().optional(),
  metaTitle: z.string().min(2).max(60),
  metaKeyword: z.string().optional(),
  metaDescription: z.string().min(2).max(160),
  metaOgDescription: z.string().optional(),
  metaOgTitle: z.string().optional(),
  metaXTitle: z.string().optional(),
  metaXDescription: z.string().optional(),
  commentShowStatus: z.boolean().optional(),
  status: z.enum(["draft", "published", "archived"]).default("draft"),
  publishedDateTime: z.string().optional(),
  faq: z.string().optional(),
  bgColor: z.string().optional(),
  bgColorStatus: z.boolean().optional(),
});

export default function Page({ params }) {
  const form = useForm({ resolver: zodResolver(blogSchema) });
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/v1/admin/blogs/authors`).then(res => res.json()).then(json => {
      setAuthors(Array.isArray(json?.data) ? json.data : []);
    });
    fetch(`/api/v1/admin/blogs/categories`).then(res => res.json()).then(json => {
      setCategories(Array.isArray(json?.data) ? json.data : []);
    });
    fetch(`/api/v1/admin/blogs/${params.id}`).then(res => res.json()).then(json => {
      const b = json?.data;
      if (b) {
        form.reset({
          title: b.title,
          category: b.category?._id || '',
          authorId: b.authorId || '',
          blogWrittenDate: b.blogWrittenDate ? b.blogWrittenDate.split('T')[0] : '',
          shortDescription: b.shortDescription,
          description: b.description,
          imageAlt: b.imageAlt || '',
          xImageAlt: b.xImageAlt || '',
          ogImageAlt: b.ogImageAlt || '',
          metaTitle: b.metaTitle,
          metaKeyword: b.metaKeyword || '',
          metaDescription: b.metaDescription,
          metaOgDescription: b.metaOgDescription || '',
          metaOgTitle: b.metaOgTitle || '',
          metaXTitle: b.metaXTitle || '',
          metaXDescription: b.metaXDescription || '',
          commentShowStatus: b.commentShowStatus,
          status: b.status,
          publishedDateTime: b.publishedDateTime ? b.publishedDateTime.slice(0,16) : '',
          faq: b.faq || '',
          bgColor: b.bgColor || '',
          bgColorStatus: b.bgColorStatus,
        });
      }
      setLoading(false);
    });
  }, [params.id, form]);

  async function onSubmit(data) {
    const formData = new FormData();
    formData.append('title', data.title.trim());
    formData.append('category', data.category);
    formData.append('authorId', data.authorId);
    if (data.blogWrittenDate) formData.append('blogWrittenDate', data.blogWrittenDate);
    formData.append('shortDescription', data.shortDescription.trim());
    formData.append('description', data.description);
    if (data.banner?.[0]) formData.append('banner', data.banner[0]);
    if (data.thumbnail?.[0]) formData.append('thumbnail', data.thumbnail[0]);
    if (data.xImage?.[0]) formData.append('xImage', data.xImage[0]);
    if (data.ogImage?.[0]) formData.append('ogImage', data.ogImage[0]);
    if (data.imageAlt) formData.append('imageAlt', data.imageAlt);
    if (data.xImageAlt) formData.append('xImageAlt', data.xImageAlt);
    if (data.ogImageAlt) formData.append('ogImageAlt', data.ogImageAlt);
    formData.append('status', data.status);
    if (data.metaTitle) formData.append('metaTitle', data.metaTitle.trim());
    if (data.metaKeyword) formData.append('metaKeyword', data.metaKeyword.trim());
    if (data.metaDescription) formData.append('metaDescription', data.metaDescription.trim());
    if (data.metaOgDescription) formData.append('metaOgDescription', data.metaOgDescription.trim());
    if (data.metaOgTitle) formData.append('metaOgTitle', data.metaOgTitle.trim());
    if (data.metaXTitle) formData.append('metaXTitle', data.metaXTitle.trim());
    if (data.metaXDescription) formData.append('metaXDescription', data.metaXDescription.trim());
    formData.append('commentShowStatus', data.commentShowStatus);
    if (data.publishedDateTime) formData.append('publishedDateTime', data.publishedDateTime);
    if (data.faq) formData.append('faq', data.faq);
    if (data.bgColor) formData.append('bgColor', data.bgColor);
    formData.append('bgColorStatus', data.bgColorStatus);
    const result = await updateBlog(params.id, formData);
    if (result.success) {
      toast.success("Blog updated successfully!");
    } else {
      toast.error(result.error || "Failed to update blog");
    }
  }

  if (loading) return <div className="p-4">Loading...</div>;

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
            <CardTitle>Edit Blog</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField control={form.control} name="title" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl><Input {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="category" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                        <SelectContent>
                          {categories.map(c => (
                            <SelectItem key={c._id} value={c._id}>{c.category_name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="authorId" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Author</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger><SelectValue placeholder="Select author" /></SelectTrigger>
                        <SelectContent>
                          {authors.map(a => (
                            <SelectItem key={a._id} value={a._id}>{a.author_name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="blogWrittenDate" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Written Date</FormLabel>
                    <FormControl><Input type="date" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="shortDescription" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Short Description</FormLabel>
                    <FormControl><Textarea {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="description" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl><RichTextEditor value={field.value} onChange={field.onChange} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="banner" render={({ field: { onChange, value } }) => (
                  <FormItem>
                    <FormLabel>Banner</FormLabel>
                    <FormControl><ImageCropperInput aspectRatio={1080/617} value={value} onChange={onChange} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="thumbnail" render={({ field: { onChange, value } }) => (
                  <FormItem>
                    <FormLabel>Thumbnail</FormLabel>
                    <FormControl><ImageCropperInput aspectRatio={1080/617} value={value} onChange={onChange} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="imageAlt" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image Alt</FormLabel>
                    <FormControl><Input {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="xImage" render={({ field: { onChange, value } }) => (
                  <FormItem>
                    <FormLabel>Extra Image</FormLabel>
                    <FormControl><ImageCropperInput aspectRatio={1080/617} value={value} onChange={onChange} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="xImageAlt" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Extra Image Alt</FormLabel>
                    <FormControl><Input {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="ogImage" render={({ field: { onChange, value } }) => (
                  <FormItem>
                    <FormLabel>OG Image</FormLabel>
                    <FormControl><ImageCropperInput aspectRatio={1200/630} value={value} onChange={onChange} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="ogImageAlt" render={({ field }) => (
                  <FormItem>
                    <FormLabel>OG Image Alt</FormLabel>
                    <FormControl><Input {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="metaTitle" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meta Title</FormLabel>
                    <FormControl><Input {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="metaKeyword" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meta Keywords</FormLabel>
                    <FormControl><Input {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="metaDescription" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meta Description</FormLabel>
                    <FormControl><Textarea {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="metaOgDescription" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meta OG Description</FormLabel>
                    <FormControl><Textarea {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="metaOgTitle" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meta OG Title</FormLabel>
                    <FormControl><Input {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="metaXTitle" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meta X Title</FormLabel>
                    <FormControl><Input {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="metaXDescription" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meta X Description</FormLabel>
                    <FormControl><Textarea {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="commentShowStatus" render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl><input type="checkbox" checked={field.value} onChange={e => field.onChange(e.target.checked)} /></FormControl>
                    <FormLabel>Show Comments</FormLabel>
                  </FormItem>
                )} />
                <FormField control={form.control} name="status" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger><SelectValue placeholder="Select status" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="published">Published</SelectItem>
                          <SelectItem value="archived">Archived</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="publishedDateTime" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Publish Date</FormLabel>
                    <FormControl><Input type="datetime-local" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="faq" render={({ field }) => (
                  <FormItem>
                    <FormLabel>FAQ</FormLabel>
                    <FormControl><Textarea {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="bgColor" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Background Color</FormLabel>
                    <FormControl><Input type="color" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="bgColorStatus" render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl><input type="checkbox" checked={field.value} onChange={e => field.onChange(e.target.checked)} /></FormControl>
                    <FormLabel>Enable Background Color</FormLabel>
                  </FormItem>
                )} />
                <Button type="submit" disabled={form.formState.isSubmitting}>{form.formState.isSubmitting ? 'Saving...' : 'Save Changes'}</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

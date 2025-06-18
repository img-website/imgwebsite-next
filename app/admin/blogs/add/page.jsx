"use client";
import { useEffect, useState } from "react";
import { DynamicBreadcrumb } from "@/components/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { DatePicker } from "@/components/ui/date-picker";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import TokenFromCookie from "@/helpers/tokenFromCookie";

const blogFormSchema = z.object({
  category: z.string().min(1, { message: "Category is required" }),
  title: z.string().min(2, { message: "Title must be at least 2 characters" }).max(200),
  authorId: z.string().min(1, { message: "Author is required" }),
  blogWrittenDate: z.string().min(1, { message: "Written date is required" }),
  slug: z.string().min(2, { message: "Slug is required" }),
  shortDescription: z.string().min(10, { message: "Short description must be at least 10 characters" }).max(500),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  banner: z.any().refine((file) => file?.length === 1, "Banner image is required"),
  thumbnail: z.any().refine((file) => file?.length === 1, "Thumbnail image is required"),
  imageAlt: z.string().optional(),
  xImage: z.any().optional(),
  xImageAlt: z.string().optional(),
  ogImage: z.any().optional(),
  ogImageAlt: z.string().optional(),
  metaTitle: z.string().optional(),
  metaKeyword: z.string().optional(),
  metaDescription: z.string().optional(),
  metaOgTitle: z.string().optional(),
  metaOgDescription: z.string().optional(),
  metaXTitle: z.string().optional(),
  metaXDescription: z.string().optional(),
  commentShowStatus: z.boolean().default(true),
  status: z.string().default("1"),
  publishedDateTime: z.string().optional(),
  bgColorStatus: z.boolean().default(false),
  bgColor: z.string().optional(),
});

export default function Page() {
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);

  const form = useForm({
    resolver: zodResolver(blogFormSchema),
    defaultValues: {
      category: "",
      title: "",
      authorId: "",
      blogWrittenDate: "",
      slug: "",
      shortDescription: "",
      description: "",
      banner: undefined,
      thumbnail: undefined,
      imageAlt: "",
      xImage: undefined,
      xImageAlt: "",
      ogImage: undefined,
      ogImageAlt: "",
      metaTitle: "",
      metaKeyword: "",
      metaDescription: "",
      metaOgTitle: "",
      metaOgDescription: "",
      metaXTitle: "",
      metaXDescription: "",
      commentShowStatus: true,
      status: "1",
      publishedDateTime: "",
      bgColorStatus: false,
      bgColor: "",
    },
  });

  useEffect(() => {
    async function fetchOptions() {
      try {
        const [catRes, authRes] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/blogs/categories?limit=100`),
          fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/blogs/authors?limit=100`),
        ]);
        const catJson = await catRes.json();
        const authJson = await authRes.json();
        setCategories(Array.isArray(catJson?.data) ? catJson.data : []);
        setAuthors(Array.isArray(authJson?.data) ? authJson.data : []);
      } catch (err) {
        console.error(err);
      }
    }
    fetchOptions();
  }, []);

  async function onSubmit(data) {
    try {
      const formData = new FormData();
      formData.append("category", data.category);
      formData.append("title", data.title.trim());
      formData.append("authorId", data.authorId);
      formData.append("blogWrittenDate", data.blogWrittenDate);
      formData.append("slug", data.slug.trim());
      formData.append("shortDescription", data.shortDescription.trim());
      formData.append("description", data.description.trim());
      if (data.banner?.[0]) formData.append("banner", data.banner[0]);
      if (data.thumbnail?.[0]) formData.append("thumbnail", data.thumbnail[0]);
      if (data.imageAlt) formData.append("imageAlt", data.imageAlt.trim());
      if (data.xImage?.[0]) formData.append("xImage", data.xImage[0]);
      if (data.xImageAlt) formData.append("xImageAlt", data.xImageAlt.trim());
      if (data.ogImage?.[0]) formData.append("ogImage", data.ogImage[0]);
      if (data.ogImageAlt) formData.append("ogImageAlt", data.ogImageAlt.trim());
      if (data.metaTitle) formData.append("metaTitle", data.metaTitle.trim());
      if (data.metaKeyword) formData.append("metaKeyword", data.metaKeyword.trim());
      if (data.metaDescription) formData.append("metaDescription", data.metaDescription.trim());
      if (data.metaOgTitle) formData.append("metaOgTitle", data.metaOgTitle.trim());
      if (data.metaOgDescription) formData.append("metaOgDescription", data.metaOgDescription.trim());
      if (data.metaXTitle) formData.append("metaXTitle", data.metaXTitle.trim());
      if (data.metaXDescription) formData.append("metaXDescription", data.metaXDescription.trim());
      formData.append("commentShowStatus", data.commentShowStatus ? "true" : "false");
      formData.append("status", data.status);
      if (data.publishedDateTime) formData.append("publishedDateTime", data.publishedDateTime);
      formData.append("bgColorStatus", data.bgColorStatus ? "true" : "false");
      if (data.bgColor) formData.append("bgColor", data.bgColor);

      const token = TokenFromCookie();
      const res = await fetch(`/api/v1/admin/blogs`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        toast.success("Blog created successfully!");
        form.reset();
      } else {
        toast.error(result.error || "Failed to create blog");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
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
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Add New Blog</CardTitle>
              <CardDescription>
                Create a new blog post. Fill in the required information below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {categories.map((cat) => (
                              <SelectItem key={cat._id} value={cat._id}>{cat.category_name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Blog title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="authorId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Author</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select author" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {authors.map((a) => (
                              <SelectItem key={a._id} value={a._id}>{a.author_name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="blogWrittenDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Written Date</FormLabel>
                        <FormControl>
                          <DatePicker
                            value={field.value}
                            onChange={field.onChange}
                            placeholder="Select date"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Slug</FormLabel>
                        <FormControl>
                          <Input placeholder="blog-title" {...field} />
                        </FormControl>
                        <FormDescription>Unique URL-friendly identifier.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="shortDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Short Description</FormLabel>
                        <FormControl>
                          <Textarea className="min-h-[80px]" {...field} />
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
                          <Textarea className="min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="banner"
                    render={({ field: { onChange } }) => (
                      <FormItem>
                        <FormLabel>Banner Image</FormLabel>
                        <FormControl>
                          <Input type="file" accept="image/*" onChange={(e) => onChange(e.target.files)} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="thumbnail"
                    render={({ field: { onChange } }) => (
                      <FormItem>
                        <FormLabel>Thumbnail Image</FormLabel>
                        <FormControl>
                          <Input type="file" accept="image/*" onChange={(e) => onChange(e.target.files)} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="imageAlt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Image Alt Text</FormLabel>
                        <FormControl>
                          <Input placeholder="Describe banner image" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="xImage"
                    render={({ field: { onChange } }) => (
                      <FormItem>
                        <FormLabel>X Image</FormLabel>
                        <FormControl>
                          <Input type="file" accept="image/*" onChange={(e) => onChange(e.target.files)} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="xImageAlt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>X Image Alt</FormLabel>
                        <FormControl>
                          <Input placeholder="Alt text for X image" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="ogImage"
                    render={({ field: { onChange } }) => (
                      <FormItem>
                        <FormLabel>OG Image</FormLabel>
                        <FormControl>
                          <Input type="file" accept="image/*" onChange={(e) => onChange(e.target.files)} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="ogImageAlt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>OG Image Alt</FormLabel>
                        <FormControl>
                          <Input placeholder="Alt text for OG image" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="metaTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Meta Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Meta title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="metaKeyword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Meta Keyword</FormLabel>
                        <FormControl>
                          <Input placeholder="comma,separated,keywords" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="metaDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Meta Description</FormLabel>
                        <FormControl>
                          <Textarea className="min-h-[80px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="metaOgTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Meta OG Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Open Graph title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="metaOgDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Meta OG Description</FormLabel>
                        <FormControl>
                          <Textarea className="min-h-[80px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="metaXTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Meta X Title</FormLabel>
                        <FormControl>
                          <Input placeholder="X title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="metaXDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Meta X Description</FormLabel>
                        <FormControl>
                          <Textarea className="min-h-[80px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="commentShowStatus"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-2">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <FormLabel>Show Comments</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Status</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">Draft</SelectItem>
                            <SelectItem value="2">Published</SelectItem>
                            <SelectItem value="3">Archived</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="publishedDateTime"
                    render={({ field }) => {
                      const datePart = field.value ? field.value.split("T")[0] : "";
                      const timePart = field.value ? field.value.split("T")[1] || "" : "";
                      return (
                        <FormItem>
                          <FormLabel>Published Date &amp; Time</FormLabel>
                          <FormControl>
                            <div className="flex gap-2">
                              <DatePicker
                                value={datePart}
                                onChange={(d) => {
                                  field.onChange(d ? `${d}T${timePart || "00:00"}` : "");
                                }}
                                placeholder="Select date"
                                className="w-[12rem]"
                              />
                              <Input
                                type="time"
                                value={timePart}
                                onChange={(e) => {
                                  const t = e.target.value;
                                  if (datePart) {
                                    field.onChange(`${datePart}T${t}`);
                                  } else {
                                    field.onChange(`T${t}`);
                                  }
                                }}
                                className="w-[6rem]"
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="bgColorStatus"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-2">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <FormLabel>Enable Background Color</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="bgColor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Background Color</FormLabel>
                        <FormControl>
                          <Input type="color" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-end gap-4">
                    <Button type="submit" disabled={form.formState.isSubmitting}>
                      {form.formState.isSubmitting ? "Creating..." : "Create Blog"}
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

"use client";
import { useEffect, useState, useRef } from "react";
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
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
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
import { DatePicker } from "@/components/ui/date-picker";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import TokenFromCookie from "@/helpers/tokenFromCookie";
import ImageCropperInput from "@/components/image-cropper-input";
import MultiKeywordCombobox from "@/components/ui/multi-keyword-combobox";

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
  imageAlt: z.string().min(2, { message: "Image alt text must be at least 2 characters" }).max(200),
  xImage: z.any().refine((file) => file?.length === 1, "X image is required"),
  xImageAlt: z.string().min(2, { message: "X image alt text must be at least 2 characters" }).max(200),
  ogImage: z.any().refine((file) => file?.length === 1, "OG image is required"),
  ogImageAlt: z.string().min(2, { message: "OG image alt text must be at least 2 characters" }).max(200),
  metaTitle: z.string().min(2, { message: "Meta title must be at least 2 characters" }).max(200),
  metaKeyword: z.array(z.string()).default([]),
  metaDescription: z.string().min(10, { message: "Meta description must be at least 10 characters" }).max(500),
  metaOgTitle: z.string().min(2, { message: "Meta OG title must be at least 2 characters" }).max(200),
  metaOgDescription: z.string().min(10, { message: "Meta OG description must be at least 10 characters" }).max(500),
  metaXTitle: z.string().min(2, { message: "Meta X title must be at least 2 characters" }).max(200),
  metaXDescription: z.string().min(10, { message: "Meta X description must be at least 10 characters" }).max(500),
  commentShowStatus: z.boolean().default(true),
  status: z.string().default("1"),
  publishedDateTime: z.string().optional(),
  bgColorStatus: z.boolean().default(false),
  bgColor: z.string().optional(),
});

export default function Page() {
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [imageResetKey, setImageResetKey] = useState(0); // Add reset key state
  const [draftId, setDraftId] = useState(null);
  const debounceRef = useRef(null);

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
      metaKeyword: [],
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

  // Load existing draft if available
  useEffect(() => {
    fetch('/api/v1/admin/blogs/drafts/latest')
      .then(res => res.json())
      .then(json => {
        if (json.success && json.data) {
          const d = json.data;
          setDraftId(d._id);
            const map = {
              category: 'category',
              title: 'title',
              author: 'authorId',
              blog_written_date: 'blogWrittenDate',
              slug: 'slug',
              short_description: 'shortDescription',
              description: 'description',
              image_alt: 'imageAlt',
              x_image_alt: 'xImageAlt',
              og_image_alt: 'ogImageAlt',
              meta_title: 'metaTitle',
              meta_keyword: 'metaKeyword',
              meta_description: 'metaDescription',
              meta_og_title: 'metaOgTitle',
              meta_og_description: 'metaOgDescription',
              meta_x_title: 'metaXTitle',
              meta_x_description: 'metaXDescription',
              comment_show_status: 'commentShowStatus',
              status: 'status',
              published_date_time: 'publishedDateTime',
              bg_color_status: 'bgColorStatus',
              bg_color: 'bgColor'
            };
          Object.entries(map).forEach(([serverKey, formKey]) => {
            if (d[serverKey] !== undefined && d[serverKey] !== null) {
              if (formKey === 'metaKeyword' && Array.isArray(d[serverKey])) {
                form.setValue(formKey, d[serverKey]);
              } else if (d[serverKey] instanceof Date) {
                form.setValue(formKey, d[serverKey].toISOString().slice(0,10));
              } else {
                form.setValue(formKey, d[serverKey].toString());
              }
            }
          });
        }
      })
      .catch(() => {});
  }, []);

  // Auto save draft with debounce
  useEffect(() => {
    const subscription = form.watch((values) => {
      const hasData = Object.values(values).some((v) => {
        if (Array.isArray(v)) return v.length > 0;
        return v !== '' && v !== undefined && v !== false;
      });
      if (!hasData) return;
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        saveDraft(values);
      }, 1000);
    });
    return () => subscription.unsubscribe();
  }, [form, draftId]);

  async function saveDraft(values) {
    try {
      const token = TokenFromCookie();
      if (!draftId) {
        const res = await fetch('/api/v1/admin/blogs/drafts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(values),
        });
        const json = await res.json();
        if (json.success) {
          setDraftId(json.data._id);
        }
      } else {
        await fetch(`/api/v1/admin/blogs/drafts/${draftId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(values),
        });
      }
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    return () => {
      if (!draftId) return;
      const values = form.getValues();
      const empty = Object.values(values).every((v) => {
        if (Array.isArray(v)) return v.length === 0;
        return v === '' || v === undefined || v === false;
      });
      if (empty) {
        const token = TokenFromCookie();
        fetch(`/api/v1/admin/blogs/drafts/${draftId}`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${token}` },
        });
      }
    };
  }, [draftId]);

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
      if (data.metaKeyword?.length) formData.append("metaKeyword", data.metaKeyword.join(","));
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
        setImageResetKey((k) => k + 1); // Increment reset key to clear images
        if (draftId) {
          fetch(`/api/v1/admin/blogs/drafts/${draftId}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` },
          });
          setDraftId(null);
        }
      } else {
        toast.error(result.error || "Failed to create blog");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  }

  // If you have a manual reset button, also call setImageResetKey((k) => k + 1) there.

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
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-wrap gap-y-8 -mx-3">                  
                  <div className="md:w-1/3 w-full px-3">
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl className="w-full">
                                <Button
                                  variant="outline"
                                  role="combobox"
                                  className={cn(
                                    "w-full justify-between",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value
                                    ? categories.find((cat) => cat._id === field.value)?.category_name
                                    : "Select category..."}
                                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-full p-0">
                              <Command>
                                <CommandInput 
                                  placeholder="Search category..." 
                                  className="h-9"
                                />
                                <CommandList>
                                  <CommandEmpty>No category found.</CommandEmpty>
                                  <CommandGroup>
                                    {categories.map((cat) => (
                                      <CommandItem
                                        key={cat._id}
                                        value={cat.category_name}
                                        onSelect={() => {
                                          form.setValue("category", cat._id);
                                        }}
                                      >
                                        {cat.category_name}
                                        <Check
                                          className={cn(
                                            "ml-auto h-4 w-4",
                                            field.value === cat._id ? "opacity-100" : "opacity-0"
                                          )}
                                        />
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </CommandList>
                              </Command>
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="md:w-1/3 w-full px-3">
                    <FormField
                      control={form.control}
                      name="authorId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Author</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl className="w-full">
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
                  </div>
                  <div className="md:w-1/3 w-full px-3">
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
                  </div>
                  <div className="md:w-1/2 w-full px-3">
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
                  </div>
                  <div className="md:w-1/2 w-full px-3">
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
                  </div>
                  <div className="w-full px-3">
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
                  </div>
                  <div className="w-full px-3">
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
                  </div>
                  <div className="md:w-1/2 w-full px-3">
                    <FormField
                      control={form.control}
                      name="banner"
                      render={({ field: { onChange, value } }) => (
                        <FormItem>
                          <FormLabel>Banner Image</FormLabel>
                          <FormControl>
                            <ImageCropperInput
                              aspectRatio={1.75} // 1080x617
                              value={value}
                              size="1080x617"
                              onChange={onChange}
                              format="webp"
                              resetKey={imageResetKey} // Pass resetKey
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="md:w-1/2 w-full px-3">
                    <FormField
                      control={form.control}
                      name="thumbnail"
                      render={({ field: { onChange, value } }) => (
                        <FormItem>
                          <FormLabel>Thumbnail Image</FormLabel>
                          <FormControl>
                            <ImageCropperInput
                              aspectRatio={1.75} // 1080x617
                              value={value}
                              size="1080x617"
                              onChange={onChange}
                              format="webp"
                              resetKey={imageResetKey} // Pass resetKey
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full px-3">
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
                  </div>
                  <Separator className="my-6" />
                  <div className="w-full px-3">
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
                  </div>                  
                  <div className="w-full px-3">
                    <FormField
                      control={form.control}
                      name="metaKeyword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Meta Keywords</FormLabel>
                          <FormControl>
                            <MultiKeywordCombobox
                              value={field.value}
                              onChange={field.onChange}
                              placeholder="Select keywords..."
                              description="Type a keyword and press enter to add it"
                              label={null}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full px-3">
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
                  </div>
                  <Separator className="my-6" />
                  <div className="md:w-1/2 w-full px-3 flex flex-col gap-y-8">
                    <FormField
                      control={form.control}
                      name="ogImage"
                      render={({ field: { onChange, value } }) => (
                        <FormItem>
                          <FormLabel>OG Image</FormLabel>
                          <FormControl>
                            <ImageCropperInput
                              aspectRatio={1.90} // 1200x630
                              value={value}
                              size="1200x630"
                              onChange={onChange}
                              format="jpg"
                              resetKey={imageResetKey} // Pass resetKey
                            />
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
                  </div>
                  <div className="md:w-1/2 w-full px-3 flex flex-col gap-y-8">
                    <FormField
                      control={form.control}
                      name="xImage"
                      render={({ field: { onChange, value } }) => (
                        <FormItem>
                          <FormLabel>X Image</FormLabel>
                          <FormControl>
                            <ImageCropperInput
                              aspectRatio={1.90} // 1200x630
                              value={value}
                              size="1200x630"
                              onChange={onChange}
                              format="jpg"
                              resetKey={imageResetKey} // Pass resetKey
                            />
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
                  </div>
                  <div className="md:w-1/2 w-full px-3 flex flex-col gap-y-8">
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
                  </div>
                  <div className="md:w-1/2 w-full px-3 flex flex-col gap-y-8">
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
                  </div> 
                  <Separator className="my-6" />                 
                  <div className="md:w-1/3 w-full px-3">
                    <FormField
                      control={form.control}
                      name="commentShowStatus"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Comments Status</FormLabel>
                          <Select
                            onValueChange={(value) => field.onChange(value === "true")} 
                            value={field.value.toString()}
                          >
                            <FormControl className="w-full">
                              <SelectTrigger>
                                <SelectValue placeholder="Select comments status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="true">Show Comments</SelectItem>
                              <SelectItem value="false">Hide Comments</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="md:w-1/3 w-full px-3">
                    <FormField
                      control={form.control}
                      name="status"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Status</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl className="w-full">
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
                  </div>
                  <div className="md:w-1/3 w-full px-3">
                    <FormField
                      control={form.control}
                      name="publishedDateTime"
                      render={({ field }) => {
                        const datePart = field.value ? field.value.split("T")[0] : "";
                        const timePart = field.value ? field.value.split("T")[1] || "" : "";
                        return (
                          <FormItem>
                            <FormLabel>Published Date &amp; Time</FormLabel>
                            <FormControl className="w-full">
                              <div className="flex gap-2 w-full">
                                <DatePicker
                                  value={datePart}
                                  onChange={(d) => {
                                    field.onChange(d ? `${d}T${timePart || "00:00"}` : "");
                                  }}
                                  placeholder="Select date"
                                  className="grow w-auto"
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
                                  className="shrink-0 w-auto"
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  </div>                  
                  <div className="md:w-1/3 w-full px-3">
                    <FormField
                      control={form.control}
                      name="bgColorStatus"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>BG Color Status</FormLabel>
                          <Select 
                            onValueChange={(value) => field.onChange(value === "true")} 
                            value={field.value.toString()}
                          >
                            <FormControl className="w-full">
                              <SelectTrigger>
                                <SelectValue placeholder="Select background color status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="true">Enable BG</SelectItem>
                              <SelectItem value="false">Disable BG</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="md:w-1/3 w-full px-3">
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
                  </div>
                  <div className="w-full flex justify-end gap-4">
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

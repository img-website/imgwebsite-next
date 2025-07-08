"use client";
import { useEffect, useMemo, useState, use as usePromise } from "react";
import { Separator } from "@/components/ui/separator";
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
import { Check, ChevronsUpDown, Plus, Trash2 } from "lucide-react";
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
import { useForm, useFieldArray } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import apiFetch from "@/helpers/apiFetch";
import ImageCropperInput from "@/components/image-cropper-input";
import MultiKeywordCombobox from "@/components/ui/multi-keyword-combobox";
import { useRouter } from "next/navigation";
import { useBlog } from "@/hooks/use-blogs";
import { useCategories } from "@/hooks/use-categories";
import { useAuthors } from "@/hooks/use-authors";
import BlogEditSkeleton from "@/components/skeleton/blog-edit-skeleton";
import { useBlogStore } from "@/app/store/use-blog-store";
import dynamic from "next/dynamic";

const TinyMCEEditor = dynamic(() => import("@/components/TinyMCEEditor"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BLOG_BG_COLORS } from "@/lib/blogColors";

const faqEditorInit = {
  menubar: false,
  menu: {},
  plugins: ["lists", "link"],
  toolbar: "bold italic underline strikethrough | bullist numlist | link",
  quickbars_selection_toolbar: false,
  contextmenu: false,
  valid_elements: "p,strong/b,em/i,u,strike,ul,ol,li,br,a,a[href|target=_blank]",
  paste_as_text: true,
};

// Helper to check if image is present (File or preview URL)
function isImagePresent(val) {
  if (!val) return false;
  if (Array.isArray(val)) {
    if (val[0] instanceof File) return true;
    if (typeof val[0] === "string" && val[0].length > 0) return true;
  }
  if (typeof val === "string" && val.length > 0) return true;
  return false;
}

// Function to get schema based on status
function getBlogFormSchema(status, bgColorStatus) {
  const bgColorField = bgColorStatus
    ? z.string().min(1, { message: "Background color is required" })
    : z.string().optional();
  if (status === "4") {
    return z.object({
      category: z.string().min(1, { message: "Category is required" }),
      title: z.string().min(2, { message: "Title must be at least 2 characters" }).max(200),
      authorId: z.string().min(1, { message: "Author is required" }),
      blogWrittenDate: z.string().min(1, { message: "Written date is required" }),
      slug: z.string().min(2, { message: "Slug is required" }),
      shortDescription: z.string().min(10, { message: "Short description must be at least 10 characters" }).max(500),
      description: z.string().min(10, { message: "Description must be at least 10 characters" }),
      banner: z.any().refine(isImagePresent, "Banner image is required"),
      thumbnail: z.any().refine(isImagePresent, "Thumbnail image is required"),
      imageAlt: z.string().min(2, { message: "Image alt text must be at least 2 characters" }).max(200),
      xImage: z.any().refine(isImagePresent, "X image is required"),
      xImageAlt: z.string().min(2, { message: "X image alt text must be at least 2 characters" }).max(200),
      ogImage: z.any().refine(isImagePresent, "OG image is required"),
      ogImageAlt: z.string().min(2, { message: "OG image alt text must be at least 2 characters" }).max(200),
      metaTitle: z.string().min(2, { message: "Meta title must be at least 2 characters" }).max(200),
      metaKeyword: z.array(z.string()).default([]),
      metaDescription: z.string().min(10, { message: "Meta description must be at least 10 characters" }).max(500),
      metaOgTitle: z.string().min(2, { message: "Meta OG title must be at least 2 characters" }).max(200),
      metaOgDescription: z.string().min(10, { message: "Meta OG description must be at least 10 characters" }).max(500),
      metaXTitle: z.string().min(2, { message: "Meta X title must be at least 2 characters" }).max(200),
      metaXDescription: z.string().min(10, { message: "Meta X description must be at least 10 characters" }).max(500),
      faqs: z.array(z.object({ question: z.string().min(1, "Question is required"), answer: z.string().min(1, "Answer is required") })).optional(),
      status: z.string().default("4"),
      publishedDateTime: z.string().min(1, { message: "Published date & time is required" }),
      bgColorStatus: z.boolean().default(false),
      bgColor: bgColorField,
    });
  } else {
    return z.object({
      category: z.string().min(1, { message: "Category is required" }),
      title: z.string().min(2, { message: "Title must be at least 2 characters" }).max(200),
      authorId: z.string().min(1, { message: "Author is required" }),
      blogWrittenDate: z.string().min(1, { message: "Written date is required" }),
      slug: z.string().min(2, { message: "Slug is required" }),
      shortDescription: z.string().min(10, { message: "Short description must be at least 10 characters" }).max(500),
      description: z.string().min(10, { message: "Description must be at least 10 characters" }),
      banner: z.any().refine(isImagePresent, "Banner image is required"),
      thumbnail: z.any().refine(isImagePresent, "Thumbnail image is required"),
      imageAlt: z.string().min(2, { message: "Image alt text must be at least 2 characters" }).max(200),
      xImage: z.any().refine(isImagePresent, "X image is required"),
      xImageAlt: z.string().min(2, { message: "X image alt text must be at least 2 characters" }).max(200),
      ogImage: z.any().refine(isImagePresent, "OG image is required"),
      ogImageAlt: z.string().min(2, { message: "OG image alt text must be at least 2 characters" }).max(200),
      metaTitle: z.string().min(2, { message: "Meta title must be at least 2 characters" }).max(200),
      metaKeyword: z.array(z.string()).default([]),
      metaDescription: z.string().min(10, { message: "Meta description must be at least 10 characters" }).max(500),
      metaOgTitle: z.string().min(2, { message: "Meta OG title must be at least 2 characters" }).max(200),
      metaOgDescription: z.string().min(10, { message: "Meta OG description must be at least 10 characters" }).max(500),
      metaXTitle: z.string().min(2, { message: "Meta X title must be at least 2 characters" }).max(200),
      metaXDescription: z.string().min(10, { message: "Meta X description must be at least 10 characters" }).max(500),
      faqs: z.array(z.object({ question: z.string().min(1, "Question is required"), answer: z.string().min(1, "Answer is required") })).optional(),
      status: z.string().default("2"),
      publishedDateTime: z.string().optional(),
      bgColorStatus: z.boolean().default(false),
      bgColor: bgColorField,
    });
  }
}


export default function Page({ params }) {
  const { categories } = useCategories();
  const { authors } = useAuthors();
  if (!categories || !authors) {
    return <BlogEditSkeleton />;
  }
  const categoryList = categories || [];
  const authorList = authors || [];
  const [status, setStatus] = useState("1");
  const [bgColorStatusValue, setBgColorStatusValue] = useState(false);
  const { id: blogId } = usePromise(params);
  const { blog } = useBlog(blogId);
  const router = useRouter();
  const updateBlog = useBlogStore((state) => state.updateBlog);

  const blogFormSchema = useMemo(() => getBlogFormSchema(status, bgColorStatusValue), [status, bgColorStatusValue]);

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
      faqs: [{ question: "", answer: "" }],
      status: "1",
      publishedDateTime: "",
      bgColorStatus: false,
      bgColor: "",
    },
  });
  const faqFields = useFieldArray({ control: form.control, name: "faqs" });

  // Watch bgColorStatus and update state
  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === "bgColorStatus") {
        setBgColorStatusValue(value.bgColorStatus);
      }
      if (name === "status") {
        setStatus(value.status);
      }
    });
    return () => subscription.unsubscribe();
  }, [form]);


  useEffect(() => {
    if (blog === undefined) return;
    if (blog === null) {
      router.replace("/admin/blogs");
      return;
    }
    form.reset({
      category: blog.category?._id || "",
      title: blog.title || "",
      authorId: blog.author?._id || "",
      blogWrittenDate: blog.blog_written_date ? blog.blog_written_date.slice(0, 10) : "",
      slug: blog.slug || "",
      shortDescription: blog.short_description || "",
      description: blog.description || "",
      banner: blog.banner?.startsWith('http')
        ? blog.banner
        : blog.banner
          ? `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/blogs/${blog.banner}`
          : undefined,
      thumbnail: blog.thumbnail?.startsWith('http')
        ? blog.thumbnail
        : blog.thumbnail
          ? `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/blogs/${blog.thumbnail}`
          : undefined,
      imageAlt: blog.image_alt || "",
      xImage: blog.x_image?.startsWith('http')
        ? blog.x_image
        : blog.x_image
          ? `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/blogs/${blog.x_image}`
          : undefined,
      xImageAlt: blog.x_image_alt || "",
      ogImage: blog.og_image?.startsWith('http')
        ? blog.og_image
        : blog.og_image
          ? `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/blogs/${blog.og_image}`
          : undefined,
      ogImageAlt: blog.og_image_alt || "",
      metaTitle: blog.meta_title || "",
      metaKeyword: blog.meta_keyword || [],
      metaDescription: blog.meta_description || "",
      metaOgTitle: blog.meta_og_title || "",
      metaOgDescription: blog.meta_og_description || "",
      metaXTitle: blog.meta_x_title || "",
      metaXDescription: blog.meta_x_description || "",
      faqs: Array.isArray(blog.faqs) && blog.faqs.length ? blog.faqs : [{ question: "", answer: "" }],
      status: String(blog.status ?? 1),
      publishedDateTime: blog.published_date_time ? new Date(blog.published_date_time).toISOString().slice(0, 16) : "",
      bgColorStatus: blog.bg_color_status ?? false,
      bgColor: blog.bg_color || "",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blog]);

  if (blog === undefined) {
    return <BlogEditSkeleton />;
  }

  if (blog === null) {
    return <div className="p-4">Blog not found</div>;
  }

  async function onSubmit(data) {
    try {
      const formData = new FormData();
      const isDraft = data.status === "1";
      // Only append image fields if File, skip if empty/removed
      if (data.banner && data.banner[0] instanceof File) formData.append("banner", data.banner[0]);
      if (data.thumbnail && data.thumbnail[0] instanceof File) formData.append("thumbnail", data.thumbnail[0]);
      if (data.xImage && data.xImage[0] instanceof File) formData.append("xImage", data.xImage[0]);
      if (data.ogImage && data.ogImage[0] instanceof File) formData.append("ogImage", data.ogImage[0]);
      // For all other fields, send as empty string/array if empty
      if (!isDraft || data.category) formData.append("category", data.category || "");
      if (!isDraft || data.title) formData.append("title", data.title?.trim() || "");
      if (!isDraft || data.authorId) formData.append("authorId", data.authorId || "");
      if (!isDraft || data.blogWrittenDate) formData.append("blogWrittenDate", data.blogWrittenDate || "");
      if (!isDraft || data.slug) formData.append("slug", data.slug?.trim() || "");
      if (!isDraft || data.shortDescription) formData.append("shortDescription", data.shortDescription?.trim() || "");
      if (!isDraft || data.description) formData.append("description", data.description?.trim() || "");
      if (!isDraft || data.imageAlt !== undefined) formData.append("imageAlt", data.imageAlt || "");
      if (!isDraft || data.xImageAlt !== undefined) formData.append("xImageAlt", data.xImageAlt || "");
      if (!isDraft || data.ogImageAlt !== undefined) formData.append("ogImageAlt", data.ogImageAlt || "");
      if (!isDraft || data.metaTitle !== undefined) formData.append("metaTitle", data.metaTitle || "");
      if (!isDraft || (data.metaKeyword && data.metaKeyword.length)) formData.append("metaKeyword", data.metaKeyword?.join(",") || "");
      if (!isDraft || data.metaDescription !== undefined) formData.append("metaDescription", data.metaDescription || "");
      if (!isDraft || data.metaOgTitle !== undefined) formData.append("metaOgTitle", data.metaOgTitle || "");
      if (!isDraft || data.metaOgDescription !== undefined) formData.append("metaOgDescription", data.metaOgDescription || "");
      if (!isDraft || data.metaXTitle !== undefined) formData.append("metaXTitle", data.metaXTitle || "");
      if (!isDraft || data.metaXDescription !== undefined) formData.append("metaXDescription", data.metaXDescription || "");
      if (data.faqs && data.faqs.length) formData.append("faqs", JSON.stringify(data.faqs));
      // Always send status as number
      formData.append("status", Number(data.status));
      if (data.publishedDateTime !== undefined) formData.append("publishedDateTime", data.publishedDateTime || "");
      formData.append("bgColorStatus", data.bgColorStatus ? "true" : "false");
      if (data.bgColor !== undefined) formData.append("bgColor", data.bgColor || "");

      const res = await apiFetch(`/api/v1/admin/blogs/${blogId}`, {
        method: "PUT",
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        toast.success("Blog updated successfully!");
        updateBlog(blogId, result.data);
        router.push(`/admin/blogs/${blogId}`);
      } else {
        toast.error(result.error || "Failed to update blog");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  }

  return (
    <>
      <div className="w-full p-4">
        <Card>
          <CardHeader>
            <CardTitle>Edit Blog</CardTitle>
            <CardDescription>
              Update the blog post details below.
            </CardDescription>
          </CardHeader>
            <CardContent className="p-6">
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
                                    ? categoryList.find((cat) => cat._id === field.value)?.category_name
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
                                    {categoryList.map((cat) => (
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
                                  {field.value ? (
                                    <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                      {(() => {
                                        const selected = authorList.find((aut) => aut._id === field.value);
                                        if (selected) {
                                          return (
                                            <Avatar className="w-7 h-7 mr-2">
                                              <AvatarImage src={selected.image && (selected.image.startsWith('http') ? selected.image : `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/authors/${selected.image}`)} alt={selected.author_name} />
                                              <AvatarFallback>{selected.author_name?.[0] || "A"}</AvatarFallback>
                                            </Avatar>
                                          );
                                        }
                                        return null;
                                      })()}
                                      {authorList.find((aut) => aut._id === field.value)?.author_name}
                                    </span>
                                  ) : (
                                    "Select author..."
                                  )}
                                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-full p-0">
                              <Command>
                                <CommandInput 
                                  placeholder="Search author..." 
                                  className="h-9"
                                />
                                <CommandList>
                                  <CommandEmpty>No author found.</CommandEmpty>
                                  <CommandGroup>
                                    {authorList.map((aut) => (
                                      <CommandItem
                                        key={aut._id}
                                        value={aut.author_name}
                                        onSelect={() => {
                                          form.setValue("authorId", aut._id);
                                        }}
                                      >
                                        <Avatar className="w-7 h-7 mr-2">
                                          <AvatarImage src={aut.image && (aut.image.startsWith('http') ? aut.image : `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/authors/${aut.image}`)} alt={aut.author_name} />
                                          <AvatarFallback>{aut.author_name?.[0] || "A"}</AvatarFallback>
                                        </Avatar>
                                        {aut.author_name}
                                        <Check
                                          className={cn(
                                            "ml-auto h-4 w-4",
                                            field.value === aut._id ? "opacity-100" : "opacity-0"
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
                        <FormItem className="[&_.tox-statusbar\_\_branding]:!hidden">
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <TinyMCEEditor
                              value={field.value}
                              onChange={field.onChange}
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
                      name="banner"
                      render={({ field: { onChange, value, ...fieldProps } }) => (
                        <FormItem>
                          <FormLabel>Banner Image</FormLabel>
                          <FormControl>
                            <ImageCropperInput
                              aspectRatio={1.75} // 1080x617
                              value={value}
                              size="1080x617"
                              onChange={(val) => {
                                if (!val || (Array.isArray(val) && val.length === 0)) {
                                  onChange("");
                                } else {
                                  onChange(val);
                                }
                              }}
                              format="webp"
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
                  <div className="w-full px-3 space-y-4">
                    {faqFields.fields.map((field, index) => (
                      <div key={field.id} className="border p-4 rounded-md space-y-4">
                        <div className="flex flex-wrap">
                          <FormField
                            control={form.control}
                            name={`faqs.${index}.question`}
                            render={({ field }) => (
                              <FormItem className="grow mr-4">
                                <FormLabel>Question</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button type="button" variant="outline" size="icon" className="mt-[22px] cursor-pointer" onClick={() => faqFields.remove(index)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <FormField
                          control={form.control}
                          name={`faqs.${index}.answer`}
                          render={({ field }) => (
                            <FormItem className="[&_.tox-statusbar]:!hidden">
                              <FormLabel>Answer</FormLabel>
                              <FormControl>
                                <TinyMCEEditor value={field.value} onChange={field.onChange} init={faqEditorInit} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    ))}
                    <Button type="button" variant="secondary" size="sm" onClick={() => faqFields.append({ question: '', answer: '' })}>
                      <Plus className="h-4 w-4 mr-2" /> Add FAQ
                    </Button>
                  </div>
                  <Separator className="my-6" />
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
                              <SelectItem value="2">Published</SelectItem>
                              {/* <SelectItem value="3">Archived</SelectItem> */}
                              <SelectItem value="4">Schedule</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  {/* Published Date & Time: only show if status is Schedule (4) */}
                  {status === "4" && (
                    <div className="md:w-1/3 w-full px-3">
                      <FormField
                        control={form.control}
                        name="publishedDateTime"
                        render={({ field }) => {
                          const datePart = field.value ? field.value.split("T")[0] : "";
                          const timePart = field.value ? field.value.split("T")[1] || "" : "";
                          return (
                            <FormItem>
                              <FormLabel>Published Date & Time</FormLabel>
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
                  )}
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
                              <SelectItem value="false">Disable BG</SelectItem>
                              <SelectItem value="true">Enable BG</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  {bgColorStatusValue && (
                    <div className="md:w-1/3 w-full px-3">
                      <FormField
                        control={form.control}
                        name="bgColor"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Background Color</FormLabel>
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
                                    {field.value ? (
                                      <span className="flex items-center gap-2">
                                        <Avatar className="w-7 h-7 border" style={{ backgroundColor: field.value }}>
                                          <AvatarFallback style={{ backgroundColor: field.value }} />
                                        </Avatar>
                                        {BLOG_BG_COLORS.find((c) => c.value === field.value)?.label}
                                      </span>
                                    ) : (
                                      "Select color..."
                                    )}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-full p-0">
                                <Command>
                                  <CommandInput placeholder="Search color..." className="h-9" />
                                  <CommandList>
                                    <CommandEmpty>No color found.</CommandEmpty>
                                    <CommandGroup>
                                      {BLOG_BG_COLORS.map((color) => (
                                        <CommandItem
                                          key={color.value}
                                          value={color.label}
                                          onSelect={() => {
                                            form.setValue("bgColor", color.value);
                                          }}
                                        >
                                          <Avatar className="w-7 h-7 mr-2 border" style={{ backgroundColor: color.value }}>
                                            <AvatarFallback style={{ backgroundColor: color.value }} />
                                          </Avatar>
                                          {color.label}
                                          <Check
                                            className={cn(
                                              "ml-auto h-4 w-4",
                                              field.value === color.value ? "opacity-100" : "opacity-0"
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
                  )}
                  <div className="flex w-full gap-2 justify-end bg-white z-50 sticky bottom-4 pt-4 border-t shadow-[0px_10px_0px_10px_rgba(255,255,255,1)]">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => router.push(`/admin/blogs/${blogId}`)}
                      >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="cursor-pointer"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? "Updating..." : "Update"}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
        </Card>
      </div>
    </>
  );
}

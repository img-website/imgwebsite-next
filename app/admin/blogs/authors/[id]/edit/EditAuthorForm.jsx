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
import ImageCropperInput from "@/components/image-cropper-input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { updateAuthor } from "@/app/actions/authors";
import { useEffect } from "react";
import { useAuthor } from "@/hooks/use-authors";
import { useAuthorStore } from "@/app/store/use-author-store";

const authorFormSchema = z.object({
  author_name: z.string()
    .min(2, { message: "Author name must be at least 2 characters" })
    .max(100, { message: "Author name cannot exceed 100 characters" }),
  description: z.string()
    .min(10, { message: "Description must be at least 10 characters" })
    .max(500, { message: "Description cannot exceed 500 characters" }),
  image: z.any().optional(),
  linkedin_link: z.string()
    .trim()
    .url({ message: "Please enter a valid LinkedIn URL" })
    .optional()
    .or(z.literal("")),
  facebook_link: z.string()
    .trim()
    .url({ message: "Please enter a valid Facebook URL" })
    .optional()
    .or(z.literal("")),
  twitter_link: z.string()
    .trim()
    .url({ message: "Please enter a valid Twitter URL" })
    .optional()
    .or(z.literal("")),
  status: z.number().optional(),
});

export default function EditAuthorForm({ author }) {
  const router = useRouter();
  useAuthor(author._id);
  const updateAuth = useAuthorStore(state => state.updateAuthor);
  const form = useForm({
    resolver: zodResolver(authorFormSchema),
    defaultValues: {
      author_name: author.author_name || "",
      description: author.description || "",
      linkedin_link: author.linkedin_link || "",
      facebook_link: author.facebook_link || "",
      twitter_link: author.twitter_link || "",
      status: author.status || 1,
    },
  });

  useEffect(() => {
    if (author) {
      form.reset({
        author_name: author.author_name || "",
        description: author.description || "",
        linkedin_link: author.linkedin_link || "",
        facebook_link: author.facebook_link || "",
        twitter_link: author.twitter_link || "",
        status: author.status || 1,
        image: author.image?.startsWith("http")
          ? author.image
          : author.image
            ? `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/authors/${author.image}?t=${Date.now()}`
            : undefined,
      });
    }
  }, [author]);

  async function onSubmit(data) {
    try {
      const formData = new FormData();
      formData.append("author_name", data.author_name.trim());
      formData.append("description", data.description.trim());
      if (data.image?.[0]) {
        formData.append("image", data.image[0]);
      }
      ["linkedin_link", "facebook_link", "twitter_link"].forEach((key) => {
        const value = data[key]?.trim();
        if (value) {
          formData.append(key, value);
        } else {
          formData.append(key, "");
        }
      });
      formData.append("status", String(data.status || 1));
      const result = await updateAuthor(author._id, formData);
      if (result.success) {
        if (result.data) {
          updateAuth(author._id, result.data);
        }
        toast.success("Author updated successfully!");
        router.push(`/admin/blogs/authors/${author._id}`);
      } else {
        toast.error(result.error || "Failed to update author");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Edit Author</CardTitle>
          <CardDescription>Update author details below.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="author_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Author Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field: { onChange, value } }) => (
                    <FormItem>
                      <FormLabel>Profile Image</FormLabel>
                      <FormControl>
                        <ImageCropperInput
                          aspectRatio={1}
                          value={value}
                          onChange={onChange}
                        />
                      </FormControl>
                      <FormDescription>Leave blank to keep existing image</FormDescription>
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
                        placeholder="Brief description about the author"
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="linkedin_link"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn Profile</FormLabel>
                      <FormControl>
                        <Input placeholder="https://linkedin.com/in/username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="facebook_link"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Facebook Profile</FormLabel>
                      <FormControl>
                        <Input placeholder="https://facebook.com/username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="twitter_link"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Twitter Profile</FormLabel>
                      <FormControl>
                        <Input placeholder="https://twitter.com/username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
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
                  {form.formState.isSubmitting ? "Updating..." : "Update Author"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

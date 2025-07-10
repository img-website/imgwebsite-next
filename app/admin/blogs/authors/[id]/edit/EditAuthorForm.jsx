"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Loader2Icon, UserCheck2Icon } from "lucide-react";
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
      <Card className="max-sm:py-0 max-sm:border-0 max-sm:shadow-none">
        <CardHeader className="max-sm:px-0">
          <CardTitle>Edit Author</CardTitle>
          <CardDescription className="max-sm:text-xs">Update author details below.</CardDescription>
        </CardHeader>
        <CardContent className="max-sm:px-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="author_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Author Name</FormLabel>
                      <FormControl>
                        <Input className="max-sm:text-sm" placeholder="John Doe" {...field} />
                      </FormControl>
                      {form.formState.errors.author_name ? (
                        <FormMessage className="max-sm:text-xs" />
                      ) : (
                        <FormDescription className="max-sm:text-xs">
                          This is the public name of the author.
                        </FormDescription>
                      )}
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
                      {form.formState.errors.image ? (
                        <FormMessage className="max-sm:text-xs" />
                      ) : (
                        <FormDescription className="max-sm:text-xs">
                          Leave blank to keep existing image
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
                        placeholder="Brief description about the author"
                        className="max-sm:text-sm"
                        {...field}
                      />
                    </FormControl>
                    {form.formState.errors.description ? (
                      <FormMessage className="max-sm:text-xs" />
                    ) : (
                      <FormDescription className="max-sm:text-xs">
                        Write a brief bio about the author (max 500 characters)
                      </FormDescription>
                    )}
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
                        <Input className="max-sm:text-sm" placeholder="https://linkedin.com/in/username" {...field} />
                      </FormControl>
                      <FormMessage className="max-sm:text-xs" />
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
                        <Input className="max-sm:text-sm" placeholder="https://facebook.com/username" {...field} />
                      </FormControl>
                      <FormMessage className="max-sm:text-xs" />
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
                        <Input className="max-sm:text-sm" placeholder="https://twitter.com/username" {...field} />
                      </FormControl>
                      <FormMessage className="max-sm:text-xs" />
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
                    <FormMessage className="max-sm:text-xs" />
                  </FormItem>
                )}
              />
              <div className="flex w-full justify-end bg-white z-50 sticky bottom-4 pt-4 border-t shadow-[0px_10px_0px_10px_rgba(255,255,255,1)]">
                <Button
                  type="submit"
                  className="cursor-pointer"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    <>
                      <Loader2Icon className="w-4 h-4 mr-1 animate-spin inline-block align-middle" />
                      Updating...
                    </>
                  ) : (
                    <>
                      <UserCheck2Icon className="w-4 h-4 mr-1 inline-block align-middle" />
                      Update Author
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

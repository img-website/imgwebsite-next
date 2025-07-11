"use client";
import { Button } from "@/components/ui/button";
import { Loader2Icon, UserPlus2Icon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ImageCropperInput from "@/components/image-cropper-input";
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
import { createAuthor } from "@/app/actions/authors";
import { useAuthorStore } from "@/app/store/use-author-store";
import { useRouter } from "next/navigation";

const authorFormSchema = z.object({
  author_name: z.string()
    .min(2, { message: "Author name must be at least 2 characters" })
    .max(100, { message: "Author name cannot exceed 100 characters" }),
  description: z.string()
    .min(10, { message: "Description must be at least 10 characters" })
    .max(500, { message: "Description cannot exceed 500 characters" }),
  image: z.any()
    .refine((file) => file?.length === 1, "Profile image is required"),
  linkedin_link: z.string()
    .trim()
    .url({ message: "Please enter a valid LinkedIn URL" })
    .optional()
    .or(z.literal('')),
  facebook_link: z.string()
    .trim()
    .url({ message: "Please enter a valid Facebook URL" })
    .optional()
    .or(z.literal('')),
  twitter_link: z.string()
    .trim()
    .url({ message: "Please enter a valid Twitter URL" })
    .optional()
    .or(z.literal('')),
});

export default function Page() {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(authorFormSchema),
    defaultValues: {
      author_name: "",
      description: "",
      linkedin_link: "",
      facebook_link: "",
      twitter_link: "",
    },
  });
  const authors = useAuthorStore(state => state.authors);
  const setAuthors = useAuthorStore(state => state.setAuthors);
  const setAuthorDetail = useAuthorStore(state => state.setAuthorDetail);
  async function onSubmit(data) {
    try {
      const formData = new FormData();
      
      // Handle required fields
      formData.append('author_name', data.author_name.trim());
      formData.append('description', data.description.trim());
      if (data.image?.[0]) {
        formData.append('image', data.image[0]);
      }

      // Handle optional social media links
      ['linkedin_link', 'facebook_link', 'twitter_link'].forEach(key => {
        const value = data[key]?.trim();
        if (value) {
          formData.append(key, value);
        }
      });

      const result = await createAuthor(formData);
      
      if (result.success) {
        if (result.data) {
          const newAuthor = result.data;
          setAuthorDetail(newAuthor._id || newAuthor.id, newAuthor);
          setAuthors(authors ? [newAuthor, ...authors] : [newAuthor]);
        }
        toast.success("Author created successfully!");
        form.reset();
        router.push("/admin/blogs/authors");
      } else {
        toast.error(result.error || "Failed to create author");
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
              <CardTitle>Add New Author</CardTitle>
              <CardDescription className="max-sm:text-xs">
                Create a new author profile for your blog. Fill in the required information below.
              </CardDescription>
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
                              Upload a square image (400x400px recommended)
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

                  <div className="flex w-full justify-end bg-white z-50 sticky bottom-4 pt-4 border-t shadow-[0px_10px_0px_10px_rgba(255,255,255,1)]">
                    <Button
                      type="submit"
                      className="cursor-pointer"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? (
                        <>
                          <Loader2Icon className="w-4 h-4 mr-1 animate-spin inline-block align-middle" />
                          Creating...
                        </>
                      ) : (
                        <>
                          <UserPlus2Icon className="w-4 h-4 mr-1 inline-block align-middle" />
                          Create Author
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

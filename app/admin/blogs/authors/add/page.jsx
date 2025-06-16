"use client";
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
        toast.success("Author created successfully!");
        form.reset();
      } else {
        toast.error(result.error || "Failed to create author");
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
      <div className="w-full p-4 pt-0">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Add New Author</CardTitle>
              <CardDescription>
                Create a new author profile for your blog. Fill in the required information below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="author_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Author Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormDescription>
                            This is the public name of the author.
                          </FormDescription>
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
                          <FormDescription>
                            Upload a square image (400x400px recommended)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

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
                        <FormDescription>
                          Write a brief bio about the author (max 500 characters)
                        </FormDescription>
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

                  <div className="flex justify-end gap-4">
                    <Button type="submit" disabled={form.formState.isSubmitting}>
                      {form.formState.isSubmitting ? "Creating..." : "Create Author"}
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

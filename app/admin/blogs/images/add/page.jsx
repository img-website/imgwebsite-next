"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import ImageCropperInput from "@/components/image-cropper-input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import TokenFromCookie from "@/helpers/tokenFromCookie";

const imageFormSchema = z.object({
  image: z.any().refine((file) => file?.length === 1, "Image is required"),
});

export default function AddImagePage() {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(imageFormSchema),
    defaultValues: { image: undefined },
  });

  async function onSubmit(data) {
    try {
      const formData = new FormData();
      if (data.image?.[0]) {
        formData.append('file', data.image[0]);
      }
      const token = TokenFromCookie();
      const res = await fetch("/api/v1/admin/images", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const json = await res.json();
      if (json.success) {
        toast.success("Image uploaded successfully");
        router.push("/admin/blogs/images");
      } else {
        toast.error(json.error || "Failed to upload image");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  }

  return (
    <>
      <div className="w-full p-4">
        <Card>
          <CardHeader>
            <CardTitle>Add Image</CardTitle>
            <CardDescription>Upload a new image. Only one image at a time. Aspect ratio is free.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image</FormLabel>
                      <FormControl>
                        <ImageCropperInput
                          aspectRatio={null}
                          value={field.value}
                          onChange={field.onChange}
                          format="webp"
                          originalName={true}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Uploading..." : "Upload Image"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

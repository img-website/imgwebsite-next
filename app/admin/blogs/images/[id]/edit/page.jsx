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
import React, { useEffect } from "react";
import apiFetch from "@/helpers/apiFetch";

const imageFormSchema = z.object({
  image: z.any().refine((file) => !file || file.length === 1, "Only one image allowed"),
});

export default function EditImagePage({ params }) {
  const { id } = React.use(params);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(imageFormSchema),
    defaultValues: { image: undefined },
  });

  // Fetch image data if id is present in URL
  useEffect(() => {
    async function fetchImage() {
      try {
        const res = await apiFetch(`/api/v1/admin/images/${id}`);
        const result = await res.json();
        if (!result.success || !result.data) {
          router.replace("/admin/blogs/images");
          return;
        }
        // Map API fields to form fields
        const data = result.data;
        form.reset({
          image: data.storedName?.startsWith('http')
            ? data.storedName
            : data.storedName
              ? `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/${data.storedName}?t=${Date.now()}`
              : undefined,
        });
      } catch (err) {
        router.replace("/admin/blogs/images");
      }
    }
    fetchImage();
  }, [id]);

  async function onSubmit(data) {
    try {
      const formData = new FormData();
      if (data.image?.[0]) {
        formData.append('file', data.image[0]);
      }
      const res = await apiFetch(`/api/v1/admin/images/${id}`, {
        method: "PUT",
        body: formData,
      });
      const json = await res.json();
      if (json.success) {
        toast.success("Image updated successfully");
        router.push("/admin/blogs/images");
      } else {
        toast.error(json.error || "Failed to update image");
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
            <CardTitle>Edit Image</CardTitle>
            <CardDescription>Replace the image. The name will remain the same.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field: { onChange, value, ...fieldProps } }) => (
                    <FormItem>
                      <FormLabel>New Image</FormLabel>
                      <FormControl>
                        <ImageCropperInput
                          aspectRatio={null}
                          value={value}
                          onChange={(val) => {
                            if (!val || (Array.isArray(val) && val.length === 0)) {
                              onChange("");
                            } else {
                              onChange(val);
                            }
                          }}
                          format="webp"
                          originalName={true}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Updating..." : "Update Image"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

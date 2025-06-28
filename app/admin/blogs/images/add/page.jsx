"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import MultiImageCropperInput from "@/components/multi-image-cropper-input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as z from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import TokenFromCookie from "@/helpers/tokenFromCookie";

const imageFormSchema = z.object({
  images: z
    .any()
    .refine((files) => Array.isArray(files) && files.length > 0, "At least one image is required"),
});

export default function AddImagePage() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const form = useForm({
    resolver: zodResolver(imageFormSchema),
    defaultValues: { images: [] },
  });

  async function onSubmit(data) {
    try {
      const formData = new FormData();
      if (Array.isArray(data.images)) {
        data.images.forEach((file) => {
          formData.append("files", file);
        });
      }

      await new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/v1/admin/images");
        const token = TokenFromCookie();
        if (token) {
          xhr.setRequestHeader("Authorization", `Bearer ${token}`);
        }
        xhr.upload.onprogress = (e) => {
          if (e.lengthComputable) {
            const percent = Math.round((e.loaded / e.total) * 100);
            setProgress(percent);
          }
        };
        xhr.onload = () => {
          let json = {};
          try {
            json = JSON.parse(xhr.responseText);
          } catch (e) {}
          if (xhr.status >= 200 && xhr.status < 300 && json.success) {
            toast.success("Images uploaded successfully");
            router.push("/admin/blogs/images");
          } else {
            toast.error(json.error || "Failed to upload images");
          }
          setProgress(100);
          resolve();
        };
        xhr.onerror = () => {
          toast.error("Something went wrong");
          resolve();
        };
        xhr.send(formData);
      });
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setProgress(0);
    }
  }

  return (
    <>
      <div className="w-full p-4">
        <Card>
          <CardHeader>
            <CardTitle>Add Images</CardTitle>
            <CardDescription>Upload multiple images at once. Aspect ratio is free for all.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="images"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Images</FormLabel>
                      <FormControl>
                        <MultiImageCropperInput
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
                <Button
                  type="submit"
                  className="w-full relative overflow-hidden"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    <div className="w-full h-2 bg-muted/40 rounded">
                      <div
                        className="h-2 bg-primary rounded"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  ) : (
                    "Upload Images"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

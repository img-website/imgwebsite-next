"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import MultiImageCropperInput from "@/components/multi-image-cropper-input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import apiFetch from "@/helpers/apiFetch";
import { useImageStore } from "@/app/store/use-image-store";

const imageFormSchema = z.object({
  images: z
    .any()
    .refine(
      (file) => Array.isArray(file) && file.length > 0,
      "At least one image is required",
    ),
});

export default function AddImagePage() {
  const router = useRouter();
  const images = useImageStore((state) => state.images);
  const setImages = useImageStore((state) => state.setImages);
  const form = useForm({
    resolver: zodResolver(imageFormSchema),
    defaultValues: { images: [] },
  });

  async function onSubmit(data) {
    try {
      const formData = new FormData();
      if (data.images && data.images.length > 0) {
        data.images.forEach((file) => {
          formData.append("files", file);
        });
      }
      const res = await apiFetch("/api/v1/admin/images", {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      if (json.success) {
        if (Array.isArray(json.data) && json.data.length > 0) {
          const newImgs = json.data.map((img) => ({
            ...img,
            _id: img._id || img.id,
          }));
          setImages(images ? [...newImgs, ...images] : newImgs);
        }
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
            <CardTitle>Add Images</CardTitle>
            <CardDescription>
              Upload multiple images at once. Aspect ratio is free for each.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
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
                  className="w-full cursor-pointer"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting
                    ? "Uploading..."
                    : "Upload Images"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

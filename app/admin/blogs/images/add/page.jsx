"use client";
import { Button } from "@/components/ui/button";
import { Loader2Icon, ImagePlusIcon } from "lucide-react";
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
        <Card className="max-sm:py-0 max-sm:border-0 max-sm:shadow-none">
          <CardHeader className="max-sm:px-0">
            <CardTitle>Add Images</CardTitle>
            <CardDescription className="max-sm:text-xs">
              Upload multiple images at once. Aspect ratio is free for each.
            </CardDescription>
          </CardHeader>
          <CardContent className="max-sm:px-0">
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
                      <FormMessage className="max-sm:text-xs" />
                    </FormItem>
                  )}
                />
                <div className="flex w-full gap-2 justify-end bg-white z-50 sticky bottom-4 pt-4 border-t shadow-[0px_10px_0px_10px_rgba(255,255,255,1)]">
                  <Button
                    type="submit"
                    className="cursor-pointer"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      <>
                        <Loader2Icon className="w-4 h-4 mr-1 animate-spin inline-block align-middle" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        <ImagePlusIcon className="w-4 h-4 mr-1 inline-block align-middle" />
                        Upload Images
                      </>
                    )}
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

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
import apiFetch from "@/helpers/apiFetch";
import { useImageStore } from "@/app/store/use-image-store";
import React from "react";
import { ImagePlusIcon, Loader2Icon } from "lucide-react";

const imageFormSchema = z.object({
  image: z.any().refine((file) => !file || file.length === 1, "Only one image allowed"),
});

export default function EditImageForm({ image }) {
  const router = useRouter();
  const updateImage = useImageStore((state) => state.updateImage);
  const form = useForm({
    resolver: zodResolver(imageFormSchema),
    defaultValues: { image: undefined },
  });

  React.useEffect(() => {
    if (image) {
      form.reset({
        image: image.storedName?.startsWith('http')
          ? image.storedName
          : image.storedName
            ? `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/${image.storedName}?t=${Date.now()}`
            : undefined,
      });
    }
  }, [image]);

  async function onSubmit(data) {
    try {
      const formData = new FormData();
      if (data.image?.[0]) {
        formData.append('file', data.image[0]);
      }
      const res = await apiFetch(`/api/v1/admin/images/${image._id}`, {
        method: 'PUT',
        body: formData,
      });
      const json = await res.json();
      if (json.success) {
        toast.success('Image updated successfully');
        if (json.data) {
          updateImage(image._id, json.data);
        }
        router.push('/admin/blogs/images');
      } else {
        toast.error(json.error || 'Failed to update image');
      }
    } catch (err) {
      toast.error('Something went wrong');
    }
  }

  return (
    <Card className="max-sm:py-0 max-sm:border-0 max-sm:shadow-none">
      <CardHeader className="max-sm:px-0">
        <CardTitle>Edit Image</CardTitle>
        <CardDescription className="max-sm:text-xs">Replace the image. The name will remain the same.</CardDescription>
      </CardHeader>
      <CardContent className="max-sm:px-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="image"
              render={({ field: { onChange, value } }) => (
                <FormItem>
                  <FormLabel>New Image</FormLabel>
                  <FormControl>
                    <ImageCropperInput
                      aspectRatio={null}
                      value={value}
                      onChange={(val) => {
                        if (!val || (Array.isArray(val) && val.length === 0)) {
                          onChange('');
                        } else {
                          onChange(val);
                        }
                      }}
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
                    Updating...
                  </>
                ) : (
                  <>
                    <ImagePlusIcon className="w-4 h-4 mr-1 inline-block align-middle" />
                    Update Image
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

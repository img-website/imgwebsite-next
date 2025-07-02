"use client";
import { use as usePromise } from "react";
import EditImageForm from "./EditImageForm";
import { useImage } from "@/hooks/use-images";
import ImageEditSkeleton from "@/components/skeleton/image-edit-skeleton";

export default function Page({ params }) {
  const { id } = usePromise(params);
  const { image } = useImage(id);

  if (image === undefined) {
    return <ImageEditSkeleton />;
  }

  if (image === null) {
    return <div className="p-4">Image not found</div>;
  }

  return (
    <div className="w-full p-4">
      <EditImageForm image={image} />
    </div>
  );
}

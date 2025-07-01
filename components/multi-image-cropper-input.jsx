"use client";
import React, { useRef, useState, useEffect } from "react";
import { Cropper } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Images, X } from "lucide-react";
import slugify from "slugify";
import { Card } from "./ui/card";

export default function MultiImageCropperInput({
  aspectRatio = 1,
  value = [],
  onChange,
  className,
  format = "any",
  size,
  originalName,
}) {
  const inputRef = useRef(null);
  const cropperRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [error, setError] = useState(null);
  const [queue, setQueue] = useState([]); // Files waiting to be cropped
  const [currentFile, setCurrentFile] = useState(null);
  const [previews, setPreviews] = useState([]);
  const [realFileName, setRealFileName] = useState("");

  useEffect(() => {
    if (Array.isArray(value)) {
      const urls = value.map((f) => {
        if (typeof f === "string") return f;
        return URL.createObjectURL(f);
      });
      setPreviews(urls);
    } else {
      setPreviews([]);
    }
  }, [value]);

  const getAcceptedTypes = () => {
    switch (format) {
      case "webp":
        return "image/webp";
      case "jpg":
        return "image/jpeg";
      case "ico":
        return "image/x-icon,image/vnd.microsoft.icon";
      default:
        return "image/*";
    }
  };

  const getSupportedFormatsText = () => {
    switch (format) {
      case "webp":
        return "Supported format: WebP only";
      case "jpg":
        return "Supported format: JPG/JPEG only";
      case "ico":
        return "Supported format: ICO only";
      default:
        return "Supported formats: JPEG, PNG, GIF";
    }
  };

  const getSizeText = () => {
    return size ? `Required size: ${size} pixels` : "";
  };

  const validateFileFormat = (file) => {
    if (!file) return false;
    switch (format) {
      case "webp":
        return file.type === "image/webp";
      case "jpg":
        return file.type === "image/jpeg";
      case "ico":
        return (
          file.type === "image/x-icon" ||
          file.type === "image/vnd.microsoft.icon" ||
          file.name.toLowerCase().endsWith(".ico")
        );
      default:
        return file.type.startsWith("image/");
    }
  };

  const getFormatErrorMessage = () => {
    switch (format) {
      case "webp":
        return "Only WebP images are allowed";
      case "jpg":
        return "Only JPG/JPEG images are allowed";
      case "ico":
        return "Only ICO images are allowed";
      default:
        return "Invalid image format";
    }
  };

  const getMimeType = () => {
    switch (format) {
      case "webp":
        return "image/webp";
      case "jpg":
        return "image/jpeg";
      case "ico":
        return "image/x-icon";
      default:
        return "image/png";
    }
  };

  const getFileExtension = () => {
    switch (format) {
      case "webp":
        return "webp";
      case "jpg":
        return "jpg";
      case "ico":
        return "ico";
      default:
        return "png";
    }
  };

  const getSlugifiedName = () => {
    if (originalName && realFileName) {
      const base = realFileName.replace(/\.[^/.]+$/, "");
      return slugify(base, { lower: true, strict: true });
    }
  };

  const processNext = (files) => {
    if (!files.length) return;
    const [file, ...rest] = files;
    if (!validateFileFormat(file)) {
      setError(getFormatErrorMessage());
      processNext(rest);
      return;
    }
    setError(null);
    setRealFileName(file.name);
    if (format === "ico") {
      const url = URL.createObjectURL(file);
      setPreviews((prev) => [...prev, url]);
      const newFiles = [...(value || []), file];
      onChange(newFiles);
      processNext(rest);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
      setCurrentFile(file);
      setQueue(rest);
      setOpen(true);
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || []);
    processNext(files);
  };

  const handleCrop = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      let width = null;
      let height = null;
      if (size) {
        const dimensions = size.split("x");
        width = parseInt(dimensions[0]);
        height = parseInt(dimensions[1]);
      }
      const croppedCanvas = cropper.getCroppedCanvas();
      if (width && height) {
        const finalCanvas = document.createElement("canvas");
        finalCanvas.width = width;
        finalCanvas.height = height;
        const ctx = finalCanvas.getContext("2d");
        ctx.drawImage(croppedCanvas, 0, 0, width, height);
        const mimeType = getMimeType();
        const quality = format === "jpg" ? 0.95 : undefined;
        finalCanvas.toBlob(
          (blob) => {
            if (blob) {
              const fileName = `${getSlugifiedName()}.${getFileExtension()}`;
              const file = new File([blob], fileName, { type: mimeType });
              const url = URL.createObjectURL(blob);
              const newFiles = [...(value || []), file];
              onChange(newFiles);
              setPreviews((prev) => [...prev, url]);
            }
            setOpen(false);
            if (queue.length > 0) {
              processNext(queue);
            }
          },
          mimeType,
          quality,
        );
      } else {
        const mimeType = getMimeType();
        const quality = format === "jpg" ? 0.95 : undefined;
        croppedCanvas.toBlob(
          (blob) => {
            if (blob) {
              const fileName = `${getSlugifiedName()}.${getFileExtension()}`;
              const file = new File([blob], fileName, { type: mimeType });
              const url = URL.createObjectURL(blob);
              const newFiles = [...(value || []), file];
              onChange(newFiles);
              setPreviews((prev) => [...prev, url]);
            }
            setOpen(false);
            if (queue.length > 0) {
              processNext(queue);
            }
          },
          mimeType,
          quality,
        );
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = Array.from(e.dataTransfer.files || []);
    processNext(files);
  };

  const handleRemove = (index) => {
    const newPreviews = previews.filter((_, i) => i !== index);
    const newFiles = (value || []).filter((_, i) => i !== index);
    setPreviews(newPreviews);
    onChange(newFiles);
  };

  return (
    <div className={cn("flex flex-col gap-2 w-full", className)}>
      <Input
        type="file"
        accept={getAcceptedTypes()}
        multiple
        ref={inputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={cn(
          "border-2 border-dashed rounded-lg p-4 min-h-[200px]",
          "flex flex-col items-center justify-center gap-2",
          "cursor-pointer hover:border-primary transition-colors",
          "relative",
          previews.length ? "border-muted" : "border-muted-foreground/25",
        )}
      >
        {previews.length === 0 ? (
          <>
            <Images className="h-10 w-10 text-muted-foreground/50" />
            <p className="text-sm text-muted-foreground text-center">
              Drag and drop images, or click to select
            </p>
            <div className="flex flex-col items-center gap-1">
              <p className="text-xs text-muted-foreground/75">
                {getSupportedFormatsText()}
              </p>
              {size && (
                <p className="text-xs text-muted-foreground/75">
                  {getSizeText()}
                </p>
              )}
            </div>
          </>
        ) : (
          <div className="flex flex-wrap justify-center w-full">
            {previews.map((src, idx) => (
              <div key={idx} className="lg:w-1/5 md:w-1/3 sm:w-1/2 w-full p-4">
                <Card className="relative w-full h-32">
                  <Image
                    src={src}
                    alt="Preview"
                    className="rounded-lg object-cover"
                    fill
                    sizes="100%"
                    unoptimized={src.startsWith("blob:") ? false : true}
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleRemove(idx);
                    }}
                    className="absolute -top-2 -right-2 p-1 rounded-full bg-black text-white cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>Crop Image</DialogTitle>
            <DialogDescription>
              Select the area of the image you want to keep.
            </DialogDescription>
          </DialogHeader>
          {imageSrc && (
            <Cropper
              src={imageSrc}
              style={{ height: 400, width: "100%" }}
              aspectRatio={aspectRatio}
              viewMode={1}
              guides={false}
              ref={cropperRef}
            />
          )}
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setOpen(false);
                if (queue.length > 0) processNext(queue);
              }}
            >
              Cancel
            </Button>
            <Button onClick={handleCrop}>Crop</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

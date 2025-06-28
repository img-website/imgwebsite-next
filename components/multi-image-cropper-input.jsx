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

function MultiImageCropperInput({ aspectRatio = 1, value = [], onChange, className, format = 'any', size, originalName }) {
  const inputRef = useRef(null);
  const cropperRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [error, setError] = useState(null);
  const [queue, setQueue] = useState([]); // files waiting to crop
  const [realFileName, setRealFileName] = useState("");
  const [images, setImages] = useState([]); // {file, preview}

  // Initialize previews from value while avoiding infinite loops
  useEffect(() => {
    if (!Array.isArray(value)) return;

    const currentFiles = images.map((img) => img.file);
    let changed = value.length !== currentFiles.length;

    if (!changed) {
      for (let i = 0; i < value.length; i += 1) {
        if (value[i] !== currentFiles[i]) {
          changed = true;
          break;
        }
      }
    }

    if (!changed) return;

    if (value.length > 0) {
      const mapped = value
        .map((val) => {
          if (val instanceof File) {
            return { file: val, preview: URL.createObjectURL(val) };
          }
          if (typeof val === "string" && val) {
            return { file: null, preview: val };
          }
          return null;
        })
        .filter(Boolean);
      setImages(mapped);
    } else {
      setImages([]);
    }
  }, [value, images]);

  const getAcceptedTypes = () => {
    switch (format) {
      case 'webp':
        return 'image/webp';
      case 'jpg':
        return 'image/jpeg';
      case 'ico':
        return 'image/x-icon,image/vnd.microsoft.icon';
      default:
        return 'image/*';
    }
  };

  const getSupportedFormatsText = () => {
    switch (format) {
      case 'webp':
        return 'Supported format: WebP only';
      case 'jpg':
        return 'Supported format: JPG/JPEG only';
      case 'ico':
        return 'Supported format: ICO only';
      default:
        return 'Supported formats: JPEG, PNG, GIF';
    }
  };

  const getSizeText = () => {
    return size ? `Required size: ${size} pixels` : '';
  };

  const validateFileFormat = (file) => {
    if (!file) return false;
    switch (format) {
      case 'webp':
        return file.type === 'image/webp';
      case 'jpg':
        return file.type === 'image/jpeg';
      case 'ico':
        return (
          file.type === 'image/x-icon' ||
          file.type === 'image/vnd.microsoft.icon' ||
          file.name.toLowerCase().endsWith('.ico')
        );
      default:
        return file.type.startsWith('image/');
    }
  };

  const getFormatErrorMessage = () => {
    switch (format) {
      case 'webp':
        return 'Only WebP images are allowed';
      case 'jpg':
        return 'Only JPG/JPEG images are allowed';
      case 'ico':
        return 'Only ICO images are allowed';
      default:
        return 'Invalid image format';
    }
  };

  const getMimeType = () => {
    switch (format) {
      case 'webp':
        return 'image/webp';
      case 'jpg':
        return 'image/jpeg';
      case 'ico':
        return 'image/x-icon';
      default:
        return 'image/png';
    }
  };

  const getFileExtension = () => {
    switch (format) {
      case 'webp':
        return 'webp';
      case 'jpg':
        return 'jpg';
      case 'ico':
        return 'ico';
      default:
        return 'png';
    }
  };

  const getSlugifiedName = () => {
    if (originalName && realFileName) {
      const base = realFileName.replace(/\.[^/.]+$/, '');
      return slugify(base, { lower: true, strict: true });
    }
    return `image-${Date.now()}`;
  };

  const startCropping = (file) => {
    if (!file) return;
    setRealFileName(file.name);
    if (!validateFileFormat(file)) {
      setError(getFormatErrorMessage());
      return;
    }
    setError(null);
    if (format === 'ico') {
      const preview = URL.createObjectURL(file);
      setImages((prev) => [...prev, { file, preview }]);
      if (queue.length > 0) {
        const [next, ...rest] = queue;
        setQueue(rest);
        startCropping(next);
      }
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
      setOpen(true);
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;
    const [first, ...rest] = files;
    setQueue(rest);
    startCropping(first);
  };

  const handleCrop = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      let width = null;
      let height = null;
      if (size) {
        const dimensions = size.split('x');
        width = parseInt(dimensions[0]);
        height = parseInt(dimensions[1]);
      }
      const croppedCanvas = cropper.getCroppedCanvas();
      const mimeType = getMimeType();
      const quality = format === 'jpg' ? 0.95 : undefined;
      const finalize = (blob) => {
        if (blob) {
          const fileName = `${getSlugifiedName()}.${getFileExtension()}`;
          const file = new File([blob], fileName, { type: mimeType });
          const preview = URL.createObjectURL(blob);
          setImages((prev) => [...prev, { file, preview }]);
        }
        setOpen(false);
        if (queue.length > 0) {
          const [next, ...rest] = queue;
          setQueue(rest);
          startCropping(next);
        } else {
          if (inputRef.current) inputRef.current.value = '';
        }
      };
      if (width && height) {
        const finalCanvas = document.createElement('canvas');
        finalCanvas.width = width;
        finalCanvas.height = height;
        const ctx = finalCanvas.getContext('2d');
        ctx.drawImage(croppedCanvas, 0, 0, width, height);
        finalCanvas.toBlob(finalize, mimeType, quality);
      } else {
        croppedCanvas.toBlob(finalize, mimeType, quality);
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
    if (files.length === 0) return;
    const [first, ...rest] = files;
    setQueue(rest);
    startCropping(first);
  };

  const handleRemoveImage = (idx) => {
    setImages((prev) => prev.filter((_, i) => i !== idx));
    if (inputRef.current) inputRef.current.value = '';
  };

  useEffect(() => {
    if (onChange) {
      onChange(images.map((img) => img.file).filter(Boolean));
    }
  }, [images, onChange]);

  return (
    <div className={cn("flex flex-col gap-2 w-full", className)}>
      <Input
        type="file"
        multiple
        accept={getAcceptedTypes()}
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
          images.length === 0 ? "border-muted-foreground/25" : "border-muted"
        )}
      >
        {images.length === 0 ? (
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
          <div className="w-full flex flex-wrap gap-4 justify-center">
            {images.map((img, idx) => (
              <div key={idx} className="relative w-32 h-32">
                <Image
                  src={img.preview}
                  alt={`preview-${idx}`}
                  className="rounded-md object-contain"
                  fill
                  sizes="128px"
                  unoptimized={typeof img.preview === "string" && img.preview.startsWith("blob:") ? false : true}
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleRemoveImage(idx);
                  }}
                  className="absolute -top-2 -right-2 p-1 rounded-full bg-black text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>Crop Image</DialogTitle>
            <DialogDescription>Select the area of the image you want to keep.</DialogDescription>
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
            <Button variant="outline" onClick={() => {
              setOpen(false);
              if (queue.length > 0) {
                const [next, ...rest] = queue;
                setQueue(rest);
                startCropping(next);
              }
            }}>
              Cancel
            </Button>
            <Button onClick={handleCrop}>Crop</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default MultiImageCropperInput;

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

function ImageCropperInput({ aspectRatio = 1, value, onChange, className, format = 'any', size }) {
  const inputRef = useRef(null);
  const cropperRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);

  const getAcceptedTypes = () => {
    switch (format) {
      case 'webp':
        return 'image/webp';
      case 'jpg':
        return 'image/jpeg';
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
      default:
        return 'Invalid image format';
    }
  };

  // Set initial preview if value exists
  useEffect(() => {
    if (value?.[0]) {
      setPreview(URL.createObjectURL(value[0]));
    }
  }, [value]);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!validateFileFormat(file)) {
        setError(getFormatErrorMessage());
        return;
      }
      setError(null);
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
        setOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCrop = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      const width = size ? parseInt(size.split('x')[0]) : null;
      const height = size ? parseInt(size.split('x')[1]) : null;

      cropper.getCroppedCanvas({
        width: width,
        height: height
      }).toBlob((blob) => {
        if (blob) {
          const file = new File([blob], `cropped-${Date.now()}.png`, { type: blob.type });
          setPreview(URL.createObjectURL(blob));
          onChange([file]);
        }
      });
    }
    setOpen(false);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      if (!validateFileFormat(file)) {
        setError(getFormatErrorMessage());
        return;
      }
      setError(null);
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
        setOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleRemoveImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setPreview(null);
    setImageSrc(null);
    onChange([]); // Clear the form value
    if (inputRef.current) {
      inputRef.current.value = ''; // Clear the input
    }
  };

  return (
    <div className={cn("flex flex-col gap-2 w-full", className)}>
      <Input 
        type="file" 
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
          "relative",
          preview ? "border-muted" : "border-muted-foreground/25"
        )}
      >
        {!preview ? (
          <>
            <Images className="h-10 w-10 text-muted-foreground/50" />
            <p className="text-sm text-muted-foreground text-center">
              Drag and drop an image, or click to select
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
          <div className="relative w-full h-full min-h-[200px]">
            <Image 
              src={preview} 
              alt="Preview" 
              className="rounded-md object-contain" 
              fill
              sizes="100%"
            />            
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleRemoveImage(e);
              }}
              className="absolute -top-2 -right-2 p-1 rounded-full bg-black text-white cursor-pointer transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
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
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleCrop}>Crop</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ImageCropperInput;

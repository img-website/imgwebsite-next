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

function ImageCropperInput({ aspectRatio = 1, value, onChange, className }) {
  const inputRef = useRef(null);
  const cropperRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);  const [preview, setPreview] = useState(null);

  // Set initial preview if value exists
  useEffect(() => {
    if (value?.[0]) {
      setPreview(URL.createObjectURL(value[0]));
    }
  }, [value]);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
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
      cropper.getCroppedCanvas().toBlob((blob) => {
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
    if (file && file.type.startsWith('image/')) {
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
        accept="image/*" 
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
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-10 w-10 text-muted-foreground/50"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
            <p className="text-sm text-muted-foreground text-center">
              Drag and drop an image, or click to select
            </p>
            <p className="text-xs text-muted-foreground/75">
              Supported formats: JPEG, PNG, GIF
            </p>
          </>
        ) : (
          <div className="relative w-full h-full min-h-[200px]">
            <Image 
              src={preview} 
              alt="Preview" 
              className="rounded-md object-contain" 
              fill
              sizes="100%"
            />            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleRemoveImage(e);
              }}
              className="absolute -top-2 -right-2 p-1 rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
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

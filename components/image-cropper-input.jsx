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

function ImageCropperInput({ aspectRatio = 1, value, onChange, className, format = 'any', size, resetKey, originalName }) {
  const inputRef = useRef(null);
  const cropperRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);

  // Track the last selected file's real/original name
  const [realFileName, setRealFileName] = useState("");
console.log("ImageCropperInput rendered with format:", realFileName);
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

  // Set initial preview if value exists (File or URL)
  useEffect(() => {
    if (value?.[0] instanceof File) {
      setPreview(URL.createObjectURL(value[0]));
    } else if (typeof value === "string" && value) {
      setPreview(value);
    } else if (Array.isArray(value) && typeof value[0] === "string" && value[0]) {
      setPreview(value[0]);
    } else {
      setPreview(null);
    }
  }, [value]);

  // Clear preview and input when resetKey changes
  useEffect(() => {
    setPreview(null);
    setImageSrc(null);
    setError(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    // Also clear the form value
    if (onChange) {
      onChange([]);
    }
  }, [resetKey]);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setRealFileName(file.name); // Save the real/original name
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
  };  const getMimeType = () => {
    switch (format) {
      case 'webp':
        return 'image/webp';
      case 'jpg':
        return 'image/jpeg';
      default:
        return 'image/png'; // Default fallback
    }
  };

  const getFileExtension = () => {
    switch (format) {
      case 'webp':
        return 'webp';
      case 'jpg':
        return 'jpg';
      default:
        return 'png';
    }
  };

  // Helper to get slugified filename
  const getSlugifiedName = () => {
    if (originalName) {
      // If originalName prop is true, use the real file name from input
      const base = realFileName.replace(/\.[^/.]+$/, '');
      return slugify(base, { lower: true, strict: true });
    }
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

      // First get the cropped canvas
      const croppedCanvas = cropper.getCroppedCanvas();
      
      if (width && height) {
        // Create a new canvas with the desired dimensions
        const finalCanvas = document.createElement('canvas');
        finalCanvas.width = width;
        finalCanvas.height = height;
        const ctx = finalCanvas.getContext('2d');
        
        // Draw the cropped image onto the new canvas with desired dimensions
        ctx.drawImage(croppedCanvas, 0, 0, width, height);
        
        // Convert the final canvas to blob with specified format
        const mimeType = getMimeType();
        const quality = format === 'jpg' ? 0.95 : undefined; // High quality for JPEG

        finalCanvas.toBlob(
          (blob) => {
            if (blob) {
              const fileName = `${getSlugifiedName()}.${getFileExtension()}`;
              const file = new File([blob], fileName, { type: mimeType });
              setPreview(URL.createObjectURL(blob));
              onChange([file]);
            }
          },
          mimeType,
          quality
        );
      } else {
        // If no size specified, use original cropped canvas
        const mimeType = getMimeType();
        const quality = format === 'jpg' ? 0.95 : undefined;

        croppedCanvas.toBlob(
          (blob) => {
            if (blob) {
              const fileName = `${getSlugifiedName()}.${getFileExtension()}`;
              const file = new File([blob], fileName, { type: mimeType });
              setPreview(URL.createObjectURL(blob));
              onChange([file]);
            }
          },
          mimeType,
          quality
        );
      }
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
          "border-2 border-dashed rounded-lg p-4 h-[200px]",
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
          <div className="relative w-full h-full">
            <Image 
              src={preview} 
              alt="Preview" 
              className="rounded-md object-contain" 
              fill
              sizes="100%"
              unoptimized={typeof preview === "string" && preview.startsWith("blob:") ? false : true}
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

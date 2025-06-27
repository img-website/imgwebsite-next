"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DatePicker } from "@/components/ui/date-picker";
import ImageCropperInput from "@/components/image-cropper-input";
import MultiKeywordCombobox from "@/components/ui/multi-keyword-combobox";
import PhoneInput from "@/components/ui/phone-input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { useRouter, useParams } from "next/navigation";
import apiFetch from "@/helpers/apiFetch";

const schemaOptions = [
  "Organization",
  "WebPage",
  "LocalBusiness",
  "LocalBusiness2",
  "BreadcrumbList",
  "Product",
  "Service",
  "NewsArticle",
];
const globalTypes = ["Organization", "LocalBusiness", "LocalBusiness2"];

export default function Page() {
  const router = useRouter();
  const { slug } = useParams();
  const [selected, setSelected] = useState("Organization");
  const pageUrl = useMemo(
    () => (globalTypes.includes(selected) ? "global" : slug === "home" ? "/" : `/${slug}`),
    [slug, selected]
  );

  const formSchema = useMemo(() => {
    switch (selected) {
      case "Organization":
        return z.object({
          type: z.literal("Organization"),
          name: z.string().min(1, "Name is required"),
          legalName: z.string().min(1, "Legal name is required"),
          url: z.string().url("Invalid URL").min(1, "URL is required"),
          logo: z.string().min(1, "Logo is required"),
          contactEmail: z
            .string()
            .email("Invalid email")
            .min(1, "Contact email is required"),
          contactPhone: z.string().min(1, "Contact phone is required"),
          foundingDate: z.string().min(1, "Founding date is required"),
          streetAddress: z.string().min(1, "Street address is required"),
          addressLocality: z.string().min(1, "City is required"),
          addressRegion: z.string().min(1, "Region is required"),
          postalCode: z.string().min(1, "Postal code is required"),
          addressCountry: z.string().min(1, "Country code is required"),
          founders: z.array(z.string().min(1)).min(1, "Founders are required"),
          areaServed: z.array(z.string().min(1)).min(1, "Area served is required"),
          sameAs: z.array(z.string().min(1)).min(1, "SameAs links are required"),
        });
      case "WebPage":
        return z.object({
          type: z.literal("WebPage"),
          pageTitle: z.string().min(1, "Page title is required"),
          pageDescription: z.string().optional(),
          pageUrl: z.string().url("Invalid URL"),
          datePublished: z.string().optional(),
          dateModified: z.string().optional(),
          authorName: z.string().optional()
        });
      case "LocalBusiness":
        return z.object({
          type: z.literal("LocalBusiness"),
          businessName: z.string().min(1, "Business name is required"),
          image: z.string().min(1, "Image is required"),
          phoneNumber: z.string().min(1, "Phone number is required"),
          priceRange: z.string().min(1, "Price range is required"),
          streetAddress: z.string().min(1, "Street address is required"),
          addressLocality: z.string().min(1, "City is required"),
          addressRegion: z.string().min(1, "Region is required"),
          postalCode: z.string().min(1, "Postal code is required"),
          addressCountry: z.string().min(1, "Country code is required"),
          openingHours: z.string().optional(),
          latitude: z.number().optional(),
          longitude: z.number().optional(),
          services: z.array(z.string()).optional()
        });
      case "LocalBusiness2":
        return z.object({
          type: z.literal("LocalBusiness2"),
          businessName: z.string().min(1, "Business name is required"),
          image: z.string().min(1, "Image is required"),
          phoneNumber: z.string().min(1, "Phone number is required"),
          priceRange: z.string().min(1, "Price range is required"),
          streetAddress: z.string().min(1, "Street address is required"),
          addressLocality: z.string().min(1, "City is required"),
          addressRegion: z.string().min(1, "Region is required"),
          postalCode: z.string().min(1, "Postal code is required"),
          addressCountry: z.string().min(1, "Country code is required"),
          openingHours: z.string().optional(),
          latitude: z.number().optional(),
          longitude: z.number().optional(),
          services: z.array(z.string()).optional()
        });
      case "BreadcrumbList":
        return z.object({
          type: z.literal("BreadcrumbList"),
          items: z.string()
        });
      case "Product":
        return z.object({
          type: z.literal("Product"),
          productName: z.string().min(1, "Product name is required"),
          description: z.string().optional(),
          brandName: z.string().optional(),
          sku: z.string().optional(),
          imageUrl: z.string().url().optional(),
          price: z.number().optional(),
          currency: z.string().optional(),
          availability: z.string().optional()
        });
      case "Service":
        return z.object({
          type: z.literal("Service"),
          serviceName: z.string().min(1, "Service name is required"),
          description: z.string().optional(),
          areaServed: z.string().optional(),
          serviceType: z.string().optional(),
          providerName: z.string().optional()
        });
      case "NewsArticle":
        return z.object({
          type: z.literal("NewsArticle"),
          headline: z.string().min(1, "Headline is required"),
          description: z.string().optional(),
          authorName: z.string().optional(),
          datePublished: z.string().optional(),
          dateModified: z.string().optional(),
          mainImageUrl: z.string().url().optional()
        });
      default:
        return z.object({ type: z.string() });
    }
  }, [selected]);
  const getDefaults = (type) => {
    switch (type) {
      case "Organization":
        return {
          type: "Organization",
          name: "",
          legalName: "",
          url: "",
          logo: "",
          contactEmail: "",
          contactPhone: "",
          foundingDate: "",
          streetAddress: "",
          addressLocality: "",
          addressRegion: "",
          postalCode: "",
          addressCountry: "",
          founders: [],
          areaServed: [],
          sameAs: [],
        };
      case "WebPage":
        return {
          type: "WebPage",
          pageTitle: "",
          pageDescription: "",
          pageUrl,
          datePublished: "",
          dateModified: "",
          authorName: "",
        };
      case "LocalBusiness":
        return {
          type: "LocalBusiness",
          businessName: "",
          image: "",
          phoneNumber: "",
          priceRange: "",
          streetAddress: "",
          addressLocality: "",
          addressRegion: "",
          postalCode: "",
          addressCountry: "",
          openingHours: "",
          latitude: "",
          longitude: "",
          services: [],
        };
      case "LocalBusiness2":
        return {
          type: "LocalBusiness2",
          businessName: "",
          image: "",
          phoneNumber: "",
          priceRange: "",
          streetAddress: "",
          addressLocality: "",
          addressRegion: "",
          postalCode: "",
          addressCountry: "",
          openingHours: "",
          latitude: "",
          longitude: "",
          services: [],
        };
      case "BreadcrumbList":
        return { type: "BreadcrumbList", items: "" };
      case "Product":
        return {
          type: "Product",
          productName: "",
          description: "",
          brandName: "",
          sku: "",
          imageUrl: "",
          price: "",
          currency: "",
          availability: "",
        };
      case "Service":
        return {
          type: "Service",
          serviceName: "",
          description: "",
          areaServed: "",
          serviceType: "",
          providerName: "",
        };
      case "NewsArticle":
        return {
          type: "NewsArticle",
          headline: "",
          description: "",
          authorName: "",
          datePublished: "",
          dateModified: "",
          mainImageUrl: "",
        };
      default:
        return { type };
    }
  };

  const defaultValues = useMemo(() => getDefaults(selected), [selected, pageUrl]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });


  const [entryId, setEntryId] = useState(null);

  useEffect(() => {
    async function load() {
      const url = globalTypes.includes(selected)
        ? `/api/v1/admin/schema?global=true&type=${selected}`
        : `/api/v1/admin/schema?pageUrl=${encodeURIComponent(pageUrl)}`;
      const res = await apiFetch(url);
      const json = await res.json();
      if (json.success && json.data) {
        setEntryId(json.data._id);
        if (json.data.type && json.data.type !== selected) {
          setSelected(json.data.type);
        }
        form.reset({
          ...getDefaults(json.data.type || selected),
          ...json.data.data,
          type: json.data.type || selected,
        });
      } else {
        setEntryId(null);
        form.reset(getDefaults(selected));
      }
    }
    load();
  }, [pageUrl, selected]);

  async function uploadFile(file) {
    const formData = new FormData();
    formData.append("file", file);
    const res = await apiFetch("/api/v1/admin/images", {
      method: "POST",
      body: formData,
    });
    const json = await res.json();
    if (json.success && json.data?.storedName) {
      return json.data.storedName;
    }
    throw new Error(json.error || "Failed to upload image");
  }

  async function handleImageChange(name, files) {
    if (files?.[0] instanceof File) {
      try {
        const nameOnly = await uploadFile(files[0]);
        form.setValue(
          name,
          `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/${nameOnly}`,
          { shouldValidate: true }
        );
      } catch (err) {
        toast.error(err.message || "Image upload failed");
      }
    } else if (Array.isArray(files) && files.length === 0) {
      form.setValue(name, "", { shouldValidate: true });
    } else {
      form.setValue(name, files, { shouldValidate: true });
    }
  }

  async function onSubmit(values) {
    const res = await apiFetch(`/api/v1/admin/schema`, {
      method: "PUT",
      data: {
        pageUrl,
        type: values.type,
        data: values,
        isGlobal: globalTypes.includes(values.type),
      }
    });
    const result = await res.json();
    if (result.success) {
      toast.success("Saved");
      router.push("/admin/schema");
      router.refresh();
    } else {
      toast.error(result.error || "Failed");
    }
  }

  return (
    <div className="w-full p-4 space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Schema Type</FormLabel>
                <Select
                  value={selected}
                  onValueChange={(val) => {
                    setSelected(val);
                    form.reset(getDefaults(val));
                    field.onChange(val);
                  }}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {schemaOptions.map((op) => (
                      <SelectItem key={op} value={op}>{op}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Render dynamic fields */}
          {selected === "Organization" && (
            <>
              <FormField name="name" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="legalName" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Legal Name</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="url" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>URL</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField
                name="logo"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Logo</FormLabel>
                    <FormControl>
                      <ImageCropperInput
                        value={field.value}
                        onChange={(val) => handleImageChange(field.name, val)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField name="contactEmail" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Email</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField
                name="contactPhone"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Phone</FormLabel>
                    <FormControl>
                      <PhoneInput value={field.value} onChange={field.onChange} autoFocus />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="foundingDate"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Founding Date</FormLabel>
                    <FormControl>
                      <DatePicker value={field.value} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField name="streetAddress" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Street Address</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="addressLocality" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="addressRegion" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Region</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <div className="grid md:grid-cols-2 gap-4">
                <FormField name="postalCode" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Postal Code</FormLabel>
                    <FormControl><Input {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField name="addressCountry" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country Code</FormLabel>
                    <FormControl><Input {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <FormField name="founders" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Founders</FormLabel>
                  <FormControl>
                    <MultiKeywordCombobox value={field.value} onChange={field.onChange} label={null} placeholder="Add founder" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="areaServed" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Area Served</FormLabel>
                  <FormControl>
                    <MultiKeywordCombobox value={field.value} onChange={field.onChange} label={null} placeholder="Add code" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField
                name="sameAs"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>SameAs Links</FormLabel>
                    <FormControl>
                      <MultiKeywordCombobox value={field.value} onChange={field.onChange} label={null} placeholder="Add links..." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
          {selected === "WebPage" && (
            <>
              <FormField name="pageTitle" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Page Title</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="pageDescription" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Page Description</FormLabel>
                  <FormControl><Textarea {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="pageUrl" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Page URL</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField
                name="datePublished"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date Published</FormLabel>
                    <FormControl>
                      <DatePicker value={field.value} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="dateModified"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date Modified</FormLabel>
                    <FormControl>
                      <DatePicker value={field.value} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField name="authorName" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Author Name</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </>
          )}
          {selected === "LocalBusiness" && (
            <>
              <FormField name="businessName" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Name</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="image" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <ImageCropperInput value={field.value} onChange={(val) => handleImageChange(field.name, val)} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="phoneNumber" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <PhoneInput value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="priceRange" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Price Range</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="streetAddress" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Street Address</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="addressLocality" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="addressRegion" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Region</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <div className="grid md:grid-cols-2 gap-4">
                <FormField name="postalCode" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Postal Code</FormLabel>
                    <FormControl><Input {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField name="addressCountry" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country Code</FormLabel>
                    <FormControl><Input {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <FormField name="openingHours" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Opening Hours</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="latitude" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Latitude</FormLabel>
                  <FormControl><Input type="number" step="any" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="longitude" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Longitude</FormLabel>
                  <FormControl><Input type="number" step="any" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField
                name="services"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Services Offered</FormLabel>
                    <FormControl>
                      <MultiKeywordCombobox value={field.value} onChange={field.onChange} label={null} placeholder="Add service" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
          {selected === "LocalBusiness2" && (
            <>
              <FormField name="businessName" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Name</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="image" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <ImageCropperInput value={field.value} onChange={(val) => handleImageChange(field.name, val)} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="phoneNumber" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <PhoneInput value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="priceRange" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Price Range</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="streetAddress" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Street Address</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="addressLocality" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="addressRegion" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Region</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <div className="grid md:grid-cols-2 gap-4">
                <FormField name="postalCode" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Postal Code</FormLabel>
                    <FormControl><Input {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField name="addressCountry" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country Code</FormLabel>
                    <FormControl><Input {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <FormField name="openingHours" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Opening Hours</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="latitude" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Latitude</FormLabel>
                  <FormControl><Input type="number" step="any" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="longitude" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Longitude</FormLabel>
                  <FormControl><Input type="number" step="any" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField
                name="services"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Services Offered</FormLabel>
                    <FormControl>
                      <MultiKeywordCombobox value={field.value} onChange={field.onChange} label={null} placeholder="Add service" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
          {selected === "BreadcrumbList" && (
            <FormField name="items" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Breadcrumb Items (JSON)</FormLabel>
                <FormControl><Textarea {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          )}
          {selected === "Product" && (
            <>
              <FormField name="productName" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="description" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl><Textarea {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="brandName" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand Name</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="sku" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>SKU</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="imageUrl" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="price" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl><Input type="number" step="any" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="currency" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Currency</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="availability" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Availability</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </>
          )}
          {selected === "Service" && (
            <>
              <FormField name="serviceName" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Name</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="description" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl><Textarea {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="areaServed" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Area Served</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="serviceType" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Type</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="providerName" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Provider Name</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </>
          )}
          {selected === "NewsArticle" && (
            <>
              <FormField name="headline" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Headline</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="description" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl><Textarea {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="authorName" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Author Name</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField
                name="datePublished"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date Published</FormLabel>
                    <FormControl>
                      <DatePicker value={field.value} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="dateModified"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date Modified</FormLabel>
                    <FormControl>
                      <DatePicker value={field.value} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField name="mainImageUrl" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Main Image URL</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </>
          )}
          <div className="flex justify-end pt-4">
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

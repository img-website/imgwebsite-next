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
  "Corporation",
  "WebPage",
  "LocalBusiness",
  "BreadcrumbList",
  "Product",
  "Service",
  "NewsArticle"
];

export default function Page() {
  const router = useRouter();
  const { slug } = useParams();
  const pageUrl = slug === "home" ? "/" : `/${slug}`;
  const [selected, setSelected] = useState("Corporation");

  const formSchema = useMemo(() => {
    switch (selected) {
      case "Corporation":
        return z.object({
          type: z.literal("Corporation"),
          name: z.string().min(1, "Name is required"),
          url: z.string().url("Invalid URL"),
          logo: z.string().optional(),
          contactEmail: z.string().email("Invalid email").optional(),
          contactPhone: z.string().optional(),
          foundingDate: z.string().optional(),
          address: z.string().optional(),
          sameAs: z.array(z.string()).optional()
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
          address: z.string().optional(),
          openingHours: z.string().optional(),
          latitude: z.number().optional(),
          longitude: z.number().optional(),
          phoneNumber: z.string().optional(),
          services: z.array(z.string()).optional(),
          priceRange: z.string().optional()
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
      case "Corporation":
        return {
          type: "Corporation",
          name: "",
          url: "",
          logo: "",
          contactEmail: "",
          contactPhone: "",
          foundingDate: "",
          address: "",
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
          address: "",
          openingHours: "",
          latitude: "",
          longitude: "",
          phoneNumber: "",
          services: [],
          priceRange: "",
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
      const res = await apiFetch(`/api/v1/admin/schema?pageUrl=${encodeURIComponent(pageUrl)}`);
      const json = await res.json();
      if (json.success && json.data) {
        setEntryId(json.data._id);
        setSelected(json.data.type);
        form.reset({ ...getDefaults(json.data.type), ...json.data.data, type: json.data.type });
      }
    }
    load();
  }, [pageUrl]);

  async function onSubmit(values) {
    const res = await apiFetch(`/api/v1/admin/schema`, {
      method: "PUT",
      data: { pageUrl, type: values.type, data: values }
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
          {selected === "Corporation" && (
            <>
              <FormField name="name" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
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
                render={({ field: { onChange, value } }) => (
                  <FormItem>
                    <FormLabel>Logo</FormLabel>
                    <FormControl>
                      <ImageCropperInput value={value} onChange={onChange} />
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
                      <PhoneInput value={field.value} onChange={field.onChange} />
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
              <FormField name="address" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl><Textarea {...field} /></FormControl>
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
              <FormField name="address" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl><Textarea {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
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
                name="phoneNumber"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <PhoneInput value={field.value} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              <FormField name="priceRange" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Price Range</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
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

"use client";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import TinyMCEEditor from "@/components/TinyMCEEditor";
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

const faqEditorInit = {
  menubar: false,
  menu: false,
  plugins: ["lists", "link"],
  toolbar: "bold italic underline strikethrough | bullist numlist | link",
  quickbars_selection_toolbar: false,
  contextmenu: false,
  valid_elements: "p,strong/b,em/i,u,strike,ul,ol,li,br,a,a[href|target=_blank]",
  paste_as_text: true,
};
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
  "FAQPage",
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
          addressCountry: z.string().min(1, "Country code is required")
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
          addressCountry: z.string().min(1, "Country code is required")
        });
      case "BreadcrumbList":
        return z.object({
          type: z.literal("BreadcrumbList"),
          items: z
            .array(
              z.object({
                name: z.string().min(1, "Name is required"),
                item: z.string().url("Invalid URL").min(1, "URL is required"),
              })
            )
            .min(1, "At least one item is required"),
        });
      case "Product":
        return z.object({
          type: z.literal("Product"),
          name: z.string().min(1, "Name is required"),
          image: z.string().min(1, "Image is required"),
          description: z.string().min(1, "Description is required"),
          brandName: z.string().min(1, "Brand name is required"),
          ratingValue: z.string().min(1, "Rating value is required"),
          ratingCount: z.string().min(1, "Rating count is required"),
        });
      case "Service":
        return z.object({
          type: z.literal("Service"),
          name: z.string().min(1, "Name is required"),
          providerName: z.string().min(1, "Provider name is required"),
          description: z.string().min(1, "Description is required"),
          areaServed: z.string().min(1, "Area served is required"),
          serviceType: z.array(z.string().min(1)).min(1, "Service type is required"),
          sameAs: z.array(z.string().min(1)).min(1, "SameAs links are required"),
        });
      case "FAQPage":
        return z.object({
          type: z.literal("FAQPage"),
          faqs: z
            .array(
              z.object({
                question: z.string().min(1, "Question is required"),
                answer: z.string().min(1, "Answer is required"),
              })
            )
            .min(1, "Add at least one FAQ"),
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
        };
      case "BreadcrumbList":
        return { type: "BreadcrumbList", items: [] };
      case "Product":
        return {
          type: "Product",
          name: "",
          image: "",
          description: "",
          brandName: "",
          ratingValue: "",
          ratingCount: "",
        };
      case "Service":
        return {
          type: "Service",
          name: "",
          providerName: "",
          description: "",
          areaServed: "",
          serviceType: [],
          sameAs: [],
        };
      case "FAQPage":
        return {
          type: "FAQPage",
          faqs: [{ question: "", answer: "" }],
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

  const breadcrumbFields = useFieldArray({ control: form.control, name: "items" });
  const faqFields = useFieldArray({ control: form.control, name: "faqs" });


  const [entryId, setEntryId] = useState(null);

  useEffect(() => {
    async function load() {
      const url = globalTypes.includes(selected)
        ? `/api/v1/admin/schema?global=true&type=${selected}`
        : `/api/v1/admin/schema?pageUrl=${encodeURIComponent(pageUrl)}&type=${selected}`;
      const res = await apiFetch(url);
      const json = await res.json();
      if (json.success && json.data) {
        setEntryId(json.data._id);
        const data = { ...json.data.data };
        const toUrl = (v) =>
          v && !v.startsWith("http")
            ? `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/${v}`
            : v;
        if (data.logo) data.logo = toUrl(data.logo);
        if (data.image) data.image = toUrl(data.image);
        const addDomain = (u) =>
          u && !u.startsWith("http")
            ? `${process.env.NEXT_PUBLIC_BASE_URL}${u}`
            : u;
        if (json.data.type === "BreadcrumbList" && Array.isArray(data.items)) {
          data.items = data.items.map((it) => ({
            ...it,
            item: addDomain(it.item),
          }));
        }

        form.reset({
          ...getDefaults(json.data.type || selected),
          ...data,
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
        form.setValue(name, nameOnly, { shouldValidate: true });
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
    const clean = (v) =>
      v && v.startsWith("http") ? v.split("/").pop().split("?")[0] : v;
    const submitValues = { ...values };
    if (submitValues.logo) submitValues.logo = clean(submitValues.logo);
    if (submitValues.image) submitValues.image = clean(submitValues.image);
    const toRelative = (u) => {
      if (!u) return u;
      try {
        return new URL(u).pathname;
      } catch {
        return u;
      }
    };
    if (Array.isArray(submitValues.items)) {
      submitValues.items = submitValues.items.map((it) => ({
        ...it,
        item: toRelative(it.item),
      }));
    }
    const res = await apiFetch(`/api/v1/admin/schema`, {
      method: "PUT",
      data: {
        pageUrl,
        type: values.type,
        data: submitValues,
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

            </>
          )}
          {selected === "BreadcrumbList" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <FormLabel>Breadcrumb Items</FormLabel>
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  onClick={() => breadcrumbFields.append({ name: "", item: "" })}
                >
                  <Plus className="h-4 w-4 mr-2" /> Add Item
                </Button>
              </div>
              {breadcrumbFields.fields.map((field, index) => (
                <div key={field.id} className="flex flex-wrap items-start gap-4">
                  <FormField
                    control={form.control}
                    name={`items.${index}.name`}
                    render={({ field }) => (
                      <FormItem className="grow">
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`items.${index}.item`}
                    render={({ field }) => (
                      <FormItem className="grow">
                        <FormLabel>URL</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="mt-[22px] cursor-pointer"
                    onClick={() => breadcrumbFields.remove(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
          {selected === "Product" && (
            <>
              <FormField name="name" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
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
              <div className="grid md:grid-cols-2 gap-4">
                <FormField name="ratingValue" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rating Value</FormLabel>
                    <FormControl><Input {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField name="ratingCount" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rating Count</FormLabel>
                    <FormControl><Input {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
            </>
          )}
          {selected === "Service" && (
            <>
              <FormField name="name" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
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
                  <FormControl>
                    <MultiKeywordCombobox value={field.value} onChange={field.onChange} label={null} placeholder="Add type" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="sameAs" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>SameAs Links</FormLabel>
                  <FormControl>
                    <MultiKeywordCombobox value={field.value} onChange={field.onChange} label={null} placeholder="Add link" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </>
          )}
          {selected === "FAQPage" && (
            <div className="space-y-4">
              {faqFields.fields.map((field, index) => (
                <div key={field.id} className="border p-4 rounded-md space-y-4">
                  <div className="flex flex-wrap">
                    <FormField
                      control={form.control}
                      name={`faqs.${index}.question`}
                      render={({ field }) => (
                        <FormItem className="grow mr-4">
                          <FormLabel>Question</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="button" variant="outline" size="icon" className="mt-[22px] cursor-pointer" onClick={() => faqFields.remove(index)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <FormField
                    control={form.control}
                    name={`faqs.${index}.answer`}
                    render={({ field }) => (
                      <FormItem className="[&_.tox-statusbar__branding]:!hidden">
                        <FormLabel>Answer</FormLabel>
                        <FormControl>
                          <TinyMCEEditor
                            value={field.value}
                            onChange={field.onChange}
                            init={faqEditorInit}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
              <Button type="button" variant="secondary" size="sm" onClick={() => faqFields.append({ question: '', answer: '' })}>
                <Plus className="h-4 w-4 mr-2" /> Add FAQ
              </Button>
            </div>
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

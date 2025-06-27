"use client";
// Admin form to manage sitewide metadata with validation
import { useForm, useFieldArray } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { staticMetaSchema } from "@/app/lib/validations/staticMeta";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import MultiKeywordCombobox from "@/components/ui/multi-keyword-combobox";
import ImageCropperInput from "@/components/image-cropper-input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import apiFetch from "@/helpers/apiFetch";

const defaultMeta = {
  creator: "",
  publisher: "",
  applicationName: "",
  verification: { google: "", microsoft: "", other: { fb: "" } },
  appleWebApp: {
    title: "",
    statusBarStyle: "",
    capable: false,
    startupImage: { mainImageUrl: "", url: "" },
  },
  icons: { icon: [], shortcut: "", apple: "", other: [] },
  generator: "",
  formatDetection: { email: false, address: false, telephone: false },
  pinterest: { richPin: false },
  category: "",
  twitter: { site: "", creator: "", images: [] },
  openGraph: { url: "", siteName: "", locale: "", type: "", images: [] },
  authors: [],
  keywords: [],
  description: "",
  title: { default: "" },
};

function mergeDeep(target, source) {
  for (const key in source) {
    if (
      source[key] &&
      typeof source[key] === "object" &&
      !Array.isArray(source[key])
    ) {
      if (!target[key]) target[key] = {};
      mergeDeep(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

export default function EditStaticMetaForm({ meta }) {
  const form = useForm({
    resolver: zodResolver(staticMetaSchema),
    defaultValues: structuredClone(defaultMeta),
  });
  const { control, handleSubmit, watch, setValue, reset } = form;

  // When meta is loaded from the server reset the form so previews show
  useEffect(() => {
    if (meta) {
      reset(mergeDeep(structuredClone(defaultMeta), meta));
    }
  }, [meta, reset]);

  const iconFields = useFieldArray({ control, name: "icons.icon" });
  const iconOtherFields = useFieldArray({ control, name: "icons.other" });
  const ogImageFields = useFieldArray({ control, name: "openGraph.images" });
  const authorFields = useFieldArray({ control, name: "authors" });
  const twitterImageFields = useFieldArray({ control, name: "twitter.images" });

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

  async function onSubmit(data) {
    try {
      const strip = (val) =>
        typeof val === "string" ? val.split("/").pop().split("?")[0] : val;
      data.appleWebApp.startupImage.mainImageUrl = strip(
        data.appleWebApp.startupImage.mainImageUrl
      );
      data.appleWebApp.startupImage.url = strip(data.appleWebApp.startupImage.url);
      data.icons.icon = data.icons.icon.map((i) => ({ ...i, url: strip(i.url) }));
      data.icons.shortcut = strip(data.icons.shortcut);
      data.icons.apple = strip(data.icons.apple);
      data.icons.other = data.icons.other.map((i) => ({ ...i, url: strip(i.url) }));
      data.twitter.images = data.twitter.images.map(strip);
      data.openGraph.images = data.openGraph.images.map((img) => ({ ...img, url: strip(img.url) }));
      const res = await apiFetch("/api/v1/admin/meta/static", {
        method: "PUT",
        data,
      });
      const json = await res.json();
      if (json.success) {
        toast.success("Meta updated successfully");
      } else {
        toast.error(json.error || "Failed to update meta");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  }

  // Upload an image and update the field with validation so errors disappear
  async function handleImageChange(name, files) {
    if (files?.[0] instanceof File) {
      try {
        const nameOnly = await uploadFile(files[0]);
        setValue(
          name,
          `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/${nameOnly}`,
          { shouldValidate: true }
        );
      } catch (err) {
        toast.error(err.message || "Image upload failed");
      }
    } else if (Array.isArray(files) && files.length === 0) {
      setValue(name, "", { shouldValidate: true });
    } else {
      setValue(name, files, { shouldValidate: true });
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit Static Meta</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={control}
              name="creator"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Creator</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="publisher"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Publisher</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="applicationName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Application Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={control}
                name="verification.google"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Google Verification</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="verification.microsoft"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Microsoft Verification</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={control}
              name="verification.other.fb"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Facebook App ID</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={control}
                name="appleWebApp.title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apple WebApp Title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="appleWebApp.statusBarStyle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status Bar Style</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={control}
              name="appleWebApp.capable"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                  <FormLabel>Capable</FormLabel>
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={control}
                name="appleWebApp.startupImage.mainImageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Main Startup Image</FormLabel>
                    <FormControl>
                      <ImageCropperInput
                        key={field.name}
                        value={field.value}
                        onChange={(val) => handleImageChange(field.name, val)}
                        originalName={true}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="appleWebApp.startupImage.url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Startup Image</FormLabel>
                    <FormControl>
                      <ImageCropperInput
                        key={field.name}
                        value={field.value}
                        onChange={(val) => handleImageChange(field.name, val)}
                        originalName={true}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Icons</h4>
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  onClick={() => iconFields.append({ url: "", sizes: "" })}
                >
                  <Plus className="h-4 w-4 mr-2" /> Add Icon
                </Button>
              </div>
              {iconFields.fields.map((field, index) => (
                <div key={field.id} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={control}
                    name={`icons.icon.${index}.url`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>URL</FormLabel>
                        <FormControl>
                          <ImageCropperInput
                            key={field.id}
                            aspectRatio={1}
                            value={field.value}
                            onChange={(val) => handleImageChange(field.name, val)}
                            originalName={true}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name={`icons.icon.${index}.sizes`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sizes</FormLabel>
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
                    onClick={() => iconFields.remove(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            <FormField
              control={control}
              name="icons.shortcut"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Shortcut Icon</FormLabel>
                  <FormControl>
                    <ImageCropperInput
                      key={field.name}
                      aspectRatio={1}
                      value={field.value}
                      onChange={(val) => handleImageChange(field.name, val)}
                      originalName={true}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="icons.apple"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Apple Icon</FormLabel>
                  <FormControl>
                    <ImageCropperInput
                      key={field.name}
                      aspectRatio={1}
                      value={field.value}
                      onChange={(val) => handleImageChange(field.name, val)}
                      originalName={true}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Other Icons</h4>
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  onClick={() => iconOtherFields.append({ rel: "", url: "", color: "" })}
                >
                  <Plus className="h-4 w-4 mr-2" /> Add
                </Button>
              </div>
              {iconOtherFields.fields.map((field, index) => (
                <div key={field.id} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <FormField
                    control={control}
                    name={`icons.other.${index}.rel`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Rel</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name={`icons.other.${index}.url`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>URL</FormLabel>
                        <FormControl>
                          <ImageCropperInput
                            key={field.id}
                            aspectRatio={1}
                            value={field.value}
                            onChange={(val) => handleImageChange(field.name, val)}
                            originalName={true}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name={`icons.other.${index}.color`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Color</FormLabel>
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
                    onClick={() => iconOtherFields.remove(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            <FormField
              control={control}
              name="generator"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Generator</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormField
                control={control}
                name="formatDetection.email"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                    <FormLabel>Email Detection</FormLabel>
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="formatDetection.address"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                    <FormLabel>Address Detection</FormLabel>
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="formatDetection.telephone"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                    <FormLabel>Telephone Detection</FormLabel>
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={control}
              name="pinterest.richPin"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                  <FormLabel>Pinterest Rich Pin</FormLabel>
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="space-y-4">
              <FormField
                control={control}
                name="twitter.site"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Twitter Site</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="twitter.creator"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Twitter Creator</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Twitter Images</h4>
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    onClick={() => twitterImageFields.append("")}
                  >
                    <Plus className="h-4 w-4 mr-2" /> Add Image
                  </Button>
                </div>
                {twitterImageFields.fields.map((field, index) => (
                  <div key={field.id} className="flex items-center gap-4">
                    <FormField
                      control={control}
                      name={`twitter.images.${index}`}
                      render={({ field }) => (
                          <ImageCropperInput
                            key={field.id}
                            aspectRatio={1.9}
                            format="jpg"
                            value={field.value}
                            onChange={(val) => handleImageChange(field.name, val)}
                            originalName={true}
                          />
                      )}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => twitterImageFields.remove(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <FormField
                control={control}
                name="openGraph.url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>OpenGraph URL</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="openGraph.siteName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Site Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="openGraph.locale"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Locale</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="openGraph.type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">OpenGraph Images</h4>
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    onClick={() => ogImageFields.append({ url: "", width: 0, height: 0, alt: "", type: "" })}
                  >
                    <Plus className="h-4 w-4 mr-2" /> Add Image
                  </Button>
                </div>
                {ogImageFields.fields.map((field, index) => (
                  <div key={field.id} className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    <FormField
                      control={control}
                      name={`openGraph.images.${index}.url`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>URL</FormLabel>
                          <FormControl>
                            <ImageCropperInput
                              key={field.id}
                              aspectRatio={1.9}
                              format="jpg"
                              value={field.value}
                              onChange={(val) => handleImageChange(field.name, val)}
                              originalName={true}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={control}
                      name={`openGraph.images.${index}.width`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Width</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={control}
                      name={`openGraph.images.${index}.height`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Height</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={control}
                      name={`openGraph.images.${index}.alt`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Alt</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={control}
                      name={`openGraph.images.${index}.type`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Type</FormLabel>
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
                      onClick={() => ogImageFields.remove(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Authors</h4>
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  onClick={() => authorFields.append({ name: "", url: "" })}
                >
                  <Plus className="h-4 w-4 mr-2" /> Add Author
                </Button>
              </div>
              {authorFields.fields.map((field, index) => (
                <div key={field.id} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={control}
                    name={`authors.${index}.name`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name={`authors.${index}.url`}
                    render={({ field }) => (
                      <FormItem>
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
                    onClick={() => authorFields.remove(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            <MultiKeywordCombobox
              label="Keywords"
              value={watch("keywords")}
              onChange={(val) => setValue("keywords", val, { shouldValidate: true })}
            />
            <FormField
              control={control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea className="min-h-[120px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="title.default"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Default Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit">Update Meta</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

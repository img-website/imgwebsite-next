"use client";
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { dynamicMetaSchema } from '@/app/lib/validations/dynamicMeta';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import MultiKeywordCombobox from '@/components/ui/multi-keyword-combobox';
import ImageCropperInput from '@/components/image-cropper-input';
import { useParams, useRouter } from 'next/navigation';
import apiFetch from '@/helpers/apiFetch';
import { toast } from 'sonner';
import { Card, CardContent } from '@/components/ui/card';

export default function Page() {
  const { slug } = useParams();
  const router = useRouter();
  const pageUrl = slug === 'home' ? '/' : `/${slug}`;

  const form = useForm({
    resolver: zodResolver(dynamicMetaSchema),
    defaultValues: {
      pageUrl,
      title: '',
      description: '',
      keywords: [],
      openGraph: {
        title: '',
        description: '',
        images: [
          { url: '', width: 1200, height: 630, alt: '', type: 'image/png' },
        ],
        url: pageUrl,
      },
      twitter: { title: '', description: '', images: [''] },
      robots: {
        index: false,
        follow: false,
        nocache: false,
        googleBot: {
          index: false,
          follow: false,
          noimageindex: false,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      other: { classification: '' },
    },
  });

  const { control, handleSubmit, setValue, reset, watch } = form;

  const ogWidth = watch('openGraph.images.0.width');
  const ogHeight = watch('openGraph.images.0.height');
  const ogType = watch('openGraph.images.0.type');
  const aspectRatio = ogWidth && ogHeight ? ogWidth / ogHeight : 1200 / 630;
  const size = ogWidth && ogHeight ? `${ogWidth}x${ogHeight}` : '1200x630';
  const format = (ogType || 'image/png').split('/')[1];

  useEffect(() => {
    async function load() {
      const res = await apiFetch(`/api/v1/admin/meta/dynamic?pageUrl=${encodeURIComponent(pageUrl)}`);
      const json = await res.json();
      if (json.success && json.data) {
        const data = json.data;
        const toUrl = (u) => (u && !u.startsWith('http') ? `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/${u}` : u);
        if (data.openGraph?.images?.length) {
          data.openGraph.images = data.openGraph.images.map((img) => ({ ...img, url: toUrl(img.url) }));
        } else {
          data.openGraph = {
            ...data.openGraph,
            images: [{ url: '', width: 1200, height: 630, alt: '', type: 'image/png' }],
          };
        }
        if (data.twitter?.images?.length) {
          data.twitter.images = data.twitter.images.map(toUrl);
        } else {
          data.twitter = { ...data.twitter, images: [''] };
        }
        delete data.alternates;
        reset(data);
      }
    }
    load();
  }, [pageUrl, reset]);

  async function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);
    const res = await apiFetch('/api/v1/admin/images?noRecord=1', {
      method: 'POST',
      body: formData,
    });
    const json = await res.json();
    const result = Array.isArray(json.data) ? json.data[0] : json.data;
    if (json.success && result?.storedName) {
      return result.storedName;
    }
    throw new Error(json.error || 'Failed to upload image');
  }

  async function handleImageChange(name, files) {
    if (files?.[0] instanceof File) {
      try {
        const nameOnly = await uploadFile(files[0]);
        setValue(name, `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/${nameOnly}`, { shouldValidate: true });
      } catch (err) {
        toast.error(err.message || 'Image upload failed');
      }
    } else if (Array.isArray(files) && files.length === 0) {
      setValue(name, '', { shouldValidate: true });
    } else {
      setValue(name, files, { shouldValidate: true });
    }
  }

  async function onSubmit(values) {
    const strip = (v) => (typeof v === 'string' ? v.split('/').pop().split('?')[0] : v);
    values.openGraph.images = values.openGraph.images.map((img) => ({ ...img, url: strip(img.url) }));
    values.twitter.images = values.twitter.images.map(strip);
    delete values.alternates;
    const res = await apiFetch('/api/v1/admin/meta/dynamic', { method: 'PUT', data: values });
    const json = await res.json();
    if (json.success) {
      toast.success('Saved');
      router.push('/admin/meta/dynamic');
    } else {
      toast.error(json.error || 'Failed');
    }
  }

  return (
    <div className="w-full p-4">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <FormField control={control} name="title" render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={control} name="description" render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={control} name="keywords" render={({ field }) => (
            <FormItem>
              <FormControl>
                <MultiKeywordCombobox value={field.value} onChange={field.onChange} />
              </FormControl>
            </FormItem>
          )} />
          <div className="grid md:grid-cols-2 gap-6">
            <FormField control={control} name="openGraph.title" render={({ field }) => (
              <FormItem>
                <FormLabel>OG Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={control} name="openGraph.description" render={({ field }) => (
              <FormItem>
                <FormLabel>OG Description</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>
          <Card>
            <CardContent className="space-y-4">
            <FormField
              control={control}
              name="openGraph.images.0.url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>OG Image</FormLabel>
                  <FormControl>
                    <ImageCropperInput
                      format={format}
                      aspectRatio={aspectRatio}
                      size={size}
                      value={field.value}
                      onChange={(v) => handleImageChange(field.name, v)}
                      originalName={true}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-wrap gap-2">
              <FormField control={control} name="openGraph.images.0.width" render={({ field }) => (
                <FormItem className="grow-0">
                  <FormLabel>Width</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={control} name="openGraph.images.0.height" render={({ field }) => (
                <FormItem className="grow-0">
                  <FormLabel>Height</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField
                control={control}
                name="openGraph.images.0.type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={(val) => field.onChange(val)}
                      >
                        <SelectTrigger className="grow-0">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="image/jpeg">jpg</SelectItem>
                          <SelectItem value="image/png">png</SelectItem>
                          <SelectItem value="image/webp">webp</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField control={control} name="openGraph.images.0.alt" render={({ field }) => (
                <FormItem className="grow">
                  <FormLabel>Alt</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
            </CardContent>
          </Card>
          <div className="grid md:grid-cols-2 gap-6">
            <FormField control={control} name="twitter.title" render={({ field }) => (
              <FormItem>
                <FormLabel>Twitter Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={control} name="twitter.description" render={({ field }) => (
              <FormItem>
                <FormLabel>Twitter Description</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>
          <Card>
            <CardContent>
              <FormField
                control={control}
                name="twitter.images.0"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Twitter Image</FormLabel>
                    <FormControl>
                      <ImageCropperInput
                        format={format}
                        aspectRatio={aspectRatio}
                        size={size}
                        value={field.value}
                        onChange={(v) => handleImageChange(field.name, v)}
                        originalName={true}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FormField control={control} name="robots.index" render={({ field }) => (
              <FormItem>
                <FormLabel>Robots Index</FormLabel>
                <FormControl>
                  <Select value={String(field.value)} onValueChange={(v) => {
                    const val = v === 'true';
                    field.onChange(val);
                    setValue('robots.googleBot.index', val);
                  }}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="true">true</SelectItem>
                      <SelectItem value="false">false</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={control} name="robots.follow" render={({ field }) => (
              <FormItem>
                <FormLabel>Robots Follow</FormLabel>
                <FormControl>
                  <Select value={String(field.value)} onValueChange={(v) => {
                    const val = v === 'true';
                    field.onChange(val);
                    setValue('robots.googleBot.follow', val);
                  }}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="true">true</SelectItem>
                      <SelectItem value="false">false</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={control} name="robots.nocache" render={({ field }) => (
              <FormItem>
                <FormLabel>Robots Nocache</FormLabel>
                <FormControl>
                  <Select value={String(field.value)} onValueChange={(v) => field.onChange(v === 'true')}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="true">true</SelectItem>
                      <SelectItem value="false">false</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={control} name="robots.googleBot.noimageindex" render={({ field }) => (
              <FormItem>
                <FormLabel>GoogleBot Noimageindex</FormLabel>
                <FormControl>
                  <Select value={String(field.value)} onValueChange={(v) => field.onChange(v === 'true')}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="true">true</SelectItem>
                      <SelectItem value="false">false</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>
          <FormField control={control} name="other.classification" render={({ field }) => (
            <FormItem>
              <FormLabel>Classification</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <div className="flex w-full gap-2 justify-end bg-white z-50 sticky bottom-4 pt-4 border-t shadow-[0px_10px_0px_10px_rgba(255,255,255,1)]">
            <Button
              type="submit"
              className="cursor-pointer"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? 'Saving...' : 'Save'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

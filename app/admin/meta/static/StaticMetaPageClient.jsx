"use client";
import { useCachedApi } from '@/hooks/use-cached-api';
import EditStaticMetaForm from './EditStaticMetaForm';
import { FormSkeleton } from '@/components/skeleton/form-skeleton';

export default function StaticMetaPageClient() {
  const { data: meta, loading } = useCachedApi('static-meta', async () => {
    const res = await fetch('/api/v1/admin/meta/static');
    const json = await res.json();
    const meta = json?.data || null;
    const toUrl = (name) =>
      name && !name.startsWith('http')
        ? `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/${name}`
        : name;
    if (meta) {
      meta.appleWebApp.startupImage.mainImageUrl = toUrl(
        meta.appleWebApp.startupImage.mainImageUrl
      );
      meta.appleWebApp.startupImage.url = toUrl(meta.appleWebApp.startupImage.url);
      meta.icons.icon = meta.icons.icon.map((i) => ({ ...i, url: toUrl(i.url) }));
      meta.icons.shortcut = toUrl(meta.icons.shortcut);
      meta.icons.apple = toUrl(meta.icons.apple);
      meta.icons.other = meta.icons.other.map((i) => ({ ...i, url: toUrl(i.url) }));
      meta.twitter.images = meta.twitter.images.map(toUrl);
      meta.openGraph.images = meta.openGraph.images.map((img) => ({
        ...img,
        url: toUrl(img.url),
      }));
    }
    return meta;
  });

  if (loading) return <FormSkeleton rows={4} />;

  return (
    <div className="w-full p-4">
      <EditStaticMetaForm meta={meta} />
    </div>
  );
}

"use client";
import { useMemo } from "react";
import EditStaticMetaForm from "./EditStaticMetaForm";
import StaticMetaEditSkeleton from "@/components/skeleton/static-meta-edit-skeleton";
import { useStaticMeta } from "@/hooks/use-static-meta";

export default function Page() {
  const { meta } = useStaticMeta();

  const processedMeta = useMemo(() => {
    if (!meta) return meta;
    const m = structuredClone(meta);
    const toUrl = (name) =>
      name && !name.startsWith("http")
        ? `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/${name}`
        : name;
    m.appleWebApp.startupImage.mainImageUrl = toUrl(
      m.appleWebApp.startupImage.mainImageUrl
    );
    m.appleWebApp.startupImage.url = toUrl(m.appleWebApp.startupImage.url);
    m.icons.icon = m.icons.icon.map((i) => ({ ...i, url: toUrl(i.url) }));
    m.icons.shortcut = toUrl(m.icons.shortcut);
    m.icons.apple = toUrl(m.icons.apple);
    m.icons.other = m.icons.other.map((i) => ({ ...i, url: toUrl(i.url) }));
    m.twitter.images = m.twitter.images.map(toUrl);
    m.openGraph.images = m.openGraph.images.map((img) => ({
      ...img,
      url: toUrl(img.url),
    }));
    return m;
  }, [meta]);

  if (meta === undefined) {
    return <StaticMetaEditSkeleton />;
  }

  return (
    <div className="w-full p-4">
      <EditStaticMetaForm meta={processedMeta} />
    </div>
  );
}

export default async function getStaticMeta() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/meta/static`,
      { next: { revalidate: 3600 } }
    );
    const json = await res.json();
    if (json.success && json.data) {
      const data = json.data;
      const toUrl = (u) =>
        u && !u.startsWith('http')
          ? `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/${u}`
          : u;
      data.openGraph.images = data.openGraph.images.map((img) => ({
        ...img,
        url: toUrl(img.url),
      }));
      data.twitter.images = data.twitter.images.map(toUrl);
      data.icons.icon = data.icons.icon.map((i) => ({ ...i, url: toUrl(i.url) }));
      data.icons.shortcut = toUrl(data.icons.shortcut);
      data.icons.apple = toUrl(data.icons.apple);
      data.icons.other = data.icons.other.map((i) => ({ ...i, url: toUrl(i.url) }));
      data.appleWebApp.startupImage.mainImageUrl = toUrl(
        data.appleWebApp.startupImage.mainImageUrl
      );
      data.appleWebApp.startupImage.url = toUrl(data.appleWebApp.startupImage.url);
      return data;
    }
  } catch (err) {
    console.error('Error fetching static meta:', err);
  }
  return {};
}

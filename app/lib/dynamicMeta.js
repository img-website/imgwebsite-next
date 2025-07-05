export async function fetchDynamicMeta(pageUrl) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/meta/dynamic?pageUrl=${encodeURIComponent(pageUrl)}`,
      { cache: 'no-store' }
    );
    const json = await res.json();
    if (json.success && json.data) {
      const data = json.data;
      const toUrl = (u) =>
        u && !u.startsWith('http')
          ? `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/${u}`
          : u;
      if (data.openGraph?.images?.length) {
        data.openGraph.images = data.openGraph.images.map((img) => ({
          ...img,
          url: toUrl(img.url),
        }));
      }
      if (data.twitter?.images?.length) {
        data.twitter.images = data.twitter.images.map(toUrl);
      }
      return data;
    }
  } catch (err) {
    console.error('Failed to fetch dynamic meta', err);
  }
  return null;
}

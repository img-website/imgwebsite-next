import BlogClient from "./BlogClient";
import BlogSectionSkeleton from "@/components/skeleton/blog-section-skeleton";

export default async function Blog() {
  try {
    const base = process.env.NEXT_PUBLIC_BASE_URL || "";
    const res = await fetch(
      `${base}/api/v1/admin/blogs?status=2&limit=6&sortBy=created_date&sortOrder=-1`,
      { next: { revalidate: 360000 } }
    );
    const json = await res.json();
    if (json.success && Array.isArray(json.data)) {
      const formatDate = (iso) =>
        new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }).format(new Date(iso));
      const blogs = json.data.map((b) => ({
        ...b,
        formatted_date: formatDate(b.published_date_time || b.created_date),
      }));
      return <BlogClient blogs={blogs} />;
    }
  } catch {
    // ignore errors and fallback to skeleton
  }
  return <BlogSectionSkeleton />;
}

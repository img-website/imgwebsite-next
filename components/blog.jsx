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
      return <BlogClient blogs={json.data} />;
    }
  } catch {
    // ignore errors and fallback to skeleton
  }
  return <BlogSectionSkeleton />;
}

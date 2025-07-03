"use client";
import { NewsletterTable } from "@/components/newsletterTable";
import NewsletterTableSkeleton from "@/components/skeleton/newsletter-table-skeleton";
import { useNewsletters } from "@/hooks/use-newsletters";

export default function Page() {
  const { newsletters } = useNewsletters();
  const data = newsletters
    ? newsletters.map((n) => ({
        id: n._id,
        email: n.email,
        createdAt: n.createdAt,
      }))
    : [];

  if (!newsletters) {
    return <NewsletterTableSkeleton />;
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <NewsletterTable data={data} />
    </div>
  );
}

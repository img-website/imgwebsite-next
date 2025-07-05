"use client";
import { MetaPageTable } from '@/components/metaPageTable';
import SchemaPageTableSkeleton from '@/components/skeleton/schema-page-table-skeleton';
import { useSchemaPages } from '@/hooks/use-schemas';

export default function Page() {
  const { pages } = useSchemaPages();

  if (!pages) {
    return <SchemaPageTableSkeleton />;
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <MetaPageTable data={pages} />
    </div>
  );
}

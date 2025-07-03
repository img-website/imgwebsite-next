"use client";
import { SchemaPageTable } from '@/components/schemaPageTable';
import SchemaTableSkeleton from '@/components/skeleton/schema-table-skeleton';
import { useSchemaPages } from '@/hooks/use-schema-pages';

export default function Page() {
  const { pages } = useSchemaPages();

  if (!pages) {
    return <SchemaTableSkeleton />;
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <SchemaPageTable data={pages} />
    </div>
  );
}

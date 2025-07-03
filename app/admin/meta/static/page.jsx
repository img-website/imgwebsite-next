"use client";
import EditStaticMetaForm from "./EditStaticMetaForm";
import StaticMetaSkeleton from "@/components/skeleton/static-meta-skeleton";
import { useStaticMeta } from "@/hooks/use-meta";

export default function Page() {
  const { meta, loading, error } = useStaticMeta();

  if (loading) {
    return <StaticMetaSkeleton />;
  }

  if (!meta) {
    return <div className="p-4">{error || 'Static meta not found'}</div>;
  }

  return (
    <div className="w-full p-4">
      <EditStaticMetaForm meta={meta} />
    </div>
  );
}

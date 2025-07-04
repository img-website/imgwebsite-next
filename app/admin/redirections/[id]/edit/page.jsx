"use client";
import EditRedirectionForm from "./EditRedirectionForm";
import { useRedirection } from "@/hooks/use-redirections";
import { use as usePromise } from "react";
import RedirectionEditSkeleton from "@/components/skeleton/redirection-edit-skeleton";

export default function Page({ params }) {
  const { id } = usePromise(params);
  const { redirection } = useRedirection(id);

  if (redirection === undefined) {
    return <RedirectionEditSkeleton />;
  }

  if (redirection === null) {
    return <div className="p-4">Redirection not found</div>;
  }

  return (
    <div className="w-full p-4">
      <EditRedirectionForm redirection={redirection} />
    </div>
  );
}

"use client";
import EditAuthorForm from "./EditAuthorForm";
import { useAuthor } from "@/hooks/use-authors";
import { use as usePromise } from "react";
import AuthorEditSkeleton from "@/components/skeleton/author-edit-skeleton";

export default function Page({ params }) {
  const { id } = usePromise(params);
  const { author } = useAuthor(id);

  if (author === undefined) {
    return <AuthorEditSkeleton />;
  }

  if (author === null) {
    return <div className="p-4">Author not found</div>;
  }

  return (
    <div className="w-full p-4">
      <EditAuthorForm author={author} />
    </div>
  );
}

"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DeleteAuthorButtons from "@/components/delete-author-buttons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useAuthor } from "@/hooks/use-authors";
import { use as usePromise } from "react";
import AuthorDetailSkeleton from "@/components/skeleton/author-detail-skeleton";

export default function Page({ params }) {
  const { id } = usePromise(params);
  const { author } = useAuthor(id);
  const statusMap = { 1: 'active', 2: 'inactive', 3: 'suspended' };

  if (author === undefined) {
    return <AuthorDetailSkeleton />;
  }

  if (author === null) {
    return <div className="p-4">Author not found</div>;
  }

  const imageSrc = author.image?.startsWith('http')
    ? author.image
    : `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/authors/${author.image}`;

  return (
    <div className="w-full p-4">
      <Card className="max-sm:py-0 max-sm:border-0 max-sm:shadow-none">
        <CardHeader className="max-sm:px-0">
          <CardTitle>Author Details</CardTitle>
        </CardHeader>
        <CardContent className="max-sm:px-0">
          <div className="flex flex-col md:flex-row gap-6">
            <Image src={imageSrc} alt={author.author_name} width={120} height={120} className="rounded-lg object-cover max-sm:w-full max-sm:aspect-square" />
            <div className="space-y-2 text-sm">
              <p className="sm:text-xl text-lg"><strong>{author.author_name}</strong></p>
              <p className="sm:text-sm text-xs">{author.description}</p>
              {author.linkedin_link && (
                <p><strong>LinkedIn:</strong> <a href={author.linkedin_link} target="_blank" className="text-blue-600 underline">{author.linkedin_link}</a></p>
              )}
              {author.facebook_link && (
                <p><strong>Facebook:</strong> <a href={author.facebook_link} target="_blank" className="text-blue-600 underline">{author.facebook_link}</a></p>
              )}
              {author.twitter_link && (
                <p><strong>Twitter:</strong> <a href={author.twitter_link} target="_blank" className="text-blue-600 underline">{author.twitter_link}</a></p>
              )}
              <p><strong>Status:</strong> {statusMap[author.status]}</p>
              <p><strong>Blogs:</strong> {author.blog_count}</p>
              <p><strong>Created:</strong> {new Date(author.created_date).toLocaleString()}</p>
              {author.deleted_at && (
                <p><strong>Deleted:</strong> {new Date(author.deleted_at).toLocaleString()}</p>
              )}
            </div>
          </div>
          <div className="mt-4 flex gap-2 justify-end">
            <Link href={`/admin/blogs/authors/${author._id}/edit`}>
              <Button type="button">Edit</Button>
            </Link>
            <DeleteAuthorButtons id={author._id} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

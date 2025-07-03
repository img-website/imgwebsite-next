"use client";
import { AuthorTable } from "@/components/authorTable";
import AuthorTableSkeleton from "@/components/skeleton/author-table-skeleton";
import { useAuthors } from "@/hooks/use-authors";
import { usePermission } from "@/hooks/use-permission";

export default function Page() {
  const { authors } = useAuthors();
  const canAdd = usePermission('authors', 'write');
  const canEdit = usePermission('authors', 'edit');

  const statusMap = { 1: 'active', 2: 'inactive', 3: 'suspended' };
  const data = authors ? authors.map(author => ({
    id: author._id,
    author_name: author.author_name,
    description: author.description,
    linkedin_link: author.linkedin_link,
    facebook_link: author.facebook_link,
    twitter_link: author.twitter_link,
    status: statusMap[author.status] || 'inactive',
    image: author.image?.startsWith('http') ? author.image : `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/authors/${author.image}`,
    created_date: author.created_date,
    modified_date: author.modified_date,
    blog_count: author.blog_count || 0,
  })) : [];

  if (!authors) {
    return <AuthorTableSkeleton />;
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <AuthorTable data={data} canAdd={canAdd} canEdit={canEdit} />
    </div>
  );
}

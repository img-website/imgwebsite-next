"use client";
import { useCachedApi } from '@/hooks/use-cached-api';
import { AuthorTable } from '@/components/authorTable';
import { TableSkeleton } from '@/components/skeleton/table-skeleton';

export default function AuthorsPageClient({ canAdd, canEdit }) {
  const { data, loading } = useCachedApi('authors', async () => {
    const res = await fetch('/api/v1/admin/blogs/authors');
    const json = await res.json();
    const authors = Array.isArray(json?.data) ? json.data : [];
    const statusMap = { 1: 'active', 2: 'inactive', 3: 'suspended' };
    return authors.map(author => ({
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
    }));
  });

  if (loading || !data) return <TableSkeleton />;

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <AuthorTable data={data} canAdd={canAdd} canEdit={canEdit} />
    </div>
  );
}

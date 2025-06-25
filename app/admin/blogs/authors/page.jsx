import { AuthorTable } from "@/components/authorTable";

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/blogs/authors`, { cache: 'no-store' });
  const json = await res.json();
  const authors = Array.isArray(json?.data) ? json.data : [];
  const statusMap = { 1: 'active', 2: 'inactive', 3: 'suspended' };
  const data = authors.map(author => ({
    id: author._id,
    author_name: author.author_name,
    description: author.description,
    linkedin_link: author.linkedin_link,
    facebook_link: author.facebook_link,
    twitter_link: author.twitter_link,
    status: statusMap[author.status] || 'inactive',
    image: author.image?.startsWith('http') ? author.image : `${process.env.NEXT_PUBLIC_BASE_URL}/api/uploads/authors/${author.image}`,
    created_date: author.created_date,
    modified_date: author.modified_date,
    blog_count: author.blog_count || 0,
  }));

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        {/* <div className="space-y-1">
          <h2 className="text-3xl font-bold tracking-tight">Authors</h2>
          <p className="text-muted-foreground">Authors are the people who have contributed to the blogs.</p>
        </div> */}
        <AuthorTable data={data} />
      </div>
    </>
  );
}

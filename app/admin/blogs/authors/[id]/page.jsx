import { DynamicBreadcrumb } from "@/components/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DeleteAuthorButtons from "@/components/delete-author-buttons";
import Image from "next/image";

export default async function Page({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/blogs/authors/${params.id}`, { cache: 'no-store' });
  const json = await res.json();
  const author = json?.data;

  if (!author) {
    return (
      <div className="p-4">Author not found</div>
    );
  }

  const statusMap = { 1: 'active', 2: 'inactive', 3: 'suspended' };
  const imageSrc = author.image?.startsWith('http')
    ? author.image
    : `${process.env.NEXT_PUBLIC_BASE_URL}/api/uploads/authors/${author.image}`;

  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
          <DynamicBreadcrumb />
        </div>
      </header>
      <Separator />
      <div className="w-full p-4">
        <Card>
          <CardHeader>
            <CardTitle>Author Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6">
              <Image src={imageSrc} alt={author.author_name} width={120} height={120} className="rounded-lg object-cover" />
              <div className="space-y-2 text-sm">
                <p><strong>Name:</strong> {author.author_name}</p>
                <p><strong>Description:</strong> {author.description}</p>
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
            <DeleteAuthorButtons id={author._id} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}

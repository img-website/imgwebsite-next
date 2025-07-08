"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import DeleteBlogButtons from "@/components/delete-blog-buttons";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";
import { use as usePromise } from "react";
import { useBlog } from "@/hooks/use-blogs";
import BlogDetailSkeleton from "@/components/skeleton/blog-detail-skeleton";
import 'tinymce/skins/ui/oxide/content.min.css';
import 'tinymce/skins/content/default/content.min.css';

export default function Page({ params }) {
  const { id } = usePromise(params);
  const { blog } = useBlog(id);

  if (blog === undefined) {
    return <BlogDetailSkeleton />;
  }

  if (blog === null) {
    return <div className="p-4">Blog not found</div>;
  }

  const statusMap = { 1: 'Draft', 2: 'Published', 3: 'Archived', 4: 'Scheduled' };
  const bannerSrc = blog.banner?.startsWith('http') ? blog.banner : `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/blogs/${blog.banner}`;
  const thumbnailSrc = blog.thumbnail?.startsWith('http') ? blog.thumbnail : `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/blogs/${blog.thumbnail}`;
  const ogImageSrc = blog.og_image?.startsWith('http') ? blog.og_image : blog.og_image ? `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/blogs/${blog.og_image}` : null;
  const xImageSrc = blog.x_image?.startsWith('http') ? blog.x_image : blog.x_image ? `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/blogs/${blog.x_image}` : null;
  const blogUrl = blog.slug ? `${process.env.NEXT_PUBLIC_SITE_URL || ''}/blogs/${blog.slug}` : '';
  const formattedCreated = new Date(blog.created_date).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' });
  const formattedPublished = blog.published_date_time ? new Date(blog.published_date_time).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }) : null;

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <Card className="shadow-xl border border-border bg-background/80 backdrop-blur-md">
        <CardHeader className="relative flex flex-col gap-2 border-b pb-4">
          {/* Edit/Delete Buttons - absolute top right */}
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            {blog && blog.status === 1 ? (
              <Link href={`/admin/blogs/add?id=${blog._id}`}>
                <Button type="button" variant="outline">Edit</Button>
              </Link>
            ) : (
              <Link href={`/admin/blogs/${blog._id}/edit`}>
                <Button type="button" variant="outline">Edit</Button>
              </Link>
            )}
            {blog.status === 1 && <DeleteBlogButtons id={blog._id} />}
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight text-primary mb-1 flex items-center gap-2">
            {blog.title}
            {blog.is_featured && (
              <span className="ml-2 px-2 py-0.5 rounded bg-yellow-100 text-yellow-800 text-xs font-semibold">Featured</span>
            )}
          </CardTitle>
          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            <span className={`inline-flex items-center px-2 py-0.5 rounded font-medium ${blog.status === 2 ? 'bg-green-100 text-green-800' : blog.status === 1 ? 'bg-gray-200 text-gray-700' : blog.status === 3 ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>{statusMap[blog.status]}</span>
            {blog.category?.category_name && (
              <span className="inline-flex items-center px-2 py-0.5 rounded bg-secondary font-medium">{blog.category.category_name}</span>
            )}
            {blog.author && (
              <span className="inline-flex items-center px-2 py-0.5 rounded bg-secondary font-medium">
                {blog.author.author_name}
              </span>
            )}
            <span className="inline-flex items-center px-2 py-0.5 rounded bg-secondary font-medium">
              <svg className="w-4 h-4 mr-1 text-muted-foreground" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              {formattedCreated}
            </span>
            {blog.status === 4 && formattedPublished && (
              <span className="inline-flex items-center px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-medium">
                <svg className="w-4 h-4 mr-1 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Scheduled: {formattedPublished}
              </span>
            )}
            {blog.status === 2 && formattedPublished && (
              <span className="inline-flex items-center px-2 py-0.5 rounded bg-green-100 text-green-800 font-medium">
                <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Published: {formattedPublished}
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-2 items-center mt-2">
            {/* Slug Card - Only show 'View' and copy icon, clicking copy copies the blog URL */}
            <Card className="h-10 px-3 flex flex-row items-center gap-2 bg-muted/60 border w-fit min-w-[120px]">
              <span className="text-xs font-semibold text-muted-foreground">View</span>
              {blog.slug ? (
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  className="ml-1"
                  onClick={() => {
                    navigator.clipboard.writeText(blogUrl);
                    toast.success("URL copied!");
                  }}
                  title="Copy URL"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" /></svg>
                </Button>
              ) : (
                <span className="text-muted-foreground italic text-xs">No slug</span>
              )}
            </Card>
            {/* Blog ID Card - Only show 'Blog ID' and copy icon, clicking copy copies the blog ID */}
            <Card className="h-10 px-3 flex flex-row items-center gap-2 bg-muted/60 border w-fit min-w-[120px]">
              <span className="text-xs font-semibold text-muted-foreground">Blog ID</span>
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="ml-1"
                onClick={() => {
                  navigator.clipboard.writeText(blog._id);
                  toast.success("ID copied!");
                }}
                title="Copy Blog ID"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" /></svg>
              </Button>
            </Card>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-8 py-6">
          {/* Images Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border bg-muted">
                <Image priority src={bannerSrc} alt={blog.title} fill className="object-cover" />
              </div>
              <span className="text-xs font-semibold text-muted-foreground mt-1">Banner</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border bg-muted">
                <Image priority src={thumbnailSrc} alt={blog.title} fill className="object-cover" />
              </div>
              <span className="text-xs font-semibold text-muted-foreground mt-1">Thumbnail</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border bg-muted">
                {ogImageSrc ? (
                  <Image priority src={ogImageSrc} alt={blog.title + ' og'} fill className="object-cover" />
                ) : (
                  <span className="text-xs text-muted-foreground flex items-center justify-center h-full">No OG Image</span>
                )}
              </div>
              <span className="text-xs font-semibold text-muted-foreground mt-1">OG Image</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border bg-muted">
                {xImageSrc ? (
                  <Image priority src={xImageSrc} alt={blog.title + ' x'} fill className="object-cover" />
                ) : (
                  <span className="text-xs text-muted-foreground flex items-center justify-center h-full">No X Image</span>
                )}
              </div>
              <span className="text-xs font-semibold text-muted-foreground mt-1">X Image</span>
            </div>
          </div>
          {/* Blog Content */}
          <div className="prose max-w-none text-base leading-relaxed mce-content-body [&_*]:[all:revert] bg-background/60 rounded-lg p-4 border [&_img]:max-w-full">
            <div dangerouslySetInnerHTML={{ __html: blog.description }} />
          </div>
          {/* Show any extra blog fields in a details section using shadcn Accordion */}
          {Object.entries(blog).filter(([key]) => !['title','banner','thumbnail','og_image','x_image','description','slug','_id','category','author','created_date','published_date_time','status','is_featured','faqs'].includes(key)).length > 0 && (
            <div className="mt-4">
              <Card className="border bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-base font-semibold">More Blog Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="multiple" className="w-full">
                    {Object.entries(blog)
                      .filter(([key]) => !['title','banner','thumbnail','og_image','x_image','description','slug','_id','category','author','created_date','published_date_time','status','is_featured','faqs'].includes(key))
                      .map(([key, value], idx) => (
                        <AccordionItem value={`detail-${idx}`} key={key}>
                          <AccordionTrigger>
                            {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="text-xs text-muted-foreground break-all">
                              {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          )}

          {/* FAQs Card with shadcn Accordion */}
          {Array.isArray(blog.faqs) && blog.faqs.length > 0 && (
            <div className="mt-4">
              <Card className="border bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-base font-semibold">FAQs</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="multiple" className="w-full">
                    {blog.faqs.map((faq, idx) => (
                      <AccordionItem value={`faq-${idx}`} key={idx}>
                        <AccordionTrigger>
                          {faq.question || `FAQ ${idx + 1}`}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="mt-2 text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

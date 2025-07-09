"use client";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Badge } from "@/components/ui/badge";
import { BadgeCheckIcon, CheckCircle2Icon, CircleIcon, XCircleIcon, CalendarClockIcon, TagIcon, User2Icon, PencilIcon } from "lucide-react";

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
    <div className="w-full p-4 max-sm:pb-0">
      <Card className="max-sm:py-0 gap-y-0 max-sm:border-0 max-sm:shadow-none">
        <CardHeader className="relative flex flex-col gap-2 border-b pb-4 max-sm:px-0">
          {/* Edit/Delete Buttons - absolute top right */}
          <CardTitle className="font-bold pb-4">{blog.title}</CardTitle>
          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            {!blog.is_featured && (
              <Badge variant="destructive" className="bg-amber-100 text-amber-800"><BadgeCheckIcon /> Featured</Badge>
            )}
            <Badge className={`${blog.status === 2 ? 'bg-green-100 text-green-800' : blog.status === 1 ? 'bg-gray-200 text-gray-700' : blog.status === 3 ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
              {blog.status === 2 && (
                <CheckCircle2Icon className="w-4 h-4 mr-1 text-green-600 inline-block align-middle" />
              )}
              {blog.status === 1 && (
                <CircleIcon className="w-4 h-4 mr-1 text-gray-500 inline-block align-middle" />
              )}
              {blog.status === 3 && (
                <XCircleIcon className="w-4 h-4 mr-1 text-red-600 inline-block align-middle" />
              )}
              {blog.status === 4 && (
                <CalendarClockIcon className="w-4 h-4 mr-1 text-blue-600 inline-block align-middle" />
              )}
              {statusMap[blog.status]}
            </Badge>
            {blog.category?.category_name && (
              <Badge variant="secondary">
                <TagIcon className="w-4 h-4 mr-1 text-blue-400 inline-block align-middle" />
                {blog.category.category_name}
              </Badge>
            )}
            {blog.author && (
              <Badge variant="secondary">
                <User2Icon className="w-4 h-4 mr-1 text-amber-500 inline-block align-middle" />
                {blog.author.author_name}
              </Badge>
            )}
            <Badge variant="secondary">
              <CalendarClockIcon className="w-4 h-4 mr-1 shrink-0 text-muted-foreground inline-block align-middle" />
              {formattedCreated}
            </Badge>
            {blog.status === 4 && formattedPublished && (
              <Badge className="bg-blue-100 text-blue-800">
                <CalendarClockIcon className="w-4 h-4 mr-1 shrink-0 text-blue-500 inline-block align-middle" />
                Scheduled: {formattedPublished}
              </Badge>
            )}
            {blog.status === 2 && formattedPublished && (
              <Badge className="bg-green-100 text-green-800">
                <CalendarClockIcon className="w-4 h-4 mr-1 shrink-0 text-green-500 inline-block align-middle" />
                Published: {formattedPublished}
              </Badge>
            )}
          </div>
          <div className="grid grid-cols-2 max-sm:w-full gap-2 items-center mt-2">
            <Card className="py-0 pl-3 flex items-center flex-row gap-1 rounded-md">
              <span className="text-xs font-semibold text-muted-foreground">View Blog</span>
              {blog.slug ? (
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  className="ml-auto"
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
            <Card className="py-0 pl-3 flex items-center flex-row gap-1 rounded-md">
              <span className="text-xs font-semibold text-muted-foreground">Blog ID</span>
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="ml-auto"
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
        <CardContent className="flex flex-col py-6 max-sm:px-0">
          {/* Images Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 md:gap-6 gap-3">
            <div className="flex flex-col md:gap-2 gap-1">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border bg-muted">
                <Image priority src={bannerSrc} alt={blog.title} fill className="object-cover" />
              </div>
              <span className="text-xs font-semibold text-muted-foreground mt-1">Banner</span>
            </div>
            <div className="flex flex-col md:gap-2 gap-1">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border bg-muted">
                <Image priority src={thumbnailSrc} alt={blog.title} fill className="object-cover" />
              </div>
              <span className="text-xs font-semibold text-muted-foreground mt-1">Thumbnail</span>
            </div>
            <div className="flex flex-col md:gap-2 gap-1">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border bg-muted">
                {ogImageSrc ? (
                  <Image priority src={ogImageSrc} alt={blog.title + ' og'} fill className="object-cover" />
                ) : (
                  <span className="text-xs text-muted-foreground flex items-center justify-center h-full">No OG Image</span>
                )}
              </div>
              <span className="text-xs font-semibold text-muted-foreground mt-1">OG Image</span>
            </div>
            <div className="flex flex-col md:gap-2 gap-1">
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
          <div className="prose max-w-none text-base leading-relaxed mce-content-body [&_*]:[all:revert] bg-background/60 rounded-lg p-4 border [&_img]:max-w-full mt-6" dangerouslySetInnerHTML={{ __html: blog.description }} />
          {/* Show any extra blog fields in a details section using shadcn Accordion */}
          {Object.entries(blog).filter(([key]) => !['title','banner','thumbnail','og_image','x_image','description','slug','_id','category','author','created_date','published_date_time','status','is_featured','faqs'].includes(key)).length > 0 && (
            <div className="mt-4">
              <Card className="border bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-base font-semibold">More Blog Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion className="w-full">
                    {Object.entries(blog)
                      .filter(([key]) => !['title','banner','thumbnail','og_image','x_image','description','slug','_id','category','author','created_date','published_date_time','status','is_featured','faqs'].includes(key))
                      .map(([key, value], idx) => (
                        <AccordionItem value={`detail-${idx}`} key={key}>
                          <AccordionTrigger className="!no-underline cursor-pointer">
                            {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="break-all">
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
                  <Accordion className="w-full">
                    {blog.faqs.map((faq, idx) => (
                      <AccordionItem value={`faq-${idx}`} key={idx}>
                        <AccordionTrigger className="!no-underline cursor-pointer">
                          {faq.question || `FAQ ${idx + 1}`}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="mt-2" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
        <CardFooter className="max-sm:grid max-sm:grid-cols-2 flex justify-end gap-4 bg-white sticky bottom-0 border-t !py-3 max-sm:px-2 max-sm:-mx-2">
          {blog && blog.status === 1 ? (
            <Link href={`/admin/blogs/add?id=${blog._id}`}>
              <Button type="button" variant="default" className="w-full">
                <PencilIcon className="w-4 h-4 mr-1 -ml-1" />
                Edit
              </Button>
            </Link>
          ) : (
            <Link href={`/admin/blogs/${blog._id}/edit`}>
              <Button type="button" variant="default" className="w-full">
                <PencilIcon className="w-4 h-4 mr-1 -ml-1" />
                Edit
              </Button>
            </Link>
          )}
          {blog.status === 1 && <DeleteBlogButtons id={blog._id} />}
        </CardFooter>
      </Card>
    </div>
  );
}

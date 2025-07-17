import Image from "next/image";
import Link from "next/link";
import Svg from "@/components/svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import BlogSectionSkeleton from "@/components/skeleton/blog-section-skeleton";

export default async function Blog() {
  try {
    const base = process.env.NEXT_PUBLIC_BASE_URL || "";
    const res = await fetch(
      `${base}/api/v1/admin/blogs?status=2&limit=6&sortBy=created_date&sortOrder=-1`,
      { next: { revalidate: 360000 } }
    );
    const json = await res.json();
    if (json.success && Array.isArray(json.data)) {
      const formatDate = (iso) =>
        new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }).format(new Date(iso));
      const blogs = json.data.map((b) => ({
        ...b,
        formatted_date: formatDate(b.published_date_time || b.created_date),
      }));
      if (blogs.length === 0) {
        return <BlogSectionSkeleton />;
      }
      return (
        <section className="blogSection w-full relative overflow-hidden bg-white">
          <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
            <div className="flex flex-col w-full">
              <h2 className="w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl md:font-bold font-semibold text-[#454444] text-balance relative z-10">
                Exploring the intersection of everything that sells
              </h2>
              <div className="flex w-full flex-wrap md:pt-9 pt-4 group/blog">
                <div className="sm:pt-9 pt-4 flex flex-wrap lg:gap-0 gap-4 -mx-2 items-stretch overflow-hidden pb-1">
                  <Carousel opts={{ loop: true, align: "start" }} className="w-full px-2 py-2 -my-2">
                    <CarouselContent className="-ml-4 items-stretch">
                      {blogs.map((blog, i) => {
                        const thumb = blog.thumbnail?.startsWith("http")
                          ? blog.thumbnail
                          : blog.thumbnail
                          ? `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/blogs/${blog.thumbnail}`
                          : null;
                        const authorImg = blog.author?.image?.startsWith("http")
                          ? blog.author.image
                          : blog.author?.image
                          ? `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/authors/${blog.author.image}`
                          : null;
                        const blogUrl = blog.slug ? `/blogs/${blog.slug}` : "#";
                        const categoryUrl = blog.category?.slug
                          ? `/blogs/category/${blog.category.slug}`
                          : "#";
                        const dateStr =
                          blog.formatted_date ||
                          new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          }).format(new Date(blog.published_date_time || blog.created_date));

                        return (
                          <CarouselItem key={blog._id || blog.id} className="pl-4 basis-10/12 md:basis-1/2 lg:basis-1/3 2xl:basis-1/4">
                            <div className="flex flex-col items-stretch bg-white relative shadow-[0px_4px_4px_0px_#0000001F] rounded-xl overflow-hidden h-full">
                              {thumb && (
                                <div className="w-full relative overflow-hidden">
                                  <Image
                                    width="330"
                                    height="185"
                                    src={thumb}
                                    alt={blog.title}
                                    title={blog.title}
                                    className="size-full aspect-[66/37] object-cover object-center"
                                  />
                                </div>
                              )}
                              <div className="w-full grow flex flex-col">
                                <div className="flex flex-col items-center p-4 h-full">
                                  <div className="flex w-full items-center justify-between text-sm">
                                    {blog.category?.category_name && (
                                      <Link
                                        href={categoryUrl}
                                        className="ring-1 ring-inset ring-[#E1E0E0] text-xs font-normal text-[#454444] px-5 py-2 rounded-full inline relative z-10"
                                      >
                                        {blog.category.category_name}
                                      </Link>
                                    )}
                                    <span className="text-xs font-normal text-[#454444]">
                                      {dateStr}
                                    </span>
                                  </div>
                                  <h3 className="w-full md:text-base text-sm font-semibold text-[#454444] pt-3 mb-3">
                                    {blog.title}
                                  </h3>

                                  <p className="w-full text-xs font-normal text-[#454444] pt-2 line-clamp-3">
                                    {blog.short_description}
                                  </p>

                                  <div className="grow"></div>
                                  <div className="w-full h-px mt-4 mb-3 bg-[#E1E0E0]"></div>

                                  <div className="flex w-full items-center justify-between">
                                    <div className="flex items-center gap-2">
                                      {authorImg && (
                                        <Image
                                          src={authorImg}
                                          alt={blog.author?.author_name || 'Author'}
                                          title={blog.author?.author_name || 'Author'}
                                          className="size-10 rounded-full object-cover aspect-square"
                                          width={40}
                                          height={40}
                                        />
                                      )}
                                      <div className="text-xs">
                                        <p className="text-[10px] font-normal text-[#454444]">Written By</p>
                                        <p className="text-xs font-semibold text-[#454444]">
                                          {blog.author?.author_name}
                                        </p>
                                      </div>
                                    </div>
                                    <Link
                                      href={blogUrl}
                                      aria-label="Read full blog post"
                                      className="w-10 h-10 ring-1 ring-inset ring-[#454444] rounded-full flex items-center justify-center cursor-pointer after:absolute after:inset-0 z-0"
                                    >
                                      <Svg name="ArrowTopRight" className="size-4 text-[#454444]" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CarouselItem>
                        );
                      })}
                    </CarouselContent>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  } catch {
    // ignore errors and fallback to skeleton
  }
  return <BlogSectionSkeleton />;
}

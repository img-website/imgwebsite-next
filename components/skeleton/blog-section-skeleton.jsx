"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { Swiper, SwiperSlide } from "@/components/CustomSwiper";

export default function BlogSectionSkeleton() {
  return (
    <section className="blogSection w-full relative overflow-hidden bg-white">
      <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
        <div className="flex flex-col w-full">
          <h2 className="w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl md:font-bold font-semibold text-[#454444] text-balance relative z-10">
            <Skeleton className="h-8 w-1/2" />
          </h2>
          <div className="flex w-full flex-wrap md:pt-9 pt-4 group/blog">
            <div className="w-full sm:pt-9 pt-4 flex flex-wrap lg:gap-0 gap-4 -mx-2 items-stretch overflow-hidden pb-1">
              <Swiper
                className="w-full !px-2 flex swiper swiperBlog !py-2 !-my-2"
                slidesPerView={1.2}
                spaceBetween={16}
                loop={false}
                breakpoints={{
                  320: { slidesPerView: 1.2, spaceBetween: 16 },
                  480: { slidesPerView: 1.4, spaceBetween: 16 },
                  640: { slidesPerView: 2, spaceBetween: 16 },
                  1024: { slidesPerView: 3, spaceBetween: 16 },
                  1350: { slidesPerView: 4, spaceBetween: 16 },
                }}
              >
                {[...Array(4)].map((_, idx) => (
                  <SwiperSlide
                    key={idx}
                    className="swiper-slide w-1/2 flex flex-col items-stretch bg-white relative shadow-[0px_4px_4px_0px_#0000001F] rounded-xl overflow-hidden h-full"
                  >
                    <Skeleton className="w-full aspect-[66/37]" />
                    <div className="w-full grow flex flex-col">
                      <div className="flex flex-col items-center p-4 h-full space-y-2">
                        <div className="flex w-full items-center justify-between text-sm">
                          <Skeleton className="h-4 w-20" />
                          <Skeleton className="h-4 w-12" />
                        </div>
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <div className="grow" />
                        <Skeleton className="w-full h-px mt-4 mb-3" />
                        <div className="flex w-full items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Skeleton className="size-10 rounded-full" />
                            <div className="space-y-1">
                              <Skeleton className="h-2 w-20" />
                              <Skeleton className="h-3 w-24" />
                            </div>
                          </div>
                          <Skeleton className="w-10 h-10 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

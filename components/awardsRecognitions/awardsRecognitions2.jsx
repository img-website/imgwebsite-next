'use client';

import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const AwardsRecognitions2 = () => {
    return (
      <div className="relative isolate overflow-hidden select-nonee">
          <div className="w-full relative z-10">
              <div className="mx-auto grid items-center max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none">
                  <div className="w-full">
                      <Swiper className="swiper AwardsRecognitions *:!ease-linear *:!flex *:!items-stretch"
                        modules={[Autoplay]}
                        slidesPerView={2}
                        spaceBetween={10}
                        speed={5000}
                        autoplay={{
                          delay: 0,
                          disableOnInteraction: false,
                        }}
                        loop={true}
                        centeredSlides={true}
                        breakpoints={{
                          320: { slidesPerView: 2, spaceBetween: 20 },
                          480: { slidesPerView: 2, spaceBetween: 20 },
                          640: { slidesPerView: 2, spaceBetween: 30 },
                          1024: { slidesPerView: 3, spaceBetween: 30 },
                          1350: { slidesPerView: 4, spaceBetween: 30 },
                        }}
                      >
                              <SwiperSlide className="swiper-slide rounded-2xl overflow-hidden !h-auto">
                                  <a href="https://appfirmsreview.com/mobile-app-development-companies-india/" target="_blank" className="flex flex-col items-center text-center h-full">
                                      <div className="flex flex-col items-center text-center py-4 w-full rounded-2xl bg-gray-600/10 p-2 ring-1 ring-gray-600/15 grow">
                                          <div className="rounded-md bg-gray-600/10 p-2 ring-1 ring-gray-600/15 grow flex items-center">
                                              <Image
                                                  
                                                  className="w-20 aspect-[8/9]"
                                                  width="80"
                                                  height="90"
                                                  loading="lazy"
                                                  src="https://d1y41eupgbwbb2.cloudfront.net/images/appFirmsReview.webp"
                                                  alt="AppFirmsReview"
                                                  title="AppFirmsReview"
                                              />

                                          </div>
                                          <h3 className="mt-4 font-semibold text-sm md:text-base">Top Mobile App Development Companies in India</h3>
                                      </div>
                                  </a>
                              </SwiperSlide>
                              <SwiperSlide className="swiper-slide rounded-2xl overflow-hidden !h-auto">
                                  <div className="flex flex-col items-center text-center h-full">
                                      <div className="flex flex-col items-center text-center py-4 w-full rounded-2xl bg-gray-600/10 p-2 ring-1 ring-gray-600/15 grow">
                                          <div className="rounded-md bg-gray-600/10 p-2 ring-1 ring-gray-600/15 grow flex items-center">
                                              <Image
                                                  
                                                  className="w-20 aspect-[8/9]"
                                                  width="80"
                                                  height="90" 
                                                  loading="lazy"
                                                  src="https://d1y41eupgbwbb2.cloudfront.net/images/mid-market-1500-160w.webp"
                                                  alt="Mid-Market High Performer United States - 2022-2023"
                                                  title="Mid-Market High Performer United States - 2022-2023"
                                              />

                                          </div>
                                          <h3 className="mt-4 font-semibold text-sm md:text-base">Mid-Market High Performer United States - 2022-2023</h3>
                                      </div>
                                  </div>
                              </SwiperSlide>
                              <SwiperSlide className="swiper-slide rounded-2xl overflow-hidden !h-auto">
                                  <div className="flex flex-col items-center text-center h-full">
                                      <div className="flex flex-col items-center text-center py-4 w-full rounded-2xl bg-gray-600/10 p-2 ring-1 ring-gray-600/15 grow">
                                          <a href="https://clutch.co/profile/img-global-infotech?utm_source=clutch_top_company_badge&utm_medium=image_embed" className="rounded-md bg-gray-600/10 p-2 ring-1 ring-gray-600/15 grow flex items-center">
                                              <Image
                                                  className="w-20 aspect-[8/9]"
                                                  width="80"
                                                  height="90"
                                                  loading="lazy"
                                                  src="https://d1y41eupgbwbb2.cloudfront.net/images/top_clutch.webp"
                                                  alt="Top App Development Company in USA"
                                                  title="Top App Development Company in USA"
                                              />
                                          </a>
                                          <h3 className="mt-4 font-semibold text-sm md:text-base">Top Clutch E-commerce Developers Jaipur 2024</h3>
                                      </div>
                                  </div>
                              </SwiperSlide>
                              <SwiperSlide className="swiper-slide rounded-2xl overflow-hidden !h-auto">
                                  <div className="flex flex-col items-center text-center h-full">
                                      <div className="flex flex-col items-center text-center py-4 w-full rounded-2xl bg-gray-600/10 p-2 ring-1 ring-gray-600/15 grow">
                                          <div className="rounded-md bg-gray-600/10 p-2 ring-1 ring-gray-600/15 grow flex items-center">
                                              <Image
                                                  
                                                  className="w-20 aspect-[8/9]"
                                                  width="80"
                                                  height="90" 
                                                  loading="lazy"
                                                  src="https://d1y41eupgbwbb2.cloudfront.net/images/goodfirms-160w.webp"
                                                  alt="Top App Development Company in USA"
                                                  title="Top App Development Company in USA"
                                              />
                                          </div>
                                          <h3 className="mt-4 font-semibold text-sm md:text-base">Top App Development Company in USA</h3>
                                      </div>
                                  </div>
                              </SwiperSlide>
                              <SwiperSlide className="swiper-slide rounded-2xl overflow-hidden !h-auto">
                                  <div className="flex flex-col items-center text-center h-full">
                                      <div className="flex flex-col items-center text-center py-4 w-full rounded-2xl bg-gray-600/10 p-2 ring-1 ring-gray-600/15 grow">
                                          <div className="rounded-md bg-gray-600/10 p-2 ring-1 ring-gray-600/15 grow flex items-center">
                                              <Image
                                                  
                                                  className="w-20 aspect-[8/9]"
                                                  width="80"
                                                  height="90"
                                                  loading="lazy"
                                                  src="https://d1y41eupgbwbb2.cloudfront.net/images/topdevelopers-160w.webp"
                                                  alt="Top Software Developers - 2023"
                                                  title="Top Software Developers - 2023"
                                              />
                                          </div>
                                          <h3 className="mt-4 font-semibold text-sm md:text-base">Top Software Developers - 2023</h3>
                                      </div>
                                  </div>
                              </SwiperSlide>
                              <SwiperSlide className="swiper-slide rounded-2xl overflow-hidden !h-auto">
                                  <div className="flex flex-col items-center text-center h-full">
                                      <div className="flex flex-col items-center text-center py-4 w-full rounded-2xl bg-gray-600/10 p-2 ring-1 ring-gray-600/15 grow">
                                          <div className="rounded-md bg-gray-600/10 p-2 ring-1 ring-gray-600/15 grow flex items-center">
                                              <Image
                                                  
                                                  className="w-20 aspect-[8/9]"
                                                  width="80"
                                                  height="90" 
                                                  loading="lazy"
                                                  src="https://d1y41eupgbwbb2.cloudfront.net/images/designrush-160w.webp"
                                                  alt="Best Web Development DesignRush - 2023"
                                                  title="Best Web Development DesignRush - 2023"
                                              />
                                          </div>
                                          <h3 className="mt-4 font-semibold text-sm md:text-base">Best Web Development DesignRush - 2023</h3>
                                      </div>
                                  </div>
                              </SwiperSlide>
                              <SwiperSlide className="swiper-slide rounded-2xl overflow-hidden !h-auto">
                                  <div className="flex flex-col items-center text-center h-full">
                                      <div className="flex flex-col items-center text-center py-4 w-full rounded-2xl bg-gray-600/10 p-2 ring-1 ring-gray-600/15 grow">
                                          <div className="rounded-md bg-gray-600/10 p-2 ring-1 ring-gray-600/15 grow flex items-center">
                                              <Image
                                                  
                                                  className="w-20 aspect-[8/9]"
                                                  width="80"
                                                  height="90" 
                                                  loading="lazy"
                                                  src="https://d1y41eupgbwbb2.cloudfront.net/images/mid-market-1500-160w.webp"
                                                  alt="Mid-Market High Performer United States - 2022-2023"
                                                  title="Mid-Market High Performer United States - 2022-2023"
                                              />

                                          </div>
                                          <h3 className="mt-4 font-semibold text-sm md:text-base">Mid-Market High Performer United States - 2022-2023</h3>
                                      </div>
                                  </div>
                              </SwiperSlide>
                              <SwiperSlide className="swiper-slide rounded-2xl overflow-hidden !h-auto">
                                  <div className="flex flex-col items-center text-center h-full">
                                      <div className="flex flex-col items-center text-center py-4 w-full rounded-2xl bg-gray-600/10 p-2 ring-1 ring-gray-600/15 grow">
                                          <a href="https://clutch.co/profile/img-global-infotech?utm_source=clutch_top_company_badge&utm_medium=image_embed" className="rounded-md bg-gray-600/10 p-2 ring-1 ring-gray-600/15 grow flex items-center">
                                              <Image
                                                  className="w-20 aspect-[8/9]"
                                                  width="80"
                                                  height="90"
                                                  loading="lazy"
                                                  src="https://d1y41eupgbwbb2.cloudfront.net/images/top_clutch.webp"
                                                  alt="Top App Development Company in USA"
                                                  title="Top App Development Company in USA"
                                              />
                                          </a>
                                          <h3 className="mt-4 font-semibold text-sm md:text-base">Top Clutch E-commerce Developers Jaipur 2024</h3>
                                      </div>
                                  </div>
                              </SwiperSlide>
                              <SwiperSlide className="swiper-slide rounded-2xl overflow-hidden !h-auto">
                                  <div className="flex flex-col items-center text-center h-full">
                                      <div className="flex flex-col items-center text-center py-4 w-full rounded-2xl bg-gray-600/10 p-2 ring-1 ring-gray-600/15 grow">
                                          <div className="rounded-md bg-gray-600/10 p-2 ring-1 ring-gray-600/15 grow flex items-center">
                                              <Image
                                                  
                                                  className="w-20 aspect-[8/9]"
                                                  width="80"
                                                  height="90"
                                                  loading="lazy"
                                                  src="https://d1y41eupgbwbb2.cloudfront.net/images/goodfirms-160w.webp"
                                                  alt="Top App Development Company in USA"
                                                  title="Top App Development Company in USA"
                                              />
                                          </div>
                                          <h3 className="mt-4 font-semibold text-sm md:text-base">Top App Development Company in USA</h3>
                                      </div>
                                  </div>
                              </SwiperSlide>
                              <SwiperSlide className="swiper-slide rounded-2xl overflow-hidden !h-auto">
                                  <div className="flex flex-col items-center text-center h-full">
                                      <div className="flex flex-col items-center text-center py-4 w-full rounded-2xl bg-gray-600/10 p-2 ring-1 ring-gray-600/15 grow">
                                          <div className="rounded-md bg-gray-600/10 p-2 ring-1 ring-gray-600/15 grow flex items-center">
                                              <Image
                                                  
                                                  className="w-20 aspect-[8/9]"
                                                  width="80"
                                                  height="90"
                                                  loading="lazy"
                                                  src="https://d1y41eupgbwbb2.cloudfront.net/images/topdevelopers-160w.webp"
                                                  alt="Top Software Developers - 2023"
                                                  title="Top Software Developers - 2023"
                                              />
                                          </div>
                                          <h3 className="mt-4 font-semibold text-sm md:text-base">Top Software Developers - 2023</h3>
                                      </div>
                                  </div>
                              </SwiperSlide>
                              <SwiperSlide className="swiper-slide rounded-2xl overflow-hidden !h-auto">
                                  <div className="flex flex-col items-center text-center h-full">
                                      <div className="flex flex-col items-center text-center py-4 w-full rounded-2xl bg-gray-600/10 p-2 ring-1 ring-gray-600/15 grow">
                                          <div className="rounded-md bg-gray-600/10 p-2 ring-1 ring-gray-600/15 grow flex items-center">
                                              <Image
                                                  
                                                  className="w-20 aspect-[8/9]"
                                                  width="80"
                                                  height="90"
                                                  loading="lazy"
                                                  src="https://d1y41eupgbwbb2.cloudfront.net/images/designrush-160w.webp"
                                                  alt="Best Web Development DesignRush - 2023"
                                                  title="Best Web Development DesignRush - 2023"
                                              />
                                          </div>
                                          <h3 className="mt-4 font-semibold text-sm md:text-base">Best Web Development DesignRush - 2023</h3>
                                      </div>
                                  </div>
                              </SwiperSlide>
                      </Swiper>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default AwardsRecognitions2
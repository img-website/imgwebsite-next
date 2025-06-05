"use client"


import Image from "next/image"
import Svg from "@/components/svg"

import { Swiper, SwiperSlide, Autoplay } from '@/components/CustomSwiper';

const Portfolio1= () => {
    return (
      <section className="portfolioSection w-full relative overflow-hidden bg-white">
          <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/portfolioBg.webp" alt="Portfolio Background" width="1340" height="523" sizes="100vw" className="absolute inset-0 pt-8 size-full z-0 pointer-events-none max-md:hidden"/>
          <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8 z-10 relative">
              <div className="flex flex-col w-full">
                  <div className="flex flex-wrap justify-between relative">
                      <div className="lg:w-4/12 md:w-6/12 w-full">
                          <div className="md:w-10/12 w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl md:font-bold font-semibold text-[#454444] text-balance relative z-10 max-md:text-center">Here is what it takes to <span className="text-[#2D86FF]">seal</span> the <span className="text-[#FF6B39]">deal</span></div>
                          <div className="md:w-10/12 w-full md:text-sm text-xs font-normal text-[#454444] line-clamp-3 md:pt-4 pt-3 text-pretty max-md:text-center">Explore some of the masterpieces delivered, depicting IMG Global Infotech's industry expertise.</div>
                          <div className="md:w-9/12 w-full lg:text-xl md:text-lg sm:text-base text-sm font-medium text-[#454444] md:py-6 pt-3 text-balance max-md:text-center max-md:pb-6">Our team has worked over <span className="text-[#FF6B39]">12k+</span> projects. Here are some samples</div>
                          <div className="w-full max-md:hidden">
                              <label htmlFor="leadPopup" className="cursor-pointer xl:text-base sm:text-sm text-xs md:font-semibold font-medium text-white inline-flex items-center xl:py-3 sm:py-2.5 py-2 xl:ps-6 sm:ps-4 ps-3 xl:pe-3 sm:pe-2.5 pe-1.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#4E94FF] to-[#216CFF] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#216CFF] group/btn">
                                  <span>Have a Look on our Portfolio</span>
                                  <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#4B92FF] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                      <Svg name="arrowCall" className="size-3 relative z-10 text-[#4B92FF]" />
                                  </div>
                              </label>
                          </div>
                      </div>
                      
                      <Swiper className="md:!w-6/12 !w-full !mx-0 swiper"
                        modules={[Autoplay]}
                        slidesPerView={1}
                        spaceBetween={32}
                        speed={100}
                        loop={true}
                        autoplay={{
                          delay: 5000,
                          disableOnInteraction: false,
                        }}
                        keyboard={{
                          enabled: true,
                        }}
                      >
                              <SwiperSlide className="swiper-slide [&.swiper-slide-active]:!opacity-100 !opacity-0 group/p w-full rounded-3xl !flex flex-col relative">
                                  <h3 className="md:w-10/12 w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl font-semibold text-[#454444] text-balance relative z-10 max-md:text-center group-[.swiper-slide-active]/p:translate-y-0 -translate-y-10 group-[.swiper-slide-active]/p:opacity-100 opacity-0 duration-500">Freshee</h3>
                                  <div className="w-auto xl:text-xl lg:text-lg md:text-base text-sm uppercase font-normal text-[#615454] text-balance z-10 text-center tracking-wider md:absolute md:[writing-mode:sideways-lr] md:bottom-0 max-md:pt-2 group-[.swiper-slide-active]/p:translate-x-0 -translate-x-10 group-[.swiper-slide-active]/p:opacity-100 opacity-0 duration-500">Online Grocery Delivery App</div>
                                  <div className="w-full flex justify-center lg:pt-8 md:pt-4 pt-9">
                                      <div className="lg:max-w-[350px] md:max-w-[250px] w-full aspect-square relative">
                                          <Svg name="polygon1" className="size-full object-contain max-md:m-auto absolute inset-0 z-0 max-md:scale-90 group-[.swiper-slide-active]/p:rotate-0 rotate-45 group-[.swiper-slide-active]/p:opacity-100 opacity-0 duration-500 text-[#EC6C6C]" />
                                          <Image loading="lazy" width={385} height={385} sizes="(max-width: 768px) 100vw, 350px" src="https://d1y41eupgbwbb2.cloudfront.net/images/portfolioFreshee.webp" alt="Moda Market" className="size-full object-contain object-center relative z-10 -mt-[8%] -ml-[8%] group-[.swiper-slide-active]/p:scale-110 scale-0 group-[.swiper-slide-active]/p:opacity-100 opacity-0 duration-500"/>
                                      </div>
                                  </div>
                                  <div className="w-full md:hidden pt-8 text-center">
                                      <label htmlFor="leadPopup" className="cursor-pointer xl:text-base sm:text-sm text-xs md:font-semibold font-medium text-white inline-flex items-center xl:py-3 sm:py-2.5 py-2 xl:ps-6 sm:ps-4 ps-3 xl:pe-3 sm:pe-2.5 pe-1.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#EC6C6C] to-[#933333] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#933333] group/btn">
                                          <span>Have a Look on our Portfolio</span>
                                          <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#EC6C6C] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                              <Svg name="arrowCall" className="size-3 relative z-10 text-[#4B92FF]" />
                                          </div>
                                      </label>
                                  </div>
                              </SwiperSlide>
                              <SwiperSlide className="swiper-slide [&.swiper-slide-active]:!opacity-100 !opacity-0 group/p w-full rounded-3xl !flex flex-col relative">
                                  <h3 className="md:w-10/12 w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl font-semibold text-[#454444] text-balance relative z-10 max-md:text-center group-[.swiper-slide-active]/p:translate-y-0 -translate-y-10 group-[.swiper-slide-active]/p:opacity-100 opacity-0 duration-500">Fabindia</h3>
                                  <div className="w-auto xl:text-xl lg:text-lg md:text-base text-sm uppercase font-normal text-[#615454] text-balance z-10 text-center tracking-wider md:absolute md:[writing-mode:sideways-lr] md:bottom-0 max-md:pt-2 group-[.swiper-slide-active]/p:translate-x-0 -translate-x-10 group-[.swiper-slide-active]/p:opacity-100 opacity-0 duration-500">Fashion Ecommerce App</div>
                                  <div className="w-full flex justify-center lg:pt-8 md:pt-4 pt-9">
                                      <div className="lg:max-w-[350px] md:max-w-[250px] w-full aspect-square relative">
                                          <Svg name="polygon1" className="size-full object-contain max-md:m-auto absolute inset-0 z-0 max-md:scale-90 group-[.swiper-slide-active]/p:rotate-0 rotate-45 group-[.swiper-slide-active]/p:opacity-100 opacity-0 duration-500 text-[#E5CC76]" />
                                          <Image loading="lazy" width={385} height={385} sizes="(max-width: 768px) 100vw, 350px" src="https://d1y41eupgbwbb2.cloudfront.net/images/portfolioFebIndia.webp" alt="Moda Market" className="size-full object-contain object-center relative z-10 -mt-[8%] -ml-[8%] group-[.swiper-slide-active]/p:scale-110 scale-0 group-[.swiper-slide-active]/p:opacity-100 opacity-0 duration-500"/>
                                      </div>
                                  </div>
                                  <div className="w-full md:hidden pt-8 text-center">
                                      <label htmlFor="leadPopup" className="cursor-pointer xl:text-base sm:text-sm text-xs md:font-semibold font-medium text-white inline-flex items-center xl:py-3 sm:py-2.5 py-2 xl:ps-6 sm:ps-4 ps-3 xl:pe-3 sm:pe-2.5 pe-1.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#E5CC76] to-[#78662a] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#78662a] group/btn">
                                          <span>Have a Look on our Portfolio</span>
                                          <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#E5CC76] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                              <Svg name="arrowCall" className="size-3 relative z-10 text-[#4B92FF]" />
                                          </div>
                                      </label>
                                  </div>
                              </SwiperSlide>
                              <SwiperSlide className="swiper-slide [&.swiper-slide-active]:!opacity-100 !opacity-0 group/p w-full rounded-3xl !flex flex-col relative">
                                  <h3 className="md:w-10/12 w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl font-semibold text-[#454444] text-balance relative z-10 max-md:text-center group-[.swiper-slide-active]/p:translate-y-0 -translate-y-10 group-[.swiper-slide-active]/p:opacity-100 opacity-0 duration-500">Edoovi</h3>
                                  <div className="w-auto xl:text-xl lg:text-lg md:text-base text-sm uppercase font-normal text-[#615454] text-balance z-10 text-center tracking-wider md:absolute md:[writing-mode:sideways-lr] md:bottom-0 max-md:pt-2 group-[.swiper-slide-active]/p:translate-x-0 -translate-x-10 group-[.swiper-slide-active]/p:opacity-100 opacity-0 duration-500">School Listing Portal</div>
                                  <div className="w-full flex justify-center lg:pt-8 md:pt-4 pt-9">
                                      <div className="lg:max-w-[350px] md:max-w-[250px] w-full aspect-square relative">
                                          <Svg name="polygon1" className="size-full object-contain max-md:m-auto absolute inset-0 z-0 max-md:scale-90 group-[.swiper-slide-active]/p:rotate-0 rotate-45 group-[.swiper-slide-active]/p:opacity-100 opacity-0 duration-500 text-[#7AD7F4]" />
                                          <Image loading="lazy" width={385} height={385} sizes="(max-width: 768px) 100vw, 350px" src="https://d1y41eupgbwbb2.cloudfront.net/images/portfolioEdoovi.webp" alt="Moda Market" className="size-full object-contain object-center relative z-10 -mt-[8%] -ml-[8%] group-[.swiper-slide-active]/p:scale-110 scale-0 group-[.swiper-slide-active]/p:opacity-100 opacity-0 duration-500"/>
                                      </div>
                                  </div>
                                  <div className="w-full md:hidden pt-8 text-center">
                                      <label htmlFor="leadPopup" className="cursor-pointer xl:text-base sm:text-sm text-xs md:font-semibold font-medium text-white inline-flex items-center xl:py-3 sm:py-2.5 py-2 xl:ps-6 sm:ps-4 ps-3 xl:pe-3 sm:pe-2.5 pe-1.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#7AD7F4] to-[#347082] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#347082] group/btn">
                                          <span>Have a Look on our Portfolio</span>
                                          <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#7AD7F4] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                              <Svg name="arrowCall" className="size-3 relative z-10 text-[#4B92FF]" />
                                          </div>
                                      </label>
                                  </div>
                              </SwiperSlide>
                              <SwiperSlide className="swiper-slide [&.swiper-slide-active]:!opacity-100 !opacity-0 group/p w-full rounded-3xl !flex flex-col relative">
                                  <h3 className="md:w-10/12 w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl font-semibold text-[#454444] text-balance relative z-10 max-md:text-center group-[.swiper-slide-active]/p:translate-y-0 -translate-y-10 group-[.swiper-slide-active]/p:opacity-100 opacity-0 duration-500">Taximo</h3>
                                  <div className="w-auto xl:text-xl lg:text-lg md:text-base text-sm uppercase font-normal text-[#615454] text-balance z-10 text-center tracking-wider md:absolute md:[writing-mode:sideways-lr] md:bottom-0 max-md:pt-2 group-[.swiper-slide-active]/p:translate-x-0 -translate-x-10 group-[.swiper-slide-active]/p:opacity-100 opacity-0 duration-500">Taxi Booking App</div>
                                  <div className="w-full flex justify-center lg:pt-8 md:pt-4 pt-9">
                                      <div className="lg:max-w-[350px] md:max-w-[250px] w-full aspect-square relative">
                                          <Svg name="polygon1" className="size-full object-contain max-md:m-auto absolute inset-0 z-0 max-md:scale-90 group-[.swiper-slide-active]/p:rotate-0 rotate-45 group-[.swiper-slide-active]/p:opacity-100 opacity-0 duration-500 text-[#FAC216]" />
                                          <Image loading="lazy" width={385} height={385} sizes="(max-width: 768px) 100vw, 350px" src="https://d1y41eupgbwbb2.cloudfront.net/images/portfolioTaximo.webp" alt="Moda Market" className="size-full object-contain object-center relative z-10 -mt-[8%] -ml-[8%] group-[.swiper-slide-active]/p:scale-110 scale-0 group-[.swiper-slide-active]/p:opacity-100 opacity-0 duration-500"/>
                                      </div>
                                  </div>
                                  <div className="w-full md:hidden pt-8 text-center">
                                      <label htmlFor="leadPopup" className="cursor-pointer xl:text-base sm:text-sm text-xs md:font-semibold font-medium text-white inline-flex items-center xl:py-3 sm:py-2.5 py-2 xl:ps-6 sm:ps-4 ps-3 xl:pe-3 sm:pe-2.5 pe-1.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#FAC216] to-[#ffb22d] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#ffb22d] group/btn">
                                          <span>Have a Look on our Portfolio</span>
                                          <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#FAC216] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                              <Svg name="arrowCall" className="size-3 relative z-10 text-[#4B92FF]" />
                                          </div>
                                      </label>
                                  </div>
                              </SwiperSlide>
                              <SwiperSlide className="swiper-slide [&.swiper-slide-active]:!opacity-100 !opacity-0 group/p w-full rounded-3xl !flex flex-col relative">
                                  <h3 className="md:w-10/12 w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl font-semibold text-[#454444] text-balance relative z-10 max-md:text-center group-[.swiper-slide-active]/p:translate-y-0 -translate-y-10 group-[.swiper-slide-active]/p:opacity-100 opacity-0 duration-500">Flexo</h3>
                                  <div className="w-auto xl:text-xl lg:text-lg md:text-base text-sm uppercase font-normal text-[#615454] text-balance z-10 text-center tracking-wider md:absolute md:[writing-mode:sideways-lr] md:bottom-0 max-md:pt-2 group-[.swiper-slide-active]/p:translate-x-0 -translate-x-10 group-[.swiper-slide-active]/p:opacity-100 opacity-0 duration-500">Property Listing/Rental Website</div>
                                  <div className="w-full flex justify-center lg:pt-8 md:pt-4 pt-9">
                                      <div className="lg:max-w-[350px] md:max-w-[250px] w-full aspect-square relative">
                                          <Svg name="polygon1" className="size-full object-contain max-md:m-auto absolute inset-0 z-0 max-md:scale-90 group-[.swiper-slide-active]/p:rotate-0 rotate-45 group-[.swiper-slide-active]/p:opacity-100 opacity-0 duration-500 text-[#F76900]" />
                                          <Image loading="lazy" width={385} height={385} sizes="(max-width: 768px) 100vw, 350px" src="https://d1y41eupgbwbb2.cloudfront.net/images/portfolioFlexo.webp" alt="Moda Market" className="size-full object-contain object-center relative z-10 -mt-[8%] -ml-[8%] group-[.swiper-slide-active]/p:scale-110 scale-0 group-[.swiper-slide-active]/p:opacity-100 opacity-0 duration-500"/>
                                      </div>
                                  </div>
                                  <div className="w-full md:hidden pt-8 text-center">
                                      <label htmlFor="leadPopup" className="cursor-pointer xl:text-base sm:text-sm text-xs md:font-semibold font-medium text-white inline-flex items-center xl:py-3 sm:py-2.5 py-2 xl:ps-6 sm:ps-4 ps-3 xl:pe-3 sm:pe-2.5 pe-1.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#f79000] to-[#F76900] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#F76900] group/btn">
                                          <span>Have a Look on our Portfolio</span>
                                          <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#f79000] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                              <Svg name="arrowCall" className="size-3 relative z-10 text-[#4B92FF]" />
                                          </div>
                                      </label>
                                  </div>
                              </SwiperSlide>
                              <SwiperSlide className="swiper-slide [&.swiper-slide-active]:!opacity-100 !opacity-0 group/p w-full rounded-3xl !flex flex-col relative">
                                  <h3 className="md:w-10/12 w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl font-semibold text-[#454444] text-balance relative z-10 max-md:text-center group-[.swiper-slide-active]/p:translate-y-0 -translate-y-10 group-[.swiper-slide-active]/p:opacity-100 opacity-0 duration-500">Propira</h3>
                                  <div className="w-auto xl:text-xl lg:text-lg md:text-base text-sm uppercase font-normal text-[#615454] text-balance z-10 text-center tracking-wider md:absolute md:[writing-mode:sideways-lr] md:bottom-0 max-md:pt-2 group-[.swiper-slide-active]/p:translate-x-0 -translate-x-10 group-[.swiper-slide-active]/p:opacity-100 opacity-0 duration-500">Property Listing/Rental Website</div>
                                  <div className="w-full flex justify-center lg:pt-8 md:pt-4 pt-9">
                                      <div className="lg:max-w-[350px] md:max-w-[250px] w-full aspect-square relative">
                                          <Svg name="polygon1" className="size-full object-contain max-md:m-auto absolute inset-0 z-0 max-md:scale-90 group-[.swiper-slide-active]/p:rotate-0 rotate-45 group-[.swiper-slide-active]/p:opacity-100 opacity-0 duration-500 text-[#DA0C0C]" />
                                          <Image loading="lazy" width={385} height={385} sizes="(max-width: 768px) 100vw, 350px" src="https://d1y41eupgbwbb2.cloudfront.net/images/portfolioPropira.webp" alt="Moda Market" className="size-full object-contain object-center relative z-10 -mt-[8%] -ml-[8%] group-[.swiper-slide-active]/p:scale-110 scale-0 group-[.swiper-slide-active]/p:opacity-100 opacity-0 duration-500"/>
                                      </div>
                                  </div>
                                  <div className="w-full md:hidden pt-8 text-center">
                                      <label htmlFor="leadPopup" className="cursor-pointer xl:text-base sm:text-sm text-xs md:font-semibold font-medium text-white inline-flex items-center xl:py-3 sm:py-2.5 py-2 xl:ps-6 sm:ps-4 ps-3 xl:pe-3 sm:pe-2.5 pe-1.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#da430c] to-[#DA0C0C] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#DA0C0C] group/btn">
                                          <span>Have a Look on our Portfolio</span>
                                          <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#da430c] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                              <Svg name="arrowCall" className="size-3 relative z-10 text-[#4B92FF]" />
                                          </div>
                                      </label>
                                  </div>
                              </SwiperSlide>
                      </Swiper>
                  </div>
              </div>
          </div>
      </section>
    )
}

export default Portfolio1
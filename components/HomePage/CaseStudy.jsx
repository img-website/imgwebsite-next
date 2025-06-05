"use client"

import Image from "next/image"
import Svg from "@/components/svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const CaseStudy = () => {
    return (
      <section className="caseStudySection w-full relative overflow-hidden bg-[#2D86FF]">
          <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
              <div className="flex flex-col w-full">
                  <h2 className="w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl md:font-bold font-semibold text-white text-balance relative z-10 md:text-center md:pb-4 pb-2">We Build Apps That Make a Difference</h2>
                  <div className="w-full xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs md:font-medium font-normal text-white text-balance relative z-10 md:text-center md:pb-12 pb-5">Here is how we have created a success story for brands dreaming big and something exceptional.</div>
                  
                  <Swiper className="w-full swiper rounded-3xl"
                      modules={[Autoplay, Navigation, Keyboard]}
                      slidesPerView={1}
                      spaceBetween={32}
                      speed={1000}
                      loop={true}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      keyboard={{
                        enabled: true,
                      }}
                      navigation={{
                        nextEl: '.next',
                        prevEl: '.prev',
                      }}
                      > 
                      <div className="flex md:justify-center justify-end absolute inset-x-0 bottom-0 z-10">
                          <div className="inline-flex items-center justify-center md:gap-8 gap-6 relative bg-[#2D86FF] md:rounded-t-3xl rounded-tl-3xl p-2">
                              <Svg name="clipLeftBottom" className="size-6 absolute bottom-0 left-0 -translate-x-full z-10 text-[#2D86FF]" />
                              <Svg name="clipRightBottom" className="size-6 absolute md:bottom-0 max-md:top-0 right-0 md:translate-x-full max-md:-translate-y-full z-10 max-md:-rotate-90 text-[#2D86FF]" />
                              <div className="prev rounded-full size-10 bg-gradient-to-b from-white to-[#666666] p-px inline-flex items-center justify-center relative hover:lg:before:inset-1 before:duration-300 shadow-[0px_4px_4px_0px_#0000001F] before:absolute before:inset-0.5 before:m-auto before:bg-[#1D1D1D] before:rounded-full before:z-0">
                                  <Svg name="arrowPrev" className="size-6 relative z-10 text-white" />
                              </div>
                              <div className="next rounded-full size-10 bg-gradient-to-b from-white to-[#666666] p-px inline-flex items-center justify-center relative hover:lg:before:inset-1 before:duration-300 shadow-[0px_4px_4px_0px_#0000001F] before:absolute before:inset-0.5 before:m-auto before:bg-[#1D1D1D] before:rounded-full before:z-0">
                                  <Svg name="arrowNext" className="size-6 relative z-10 text-white" />
                              </div>
                          </div>
                      </div>   
                          <SwiperSlide className="swiper-slide !flex flex-wrap justify-between items-stretch bg-white rounded-3xl xl:p-12 md:p-8 py-6 px-4 gap-y-6">
                              <div className="md:w-7/12 w-full">
                                  <div className="w-full flex items-center xl:gap-8 md:gap-4 gap-2">
                                      <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/blinkitLogo.webp" width="56" height="56" className="w-auto md:h-14 h-12" alt="Blinkit Logo" title="Blinkit Logo" />
                                      <h3 className="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg text-base font-bold text-[#FFAE00]">Blinkit</h3>
                                  </div>
                                  <div className="w-full xl:text-sm lg:text-xs md:text-sm text-xs font-normal text-[#454444] xl:pt-4 pt-2 xl:pb-6 pb-4">Blinkit (formerly Grofers) is redefining grocery delivery with superfast doorstep service across India. Whether it's fresh fruits and vegetables, dairy products, personal care, or munchies, everything arrives within minutes. Perfect for your last-minute needs, Blinkit ensures you never have to step out. Convenience, speed, and variety—all in the blink of an eye!</div>
                                  <div className="flex items-center lg:gap-14 md:gap-10 gap-2">
                                      <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                          <div className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-[#454444]">5Cr+</div>
                                          <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-[#454444]">Downloads</div>
                                      </div>
                                      <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                          <div className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-[#454444]">4.5/5</div>
                                          <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-[#454444]">Rating</div>
                                      </div>
                                      <div className="w-auto inlne-flex flex-col gap-0.5 max-md:ml-auto">
                                          <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-[#454444]/70">Industry</div>
                                          <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-bold text-[#454444]">Online Grocery & <br /> Essentials Delivery</div>
                                      </div>
                                  </div>
                                  <div className="flex items-center lg:gap-3 gap-2 md:pt-6 pt-3">
                                      <div className="w-auto inlne-flex flex-col gap-0.5 text-center xl:text-sm lg:text-xs md:text-sm text-xs md:font-medium font-semibold text-[#454444]">Available on</div>
                                      <div className="w-auto inlne-flex flex-col gap-0.5 text-center cursor-pointer">
                                          <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/playStoreBtnWhite.webp" className="w-auto xl:h-10 h-8 aspect-[120/40]" width="120" height="40" alt="PlayStore" title="PlayStore"/>
                                      </div>
                                      <div className="w-auto inlne-flex flex-col gap-0.5 text-center cursor-pointer">
                                          <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/appStoreBtnWhite.webp" className="w-auto xl:h-10 h-8 aspect-[120/40]" width="120" height="40" alt="AppStore" title="AppStore"/>
                                      </div>
                                  </div>
                                  <div className="w-full md:pt-8 pt-6">
                                      <label htmlFor="leadPopup" className="cursor-pointer xl:text-base sm:text-sm text-xs md:font-semibold font-medium text-white inline-flex items-center xl:py-3 sm:py-2.5 py-2 xl:ps-6 sm:ps-4 ps-3 xl:pe-3 sm:pe-2.5 pe-1.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#FFAE00] to-[#b47b00] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#b47b00] group/btn">
                                          <span>View Case Study</span>
                                          <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#FFAE00] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                              <Svg name="arrowCall" className="size-3 relative z-10 text-[#b47b00]" />
                                          </div>
                                      </label>
                                  </div>
                              </div>
                              <div className="md:w-4/12 w-full max-md:order-first rounded-3xl aspect-square flex items-center justify-center bg-gradient-to-br from-[#b47b00] to-[#FFAE00] p-6">
                                  <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/caseStudyBlinkit.webp" alt="Blinkit" title="Blinkit" width="375" height="375" sizes="(max-width: 768px) 100vw, 33vw" className="size-full object-contain object-center"/>
                              </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide !flex flex-wrap justify-between items-stretch bg-white rounded-3xl xl:p-12 md:p-8 py-6 px-4 gap-y-6">
                              <div className="md:w-7/12 w-full">
                                  <div className="w-full flex items-center xl:gap-8 md:gap-4 gap-2">
                                      <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/astroLogo.webp" width="56" height="56" className="w-auto md:h-14 h-12" alt="Astrotalk Logo" title="Astrotalk Logo"/>
                                      <h3 className="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg text-base font-bold text-[#F07000]">Astrotalk</h3>
                                  </div>
                                  <div className="w-full xl:text-sm lg:text-xs md:text-sm text-xs font-normal text-[#454444] xl:pt-4 pt-2 xl:pb-6 pb-4">Astrotalk is a dominant online astrology platform that connects users to verified astrologers worldwide. This case study will delve into Astrotalk’s business model, growth models, and the competitive online astrology industry context.</div>
                                  <div className="flex items-center lg:gap-14 md:gap-10 gap-2">
                                      <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                          <div className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-[#454444]">5Cr+</div>
                                          <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-[#454444]">Downloads</div>
                                      </div>
                                      <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                          <div className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-[#454444]">4.5/5</div>
                                          <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-[#454444]">Rating</div>
                                      </div>
                                      <div className="w-auto inlne-flex flex-col gap-0.5 max-md:ml-auto">
                                          <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-[#454444]/70">Industry</div>
                                          <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-bold text-[#454444]">Astrology &  <br/> Spiritual Services</div>
                                      </div>
                                  </div>
                                  <div className="flex items-center lg:gap-3 gap-2 md:pt-6 pt-3">
                                      <div className="w-auto inlne-flex flex-col gap-0.5 text-center xl:text-sm lg:text-xs md:text-sm text-xs md:font-medium font-semibold text-[#454444]">Available on</div>
                                      <div className="w-auto inlne-flex flex-col gap-0.5 text-center cursor-pointer">
                                          <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/playStoreBtnWhite.webp" className="w-auto xl:h-10 h-8 aspect-[120/40]" width="120" height="40" alt="PlayStore" title="PlayStore"/>
                                      </div>
                                      <div className="w-auto inlne-flex flex-col gap-0.5 text-center cursor-pointer">
                                          <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/appStoreBtnWhite.webp" className="w-auto xl:h-10 h-8 aspect-[120/40]" width="120" height="40" alt="AppStore" title="AppStore"/>
                                      </div>
                                  </div>
                                  <div className="w-full md:pt-8 pt-6">
                                      <label htmlFor="leadPopup" className="cursor-pointer xl:text-base sm:text-sm text-xs md:font-semibold font-medium text-white inline-flex items-center xl:py-3 sm:py-2.5 py-2 xl:ps-6 sm:ps-4 ps-3 xl:pe-3 sm:pe-2.5 pe-1.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#FFC422] to-[#F07000] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#F07000] group/btn">
                                          <span>View Case Study</span>
                                          <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#FFC422] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                              <Svg name="arrowCall" className="size-3 relative z-10 text-[#F07000]" />
                                          </div>
                                      </label>
                                  </div>
                              </div>
                              <div className="md:w-4/12 w-full max-md:order-first rounded-3xl aspect-square flex items-center justify-center bg-gradient-to-br from-[#FFC422] to-[#F07000] p-6">
                                  <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/caseStudyAstro.webp" alt="Astrotalk" title="Astrotalk" width="375" height="375" sizes="(max-width: 768px) 100vw, 33vw" className="size-full object-contain object-center"/>
                              </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide !flex flex-wrap justify-between items-stretch bg-white rounded-3xl xl:p-12 md:p-8 py-6 px-4 gap-y-6">
                              <div className="md:w-7/12 w-full">
                                  <div className="w-full flex items-center xl:gap-8 md:gap-4 gap-2">
                                      <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/zillowLogo.webp" width="56" height="56" className="w-auto md:h-14 h-12" alt="Zillow Logo" title="Zillow Logo"/>
                                      <h3 className="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg text-base font-bold text-[#063CDE]">Zillow</h3>
                                  </div>
                                  <div className="w-full xl:text-sm lg:text-xs md:text-sm text-xs font-normal text-[#454444] xl:pt-4 pt-2 xl:pb-6 pb-4">Zillow is the best online real estate marketplace. It makes buying, selling, renting, or financing a house easy. This investigation assesses the disruptive innovations that Zillow has leveraged to attain great success and their effects on the real estate marketplace's business environment.</div>
                                  <div className="flex items-center lg:gap-14 md:gap-10 gap-2">
                                      <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                          <div className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-[#454444]">5Cr+</div>
                                          <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-[#454444]">Downloads</div>
                                      </div>
                                      <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                          <div className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-[#454444]">4.7/5</div>
                                          <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-[#454444]">Rating</div>
                                      </div>
                                      <div className="w-auto inlne-flex flex-col gap-0.5 max-md:ml-auto">
                                          <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-[#454444]/70">Industry</div>
                                          <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-bold text-[#454444]">Online Real <br/> Estate Marketplace</div>
                                      </div>
                                  </div>
                                  <div className="flex items-center lg:gap-3 gap-2 md:pt-6 pt-3">
                                      <div className="w-auto inlne-flex flex-col gap-0.5 text-center xl:text-sm lg:text-xs md:text-sm text-xs md:font-medium font-semibold text-[#454444]">Available on</div>
                                      <div className="w-auto inlne-flex flex-col gap-0.5 text-center cursor-pointer">
                                          <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/playStoreBtnWhite.webp" className="w-auto xl:h-10 h-8 aspect-[120/40]" width="120" height="40" alt="PlayStore" title="PlayStore"/>
                                      </div>
                                      <div className="w-auto inlne-flex flex-col gap-0.5 text-center cursor-pointer">
                                          <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/appStoreBtnWhite.webp" className="w-auto xl:h-10 h-8 aspect-[120/40]" width="120" height="40" alt="AppStore" title="AppStore"/>
                                      </div>
                                  </div>
                                  <div className="w-full md:pt-8 pt-6">
                                      <label htmlFor="leadPopup" className="cursor-pointer xl:text-base sm:text-sm text-xs md:font-semibold font-medium text-white inline-flex items-center xl:py-3 sm:py-2.5 py-2 xl:ps-6 sm:ps-4 ps-3 xl:pe-3 sm:pe-2.5 pe-1.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#4070FF] to-[#063CDE] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#063CDE] group/btn">
                                          <span>View Case Study</span>
                                          <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#4070FF] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                              <Svg name="arrowCall" className="size-3 relative z-10 text-[#063CDE]" />
                                          </div>
                                      </label>
                                  </div>
                              </div>
                              <div className="md:w-4/12 w-full max-md:order-first rounded-3xl aspect-square flex items-center justify-center bg-gradient-to-br from-[#4070FF] to-[#063CDE] p-6">
                                  <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/caseStudyzillow.webp" alt="Zillow" title="Zillow" width="375" height="375" sizes="(max-width: 768px) 100vw, 33vw" className="size-full object-contain object-center"/>
                              </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide !flex flex-wrap justify-between items-stretch bg-white rounded-3xl xl:p-12 md:p-8 py-6 px-4 gap-y-6">
                              <div className="md:w-7/12 w-full">
                                  <div className="w-full flex items-center xl:gap-8 md:gap-4 gap-2">
                                      <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/uberLogo.webp" width="56" height="56" className="w-auto md:h-14 h-12" alt="Uber Logo" title="Uber Logo"/>
                                      <h3 className="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg text-base font-bold text-[#040404]">Uber</h3>
                                  </div>
                                  <div className="w-full xl:text-sm lg:text-xs md:text-sm text-xs font-normal text-[#454444] xl:pt-4 pt-2 xl:pb-6 pb-4">Uber is one of the world’s leading on-demand taxi booking platforms that allows users to book rides in real-time through their smartphones. If you want to build a similar app like Uber, IMG Global Infotech is your ideal development partner. We help startups and taxi businesses build scalable, feature-rich Uber-like apps tailored to local markets and customer needs.</div>
                                  <div className="flex items-center lg:gap-14 md:gap-10 gap-2">
                                      <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                          <div className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-[#454444]">50Cr+</div>
                                          <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-[#454444]">Downloads</div>
                                      </div>
                                      <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                          <div className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-[#454444]">4.4/5</div>
                                          <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-[#454444]">Rating</div>
                                      </div>
                                      <div className="w-auto inlne-flex flex-col gap-0.5 max-md:ml-auto">
                                          <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-[#454444]/70">Industry</div>
                                          <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-bold text-[#454444]">Transportation & <br/> Technology</div>
                                      </div>
                                  </div>
                                  <div className="flex items-center lg:gap-3 gap-2 md:pt-6 pt-3">
                                      <div className="w-auto inlne-flex flex-col gap-0.5 text-center xl:text-sm lg:text-xs md:text-sm text-xs md:font-medium font-semibold text-[#454444]">Available on</div>
                                      <div className="w-auto inlne-flex flex-col gap-0.5 text-center cursor-pointer">
                                          <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/playStoreBtnWhite.webp" className="w-auto xl:h-10 h-8 aspect-[120/40]" width="120" height="40" alt="PlayStore" title="PlayStore"/>
                                      </div>
                                      <div className="w-auto inlne-flex flex-col gap-0.5 text-center cursor-pointer">
                                          <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/appStoreBtnWhite.webp" className="w-auto xl:h-10 h-8 aspect-[120/40]" width="120" height="40" alt="AppStore" title="AppStore"/>
                                      </div>
                                  </div>
                                  <div className="w-full md:pt-8 pt-6">
                                      <label htmlFor="leadPopup" className="cursor-pointer xl:text-base sm:text-sm text-xs md:font-semibold font-medium text-white inline-flex items-center xl:py-3 sm:py-2.5 py-2 xl:ps-6 sm:ps-4 ps-3 xl:pe-3 sm:pe-2.5 pe-1.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#818181] to-[#040404] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#040404] group/btn">
                                          <span>View Case Study</span>
                                          <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#818181] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                              <Svg name="arrowCall" className="size-3 relative z-10 text-[#040404]" />
                                          </div>
                                      </label>
                                  </div>
                              </div>
                              <div className="md:w-4/12 w-full max-md:order-first rounded-3xl aspect-square flex items-center justify-center bg-gradient-to-br from-[#818181] to-[#040404] p-6">
                                  <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/caseStudyUber.webp" alt="Uber" title="Uber" width="375" height="375" sizes="(max-width: 768px) 100vw, 33vw" className="size-full object-contain object-center"/>
                              </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide !flex flex-wrap justify-between items-stretch bg-white rounded-3xl xl:p-12 md:p-8 py-6 px-4 gap-y-6">
                              <div className="md:w-7/12 w-full">
                                  <div className="w-full flex items-center xl:gap-8 md:gap-4 gap-2">
                                      <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/tinderLogo.webp" width="56" height="56" className="w-auto md:h-14 h-12" alt="Tinder Logo" title="Tinder Logo"/>
                                      <h3 className="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg text-base font-bold text-[#FD3A73]">Tinder</h3>
                                  </div>
                                  <div className="w-full xl:text-sm lg:text-xs md:text-sm text-xs font-normal text-[#454444] xl:pt-4 pt-2 xl:pb-6 pb-4">A dating app like Tinder, is known as the top popular dating platform and mobile app that is accessible on Android and iOS platforms. With GPS capability, the app offers the best matches to the users based on their locality. Check out how IMG Global Infotech, a dating app development company, helped its client.</div>
                                  <div className="flex items-center lg:gap-14 md:gap-10 gap-2">
                                      <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                          <div className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-[#454444]">10Cr+</div>
                                          <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-[#454444]">Downloads</div>
                                      </div>
                                      <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                          <div className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-[#454444]">4.1/5</div>
                                          <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-[#454444]">Rating</div>
                                      </div>
                                      <div className="w-auto inlne-flex flex-col gap-0.5 max-md:ml-auto">
                                          <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-[#454444]/70">Industry</div>
                                          <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-bold text-[#454444]">Online Dating / <br/> Social Networking</div>
                                      </div>
                                  </div>
                                  <div className="flex items-center lg:gap-3 gap-2 md:pt-6 pt-3">
                                      <div className="w-auto inlne-flex flex-col gap-0.5 text-center xl:text-sm lg:text-xs md:text-sm text-xs md:font-medium font-semibold text-[#454444]">Available on</div>
                                      <div className="w-auto inlne-flex flex-col gap-0.5 text-center cursor-pointer">
                                          <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/playStoreBtnWhite.webp" className="w-auto xl:h-10 h-8 aspect-[120/40]" width="120" height="40" alt="PlayStore" title="PlayStore"/>
                                      </div>
                                      <div className="w-auto inlne-flex flex-col gap-0.5 text-center cursor-pointer">
                                          <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/appStoreBtnWhite.webp" className="w-auto xl:h-10 h-8 aspect-[120/40]" width="120" height="40" alt="AppStore" title="AppStore"/>
                                      </div>
                                  </div>
                                  <div className="w-full md:pt-8 pt-6">
                                      <label htmlFor="leadPopup" className="cursor-pointer xl:text-base sm:text-sm text-xs md:font-semibold font-medium text-white inline-flex items-center xl:py-3 sm:py-2.5 py-2 xl:ps-6 sm:ps-4 ps-3 xl:pe-3 sm:pe-2.5 pe-1.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#FD3A73] to-[#FF8258] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#FF8258] group/btn">
                                          <span>View Case Study</span>
                                          <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#FD3A73] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                              <Svg name="arrowCall" className="size-3 relative z-10 text-[#FF8258]" />
                                          </div>
                                      </label>
                                  </div>
                              </div>
                              <div className="md:w-4/12 w-full max-md:order-first rounded-3xl aspect-square flex items-center justify-center bg-gradient-to-br from-[#FD3A73] to-[#FF8258] p-6">
                                  <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/caseStudyTinder.webp" alt="Tinder" title="Tinder" width="375" height="375" sizes="(max-width: 768px) 100vw, 33vw" className="size-full object-contain object-center"/>
                              </div>
                          </SwiperSlide>
                  </Swiper>
              </div>
          </div>
      </section>
    )
}

export default CaseStudy
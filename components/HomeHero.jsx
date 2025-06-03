'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import Svg from '@/components/svg';
import { useState, useEffect } from 'react';

export default function HomeHero() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    // Set initially
    handleResize();

    // Listen on resize
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
        window.removeEventListener('resize', handleResize);
    };
    }, []);
    return (
        <Swiper className="heroSection w-full swiper bg-white [&_.swiper-slide]:z-0 [&_.swiper-slide.swiper-slide-prev]:!z-10 [&_.swiper-slide.swiper-slide-next]:!z-10 [&_.swiper-slide.swiper-slide-active]:!z-20 [&_.swiper-wrapper]:max-md:!items-stretch"
            slidesPerView={1}
            spaceBetween={0}
            // loop={true}
            speed={1000}
            // autoplay={{
            //     delay: 3000,
            //     disableOnInteraction: false,
            // }}
            keyboard={{
                enabled: true,
            }}
            pagination={{
                clickable: true,
                el: '.swiper-pagination',
            }}
            navigation={{
                nextEl: '.next',
                prevEl: '.prev',
            }}
            modules={[Autoplay, Pagination, Navigation, Keyboard]}
            >
                {!isMobile ? (
                    <Image 
                        priority={true}
                        quality={75}
                        fill={true}
                        sizes="100vw"
                        src="https://d1y41eupgbwbb2.cloudfront.net/images/bgHero-1920.webp"
                        alt="AI-Driven Digital Transformation Company"
                        className="z-0 object-cover object-center pointer-events-none"
                        />
                        ) : (
                    <Image 
                        priority={true}
                        quality={75}
                        fill={true}sizes="(max-width: 768px) 100vw, 50vw"
                        src="https://d1y41eupgbwbb2.cloudfront.net/images/bgHeroMobile-768.webp"
                        alt="AI-Driven Digital Transformation Company"
                        className="my-auto w-full z-0 object-cover object-center pointer-events-none"
                        />
                )}
                <SwiperSlide className="swiper-slide xl:pt-[116px] lg:pt-[90px] md:pt-[88px] pt-16 relative overflow-hidden md:min-h-dvh max-md:!h-auto !flex !flex-col max-md:pb-6 group/slide">
                    <div className="!container flex flex-wrap relative z-10 grow">
                        <div className="md:w-5/12 w-full flex flex-col">
                            <div className="grow lg:py-12 md:py-6 py-3"></div>
                            <h1 className="w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl font-bold text-[#454444] text-balance max-md:text-center translate-y-10 opacity-0 group-[.swiper-slide-active]/slide:translate-y-0 group-[.swiper-slide-active]/slide:opacity-100 delay-700 duration-500 ease-in-out">AI-Driven <span className="text-[#4E94FF]">Digital</span> Transformation Company</h1>
                            <div className="w-full xl:text-xl lg:text-lg md:text-base text-sm font-normal text-[#454444] md:pt-4 pt-2 pb-8 max-md:text-center translate-y-10 opacity-0 group-[.swiper-slide-active]/slide:translate-y-0 group-[.swiper-slide-active]/slide:opacity-100 delay-1000 duration-500 ease-in-out">Maximize ROI with curated <b className="font-bold">AI-Powered Solutions</b><br className="max-md:hidden" /> —fuel global <b>success with growth</b> and enhanced efficiency.</div>
                            <div className="w-full max-md:text-center max-sm:text-left max-md:hidden translate-y-10 opacity-0 group-[.swiper-slide-active]/slide:translate-y-0 group-[.swiper-slide-active]/slide:opacity-100 delay-[1100ms] duration-500 ease-in-out inline-block">
                                <label htmlFor="leadPopup" className="cursor-pointer xl:text-base text-sm font-semibold text-white inline-flex items-center xl:py-3 py-2.5 xl:ps-6 ps-4 xl:pe-3 pe-2.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#4E94FF] to-[#216CFF] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#216CFF] group/btn">
                                    <span>Consult Our Experts</span>
                                    <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#4B92FF] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                        <Svg name="arrowCall" className="size-3 relative z-10 text-[#4B92FF]" />
                                    </div>
                                </label>
                            </div>
                            <div className="grow lg:py-12 md:py-6 py-3 max-md:hidden"></div>
                        </div>
                        <div className="md:w-7/12 w-full flex flex-col relative overflow-hidden">
                            {!isMobile ? (
                                <Image 
                                    priority={true} 
                                    quality={75}
                                    src="https://d1y41eupgbwbb2.cloudfront.net/images/heroBot-768.webp" 
                                    blurDataURL="https://d1y41eupgbwbb2.cloudfront.net/images/heroBot-768.webp" 
                                    placeholder="blur"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    width="815" 
                                    height="579" 
                                    alt="AI-Driven Digital Transformation Company" 
                                    title="AI-Driven Digital Transformation Company" 
                                    className="absolute top-8 inset-x-0 bottom-0 size-full object-contain" />
                                    ) : (
                                <Image 
                                    priority={true} 
                                    quality={75}
                                    src="https://d1y41eupgbwbb2.cloudfront.net/images/heroBotMobile-384.webp" 
                                    blurDataURL="https://d1y41eupgbwbb2.cloudfront.net/images/heroBotMobile-384.webp" 
                                    placeholder="blur"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    width="339" 
                                    height="438" 
                                    alt="AI-Driven Digital Transformation Company" 
                                    title="AI-Driven Digital Transformation Company" 
                                    className="size-full object-contain mx-auto max-w-96 max-md:aspect-[384/496]" />
                            )}
                            <div className="w-full max-md:text-center md:hidden sm:py-7 py-7">
                                <label htmlFor="leadPopup" className="cursor-pointer xl:text-base text-sm font-semibold text-white inline-flex items-center xl:py-3 py-2.5 xl:ps-6 ps-4 xl:pe-3 pe-2.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#4E94FF] to-[#216CFF] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#216CFF] group/btn">
                                    <span>Consult Our Experts</span>
                                    <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#4B92FF] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                        <Svg name="arrowCall" className="size-3 relative z-10 text-[#4B92FF]" />
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide xl:pt-[116px] lg:pt-[90px] md:pt-[88px] pt-16 relative overflow-hidden md:min-h-dvh max-md:!h-auto !flex !flex-col max-md:pb-6 group/slide">
                    <div className="!container flex flex-wrap relative z-10 grow">
                        <div className="md:w-5/12 w-full flex flex-col">
                            <div className="grow lg:py-12 md:py-6 py-3"></div>
                            <h2 className="w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl font-bold text-[#454444] text-balance max-md:text-center translate-y-10 opacity-0 group-[.swiper-slide-active]/slide:translate-y-0 group-[.swiper-slide-active]/slide:opacity-100 delay-700 duration-500 ease-in-out">AI-Powered Mobile Apps - <span className="text-[#4E94FF]">Built on AI</span>, Driven By Your Vision</h2>
                            <div className="w-full xl:text-xl lg:text-lg md:text-base text-sm font-normal text-[#454444] md:pt-4 pt-2 pb-8 max-md:text-center translate-y-10 opacity-0 group-[.swiper-slide-active]/slide:translate-y-0 group-[.swiper-slide-active]/slide:opacity-100 delay-1000 duration-500 ease-in-out"><b className="font-bold">Automate, Optimize, and Scale </b> - All in one AI-driven <br className="max-md:hidden" /> app that simplifies business <b className="font-bold">challenges and accelerates growth.</b></div>
                            <div className="w-full max-md:text-center max-sm:text-left max-md:hidden translate-y-10 opacity-0 group-[.swiper-slide-active]/slide:translate-y-0 group-[.swiper-slide-active]/slide:opacity-100 delay-[1100ms] duration-500 ease-in-out inline-block">
                                <label htmlFor="leadPopup" className="cursor-pointer xl:text-base text-sm font-semibold text-white inline-flex items-center xl:py-3 py-2.5 xl:ps-6 ps-4 xl:pe-3 pe-2.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#4E94FF] to-[#216CFF] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#216CFF] group/btn">
                                    <span>Let's Build Your App</span>
                                    <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#4B92FF] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                        <Svg name="arrowCall" className="size-3 relative z-10 text-[#4B92FF]" />
                                    </div>
                                </label>
                            </div>
                            <div className="grow lg:py-12 md:py-6 py-3 max-md:hidden"></div>
                        </div>
                        <div className="md:w-7/12 w-full flex flex-col relative overflow-hidden">
                            {!isMobile ? (
                                <Image loading='lazy' src="https://d1y41eupgbwbb2.cloudfront.net/images/heroBot2.webp" width="815" height="579" alt="Empowering Businesses AI-Driven Mobile Apps" title="Empowering Businesses AI-Driven Mobile Apps" className="absolute top-8 inset-x-0 bottom-0 size-full object-contain" />
                                    ) : (
                                <Image loading='lazy' src="https://d1y41eupgbwbb2.cloudfront.net/images/heroBot2Mobile.webp" width="339" height="438" alt="Empowering Businesses AI-Driven Mobile Apps" title="Empowering Businesses AI-Driven Mobile Apps" className="size-full object-contain mx-auto max-w-96 max-md:aspect-[384/496]" />
                            )}
                            <div className="w-full max-md:text-center md:hidden sm:py-7 py-7">
                                <label htmlFor="leadPopup" className="cursor-pointer xl:text-base text-sm font-semibold text-white inline-flex items-center xl:py-3 py-2.5 xl:ps-6 ps-4 xl:pe-3 pe-2.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#4E94FF] to-[#216CFF] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#216CFF] group/btn">
                                    <span>Let's Build Your App</span>
                                    <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#4B92FF] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                        <Svg name="arrowCall" className="size-3 relative z-10 text-[#4B92FF]" />
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            <div className="swiper-pagination !container md:!flex md:!gap-2 md:!inset-x-0 md:!text-left md:!bottom-6 !bottom-2.5 *:!rounded-full *:!size-2.5 *:!bg-[#4B92FF] [&_.swiper-pagination-bullet-active]:!w-20 *:!duration-500"></div>
        </Swiper>
    );
}

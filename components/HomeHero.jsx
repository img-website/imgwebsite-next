import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Image from 'next/image';
import Svg from '@/components/svg';

export default function HomeHero() {
    return (
        <div className="relative w-full bg-white">
            <picture>
                <source
                    srcSet="https://d1y41eupgbwbb2.cloudfront.net/images/bgHeroMobile-768.webp"
                    media="(max-width: 768px)"
                />
                <img
                    loading="eager"
                    fetchPriority="high"
                    src="https://d1y41eupgbwbb2.cloudfront.net/images/bgHero-1920.webp"
                    alt="AI-Driven Digital Transformation Company"
                    className="z-0 object-cover object-center pointer-events-none max-md:my-auto max-md:w-full absolute inset-0 size-full"
                    decoding="async"
                    sizes="100vw"
                    width="1920"
                    height="1080"
                    title="AI-Driven Digital Transformation Company"
                />
            </picture>
            <Carousel opts={{ loop: true, fade: true, pagination: true }} className="heroSection w-full bg-white">
                <CarouselContent className="-ml-8">
                    <CarouselItem className="basis-full pl-8 xl:pt-[116px] lg:pt-[90px] md:pt-[88px] pt-16 relative overflow-hidden md:min-h-dvh max-md:!h-auto !flex !flex-col max-md:pb-6 group/slide">
                        <div className="!container flex flex-wrap relative z-10 grow">
                            <div className="md:w-5/12 w-full flex flex-col">
                                <div className="grow lg:py-12 md:py-6 py-3"></div>
                                <h1 className="w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl font-bold text-[#454444] text-balance max-md:text-center translate-y-10 opacity-0 group-[.is-snapped]/slide:translate-y-0 group-[.is-snapped]/slide:opacity-100 delay-300 duration-300 ease-in-out">AI-Driven <span className="text-[#4E94FF]">Digital</span> Transformation Company</h1>
                                <div className="w-full xl:text-xl lg:text-lg md:text-base text-sm font-normal text-[#454444] md:pt-4 pt-2 pb-8 max-md:text-center translate-y-10 opacity-0 group-[.is-snapped]/slide:translate-y-0 group-[.is-snapped]/slide:opacity-100 delay-500 duration-300 ease-in-out">Maximize ROI with curated <b className="font-bold">AI-Powered Solutions</b><br className="max-md:hidden" /> —fuel global <b>success with growth</b> and enhanced efficiency.</div>
                                <div className="w-full max-md:text-center max-sm:text-left max-md:hidden translate-y-10 opacity-0 group-[.is-snapped]/slide:translate-y-0 group-[.is-snapped]/slide:opacity-100 delay-700 duration-300 ease-in-out inline-block">
                                    <label htmlFor="leadPopup" className="cursor-pointer xl:text-base text-sm font-semibold text-white inline-flex items-center xl:py-3 py-2.5 xl:ps-6 ps-4 xl:pe-3 pe-2.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#4E94FF] to-[#216CFF] duration-300 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#216CFF] group/btn">
                                        <span>Consult Our Experts</span>
                                        <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#4B92FF] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                            <Svg name="arrowCall" className="size-3 relative z-10 text-[#4B92FF]" />
                                        </div>
                                    </label>
                                </div>
                                <div className="grow lg:py-12 md:py-6 py-3 max-md:hidden"></div>
                            </div>
                            <div className="md:w-7/12 w-full flex flex-col relative overflow-hidden">
                                {/* <Image 
                                    priority={true}
                                    src="https://d1y41eupgbwbb2.cloudfront.net/images/heroBot-768.webp"
                                    srcSet="
                                        https://d1y41eupgbwbb2.cloudfront.net/images/heroBotMobile.webp 768w,
                                        https://d1y41eupgbwbb2.cloudfront.net/images/heroBot-768.webp 1920w
                                    "
                                    blurDataURL="https://d1y41eupgbwbb2.cloudfront.net/images/heroBot-768.webp" 
                                    placeholder="blur"
                                    sizes="100vw"
                                    width="815" 
                                    height="579" 
                                    alt="AI-Driven Digital Transformation Company" 
                                    title="AI-Driven Digital Transformation Company" 
                                    className="md:absolute md:top-8 md:inset-x-0 md:bottom-0 size-full object-contain max-md:mx-auto max-md:max-w-96 max-md:aspect-[384/496]" /> */}
                                <picture>
                                    <source
                                        srcSet="https://d1y41eupgbwbb2.cloudfront.net/images/heroBotMobile.webp"
                                        media="(max-width: 768px)"
                                    />
                                    <img
                                        src="https://d1y41eupgbwbb2.cloudfront.net/images/heroBot-768.webp"
                                        loading="eager"
                                        fetchPriority="high"
                                        width="815"
                                        height="579"
                                        alt="AI-Driven Digital Transformation Company"
                                        title="AI-Driven Digital Transformation Company"
                                        className="md:absolute md:top-8 md:inset-x-0 md:bottom-0 size-full object-contain max-md:mx-auto max-md:max-w-96 max-md:aspect-[384/496]"
                                        decoding="async"
                                    />
                                </picture>
                                <div className="w-full max-md:text-center md:hidden sm:py-7 py-7">
                                    <label htmlFor="leadPopup" className="cursor-pointer xl:text-base text-sm font-semibold text-white inline-flex items-center xl:py-3 py-2.5 xl:ps-6 ps-4 xl:pe-3 pe-2.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#4E94FF] to-[#216CFF] duration-300 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#216CFF] group/btn">
                                        <span>Consult Our Experts</span>
                                        <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#4B92FF] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                            <Svg name="arrowCall" className="size-3 relative z-10 text-[#4B92FF]" />
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-full pl-8 xl:pt-[116px] lg:pt-[90px] md:pt-[88px] pt-16 relative overflow-hidden md:min-h-dvh max-md:!h-auto !flex !flex-col max-md:pb-6 group/slide">
                        <div className="!container flex flex-wrap relative z-10 grow">
                            <div className="md:w-5/12 w-full flex flex-col">
                                <div className="grow lg:py-12 md:py-6 py-3"></div>
                                <h2 className="w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl font-bold text-[#454444] text-balance max-md:text-center translate-y-10 opacity-0 group-[.is-snapped]/slide:translate-y-0 group-[.is-snapped]/slide:opacity-100 delay-300 duration-300 ease-in-out">AI-Powered Mobile Apps - <span className="text-[#4E94FF]">Built on AI</span>, Driven By Your Vision</h2>
                                <div className="w-full xl:text-xl lg:text-lg md:text-base text-sm font-normal text-[#454444] md:pt-4 pt-2 pb-8 max-md:text-center translate-y-10 opacity-0 group-[.is-snapped]/slide:translate-y-0 group-[.is-snapped]/slide:opacity-100 delay-500 duration-300 ease-in-out"><b className="font-bold">Automate, Optimize, and Scale </b> - All in one AI-driven <br className="max-md:hidden" /> app that simplifies business <b className="font-bold">challenges and accelerates growth.</b></div>
                                <div className="w-full max-md:text-center max-sm:text-left max-md:hidden translate-y-10 opacity-0 group-[.is-snapped]/slide:translate-y-0 group-[.is-snapped]/slide:opacity-100 delay-700 duration-300 ease-in-out inline-block">
                                    <label htmlFor="leadPopup" className="cursor-pointer xl:text-base text-sm font-semibold text-white inline-flex items-center xl:py-3 py-2.5 xl:ps-6 ps-4 xl:pe-3 pe-2.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#4E94FF] to-[#216CFF] duration-300 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#216CFF] group/btn">
                                        <span>Let's Build Your App</span>
                                        <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#4B92FF] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                            <Svg name="arrowCall" className="size-3 relative z-10 text-[#4B92FF]" />
                                        </div>
                                    </label>
                                </div>
                                <div className="grow lg:py-12 md:py-6 py-3 max-md:hidden"></div>
                            </div>
                            <div className="md:w-7/12 w-full flex flex-col relative overflow-hidden">
                                <Image fetchPriority='high' loading='eager' sizes="(max-width: 768px) 100vw, 58vw" src="https://d1y41eupgbwbb2.cloudfront.net/images/heroBot2.webp" width="815" height="579" alt="Empowering Businesses AI-Driven Mobile Apps" title="Empowering Businesses AI-Driven Mobile Apps" className="absolute top-8 inset-x-0 bottom-0 size-full object-contain max-md:opacity-0 max-md:pointer-events-none" />
                                <Image fetchPriority='high' sizes="100vw" src="https://d1y41eupgbwbb2.cloudfront.net/images/heroBot2Mobile.webp" width="339" height="438" alt="Empowering Businesses AI-Driven Mobile Apps" title="Empowering Businesses AI-Driven Mobile Apps" className="size-full object-contain mx-auto max-w-96 max-md:aspect-[384/496] md:opacity-0 md:absolute md:pointer-events-none" />
                                <div className="w-full max-md:text-center md:hidden sm:py-7 py-7">
                                    <label htmlFor="leadPopup" className="cursor-pointer xl:text-base text-sm font-semibold text-white inline-flex items-center xl:py-3 py-2.5 xl:ps-6 ps-4 xl:pe-3 pe-2.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#4E94FF] to-[#216CFF] duration-300 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#216CFF] group/btn">
                                        <span>Let's Build Your App</span>
                                        <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#4B92FF] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                            <Svg name="arrowCall" className="size-3 relative z-10 text-[#4B92FF]" />
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                {/* <div className="swiper-pagination !container md:!flex md:!gap-2 md:!inset-x-0 md:!text-left md:!bottom-6 !bottom-2.5 *:!rounded-full *:!size-2.5 *:!bg-[#4B92FF] [&_.swiper-pagination-bullet-active]:!w-20 *:!duration-300"></div> */}
            </Carousel>
        </div>
    );
}

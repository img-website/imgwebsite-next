"use client";

import Svg from "@/components/svg";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide, Navigation, Autoplay } from '@/components/CustomSwiper';


export default function GroceryAppDevelopment() {
    return (
        <>
            <section className="heroSection xl:pt-[116px] lg:pt-[90px] md:pt-[88px] pt-16 relative overflow-hidden md:min-h-dvh max-md:!h-auto flex flex-col max-md:pb-6 bg-[#F4FFFE]">
                <div className="!container flex flex-wrap relative z-10 grow justify-between max-sm:!px-0">
                    <div className="xl:w-6/12 lg:w-1/2 md:w-5/12 w-full flex flex-col max-sm:px-4">
                        <div className="grow lg:py-6 py-3"></div>
                        <div className="w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl md:font-bold font-semibold text-[#454444] text-balance relative max-md:text-center">Experience the power of Top <h1 className="inline"><span className="text-[#4E94FF]">Taxi Booking App</span> Development Company</h1></div>
                        <div className="w-full xl:text-base md:text-sm text-sm font-normal text-[#454444] md:pt-4 pt-2 pb-6 max-md:text-center">As a reliable taxi booking app development company, IMG Global Infotech delivers taxi booking app solutions that improve operational efficiency and streamline booking operations. We are experienced in creating advanced and innovative ride-hailing apps.</div>
                        <ul className="flex flex-wrap gap-4 max-md:justify-center">
                            <li className="inline-flex md:gap-2 gap-1 items-center md:py-2 py-1 md:ps-2 ps-1 md:pe-4 pe-2 text-[#454444] md:text-xs text-[10px] font-normal rounded-full bg-gradient-to-r from-[#FFFFFF] to-[#F4FFFE] shadow-[-2px_1px_4px_0px_#00000040]">
                                <x-icon name="check" className="size-5 text-[#FF6B39]" />
                                <span>Launch Your Own App In 72 Hours</span>
                            </li>
                            <li className="inline-flex md:gap-2 gap-1 items-center md:py-2 py-1 md:ps-2 ps-1 md:pe-4 pe-2 text-[#454444] md:text-xs text-[10px] font-normal rounded-full bg-gradient-to-r from-[#FFFFFF] to-[#F4FFFE] shadow-[-2px_1px_4px_0px_#00000040]">
                                <x-icon name="check" className="size-5 text-[#FF6B39]" />
                                <span>Next Level Features</span>
                            </li>
                            <li className="inline-flex md:gap-2 gap-1 items-center md:py-2 py-1 md:ps-2 ps-1 md:pe-4 pe-2 text-[#454444] md:text-xs text-[10px] font-normal rounded-full bg-gradient-to-r from-[#FFFFFF] to-[#F4FFFE] shadow-[-2px_1px_4px_0px_#00000040]">
                                <x-icon name="check" className="size-5 text-[#FF6B39]" />
                                <span>NDA and Code Security Ensured</span>
                            </li>
                            <li className="inline-flex md:gap-2 gap-1 items-center md:py-2 py-1 md:ps-2 ps-1 md:pe-4 pe-2 text-[#454444] md:text-xs text-[10px] font-normal rounded-full bg-gradient-to-r from-[#FFFFFF] to-[#F4FFFE] shadow-[-2px_1px_4px_0px_#00000040]">
                                <x-icon name="check" className="size-5 text-[#FF6B39]" />
                                <span>100% Customizable</span>
                            </li>
                        </ul>
                        <div className="w-full max-md:text-center pt-8">
                            <label htmlFor="leadPopup" className="cursor-pointer xl:text-base text-sm font-semibold text-white inline-flex items-center xl:py-3 py-2.5 xl:ps-6 ps-4 xl:pe-3 pe-2.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#4E94FF] to-[#216CFF] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#216CFF] group/btn">
                                <span>Consult Our Experts</span>
                                <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#4E94FF] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                    <x-icon name="arrowCall" className="size-3 relative z-10 text-[#216CFF]" />
                                </div>
                            </label>
                        </div>
                        <div className="grow lg:py-6 py-3 max-md:hidden"></div>
                    </div>
                    <div className="xl:w-6/12 lg:w-1/2 md:w-7/12 w-full flex flex-col relative max-md:order-first">
                        <Image loading="eager" fetchpriority="high" decoding="auto" src="https://d1y41eupgbwbb2.cloudfront.net/images/TaxiHeroImage.webp" width="683" height="614" alt="Experience the power of Top Taxi Booking App Development Company" title="Experience the power of Top Taxi Booking App Development Company" className="md:absolute md:top-0 md:inset-x-0 md:bottom-0 md:size-full w-full object-cover md:object-left-bottom object-center max-md:hidden aspect-[683/614]" />
                        <Image loading="eager" fetchpriority="high" decoding="auto" src="https://d1y41eupgbwbb2.cloudfront.net/images/TaxiHeroMobileImage.webp" width="815" height="579" alt="Experience the power of Top Taxi Booking App Development Company" title="Experience the power of Top Taxi Booking App Development Company" className="md:absolute md:top-0 md:inset-x-0 md:bottom-0 md:size-full w-full object-cover md:object-left-bottom object-center md:hidden aspect-[16/13]" />
                    </div>
                </div>
            </section>

            <section className="buildAppLikeSection w-full relative overflow-hidden bg-white">
                <div className="!container flex relative">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-wrap justify-between xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8 gap-y-8">
                            <div className="md:w-6/12 w-full">
                                <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-[#454444] text-balance relative z-10 pb-6">Boost Your Business With Taxi Booking App Like <span className="text-[#2D86FF]">Uber</span>, Lyft and <span className="text-[#FF6B39]">Bolt</span></h2>
                                <div className="md:text-sm text-xs font-normal text-[#454444] flex flex-col gap-3">
                                    <p>The taxi booking market is exponentially rising and customers' demands have shifted towards personalized ride-hailing experiences. On-demand taxi booking apps like Uber, Lyft, or Careem have set a new trend in the market. By 2028, the taxi app market size is projected to be $283 billion at a CAGR of 4.2%. Over 300 million users are using taxi booking apps for their daily commutes, so if you are looking to launch your business online, it is the right time.</p>
                                    <p>At IMG Global Infotech, we provide taxi app development solutions that offer scalability, innovative features, and high-end security. As an experienced on-demand taxi booking app development company, we can help you build an app like Uber with custom features. You can trust us to develop a car booking app for business that exactly matches your requirements and has integrations that drive high ROI and expected results.</p>
                                </div>
                                <div className="w-full md:pt-6 pt-4">
                                    <label htmlFor="leadPopup" className="cursor-pointer xl:text-base sm:text-sm text-xs md:font-semibold font-medium text-white inline-flex items-center xl:py-3 sm:py-2.5 py-2 xl:ps-6 sm:ps-4 ps-3 xl:pe-3 sm:pe-2.5 pe-1.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#4E94FF] to-[#216CFF] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#216CFF] group/btn">
                                        <span>Consult Our Experts</span>
                                        <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#4E94FF] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                            <x-icon name="arrowCall" className="size-3 relative z-10 text-[#216CFF]" />
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="md:w-5/12 w-full rounded-3xl flex items-center justify-center relative order-first max-md:max-w-80 max-md:mx-auto lg:pe-10">
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/buildAppLikeImage.webp" width="529" height="431" alt="Boost Your Business With Taxi Booking App Like Uber, Lyft, and Bolt" title="Boost Your Business With Taxi Booking App Like Uber, Lyft, and Bolt" className="w-full object-contain object-center aspect-[529/431]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="brandsSection w-full group/cs relative overflow-hidden bg-white">
                <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                    <div className="flex flex-col w-full">
                        <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-[#454444] text-balance relative z-10 md:pb-4 pb-2">Trusted by 1200+ Happy Clients, Including Fortune 500 Companies</h2>
                        <div className="relative flex-shrink-0 p-4 w-full">
                            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 justify-center">
                                <div className="rounded-md grid items-center md:hover:scale-95 duration-300 justify-center p-2 ring-1 ring-black/10">
                                    <Image
                                        className="w-auto h-14 object-contain object-center"
                                        width="79"
                                        height="89"
                                        loading="lazy" fetchpriority="low" src="https://d1y41eupgbwbb2.cloudfront.net/images/logos/adani.webp"
                                        alt="adani"
                                        title="adani"
/>
                                </div>
                                <div className="rounded-md grid items-center md:hover:scale-95 duration-300 justify-center p-2 ring-1 ring-black/10">
                                    <Image
                                        className="w-auto h-14 object-contain object-center"
                                        width="79"
                                        height="89" 
                                        
                                        loading="lazy" fetchpriority="low" src="https://d1y41eupgbwbb2.cloudfront.net/images/logos/coachingselect.webp"
                                        alt="coachingselect"
                                        title="coachingselect"
/>
                                </div>
                                <div className="rounded-md grid items-center md:hover:scale-95 duration-300 justify-center p-2 ring-1 ring-black/10">
                                    <Image
                                        className="w-auto h-14 object-contain object-center"
                                        width="79"
                                        height="89" 
                                        
                                        loading="lazy" fetchpriority="low" src="https://d1y41eupgbwbb2.cloudfront.net/images/logos/cocacola.webp"
                                        alt="cocacola"
                                        title="cocacola"
/>
                                </div>
                                <div className="rounded-md grid items-center md:hover:scale-95 duration-300 justify-center p-2 ring-1 ring-black/10">
                                    <Image
                                        className="w-auto h-14 object-contain object-center"
                                        width="79"
                                        height="89" 
                                        
                                        loading="lazy" fetchpriority="low" src="https://d1y41eupgbwbb2.cloudfront.net/images/logos/colgate.webp"
                                        alt="colgate"
                                        title="colgate"
/>
                                </div>
                                <div className="rounded-md grid items-center md:hover:scale-95 duration-300 justify-center p-2 ring-1 ring-black/10">
                                    <Image
                                        className="w-auto h-14 object-contain object-center"
                                        width="79"
                                        height="89" 
                                        
                                        loading="lazy" fetchpriority="low" src="https://d1y41eupgbwbb2.cloudfront.net/images/logos/fabindia.webp"
                                        alt="fabindia"
                                        title="fabindia"
/>
                                </div>
                                <div className="rounded-md grid items-center md:hover:scale-95 duration-300 justify-center p-2 ring-1 ring-black/10">
                                    <Image
                                        className="w-auto h-14 object-contain object-center"
                                        width="79"
                                        height="89" 
                                        
                                        loading="lazy" fetchpriority="low" src="https://d1y41eupgbwbb2.cloudfront.net/images/logos/godrej.webp"
                                        alt="godrej"
                                        title="godrej"
/>
                                </div>
                                <div className="rounded-md grid items-center md:hover:scale-95 duration-300 justify-center p-2 ring-1 ring-black/10">
                                    <Image
                                        className="w-auto h-14 object-contain object-center"
                                        width="79"
                                        height="89" 
                                        
                                        loading="lazy" fetchpriority="low" src="https://d1y41eupgbwbb2.cloudfront.net/images/logos/hdfc.webp"
                                        alt="hdfc"
                                        title="hdfc"
/>
                                </div>
                                <div className="rounded-md grid items-center md:hover:scale-95 duration-300 justify-center p-2 ring-1 ring-black/10">
                                    <Image
                                        className="w-auto h-14 object-contain object-center"
                                        width="79"
                                        height="89" 
                                        
                                        loading="lazy" fetchpriority="low" src="https://d1y41eupgbwbb2.cloudfront.net/images/logos/hero.webp"
                                        alt="hero"
                                        title="hero"
/>
                                </div>
                                <div className="rounded-md grid items-center md:hover:scale-95 duration-300 justify-center p-2 ring-1 ring-black/10">
                                    <Image
                                        className="w-auto h-14 object-contain object-center"
                                        width="79"
                                        height="89" 
                                        
                                        loading="lazy" fetchpriority="low" src="https://d1y41eupgbwbb2.cloudfront.net/images/logos/marutisuzuki.webp"
                                        alt="marutisuzuki"
                                        title="marutisuzuki"
/>
                                </div>
                                <div className="rounded-md grid items-center md:hover:scale-95 duration-300 justify-center p-2 ring-1 ring-black/10">
                                    <Image
                                        className="w-auto h-14 object-contain object-center"
                                        width="79"
                                        height="89" 
                                        
                                        loading="lazy" fetchpriority="low" src="https://d1y41eupgbwbb2.cloudfront.net/images/logos/mcdonalds.webp"
                                        alt="mcdonalds"
                                        title="mcdonalds"
/>
                                </div>
                                <div className="rounded-md grid items-center md:hover:scale-95 duration-300 justify-center p-2 ring-1 ring-black/10">
                                    <Image
                                        className="w-auto h-14 object-contain object-center"
                                        width="79"
                                        height="89" 
                                        
                                        loading="lazy" fetchpriority="low" src="https://d1y41eupgbwbb2.cloudfront.net/images/logos/medanta.webp"
                                        alt="medanta"
                                        title="medanta"
/>
                                </div>
                                <div className="rounded-md grid items-center md:hover:scale-95 duration-300 justify-center p-2 ring-1 ring-black/10">
                                    <Image
                                        className="w-auto h-14 object-contain object-center"
                                        width="79"
                                        height="89" 
                                        
                                        loading="lazy" fetchpriority="low" src="https://d1y41eupgbwbb2.cloudfront.net/images/logos/myfav11.webp"
                                        alt="myfav11"
                                        title="myfav11"
/>
                                </div>
                                <div className="rounded-md grid items-center md:hover:scale-95 duration-300 justify-center p-2 ring-1 ring-black/10">
                                    <Image
                                        className="w-auto h-14 object-contain object-center"
                                        width="79"
                                        height="89" 
                                        
                                        loading="lazy" fetchpriority="low" src="https://d1y41eupgbwbb2.cloudfront.net/images/logos/pepsico.webp"
                                        alt="pepsico"
                                        title="pepsico"
/>
                                </div>
                                <div className="rounded-md grid items-center md:hover:scale-95 duration-300 justify-center p-2 ring-1 ring-black/10">
                                    <Image
                                        className="w-auto h-14 object-contain object-center"
                                        width="79"
                                        height="89" 
                                        
                                        loading="lazy" fetchpriority="low" src="https://d1y41eupgbwbb2.cloudfront.net/images/logos/samsung.webp"
                                        alt="samsung"
                                        title="samsung"
/>
                                </div>
                                <div className="rounded-md grid items-center md:hover:scale-95 duration-300 justify-center p-2 ring-1 ring-black/10">
                                    <Image
                                        className="w-auto h-14 object-contain object-center"
                                        width="79"
                                        height="89" 
                                        
                                        loading="lazy" fetchpriority="low" src="https://d1y41eupgbwbb2.cloudfront.net/images/logos/shaadi.webp"
                                        alt="shaadi"
                                        title="shaadi"
/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="globalImpactSection w-full group/cs relative overflow-hidden bg-white">
                <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                    <div className="flex flex-col w-full">
                        <h2 className="md:w-10/12 w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-[#454444] text-balance relative z-10 md:pb-6 pb-4 md:text-center mx-auto">Impact That Our <span className="text-[#2D86FF]">Taxi Booking App Development</span> Services <span className="text-[#FF6B39]">Create on A Business</span></h2>
                        <div className="flex flex-wrap items-center justify-around md:py-10 py-6 max-sm:gap-y-16">
                            <ul className="xl:w-4/12 lg:w-5/12 md:6/12 sm:w-1/2 w-full grid grid-cols-2 lg:gap-x-12 md:gap-x-9 gap-x-7 lg:gap-y-24 md:gap-y-20 gap-y-16 lg:even:*:translate-y-14 even:*:translate-y-8">
                                <li className="w-full bg-[#2D86FF]/20 md:rounded-2xl rounded-xl md:pb-6 pb-4 md:pt-12 pt-8 md:px-5 px-4 flex flex-col aspect-square justify-center relative">
                                    <div className="lg:w-12 md:w-10 w-7 inline-flex items-center justify-center shrink-0 rounded-md bg-gradient-to-b from-[#2D84FD] to-[#3781FF] lg:py-8 md:py-5 py-4 mx-auto -translate-y-1/2 absolute inset-x-0 top-0">
                                        <x-icon name="arrowUpward" className="md:size-8 size-5 relative z-10 text-white" />
                                    </div>
                                    <div className="w-full text-center xl:text-5xl md:text-4xl text-3xl font-extrabold text-[#2D86FF]">63%</div>
                                    <div className="w-full text-center text-balance lg:text-base md:text-sm sm:text-xs text-[10px] font-semibold text-[#5B5B5B]">Increase in Ride Booking</div>
                                </li>
                                <li className="w-full bg-[#FF6B39]/20 md:rounded-2xl rounded-xl md:pb-6 pb-4 md:pt-12 pt-8 md:px-5 px-4 flex flex-col aspect-square justify-center relative">
                                    <div className="lg:w-12 md:w-10 w-7 inline-flex items-center justify-center shrink-0 rounded-md bg-gradient-to-b from-[#FF6B39] to-[#F36E0F] lg:py-8 md:py-5 py-4 mx-auto -translate-y-1/2 absolute inset-x-0 top-0">
                                        <x-icon name="arrowUpward" className="md:size-8 size-5 relative z-10 text-white rotate-180" />
                                    </div>
                                    <div className="w-full text-center xl:text-5xl md:text-4xl text-3xl font-extrabold text-[#FF6B39]">51%</div>
                                    <div className="w-full text-center text-balance lg:text-base md:text-sm sm:text-xs text-[10px] font-semibold text-[#5B5B5B]">Decrease in Pickup Time</div>
                                </li>
                                <li className="w-full bg-[#FF6B39]/20 md:rounded-2xl rounded-xl md:pb-6 pb-4 md:pt-12 pt-8 md:px-5 px-4 flex flex-col aspect-square justify-center relative">
                                    <div className="lg:w-12 md:w-10 w-7 inline-flex items-center justify-center shrink-0 rounded-md bg-gradient-to-b from-[#FF6B39] to-[#F36E0F] lg:py-8 md:py-5 py-4 mx-auto -translate-y-1/2 absolute inset-x-0 top-0">
                                        <x-icon name="arrowUpward" className="md:size-8 size-5 relative z-10 text-white rotate-180" />
                                    </div>
                                    <div className="w-full text-center xl:text-5xl md:text-4xl text-3xl font-extrabold text-[#FF6B39]">41%</div>
                                    <div className="w-full text-center text-balance lg:text-base md:text-sm sm:text-xs text-[10px] font-semibold text-[#5B5B5B]">Decrease in Operational Costs</div>
                                </li>
                                <li className="w-full bg-[#2D86FF]/20 md:rounded-2xl rounded-xl md:pb-6 pb-4 md:pt-12 pt-8 md:px-5 px-4 flex flex-col aspect-square justify-center relative">
                                    <div className="lg:w-12 md:w-10 w-7 inline-flex items-center justify-center shrink-0 rounded-md bg-gradient-to-b from-[#2D84FD] to-[#3781FF] lg:py-8 md:py-5 py-4 mx-auto -translate-y-1/2 absolute inset-x-0 top-0">
                                        <x-icon name="arrowUpward" className="md:size-8 size-5 relative z-10 text-white" />
                                    </div>
                                    <div className="w-full text-center xl:text-5xl md:text-4xl text-3xl font-extrabold text-[#2D86FF]">69%</div>
                                    <div className="w-full text-center text-balance lg:text-base md:text-sm sm:text-xs text-[10px] font-semibold text-[#5B5B5B]">Increase in Revenue & Growth</div>
                                </li>
                            </ul>
                            <div className="xl:w-5/12 lg-5/12 md:6/12 sm:w-1/2 w-full rounded-3xl flex items-center justify-center relative max-md:max-w-80 max-sm:mx-auto lg:ps-0 md:ps-8 lg:pe-10">
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/globalImpact.webp" width="529" height="576" alt="Impact That Our Taxi Booking App Development Services Create on A Business" title="Impact That Our Taxi Booking App Development Services Create on A Business" className="w-full object-contain object-center aspect-[529/576]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta1Section w-full relative overflow-hidden bg-[#1C76F2]">
                <div className="!container flex relative">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-wrap justify-between">
                            <div className="md:w-6/12 w-full xl:py-16 lg:py-14 md:py-12 sm:py-10 pt-8 flex flex-col max-md:text-center text-balance">
                                <span className="xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm font-medium text-white">The global taxi market is going to reach around</span>
                                <span className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-white text-balance max-md:text-center"><span className="xl:text-6xl lg:text-5xl md:text-3xl sm:text-xl text-lg font-bold">$216</span>billion by 2028.</span>
                                <span className="2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-medium text-white">Now is the perfect time to</span>
                                <label htmlFor="leadPopup" className="2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-bold underline text-[#FFCC00] cursor-pointer inline">Launch your own taxi app</label>
                                <span className="2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-bold text-white">like Uber & RTA.</span>
                            </div>
                            <div className="md:w-5/12 w-full rounded-3xl flex items-center justify-center relative xl:ps-40 lg:ps-10 pt-6 max-md:max-w-80 max-md:mx-auto">
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiGlobalMarket.webp" width="409" height="332" alt="The global taxi market is going to reach around $216 billion by 2028" title="The global taxi market is going to reach around $216 billion by 2028" className="size-full object-contain object-bottom aspect-[409/332]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="servicesSection w-full group/cs relative overflow-hidden bg-[#131514]">
                <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                    <div className="flex flex-col w-full">
                        <h2 className="md:w-10/12 w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-white text-balance relative z-10 md:pb-20 sm:pb-16 pb-8 md:text-center mx-auto">Full-Scale Taxi Booking App Development Services We Offer</h2>
                        <div className="flex flex-wrap gap-y-14 -mx-2.5 items-stretch">
                            <div className="md:w-1/3 sm:w-1/2 w-full px-2.5">
                                <div className="w-full flex flex-col relative rounded-lg p-6 pt-12 gap-2.5 bg-gradient-to-b from-[#292929] to-[#131514] h-full">
                                    <div className="size-16 absolute top-0 rounded-full bg-[#FAAD13] shrink-0 flex flex-col items-center justify-center -translate-y-1/2">
                                        <x-icon name="carpooling" className="md:size-7 size-6 text-[#1C1B1F]" />
                                    </div>
                                    <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">Carpooling App Development</div>
                                    <div className="md:text-sm text-xs font-normal text-balance text-white/80 grow">Looking to enhance your taxi business with shared ride options? We build efficient carpooling apps that help manage multiple bookings, optimize routes, and reduce operational costs while promoting eco-friendly travel.</div>
                                    <label htmlFor="leadPopup" className="inline-flex items-center gap-1 text-xs font-semibold text-[#FAAD13]">
                                        <span>FREE DEMO</span>
                                        <x-icon name="arrowForward" className="size-5 text-[#FAAD13]" />
                                    </label>
                                </div>
                            </div>
                            <div className="md:w-1/3 sm:w-1/2 w-full px-2.5">
                                <div className="w-full flex flex-col relative rounded-lg p-6 pt-12 gap-2.5 bg-gradient-to-b from-[#292929] to-[#131514] h-full">
                                    <div className="size-16 absolute top-0 rounded-full bg-[#FAAD13] shrink-0 flex flex-col items-center justify-center -translate-y-1/2">
                                        <x-icon name="carRental" className="md:size-7 size-6 text-[#1C1B1F]" />
                                    </div>
                                    <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">Car Rental App Development</div>
                                    <div className="md:text-sm text-xs font-normal text-balance text-white/80 grow">If your business allows hourly or full-day cab rentals, we’ve got you covered. Our rental taxi app includes flexible time slots, real-time fleet tracking, and user-friendly booking management.</div>
                                    <label htmlFor="leadPopup" className="inline-flex items-center gap-1 text-xs font-semibold text-[#FAAD13]">
                                        <span>FREE DEMO</span>
                                        <x-icon name="arrowForward" className="size-5 text-[#FAAD13]" />
                                    </label>
                                </div>
                            </div>
                            <div className="md:w-1/3 sm:w-1/2 w-full px-2.5">
                                <div className="w-full flex flex-col relative rounded-lg p-6 pt-12 gap-2.5 bg-gradient-to-b from-[#292929] to-[#131514] h-full">
                                    <div className="size-16 absolute top-0 rounded-full bg-[#FAAD13] shrink-0 flex flex-col items-center justify-center -translate-y-1/2">
                                        <x-icon name="webDevelopment" className="md:size-7 size-6 text-[#1C1B1F]" />
                                    </div>
                                    <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">Corporate Taxi App Development</div>
                                    <div className="md:text-sm text-xs font-normal text-balance text-white/80 grow">Having a corporate taxi business and want to provide improved services to your clients, we are here to develop a solution matched with your exact needs. Our solutions help businesses expand their reach.</div>
                                    <label htmlFor="leadPopup" className="inline-flex items-center gap-1 text-xs font-semibold text-[#FAAD13]">
                                        <span>FREE DEMO</span>
                                        <x-icon name="arrowForward" className="size-5 text-[#FAAD13]" />
                                    </label>
                                </div>
                            </div>
                            <div className="md:w-1/3 sm:w-1/2 w-full px-2.5">
                                <div className="w-full flex flex-col relative rounded-lg p-6 pt-12 gap-2.5 bg-gradient-to-b from-[#292929] to-[#131514] h-full">
                                    <div className="size-16 absolute top-0 rounded-full bg-[#FAAD13] shrink-0 flex flex-col items-center justify-center -translate-y-1/2">
                                        <x-icon name="fleetManagement" className="md:size-7 size-6 text-[#1C1B1F]" />
                                    </div>
                                    <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">Fleet Management app development</div>
                                    <div className="md:text-sm text-xs font-normal text-balance text-white/80 grow">Manage your taxi fleet on the go, track your vehicles, and make all fleet operations seamless with our fleet management app development services. We have experience in providing taxi and logistics solutions with multiple features.</div>
                                    <label htmlFor="leadPopup" className="inline-flex items-center gap-1 text-xs font-semibold text-[#FAAD13]">
                                        <span>FREE DEMO</span>
                                        <x-icon name="arrowForward" className="size-5 text-[#FAAD13]" />
                                    </label>
                                </div>
                            </div>
                            <div className="md:w-1/3 sm:w-1/2 w-full px-2.5">
                                <div className="w-full flex flex-col relative rounded-lg p-6 pt-12 gap-2.5 bg-gradient-to-b from-[#292929] to-[#131514] h-full">
                                    <div className="size-16 absolute top-0 rounded-full bg-[#FAAD13] shrink-0 flex flex-col items-center justify-center -translate-y-1/2">
                                        <x-icon name="electricViehcle" className="md:size-7 size-6 text-[#1C1B1F]" />
                                    </div>
                                    <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">Electric Vehicle (EV) Taxi Apps</div>
                                    <div className="md:text-sm text-xs font-normal text-balance text-white/80 grow">Planning to run an eco-friendly taxi business with electric vehicles? We develop EV taxi apps with features like charging station locators, battery monitoring, and real-time fleet tracking for efficient operations.</div>
                                    <label htmlFor="leadPopup" className="inline-flex items-center gap-1 text-xs font-semibold text-[#FAAD13]">
                                        <span>FREE DEMO</span>
                                        <x-icon name="arrowForward" className="size-5 text-[#FAAD13]" />
                                    </label>
                                </div>
                            </div>
                            <div className="md:w-1/3 sm:w-1/2 w-full px-2.5">
                                <div className="w-full flex flex-col relative rounded-lg p-6 pt-12 gap-2.5 bg-gradient-to-b from-[#292929] to-[#131514] h-full">
                                    <div className="size-16 absolute top-0 rounded-full bg-[#FAAD13] shrink-0 flex flex-col items-center justify-center -translate-y-1/2">
                                        <x-icon name="premium" className="md:size-7 size-6 text-[#1C1B1F]" />
                                    </div>
                                    <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">Limousine App Development</div>
                                    <div className="md:text-sm text-xs font-normal text-balance text-white/80 grow">Want to offer premium limousine services with a luxury experience? Our custom limo booking apps include advanced scheduling, chauffeur tracking, and VIP service management tailored for elite clientele.</div>
                                    <label htmlFor="leadPopup" className="inline-flex items-center gap-1 text-xs font-semibold text-[#FAAD13]">
                                        <span>FREE DEMO</span>
                                        <x-icon name="arrowForward" className="size-5 text-[#FAAD13]" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="keySection group/key w-full relative bg-white">
                <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8 max-sm:!px-0">
                    <div className="flex flex-col w-full">
                        <h2 className="w-full max-sm:px-4 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-[#454444] text-balance relative z-10 text-center">Key Features of Our <span className="text-[#2D86FF]">Taxi Booking App</span></h2>
                        <div className="w-full max-sm:px-4 flex items-center justify-center md:pt-8 pt-4">
                            <div className="inline-flex items-center justify-center gap-1 rounded-full bg-white shadow-[0px_3px_34px_0px_#0000001F]">
                                <label htmlFor="panel1" className="md:py-4 py-3 lg:px-12 md:px-10 sm:px-6 px-3 rounded-full xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-semibold text-[#454444] cursor-pointer group-has-[#panel1:checked]/key:bg-[#2D86FF] group-has-[#panel1:checked]/key:text-white"><h3>User App</h3></label>
                                <label htmlFor="panel2" className="md:py-4 py-3 lg:px-12 md:px-10 sm:px-6 px-3 rounded-full xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-semibold text-[#454444] cursor-pointer group-has-[#panel2:checked]/key:bg-[#2D86FF] group-has-[#panel2:checked]/key:text-white"><h3>Driver App</h3></label>
                                <label htmlFor="panel3" className="md:py-4 py-3 lg:px-12 md:px-10 sm:px-6 px-3 rounded-full xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-semibold text-[#454444] cursor-pointer group-has-[#panel3:checked]/key:bg-[#2D86FF] group-has-[#panel3:checked]/key:text-white"><h3>Admin Panel</h3></label>
                            </div>
                        </div>
                        <div className="w-full items-start has-[#panel1:checked]:flex hidden">
                            <input type="radio" name="panel" id="panel1" className="hidden" checked>
                            <div className="swiper xl:w-8/12 md:w-1/2 md:!pt-12 !pt-7 !pb-6 md:!overflow-visible"
                                    data-swiper='{
                                        "slidesPerView": 1,
                                        "spaceBetween": 8,
                                        "speed": 1000,
                                        "loop": true,
                                        "keyboard": {"enabled": true},
                                        "navigation": {
                                            "nextEl": ".next",
                                            "prevEl": ".prev"
                                        }
                                    }'
/>
                                <div className="swiper-wrapper max-md:!items-stretch md:grid xl:grid-cols-2 md:grid-cols-1 md:gap-x-8 md:gap-y-6 md:!transform-none">
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="userPanel1" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="userPanel" id="userPanel1" className="hidden" checked>
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiUserFriendlyInterface.webp" alt="User-Friendly Interface" title="User-Friendly Interface" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <x-icon name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <x-icon name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">User-Friendly Interface</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Intuitive and easy-to-navigate interface. Offer a seamless booking experience. It ensures customers can quickly request rides.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="userPanel2" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="userPanel" id="userPanel2" className="hidden">
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiUserRealTimeTracking.webp" alt="Real-Time Tracking" title="Real-Time Tracking" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <x-icon name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <x-icon name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Real-Time Tracking</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Live tracking feature to monitor the driver's location in real-time, providing transparency and estimated arrival times.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="userPanel3" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="userPanel" id="userPanel3" className="hidden">
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiUserPaymentOption.webp" alt="Payment Options" title="Payment Options" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <x-icon name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <x-icon name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Payment Options</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Multiple secure payment methods, including credit/debit cards and digital wallets, for convenient and cashless transactions.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="userPanel4" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="userPanel" id="userPanel4" className="hidden">
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiEmergencySOS.webp" alt="Emergency SOS" title="Emergency SOS" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <x-icon name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <x-icon name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Emergency SOS</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">The in-app emergency button is for immediate assistance, connecting users to emergency services and providing an extra layer of safety.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="userPanel5" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="userPanel" id="userPanel5" className="hidden">
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiUserFeedback.webp" alt="Rating and Feedback" title="Rating and Feedback" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <x-icon name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <x-icon name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Rating and Feedback</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">This feature has the ability to rate drivers and provide feedback. It promotes accountability and improving service quality over time.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="userPanel6" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="userPanel" id="userPanel6" className="hidden">
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiSchedulingRide.webp" alt="Scheduling Rides" title="Scheduling Rides" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <x-icon name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <x-icon name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Scheduling Rides</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Advanced scheduling options enable users to pre-book rides for specific dates and times, adding convenience to their travel plans.</div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:w-4/12 md:w-1/2 pl-20 md:!pt-12 !pt-7 !pb-6 md:sticky md:top-16 md:bottom-0 md:h-dvh max-md:hidden flex flex-col justify-center">
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiUserFriendlyInterface.webp" alt="User-Friendly Interface" title="User-Friendly Interface" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#userPanel1:checked]/key:md:block" />
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiUserRealTimeTracking.webp" alt="Real-Time Tracking" title="Real-Time Tracking" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#userPanel2:checked]/key:md:block" />
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiUserPaymentOption.webp" alt="Payment Options" title="Payment Options" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#userPanel3:checked]/key:md:block" />
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiEmergencySOS.webp" alt="Emergency SOS" title="Emergency SOS" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#userPanel4:checked]/key:md:block" />
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiUserFeedback.webp" alt="Rating and Feedback" title="Rating and Feedback" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#userPanel5:checked]/key:md:block" />
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiSchedulingRide.webp" alt="Scheduling Rides" title="Scheduling Rides" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#userPanel6:checked]/key:md:block" />
                            </div>
                        </div>
                        <div className="w-full items-start has-[#panel2:checked]:flex hidden">
                            <input type="radio" name="panel" id="panel2" className="hidden">
                            <div className="swiper xl:w-8/12 md:w-1/2 md:!pt-12 !pt-7 !pb-6 md:!overflow-visible"
                                    data-swiper='{
                                        "slidesPerView": 1,
                                        "spaceBetween": 8,
                                        "speed": 1000,
                                        "loop": true,
                                        "keyboard": {"enabled": true},
                                        "navigation": {
                                            "nextEl": ".next",
                                            "prevEl": ".prev"
                                        }
                                    }'
/>
                                <div className="swiper-wrapper max-md:!items-stretch md:grid xl:grid-cols-2 md:grid-cols-1 md:gap-x-8 md:gap-y-6 md:!transform-none">
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="servicePanel1" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="servicePanel" id="servicePanel1" className="hidden" checked>
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/texiDriverRideAssignment.webp" alt="Dynamic Ride Assignments" title="Dynamic Ride Assignments" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <x-icon name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <x-icon name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Dynamic Ride Assignments</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Efficient algorithm for automatic ride assignments, optimizing routes and minimizing wait times for drivers within the taxi booking app</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="servicePanel2" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="servicePanel" id="servicePanel2" className="hidden">
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiDriverNavigation.webp" alt="Navigation Integration" title="Navigation Integration" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <x-icon name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <x-icon name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Navigation Integration</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Seamless integration with navigation tools for accurate and efficient route guidance, ensuring prompt and safe transportation.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="servicePanel3" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="servicePanel" id="servicePanel3" className="hidden">
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/texiDriverEarningDashboard.webp" alt="Earnings Dashboard" title="Earnings Dashboard" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <x-icon name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <x-icon name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Earnings Dashboard</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Clear visibility into earnings, trip history, and performance metrics, allowing drivers to track their income and make informed decisions.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="servicePanel4" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="servicePanel" id="servicePanel4" className="hidden">
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiDriverProfileManagement.webp" alt="Profile Management" title="Profile Management" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <x-icon name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <x-icon name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Profile Management</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Drivers can manage their profiles, update information, and upload necessary documents for compliance and verification.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="servicePanel5" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="servicePanel" id="servicePanel5" className="hidden">
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiDriverStatusUpdate.webp" alt="Status Updates" title="Status Updates" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <x-icon name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <x-icon name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Status Updates</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Real-time status updates for trip requests, ensuring drivers can promptly accept or decline incoming requests based on their availability.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="servicePanel6" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="servicePanel" id="servicePanel6" className="hidden">
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiDriverFeedback.webp" alt="Customer Feedback" title="Customer Feedback" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <x-icon name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <x-icon name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Customer Feedback</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Access to customer ratings and feedback, enabling drivers to understand areas for improvement and enhance their service quality.</div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:w-4/12 md:w-1/2 pl-20 md:!pt-12 !pt-7 !pb-6 md:sticky md:top-16 md:bottom-0 md:h-dvh max-md:hidden flex flex-col justify-center">
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/texiDriverRideAssignment.webp" alt="Dynamic Ride Assignments" title="Dynamic Ride Assignments" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#servicePanel1:checked]/key:md:block" />
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiDriverNavigation.webp" alt="Navigation Integration" title="Navigation Integration" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#servicePanel2:checked]/key:md:block" />
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/texiDriverEarningDashboard.webp" alt="Earnings Dashboard" title="Earnings Dashboard" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#servicePanel3:checked]/key:md:block" />
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiDriverProfileManagement.webp" alt="Profile Management" title="Profile Management" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#servicePanel4:checked]/key:md:block" />
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiDriverStatusUpdate.webp" alt="Status Updates" title="Status Updates" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#servicePanel5:checked]/key:md:block" />
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiDriverFeedback.webp" alt="Customer Feedback" title="Customer Feedback" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#servicePanel6:checked]/key:md:block" />
                            </div>
                        </div>
                        <div className="w-full items-start has-[#panel3:checked]:flex hidden">
                            <input type="radio" name="panel" id="panel3" className="hidden">
                            <div className="swiper xl:w-8/12 md:w-1/2 md:!pt-12 !pt-7 !pb-6 md:!overflow-visible"
                                    data-swiper='{
                                        "slidesPerView": 1,
                                        "spaceBetween": 8,
                                        "speed": 1000,
                                        "loop": true,
                                        "keyboard": {"enabled": true},
                                        "navigation": {
                                            "nextEl": ".next",
                                            "prevEl": ".prev"
                                        }
                                    }'
/>
                                <div className="swiper-wrapper max-md:!items-stretch md:grid xl:grid-cols-2 md:grid-cols-1 md:gap-x-8 md:gap-y-6 md:!transform-none">
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="adminPanel1" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="adminPanel" id="adminPanel1" className="hidden" checked>
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiAdmin.webp" alt="Dashboard and Analytics" title="Dashboard and Analytics" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <x-icon name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <x-icon name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Dashboard and Analytics</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Build a comprehensive dashboard with real-time analytics. It provides administrators with insights into user activity, driver performance, and system health.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="adminPanel2" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="adminPanel" id="adminPanel2" className="hidden">
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiAdmin.webp" alt="User and Driver Management" title="User and Driver Management" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <x-icon name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <x-icon name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">User and Driver Management</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Tools for efficient user and driver onboarding, monitoring, and account management, ensuring a smooth operational workflow.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="adminPanel3" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="adminPanel" id="adminPanel3" className="hidden">
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiAdmin.webp" alt="Fare and Pricing Control" title="Fare and Pricing Control" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <x-icon name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <x-icon name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Fare and Pricing Control</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Flexible fare management options allow administrators to set and adjust pricing structures based on demand, location, and other factors.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="adminPanel4" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="adminPanel" id="adminPanel4" className="hidden">
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiAdmin.webp" alt="Geofencing and Location Control" title="Geofencing and Location Control" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <x-icon name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <x-icon name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Geofencing and Location Control</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Geofencing capabilities to define service areas, manage hotspots, and optimize driver distribution for enhanced efficiency.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="adminPanel5" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="adminPanel" id="adminPanel5" className="hidden">
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiAdmin.webp" alt="Customer Support" title="Customer Support" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <x-icon name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <x-icon name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Customer Support</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Integrated customer support features to address user and driver queries, troubleshoot issues, and maintain a high level of customer satisfaction.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="adminPanel6" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="adminPanel" id="adminPanel6" className="hidden">
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiAdmin.webp" alt="Security and Compliance" title="Security and Compliance" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <x-icon name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <x-icon name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Security and Compliance</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Tools for monitoring and ensuring compliance with safety standards, regulations, and security protocols.</div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:w-4/12 md:w-1/2 pl-20 md:!pt-12 !pt-7 !pb-6 md:sticky md:top-16 md:bottom-0 md:h-dvh max-md:hidden flex flex-col justify-center">
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiAdmin.webp" alt="admin" title="admin" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] max-md:hidden" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="caseStudySection w-full group/cs relative overflow-hidden bg-white">
                <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                    <div className="flex flex-col w-full">
                        <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-[#454444] text-balance relative z-10 md:text-center md:pb-4 pb-2">Our Successful Taxi App Development Projects</h2>
                        <div className="w-full 2xl:text-lg xl:text-base md:text-sm text-xs md:font-medium font-normal text-[#454444] text-balance relative z-10 md:text-center md:pb-12 pb-5">With over 100+ successful app launches, we’ve changed the fate of businesses by developing efficient taxi apps that attract customers and bring ROI.</div>
                        <div className="w-full swiper rounded-3xl"
                                data-swiper='{
                                    "slidesPerView": 1,
                                    "spaceBetween": 32,
                                    "autoplay": {"delay": 5000, "disableOnInteraction": false},
                                    "speed": 1000,
                                    "loop": true,
                                    "keyboard": {"enabled": true},
                                    "navigation": {
                                        "nextEl": ".next",
                                        "prevEl": ".prev"
                                    }
                                }'
/>    
                            <div className="swiper-wrapper">
                                <div className="swiper-slide flex flex-wrap justify-between items-stretch bg-[#1D1D1D] rounded-3xl xl:p-12 md:p-8 py-6 px-4 gap-y-6">
                                    <div className="md:w-7/12 w-full">
                                        <div className="w-full flex items-center xl:gap-8 md:gap-4 gap-2">
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/boltzyLogo.webp" width="56" height="56" className="w-auto md:h-14 h-12 aspect-square" alt="Boltzy Logo" title="Boltzy Logo" />
                                            <h3 className="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg text-base font-bold text-white">Boltzy</h3>
                                        </div>
                                        <div className="w-full xl:text-sm lg:text-xs md:text-sm text-xs font-normal text-white xl:pt-4 pt-2 xl:pb-6 pb-4">Say goodbye to noisy engines and harmful emissions—Boltzy is your all-electric cab booking solution designed for the modern, eco-conscious commuter. With a sleek interface and lightning-fast booking, Boltzy connects you to a fleet of clean, reliable, and comfortable EVs right at your fingertips.</div>
                                        <div className="flex items-center lg:gap-14 md:gap-10 gap-2">
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                                <div className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-white">10M+</div>
                                                <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-white">Downloads</div>
                                            </div>
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                                <div className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-white">4.7/5</div>
                                                <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-white">Rating</div>
                                            </div>
                                            <div className="w-auto inlne-flex flex-col gap-0.5 max-md:ml-auto">
                                                <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-white/70">Industry</div>
                                                <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-bold text-white">Transportation & <br /> Technology</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center lg:gap-3 gap-2 md:pt-6 pt-3">
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center xl:text-sm lg:text-xs md:text-sm text-xs md:font-medium font-semibold text-white">Available on</div>
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                                <Image loading="lazy" decoding="async" fetchpriority="low" src="https://d1y41eupgbwbb2.cloudfront.net/images/playStoreBtnBlack.webp" className="w-auto xl:h-10 h-8 aspect-[120/40]" width="120" height="40" alt="PlayStore" title="PlayStore" />
                                            </div>
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                                <Image loading="lazy" decoding="async" fetchpriority="low" src="https://d1y41eupgbwbb2.cloudfront.net/images/appStoreBtnBlack.webp" className="w-auto xl:h-10 h-8 aspect-[120/40]" width="120" height="40" alt="AppStore" title="AppStore" />
                                            </div>
                                        </div>
                                        <div className="w-full md:pt-8 pt-6">
                                            <label htmlFor="leadPopup" className="cursor-pointer xl:text-base sm:text-sm text-xs md:font-semibold font-medium text-white inline-flex items-center xl:py-3 sm:py-2.5 py-2 xl:ps-6 sm:ps-4 ps-3 xl:pe-3 sm:pe-2.5 pe-1.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#3280FF] to-[#3876C0] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#3876C0] group/btn">
                                                <span>View Case Study</span>
                                                <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#3280FF] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                                    <x-icon name="arrowCall" className="size-3 relative z-10 text-[#3876C0]" />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="md:w-4/12 w-full max-md:order-first rounded-3xl aspect-square flex items-center justify-center bg-gradient-to-br from-[#3280FF] to-[#3876C0] p-6">
                                        <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/boltzy.webp" alt="Boltzy" title="Boltzy" className="size-full object-contain object-center aspect-square" />
                                    </div>
                                </div>
                                <div className="swiper-slide flex flex-wrap justify-between items-stretch bg-[#1D1D1D] rounded-3xl xl:p-12 md:p-8 py-6 px-4 gap-y-6">
                                    <div className="md:w-7/12 w-full">
                                        <div className="w-full flex items-center xl:gap-8 md:gap-4 gap-2">
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/cabbitLogo.webp" width="56" height="56" className="w-auto md:h-14 h-12 aspect-square" alt="Cabbit Logo" title="Cabbit Logo" />
                                            <h3 className="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg text-base font-bold text-white">Cabbit</h3>
                                        </div>
                                        <div className="w-full xl:text-sm lg:text-xs md:text-sm text-xs font-normal text-white xl:pt-4 pt-2 xl:pb-6 pb-4">Cabbit is your go-to taxi booking app that brings speed and simplicity to your daily commute. With just a few taps, get a cab at your doorstep—quick, safe, and always on time. Whether you're hopping across town or heading to the airport, Cabbit gets you there with ease. Hop on, ride smart.</div>
                                        <div className="flex items-center lg:gap-14 md:gap-10 gap-2">
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                                <div className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-white">10M+</div>
                                                <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-white">Downloads</div>
                                            </div>
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                                <div className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-white">4.3/5</div>
                                                <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-white">Rating</div>
                                            </div>
                                            <div className="w-auto inlne-flex flex-col gap-0.5 max-md:ml-auto">
                                                <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-white/70">Industry</div>
                                                <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-bold text-white">Transportation & <br /> Technology</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center lg:gap-3 gap-2 md:pt-6 pt-3">
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center xl:text-sm lg:text-xs md:text-sm text-xs md:font-medium font-semibold text-white">Available on</div>
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                                <Image loading="lazy" decoding="async" fetchpriority="low" src="https://d1y41eupgbwbb2.cloudfront.net/images/playStoreBtnBlack.webp" className="w-auto xl:h-10 h-8 aspect-[120/40]" width="120" height="40" alt="PlayStore" title="PlayStore" />
                                            </div>
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                                <Image loading="lazy" decoding="async" fetchpriority="low" src="https://d1y41eupgbwbb2.cloudfront.net/images/appStoreBtnBlack.webp" className="w-auto xl:h-10 h-8 aspect-[120/40]" width="120" height="40" alt="AppStore" title="AppStore" />
                                            </div>
                                        </div>
                                        <div className="w-full md:pt-8 pt-6">
                                            <label htmlFor="leadPopup" className="cursor-pointer xl:text-base sm:text-sm text-xs md:font-semibold font-medium text-white inline-flex items-center xl:py-3 sm:py-2.5 py-2 xl:ps-6 sm:ps-4 ps-3 xl:pe-3 sm:pe-2.5 pe-1.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#FDC91E] to-[#FF8801] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#FF8801] group/btn">
                                                <span>View Case Study</span>
                                                <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#FDC91E] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                                    <x-icon name="arrowCall" className="size-3 relative z-10 text-[#FF8801]" />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="md:w-4/12 w-full max-md:order-first rounded-3xl aspect-square flex items-center justify-center bg-gradient-to-br from-[#FDC91E] to-[#FF8801] p-6">
                                        <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/cabbit.webp" alt="Cabbit" title="Cabbit" className="size-full object-contain object-center aspect-square" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex md:justify-center justify-end absolute inset-x-0 bottom-0 z-10">
                                <div className="inline-flex items-center justify-center md:gap-8 gap-6 relative bg-white md:rounded-t-3xl rounded-tl-3xl p-2">
                                    <x-icon name="clipLeftBottom" className="size-6 absolute bottom-0 left-0 -translate-x-full z-10 text-white" />
                                    <x-icon name="clipRightBottom" className="size-6 absolute md:bottom-0 max-md:top-0 right-0 md:translate-x-full max-md:-translate-y-full z-10 max-md:-rotate-90 text-white" />
                                    <div className="prev rounded-full size-10 bg-gradient-to-b from-white to-[#666666] p-px inline-flex items-center justify-center relative hover:lg:before:inset-1 before:duration-300 shadow-[0px_4px_4px_0px_#0000001F] before:absolute before:inset-0.5 before:m-auto before:bg-[#1D1D1D] before:rounded-full before:z-0">
                                        <x-icon name="arrowPrev" className="size-6 relative z-10 text-white" />
                                    </div>
                                    <div className="next rounded-full size-10 bg-gradient-to-b from-white to-[#666666] p-px inline-flex items-center justify-center relative hover:lg:before:inset-1 before:duration-300 shadow-[0px_4px_4px_0px_#0000001F] before:absolute before:inset-0.5 before:m-auto before:bg-[#1D1D1D] before:rounded-full before:z-0">
                                        <x-icon name="arrowNext" className="size-6 relative z-10 text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="businessModelsSection w-full relative overflow-hidden bg-white">
                <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                    <div className="flex flex-col w-full">
                        <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-[#454444] text-balance relative z-10 md:text-center md:pb-4 pb-2">Our Expertise in <span className="text-[#FF6B39]">Taxi Booking Business Models</span></h2>
                        <div className="w-full 2xl:text-lg xl:text-base md:text-sm text-xs md:font-medium font-normal text-[#454444] text-balance relative z-10 md:text-center md:pb-12 pb-5">We provide solutions for all taxi booking business models. <b>IMG Global Infotech</b> provides taxi booking apps and software designed with cutting-edge technology, significantly enhancing efficiency and simplifying tasks.</div>
                        <div className="flex flex-wrap xl:-mx-5 -mx-3 xl:gap-y-10 gap-y-6">
                            <div className="md:w-1/2 w-full xl:px-5 px-3">
                                <div className="w-full flex flex-col gap-6 bg-gradient-to-b from-[#FFF7EB] via-[#FFF8EE] to-[#FFFFFF] rounded-2xl lg:p-16 md:p-10 p-8 h-full">
                                    <div className="w-full">
                                        <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/carpoolingAndRentalIcon.webp" alt="Carpooling And Rental" title="Carpooling And Rental" width="288" height="192" className="w-auto xl:h-48 md:h-36 h-24 object-contain object-center mx-auto aspect-[288/192]" />
                                    </div>
                                    <div className="w-full flex flex-col gap-4">
                                        <h3 className="w-full text-center xl:text-2xl md:text-xl sm:text-lg text-base font-semibold text-[#454444]">Carpooling And Rental</h3>
                                        <div className="w-full text-center xl:text-sm text-xs font-normal text-[#454444]">If your taxi business is equipped with its own fleet of cars, and you want to enhance its efficiency. In this scenario, here we can help you with carpooling and rental app development that enables you to efficiently manage and monitor all your bookings and vehicle fleet.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-full xl:px-5 px-3">
                                <div className="w-full flex flex-col gap-6 bg-gradient-to-b from-[#FFF7EB] via-[#FFF8EE] to-[#FFFFFF] rounded-2xl lg:p-16 md:p-10 p-8 h-full">
                                    <div className="w-full">
                                        <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/privateTaxiBusinessIcon.webp" alt="Private Taxi Business" title="Private Taxi Business" width="288" height="192" className="w-auto xl:h-48 md:h-36 h-24 object-contain object-center mx-auto aspect-[288/192]" />
                                    </div>
                                    <div className="w-full flex flex-col gap-4">
                                        <h3 className="w-full text-center xl:text-2xl md:text-xl sm:text-lg text-base font-semibold text-[#454444]">Private Taxi Business</h3>
                                        <div className="w-full text-center xl:text-sm text-xs font-normal text-[#454444]">If you own a taxi business and want to scale it up, IMG Global Infotech is your trusted partner for it. We can provide you with a custom taxi app development, offering a user-friendly interface and powerful features.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-full xl:px-5 px-3">
                                <div className="w-full flex flex-col gap-6 bg-gradient-to-b from-[#FFF7EB] via-[#FFF8EE] to-[#FFFFFF] rounded-2xl lg:p-16 md:p-10 p-8 h-full">
                                    <div className="w-full">
                                        <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/corporateTaxiBusinessIcon.webp" alt="Corporate Taxi Business" title="Corporate Taxi Business" width="288" height="192" className="w-auto xl:h-48 md:h-36 h-24 object-contain object-center mx-auto aspect-[288/192]" />
                                    </div>
                                    <div className="w-full flex flex-col gap-4">
                                        <h3 className="w-full text-center xl:text-2xl md:text-xl sm:text-lg text-base font-semibold text-[#454444]">Corporate Taxi Business</h3>
                                        <div className="w-full text-center xl:text-sm text-xs font-normal text-[#454444]">Having a corporate taxi business and want to provide improved services to your clients, we are here to develop a solution matched with your exact needs. Our solutions help businesses expand their reach.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-full xl:px-5 px-3">
                                <div className="w-full flex flex-col gap-6 bg-gradient-to-b from-[#FFF7EB] via-[#FFF8EE] to-[#FFFFFF] rounded-2xl lg:p-16 md:p-10 p-8 h-full">
                                    <div className="w-full">
                                        <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/deliveryLogisticsAppsIcon.webp" alt="Delivery & Logistics Apps" title="Delivery & Logistics Apps" width="288" height="192" className="w-auto xl:h-48 md:h-36 h-24 object-contain object-center mx-auto aspect-[288/192]" />
                                    </div>
                                    <div className="w-full flex flex-col gap-4">
                                        <h3 className="w-full text-center xl:text-2xl md:text-xl sm:text-lg text-base font-semibold text-[#454444]">Delivery & Logistics Apps</h3>
                                        <div className="w-full text-center xl:text-sm text-xs font-normal text-[#454444]">Looking to streamline your delivery and logistics business? IMG Global Infotech, a logistics software development company, offers you cutting-edge logistics app solutions that help in effective business management and improve service quality.</div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="advanceTechSection w-full relative bg-[#051621]">
                <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8 z-10 relative">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-wrap justify-between relative items-start">
                            <div className="lg:w-5/12 md:w-5/12 w-full md:sticky md:top-32">
                                <h2 className="w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl font-semibold text-white text-balance relative z-10">Innovative Technologies For Advanced Taxi Booking App Development</h2>
                                <div className="w-full">
                                    <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiInnovativeTechnologies.webp" alt="Innovative Technologies For Advanced Taxi Booking App Development" title="Innovative Technologies For Advanced Taxi Booking App Development" width="569" height="378" className="w-full aspect-[569/378]" />
                                </div>
                            </div>
                            <div className="lg:w-6/12 md:w-7/12 w-full rounded-3xl flex flex-col relative md:pl-8">
                                <div className="w-full flex flex-col overflow-x-hidden gap-6">
                                    <div className="flex md:gap-6 gap-4 items-start md:p-6 rounded-xl duration-300 hover:lg:bg-gradient-to-r hover:lg:from-[#153C5E] hover:lg:to-[#08101D]">
                                        <div className="md:size-14 size-12 flex items-center justify-center shrink-0 rounded-xl bg-[#2D86FF]">
                                            <x-icon name="artificialIntelligence" className="size-8 text-white" />
                                        </div>
                                        <div className="w-full flex flex-col md:gap-3 gap-1">
                                            <h3 className="w-full xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-white">Artificial Intelligence</h3>
                                            <div className="w-full md:text-sm text-xs font-normal text-white">We are experts at using Artificial Intelligence technology for developing modern taxi booking mobile app solutions. AI helps in dynamic route optimization, fare estimation, booking automation, resource allocation, and more.</div>
                                        </div>
                                    </div>
                                    <div className="flex md:gap-6 gap-4 items-start md:p-6 rounded-xl duration-300 hover:lg:bg-gradient-to-r hover:lg:from-[#153C5E] hover:lg:to-[#08101D]">
                                        <div className="md:size-14 size-12 flex items-center justify-center shrink-0 rounded-xl bg-[#2D86FF]">
                                            <x-icon name="generativeAi" className="size-8 text-white" />
                                        </div>
                                        <div className="w-full flex flex-col md:gap-3 gap-1">
                                            <h3 className="w-full xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-white">Cloud Computing</h3>
                                            <div className="w-full md:text-sm text-xs font-normal text-white">Our taxi app solutions leverage cutting-edge cloud computing technology to provide state-of-the-art taxi booking app solutions that offer advanced features and cross-device synchronization capability.</div>
                                        </div>
                                    </div>
                                    <div className="flex md:gap-6 gap-4 items-start md:p-6 rounded-xl duration-300 hover:lg:bg-gradient-to-r hover:lg:from-[#153C5E] hover:lg:to-[#08101D]">
                                        <div className="md:size-14 size-12 flex items-center justify-center shrink-0 rounded-xl bg-[#2D86FF]">
                                            <x-icon name="blockchain" className="size-8 text-white" />
                                        </div>
                                        <div className="w-full flex flex-col md:gap-3 gap-1">
                                            <h3 className="w-full xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-white">Blockchain</h3>
                                            <div className="w-full md:text-sm text-xs font-normal text-white">Keep your customers and business’s data safe by utilizing Blockchain Technology. Its decentralized network protects the data from any type of cyber and data-stealing threat and improves transparency.</div>
                                        </div>
                                    </div>
                                    <div className="flex md:gap-6 gap-4 items-start md:p-6 rounded-xl duration-300 hover:lg:bg-gradient-to-r hover:lg:from-[#153C5E] hover:lg:to-[#08101D]">
                                        <div className="md:size-14 size-12 flex items-center justify-center shrink-0 rounded-xl bg-[#2D86FF]">
                                            <x-icon name="machinelearning" className="size-8 text-white" />
                                        </div>
                                        <div className="w-full flex flex-col md:gap-3 gap-1">
                                            <h3 className="w-full xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-white">Machine Learning</h3>
                                            <div className="w-full md:text-sm text-xs font-normal text-white">Our Machine Learning based taxi app solutions help to optimize ride distribution, better resource utilization, services personalization and enable drivers to cater to multiple passengers at the same time.</div>
                                        </div>
                                    </div>
                                    <div className="flex md:gap-6 gap-4 items-start md:p-6 rounded-xl duration-300 hover:lg:bg-gradient-to-r hover:lg:from-[#153C5E] hover:lg:to-[#08101D]">
                                        <div className="md:size-14 size-12 flex items-center justify-center shrink-0 rounded-xl bg-[#2D86FF]">
                                            <x-icon name="dataScience" className="size-8 text-white" />
                                        </div>
                                        <div className="w-full flex flex-col md:gap-3 gap-1">
                                            <h3 className="w-full xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-white">AR-VR</h3>
                                            <div className="w-full md:text-sm text-xs font-normal text-white">Using AR-VR technology, we create innovative ride-hailing solutions that allow end-users to experience the vehicle and route in a virtual environment before they start their ride.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="cta1Section w-full relative overflow-hidden bg-[#050505] flex flex-col">
                <div className="!container flex relative">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-wrap justify-between xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                            <div className="lg:w-6/12 md:w-5/12 w-full xl:py-16 lg:py-14 md:py-12 sm:py-10">
                                <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-medium text-white text-balance relative z-10 max-md:text-center">Kickstart your Online Taxi Booking Business Today!</h2>
                                <div className="w-full md:pt-6 pt-4 max-md:text-center">
                                    <label htmlFor="leadPopup" className="cursor-pointer xl:text-base sm:text-sm text-xs md:font-semibold font-medium text-white inline-flex items-center xl:py-3 sm:py-2.5 py-2 xl:ps-6 sm:ps-4 ps-3 xl:pe-3 sm:pe-2.5 pe-1.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#4E93FF] to-[#1C67FF] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#1C67FF] group/btn">
                                        <span>Consult Our Experts</span>
                                        <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#4E93FF] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                            <x-icon name="arrowCall" className="size-3 relative z-10 text-[#1C67FF]" />
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-6/12 md:w-7/12 w-full rounded-3xl flex items-center justify-center md:absolute relative right-0 inset-y-0 max-md:order-first max-md:aspect-video max-sm:aspect-[16/12]">
                    <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/carMaps.webp" alt="Kickstart your Online Taxi Booking Business Today!" title="Kickstart your Online Taxi Booking Business Today!" width="763" height="422" className="size-full object-cover object-right aspect-[763/422]" />
                </div>
            </section>

            <section className="appLookLikeSection w-full relative overflow-hidden bg-[#131514]">
                <div className="!container flex xl:pt-16 lg:pt-14 md:pt-12 sm:pt-10 pt-8 max-sm:!px-0">
                    <div className="flex flex-col w-full">
                        <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-white text-balance relative z-10 text-center max-sm:px-4">Your Next Taxi Booking Mobile App Could Look Like This</h2>
                        <div className="swiper flex xl:w-7/12 lg:w-3/4 w-full -mt-6 xl:!py-16 lg:!py-14 !py-12 before:absolute before:left-0 before:h-full before:w-1/4 before:bg-gradient-to-r before:from-[#131514]/60 before:to-transparent before:z-10 before:pointer-events-none after:absolute after:right-0 after:h-full after:w-1/4 after:bg-gradient-to-l after:from-[#131514]/60 after:to-transparent after:z-10 after:pointer-events-none"
                                data-swiper='{
                                    "slidesPerView": 1.6,
                                    "spaceBetween": 8,
                                    "speed": 1000,
                                    "loop": true,
                                    "centeredSlides": true,
                                    "keyboard": {"enabled": true},
                                    "breakpoints": {
                                        "320": {"slidesPerView": 1.6, "spaceBetween": 8},
                                        "480": {"slidesPerView": 1.6, "spaceBetween": 16},
                                        "640": {"slidesPerView": 2, "spaceBetween": 16},
                                        "1024": {"slidesPerView": 3, "spaceBetween": 32},
                                        "1350": {"slidesPerView": 3, "spaceBetween": 32}
                                    }
                                }'
/>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide relative lg:p-[1.2%] md:p-[2.2%] p-[2.7%] group [&.swiper-slide-active]:!scale-100 md:!scale-95 !scale-90 duration-300">
                                    <x-icon name="blackMobileFrame" className="size-full object-contain object-center absolute inset-0 text-[#404040] opacity-0 group-[&.swiper-slide-active]:opacity-100 scale-125 group-[&.swiper-slide-active]:scale-100 duration-300" />
                                    <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiLookLike1.webp" alt="Taxi App Look like" title="Taxi App Look like" className="size-full object-contain object-center" />
                                </div>
                                <div className="swiper-slide relative lg:p-[1.2%] md:p-[2.2%] p-[2.7%] group [&.swiper-slide-active]:!scale-100 md:!scale-95 !scale-90 duration-300">
                                    <x-icon name="blackMobileFrame" className="size-full object-contain object-center absolute inset-0 text-[#404040] opacity-0 group-[&.swiper-slide-active]:opacity-100 scale-125 group-[&.swiper-slide-active]:scale-100 duration-300" />
                                    <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiLookLike2.webp" alt="Taxi App Look like" title="Taxi App Look like" className="size-full object-contain object-center" />
                                </div>
                                <div className="swiper-slide relative lg:p-[1.2%] md:p-[2.2%] p-[2.7%] group [&.swiper-slide-active]:!scale-100 md:!scale-95 !scale-90 duration-300">
                                    <x-icon name="blackMobileFrame" className="size-full object-contain object-center absolute inset-0 text-[#404040] opacity-0 group-[&.swiper-slide-active]:opacity-100 scale-125 group-[&.swiper-slide-active]:scale-100 duration-300" />
                                    <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiLookLike3.webp" alt="Taxi App Look like" title="Taxi App Look like" className="size-full object-contain object-center" />
                                </div>
                                <div className="swiper-slide relative lg:p-[1.2%] md:p-[2.2%] p-[2.7%] group [&.swiper-slide-active]:!scale-100 md:!scale-95 !scale-90 duration-300">
                                    <x-icon name="blackMobileFrame" className="size-full object-contain object-center absolute inset-0 text-[#404040] opacity-0 group-[&.swiper-slide-active]:opacity-100 scale-125 group-[&.swiper-slide-active]:scale-100 duration-300" />
                                    <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiLookLike4.webp" alt="Taxi App Look like" title="Taxi App Look like" className="size-full object-contain object-center" />
                                </div>
                                <div className="swiper-slide relative lg:p-[1.2%] md:p-[2.2%] p-[2.7%] group [&.swiper-slide-active]:!scale-100 md:!scale-95 !scale-90 duration-300">
                                    <x-icon name="blackMobileFrame" className="size-full object-contain object-center absolute inset-0 text-[#404040] opacity-0 group-[&.swiper-slide-active]:opacity-100 scale-125 group-[&.swiper-slide-active]:scale-100 duration-300" />
                                    <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiLookLike5.webp" alt="Taxi App Look like" title="Taxi App Look like" className="size-full object-contain object-center" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="processSection w-full relative overflow-hidden bg-white">
                <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                    <div className="flex flex-col w-full">
                        <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-[#454444] text-balance relative z-10 md:text-center md:pb-4 pb-2">The Process We Follow to Develop the Ultimate Taxi Booking App Development</h2>
                        <div className="w-full 2xl:text-lg xl:text-base md:text-sm text-xs md:font-medium font-normal text-[#454444] text-balance relative z-10 md:text-center md:pb-12 pb-5">Our Taxi Booking app development process is simple and transparent, designed to prioritize client satisfaction above all else. We meticulously handle every step with precision to ensure exceptional results. Here's how we craft Taxi Booking apps tailored to meet the needs of our valued clients.</div>
                        <div className="flex flex-wrap w-full max-lg:gap-y-8">
                            <div className="w-full pt-8">
                                <div className="flex max-md:flex-col overflow-x-auto py-16 px-8 -my-10">
                                    <div className="
                                        relative rounded-[50px] text-center -m-[2px] max-xl:min-w-[300px] xl:w-1/5 md:hover:bg-white md:hover:shadow-2xl md:hover:shadow-pink-500 duration-300
                                        
                                        md:before:rounded-b-[50px] max-md:before:rounded-l-[50px] before:absolute before:inset-0 md:before:top-1/4 before:z-10 md:before:border-l-4 md:before:border-b-4 max-md:before:right-1/4 max-md:before:border-l-4 max-md:before:border-t-4 before:border-pink-500
                                        
                                        md:after:rounded-b-[50px] max-md:after:rounded-l-[50px] after:absolute after:inset-0 md:after:top-1/2 after:z-10 md:after:border-r-4 md:after:border-b-4 max-md:after:right-1/2 max-md:after:border-l-4 max-md:after:border-b-4 after:border-pink-500
                                        ">
                                        <div className="flex rounded-[50px] flex-col p-4 relative h-full 
                                            
                                            before:absolute md:before:left-[1.5px] md:before:top-1/4 md:before:-translate-x-1/2 md:before:-translate-y-full max-md:before:top-[1.5px] max-md:before:right-1/4 max-md:before:-translate-y-1/2 max-md:before:translate-x-full before:z-20 before:text-pink-500 before:bg-white before:content-['Start'] md:before:font-extrabold max-md:before:font-semibold md:before:text-sm max-md:before:text-xs before:uppercase before:rounded-full md:before:ring-4 max-md:before:ring-2 before:ring-pink-500 before:ring-offset-4 md:before:[writing-mode:tb]
                                            
                                            after:absolute after:rounded-full md:after:right-0 md:after:inset-y-0 md:after:m-auto md:after:translate-x-[calc(50%-2px)] md:after:-translate-y-[calc(50%-2px)] max-md:after:bottom-[1.5px] max-md:after:right-1/2 max-md:after:translate-x-1/2 max-md:after:translate-y-1/2 after:z-20 after:size-4 after:ring-4 after:ring-pink-500 after:bg-white
                                            ">
                                            <div className="w-full pb-3">
                                                <Image
                                                    className="xl:size-20 size-14 mx-auto object-contain"
                                                    
                                                    width="80"
                                                    height="80"
                                                    
                                                    loading="lazy" fetchpriority="low" src="https://d1y41eupgbwbb2.cloudfront.net/images/app-step1.webp"
                                                    alt="Planning & Research"
                                                    title="Planning & Research"
/>
                                            </div>
                                            <h3 className="w-full xl:text-xl md:text-lg text-base font-semibold pb-2">Planning & Research</h3>
                                            <div className="flex justify-center">
                                                <ul className="list-disc xl:text-sm text-xs ml-5 flex flex-col gap-2 text-left">
                                                    <li>Idea Brainstorming</li>
                                                    <li>Trend Analysis</li>
                                                    <li>Competitor Analysis</li>
                                                    <li>Idea Validation</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="
                                        relative rounded-[50px] text-center -m-[2px] max-xl:min-w-[300px] xl:w-1/5 md:hover:bg-white md:hover:shadow-2xl md:hover:shadow-purple-500 duration-300
                                        
                                        md:before:rounded-t-[50px] max-md:before:rounded-r-[50px] before:absolute before:inset-0 md:before:bottom-1/2 max-md:before:left-1/2 before:z-10 md:before:border-l-4 md:before:border-t-4 max-md:before:border-b-4 max-md:before:border-r-4 before:border-purple-500
                                        
                                        md:after:rounded-t-[50px] max-md:after:rounded-r-[50px] after:absolute after:inset-0 md:after:bottom-1/2 max-md:after:left-1/2 after:z-10 md:after:border-r-4 md:after:border-t-4 max-md:after:border-r-4 max-md:after:border-t-4 after:border-purple-500
                                        ">
                                        <div className="flex rounded-[50px] flex-col p-4 relative h-full 
                                            
                                            before:absolute before:rounded-full md:before:left-0 md:before:inset-y-0 md:before:my-auto md:before:translate-x-[calc(50%-2px)] md:before:translate-y-[calc(-50%-4px)] max-md:before:top-[2px] max-md:before:right-1/2 max-md:before:-translate-y-1/2 max-md:before:translate-x-1/2 before:z-20 before:size-1 before:ring-4 before:ring-purple-500 before:bg-white
                                            
                                            after:absolute after:rounded-full md:after:right-0 md:after:inset-y-0 md:after:my-auto md:after:translate-x-[calc(50%-2px)] md:after:translate-y-[calc(-50%+2px)] max-md:after:bottom-[1.5px] max-md:after:left-1/2 max-md:after:translate-y-1/2 max-md:after:-translate-x-1/2 after:z-20 after:size-4 after:ring-4 after:ring-purple-500 after:bg-white
                                            ">
                                            <div className="w-full pb-3">
                                                <Image
                                                    className="xl:size-20 size-14 mx-auto object-contain"
                                                    
                                                    width="80"
                                                    height="80"
                                                    
                                                    loading="lazy" fetchpriority="low" src="https://d1y41eupgbwbb2.cloudfront.net/images/app-step2.webp"
                                                    alt="Wireframing & Designing"
                                                    title="Wireframing & Designing"
/>
                                            </div>
                                            <h3 className="w-full xl:text-xl md:text-lg text-base font-semibold pb-2">Wireframing & Designing</h3>
                                            {{-- <div className="w-full md:text-base text-sm font-semibold pb-3">Be the User</div> --}}
                                            <div className="flex justify-center">
                                                <ul className="list-disc xl:text-sm text-xs ml-5 flex flex-col gap-2 text-left">
                                                    <li>Sketches and Wireframes of screens</li>
                                                    <li>Theme Implementation</li>
                                                    <li>Incorporating Client Feedback</li>
                                                    <li>UI/UX Implementation.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="
                                        relative rounded-[50px] text-center -m-[2px] max-xl:min-w-[300px] xl:w-1/5 md:hover:bg-white md:hover:shadow-2xl md:hover:shadow-indigo-500 duration-300
                                        
                                        md:before:rounded-b-[50px] max-md:before:rounded-l-[50px] before:absolute before:inset-0 md:before:top-1/2 max-md:before:right-1/2 before:z-10 md:before:border-l-4 md:before:border-b-4 max-md:before:border-l-4 max-md:before:border-b-4 before:border-indigo-500
                                        
                                        md:after:rounded-b-[50px] max-md:after:rounded-l-[50px] after:absolute after:inset-0 md:after:top-1/2 max-md:after:right-1/2 after:z-10 md:after:border-r-4 md:after:border-b-4 max-md:after:border-l-4 max-md:after:border-t-4 after:border-indigo-500
                                        ">
                                        <div className="flex rounded-[50px] flex-col p-4 relative h-full 
                                            
                                            before:absolute before:rounded-full md:before:left-0 md:before:inset-y-0 md:before:my-auto md:before:translate-x-[calc(50%-2px)] md:before:translate-y-[calc(-50%-4px)] max-md:before:top-[2px] max-md:before:left-1/2 max-md:before:-translate-y-1/2 max-md:before:-translate-x-1/2 before:z-20 before:size-1 before:ring-4 before:ring-indigo-500 before:bg-white
                                            
                                            after:absolute after:rounded-full md:after:right-0 md:after:inset-y-0 md:after:my-auto md:after:translate-x-[calc(50%-2px)] md:after:translate-y-[calc(-50%+2px)] max-md:after:bottom-[1.5px] max-md:after:left-1/2 max-md:after:translate-y-1/2 max-md:after:-translate-x-1/2 after:z-20 after:size-4 after:ring-4 after:ring-indigo-500 after:bg-white
                                            ">
                                            <div className="w-full pb-3">
                                                <Image
                                                    className="xl:size-20 size-14 mx-auto object-contain"
                                                    
                                                    width="80"
                                                    height="80"
                                                    
                                                    loading="lazy" fetchpriority="low" src="https://d1y41eupgbwbb2.cloudfront.net/images/app-step3.webp"
                                                    alt="Development & Integrations"
                                                    title="Development & Integrations"
/>
                                            </div>
                                            <h3 className="w-full xl:text-xl md:text-lg text-base font-semibold pb-2">Development & Integrations</h3>
                                            {{-- <div className="w-full md:text-base text-sm font-semibold pb-3">Make it Simple</div> --}}
                                            <div className="flex justify-center">
                                                <ul className="list-disc xl:text-sm text-xs ml-5 flex flex-col gap-2 text-left">
                                                    <li>Developing Front & Backend</li>
                                                    <li>Integrate Features & Add-ons</li>
                                                    <li>Structuring Multiple Panels</li>
                                                    <li>Feedback on Each Milestone.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="
                                        relative rounded-[50px] text-center -m-[2px] max-xl:min-w-[300px] xl:w-1/5 md:hover:bg-white md:hover:shadow-2xl md:hover:shadow-sky-500 duration-300
                                        
                                        md:before:rounded-t-[50px] max-md:before:rounded-r-[50px] before:absolute before:inset-0 md:before:bottom-1/2 max-md:before:left-1/2 before:z-10 md:before:border-l-4 md:before:border-t-4 max-md:before:border-r-4 max-md:before:border-t-4 before:border-sky-500
                                        
                                        md:after:rounded-t-[50px] max-md:after:rounded-r-[50px] after:absolute after:inset-0 md:after:bottom-1/2 max-md:after:left-1/2 after:z-10 md:after:border-r-4 md:after:border-t-4 max-md:after:border-r-4 max-md:after:border-b-4 after:border-sky-500
                                        ">
                                        <div className="flex rounded-[50px] flex-col p-4 relative h-full 
                                            
                                            before:absolute before:rounded-full md:before:left-0 md:before:inset-y-0 md:before:my-auto md:before:translate-x-[calc(50%-2px)] md:before:translate-y-[calc(-50%-4px)] max-md:before:top-[2px] max-md:before:left-1/2 max-md:before:-translate-y-1/2 max-md:before:-translate-x-1/2 before:z-20 before:size-1 before:ring-4 before:ring-sky-500 before:bg-white
                                            
                                            after:absolute after:rounded-full md:after:right-0 md:after:inset-y-0 md:after:my-auto md:after:translate-x-[calc(50%-2px)] md:after:translate-y-[calc(-50%+2px)] max-md:after:bottom-[1.5px] max-md:after:left-1/2 max-md:after:translate-y-1/2 max-md:after:-translate-x-1/2 after:z-20 after:size-4 after:ring-4 after:ring-sky-500 after:bg-white
                                            ">
                                            <div className="w-full pb-3">
                                                <Image
                                                    className="xl:size-20 size-14 mx-auto object-contain"
                                                    
                                                    width="80"
                                                    height="80"
                                                    
                                                    loading="lazy" fetchpriority="low" src="https://d1y41eupgbwbb2.cloudfront.net/images/app-step4.webp"
                                                    alt="Quality Assurance"
                                                    title="Quality Assurance"
/>
                                            </div>
                                            <h3 className="w-full xl:text-xl md:text-lg text-base font-semibold pb-2">Quality Assurance</h3>
                                            {{-- <div className="w-full md:text-base text-sm font-semibold pb-3">Data Don't Lie</div> --}}
                                            <div className="flex justify-center">
                                                <ul className="list-disc xl:text-sm text-xs ml-5 flex flex-col gap-2 text-left">
                                                    <li>Code Review</li>
                                                    <li>Checking App's Responsiveness</li>
                                                    <li>Identifying and Fixing Bugs & Security Issues</li>
                                                    <li>Complete Quality Analysis.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="
                                        relative rounded-[50px] text-center -m-[2px] max-xl:min-w-[300px] xl:w-1/5 md:hover:bg-white md:hover:shadow-2xl md:hover:shadow-teal-500 duration-300
                                        
                                        md:before:rounded-b-[50px] max-md:before:rounded-l-[50px] before:absolute before:inset-0 md:before:top-1/2 max-md:before:right-1/2 before:z-10 md:before:border-l-4 md:before:border-b-4 max-md:before:border-l-4 max-md:before:border-t-4 before:border-teal-500
                                        
                                        md:after:rounded-b-[50px] max-md:after:rounded-l-[50px] after:absolute after:inset-0 md:after:top-1/4 max-md:after:right-1/4 after:z-10 md:after:border-r-4 md:after:border-b-4 max-md:after:border-l-4 max-md:after:border-b-4 after:border-teal-500
                                        ">
                                        <div className="flex rounded-[50px] flex-col p-4 relative h-full 
                                            
                                            before:absolute before:rounded-full md:before:left-0 md:before:inset-y-0 md:before:my-auto md:before:translate-x-[calc(50%-2px)] md:before:translate-y-[calc(-50%-4px)] max-md:before:top-[2px] max-md:before:right-1/2 max-md:before:-translate-y-1/2 max-md:before:translate-x-1/2 before:z-20 before:size-1 before:ring-4 before:ring-teal-500 before:bg-white
                                            
                                            after:absolute md:after:right-[1.5px] md:after:top-1/4 md:after:translate-x-1/2 md:after:-translate-y-full max-md:after:bottom-[1.5px] max-md:after:right-1/4 max-md:after:translate-y-1/2 max-md:after:translate-x-full after:z-20 after:text-teal-500 after:bg-white after:content-['End'] md:after:font-extrabold max-md:after:font-semibold md:after:text-sm max-md:after:text-xs after:uppercase after:rounded-full md:after:ring-4 max-md:after:ring-2 after:ring-teal-500 after:ring-offset-4 md:after:[writing-mode:tb]
                                            ">
                                            <div className="w-full pb-3">
                                                <Image
                                                    className="xl:size-20 size-14 mx-auto object-contain"
                                                    
                                                    width="80"
                                                    height="80"
                                                    
                                                    loading="lazy" fetchpriority="low" src="https://d1y41eupgbwbb2.cloudfront.net/images/app-step5.webp"
                                                    alt="Launch & Maintenance"
                                                    title="Launch & Maintenance"
/>
                                            </div>
                                            <h3 className="w-full xl:text-xl md:text-lg text-base font-semibold pb-2">Launch & Maintenance</h3>
                                            {{-- <div className="w-full md:text-base text-sm font-semibold pb-3">Stick to the Design</div> --}}
                                            <div className="flex justify-center">
                                                <ul className="list-disc xl:text-sm text-xs ml-5 flex flex-col gap-2 text-left">
                                                    <li>Perfect App Launch Plan</li>
                                                    <li>Deployment on App Stores</li>
                                                    <li>Implementing Marketing Strategies</li>
                                                    <li>Post-Launch Support.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="whyChooseUsSection w-full group/cs relative bg-white">
                <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                    <div className="flex flex-col w-full">
                        <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-[#454444] text-balance relative z-10 md:text-center lg:pb-4 pb-8">Why Choose IMG Global Infotech As Your On Demand Taxi Booking App Development Company?</h2>
                        <div className="flex flex-wrap lg:items-center items-start justify-between">
                            <div className="xl:w-3/12 sm:w-4/12 w-7/12 lg:static sm:sticky top-32 max-sm:order-last">
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/taxiWhy.webp" width="341" height="414" alt="Why Choose IMG Global Infotech As Your On Demand Taxi Booking App Development Company?" title="Why Choose IMG Global Infotech As Your On Demand Taxi Booking App Development Company?" className="size-full object-contain object-center aspect-[341/414]" />
                            </div>
                            <div className="xl:w-8/12 sm:w-8/12 flex flex-wrap gap-y-5 -mx-2.5">
                                <div className="lg:w-1/2 w-full px-2.5">
                                    <div className="flex flex-col rounded-3xl size-full bg-white shadow-[0px_3px_34.5px_0px_#0000001F] p-6 relative">
                                        <x-icon name="plus" className="absolute bottom-0 lg:right-4 max-lg:right-6 lg:-translate-x-1/2 translate-y-1/2 size-6 text-[#FF6B39]" />
                                        <h3 className="xl:text-xl md:text-lg sm:text-base text-sm font-semibold text-[#454444] pb-1">Innovative White-Label Solution</h3>
                                        <p className="xl:text-base sm:text-sm text-xs font-normal text-[#626262]">As a trusted white-label car rental app development company, we assist our clients in launching their business up to 2x faster to the market with an advanced app.</p>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full px-2.5">
                                    <div className="flex flex-col rounded-3xl size-full bg-white shadow-[0px_3px_34.5px_0px_#0000001F] p-6 relative">
                                        <x-icon name="plus" className="absolute lg:top-0 max-lg:bottom-0 lg:right-8 lg:-translate-x-1/2 lg:-translate-y-1/2 max-lg:translate-y-1/2 size-6 text-[#2D86FF]" />
                                        <h3 className="xl:text-xl md:text-lg sm:text-base text-sm font-semibold text-[#454444] pb-1">Seamless Integrations</h3>
                                        <p className="xl:text-base sm:text-sm text-xs font-normal text-[#626262]">Whatever integrations you need in your app, from payment gateways to third-party APIs, we’re here to make it easy for you.</p>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full px-2.5">
                                    <div className="flex flex-col rounded-3xl size-full bg-white shadow-[0px_3px_34.5px_0px_#0000001F] p-6 relative">
                                        <x-icon name="plus" className="absolute bottom-0 lg:left-8 max-lg:right-6 lg:translate-x-1/2 translate-y-1/2 size-6 text-[#FF6B39]" />
                                        <h3 className="xl:text-xl md:text-lg sm:text-base text-sm font-semibold text-[#454444] pb-1">Post Launch Support</h3>
                                        <p className="xl:text-base sm:text-sm text-xs font-normal text-[#626262]">We support our customers throughout the entire process. Our responsibilities don’t end at deployment; we are here to provide you post-launch support also.</p>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full px-2.5">
                                    <div className="flex flex-col rounded-3xl size-full bg-white shadow-[0px_3px_34.5px_0px_#0000001F] p-6 relative">
                                        <x-icon name="plus" className="absolute lg:top-0 max-lg:bottom-0 lg:left-6 lg:translate-x-1/2 lg:-translate-y-1/2 max-lg:translate-y-1/2 size-6 text-[#2D86FF]" />
                                        <h3 className="xl:text-xl md:text-lg sm:text-base text-sm font-semibold text-[#454444] pb-1">Powerful Features</h3>
                                        <p className="xl:text-base sm:text-sm text-xs font-normal text-[#626262]">We empower our clients with powerful and advanced features that help them to serve their customers, manage their staff, and manage operations better.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="otherServicesSection w-full relative overflow-hidden bg-[#050505]">
                <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                    <div className="flex flex-col w-full">
                        <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-white text-balance relative z-10 text-center md:pb-4 pb-2">Other On-Demand App Development Services Offered by Us</h2>
                        <div className="w-full 2xl:text-lg xl:text-base md:text-sm text-xs md:font-medium font-normal text-white text-balance relative z-10 text-center md:pb-12 pb-5">As we said, we strive to offer everything you need for your business under one roof for higher quality and faster delivery.</div>
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 2xl:gap-9 lg:gap-7 md:gap-5 gap-4 w-full relative z-10">
                            <a href="{{asset('healthcare-app-development.php')}}" className="w-full cursor-pointer flex items-center 2xl:rounded-3xl md:rounded-2xl rounded-xl 2xl:p-5 md:p-4 p-3 2xl:gap-5 md:gap-3 gap-2 bg-gradient-to-br from-[#C3C3C0] to-[#000000] relative before:absolute 2xl:before:inset-[2.75px] md:before:inset-[2px] before:inset-[1.38px] hover:lg:before:inset-1.5 before:duration-300 2xl:before:rounded-[22px] md:before:rounded-[14px] before:rounded-[10px] before:bg-[#050505] before:m-auto before:z-0 after:absolute 2xl:after:inset-[2.75px] md:after:inset-[2px] after:inset-[1.38px] hover:lg:after:inset-1.5 after:duration-300 2xl:after:rounded-[22px] md:after:rounded-[14px] after:rounded-[10px] after:bg-gradient-to-b after:from-[#ffffff24] after:via-[#efe2ff12] after:to-[#e9f6fc24] after:m-auto after:z-[1]">
                                <div className="2xl:size-24 md:size-12 size-9 flex relative z-10 items-center justify-center 2xl:rounded-2xl md:rounded-xl rounded-lg shrink-0 bg-gradient-to-b from-[#ffffff24] via-[#efe2ff12] to-[#e9f6fc24]">
                                    <x-icon name="heartBeat" className="2xl:size-14 md:size-8 size-5 relative z-10 text-white" />
                                </div>
                                <h3 className="w-full 22xl:text-xl 2xl:text-lg lg:text-base md:text-sm text-xs font-semibold text-white/80 text-balance relative z-10">Health Care Service App</h3>
                            </a>
                            <a href="{{asset('food-delivery-app-development.php')}}" className="w-full cursor-pointer flex items-center 2xl:rounded-3xl md:rounded-2xl rounded-xl 2xl:p-5 md:p-4 p-3 2xl:gap-5 md:gap-3 gap-2 bg-gradient-to-br from-[#C3C3C0] to-[#000000] relative before:absolute 2xl:before:inset-[2.75px] md:before:inset-[2px] before:inset-[1.38px] hover:lg:before:inset-1.5 before:duration-300 2xl:before:rounded-[22px] md:before:rounded-[14px] before:rounded-[10px] before:bg-[#050505] before:m-auto before:z-0 after:absolute 2xl:after:inset-[2.75px] md:after:inset-[2px] after:inset-[1.38px] hover:lg:after:inset-1.5 after:duration-300 2xl:after:rounded-[22px] md:after:rounded-[14px] after:rounded-[10px] after:bg-gradient-to-b after:from-[#ffffff24] after:via-[#efe2ff12] after:to-[#e9f6fc24] after:m-auto after:z-[1]">
                                <div className="2xl:size-24 md:size-12 size-9 flex relative z-10 items-center justify-center 2xl:rounded-2xl md:rounded-xl rounded-lg shrink-0 bg-gradient-to-b from-[#ffffff24] via-[#efe2ff12] to-[#e9f6fc24]">
                                    <x-icon name="burger" className="2xl:size-14 md:size-8 size-5 relative z-10 text-white" />
                                </div>
                                <h3 className="w-full 22xl:text-xl 2xl:text-lg lg:text-base md:text-sm text-xs font-semibold text-white/80 text-balance relative z-10">Food Delivery Mobile App</h3>
                            </a>
                            <a href="{{asset('medicine-delivery-app-development.php')}}" className="w-full cursor-pointer flex items-center 2xl:rounded-3xl md:rounded-2xl rounded-xl 2xl:p-5 md:p-4 p-3 2xl:gap-5 md:gap-3 gap-2 bg-gradient-to-br from-[#C3C3C0] to-[#000000] relative before:absolute 2xl:before:inset-[2.75px] md:before:inset-[2px] before:inset-[1.38px] hover:lg:before:inset-1.5 before:duration-300 2xl:before:rounded-[22px] md:before:rounded-[14px] before:rounded-[10px] before:bg-[#050505] before:m-auto before:z-0 after:absolute 2xl:after:inset-[2.75px] md:after:inset-[2px] after:inset-[1.38px] hover:lg:after:inset-1.5 after:duration-300 2xl:after:rounded-[22px] md:after:rounded-[14px] after:rounded-[10px] after:bg-gradient-to-b after:from-[#ffffff24] after:via-[#efe2ff12] after:to-[#e9f6fc24] after:m-auto after:z-[1]">
                                <div className="2xl:size-24 md:size-12 size-9 flex relative z-10 items-center justify-center 2xl:rounded-2xl md:rounded-xl rounded-lg shrink-0 bg-gradient-to-b from-[#ffffff24] via-[#efe2ff12] to-[#e9f6fc24]">
                                    <x-icon name="medicines" className="2xl:size-14 md:size-8 size-5 relative z-10 text-white" />
                                </div>
                                <h3 className="w-full 22xl:text-xl 2xl:text-lg lg:text-base md:text-sm text-xs font-semibold text-white/80 text-balance relative z-10">Medicine Delivery App</h3>
                            </a>
                            <a href="{{asset('salon-app-development.php')}}" className="w-full cursor-pointer flex items-center 2xl:rounded-3xl md:rounded-2xl rounded-xl 2xl:p-5 md:p-4 p-3 2xl:gap-5 md:gap-3 gap-2 bg-gradient-to-br from-[#C3C3C0] to-[#000000] relative before:absolute 2xl:before:inset-[2.75px] md:before:inset-[2px] before:inset-[1.38px] hover:lg:before:inset-1.5 before:duration-300 2xl:before:rounded-[22px] md:before:rounded-[14px] before:rounded-[10px] before:bg-[#050505] before:m-auto before:z-0 after:absolute 2xl:after:inset-[2.75px] md:after:inset-[2px] after:inset-[1.38px] hover:lg:after:inset-1.5 after:duration-300 2xl:after:rounded-[22px] md:after:rounded-[14px] after:rounded-[10px] after:bg-gradient-to-b after:from-[#ffffff24] after:via-[#efe2ff12] after:to-[#e9f6fc24] after:m-auto after:z-[1]">
                                <div className="2xl:size-24 md:size-12 size-9 flex relative z-10 items-center justify-center 2xl:rounded-2xl md:rounded-xl rounded-lg shrink-0 bg-gradient-to-b from-[#ffffff24] via-[#efe2ff12] to-[#e9f6fc24]">
                                    <x-icon name="petGroomingDevelopment" className="2xl:size-14 md:size-8 size-5 relative z-10 text-white" />
                                </div>
                                <h3 className="w-full 22xl:text-xl 2xl:text-lg lg:text-base md:text-sm text-xs font-semibold text-white/80 text-balance relative z-10">Beauty & Saloon App</h3>
                            </a>
                            <a href="{{asset('laundry-services-app-development.php')}}" className="w-full cursor-pointer flex items-center 2xl:rounded-3xl md:rounded-2xl rounded-xl 2xl:p-5 md:p-4 p-3 2xl:gap-5 md:gap-3 gap-2 bg-gradient-to-br from-[#C3C3C0] to-[#000000] relative before:absolute 2xl:before:inset-[2.75px] md:before:inset-[2px] before:inset-[1.38px] hover:lg:before:inset-1.5 before:duration-300 2xl:before:rounded-[22px] md:before:rounded-[14px] before:rounded-[10px] before:bg-[#050505] before:m-auto before:z-0 after:absolute 2xl:after:inset-[2.75px] md:after:inset-[2px] after:inset-[1.38px] hover:lg:after:inset-1.5 after:duration-300 2xl:after:rounded-[22px] md:after:rounded-[14px] after:rounded-[10px] after:bg-gradient-to-b after:from-[#ffffff24] after:via-[#efe2ff12] after:to-[#e9f6fc24] after:m-auto after:z-[1]">
                                <div className="2xl:size-24 md:size-12 size-9 flex relative z-10 items-center justify-center 2xl:rounded-2xl md:rounded-xl rounded-lg shrink-0 bg-gradient-to-b from-[#ffffff24] via-[#efe2ff12] to-[#e9f6fc24]">
                                    <x-icon name="deryClean" className="2xl:size-14 md:size-8 size-5 relative z-10 text-white" />
                                </div>
                                <h3 className="w-full 22xl:text-xl 2xl:text-lg lg:text-base md:text-sm text-xs font-semibold text-white/80 text-balance relative z-10">Laundry Service App</h3>
                            </a>
                            <a href="{{asset('car-wash-app-development.php')}}" className="w-full cursor-pointer flex items-center 2xl:rounded-3xl md:rounded-2xl rounded-xl 2xl:p-5 md:p-4 p-3 2xl:gap-5 md:gap-3 gap-2 bg-gradient-to-br from-[#C3C3C0] to-[#000000] relative before:absolute 2xl:before:inset-[2.75px] md:before:inset-[2px] before:inset-[1.38px] hover:lg:before:inset-1.5 before:duration-300 2xl:before:rounded-[22px] md:before:rounded-[14px] before:rounded-[10px] before:bg-[#050505] before:m-auto before:z-0 after:absolute 2xl:after:inset-[2.75px] md:after:inset-[2px] after:inset-[1.38px] hover:lg:after:inset-1.5 after:duration-300 2xl:after:rounded-[22px] md:after:rounded-[14px] after:rounded-[10px] after:bg-gradient-to-b after:from-[#ffffff24] after:via-[#efe2ff12] after:to-[#e9f6fc24] after:m-auto after:z-[1]">
                                <div className="2xl:size-24 md:size-12 size-9 flex relative z-10 items-center justify-center 2xl:rounded-2xl md:rounded-xl rounded-lg shrink-0 bg-gradient-to-b from-[#ffffff24] via-[#efe2ff12] to-[#e9f6fc24]">
                                    <x-icon name="carWash" className="2xl:size-14 md:size-8 size-5 relative z-10 text-white" />
                                </div>
                                <h3 className="w-full 22xl:text-xl 2xl:text-lg lg:text-base md:text-sm text-xs font-semibold text-white/80 text-balance relative z-10">Car Wash Mobile App</h3>
                            </a>
                            <a href="{{asset('/doctor-on-demand-app-development.php')}}" className="w-full cursor-pointer flex items-center 2xl:rounded-3xl md:rounded-2xl rounded-xl 2xl:p-5 md:p-4 p-3 2xl:gap-5 md:gap-3 gap-2 bg-gradient-to-br from-[#C3C3C0] to-[#000000] relative before:absolute 2xl:before:inset-[2.75px] md:before:inset-[2px] before:inset-[1.38px] hover:lg:before:inset-1.5 before:duration-300 2xl:before:rounded-[22px] md:before:rounded-[14px] before:rounded-[10px] before:bg-[#050505] before:m-auto before:z-0 after:absolute 2xl:after:inset-[2.75px] md:after:inset-[2px] after:inset-[1.38px] hover:lg:after:inset-1.5 after:duration-300 2xl:after:rounded-[22px] md:after:rounded-[14px] after:rounded-[10px] after:bg-gradient-to-b after:from-[#ffffff24] after:via-[#efe2ff12] after:to-[#e9f6fc24] after:m-auto after:z-[1]">
                                <div className="2xl:size-24 md:size-12 size-9 flex relative z-10 items-center justify-center 2xl:rounded-2xl md:rounded-xl rounded-lg shrink-0 bg-gradient-to-b from-[#ffffff24] via-[#efe2ff12] to-[#e9f6fc24]">
                                    <x-icon name="specialtyMedicine" className="2xl:size-14 md:size-8 size-5 relative z-10 text-white" />
                                </div>
                                <h3 className="w-full 22xl:text-xl 2xl:text-lg lg:text-base md:text-sm text-xs font-semibold text-white/80 text-balance relative z-10">Doctor on Demand App</h3>
                            </a>
                            <a href="{{asset('grocery-app-development.php')}}" className="w-full cursor-pointer flex items-center 2xl:rounded-3xl md:rounded-2xl rounded-xl 2xl:p-5 md:p-4 p-3 2xl:gap-5 md:gap-3 gap-2 bg-gradient-to-br from-[#C3C3C0] to-[#000000] relative before:absolute 2xl:before:inset-[2.75px] md:before:inset-[2px] before:inset-[1.38px] hover:lg:before:inset-1.5 before:duration-300 2xl:before:rounded-[22px] md:before:rounded-[14px] before:rounded-[10px] before:bg-[#050505] before:m-auto before:z-0 after:absolute 2xl:after:inset-[2.75px] md:after:inset-[2px] after:inset-[1.38px] hover:lg:after:inset-1.5 after:duration-300 2xl:after:rounded-[22px] md:after:rounded-[14px] after:rounded-[10px] after:bg-gradient-to-b after:from-[#ffffff24] after:via-[#efe2ff12] after:to-[#e9f6fc24] after:m-auto after:z-[1]">
                                <div className="2xl:size-24 md:size-12 size-9 flex relative z-10 items-center justify-center 2xl:rounded-2xl md:rounded-xl rounded-lg shrink-0 bg-gradient-to-b from-[#ffffff24] via-[#efe2ff12] to-[#e9f6fc24]">
                                    <x-icon name="customMedicine" className="2xl:size-14 md:size-8 size-5 relative z-10 text-white" />
                                </div>
                                <h3 className="w-full 22xl:text-xl 2xl:text-lg lg:text-base md:text-sm text-xs font-semibold text-white/80 text-balance relative z-10">Grocery Delivery App</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

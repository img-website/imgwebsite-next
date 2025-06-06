"use client";

import Svg from "@/components/svg";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide, Navigation, Autoplay } from '@/components/CustomSwiper';


export default function InstantDeliveryAppDevelopmentCompany() {
    return (
        <>
            <section className="heroSection xl:pt-[116px] lg:pt-[90px] md:pt-[88px] pt-16 relative overflow-hidden md:min-h-dvh max-md:!h-auto flex flex-col max-md:pb-6 bg-gradient-to-b from-[#F4FFFE] to-[#F4F5F0]">
                <div className="!container flex flex-wrap relative z-10 grow justify-between max-sm:!px-0">
                    <div className="xl:w-6/12 lg:w-1/2 md:w-5/12 w-full flex flex-col max-sm:px-4">
                        <div className="grow lg:py-6 py-3"></div>
                        <h1 className="hidden">Build an Instant Delivery App like Blinkit, Zepto, and Instamart</h1>
                        <div className="w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl md:font-bold font-semibold text-[#454444] text-balance relative max-md:text-center md:-ml-2"><span className="italic font-extrabold"><Image loading="lazy" fetchpriority="low" decoding="async" width="19" height="60" src="https://d1y41eupgbwbb2.cloudfront.net/images/svg/instantI.svg" alt="Instant I" title="Instant I" className="w-auto xl:h-16 lg:h-10 h-9 xl:-mb-[13px] lg:-mb-2.5 -mb-2 xl:-mr-[5px] lg:-mr-1 -mr-0.5 inline aspect-[19/60]" />nstant Delivery</span> App <br /> &nbsp;Development Company</div>
                        <div className="lg:text-xl md:text-lg sm:text-base text-sm font-semibold text-[#454444] text-balance pt-2 max-md:text-center">Crafting reliable experiences for delivery businesses that never wait.</div>
                        <div className="w-full xl:text-sm md:text-xs text-xs font-normal text-[#454444] md:pt-4 pt-2 max-md:text-center flex flex-col gap-2 text-balance">
                            <p>Launch your 10-minute delivery app and meet your customers' demands—instantly.</p>
                            <p>We are a grocery delivery app development company specializing in instant delivery apps like Blinkit, Zepto, and Instamart. At IMG Global Infotech, we don't just build apps—we create rapid delivery ecosystems that scale with your ambition.</p>
                            <p>Get it built, scaled, & delivered—Right now!</p>
                        </div>
                        <div className="w-full max-md:text-center pt-8">
                            <label htmlFor="leadPopup" className="cursor-pointer xl:text-base text-sm font-semibold text-white inline-flex items-center xl:py-3 py-2.5 xl:ps-6 ps-4 xl:pe-3 pe-2.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#FF6B39] to-[#C94609] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#C94609] group/btn">
                                <span>Consult Our Experts</span>
                                <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#FF6B39] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                    <Svg name="arrowCall" className="size-3 relative z-10 text-[#C94609]" />
                                </div>
                            </label>
                        </div>
                        <div className="grow lg:py-6 py-3 max-md:hidden"></div>
                    </div>
                    <div className="xl:w-6/12 lg:w-1/2 md:w-7/12 w-full flex flex-col relative max-md:order-first max-md:px-10 max-sm:pl-2 max-sm:pr-2">
                        <Image loading="eager" fetchpriority="high" decoding="auto" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantHeroImage.webp" width="815" height="579" alt="Instant Delivery App Development Company" title="Instant Delivery App Development Company" className="md:absolute md:top-0 md:inset-x-0 md:bottom-0 md:size-full w-full object-contain md:object-bottom object-center" />
                    </div>
                </div>
            </section>

            <section className="editionSection w-full relative overflow-hidden bg-gradient-to-r from-[#8420AB] to-[#752594]">
                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/svg/editionBgLayer.svg" width="1035" height="293" alt="Edition Backgorund Layer" title="Edition Backgorund Layer" className="h-auto w-2/3 left-0 bottom-0 absolute z-0" />
                <div className="!container flex relative">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-wrap justify-between items-center xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8 gap-y-8">
                            <div className="md:w-6/12 w-full">
                                <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-white text-balance relative z-10 pb-6">From Zero to Zepto - Scale Up With 10 Minute Delivery App</h2>
                                <div className="md:text-sm text-xs font-normal text-white flex flex-col pb-4">Quick commerce is on the verge, and the world doesn't have patience. By developing an instant food delivery app, make deliveries possible in minutes that take hours. Here's why you should invest in an app like Blinkit for your Q-commerce business.</div>
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantEdition.webp" width="569" height="449" alt="From Zero to Zepto - Scale Up With 10 Minute Delivery App" title="From Zero to Zepto - Scale Up With 10 Minute Delivery App" className="md:w-10/12 object-contain object-center aspect-[569/449]" />
                            </div>
                            <ul className="xl:w-5/12 lg:w-5/12 md:w-6/12 w-full flex flex-col gap-8">
                                <li className="w-full group/edition cursor-pointer">
                                    <div className="w-full bg-gradient-to-b from-[#742592] to-[#884B9F] shadow-[0px_4px_18.9px_0px_#0000001F] rounded-2xl flex flex-col p-0.5">
                                        <div className="flex flex-col items-center rounded-2xl md:p-6 p-4 md:gap-6 gap-4 bg-[#7D309A] group-hover/edition:lg:bg-white duration-500">
                                            <div className="flex w-full items-center gap-6">
                                                <div className="size-12 shrink-0 rounded-full bg-gradient-to-b from-white to-[#F7E4FF] group-hover/edition:lg:bg-gradient-to-t group-hover/edition:lg:to-[#F7DFD5] group-hover/edition:lg:shadow-[0px_4.11px_5.2px_0px_#FFD9C9] duration-500 shadow-[0px_4.11px_5.2px_0px_#71288C] p-1.5">
                                                    <div className="size-full rounded-full bg-gradient-to-b from-[#F4D8FF] to-white group-hover/edition:lg:bg-gradient-to-t group-hover/edition:lg:from-[#F8E2D2] group-hover/edition:lg:to-white duration-500 shadow-[0px_0px_10.81px_0px_#F2BABA]/10 flex flex-col items-center justify-center">
                                                        <Svg name="analytics" className="size-5 duration-500 text-[#C6481C] hover:lg:text-[#7D309A]" />
                                                    </div>
                                                </div>
                                                <h3 className="lg:text-xl md:text-lg sm:text-base text-sm font-semibold text-white text-balance group-hover/edition:lg:text-[#454444] duration-500">Explosive Growth</h3>
                                            </div>
                                            <div className="flex flex-col gap-2 md:text-sm text-xs font-normal text-white group-hover/edition:lg:text-[#454444] duration-500">
                                                <p>Expected market size to reach <b>$72 billion by 2025.</b></p>
                                                <p>Urban consumers prefer <b>10–30 minute</b> deliveries over traditional e-commerce.</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="w-full group/edition cursor-pointer">
                                    <div className="w-full bg-gradient-to-b from-[#742592] to-[#884B9F] shadow-[0px_4px_18.9px_0px_#0000001F] rounded-2xl flex flex-col p-0.5">
                                        <div className="flex flex-col items-center rounded-2xl md:p-6 p-4 md:gap-6 gap-4 bg-[#7D309A] group-hover/edition:lg:bg-white duration-500">
                                            <div className="flex w-full items-center gap-6">
                                                <div className="size-12 shrink-0 rounded-full bg-gradient-to-b from-white to-[#F7E4FF] group-hover/edition:lg:bg-gradient-to-t group-hover/edition:lg:to-[#F7DFD5] group-hover/edition:lg:shadow-[0px_4.11px_5.2px_0px_#FFD9C9] duration-500 shadow-[0px_4.11px_5.2px_0px_#71288C] p-1.5">
                                                    <div className="size-full rounded-full bg-gradient-to-b from-[#F4D8FF] to-white group-hover/edition:lg:bg-gradient-to-t group-hover/edition:lg:from-[#F8E2D2] group-hover/edition:lg:to-white duration-500 shadow-[0px_0px_10.81px_0px_#F2BABA]/10 flex flex-col items-center justify-center">
                                                        <Svg name="moneyBag" className="size-5 duration-500 text-[#C6481C] hover:lg:text-[#7D309A]" />
                                                    </div>
                                                </div>
                                                <h3 className="lg:text-xl md:text-lg sm:text-base text-sm font-semibold text-white text-balance group-hover/edition:lg:text-[#454444] duration-500">High Profit</h3>
                                            </div>
                                            <div className="flex flex-col gap-2 md:text-sm text-xs font-normal text-white group-hover/edition:lg:text-[#454444] duration-500">
                                                <p>Local businesses can pay to rank higher</b></p>
                                                <p>Charge based on speed & distance & EARN Commission from partner stores</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="w-full group/edition cursor-pointer">
                                    <div className="w-full bg-gradient-to-b from-[#742592] to-[#884B9F] shadow-[0px_4px_18.9px_0px_#0000001F] rounded-2xl flex flex-col p-0.5">
                                        <div className="flex flex-col items-center rounded-2xl md:p-6 p-4 md:gap-6 gap-4 bg-[#7D309A] group-hover/edition:lg:bg-white duration-500">
                                            <div className="flex w-full items-center gap-6">
                                                <div className="size-12 shrink-0 rounded-full bg-gradient-to-b from-white to-[#F7E4FF] group-hover/edition:lg:bg-gradient-to-t group-hover/edition:lg:to-[#F7DFD5] group-hover/edition:lg:shadow-[0px_4.11px_5.2px_0px_#FFD9C9] duration-500 shadow-[0px_4.11px_5.2px_0px_#71288C] p-1.5">
                                                    <div className="size-full rounded-full bg-gradient-to-b from-[#F4D8FF] to-white group-hover/edition:lg:bg-gradient-to-t group-hover/edition:lg:from-[#F8E2D2] group-hover/edition:lg:to-white duration-500 shadow-[0px_0px_10.81px_0px_#F2BABA]/10 flex flex-col items-center justify-center">
                                                        <Svg name="competitiveEdge" className="size-5 duration-500 text-[#C6481C] hover:lg:text-[#7D309A]" />
                                                    </div>
                                                </div>
                                                <h3 className="lg:text-xl md:text-lg sm:text-base text-sm font-semibold text-white text-balance group-hover/edition:lg:text-[#454444] duration-500">Scale Strategically</h3>
                                            </div>
                                            <div className="flex flex-col gap-2 md:text-sm text-xs font-normal text-white group-hover/edition:lg:text-[#454444] duration-500">
                                                <p>Tier 2 & Tier 3 cities still have low competition.</b></p>
                                                <p>Hyperlocal delivery services are in high demand for small businesses & groceries.</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="buildAppLikeSection w-full relative overflow-hidden bg-[#FFEFEF]">
                <div className="!container flex relative">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-wrap justify-between items-center xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8 gap-y-8">
                            <div className="md:w-6/12 w-full">
                                <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-[#454444] text-balance relative z-10 pb-6">Build Your Instant Delivery App Like Blinkit, Zepto & Instamart</h2>
                                <div className="md:text-sm text-xs font-normal text-[#454444] flex flex-col gap-3">
                                    <p>Want to be the next Zepto or Blinkit? - IMG Global Infotech is your go-to partner</p>
                                    <p>The grocery delivery market is being reshaped, with customer demands shifting towards instant deliveries and Q-commerce apps. Having an innovative app is the right idea to grow your business faster, and we can help you create an instant delivery app like Instamart for your business. Our Q-commerce solutions help grocery, restaurant, and food retail businesses achieve 2x growth and enhanced productivity through AI-powered features.</p>
                                    <p>IMG Global Infotech offers outstanding and innovative on-demand delivery app solutions that will help you scale faster with your vision and mission.</p>
                                </div>
                                <div className="w-full md:pt-6 pt-4">
                                    <label htmlFor="leadPopup" className="cursor-pointer xl:text-base sm:text-sm text-xs md:font-semibold font-medium text-white inline-flex items-center xl:py-3 sm:py-2.5 py-2 xl:ps-6 sm:ps-4 ps-3 xl:pe-3 sm:pe-2.5 pe-1.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#4E94FF] to-[#216CFF] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#216CFF] group/btn">
                                        <span>Let's "Blinkit" Your Idea!</span>
                                        <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#4E94FF] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                            <Svg name="arrowCall" className="size-3 relative z-10 text-[#216CFF]" />
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="xl:w-5/12 lg:w-5/12 md:w-6/12 w-full rounded-3xl flex items-center justify-center relative order-first max-md:max-w-80 max-md:mx-auto">
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantAppLike.webp" alt="Build Your Instant Delivery App Like Blinkit, Zepto & Instamart" title="Build Your Instant Delivery App Like Blinkit, Zepto & Instamart" className="w-full object-contain object-center" width="480" height="412" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta1Section w-full relative overflow-hidden bg-[#161616]">
                <div className="!container flex relative">
                    <div className="flex flex-col w-full xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                        <div className="flex flex-wrap justify-between">
                            <div className="md:w-6/12 w-full">
                                <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-white text-balance relative z-10 max-md:text-center">We Don't Deliver Apps. <br /> We Deliver Personalized Experiences and Innovative Solutions.</h2>
                                <div className="lg:text-lg md:text-base sm:text-sm text-xs font-normal text-white text-balance pt-2 max-md:text-center">Build an app like Swiggy Instamart and win the hearts of customers, offering them a convenient way to receive their grocery or food deliveries in a blink.</div>
                                <div className="w-full flex flex-wrap gap-y-10 md:pt-12 pt-8">
                                    <div className="w-1/2 flex items-center md:flex-row flex-col gap-5 max-md:text-center">
                                        <div className="size-16 shrink-0 rounded-full bg-gradient-to-b from-[#333131] to-[#282525] shadow-[0px_6px_7.6px_0px_#060606] p-1.5">
                                            <div className="size-full rounded-full bg-gradient-to-b from-[#040404] to-[#4E4D4D] shadow-[0px_0px_15.8px_0px_#F2BABA]/10 flex flex-col items-center justify-center">
                                                <Svg name="generativeAi" className="size-6 duration-500 text-[#FF9D00]" />
                                            </div>
                                        </div>
                                        <h3 className="lg:text-xl md:text-lg text-base font-semibold bg-gradient-to-t from-[#FF9D00] to-[#CE5426] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-balance">AI-Driven Personalization</h3>
                                    </div>
                                    <div className="w-1/2 flex items-center md:flex-row flex-col gap-5 max-md:text-center">
                                        <div className="size-16 shrink-0 rounded-full bg-gradient-to-b from-[#333131] to-[#282525] shadow-[0px_6px_7.6px_0px_#060606] p-1.5">
                                            <div className="size-full rounded-full bg-gradient-to-b from-[#040404] to-[#4E4D4D] shadow-[0px_0px_15.8px_0px_#F2BABA]/10 flex flex-col items-center justify-center">
                                                <Svg name="thunder" className="size-6 duration-500 text-[#FF9D00]" />
                                            </div>
                                        </div>
                                        <h3 className="lg:text-xl md:text-lg text-base font-semibold bg-gradient-to-t from-[#FF9D00] to-[#CE5426] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-balance">Smart Ordering</h3>
                                    </div>
                                    <div className="w-1/2 flex items-center md:flex-row flex-col gap-5 max-md:text-center">
                                        <div className="size-16 shrink-0 rounded-full bg-gradient-to-b from-[#333131] to-[#282525] shadow-[0px_6px_7.6px_0px_#060606] p-1.5">
                                            <div className="size-full rounded-full bg-gradient-to-b from-[#040404] to-[#4E4D4D] shadow-[0px_0px_15.8px_0px_#F2BABA]/10 flex flex-col items-center justify-center">
                                                <Svg name="inventory" className="size-6 duration-500 text-[#FF9D00]" />
                                            </div>
                                        </div>
                                        <h3 className="lg:text-xl md:text-lg text-base font-semibold bg-gradient-to-t from-[#FF9D00] to-[#CE5426] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-balance">Inventory Automation</h3>
                                    </div>
                                    <div className="w-1/2 flex items-center md:flex-row flex-col gap-5 max-md:text-center">
                                        <div className="size-16 shrink-0 rounded-full bg-gradient-to-b from-[#333131] to-[#282525] shadow-[0px_6px_7.6px_0px_#060606] p-1.5">
                                            <div className="size-full rounded-full bg-gradient-to-b from-[#040404] to-[#4E4D4D] shadow-[0px_0px_15.8px_0px_#F2BABA]/10 flex flex-col items-center justify-center">
                                                <Svg name="homeSeamless" className="size-6 duration-500 text-[#FF9D00]" />
                                            </div>
                                        </div>
                                        <h3 className="lg:text-xl md:text-lg text-base font-semibold bg-gradient-to-t from-[#FF9D00] to-[#CE5426] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-balance">Blinkit Your Deliveries</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-6/12 w-full rounded-3xl flex items-center justify-center relative max-md:order-first max-md:max-w-80 max-md:mx-auto">
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantCta3.webp" alt="We Deliver Personalized Experiences and Innovative Solutions." title="We Deliver Personalized Experiences and Innovative Solutions." className="size-full object-contain object-bottom" width="636" height="423" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="caseStudySection w-full relative overflow-hidden bg-white">
                <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                    <div className="flex flex-col w-full">
                        <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-[#454444] text-balance relative z-10 md:text-center md:pb-4 pb-2">Our Successful Q Commerce Development Projects</h2>
                        <div className="w-full 2xl:text-lg xl:text-base md:text-sm text-xs md:font-medium font-normal text-[#454444] text-balance relative z-10 md:text-center md:pb-12 pb-5">Yes, it is true that we've helped our clients achieve high ROI with their delivery businesses. Get glimpses of masterpieces we've delivered to Q-commerce businesses as our clients.</div>
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
                            >    
                            <div className="swiper-wrapper">
                                <div className="swiper-slide flex flex-wrap justify-between items-stretch bg-[#2C2B30] rounded-3xl xl:p-12 md:p-8 py-6 px-4 gap-y-6">
                                    <div className="md:w-7/12 w-full">
                                        <div className="w-full flex items-center xl:gap-8 md:gap-4 gap-2">
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/dailyMartLogo.webp" className="w-auto md:h-14 h-12 aspect-square" width="56" height="56" alt="DailyMart Logo" title="DailyMart Logo" />
                                            <h3 className="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg text-base font-bold text-[#FF8F5E]">DailyMart</h3>
                                        </div>
                                        <div className="w-full xl:text-sm lg:text-xs md:text-sm text-xs font-normal text-white xl:pt-4 pt-2 xl:pb-6 pb-4">DailyMart is an instant grocery delivery app designed for urban consumers who value speed, convenience, and quality. Built to revolutionize daily shopping habits, DailyMart enables users to browse, order, and receive essential items within just 10 minutes.</div>
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
                                                <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-bold text-white">Quick Commerce</div>
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
                                            <label htmlFor="leadPopup" className="cursor-pointer xl:text-base sm:text-sm text-xs md:font-semibold font-medium text-[#454444] inline-flex items-center xl:py-3 sm:py-2.5 py-2 xl:ps-6 sm:ps-4 ps-3 xl:pe-3 sm:pe-2.5 pe-1.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#ffffff] to-[#ffffff] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#ffffff] group/btn">
                                                <span>View Case Study</span>
                                                <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-[#FF6F30] group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#ffffff] before:absolute before:inset-0 before:rounded-full before:bg-[#FF6F30] before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                                    <Svg name="arrowCall" className="size-3 relative z-10 text-[#ffffff]" />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="md:w-4/12 w-full order-first rounded-3xl aspect-square flex items-center justify-center bg-gradient-to-br from-[#FF6F30] to-[#FEB25A] p-6">
                                        <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/dailyMart.webp" alt="DailyMart" title="DailyMart" className="size-full object-contain object-center aspect-[375/487]" width="375" height="487" />
                                    </div>
                                </div>
                                <div className="swiper-slide flex flex-wrap justify-between items-stretch bg-[#2C2B30] rounded-3xl xl:p-12 md:p-8 py-6 px-4 gap-y-6">
                                    <div className="md:w-7/12 w-full">
                                        <div className="w-full flex items-center xl:gap-8 md:gap-4 gap-2">
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/qBasketLogo.webp" className="w-auto md:h-14 h-12 aspect-square" width="56" height="56" alt="QBasket Logo" title="QBasket Logo" />
                                            <h3 className="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg text-base font-bold text-white">QBasket</h3>
                                        </div>
                                        <div className="w-full xl:text-sm lg:text-xs md:text-sm text-xs font-normal text-white xl:pt-4 pt-2 xl:pb-6 pb-4">QBasket is an innovative quick-commerce app that brings groceries and home essentials to your door in under 10 minutes. It's built to simplify everyday shopping through a smart, intuitive, and efficient digital experience.</div>
                                        <div className="flex items-center lg:gap-14 md:gap-10 gap-2">
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                                <div className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-white">5M+</div>
                                                <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-white">Downloads</div>
                                            </div>
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                                <div className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-white">4.5/5</div>
                                                <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-white">Rating</div>
                                            </div>
                                            <div className="w-auto inlne-flex flex-col gap-0.5 max-md:ml-auto">
                                                <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-white/70">Industry</div>
                                                <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-bold text-white">Quick Commerce</div>
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
                                            <label htmlFor="leadPopup" className="cursor-pointer xl:text-base sm:text-sm text-xs md:font-semibold font-medium text-[#454444] inline-flex items-center xl:py-3 sm:py-2.5 py-2 xl:ps-6 sm:ps-4 ps-3 xl:pe-3 sm:pe-2.5 pe-1.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#ffffff] to-[#ffffff] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#ffffff] group/btn">
                                                <span>View Case Study</span>
                                                <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-[#FC7A42] group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#ffffff] before:absolute before:inset-0 before:rounded-full before:bg-[#FC7A42] before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                                    <Svg name="arrowCall" className="size-3 relative z-10 text-[#ffffff]" />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="md:w-4/12 w-full order-first rounded-3xl aspect-square flex items-center justify-center bg-gradient-to-br from-[#FC7A42] to-[#FAA080] p-6">
                                        <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/qBasket.webp" alt="QBasket" title="QBasket" className="size-full object-contain object-center aspect-[375/487]" width="375" height="487" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex md:justify-center justify-end absolute inset-x-0 bottom-0 z-10">
                                <div className="inline-flex items-center justify-center md:gap-8 gap-6 relative bg-white md:rounded-t-3xl rounded-tl-3xl p-2">
                                    <Svg name="clipLeftBottom" className="size-6 absolute bottom-0 left-0 -translate-x-full z-10 text-white" />
                                    <Svg name="clipRightBottom" className="size-6 absolute md:bottom-0 max-md:top-0 right-0 md:translate-x-full max-md:-translate-y-full z-10 max-md:-rotate-90 text-white" />
                                    <div className="prev rounded-full size-10 bg-gradient-to-b from-white to-[#666666] p-px inline-flex items-center justify-center relative hover:lg:before:inset-1 before:duration-300 shadow-[0px_4px_4px_0px_#0000001F] before:absolute before:inset-0.5 before:m-auto before:bg-[#1D1D1D] before:rounded-full before:z-0">
                                        <Svg name="arrowPrev" className="size-6 relative z-10 text-white" />
                                    </div>
                                    <div className="next rounded-full size-10 bg-gradient-to-b from-white to-[#666666] p-px inline-flex items-center justify-center relative hover:lg:before:inset-1 before:duration-300 shadow-[0px_4px_4px_0px_#0000001F] before:absolute before:inset-0.5 before:m-auto before:bg-[#1D1D1D] before:rounded-full before:z-0">
                                        <Svg name="arrowNext" className="size-6 relative z-10 text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="industrySection w-full relative overflow-hidden bg-white">
                <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                    <div className="flex flex-col w-full">
                        <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-[#454444] text-balance relative z-10 md:text-center md:pb-4 pb-2">Lead and Disrupt the Q Commerce Industry With Innovation</h2>
                        <div className="w-full 2xl:text-lg xl:text-base md:text-sm text-xs md:font-medium font-normal text-[#454444] text-balance relative z-10 md:text-center md:pb-12 pb-5">We offer everything you need to make your Q commerce dream come true. We support all business models from an instant food delivery app to a grocery delivery app like Instamart.</div>
                        <div className="flex flex-wrap items-stretch gap-y-10 max-md:pt-10">
                            <div className="md:w-1/3 md:pt-32 pt-20 px-2.5 group/indus">
                                <div className="size-full flex flex-col bg-[#F2F2F2] ring-2 ring-inset group-hover/indus:lg:ring-[#FF6B39] max-md:ring-[#FF6B39] ring-white shadow-[0px_4px_29.5px_0px_#000000]/20 rounded-2xl py-4 md:px-8 px-4 relative group-hover/indus:lg:scale-95 duration-300">
                                    <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDarkStorkModelIcon.webp" alt="Dark Stork Model" title="Dark Stork Model" width="176" height="176" className="size-44 aspect-square object-contain object-center mx-auto -mt-32 group-hover/indus:lg:grayscale-0 md:grayscale duration-300" />
                                    <h3 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-semibold text-[#454444] group-hover/indus:lg:text-[#FF6B39] max-md:text-[#FF6B39] duration-300 pb-2 max-md:text-center">Dark Stork Model</h3>
                                    <div className="md:text-xs text-[10px] font-normal text-[#454444] max-md:text-center text-balance pb-3">Gain complete control over your store with a solution designed specifically for fulfilling online orders and automating deliveries instantly to customers' doorsteps.</div>
                                    <div className="flex flex-col md:-mx-8 -mx-4 bg-gradient-to-r from-[#434343] to-[#1D1D1D] group-hover/indus:lg:from-[#FF6B39] group-hover/indus:lg:to-[#E97B2C] max-md:from-[#FF6B39] max-md:to-[#E97B2C] duration-300 shadow-[0px_4px_8.1px_0px_#FD6D37]/10 rounded-lg py-4 px-8 gap-0.5">
                                        <div className="md:text-sm text-xs font-bold text-white max-md:text-center">Revenue Stream</div>
                                        <div className="md:text-sm text-xs font-medium text-white max-md:text-center text-balance">Product markup | Delivery charges Subscription plans</div>
                                    </div>
                                    <div className="w-full flex flex-col md:-ms-7 bg-[#E9E9E9] group-hover/indus:lg:bg-[#F3E1DB] max-md:bg-[#F3E1DB] duration-300 shadow-[0px_4px_8.1px_0px_#FD6D37]/10 rounded-r-lg max-md:rounded-lg py-4 px-8 gap-0.5 mt-4">
                                        <div className="md:text-sm text-xs font-medium text-[#454444] max-md:text-center">Swiggy Instamart | Zepto | Blinkit</div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/3 md:pt-32 pt-20 px-2.5 group/indus">
                                <div className="size-full flex flex-col bg-[#F2F2F2] ring-2 ring-inset group-hover/indus:lg:ring-[#FF6B39] max-md:ring-[#FF6B39] ring-white shadow-[0px_4px_29.5px_0px_#000000]/20 rounded-2xl py-4 md:px-8 px-4 relative group-hover/indus:lg:scale-95 duration-300">
                                    <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantMarketplaceModelIcon.webp" alt="Marketplace Model" title="Marketplace Model" width="176" height="176" className="size-44 aspect-square object-contain object-center mx-auto -mt-32 group-hover/indus:lg:grayscale-0 md:grayscale duration-300" />
                                    <h3 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-semibold text-[#454444] group-hover/indus:lg:text-[#FF6B39] max-md:text-[#FF6B39] duration-300 pb-2 max-md:text-center">Marketplace Model</h3>
                                    <div className="md:text-xs text-[10px] font-normal text-[#454444] max-md:text-center text-balance pb-3">Develop a grocery delivery marketplace similar to Instacart, Shipt, or Amazon Fresh, and efficiently manage your suppliers, vendors, and sources.</div>
                                    <div className="flex flex-col md:-mx-8 -mx-4 bg-gradient-to-r from-[#434343] to-[#1D1D1D] group-hover/indus:lg:from-[#FF6B39] group-hover/indus:lg:to-[#E97B2C] max-md:from-[#FF6B39] max-md:to-[#E97B2C] duration-300 shadow-[0px_4px_8.1px_0px_#FD6D37]/10 rounded-lg py-4 px-8 gap-0.5">
                                        <div className="md:text-sm text-xs font-bold text-white max-md:text-center">Revenue Stream</div>
                                        <div className="md:text-sm text-xs font-medium text-white max-md:text-center text-balance">Surge Pricing | Vendor Commission Ads & Sponsored Listings</div>
                                    </div>
                                    <div className="w-full flex flex-col md:-ms-7 bg-[#E9E9E9] group-hover/indus:lg:bg-[#F3E1DB] max-md:bg-[#F3E1DB] duration-300 shadow-[0px_4px_8.1px_0px_#FD6D37]/10 rounded-r-lg max-md:rounded-lg py-4 px-8 gap-0.5 mt-4">
                                        <div className="md:text-sm text-xs font-medium text-[#454444] max-md:text-center">Dunzo | DoorDash | Uber Eats | Talabat Mart</div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/3 md:pt-32 pt-20 px-2.5 group/indus">
                                <div className="size-full flex flex-col bg-[#F2F2F2] ring-2 ring-inset group-hover/indus:lg:ring-[#FF6B39] max-md:ring-[#FF6B39] ring-white shadow-[0px_4px_29.5px_0px_#000000]/20 rounded-2xl py-4 md:px-8 px-4 relative group-hover/indus:lg:scale-95 duration-300">
                                    <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantHybridModelIcon.webp" alt="Hybrid Model" title="Hybrid Model" width="176" height="176" className="size-44 aspect-square object-contain object-center mx-auto -mt-32 group-hover/indus:lg:grayscale-0 md:grayscale duration-300" />
                                    <h3 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-semibold text-[#454444] group-hover/indus:lg:text-[#FF6B39] max-md:text-[#FF6B39] duration-300 pb-2 max-md:text-center">Hybrid Model</h3>
                                    <div className="md:text-xs text-[10px] font-normal text-[#454444] max-md:text-center text-balance pb-3">Generate significant revenue with a grocery delivery app that combines all the advantages of the dark store and marketplace model.</div>
                                    <div className="flex flex-col md:-mx-8 -mx-4 bg-gradient-to-r from-[#434343] to-[#1D1D1D] group-hover/indus:lg:from-[#FF6B39] group-hover/indus:lg:to-[#E97B2C] max-md:from-[#FF6B39] max-md:to-[#E97B2C] duration-300 shadow-[0px_4px_8.1px_0px_#FD6D37]/10 rounded-lg py-4 px-8 gap-0.5">
                                        <div className="md:text-sm text-xs font-bold text-white max-md:text-center">Revenue Stream</div>
                                        <div className="md:text-sm text-xs font-medium text-white max-md:text-center text-balance">Product markup | Delivery charges Subscription plans | Private Label Brands</div>
                                    </div>
                                    <div className="w-full flex flex-col md:-ms-7 bg-[#E9E9E9] group-hover/indus:lg:bg-[#F3E1DB] max-md:bg-[#F3E1DB] duration-300 shadow-[0px_4px_8.1px_0px_#FD6D37]/10 rounded-r-lg max-md:rounded-lg py-4 px-8 gap-0.5 mt-4">
                                        <div className="md:text-sm text-xs font-medium text-[#454444] max-md:text-center">Swiggy Instamart | Zepto | Blinkit</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="keySection group/key w-full relative bg-[#211E1E]">
                <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8 max-sm:!px-0">
                    <div className="flex flex-col w-full">
                        <h2 className="w-full max-sm:px-4 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-white text-balance relative z-10 text-center">Key Features Our <span className="text-[#FF6B39]"> Instant </span> Delivery App Offers</h2>
                        <div className="w-full max-sm:px-4 flex items-center justify-center md:pt-8 pt-4">
                            <div className="inline-flex items-center justify-center gap-1 rounded-full bg-[#3A3939] shadow-[0px_3px_34px_0px_#0000001F]">
                                <label htmlFor="panel1" className="md:py-4 py-3 lg:px-12 md:px-10 sm:px-6 px-3 rounded-full xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-semibold text-white cursor-pointer group-has-[#panel1:checked]/key:bg-[#FF6B39] group-has-[#panel1:checked]/key:text-white"><h3>User <span className="max-sm:hidden">App</span></h3></label>
                                <label htmlFor="panel2" className="md:py-4 py-3 lg:px-12 md:px-10 sm:px-6 px-3 rounded-full xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-semibold text-white cursor-pointer group-has-[#panel2:checked]/key:bg-[#FF6B39] group-has-[#panel2:checked]/key:text-white"><h3>Vendor <span className="max-sm:hidden">App</span></h3></label>
                                <label htmlFor="panel3" className="md:py-4 py-3 lg:px-12 md:px-10 sm:px-6 px-3 rounded-full xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-semibold text-white cursor-pointer group-has-[#panel3:checked]/key:bg-[#FF6B39] group-has-[#panel3:checked]/key:text-white"><h3>Delivery <span className="max-sm:hidden">App</span></h3></label>
                                <label htmlFor="panel4" className="md:py-4 py-3 lg:px-12 md:px-10 sm:px-6 px-3 rounded-full xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-semibold text-white cursor-pointer group-has-[#panel4:checked]/key:bg-[#FF6B39] group-has-[#panel4:checked]/key:text-white"><h3>Admin <span className="max-sm:hidden">Panel</span></h3></label>
                            </div>
                        </div>
                        <div className="w-full items-start has-[#panel1:checked]:flex hidden">
                            <input type="radio" name="panel" id="panel1" className="hidden" defaultChecked />
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
                                >
                                <div className="swiper-wrapper max-md:!items-stretch md:grid xl:grid-cols-2 md:grid-cols-1 md:gap-x-8 md:gap-y-6 md:!transform-none">
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="userPanel1" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="userPanel" id="userPanel1" className="hidden" defaultChecked />
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryUserLogin.webp" alt="Social Media Login" title="Social Media Login" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-white/50">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-[#3A3939] max-md:bg-[#FF6B39] group-has-[:checked]:md:bg-[#FF6B39] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#FF6B39]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-white max-sm:text-center">Social Media Login</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-white/80 max-sm:text-center">Built-in social media login feature allows users to log in easily.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="userPanel2" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="userPanel" id="userPanel2" className="hidden" />
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryUserTrackOrder.webp" alt="Order Tracking" title="Order Tracking" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-white/50">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-[#3A3939] max-md:bg-[#FF6B39] group-has-[:checked]:md:bg-[#FF6B39] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#FF6B39]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-white max-sm:text-center">Order Tracking</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-white/80 max-sm:text-center">Track orders in real-time, including ETA and driver location, from the moment the order is placed.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="userPanel3" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="userPanel" id="userPanel3" className="hidden" />
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryUserSearch.webp" alt="Smart Search" title="Smart Search" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-white/50">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-[#3A3939] max-md:bg-[#FF6B39] group-has-[:checked]:md:bg-[#FF6B39] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#FF6B39]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-white max-sm:text-center">Smart Search</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-white/80 max-sm:text-center">AI-powered search functionality makes product searching seamless and powerful.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="userPanel4" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="userPanel" id="userPanel4" className="hidden" />
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryUserPayment.webp" alt="Multi-Payment Options" title="Multi-Payment Options" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-white/50">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-[#3A3939] max-md:bg-[#FF6B39] group-has-[:checked]:md:bg-[#FF6B39] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#FF6B39]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-white max-sm:text-center">Multi-Payment Options</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-white/80 max-sm:text-center">Your customers can pay conveniently through COD, net banking, debit/credit card.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="userPanel5" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="userPanel" id="userPanel5" className="hidden" />
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryOrderSchedule.webp" alt="Delivery Scheduling" title="Delivery Scheduling" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-white/50">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-[#3A3939] max-md:bg-[#FF6B39] group-has-[:checked]:md:bg-[#FF6B39] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#FF6B39]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-white max-sm:text-center">Delivery Scheduling</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-white/80 max-sm:text-center">It's your customer's choice when they want to receive their deliveries.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="userPanel6" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="userPanel" id="userPanel6" className="hidden" />
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryUserDiscount.webp" alt="Offers & Discounts" title="Offers & Discounts" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-white/50">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-[#3A3939] max-md:bg-[#FF6B39] group-has-[:checked]:md:bg-[#FF6B39] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#FF6B39]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-white max-sm:text-center">Offers & Discounts</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-white/80 max-sm:text-center">Delivers personalized promotions and customer-specific loyalty incentives.</div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:w-4/12 md:w-1/2 pl-20 md:!pt-12 !pt-7 !pb-6 md:sticky md:top-16 md:bottom-0 md:h-dvh max-md:hidden flex flex-col justify-center">
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryUserLogin.webp" alt="Social Media Login" title="Social Media Login" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#userPanel1:checked]/key:md:block" />
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryUserTrackOrder.webp" alt="Order Tracking" title="Order Tracking" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#userPanel2:checked]/key:md:block" />
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryUserSearch.webp" alt="Smart Search" title="Smart Search" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#userPanel3:checked]/key:md:block" />
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryUserPayment.webp" alt="Multi-Payment Options" title="Multi-Payment Options" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#userPanel4:checked]/key:md:block" />
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryOrderSchedule.webp" alt="Delivery Scheduling" title="Delivery Scheduling" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#userPanel5:checked]/key:md:block" />
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryUserDiscount.webp" alt="Offers & Discounts" title="Offers & Discounts" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#userPanel6:checked]/key:md:block" />
                            </div>
                        </div>
                        <div className="w-full items-start has-[#panel2:checked]:flex hidden">
                            <input type="radio" name="panel" id="panel2" className="hidden" />
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
                                >
                                <div className="swiper-wrapper max-md:!items-stretch md:grid xl:grid-cols-2 md:grid-cols-1 md:gap-x-8 md:gap-y-6 md:!transform-none">
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="servicePanel1" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="servicePanel" id="servicePanel1" className="hidden" defaultChecked />
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryVendorOrderManagement.webp" alt="Order Management" title="Order Management" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-white/50">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-[#3A3939] max-md:bg-[#FF6B39] group-has-[:checked]:md:bg-[#FF6B39] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#FF6B39]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-white max-sm:text-center">Order Management</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-white/80 max-sm:text-center">See all orders in one place with all the details you need.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="servicePanel2" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="servicePanel" id="servicePanel2" className="hidden" />
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryVendorInventoryManagement.webp" alt="Inventory Management" title="Inventory Management" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527"  width="375" height="528" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-white/50">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-[#3A3939] max-md:bg-[#FF6B39] group-has-[:checked]:md:bg-[#FF6B39] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#FF6B39]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-white max-sm:text-center">Inventory Management</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-white/80 max-sm:text-center">Easily manage your stock with one click, and even automate it.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="servicePanel3" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="servicePanel" id="servicePanel3" className="hidden" />
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryVendorPriceControl.webp" alt="Price Control" title="Price Control" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527"  width="375" height="528" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-white/50">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-[#3A3939] max-md:bg-[#FF6B39] group-has-[:checked]:md:bg-[#FF6B39] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#FF6B39]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-white max-sm:text-center">Price Control</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-white/80 max-sm:text-center">Vendors can easily change prices and offer discounts for specific events.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="servicePanel4" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="servicePanel" id="servicePanel4" className="hidden" />
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryVendorOrderAlert.webp" alt="Order Alerts" title="Order Alerts" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527"  width="375" height="528" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-white/50">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-[#3A3939] max-md:bg-[#FF6B39] group-has-[:checked]:md:bg-[#FF6B39] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#FF6B39]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-white max-sm:text-center">Order Alerts</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-white/80 max-sm:text-center">Vendors immediately get a notification when someone places an order.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="servicePanel5" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="servicePanel" id="servicePanel5" className="hidden" />
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryVendorDeliveryManagement.webp" alt="Delivery Management" title="Delivery Management" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527"  width="375" height="528" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-white/50">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-[#3A3939] max-md:bg-[#FF6B39] group-has-[:checked]:md:bg-[#FF6B39] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#FF6B39]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-white max-sm:text-center">Delivery Management</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-white/80 max-sm:text-center">Helps send orders to delivery drivers based on the customer's location.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="servicePanel6" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="servicePanel" id="servicePanel6" className="hidden" />
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryVendorSales.webp" alt="Sales Analytics" title="Sales Analytics" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527"  width="375" height="528" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-white/50">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-[#3A3939] max-md:bg-[#FF6B39] group-has-[:checked]:md:bg-[#FF6B39] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#FF6B39]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-white max-sm:text-center">Sales Analytics</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-white/80 max-sm:text-center">Vendors can easily track their sales performance.</div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:w-4/12 md:w-1/2 pl-20 md:!pt-12 !pt-7 !pb-6 md:sticky md:top-16 md:bottom-0 md:h-dvh max-md:hidden flex flex-col justify-center">
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryVendorOrderManagement.webp" alt="Order Management" title="Order Management" className="w-full mx-auto xl:max-w-96 max-w-64 hidden group-has-[#servicePanel1:checked]/key:md:block"  width="375" height="528" />
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryVendorInventoryManagement.webp" alt="Inventory Management" title="Inventory Management" className="w-full mx-auto xl:max-w-96 max-w-64 hidden group-has-[#servicePanel2:checked]/key:md:block"  width="375" height="528" />
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryVendorPriceControl.webp" alt="Price Control" title="Price Control" className="w-full mx-auto xl:max-w-96 max-w-64 hidden group-has-[#servicePanel3:checked]/key:md:block"  width="375" height="528" />
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryVendorOrderAlert.webp" alt="Order Alerts" title="Order Alerts" className="w-full mx-auto xl:max-w-96 max-w-64 hidden group-has-[#servicePanel4:checked]/key:md:block"  width="375" height="528" />
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryVendorDeliveryManagement.webp" alt="Delivery Management" title="Delivery Management" className="w-full mx-auto xl:max-w-96 max-w-64 hidden group-has-[#servicePanel5:checked]/key:md:block"  width="375" height="528" />
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryVendorSales.webp" alt="Sales Analytics" title="Sales Analytics" className="w-full mx-auto xl:max-w-96 max-w-64 hidden group-has-[#servicePanel6:checked]/key:md:block"  width="375" height="528" />
                            </div>
                        </div>
                        <div className="w-full items-start has-[#panel3:checked]:flex hidden">
                            <input type="radio" name="panel" id="panel3" className="hidden" />
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
                                >
                                <div className="swiper-wrapper max-md:!items-stretch md:grid xl:grid-cols-2 md:grid-cols-1 md:gap-x-8 md:gap-y-6 md:!transform-none">
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="restaurant1" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="restaurant" id="restaurant1" className="hidden" defaultChecked />
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryDriverRegistration.webp" alt="Registration" title="Registration" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]"  width="375" height="528" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-white/50">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-[#3A3939] max-md:bg-[#FF6B39] group-has-[:checked]:md:bg-[#FF6B39] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#FF6B39]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-white max-sm:text-center">Registration</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-white/80 max-sm:text-center">Allows for quick registration by uploading and verifying valid documents.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="restaurant2" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="restaurant" id="restaurant2" className="hidden" />
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryDriverOrderVerification.webp" alt="Order Verification" title="Order Verification" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]"  width="375" height="528" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-white/50">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-[#3A3939] max-md:bg-[#FF6B39] group-has-[:checked]:md:bg-[#FF6B39] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#FF6B39]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-white max-sm:text-center">Order Verification</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-white/80 max-sm:text-center">Delivery agents can verify through OTP or barcode scanning that the order has been delivered to the correct customer at the intended location.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="restaurant3" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="restaurant" id="restaurant3" className="hidden" />
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryDriverRoute.webp" alt="Route Optimization" title="Route Optimization" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]"  width="375" height="528" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-white/50">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-[#3A3939] max-md:bg-[#FF6B39] group-has-[:checked]:md:bg-[#FF6B39] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#FF6B39]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-white max-sm:text-center">Route Optimization</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-white/80 max-sm:text-center">Built-in map and AI-powered navigation features facilitate smart route optimization.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="restaurant4" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="restaurant" id="restaurant4" className="hidden" />
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryDriverOrderAlert.webp" alt="Instant Order Alerts" title="Instant Order Alerts" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]"  width="375" height="528" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-white/50">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-[#3A3939] max-md:bg-[#FF6B39] group-has-[:checked]:md:bg-[#FF6B39] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#FF6B39]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-white max-sm:text-center">Instant Order Alerts</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-white/80 max-sm:text-center">This feature enables delivery agents to receive instant alerts about orders, delivery locations, and more.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="restaurant5" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="restaurant" id="restaurant5" className="hidden" />
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryDriverEarning.webp" alt="Earnings" title="Earnings" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]"  width="375" height="528" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-white/50">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-[#3A3939] max-md:bg-[#FF6B39] group-has-[:checked]:md:bg-[#FF6B39] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#FF6B39]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-white max-sm:text-center">Earnings</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-white/80 max-sm:text-center">Delivery agents can monitor their weekly and monthly income, including any extra income, such as bonuses.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="restaurant6" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="restaurant" id="restaurant6" className="hidden" />
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryDriverChat.webp" alt="In-App Chat" title="In-App Chat" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]"  width="375" height="528" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-white/50">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-[#3A3939] max-md:bg-[#FF6B39] group-has-[:checked]:md:bg-[#FF6B39] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#FF6B39]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-white max-sm:text-center">In-App Chat</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-white/80 max-sm:text-center">In-app chat features facilitate customer communication through messages and calls.</div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:w-4/12 md:w-1/2 pl-20 md:!pt-12 !pt-7 !pb-6 md:sticky md:top-16 md:bottom-0 md:h-dvh max-md:hidden flex flex-col justify-center">
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryDriverRegistration.webp" alt="Dashboard" title="Dashboard" className="w-full mx-auto xl:max-w-96 max-w-64 hidden group-has-[#restaurant1:checked]/key:md:block"  width="375" height="528" />
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryDriverOrderVerification.webp" alt="Personalized Offers" title="Personalized Offers" className="w-full mx-auto xl:max-w-96 max-w-64 hidden group-has-[#restaurant2:checked]/key:md:block"  width="375" height="528" />
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryDriverRoute.webp" alt="AI-Powered Forecast" title="AI-Powered Forecast" className="w-full mx-auto xl:max-w-96 max-w-64 hidden group-has-[#restaurant3:checked]/key:md:block"  width="375" height="528" />
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryDriverOrderAlert.webp" alt="User Management" title="User Management" className="w-full mx-auto xl:max-w-96 max-w-64 hidden group-has-[#restaurant4:checked]/key:md:block"  width="375" height="528" />
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryDriverEarning.webp" alt="Zone Management" title="Zone Management" className="w-full mx-auto xl:max-w-96 max-w-64 hidden group-has-[#restaurant5:checked]/key:md:block"  width="375" height="528" />
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryDriverChat.webp" alt="Payment Management" title="Payment Management" className="w-full mx-auto xl:max-w-96 max-w-64 hidden group-has-[#restaurant6:checked]/key:md:block"  width="375" height="528" />
                            </div>
                        </div>
                        <div className="w-full items-start has-[#panel4:checked]:flex hidden">
                            <input type="radio" name="panel" id="panel4" className="hidden" />
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
                                >
                                <div className="swiper-wrapper max-md:!items-stretch md:grid xl:grid-cols-2 md:grid-cols-1 md:gap-x-8 md:gap-y-6 md:!transform-none">
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="adminPanel1" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="adminPanel" id="adminPanel1" className="hidden" defaultChecked />
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryAdmin.webp" alt="Dashboard" title="Dashboard" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]" width="1338" height="936" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-white/50">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-[#3A3939] max-md:bg-[#FF6B39] group-has-[:checked]:md:bg-[#FF6B39] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#FF6B39]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-white max-sm:text-center">Dashboard</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-white/80 max-sm:text-center">Admins can view all activity related to the app, users, and vendors in one centralized location.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="adminPanel2" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="adminPanel" id="adminPanel2" className="hidden" />
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryAdmin.webp" alt="Personalized Offers" title="Personalized Offers" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]" width="1338" height="936" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-white/50">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-[#3A3939] max-md:bg-[#FF6B39] group-has-[:checked]:md:bg-[#FF6B39] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#FF6B39]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-white max-sm:text-center">Personalized Offers</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-white/80 max-sm:text-center">Engage customers by offering personalized discounts, offers, and loyalty coupons.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="adminPanel3" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="adminPanel" id="adminPanel3" className="hidden" />
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryAdmin.webp" alt="AI-Powered Forecast" title="AI-Powered Forecast" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]" width="1338" height="936" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-white/50">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-[#3A3939] max-md:bg-[#FF6B39] group-has-[:checked]:md:bg-[#FF6B39] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#FF6B39]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-white max-sm:text-center">AI-Powered Forecast</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-white/80 max-sm:text-center">AI helps admins predict what will be popular and how much it will sell.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="adminPanel4" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="adminPanel" id="adminPanel4" className="hidden" />
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryAdmin.webp" alt="User Management" title="User Management" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]" width="1338" height="936" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-white/50">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-[#3A3939] max-md:bg-[#FF6B39] group-has-[:checked]:md:bg-[#FF6B39] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#FF6B39]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-white max-sm:text-center">User Management</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-white/80 max-sm:text-center">Admins have tools to manage all users of the app, including customers, vendors, drivers, and other administrators.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="adminPanel5" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="adminPanel" id="adminPanel5" className="hidden" />
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryAdmin.webp" alt="Zone Management" title="Zone Management" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]" width="1338" height="936" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-white/50">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-[#3A3939] max-md:bg-[#FF6B39] group-has-[:checked]:md:bg-[#FF6B39] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#FF6B39]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-white max-sm:text-center">Zone Management</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-white/80 max-sm:text-center">Admis can set up delivery zones and optimize logistics operations.</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="adminPanel6" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="adminPanel" id="adminPanel6" className="hidden" />
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryAdmin.webp" alt="Payment Management" title="Payment Management" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]" width="1338" height="936" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-white/50">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-[#3A3939] max-md:bg-[#FF6B39] group-has-[:checked]:md:bg-[#FF6B39] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#FF6B39]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-white max-sm:text-center">Payment Management</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-white/80 max-sm:text-center">Enables administrators to manage, monitor, and track payments, including expenses and payoffs.</div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:w-4/12 md:w-1/2 pl-20 md:!pt-12 !pt-7 !pb-6 md:sticky md:top-16 md:bottom-0 md:h-dvh max-md:hidden flex flex-col justify-center">
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDeliveryAdmin.webp" alt="admin" title="admin" width="375" height="262" className="w-full mx-auto xl:max-w-96 max-w-64 max-md:hidden aspect-[375/262]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta2Section w-full relative overflow-hidden bg-[#f7f8fa]">
                <div className="!container flex relative">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-wrap justify-between md:py-10">
                            <div className="md:w-6/12 w-full xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                                <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-bold text-[#262222] text-balance relative z-10 max-md:text-center">Your Big Idea of Q Commerce Needs A Bold Launch</h2>
                                <div className="md:text-sm text-xs font-normal text-[#262222] pt-2.5 pb-7 text-balance max-md:text-center">If you are dreaming big for your grocery and food delivery business, IMG Global Infotech is your launchpad. Whether you are a startup or a large business, we can help you disrupt the trends.</div>
                                <div className="w-full md:pt-6 pt-4 max-md:text-center">
                                    <label htmlFor="leadPopup" className="cursor-pointer xl:text-base sm:text-sm text-xs md:font-semibold font-medium text-white inline-flex items-center xl:py-3 sm:py-2.5 py-2 xl:ps-6 sm:ps-4 ps-3 xl:pe-3 sm:pe-2.5 pe-1.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#FF6B39] to-[#C94609] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#C94609] group/btn">
                                        <span>Co-create the Q-commerce future with us!</span>
                                        <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#FF6B39] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                            <Svg name="arrowCall" className="size-3 relative z-10 text-[#C94609]" />
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-6/12 w-full rounded-3xl flex items-center justify-center md:absolute md:inset-y-0 md:right-0">
                    <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantCta1.webp" width="763" height="475" alt="Ready to Build the Future of Instant Commerce?" title="Ready to Build the Future of Instant Commerce?" className="size-full object-contain object-right-bottom aspect-[763/475]" />
                </div>
            </section>

            <section className="nextGenSection w-full relative bg-[#010105]">
                <div className="!container flex z-10 relative">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-wrap justify-between relative items-end">
                            <div className="xl:w-9/12 lg:w-8/12 w-full rounded-3xl flex flex-col relative md:pl-8 xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                                <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-white text-balance relative z-10">Smart Q Commerce App Solutions With Smart Features</h2>
                                <div className="w-full grid xl:grid-cols-2 grid-cols-1 xl:gap-6 gap-10 md:pt-16 pt-8">
                                    <div className="flex md:gap-6 gap-4 items-start">
                                        <div className="md:size-14 size-12 flex items-center justify-center shrink-0 rounded-xl bg-[#7C239E]">
                                            <Svg name="artificialIntelligence" className="size-8 text-white" />
                                        </div>
                                        <div className="w-full flex flex-col md:gap-3 gap-1">
                                            <h3 className="w-full xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-white">AI-Driven Recommendations</h3>
                                            <div className="w-full xl:text-sm text-xs font-normal text-white">The AI-driven recommendation features offer ultimate personalization. The algorithm identifies and analyzes customer behavior, resulting in personalized user recommendations.</div>
                                        </div>
                                    </div>
                                    <div className="flex md:gap-6 gap-4 items-start">
                                        <div className="md:size-14 size-12 flex items-center justify-center shrink-0 rounded-xl bg-[#7C239E]">
                                            <Svg name="aiForcasting" className="size-8 text-white" />
                                        </div>
                                        <div className="w-full flex flex-col md:gap-3 gap-1">
                                            <h3 className="w-full xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-white">AI-Powered Demand Forecasting</h3>
                                            <div className="w-full xl:text-sm text-xs font-normal text-white">Forecast your customers' demands for better services and drive business growth. AI demand forecasting is capable of making predictions based on food trends, local events, and other factors.</div>
                                        </div>
                                    </div>
                                    <div className="flex md:gap-6 gap-4 items-start">
                                        <div className="md:size-14 size-12 flex items-center justify-center shrink-0 rounded-xl bg-[#FF6B39]">
                                            <Svg name="voiceAssistence" className="size-8 text-white" />
                                        </div>
                                        <div className="w-full flex flex-col md:gap-3 gap-1">
                                            <h3 className="w-full xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-white">Voice-Activated Retail</h3>
                                            <div className="w-full xl:text-sm text-xs font-normal text-white">Voice-activated online shopping is one of the most advanced features in an online grocery shopping app. Customers can order items directly using their devices, such as Alexa or Siri.</div>
                                        </div>
                                    </div>
                                    <div className="flex md:gap-6 gap-4 items-start">
                                        <div className="md:size-14 size-12 flex items-center justify-center shrink-0 rounded-xl bg-[#FF6B39]">
                                            <Svg name="cart" className="size-8 text-white" />
                                        </div>
                                        <div className="w-full flex flex-col md:gap-3 gap-1">
                                            <h3 className="w-full xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-white">Smart Cart</h3>
                                            <div className="w-full xl:text-sm text-xs font-normal text-white">The smart cart features can increase your conversions up to 2x by adding other relevant products with savings deals, such as dynamic bundling. It also shows the budget optimization, helping customers save.</div>
                                        </div>
                                    </div>
                                    <div className="flex md:gap-6 gap-4 items-start">
                                        <div className="md:size-14 size-12 flex items-center justify-center shrink-0 rounded-xl bg-[#7C239E]">
                                            <Svg name="trust" className="size-8 text-white" />
                                        </div>
                                        <div className="w-full flex flex-col md:gap-3 gap-1">
                                            <h3 className="w-full xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-white">Inventory Automation</h3>
                                            <div className="w-full xl:text-sm text-xs font-normal text-white">Using a Grocery delivery app for business can automate inventory tasks such as updating inventory across dark stores. Before the stock goes low, you can get an alert to refill the stock in real time.</div>
                                        </div>
                                    </div>
                                    <div className="flex md:gap-6 gap-4 items-start">
                                        <div className="md:size-14 size-12 flex items-center justify-center shrink-0 rounded-xl bg-[#7C239E]">
                                            <Svg name="analytics" className="size-8 text-white" />
                                        </div>
                                        <div className="w-full flex flex-col md:gap-3 gap-1">
                                            <h3 className="w-full xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-white">AI-Powered Analytics</h3>
                                            <div className="w-full xl:text-sm text-xs font-normal text-white">AI-powered analytics help quick commerce businesses with real-time sales tracking and forecasts. Cut delivery delays using heat maps and more, as you need to grow your business strategically.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:w-3/12 lg:w-4/12 w-full lg:bottom-0 lg:sticky">
                                <div className="w-full md:pt-8 max-md:px-8">
                                    <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantNextGen.webp" width="341" height="561" alt="Smart Q Commerce App Solutions With Smart Features" title="Smart Q Commerce App Solutions With Smart Features" className="w-full aspect-[341/561]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="processSection w-full relative overflow-hidden bg-[#7B239E]">
                <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                    <div className="flex flex-col w-full">
                        <h2 className="md:w-9/12 w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-white text-balance relative z-10 md:pb-8 pb-4 text-center mx-auto">How We Develop Your Q Commerce App for Instant Deliveries</h2>
                        <div className="md:w-10/12 w-full mx-auto md:text-sm text-xs font-normal text-white flex flex-col gap-3 text-center text-balance">As a premier grocery and food delivery app development company, IMG Global Infotech excels at developing instant delivery apps through unique processes and efforts. Here is a glimpse of it</div>
                        <div className="flex flex-wrap lg:pt-20 md:pt-10 pt-8 items-center md:justify-between justify-center group/process">
                            <div className="md:w-6/12 sm:w-10/12 w-full">
                                <div className="flex w-full swiper processSwiper pointer-events-none">
                                    <div className="swiper-wrapper flex !items-stretch">
                                        <div className="swiper-slide w-full slide1 *:[&.swiper-slide-active]:!opacity-100 *:!opacity-0 *:[&.swiper-slide-active]:!delay-500 *:!delay-100 *:[&.swiper-slide-active]:!scale-100 *:!scale-50 *:origin-left *:!duration-300">
                                            <h3 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-lg font-semibold text-white md:pb-6 pb-4">
                                                <span className="size-9 shrink-0 rounded-full bg-white inline-flex justify-center items-center mr-4">
                                                    <Svg name="lightBulb2" className="size-5 text-[#454444]" />
                                                </span>
                                                <span>Discovery & Ideation</span>
                                            </h3>
                                            <ul className="list-disc md:pl-14 ml-5 md:text-base sm:text-sm text-xs font-normal text-white flex flex-col gap-2">
                                                <li>Analysis of Business Requirement</li>
                                                <li>Market Research & Competitor Analysis</li>
                                                <li>Features Brainstorming</li>
                                                <li>Generate a strategic roadmap</li>
                                            </ul>
                                        </div>
                                        <div className="swiper-slide w-full slide2 *:[&.swiper-slide-active]:!opacity-100 *:!opacity-0 *:[&.swiper-slide-active]:!delay-500 *:!delay-100 *:[&.swiper-slide-active]:!scale-100 *:!scale-50 *:origin-left *:!duration-300">
                                            <h3 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-lg font-semibold text-white md:pb-6 pb-4">
                                                <span className="size-9 shrink-0 rounded-full bg-white inline-flex justify-center items-center mr-4">
                                                    <Svg name="ux" className="size-5 text-[#454444]" />
                                                </span>
                                                <span>Design & Prototype</span>
                                            </h3>
                                            <ul className="list-disc md:pl-14 ml-5 md:text-base sm:text-sm text-xs font-normal text-white flex flex-col gap-2">
                                                <li>Craft user-centric Interfaces</li>
                                                <li>Select interactive colors, fonts, and branding elements.</li>
                                                <li>Seamless navigation</li>
                                                <li>Discussion & Prototype Creation</li>
                                            </ul>
                                        </div>
                                        <div className="swiper-slide w-full slide3 *:[&.swiper-slide-active]:!opacity-100 *:!opacity-0 *:[&.swiper-slide-active]:!delay-500 *:!delay-100 *:[&.swiper-slide-active]:!scale-100 *:!scale-50 *:origin-left *:!duration-300">
                                            <h3 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-lg font-semibold text-white md:pb-6 pb-4">
                                                <span className="size-9 shrink-0 rounded-full bg-white inline-flex justify-center items-center mr-4">
                                                    <Svg name="appTesting" className="size-5 text-[#454444]" />
                                                </span>
                                                <span>Development</span>
                                            </h3>
                                            <ul className="list-disc md:pl-14 ml-5 md:text-base sm:text-sm text-xs font-normal text-white flex flex-col gap-2">
                                                <li>Frontend Development </li>
                                                <li>Build a robust and scalable backend framework.</li>
                                                <li>dedicated panels for customers, admins, and service providers.</li>
                                                <li>Maintain clear milestones</li>
                                            </ul>
                                        </div>
                                        <div className="swiper-slide w-full slide4 *:[&.swiper-slide-active]:!opacity-100 *:!opacity-0 *:[&.swiper-slide-active]:!delay-500 *:!delay-100 *:[&.swiper-slide-active]:!scale-100 *:!scale-50 *:origin-left *:!duration-300">
                                            <h3 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-lg font-semibold text-white md:pb-6 pb-4">
                                                <span className="size-9 shrink-0 rounded-full bg-white inline-flex justify-center items-center mr-4">
                                                    <Svg name="checkList" className="size-5 text-[#454444]" />
                                                </span>
                                                <span>Testing & Launch</span>
                                            </h3>
                                            <ul className="list-disc md:pl-14 ml-5 md:text-base sm:text-sm text-xs font-normal text-white flex flex-col gap-2">
                                                <li>Conduct testing and optimize app performance</li>
                                                <li>Applying different security measures</li>
                                                <li>Identify and fix bugs and vulnerabilities</li>
                                                <li>Final launch</li>
                                            </ul>
                                        </div>
                                        <div className="swiper-slide w-full slide5 *:[&.swiper-slide-active]:!opacity-100 *:!opacity-0 *:[&.swiper-slide-active]:!delay-500 *:!delay-100 *:[&.swiper-slide-active]:!scale-100 *:!scale-50 *:origin-left *:!duration-300">
                                            <h3 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-lg font-semibold text-white md:pb-6 pb-4">
                                                <span className="size-9 shrink-0 rounded-full bg-white inline-flex justify-center items-center mr-4">
                                                    <Svg name="headset" className="size-5 text-[#454444]" />
                                                </span>
                                                <span>Post-Launch Support</span>
                                            </h3>
                                            <ul className="list-disc md:pl-14 ml-5 md:text-base sm:text-sm text-xs font-normal text-white flex flex-col gap-2">
                                                <li>Execute a seamless app launch process.</li>
                                                <li>Provide scheduled updates and new features</li>
                                                <li>Monitor and optimize app performance</li>
                                                <li>Issues Resolution</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-5/12 md:w-6/12 w-auto max-md:order-first">
                                <div className="relative size-96 lg:scale-100 md:scale-75 sm:scale-90 scale-[0.60] md:origin-center origin-top max-sm:-mb-28">
                                    <svg className="size-full" viewBox="0 0 200 200">

                                        <circle cx="100" cy="100" r="1" fill="none" stroke="#9541B6" stroke-width="130" />

                                        <circle cx="100" cy="100" r="1" fill="none" stroke="#ffffff" stroke-width="90" />

                                        <circle cx="100" cy="100" r="95" fill="none" stroke="#AB66C7" stroke-width="5" />
                                        <circle id="progressCircle" cx="100" cy="100" r="95" fill="none" stroke="white" stroke-width="5" stroke-linecap="round" stroke-dasharray="596.9" stroke-dashoffset="calc(596.9 - (596.9 * 0 / 100))" transform="rotate(-55 100 100)" 
                                            className="
                                            will-change-transform
                                            {{-- duration-1000 --}}
                                            {{-- group-has-[.slide1.swiper-slide-active]/process:[stroke-dashoffset:calc(596.9-(596.9*0/100))]
                                            group-has-[.slide2.swiper-slide-active]/process:[stroke-dashoffset:calc(596.9-(596.9*20/100))]
                                            group-has-[.slide3.swiper-slide-active]/process:[stroke-dashoffset:calc(596.9-(596.9*40/100))]
                                            group-has-[.slide4.swiper-slide-active]/process:[stroke-dashoffset:calc(596.9-(596.9*60/100))]
                                            group-has-[.slide5.swiper-slide-active]/process:[stroke-dashoffset:calc(596.9-(596.9*80/100))] --}}
                                            " 
                                        />
                                    </svg>
                                
                                    <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDiscover&Ideation.webp" alt="Instant Discover & Ideation" title="Instant Discover & Ideation" data-slide="1" className="processBtn absolute cursor-pointer top-1/2 left-1/2 size-5/12 -translate-x-1/2 -translate-y-1/2 opacity-0 group-has-[.slide1.swiper-slide-active]/process:opacity-100 group-has-[.slide1.swiper-slide-active]/process:z-20 scale-150 group-has-[.slide1.swiper-slide-active]/process:scale-100 duration-300 aspect-square" width="160" height="160" / />
                                    <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDesign&Prototype.webp" alt="Instant Design & Prototype" title="Instant Design & Prototype" data-slide="2" className="processBtn absolute cursor-pointer top-1/2 left-1/2 size-5/12 -translate-x-1/2 -translate-y-1/2 opacity-0 group-has-[.slide2.swiper-slide-active]/process:opacity-100 group-has-[.slide2.swiper-slide-active]/process:z-20 scale-150 group-has-[.slide2.swiper-slide-active]/process:scale-100 duration-300 aspect-square" width="160" height="160" / />
                                    <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantDevelopment.webp" alt="Instant Development" title="Instant Development" data-slide="3" className="processBtn absolute cursor-pointer top-1/2 left-1/2 size-5/12 -translate-x-1/2 -translate-y-1/2 opacity-0 group-has-[.slide3.swiper-slide-active]/process:opacity-100 group-has-[.slide3.swiper-slide-active]/process:z-20 scale-150 group-has-[.slide3.swiper-slide-active]/process:scale-100 duration-300 aspect-square" width="160" height="160" / />
                                    <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantTesting&Launch.webp" alt="Instant Testing & Launch" title="Instant Testing & Launch" data-slide="4" className="processBtn absolute cursor-pointer top-1/2 left-1/2 size-5/12 -translate-x-1/2 -translate-y-1/2 opacity-0 group-has-[.slide4.swiper-slide-active]/process:opacity-100 group-has-[.slide4.swiper-slide-active]/process:z-20 scale-150 group-has-[.slide4.swiper-slide-active]/process:scale-100 duration-300 aspect-square" width="160" height="160" / />
                                    <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantSupport.webp" alt="Instant Support" title="Instant Support" data-slide="0" className="processBtn absolute cursor-pointer top-1/2 left-1/2 size-5/12 -translate-x-1/2 -translate-y-1/2 opacity-0 group-has-[.slide5.swiper-slide-active]/process:opacity-100 group-has-[.slide5.swiper-slide-active]/process:z-20 scale-150 group-has-[.slide5.swiper-slide-active]/process:scale-100 duration-300 aspect-square" width="160" height="160" / />

                                    
                                    <div className="absolute size-14 inset-0 m-auto">
                                    <div className="processBtn absolute cursor-pointer size-full shrink-0 rounded-full bg-[#BE89D4] group-has-[.slide1.swiper-slide-active]/process:bg-[#FF6B39] flex items-center justify-center lg:text-2xl md:text-xl sm:text-lg text-base font-bold text-[#7B239E] group-has-[.slide1.swiper-slide-active]/process:text-white ring-0 hover:lg:ring-8 group-has-[.slide1.swiper-slide-active]/process:ring-8 ring-[#7B239E] duration-300 -top-[150px] -right-[100px]" data-slide="0">
                                        <svg className="transform -rotate-90 size-full scale-105 absolute inset-0 [&_.bgCircle]:hidden [&_.valueCircle]:stroke-white duration-500 opacity-0 group-has-[.slide1.swiper-slide-active]/process:opacity-100 delay-300 group-has-[.slide1.swiper-slide-active]/process:[&_.valueCircle]:animate-progress-circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                            <circle className="valueCircle" cx="50%" cy="50%" r="40%" stroke="orange" stroke-width="3" fill="none" stroke-linecap="round" stroke-dasharray="251.2" stroke-dashoffset="calc(251.2 - (251.2 * 0 / 100)" />
                                        </svg>
                                        <span>01</span>
                                    </div>
                                    <div className="processBtn absolute cursor-pointer size-full shrink-0 rounded-full bg-[#BE89D4] group-has-[.slide2.swiper-slide-active]/process:bg-[#FF6B39] flex items-center justify-center lg:text-2xl md:text-xl sm:text-lg text-base font-bold text-[#7B239E] group-has-[.slide2.swiper-slide-active]/process:text-white ring-0 hover:lg:ring-8 group-has-[.slide2.swiper-slide-active]/process:ring-8 ring-[#7B239E] duration-300 top-[55px] -right-[172px]" data-slide="1">
                                        <svg className="transform -rotate-90 size-full scale-105 absolute inset-0 [&_.bgCircle]:hidden [&_.valueCircle]:stroke-white duration-500 opacity-0 group-has-[.slide2.swiper-slide-active]/process:opacity-100 delay-300 group-has-[.slide2.swiper-slide-active]/process:[&_.valueCircle]:animate-progress-circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                            <circle className="valueCircle" cx="50%" cy="50%" r="40%" stroke="orange" stroke-width="3" fill="none" stroke-linecap="round" stroke-dasharray="251.2" stroke-dashoffset="calc(251.2 - (251.2 * 0 / 100)" />
                                        </svg>
                                        <span>02</span>
                                    </div>
                                    <div className="processBtn absolute cursor-pointer size-full shrink-0 rounded-full bg-[#BE89D4] group-has-[.slide3.swiper-slide-active]/process:bg-[#FF6B39] flex items-center justify-center lg:text-2xl md:text-xl sm:text-lg text-base font-bold text-[#7B239E] group-has-[.slide3.swiper-slide-active]/process:text-white ring-0 hover:lg:ring-8 group-has-[.slide3.swiper-slide-active]/process:ring-8 ring-[#7B239E] duration-300 top-[180px]" data-slide="2">
                                        <svg className="transform -rotate-90 size-full scale-105 absolute inset-0 [&_.bgCircle]:hidden [&_.valueCircle]:stroke-white duration-500 opacity-0 group-has-[.slide3.swiper-slide-active]/process:opacity-100 delay-300 group-has-[.slide3.swiper-slide-active]/process:[&_.valueCircle]:animate-progress-circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                            <circle className="valueCircle" cx="50%" cy="50%" r="40%" stroke="orange" stroke-width="3" fill="none" stroke-linecap="round" stroke-dasharray="251.2" stroke-dashoffset="calc(251.2 - (251.2 * 0 / 100)" />
                                        </svg>
                                        <span>03</span>
                                    </div>
                                    <div className="processBtn absolute cursor-pointer size-full shrink-0 rounded-full bg-[#BE89D4] group-has-[.slide4.swiper-slide-active]/process:bg-[#FF6B39] flex items-center justify-center lg:text-2xl md:text-xl sm:text-lg text-base font-bold text-[#7B239E] group-has-[.slide4.swiper-slide-active]/process:text-white ring-0 hover:lg:ring-8 group-has-[.slide4.swiper-slide-active]/process:ring-8 ring-[#7B239E] duration-300 top-[55px] -left-[172px]" data-slide="3">
                                        <svg className="transform -rotate-90 size-full scale-105 absolute inset-0 [&_.bgCircle]:hidden [&_.valueCircle]:stroke-white duration-500 opacity-0 group-has-[.slide4.swiper-slide-active]/process:opacity-100 delay-300 group-has-[.slide4.swiper-slide-active]/process:[&_.valueCircle]:animate-progress-circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                            <circle className="valueCircle" cx="50%" cy="50%" r="40%" stroke="orange" stroke-width="3" fill="none" stroke-linecap="round" stroke-dasharray="251.2" stroke-dashoffset="calc(251.2 - (251.2 * 0 / 100)" />
                                        </svg>
                                        <span>04</span>
                                    </div>
                                    <div className="processBtn absolute cursor-pointer size-full shrink-0 rounded-full bg-[#BE89D4] group-has-[.slide5.swiper-slide-active]/process:bg-[#FF6B39] flex items-center justify-center lg:text-2xl md:text-xl sm:text-lg text-base font-bold text-[#7B239E] group-has-[.slide5.swiper-slide-active]/process:text-white ring-0 hover:lg:ring-8 group-has-[.slide5.swiper-slide-active]/process:ring-8 ring-[#7B239E] duration-300 -top-[145px] -left-[110px]" data-slide="4">
                                        <svg className="transform -rotate-90 size-full scale-105 absolute inset-0 [&_.bgCircle]:hidden [&_.valueCircle]:stroke-white duration-500 opacity-0 group-has-[.slide5.swiper-slide-active]/process:opacity-100 delay-300 group-has-[.slide5.swiper-slide-active]/process:[&_.valueCircle]:animate-progress-circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                            <circle className="valueCircle" cx="50%" cy="50%" r="40%" stroke="orange" stroke-width="3" fill="none" stroke-linecap="round" stroke-dasharray="251.2" stroke-dashoffset="calc(251.2 - (251.2 * 0 / 100)" />
                                        </svg>
                                        <span>05</span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta3Section w-full relative overflow-hidden bg-[#131514]">
                <div className="!container flex relative z-10">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-wrap justify-between md:py-10">
                            <div className="md:w-6/12 w-full xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                                <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-bold text-white text-balance relative z-10 max-md:text-center">We are not just an agency. We are your growth partner.</h2>
                                <div className="md:text-xl sm:text-lg text-base font-normal text-white pt-2.5 pb-7 text-balance max-md:text-center">We can help you develop an instant grocery delivery app that your customers would love. <br />
                                    <b>If you have a vision, we can make it version 1.0 for your delivery business.</b></div>
                                <div className="w-full md:pt-6 pt-4 max-md:text-center">
                                    <label htmlFor="leadPopup" className="cursor-pointer xl:text-base sm:text-sm text-xs md:font-semibold font-medium text-black inline-flex items-center xl:py-3 sm:py-2.5 py-2 xl:ps-6 sm:ps-4 ps-3 xl:pe-3 sm:pe-2.5 pe-1.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#FFFFFF] to-[#EDEBEB] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#EDEBEB] group/btn">
                                        <span>Let's Make It Happen!</span>
                                        <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#FFFFFF] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                            <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/fireIcon.webp" alt="Let's Make It Happen!" className="size-6 relative z-10 [&_path]:fill-[#EDEBEB]" width="60" height="60" />
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-7/12 w-full rounded-3xl flex items-center justify-center md:absolute md:inset-y-0 md:right-0">
                    <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantCta2.webp" width="890" height="534" alt="We are not just an agency. We are your growth partner." title="We are not just an agency. We are your growth partner." className="size-full object-cover md:object-left object-right-bottom max-md:aspect-[890/534]" />
                </div>
            </section>

            <section className="whyChooseUsSection w-full relative bg-white">
                <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                    <div className="flex flex-col w-full">
                        <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-[#454444] text-balance relative z-10 md:text-center lg:pb-8 pb-8">Why Choose IMG Global Infotech As Your Q Commerce App Development Company?</h2>
                        <div className="flex flex-wrap lg:items-center items-start justify-between">
                            <div className="xl:w-4/12 sm:w-4/12 w-full lg:static sm:sticky top-32 max-sm:order-last max-md:pt-7">
                                <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantWhy.webp" width="455" height="365" alt="Why Choose IMG Global As Your Q Commerce App Development Company?" title="Why Choose IMG Global As Your Q Commerce App Development Company?" className="size-full object-contain object-center aspect-[455/365]" />
                            </div>
                            <div className="xl:w-8/12 sm:w-8/12 flex flex-wrap gap-y-5 -mx-2.5">
                                <div className="lg:w-1/2 w-full px-2.5">
                                    <div className="flex flex-col rounded-3xl size-full bg-white shadow-[0px_3px_34.5px_0px_#0000001F] p-6 relative">
                                        <Svg name="plus" className="absolute bottom-0 lg:right-4 max-lg:right-6 lg:-translate-x-1/2 translate-y-1/2 size-6 text-[#FF6B39]" />
                                        <h3 className="xl:text-xl md:text-lg sm:text-base text-sm font-semibold text-[#454444] pb-1">AI-Powered Solutions</h3>
                                        <p className="xl:text-base sm:text-sm text-xs font-normal text-[#626262]">Cutting-edge artificial intelligence seamlessly enhances your Q-commerce operations. We specialize in delivering AI-powered solutions for food and grocery delivery businesses.</p>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full px-2.5">
                                    <div className="flex flex-col rounded-3xl size-full bg-white shadow-[0px_3px_34.5px_0px_#0000001F] p-6 relative">
                                        <Svg name="plus" className="absolute bottom-0 lg:right-4 max-lg:right-6 lg:-translate-x-1/2 translate-y-1/2 size-6 text-[#2D86FF]" />
                                        <h3 className="xl:text-xl md:text-lg sm:text-base text-sm font-semibold text-[#454444] pb-1">Complete Transparency</h3>
                                        <p className="xl:text-base sm:text-sm text-xs font-normal text-[#626262]">We maintain open communication and provide clear insights throughout the development process. You'll be notified about each milestone achieved and the project module we develop for you.</p>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full px-2.5">
                                    <div className="flex flex-col rounded-3xl size-full bg-white shadow-[0px_3px_34.5px_0px_#0000001F] p-6 relative">
                                        <Svg name="plus" className="absolute bottom-0 lg:right-4 max-lg:right-6 lg:-translate-x-1/2 translate-y-1/2 size-6 text-[#2D86FF]" />
                                        <h3 className="xl:text-xl md:text-lg sm:text-base text-sm font-semibold text-[#454444] pb-1">Affordable Pricing</h3>
                                        <p className="xl:text-base sm:text-sm text-xs font-normal text-[#626262]">Our competitive rates ensure exceptional value for your investment. We have expertise in fast delivery app development for businesses that want to thrive in a competitive market landscape.</p>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full px-2.5">
                                    <div className="flex flex-col rounded-3xl size-full bg-white shadow-[0px_3px_34.5px_0px_#0000001F] p-6 relative">
                                        <Svg name="plus" className="absolute bottom-0 lg:right-4 max-lg:right-6 lg:-translate-x-1/2 translate-y-1/2 size-6 text-[#FF6B39]" />
                                        <h3 className="xl:text-xl md:text-lg sm:text-base text-sm font-semibold text-[#454444] pb-1">Rich Expertise</h3>
                                        <p className="xl:text-base sm:text-sm text-xs font-normal text-[#626262]">Our seasoned team brings unparalleled knowledge to craft your ideal Q-commerce application. Whether it is Zepto vs. Blinkit vs. Instamart, we can develop it to align with all your needs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="appLookLikeSection w-full relative overflow-hidden bg-[#131514]">
                <div className="!container flex xl:pt-16 lg:pt-14 md:pt-12 sm:pt-10 pt-8 max-sm:!px-0">
                    <div className="flex flex-col w-full">
                        <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-white text-balance relative z-10 text-center max-sm:px-4">Check out How Your Q Commerce Mobile App Will Look Like</h2>
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
                            >
                            <div className="swiper-wrapper">
                                <div className="swiper-slide relative lg:p-[1.2%] md:p-[2.2%] p-[2.7%] group [&.swiper-slide-active]:!scale-100 md:!scale-95 !scale-90 duration-300">
                                    <Svg name="blackMobileFrame" className="size-full object-contain object-center absolute inset-0 text-[#404040] opacity-0 group-[&.swiper-slide-active]:opacity-100 scale-125 group-[&.swiper-slide-active]:scale-100 duration-300" />
                                    <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantLookLike1.webp" alt="Dating App Look like" title="Dating App Look like" className="size-full object-contain object-center"  width="225" height="501" />
                                </div>
                                <div className="swiper-slide relative lg:p-[1.2%] md:p-[2.2%] p-[2.7%] group [&.swiper-slide-active]:!scale-100 md:!scale-95 !scale-90 duration-300">
                                    <Svg name="blackMobileFrame" className="size-full object-contain object-center absolute inset-0 text-[#404040] opacity-0 group-[&.swiper-slide-active]:opacity-100 scale-125 group-[&.swiper-slide-active]:scale-100 duration-300" />
                                    <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantLookLike2.webp" alt="Dating App Look like" title="Dating App Look like" className="size-full object-contain object-center"  width="225" height="501" />
                                </div>
                                <div className="swiper-slide relative lg:p-[1.2%] md:p-[2.2%] p-[2.7%] group [&.swiper-slide-active]:!scale-100 md:!scale-95 !scale-90 duration-300">
                                    <Svg name="blackMobileFrame" className="size-full object-contain object-center absolute inset-0 text-[#404040] opacity-0 group-[&.swiper-slide-active]:opacity-100 scale-125 group-[&.swiper-slide-active]:scale-100 duration-300" />
                                    <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantLookLike3.webp" alt="Dating App Look like" title="Dating App Look like" className="size-full object-contain object-center"  width="225" height="501" />
                                </div>
                                <div className="swiper-slide relative lg:p-[1.2%] md:p-[2.2%] p-[2.7%] group [&.swiper-slide-active]:!scale-100 md:!scale-95 !scale-90 duration-300">
                                    <Svg name="blackMobileFrame" className="size-full object-contain object-center absolute inset-0 text-[#404040] opacity-0 group-[&.swiper-slide-active]:opacity-100 scale-125 group-[&.swiper-slide-active]:scale-100 duration-300" />
                                    <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantLookLike4.webp" alt="Dating App Look like" title="Dating App Look like" className="size-full object-contain object-center"  width="225" height="501" />
                                </div>
                                <div className="swiper-slide relative lg:p-[1.2%] md:p-[2.2%] p-[2.7%] group [&.swiper-slide-active]:!scale-100 md:!scale-95 !scale-90 duration-300">
                                    <Svg name="blackMobileFrame" className="size-full object-contain object-center absolute inset-0 text-[#404040] opacity-0 group-[&.swiper-slide-active]:opacity-100 scale-125 group-[&.swiper-slide-active]:scale-100 duration-300" />
                                    <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantLookLike5.webp" alt="Dating App Look like" title="Dating App Look like" className="size-full object-contain object-center"  width="225" height="501" />
                                </div>
                                <div className="swiper-slide relative lg:p-[1.2%] md:p-[2.2%] p-[2.7%] group [&.swiper-slide-active]:!scale-100 md:!scale-95 !scale-90 duration-300">
                                    <Svg name="blackMobileFrame" className="size-full object-contain object-center absolute inset-0 text-[#404040] opacity-0 group-[&.swiper-slide-active]:opacity-100 scale-125 group-[&.swiper-slide-active]:scale-100 duration-300" />
                                    <Image loading="lazy" fetchpriority="low" decoding="async" src="https://d1y41eupgbwbb2.cloudfront.net/images/instantLookLike6.webp" alt="Dating App Look like" title="Dating App Look like" className="size-full object-contain object-center"  width="225" height="501" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

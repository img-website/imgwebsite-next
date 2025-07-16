"use client";

import Svg from "@/components/svg";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide, Navigation, Autoplay } from '@/components/CustomSwiper';
import ContactUs from "@/components/ContactUs";


export default function GroceryAppDevelopment() {
    return (
        <>
            <section className="heroSection xl:pt-[116px] lg:pt-[90px] md:pt-[88px] pt-16 relative overflow-hidden md:min-h-dvh max-md:!h-auto flex flex-col max-md:pb-6 bg-[#F4FFFE]">
                <div className="!container flex flex-wrap relative z-10 grow justify-between">
                    <div className="xl:w-5/12 lg:w-1/2 md:w-5/12 w-full flex flex-col">
                        <div className="grow xl:py-12 lg:py-6 py-3"></div>
                        <h1 className="w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl md:font-bold font-semibold text-[#454444] text-balance relative max-md:text-center"><span className="text-[#22C56B]">Grocery Delivery</span> App Development Company | 10 minute Delivery Apps</h1>
                        <div className="w-full xl:text-base md:text-sm text-sm font-normal text-[#454444] md:pt-4 pt-2 pb-8 max-md:text-center min-h-10">Looking to build an instant grocery delivery app like Instacart or BigBasket? Connect with IMG Global Infotech – India’s leading grocery delivery app development company offering ready-made solutions tailored to your business needs. Our feature-rich app lets you manage inventory, receive real-time alerts on pricing and availability, enable multiple payment modes, and streamline communication with customers and staff. Take your grocery business online and become the next big name in the industry.</div>
                        <div className="w-full max-md:text-center">
                            <label htmlFor="leadPopup" className="cursor-pointer xl:text-base text-sm font-semibold text-white inline-flex items-center xl:py-3 py-2.5 xl:ps-6 ps-4 xl:pe-3 pe-2.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#3BCD7D] to-[#0DB65A] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#0DB65A] group/btn">
                                <span>Consult Our Experts</span>
                                <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#3BCD7D] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                    <Svg name="arrowCall" className="size-3 relative z-10 text-[#11B85D]" />
                                </div>
                            </label>
                        </div>
                        <div className="grow xl:py-12 lg:py-6 py-3 max-md:hidden"></div>
                    </div>
                    <div className="xl:w-7/12 lg:w-1/2 md:w-7/12 w-full flex flex-col relative max-md:order-first">
                        <div className="xl:rounded-xl rounded-lg bg-white shadow-[0px_0px_12.5px_0px_#0000001F] xl:py-2 py-1.5 xl:px-4 px-2 inline-flex items-center xl:gap-2 gap-1.5 absolute top-0 right-0 md:translate-y-full translate-y-1/2 md:-translate-x-1/2 z-[1]">
                            <div className="xl:size-9 size-7 flex items-center justify-center rounded-full shrink-0 bg-[#2D86FF]">
                                <Svg name="sellTag" className="xl:size-5 size-4 relative z-10 text-[#EFD425]" />
                            </div>
                            <div className="grow flex flex-col">
                                <div className="w-full md:text-xs text-[10px] font-normal text-[#2D86FF]">Flat <b>20%</b> off</div>
                                <div className="w-full md:text-sm text-xs font-semibold text-[#454444]"><span>₹260</span> <del className="md:text-[10px] text-[8px] font-medium text-[#9F9F9F] ">₹300</del></div>
                            </div>
                        </div>
                        <div className="xl:rounded-xl rounded-lg bg-white shadow-[0px_0px_12.5px_0px_#0000001F] xl:py-2 py-1.5 xl:px-4 px-2 inline-flex items-center xl:gap-2 gap-1.5 absolute top-1/4 right-0 translate-y-1/2 md:-translate-x-1/4 z-[1]">
                            <div className="xl:size-9 size-7 flex items-center justify-center rounded-full shrink-0 bg-[#FF6B39]">
                                <Svg name="deliveryTime" className="xl:size-5 size-4 relative z-10 text-white" />
                            </div>
                            <div className="grow flex flex-col">
                                <div className="w-full md:text-xs text-[10px] font-normal text-[#454444]">Delivery ETA</div>
                                <div className="w-full md:text-sm text-xs font-semibold text-[#454444]">10 Min</div>
                            </div>
                        </div>
                        <div className="xl:rounded-xl rounded-lg bg-white shadow-[0px_0px_12.5px_0px_#0000001F] xl:py-2 py-1.5 xl:px-4 px-2 inline-flex items-center xl:gap-2 gap-1.5 absolute top-2/3 left-0 xl:translate-x-3/4 md:translate-x-1/4 z-[1]">
                            <div className="size-6 flex items-center justify-center rounded-full shrink-0 bg-[#1CBA63]">
                                <Svg name="checkSmall" className="size-4 relative z-10 text-white" />
                            </div>
                            <div className="w-auto md:text-sm text-xs font-semibold text-[#454444]">Delivery Complete</div>
                        </div>
                        <Image priority={true} src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryHeroImage.webp" width="380" height="414" alt="Grocery Delivery App Development Company" title="Grocery Delivery App Development Company" className="md:absolute md:top-0 md:inset-x-0 md:bottom-0 md:size-full w-full object-contain md:object-right-bottom object-center md:aspect-[672/733] aspect-[380/414]" />
                    </div>
                </div>
            </section>

            <section className="cta1Section w-full relative overflow-hidden">
                <div className="!container flex md:pb-32 pb-20">
                    <div className="flex flex-col w-full bg-[#0D321D] rounded-3xl xl:pt-16 lg:pt-14 md:pt-12 sm:pt-10 pt-8 px-4">
                        <div className="flex flex-col justify-between">
                            <div className="w-full">
                                <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-white text-balance relative z-10 text-center">Why should your business develop a grocery delivery app?</h2>
                                <div className="md:text-sm text-xs font-normal text-white pt-4 text-center text-balance">An innovative idea to create an application for grocery delivery can be effective for startups since people's interest in online shopping has increased. It is ideal for customers, increases sales, and promotes the recognition of a business. A smooth delivery app can satisfy the customer, enhance firm loyalty, and give you a competitive edge. Our <Link href="instant-delivery-app-development-company.php" className="hover:lg:underline font-semibold inline text-white">Instant Grocery Delivery App Development</Link> solutions are designed to deliver customized apps tailored to your unique business needs.</div>
                            </div>
                            <div className="flex flex-wrap items-stretch 2xl:px-14 xl:px-10 md:px-8 px-4 md:pt-16 pt-8 md:-mb-32 -mb-16 2xl:gap-y-8 xl:gap-y-6 gap-y-5 2xl:-mx-4 xl:-mx-3 -mx-2.5">
                                <div className="lg:w-1/4 w-1/2 2xl:px-4 xl:px-3 px-2.5 group">
                                    <div className="2xl:rounded-2xl rounded-xl bg-[#0CB85A] 2xl:py-8 xl:py-6 py-4 2xl:px-4 xl:px-3 px-2.5 flex flex-col justify-center items-center gap-3 aspect-square group-hover:lg:scale-95 duration-300 h-full">
                                        <div className="2xl:size-24 xl:size-20 lg:size-16 size-14 flex items-center justify-center rounded-full shrink-0 bg-[#6ACB8E]">
                                            <Svg name="analytics" className="2xl:size-12 xl:size-10 lg:size-8 size-6 relative z-10 text-white" />
                                        </div>
                                        <h3 className="w-full 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-semibold text-white text-center">Increased <br /> sales</h3>
                                    </div>
                                </div>
                                <div className="lg:w-1/4 w-1/2 2xl:px-4 xl:px-3 px-2.5 group">
                                    <div className="2xl:rounded-2xl rounded-xl bg-[#0CB85A] 2xl:py-8 xl:py-6 py-4 2xl:px-4 xl:px-3 px-2.5 flex flex-col justify-center items-center gap-3 aspect-square group-hover:lg:scale-95 duration-300 h-full">
                                        <div className="2xl:size-24 xl:size-20 lg:size-16 size-14 flex items-center justify-center rounded-full shrink-0 bg-[#6ACB8E]">
                                            <Svg name="enhancedConvenience" className="2xl:size-12 xl:size-10 lg:size-8 size-6 relative z-10 text-white" />
                                        </div>
                                        <h3 className="w-full 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-semibold text-white text-center">Enhanced <br /> convenience</h3>
                                    </div>
                                </div>
                                <div className="lg:w-1/4 w-1/2 2xl:px-4 xl:px-3 px-2.5 group">
                                    <div className="2xl:rounded-2xl rounded-xl bg-[#0CB85A] 2xl:py-8 xl:py-6 py-4 2xl:px-4 xl:px-3 px-2.5 flex flex-col justify-center items-center gap-3 aspect-square group-hover:lg:scale-95 duration-300 h-full">
                                        <div className="2xl:size-24 xl:size-20 lg:size-16 size-14 flex items-center justify-center rounded-full shrink-0 bg-[#6ACB8E]">
                                            <Svg name="verified" className="2xl:size-12 xl:size-10 lg:size-8 size-6 relative z-10 text-white" />
                                        </div>
                                        <h3 className="w-full 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-semibold text-white text-center">Enhanced <br /> Loyalty</h3>
                                    </div>
                                </div>
                                <div className="lg:w-1/4 w-1/2 2xl:px-4 xl:px-3 px-2.5 group">
                                    <div className="2xl:rounded-2xl rounded-xl bg-[#0CB85A] 2xl:py-8 xl:py-6 py-4 2xl:px-4 xl:px-3 px-2.5 flex flex-col justify-center items-center gap-3 aspect-square group-hover:lg:scale-95 duration-300 h-full">
                                        <div className="2xl:size-24 xl:size-20 lg:size-16 size-14 flex items-center justify-center rounded-full shrink-0 bg-[#6ACB8E]">
                                            <Svg name="competitiveEdge" className="2xl:size-12 xl:size-10 lg:size-8 size-6 relative z-10 text-white" />
                                        </div>
                                        <h3 className="w-full 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-semibold text-white text-center">Competitive <br /> edge</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="whySection w-full relative overflow-hidden bg-white">
                <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                    <div className="flex flex-col w-full">
                        <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-[#454444] text-balance relative z-10 md:text-center md:pb-4 pb-2">Why We Are a Trusted Leader in Custom Grocery App Development Solutions</h2>
                        <div className="w-full 2xl:text-lg xl:text-base md:text-sm text-xs font-normal text-[#626262] text-balance relative z-10 md:text-center md:pb-12 pb-5">Our Grocery Mobile App Development services are aimed at addressing the specific needs of your business. Developed with your company's image in mind, these services fit easily into your business by allowing customers easy access to manageable orders, inventories, and delivery dates.</div>
                        <div className="flex flex-wrap items-stretch pt-8 gap-y-8">
                            <div className="lg:w-1/3 w-full md:px-4 px-2.5 xl:pt-48 pt-32 group/why">
                                <div className="w-full lg:bg-[#0D321D] bg-[#0CB85A] group-hover/why:lg:bg-[#0CB85A] group-hover/why:lg:shadow-[0px_4px_17px_0px_#00000040] group-hover/why:lg:-translate-y-8 duration-300 rounded-2xl py-8 px-6 flex flex-col gap-4 relative h-full">
                                    <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/solutionForCustomers.webp" alt="Solutions for Customers" title="Solutions for Customers" className="w-full xl:h-48 h-32 object-contain object-left-bottom absolute top-0 inset-x-0 -translate-y-full lg:grayscale group-hover/why:lg:grayscale-0 duration-300 md:aspect-[141/64]" width="423" height="192" />
                                    <h3 className="2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-sm font-semibold text-white">Solutions for Customers</h3>
                                    <ul className="flex flex-col xl:gap-4 lg:gap-3 gap-4">
                                        <li className="flex items-center xl:gap-2 lg:gap-1.5 gap-2">
                                            <Svg name="checkSmall" className="lg:text-[#84CC02] text-white group-hover/why:lg:text-white duration-300 xl:size-7 size-6 shrink-0 relative z-10" />
                                            <span className="xl:text-xs lg:text-[10px] text-xs font-normal text-white">Live order tracing & ETA updates</span>
                                        </li>
                                        <li className="flex items-center xl:gap-2 lg:gap-1.5 gap-2">
                                            <Svg name="checkSmall" className="lg:text-[#84CC02] text-white group-hover/why:lg:text-white duration-300 xl:size-7 size-6 shrink-0 relative z-10" />
                                            <span className="xl:text-xs lg:text-[10px] text-xs font-normal text-white">AI-Powered product recommendations</span>
                                        </li>
                                        <li className="flex items-center xl:gap-2 lg:gap-1.5 gap-2">
                                            <Svg name="checkSmall" className="lg:text-[#84CC02] text-white group-hover/why:lg:text-white duration-300 xl:size-7 size-6 shrink-0 relative z-10" />
                                            <span className="xl:text-xs lg:text-[10px] text-xs font-normal text-white">Multiple payment integrations </span>
                                        </li>
                                        <li className="flex items-center xl:gap-2 lg:gap-1.5 gap-2">
                                            <Svg name="checkSmall" className="lg:text-[#84CC02] text-white group-hover/why:lg:text-white duration-300 xl:size-7 size-6 shrink-0 relative z-10" />
                                            <span className="xl:text-xs lg:text-[10px] text-xs font-normal text-white">AI- Powered nearest stock allocations</span>
                                        </li>
                                        <li className="flex items-center xl:gap-2 lg:gap-1.5 gap-2">
                                            <Svg name="checkSmall" className="lg:text-[#84CC02] text-white group-hover/why:lg:text-white duration-300 xl:size-7 size-6 shrink-0 relative z-10" />
                                            <span className="xl:text-xs lg:text-[10px] text-xs font-normal text-white">Voice based search and order placements</span>
                                        </li>
                                        <li className="flex items-center xl:gap-2 lg:gap-1.5 gap-2">
                                            <Svg name="checkSmall" className="lg:text-[#84CC02] text-white group-hover/why:lg:text-white duration-300 xl:size-7 size-6 shrink-0 relative z-10" />
                                            <span className="xl:text-xs lg:text-[10px] text-xs font-normal text-white">Auto reorder and scheduled deliveries </span>
                                        </li>
                                        <li className="flex items-center xl:gap-2 lg:gap-1.5 gap-2">
                                            <Svg name="checkSmall" className="lg:text-[#84CC02] text-white group-hover/why:lg:text-white duration-300 xl:size-7 size-6 shrink-0 relative z-10" />
                                            <span className="xl:text-xs lg:text-[10px] text-xs font-normal text-white">Updates abouts deals, offers & discounts</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:w-1/3 w-full md:px-4 px-2.5 xl:pt-48 pt-32 group/why">
                                <div className="w-full lg:bg-[#0D321D] bg-[#0CB85A] group-hover/why:lg:bg-[#0CB85A] group-hover/why:lg:shadow-[0px_4px_17px_0px_#00000040] group-hover/why:lg:-translate-y-8 duration-300 rounded-2xl py-8 px-6 flex flex-col gap-4 relative h-full">
                                    <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/solutionsForVendors.webp" alt="Solutions for Vendors" title="Solutions for Vendors" className="w-full xl:h-48 h-32 object-contain object-left-bottom absolute top-0 inset-x-0 -translate-y-full lg:grayscale group-hover/why:lg:grayscale-0 duration-300 md:aspect-[141/64]" width="423" height="192" />
                                    <h3 className="2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-sm font-semibold text-white">Solutions for Vendors</h3>
                                    <ul className="flex flex-col xl:gap-4 lg:gap-3 gap-4">
                                        <li className="flex items-center xl:gap-2 lg:gap-1.5 gap-2">
                                            <Svg name="checkSmall" className="lg:text-[#84CC02] text-white group-hover/why:lg:text-white duration-300 xl:size-7 size-6 shrink-0 relative z-10" />
                                            <span className="xl:text-xs lg:text-[10px] text-xs font-normal text-white">AI-Powered inventory management</span>
                                        </li>
                                        <li className="flex items-center xl:gap-2 lg:gap-1.5 gap-2">
                                            <Svg name="checkSmall" className="lg:text-[#84CC02] text-white group-hover/why:lg:text-white duration-300 xl:size-7 size-6 shrink-0 relative z-10" />
                                            <span className="xl:text-xs lg:text-[10px] text-xs font-normal text-white">AI- Powered predictive demand forecasting analytics</span>
                                        </li>
                                        <li className="flex items-center xl:gap-2 lg:gap-1.5 gap-2">
                                            <Svg name="checkSmall" className="lg:text-[#84CC02] text-white group-hover/why:lg:text-white duration-300 xl:size-7 size-6 shrink-0 relative z-10" />
                                            <span className="xl:text-xs lg:text-[10px] text-xs font-normal text-white">Smart barcode scanning for quick checkouts </span>
                                        </li>
                                        <li className="flex items-center xl:gap-2 lg:gap-1.5 gap-2">
                                            <Svg name="checkSmall" className="lg:text-[#84CC02] text-white group-hover/why:lg:text-white duration-300 xl:size-7 size-6 shrink-0 relative z-10" />
                                            <span className="xl:text-xs lg:text-[10px] text-xs font-normal text-white">Safe & secure transactions</span>
                                        </li>
                                        <li className="flex items-center xl:gap-2 lg:gap-1.5 gap-2">
                                            <Svg name="checkSmall" className="lg:text-[#84CC02] text-white group-hover/why:lg:text-white duration-300 xl:size-7 size-6 shrink-0 relative z-10" />
                                            <span className="xl:text-xs lg:text-[10px] text-xs font-normal text-white">AI-Powered order, history & sales analysis </span>
                                        </li>
                                        <li className="flex items-center xl:gap-2 lg:gap-1.5 gap-2">
                                            <Svg name="checkSmall" className="lg:text-[#84CC02] text-white group-hover/why:lg:text-white duration-300 xl:size-7 size-6 shrink-0 relative z-10" />
                                            <span className="xl:text-xs lg:text-[10px] text-xs font-normal text-white">Automated invoicing & billing systems </span>
                                        </li>
                                        <li className="flex items-center xl:gap-2 lg:gap-1.5 gap-2">
                                            <Svg name="checkSmall" className="lg:text-[#84CC02] text-white group-hover/why:lg:text-white duration-300 xl:size-7 size-6 shrink-0 relative z-10" />
                                            <span className="xl:text-xs lg:text-[10px] text-xs font-normal text-white">Route optimization for fast deliveries</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:w-1/3 w-full md:px-4 px-2.5 xl:pt-48 pt-32 group/why">
                                <div className="w-full lg:bg-[#0D321D] bg-[#0CB85A] group-hover/why:lg:bg-[#0CB85A] group-hover/why:lg:shadow-[0px_4px_17px_0px_#00000040] group-hover/why:lg:-translate-y-8 duration-300 rounded-2xl py-8 px-6 flex flex-col gap-4 relative h-full">
                                    <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/solutionsForEnterprizes.webp" alt="Solutions for Enterprizes" title="Solutions for Enterprizes" className="w-full xl:h-48 h-32 object-contain object-bottom absolute top-0 inset-x-0 -translate-y-full lg:grayscale group-hover/why:lg:grayscale-0 duration-300 md:aspect-[141/64]" width="423" height="192" />
                                    <h3 className="2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-sm font-semibold text-white">Solutions for Enterprizes</h3>
                                    <ul className="flex flex-col xl:gap-4 lg:gap-3 gap-4">
                                        <li className="flex items-center xl:gap-2 lg:gap-1.5 gap-2">
                                            <Svg name="checkSmall" className="lg:text-[#84CC02] text-white group-hover/why:lg:text-white duration-300 xl:size-7 size-6 shrink-0 relative z-10" />
                                            <span className="xl:text-xs lg:text-[10px] text-xs font-normal text-white">AI-Powered stock alerts & inventory refilling</span>
                                        </li>
                                        <li className="flex items-center xl:gap-2 lg:gap-1.5 gap-2">
                                            <Svg name="checkSmall" className="lg:text-[#84CC02] text-white group-hover/why:lg:text-white duration-300 xl:size-7 size-6 shrink-0 relative z-10" />
                                            <span className="xl:text-xs lg:text-[10px] text-xs font-normal text-white">IOT-Based temperature monitoring for perishables</span>
                                        </li>
                                        <li className="flex items-center xl:gap-2 lg:gap-1.5 gap-2">
                                            <Svg name="checkSmall" className="lg:text-[#84CC02] text-white group-hover/why:lg:text-white duration-300 xl:size-7 size-6 shrink-0 relative z-10" />
                                            <span className="xl:text-xs lg:text-[10px] text-xs font-normal text-white">Smart contracts for vendor payments </span>
                                        </li>
                                        <li className="flex items-center xl:gap-2 lg:gap-1.5 gap-2">
                                            <Svg name="checkSmall" className="lg:text-[#84CC02] text-white group-hover/why:lg:text-white duration-300 xl:size-7 size-6 shrink-0 relative z-10" />
                                            <span className="xl:text-xs lg:text-[10px] text-xs font-normal text-white">Serverless computing for cart efficiency</span>
                                        </li>
                                        <li className="flex items-center xl:gap-2 lg:gap-1.5 gap-2">
                                            <Svg name="checkSmall" className="lg:text-[#84CC02] text-white group-hover/why:lg:text-white duration-300 xl:size-7 size-6 shrink-0 relative z-10" />
                                            <span className="xl:text-xs lg:text-[10px] text-xs font-normal text-white">Scalable for handling peak traffic & demand</span>
                                        </li>
                                        <li className="flex items-center xl:gap-2 lg:gap-1.5 gap-2">
                                            <Svg name="checkSmall" className="lg:text-[#84CC02] text-white group-hover/why:lg:text-white duration-300 xl:size-7 size-6 shrink-0 relative z-10" />
                                            <span className="xl:text-xs lg:text-[10px] text-xs font-normal text-white">Cloud hosted data backup & recovery</span>
                                        </li>
                                        <li className="flex items-center xl:gap-2 lg:gap-1.5 gap-2">
                                            <Svg name="checkSmall" className="lg:text-[#84CC02] text-white group-hover/why:lg:text-white duration-300 xl:size-7 size-6 shrink-0 relative z-10" />
                                            <span className="xl:text-xs lg:text-[10px] text-xs font-normal text-white">Warehouse & supply chain integration</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="keySection group/key w-full relative bg-white">
                <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8 max-sm:!px-0">
                    <div className="flex flex-col w-full">
                        <h2 className="w-full max-sm:px-4 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-[#454444] text-balance relative z-10 text-center">Key Features of Our <span className="text-[#0CB85A]">Grocery Delivery App</span></h2>
                        <div className="w-full max-sm:px-4 flex items-center justify-center md:pt-8 pt-4">
                            <div className="inline-flex items-center justify-center gap-1 rounded-full bg-white shadow-[0px_3px_34px_0px_#0000001F]">
                                <label htmlFor="panel1" className="md:py-4 py-3 lg:px-12 md:px-10 sm:px-6 px-6 rounded-full xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-semibold text-[#454444] cursor-pointer group-has-[#panel1:checked]/key:bg-[#0CB85A] group-has-[#panel1:checked]/key:text-white"><h3>User <span className="max-sm:hidden">App</span></h3></label>
                                <label htmlFor="panel2" className="md:py-4 py-3 lg:px-12 md:px-10 sm:px-6 px-6 rounded-full xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-semibold text-[#454444] cursor-pointer group-has-[#panel2:checked]/key:bg-[#0CB85A] group-has-[#panel2:checked]/key:text-white"><h3>Vendor <span className="max-sm:hidden">App</span></h3></label>
                                <label htmlFor="panel3" className="md:py-4 py-3 lg:px-12 md:px-10 sm:px-6 px-6 rounded-full xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-semibold text-[#454444] cursor-pointer group-has-[#panel3:checked]/key:bg-[#0CB85A] group-has-[#panel3:checked]/key:text-white"><h3>Admin <span className="max-sm:hidden">Panel</span></h3></label>
                            </div>
                        </div>
                        <div className="w-full items-start has-[#panel1:checked]:flex hidden">
                            <input type="radio" name="panel" id="panel1" className="hidden" defaultChecked />
                            <Swiper className="swiper xl:w-8/12 md:w-1/2 md:!pt-12 !pt-7 !pb-6 md:!overflow-visible *:max-md:!items-stretch *:md:!grid *:xl:!grid-cols-2 *:md:!grid-cols-1 *:md:!gap-x-8 *:md:!gap-y-6 *:md:!transform-none"
                                slidesPerView={1}
                                spaceBetween={8}
                                speed={1000}
                                loop={true}
                                >
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="userPanel1" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="userPanel" id="userPanel1" className="hidden" defaultChecked />
                                            <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryUserSeamlessShopping.webp" alt="Seamless Shopping" title="Seamless Shopping" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#0CB85A] group-has-[:checked]:md:bg-[#0CB85A] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#0CB85A]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Seamless Shopping</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">The easy-to-use app features a straightforward design that allows the perusal of products in an integrated nurture for seamless grocery needs each time.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="userPanel2" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="userPanel" id="userPanel2" className="hidden" />
                                            <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryUserWishlist.webp" alt="Wishlist & Favorites" title="Wishlist & Favorites" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#0CB85A] group-has-[:checked]:md:bg-[#0CB85A] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#0CB85A]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Wishlist & Favorites</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Save items in favor, building wishlists from which users can reorder or purchase later as per convenience.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="userPanel3" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="userPanel" id="userPanel3" className="hidden" />
                                            <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryUserFilters.webp" alt="Product Search Filters" title="Product Search Filters" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#0CB85A] group-has-[:checked]:md:bg-[#0CB85A] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#0CB85A]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Product Search Filters</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">With its diverse filters for category, pricing range, and ratings, our app makes your search easier.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="userPanel4" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="userPanel" id="userPanel4" className="hidden" />
                                            <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryUserTrack.webp" alt="Order Tracking" title="Order Tracking" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#0CB85A] group-has-[:checked]:md:bg-[#0CB85A] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#0CB85A]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Order Tracking</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">You can remain aware of order status and be updated throughout the process from beginning to end.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="userPanel5" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="userPanel" id="userPanel5" className="hidden" />
                                            <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryUserPromotion.webp" alt="Discounts & Promotions" title="Discounts & Promotions" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#0CB85A] group-has-[:checked]:md:bg-[#0CB85A] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#0CB85A]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Discounts & Promotions</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">The app offers personalized discounts and special offers directly through it, which would give every user an additional savings opportunity.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="userPanel6" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="userPanel" id="userPanel6" className="hidden" />
                                            <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryUserPayment.webp" alt="Multiple Payment Methods" title="Multiple Payment Methods" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#0CB85A] group-has-[:checked]:md:bg-[#0CB85A] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#0CB85A]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Multiple Payment Methods</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">The app can provide a variety of payment methods, ranging from cards to wallets, such as Visa, Paypal, etc.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                            </Swiper>
                            <div className="xl:w-4/12 md:w-1/2 pl-20 md:!pt-12 !pt-7 !pb-6 md:sticky md:top-16 md:bottom-0 md:h-dvh max-md:hidden flex flex-col justify-center">
                                <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryUserSeamlessShopping.webp" alt="Seamless Shopping" title="Seamless Shopping" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#userPanel1:checked]/key:md:block" />
                                <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryUserWishlist.webp" alt="Wishlist & Favorites" title="Wishlist & Favorites" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#userPanel2:checked]/key:md:block" />
                                <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryUserFilters.webp" alt="Product Search Filters" title="Product Search Filters" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#userPanel3:checked]/key:md:block" />
                                <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryUserTrack.webp" alt="Order Tracking" title="Order Tracking" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#userPanel4:checked]/key:md:block" />
                                <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryUserPromotion.webp" alt="Discounts & Promotions" title="Discounts & Promotions" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#userPanel5:checked]/key:md:block" />
                                <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryUserPayment.webp" alt="Multiple Payment Methods" title="Multiple Payment Methods" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#userPanel6:checked]/key:md:block" />
                            </div>
                        </div>
                        <div className="w-full items-start has-[#panel2:checked]:flex hidden">
                            <input type="radio" name="panel" id="panel2" className="hidden" />
                            <Swiper className="swiper xl:w-8/12 md:w-1/2 md:!pt-12 !pt-7 !pb-6 md:!overflow-visible *:max-md:!items-stretch *:md:!grid *:xl:!grid-cols-2 *:md:!grid-cols-1 *:md:!gap-x-8 *:md:!gap-y-6 *:md:!transform-none"
                                slidesPerView={1}
                                spaceBetween={8}
                                speed={1000}
                                loop={true}
                                >
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="servicePanel1" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="servicePanel" id="servicePanel1" className="hidden" defaultChecked />
                                            <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryStoreRealTimeStock.webp" alt="Real-Time Stock Updates" title="Real-Time Stock Updates" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#0CB85A] group-has-[:checked]:md:bg-[#0CB85A] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#0CB85A]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Real-Time Stock Updates</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Monitor the stock levels by real-time alerts, so managers never run out of popular products and subsequently manage effective inventory management.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="servicePanel2" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="servicePanel" id="servicePanel2" className="hidden" />
                                            <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryStoreOrderFulfilment.webp" alt="Order Fulfillment" title="Order Fulfillment" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#0CB85A] group-has-[:checked]:md:bg-[#0CB85A] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#0CB85A]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Order Fulfillment</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Make sure that the app will process customer orders accurately and fast to provide timely deliveries or pickups.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="servicePanel3" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="servicePanel" id="servicePanel3" className="hidden" />
                                            <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryStoreCategories.webp" alt="Product Categorization" title="Product Categorization" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#0CB85A] group-has-[:checked]:md:bg-[#0CB85A] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#0CB85A]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Product Categorization</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Allow easy organization of products into categories to make inventory management and customer browsing easy and efficient.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label  htmlFor="servicePanel4" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="servicePanel" id="servicePanel4" className="hidden" />
                                            <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryStoreDailySalesReport.webp" alt="Daily Sales Reports" title="Daily Sales Reports" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#0CB85A] group-has-[:checked]:md:bg-[#0CB85A] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#0CB85A]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Daily Sales Reports</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Let the store manager receive daily summaries of sales to keep track of how well your store is performing and what areas need improvement.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="servicePanel5" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="servicePanel" id="servicePanel5" className="hidden" />
                                            <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryStoreFeedback.webp" alt="Customer Feedback" title="Customer Feedback" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#0CB85A] group-has-[:checked]:md:bg-[#0CB85A] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#0CB85A]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Customer Feedback</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Get, read customer feedback, and reviews within the panel to further improve the quality of service rendered in your store.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="servicePanel6" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="servicePanel" id="servicePanel6" className="hidden" />
                                            <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryStoreStorePerformence.webp" alt="Store Performance Insights" title="Store Performance Insights" className="max-w-64 w-full mx-auto md:hidden aspect-[375/527]" width="375" height="527" />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#0CB85A] group-has-[:checked]:md:bg-[#0CB85A] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#0CB85A]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Store Performance Insights</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Provide detailed sales data and performance analysis to recognize trends and help enhance operations in-store.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                            </Swiper>
                            <div className="xl:w-4/12 md:w-1/2 pl-20 md:!pt-12 !pt-7 !pb-6 md:sticky md:top-16 md:bottom-0 md:h-dvh max-md:hidden flex flex-col justify-center">
                                <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryStoreRealTimeStock.webp" alt="Real-Time Stock Updates" title="Real-Time Stock Updates" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#servicePanel1:checked]/key:md:block" />
                                <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryStoreOrderFulfilment.webp" alt="Order Fulfillment" title="Order Fulfillment" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#servicePanel2:checked]/key:md:block" />
                                <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryStoreCategories.webp" alt="Product Categorization" title="Product Categorization" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#servicePanel3:checked]/key:md:block" />
                                <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryStoreDailySalesReport.webp" alt="Daily Sales Reports" title="Daily Sales Reports" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#servicePanel4:checked]/key:md:block" />
                                <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryStoreFeedback.webp" alt="Customer Feedback" title="Customer Feedback" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#servicePanel5:checked]/key:md:block" />
                                <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryStoreStorePerformence.webp" alt="Store Performance Insights" title="Store Performance Insights" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#servicePanel6:checked]/key:md:block" />
                            </div>
                        </div>
                        <div className="w-full items-start has-[#panel3:checked]:flex hidden">
                            <input type="radio" name="panel" id="panel3" className="hidden" />
                            <Swiper className="swiper xl:w-8/12 md:w-1/2 md:!pt-12 !pt-7 !pb-6 md:!overflow-visible *:max-md:!items-stretch *:md:!grid *:xl:!grid-cols-2 *:md:!grid-cols-1 *:md:!gap-x-8 *:md:!gap-y-6 *:md:!transform-none"
                                slidesPerView={1}
                                spaceBetween={8}
                                speed={1000}
                                loop={true}
                                >
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="adminPanel1" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="adminPanel" id="adminPanel1" className="hidden" defaultChecked />
                                            <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryAdmin.webp" alt="User management" title="User management" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]" width={256} height={179} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#0CB85A] group-has-[:checked]:md:bg-[#0CB85A] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#0CB85A]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">User management</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Manage and assign roles for your team members and make sure the right people have access to the right information for smooth operations.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="adminPanel2" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="adminPanel" id="adminPanel2" className="hidden" />
                                            <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryAdmin.webp" alt="Products Management" title="Products Management" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]" width={256} height={179} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#0CB85A] group-has-[:checked]:md:bg-[#0CB85A] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#0CB85A]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Products Management</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">You can add, update and delete products stored in your inventory from the admin panel with the push of a button.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="adminPanel3" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="adminPanel" id="adminPanel3" className="hidden" />
                                            <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryAdmin.webp" alt="Order management" title="Order management" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]" width={256} height={179} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#0CB85A] group-has-[:checked]:md:bg-[#0CB85A] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#0CB85A]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Order management</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">View and process user orders easily including an integrated order tracking, shipping, and returns handling tool, all in one place.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="adminPanel4" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="adminPanel" id="adminPanel4" className="hidden" />
                                            <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryAdmin.webp" alt="Inventory Management" title="Inventory Management" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]" width={256} height={179} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#0CB85A] group-has-[:checked]:md:bg-[#0CB85A] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#0CB85A]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Inventory Management</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">We allow you to keep a close eye on stock levels in real time and control product availability to avoid overselling stockouts.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="adminPanel5" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="adminPanel" id="adminPanel5" className="hidden" />
                                            <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryAdmin.webp" alt="Promotions and Discounts" title="Promotions and Discounts" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]" width={256} height={179} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#0CB85A] group-has-[:checked]:md:bg-[#0CB85A] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#0CB85A]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Promotions and Discounts</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Create, track, and manage sales events or discount codes right from the admin panel so that your business can receive more engagement and sales.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="adminPanel6" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="adminPanel" id="adminPanel6" className="hidden" />
                                            <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryAdmin.webp" alt="Reports and Analytics" title="Reports and Analytics" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]" width={256} height={179} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#0CB85A] group-has-[:checked]:md:bg-[#0CB85A] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#0CB85A]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Reports and Analytics</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Get detailed reports based on sales, inventory, and customer habits, so you can make informed decisions based on your precious data.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                            </Swiper>
                            <div className="xl:w-4/12 md:w-1/2 pl-20 md:!pt-12 !pt-7 !pb-6 md:sticky md:top-16 md:bottom-0 md:h-dvh max-md:hidden flex flex-col justify-center">
                                <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryAdmin.webp" alt="admin" title="admin" width="375" height="262" className="w-full mx-auto xl:max-w-96 max-w-64 max-md:hidden aspect-[375/262]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta1Section w-full relative overflow-hidden bg-[#1AB063]">
                <div className="!container flex relative">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-wrap justify-between">
                            <div className="md:w-6/12 w-full xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                                <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-white text-balance relative z-10 max-md:text-center">Run Your Own Instacart/Bigbasket Like App, Customized To Your Specific-Needs</h2>
                                <div className="w-full md:pt-6 pt-4 max-md:text-center">
                                    <label htmlFor="leadPopup" className="cursor-pointer xl:text-base sm:text-sm text-xs md:font-semibold font-medium text-[#454444] inline-flex items-center xl:py-3 sm:py-2.5 py-2 xl:ps-6 sm:ps-4 ps-3 xl:pe-3 sm:pe-2.5 pe-1.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#FFFFFF] to-[#D7E4FF] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#D7E4FF] group/btn">
                                        <span>Consult Our Experts</span>
                                        <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#1AB063] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                            <Svg name="arrowCall" className="size-3 relative z-10 text-[#454444]" />
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="md:w-5/12 w-full rounded-3xl flex items-center justify-center relative max-md:order-first max-md:pt-8 xl:ps-40 lg:ps-10 pt-6 max-md:max-w-80 max-md:mx-auto">
                                <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryCtaBg.webp" width="409" height="351" alt="Run Your Own Instacart/ Bigbasket Like App, Customized To Your Specific-Needs" title="Explore our features" className="size-full object-contain object-bottom md:aspect-[409/351]" />
                            </div>
                            <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryCtaLayer.webp" width="160" height="160" alt="Run Your Own Instacart/ Bigbasket Like App, Customized To Your Specific-Needs" title="Explore our features" className="size-40 object-contain object-bottom absolute -left-6 -bottom-6 -translate-x-1/2 max-lg:hidden aspect-squire" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="caseStudySection w-full relative overflow-hidden bg-white">
                <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                    <div className="flex flex-col w-full">
                        <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-[#454444] text-balance relative z-10 md:text-center md:pb-4 pb-2">Our Successful Grocery App Development Projects</h2>
                        <div className="w-full 2xl:text-lg xl:text-base md:text-sm text-xs md:font-medium font-normal text-[#454444] text-balance relative z-10 md:text-center md:pb-12 pb-5">Check out our success stories here and see how we assisted businesses grow with effective and customer-oriented grocery apps.</div>
                        <Swiper className="w-full swiper rounded-3xl"
                            slidesPerView={1}
                            spaceBetween={32}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false
                            }}
                            speed={1000}
                            loop={true}
                            navigation={{
                                nextEl: ".next",
                                prevEl: ".prev"
                            }}
                            modules={[Autoplay, Navigation]}
                            >    
                                <SwiperSlide className="swiper-slide !flex flex-wrap justify-between items-stretch bg-[#1D1D1D] rounded-3xl xl:p-12 md:p-8 py-6 px-4 gap-y-6">
                                    <div className="md:w-7/12 w-full">
                                        <div className="w-full flex items-center xl:gap-8 md:gap-4 gap-2">
                                            <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/quickBasketLogo.webp" className="w-auto md:h-14 h-12aspect-square" width="56" height="56" alt="QuickBasket Logo" title="QuickBasket Logo" />
                                            <h3 className="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg text-base font-bold text-[#6FEE99]">QuickBasket</h3>
                                        </div>
                                        <div className="w-full xl:text-sm lg:text-xs md:text-sm text-xs font-normal text-white xl:pt-4 pt-2 xl:pb-6 pb-4">Powered by IMG Global Infotech, QuickBasket was built to streamline their grocery shopping process. Featuring easy navigation, personalized shopping lists, and real-time order tracking ensures that fresh groceries are delivered quickly & efficiently.</div>
                                        <div className="flex items-center lg:gap-14 md:gap-10 gap-2">
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                                <div className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-white">50L+</div>
                                                <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-white">Downloads</div>
                                            </div>
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                                <div className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-white">4.7/5</div>
                                                <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-white">Rating</div>
                                            </div>
                                            <div className="w-auto inlne-flex flex-col gap-0.5 max-md:ml-auto">
                                                <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-white/70">Industry</div>
                                                <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-bold text-white">Online Grocery</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center lg:gap-3 gap-2 md:pt-6 pt-3">
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center xl:text-sm lg:text-xs md:text-sm text-xs md:font-medium font-semibold text-white">Available on</div>
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                                <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/playStoreBtnBlack.webp" className="w-auto xl:h-10 h-8 aspect-[120/40]" width="120" height="40" alt="PlayStore" title="PlayStore" />
                                            </div>
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                                <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/appStoreBtnBlack.webp" className="w-auto xl:h-10 h-8 aspect-[120/40]" width="120" height="40" alt="AppStore" title="AppStore" />
                                            </div>
                                        </div>
                                        <div className="w-full md:pt-8 pt-6">
                                            <label htmlFor="leadPopup" className="cursor-pointer xl:text-base sm:text-sm text-xs md:font-semibold font-medium text-white inline-flex items-center xl:py-3 sm:py-2.5 py-2 xl:ps-6 sm:ps-4 ps-3 xl:pe-3 sm:pe-2.5 pe-1.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#88E7A8] to-[#019A34] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#019A34] group/btn">
                                                <span>View Case Study</span>
                                                <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#88E7A8] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                                    <Svg name="arrowCall" className="size-3 relative z-10 text-[#019A34]" />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="md:w-4/12 w-full max-md:order-first rounded-3xl aspect-square flex items-center justify-center bg-gradient-to-br from-[#88E7A8] to-[#019A34] p-6">
                                        <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/quickBasket.webp" alt="QuickBasket" title="QuickBasket" className="size-full object-contain object-center" width={375} height={375} />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide !flex flex-wrap justify-between items-stretch bg-[#1D1D1D] rounded-3xl xl:p-12 md:p-8 py-6 px-4 gap-y-6">
                                    <div className="md:w-7/12 w-full">
                                        <div className="w-full flex items-center xl:gap-8 md:gap-4 gap-2">
                                            <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/freshPickLogo.webp" className="w-auto md:h-14 h-12aspect-square" width="67" height="56" alt="FreshPick Logo" title="FreshPick Logo" />
                                            <h3 className="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg text-base font-bold text-[#FF8933]">FreshPick</h3>
                                        </div>
                                        <div className="w-full xl:text-sm lg:text-xs md:text-sm text-xs font-normal text-white xl:pt-4 pt-2 xl:pb-6 pb-4">FreshPick is a feature-rich grocery app developed by our talented team of experts with cutting-edge technology. It offers features like quick store selection, order customization, and easy & quick search, providing users with a top-notch experience.</div>
                                        <div className="flex items-center lg:gap-14 md:gap-10 gap-2">
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                                <div className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-white">10L+</div>
                                                <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-white">Downloads</div>
                                            </div>
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                                <div className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-white">4.3/5</div>
                                                <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-white">Rating</div>
                                            </div>
                                            <div className="w-auto inlne-flex flex-col gap-0.5 max-md:ml-auto">
                                                <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-white/70">Industry</div>
                                                <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-bold text-white">Online Grocery</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center lg:gap-3 gap-2 md:pt-6 pt-3">
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center xl:text-sm lg:text-xs md:text-sm text-xs md:font-medium font-semibold text-white">Available on</div>
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                                <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/playStoreBtnBlack.webp" className="w-auto xl:h-10 h-8 aspect-[120/40]" width="120" height="40" alt="PlayStore" title="PlayStore" />
                                            </div>
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                                <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/appStoreBtnBlack.webp" className="w-auto xl:h-10 h-8 aspect-[120/40]" width="120" height="40" alt="AppStore" title="AppStore" />
                                            </div>
                                        </div>
                                        <div className="w-full md:pt-8 pt-6">
                                            <label htmlFor="leadPopup" className="cursor-pointer xl:text-base sm:text-sm text-xs md:font-semibold font-medium text-white inline-flex items-center xl:py-3 sm:py-2.5 py-2 xl:ps-6 sm:ps-4 ps-3 xl:pe-3 sm:pe-2.5 pe-1.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#FEBA56] to-[#FF8837] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#FF8837] group/btn">
                                                <span>View Case Study</span>
                                                <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#FEBA56] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                                    <Svg name="arrowCall" className="size-3 relative z-10 text-[#FF8837]" />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="md:w-4/12 w-full max-md:order-first rounded-3xl aspect-square flex items-center justify-center bg-gradient-to-br from-[#FEBA56] to-[#FF8837] p-6">
                                        <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/freshPick.webp" alt="FreshPick" title="FreshPick" className="size-full object-contain object-center" width={375} height={375} />
                                    </div>
                                </SwiperSlide>
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
                        </Swiper>
                    </div>
                </div>
            </section>

            <section className="cta2Section w-full relative overflow-hidden bg-[#0D321D]">
                <div className="!container flex relative">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-wrap justify-between xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8 gap-y-8">
                            <div className="md:w-7/12 w-full">
                                <div className="w-full xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-white text-balance relative z-10 text-center pb-4">The global grocery retail market has demonstrated steady growth in recent years.</div>
                                <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-white text-balance relative z-10 text-center pb-7">It's Perfect time to <br /><span className="text-[#84CC02] font-bold">own your grocery app</span></h2>
                                <div className="w-full flex max-sm:flex-col sm:gap-3 gap-6 md:pt-6 pt-4 max-md:text-center bg-[#1AB063] py-5 px-8 rounded-t-2xl relative before:absolute before:bottom-0 before:left-0 sm:before:max-w-48 before:translate-y-full before:rounded-b-md before:h-3 before:w-full before:bg-[#84CC02]">
                                    <div className="sm:grow max-sm:w-full inline-flex flex-col">
                                        <div className="w-auto 2xl:text-4xl xl:text-2xl md:text-xl text-lg font-semibold text-white pb-0.5">$12.3 trillion</div>
                                        <h3 className="w-auto xl:text-base text-sm font-normal text-white">Annual Revenue <br />Generated</h3>
                                    </div>
                                    <div className="sm:grow max-sm:w-full inline-flex flex-col">
                                        <div className="w-auto 2xl:text-4xl xl:text-2xl md:text-xl text-lg font-semibold text-white pb-0.5">$14.5 trillion</div>
                                        <h3 className="w-auto xl:text-base text-sm font-normal text-white">Expected Market Size <br />By 2029</h3>
                                    </div>
                                    <div className="sm:grow max-sm:w-full inline-flex flex-col">
                                        <div className="w-auto 2xl:text-4xl xl:text-2xl md:text-xl text-lg font-semibold text-white pb-0.5">3.4%</div>
                                        <h3 className="w-auto xl:text-base text-sm font-normal text-white">Compound Annual <br />Growth Rate</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-5/12 w-full rounded-3xl flex items-center justify-center relative order-first max-md:max-w-80 max-md:mx-auto max-md:-mt-8">
                                <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryAppCta2.webp" width="569" height="354" alt="It's Perfect time to own your grocery app" title="It's Perfect time to own your grocery app" className="sm:size-full w-full object-contain object-center md:absolute md:inset-0 aspect-[569/354]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="businessModelsSection w-full relative overflow-hidden bg-white">
                <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                    <div className="flex flex-col w-full">
                        <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-[#454444] text-balance relative z-10 md:text-center md:pb-4 pb-2">Our Expertise in <span className="text-[#FF6B39]">Grocery Delivery Apps Business Models</span></h2>
                        <div className="w-full 2xl:text-lg xl:text-base md:text-sm text-xs md:font-medium font-normal text-[#454444] text-balance relative z-10 md:text-center md:pb-12 pb-5">We at <b>IMG Global Infotech</b> have extensive experience in custom On-demand grocery app development that can suit any business model. If you own a small grocery outlet or a chain of supermarkets, we provide grocery ordering app development solutions for startups to businesses.</div>
                        <div className="flex flex-wrap xl:-mx-5 -mx-3 xl:gap-y-10 gap-y-6">
                            <div className="md:w-1/2 w-full xl:px-5 px-3">
                                <div className="w-full flex flex-col gap-6 bg-[#F2FFF8] rounded-2xl lg:p-16 md:p-10 p-8 h-full">
                                    <div className="w-full">
                                        <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/singleGroceryStoreApp.webp" width="160" height="160" alt="Single Grocery Store App" title="Single Grocery Store App" className="xl:size-48 md:size-36 size-24 object-contain object-center mx-auto aspect-square" />
                                    </div>
                                    <div className="w-full flex flex-col gap-4">
                                        <h3 className="w-full text-center xl:text-2xl md:text-xl sm:text-lg text-base font-semibold text-[#454444]">Single Grocery Store App</h3>
                                        <div className="w-full text-center xl:text-sm text-xs font-normal text-[#454444]">Our standalone grocery apps cater to independent grocery stores to help them facilitate online grocery shopping and delivery. That way, any customer will be able to easily navigate through and purchase items they desire.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-full xl:px-5 px-3">
                                <div className="w-full flex flex-col gap-6 bg-[#F2FFF8] rounded-2xl lg:p-16 md:p-10 p-8 h-full">
                                    <div className="w-full">
                                        <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryMarketplace.webp" width="160" height="160" alt="Grocery Marketplace" title="Grocery Marketplace" className="xl:size-48 md:size-36 size-24 object-contain object-center mx-auto aspect-square" />
                                    </div>
                                    <div className="w-full flex flex-col gap-4">
                                        <h3 className="w-full text-center xl:text-2xl md:text-xl sm:text-lg text-base font-semibold text-[#454444]">Grocery Marketplace</h3>
                                        <div className="w-full text-center xl:text-sm text-xs font-normal text-[#454444]">For giant grocery markets, our Grocery Market Plus apps offer an opportunity to have many sellers in a single store. That is ideal especially when you want to assemble a group of different brands under one roof.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-full xl:px-5 px-3">
                                <div className="w-full flex flex-col gap-6 bg-[#F2FFF8] rounded-2xl lg:p-16 md:p-10 p-8 h-full">
                                    <div className="w-full">
                                        <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryChain.webp" width="160" height="160" alt="Grocery Chain" title="Grocery Chain" className="xl:size-48 md:size-36 size-24 object-contain object-center mx-auto aspect-square" />
                                    </div>
                                    <div className="w-full flex flex-col gap-4">
                                        <h3 className="w-full text-center xl:text-2xl md:text-xl sm:text-lg text-base font-semibold text-[#454444]">Grocery Chain</h3>
                                        <div className="w-full text-center xl:text-sm text-xs font-normal text-[#454444]">Manage your all stores using a single dashboard panel. Where vendors can manage inventory, generate invoice track orders sales & transactions that can multiply the business growth hassle free.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-full xl:px-5 px-3">
                                <div className="w-full flex flex-col gap-6 bg-[#F2FFF8] rounded-2xl lg:p-16 md:p-10 p-8 h-full">
                                    <div className="w-full">
                                        <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/aggregatorsModel.webp" width="160" height="160" alt="Aggregators Model" title="Aggregators Model" className="xl:size-48 md:size-36 size-24 object-contain object-center mx-auto aspect-square" />
                                    </div>
                                    <div className="w-full flex flex-col gap-4">
                                        <h3 className="w-full text-center xl:text-2xl md:text-xl sm:text-lg text-base font-semibold text-[#454444]">Aggregators Model</h3>
                                        <div className="w-full text-center xl:text-sm text-xs font-normal text-[#454444]">The grocery delivery app enables customers to shop directly from the application without choosing the shop. Customers can select groceries through the app, and the app facilitates the ordering and payment process.</div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="nextGenSection w-full relative bg-[#010105]">
                <div className="!container flex z-10 relative">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-wrap justify-between relative items-end">
                            <div className="xl:w-8/12 lg:w-7/12 w-full rounded-3xl flex flex-col relative md:pl-8 xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                                <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-white text-balance relative z-10">How our Next Gen Technology make your Grocery App Smart, Efficient, fast & Secure</h2>
                                <div className="w-full grid xl:grid-cols-2 grid-cols-1 xl:gap-6 gap-10 md:pt-16 pt-8">
                                    <div className="flex md:gap-6 gap-4 items-start">
                                        <div className="md:size-14 size-12 flex items-center justify-center shrink-0 rounded-xl bg-[#84CC02]">
                                            <Svg name="artificialIntelligence" className="size-8 text-white" />
                                        </div>
                                        <div className="w-full flex flex-col md:gap-3 gap-1">
                                            <h3 className="w-full xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-white">AI-Powered Products Recommendations</h3>
                                            <div className="w-full xl:text-sm text-xs font-normal text-white">AI analyze purchase history, preferences, and seasonal trends to suggest relevant products.</div>
                                        </div>
                                    </div>
                                    <div className="flex md:gap-6 gap-4 items-start">
                                        <div className="md:size-14 size-12 flex items-center justify-center shrink-0 rounded-xl bg-[#84CC02]">
                                            <Svg name="generativeAi" className="size-8 text-white" />
                                        </div>
                                        <div className="w-full flex flex-col md:gap-3 gap-1">
                                            <h3 className="w-full xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-white">Voice Assistant Integration</h3>
                                            <div className="w-full xl:text-sm text-xs font-normal text-white"> Enables hands-free grocery shopping via Alexa, Google Assistant, or Siri.</div>
                                        </div>
                                    </div>
                                    <div className="flex md:gap-6 gap-4 items-start">
                                        <div className="md:size-14 size-12 flex items-center justify-center shrink-0 rounded-xl bg-[#84CC02]">
                                            <Svg name="blockchain" className="size-8 text-white" />
                                        </div>
                                        <div className="w-full flex flex-col md:gap-3 gap-1">
                                            <h3 className="w-full xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-white">AI-Powered Demand Forecasting</h3>
                                            <div className="w-full xl:text-sm text-xs font-normal text-white">Predicts demand patterns to avoid overstocking or shortages & Notifies store owners about low-stock items.</div>
                                        </div>
                                    </div>
                                    <div className="flex md:gap-6 gap-4 items-start">
                                        <div className="md:size-14 size-12 flex items-center justify-center shrink-0 rounded-xl bg-[#84CC02]">
                                            <Svg name="machinelearning" className="size-8 text-white" />
                                        </div>
                                        <div className="w-full flex flex-col md:gap-3 gap-1">
                                            <h3 className="w-full xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-white">Smart Cart Optimization:</h3>
                                            <div className="w-full xl:text-sm text-xs font-normal text-white">suggests better combinations (bulk discounts, alternative brands) to save money.</div>
                                        </div>
                                    </div>
                                    <div className="flex md:gap-6 gap-4 items-start">
                                        <div className="md:size-14 size-12 flex items-center justify-center shrink-0 rounded-xl bg-[#84CC02]">
                                            <Svg name="dataScience" className="size-8 text-white" />
                                        </div>
                                        <div className="w-full flex flex-col md:gap-3 gap-1">
                                            <h3 className="w-full xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-white">Image Recognition Based Checkout</h3>
                                            <div className="w-full xl:text-sm text-xs font-normal text-white">Users can scan items, and AI identifies them without barcode scanning.</div>
                                        </div>
                                    </div>
                                    <div className="flex md:gap-6 gap-4 items-start">
                                        <div className="md:size-14 size-12 flex items-center justify-center shrink-0 rounded-xl bg-[#84CC02]">
                                            <Svg name="enhancedLoyalty" className="size-8 text-white" />
                                        </div>
                                        <div className="w-full flex flex-col md:gap-3 gap-1">
                                            <h3 className="w-full xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-white">Product Authenticity & Trust</h3>
                                            <div className="w-full xl:text-sm text-xs font-normal text-white">Customers can scan QR codes to verify product origin, expiry, and authenticity.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:w-4/12 lg:w-5/12 w-full lg:bottom-0 lg:sticky">
                                <div className="w-full md:pt-8 max-md:px-8">
                                    <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/nextGen.webp" width={455} height={365} alt="How our Next Gen Technology make your Grocery App Smart, Efficient, fast & Secure" title="How our Next Gen Technology make your Grocery App Smart, Efficient, fast & Secure" className="w-full aspect-[455/365]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="appLookLikeSection w-full relative overflow-hidden bg-[#131514]">
                <div className="!container flex xl:pt-16 lg:pt-14 md:pt-12 sm:pt-10 pt-8 max-sm:!px-0">
                    <div className="flex flex-col w-full">
                        <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-white text-balance relative z-10 text-center max-sm:px-4">Your Next On-demand Grocery Delivery Mobile App Could Look Like This</h2>
                        <Swiper className="swiper flex xl:w-7/12 lg:w-3/4 w-full -mt-6 xl:!py-16 lg:!py-14 !py-12 before:absolute before:left-0 before:h-full before:w-1/4 before:bg-gradient-to-r before:from-[#131514]/60 before:to-transparent before:z-10 before:pointer-events-none after:absolute after:right-0 after:h-full after:w-1/4 after:bg-gradient-to-l after:from-[#131514]/60 after:to-transparent after:z-10 after:pointer-events-none"
                                
                            modules={[Autoplay]}
                            slidesPerView={1.6}
                            spaceBetween={8}
                            speed={1000}
                            loop={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false
                            }}
                            centeredSlides={true}
                            breakpoints={{
                                320: { slidesPerView: 1.6, spaceBetween: 8 },
                                480: { slidesPerView: 1.6, spaceBetween: 16 },
                                640: { slidesPerView: 2, spaceBetween: 16 },
                                1024: { slidesPerView: 3, spaceBetween: 32 },
                                1350: { slidesPerView: 3, spaceBetween: 32 }
                            }}
                            >
                                <SwiperSlide className="swiper-slide relative lg:p-[1.2%] md:p-[2.2%] p-[2.7%] group [&.swiper-slide-active]:!scale-100 md:!scale-95 !scale-90 duration-300">
                                    <Svg name="blackMobileFrame" className="size-full object-contain object-center absolute inset-0 text-[#404040] opacity-0 group-[&.swiper-slide-active]:opacity-100 scale-125 group-[&.swiper-slide-active]:scale-100 duration-300" />
                                    <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/grocerylookLike1.webp" alt="Grocery App" title="Grocery App" className="size-full object-contain object-center aspect-[25/56]" width="225" height="505" />
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide relative lg:p-[1.2%] md:p-[2.2%] p-[2.7%] group [&.swiper-slide-active]:!scale-100 md:!scale-95 !scale-90 duration-300">
                                    <Svg name="blackMobileFrame" className="size-full object-contain object-center absolute inset-0 text-[#404040] opacity-0 group-[&.swiper-slide-active]:opacity-100 scale-125 group-[&.swiper-slide-active]:scale-100 duration-300" />
                                    <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/grocerylookLike2.webp" alt="Grocery App" title="Grocery App" className="size-full object-contain object-center aspect-[25/56]" width="225" height="505" />
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide relative lg:p-[1.2%] md:p-[2.2%] p-[2.7%] group [&.swiper-slide-active]:!scale-100 md:!scale-95 !scale-90 duration-300">
                                    <Svg name="blackMobileFrame" className="size-full object-contain object-center absolute inset-0 text-[#404040] opacity-0 group-[&.swiper-slide-active]:opacity-100 scale-125 group-[&.swiper-slide-active]:scale-100 duration-300" />
                                    <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/grocerylookLike3.webp" alt="Grocery App" title="Grocery App" className="size-full object-contain object-center aspect-[25/56]" width="225" height="505" />
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide relative lg:p-[1.2%] md:p-[2.2%] p-[2.7%] group [&.swiper-slide-active]:!scale-100 md:!scale-95 !scale-90 duration-300">
                                    <Svg name="blackMobileFrame" className="size-full object-contain object-center absolute inset-0 text-[#404040] opacity-0 group-[&.swiper-slide-active]:opacity-100 scale-125 group-[&.swiper-slide-active]:scale-100 duration-300" />
                                    <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/grocerylookLike1.webp" alt="Grocery App" title="Grocery App" className="size-full object-contain object-center aspect-[25/56]" width="225" height="505" />
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide relative lg:p-[1.2%] md:p-[2.2%] p-[2.7%] group [&.swiper-slide-active]:!scale-100 md:!scale-95 !scale-90 duration-300">
                                    <Svg name="blackMobileFrame" className="size-full object-contain object-center absolute inset-0 text-[#404040] opacity-0 group-[&.swiper-slide-active]:opacity-100 scale-125 group-[&.swiper-slide-active]:scale-100 duration-300" />
                                    <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/grocerylookLike2.webp" alt="Grocery App" title="Grocery App" className="size-full object-contain object-center aspect-[25/56]" width="225" height="505" />
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide relative lg:p-[1.2%] md:p-[2.2%] p-[2.7%] group [&.swiper-slide-active]:!scale-100 md:!scale-95 !scale-90 duration-300">
                                    <Svg name="blackMobileFrame" className="size-full object-contain object-center absolute inset-0 text-[#404040] opacity-0 group-[&.swiper-slide-active]:opacity-100 scale-125 group-[&.swiper-slide-active]:scale-100 duration-300" />
                                    <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/grocerylookLike3.webp" alt="Grocery App" title="Grocery App" className="size-full object-contain object-center aspect-[25/56]" width="225" height="505" />
                                </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>

            <section className="processSection w-full relative overflow-hidden bg-white">
                <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                    <div className="flex flex-col w-full">
                        <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-[#454444] text-balance relative z-10 md:text-center md:pb-4 pb-2">The Process We Follow to Develop the Ultimate Grocery Delivery App Development</h2>
                        <div className="w-full 2xl:text-lg xl:text-base md:text-sm text-xs md:font-medium font-normal text-[#454444] text-balance relative z-10 md:text-center md:pb-12 pb-5">Our grocery delivery app development process is simple and transparent, designed to prioritize client satisfaction above all else. We meticulously handle every step with precision to ensure exceptional results. Here's how we craft grocery delivery apps tailored to meet the needs of our valued clients.</div>
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
                                                    
                                                      src="https://d1y41eupgbwbb2.cloudfront.net/images/app-step1.webp"
                                                    alt="Planning & Research"
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
                                                    
                                                      src="https://d1y41eupgbwbb2.cloudfront.net/images/app-step2.webp"
                                                    alt="Wireframing & Designing"
                                                 />
                                            </div>
                                            <h3 className="w-full xl:text-xl md:text-lg text-base font-semibold pb-2">Wireframing & Designing</h3>
                                            
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
                                                    
                                                      src="https://d1y41eupgbwbb2.cloudfront.net/images/app-step3.webp"
                                                    alt="Development & Integrations"
                                                 />
                                            </div>
                                            <h3 className="w-full xl:text-xl md:text-lg text-base font-semibold pb-2">Development & Integrations</h3>
                                            
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
                                                    
                                                      src="https://d1y41eupgbwbb2.cloudfront.net/images/app-step4.webp"
                                                    alt="Quality Assurance"
                                                 />
                                            </div>
                                            <h3 className="w-full xl:text-xl md:text-lg text-base font-semibold pb-2">Quality Assurance</h3>
                                            
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
                                                    
                                                      src="https://d1y41eupgbwbb2.cloudfront.net/images/app-step5.webp"
                                                    alt="Launch & Maintenance"
                                                 />
                                            </div>
                                            <h3 className="w-full xl:text-xl md:text-lg text-base font-semibold pb-2">Launch & Maintenance</h3>
                                            
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

            <section className="whyChooseUsSection w-full relative bg-white">
                <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                    <div className="flex flex-col w-full">
                        <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-[#454444] text-balance relative z-10 md:text-center lg:pb-4 pb-8">Why Choose IMG Global Infotech As Your On-Demand Grocery Delivery App Development Company?</h2>
                        <div className="flex flex-wrap lg:items-center items-start justify-between">
                            <div className="xl:w-3/12 sm:w-4/12 w-7/12 lg:static sm:sticky top-32 max-sm:order-last">
                                <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/groceryWhyChooseUs.webp" width={341} height={513} alt="Grocery App" title="Grocery App" className="size-full object-contain object-center" />
                            </div>
                            <div className="xl:w-8/12 sm:w-8/12 flex flex-wrap gap-y-5 -mx-2.5">
                                <div className="lg:w-1/2 w-full px-2.5">
                                    <div className="flex flex-col rounded-3xl size-full bg-white shadow-[0px_3px_34.5px_0px_#0000001F] p-6 relative">
                                        <Svg name="plus" className="absolute bottom-0 lg:right-4 max-lg:right-6 lg:-translate-x-1/2 translate-y-1/2 size-6 text-[#FF6B39]" />
                                        <h3 className="xl:text-xl md:text-lg sm:text-base text-sm font-semibold text-[#454444] pb-1">Fully Customizable Solutions</h3>
                                        <p className="xl:text-base sm:text-sm text-xs font-normal text-[#626262]">Our online grocery store application is completely branded and customizable with advanced features, integrations, and enhancements.</p>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full px-2.5">
                                    <div className="flex flex-col rounded-3xl size-full bg-white shadow-[0px_3px_34.5px_0px_#0000001F] p-6 relative">
                                        <Svg name="plus" className="absolute bottom-0 lg:right-4 max-lg:right-6 lg:-translate-x-1/2 translate-y-1/2 size-6 text-[#2D86FF]" />
                                        <h3 className="xl:text-xl md:text-lg sm:text-base text-sm font-semibold text-[#454444] pb-1">Built for Growth</h3>
                                        <p className="xl:text-base sm:text-sm text-xs font-normal text-[#626262]">Developed with cutting-edge technology, our platform is designed to seamlessly manage large-scale grocery order volumes.</p>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full px-2.5">
                                    <div className="flex flex-col rounded-3xl size-full bg-white shadow-[0px_3px_34.5px_0px_#0000001F] p-6 relative">
                                        <Svg name="plus" className="absolute bottom-0 lg:right-4 max-lg:right-6 lg:-translate-x-1/2 translate-y-1/2 size-6 text-[#FF6B39]" />
                                        <h3 className="xl:text-xl md:text-lg sm:text-base text-sm font-semibold text-[#454444] pb-1">Ready for the Global Market</h3>
                                        <p className="xl:text-base sm:text-sm text-xs font-normal text-[#626262]">Launch your grocery delivery app anywhere in the world with built-in support for multiple languages and currencies.</p>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full px-2.5">
                                    <div className="flex flex-col rounded-3xl size-full bg-white shadow-[0px_3px_34.5px_0px_#0000001F] p-6 relative">
                                        <Svg name="plus" className="absolute bottom-0 lg:right-4 max-lg:right-6 lg:-translate-x-1/2 translate-y-1/2 size-6 text-[#2D86FF]" />
                                        <h3 className="xl:text-xl md:text-lg sm:text-base text-sm font-semibold text-[#454444] pb-1">Reliable Support & Maintenance</h3>
                                        <p className="xl:text-base sm:text-sm text-xs font-normal text-[#626262]">We guarantee that you will get maximum ROI with full support & maintenance with our grocery delivery service app.</p>
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
                            <Link href="healthcare-app-development.php" className="w-full cursor-pointer flex items-center 2xl:rounded-3xl md:rounded-2xl rounded-xl 2xl:p-5 md:p-4 p-3 2xl:gap-5 md:gap-3 gap-2 bg-gradient-to-br from-[#C3C3C0] to-[#000000] relative before:absolute 2xl:before:inset-[2.75px] md:before:inset-[2px] before:inset-[1.38px] hover:lg:before:inset-1.5 before:duration-300 2xl:before:rounded-[22px] md:before:rounded-[14px] before:rounded-[10px] before:bg-[#050505] before:m-auto before:z-0 after:absolute 2xl:after:inset-[2.75px] md:after:inset-[2px] after:inset-[1.38px] hover:lg:after:inset-1.5 after:duration-300 2xl:after:rounded-[22px] md:after:rounded-[14px] after:rounded-[10px] after:bg-gradient-to-b after:from-[#ffffff24] after:via-[#efe2ff12] after:to-[#e9f6fc24] after:m-auto after:z-[1]">
                                <div className="2xl:size-24 md:size-12 size-9 flex relative z-10 items-center justify-center 2xl:rounded-2xl md:rounded-xl rounded-lg shrink-0 bg-gradient-to-b from-[#ffffff24] via-[#efe2ff12] to-[#e9f6fc24]">
                                    <Svg name="heartBeat" className="2xl:size-14 md:size-8 size-5 relative z-10 text-white" />
                                </div>
                                <h3 className="w-full 22xl:text-xl 2xl:text-lg lg:text-base md:text-sm text-xs font-semibold text-white/80 text-balance relative z-10">Health Care Service App</h3>
                            </Link>
                            <Link href="taxi-app-development-company.php" className="w-full cursor-pointer flex items-center 2xl:rounded-3xl md:rounded-2xl rounded-xl 2xl:p-5 md:p-4 p-3 2xl:gap-5 md:gap-3 gap-2 bg-gradient-to-br from-[#C3C3C0] to-[#000000] relative before:absolute 2xl:before:inset-[2.75px] md:before:inset-[2px] before:inset-[1.38px] hover:lg:before:inset-1.5 before:duration-300 2xl:before:rounded-[22px] md:before:rounded-[14px] before:rounded-[10px] before:bg-[#050505] before:m-auto before:z-0 after:absolute 2xl:after:inset-[2.75px] md:after:inset-[2px] after:inset-[1.38px] hover:lg:after:inset-1.5 after:duration-300 2xl:after:rounded-[22px] md:after:rounded-[14px] after:rounded-[10px] after:bg-gradient-to-b after:from-[#ffffff24] after:via-[#efe2ff12] after:to-[#e9f6fc24] after:m-auto after:z-[1]">
                                <div className="2xl:size-24 md:size-12 size-9 flex relative z-10 items-center justify-center 2xl:rounded-2xl md:rounded-xl rounded-lg shrink-0 bg-gradient-to-b from-[#ffffff24] via-[#efe2ff12] to-[#e9f6fc24]">
                                    <Svg name="carpooling" className="2xl:size-14 md:size-8 size-5 relative z-10 text-white" />
                                </div>
                                <h3 className="w-full 22xl:text-xl 2xl:text-lg lg:text-base md:text-sm text-xs font-semibold text-white/80 text-balance relative z-10">Taxi Booking Mobile App</h3>
                            </Link>
                            <Link href="medicine-delivery-app-development.php" className="w-full cursor-pointer flex items-center 2xl:rounded-3xl md:rounded-2xl rounded-xl 2xl:p-5 md:p-4 p-3 2xl:gap-5 md:gap-3 gap-2 bg-gradient-to-br from-[#C3C3C0] to-[#000000] relative before:absolute 2xl:before:inset-[2.75px] md:before:inset-[2px] before:inset-[1.38px] hover:lg:before:inset-1.5 before:duration-300 2xl:before:rounded-[22px] md:before:rounded-[14px] before:rounded-[10px] before:bg-[#050505] before:m-auto before:z-0 after:absolute 2xl:after:inset-[2.75px] md:after:inset-[2px] after:inset-[1.38px] hover:lg:after:inset-1.5 after:duration-300 2xl:after:rounded-[22px] md:after:rounded-[14px] after:rounded-[10px] after:bg-gradient-to-b after:from-[#ffffff24] after:via-[#efe2ff12] after:to-[#e9f6fc24] after:m-auto after:z-[1]">
                                <div className="2xl:size-24 md:size-12 size-9 flex relative z-10 items-center justify-center 2xl:rounded-2xl md:rounded-xl rounded-lg shrink-0 bg-gradient-to-b from-[#ffffff24] via-[#efe2ff12] to-[#e9f6fc24]">
                                    <Svg name="medicines" className="2xl:size-14 md:size-8 size-5 relative z-10 text-white" />
                                </div>
                                <h3 className="w-full 22xl:text-xl 2xl:text-lg lg:text-base md:text-sm text-xs font-semibold text-white/80 text-balance relative z-10">Medicine Delivery App</h3>
                            </Link>
                            <Link href="salon-app-development.php" className="w-full cursor-pointer flex items-center 2xl:rounded-3xl md:rounded-2xl rounded-xl 2xl:p-5 md:p-4 p-3 2xl:gap-5 md:gap-3 gap-2 bg-gradient-to-br from-[#C3C3C0] to-[#000000] relative before:absolute 2xl:before:inset-[2.75px] md:before:inset-[2px] before:inset-[1.38px] hover:lg:before:inset-1.5 before:duration-300 2xl:before:rounded-[22px] md:before:rounded-[14px] before:rounded-[10px] before:bg-[#050505] before:m-auto before:z-0 after:absolute 2xl:after:inset-[2.75px] md:after:inset-[2px] after:inset-[1.38px] hover:lg:after:inset-1.5 after:duration-300 2xl:after:rounded-[22px] md:after:rounded-[14px] after:rounded-[10px] after:bg-gradient-to-b after:from-[#ffffff24] after:via-[#efe2ff12] after:to-[#e9f6fc24] after:m-auto after:z-[1]">
                                <div className="2xl:size-24 md:size-12 size-9 flex relative z-10 items-center justify-center 2xl:rounded-2xl md:rounded-xl rounded-lg shrink-0 bg-gradient-to-b from-[#ffffff24] via-[#efe2ff12] to-[#e9f6fc24]">
                                    <Svg name="petGroomingDevelopment" className="2xl:size-14 md:size-8 size-5 relative z-10 text-white" />
                                </div>
                                <h3 className="w-full 22xl:text-xl 2xl:text-lg lg:text-base md:text-sm text-xs font-semibold text-white/80 text-balance relative z-10">Beauty & Saloon App</h3>
                            </Link>
                            <Link href="laundry-services-app-development.php" className="w-full cursor-pointer flex items-center 2xl:rounded-3xl md:rounded-2xl rounded-xl 2xl:p-5 md:p-4 p-3 2xl:gap-5 md:gap-3 gap-2 bg-gradient-to-br from-[#C3C3C0] to-[#000000] relative before:absolute 2xl:before:inset-[2.75px] md:before:inset-[2px] before:inset-[1.38px] hover:lg:before:inset-1.5 before:duration-300 2xl:before:rounded-[22px] md:before:rounded-[14px] before:rounded-[10px] before:bg-[#050505] before:m-auto before:z-0 after:absolute 2xl:after:inset-[2.75px] md:after:inset-[2px] after:inset-[1.38px] hover:lg:after:inset-1.5 after:duration-300 2xl:after:rounded-[22px] md:after:rounded-[14px] after:rounded-[10px] after:bg-gradient-to-b after:from-[#ffffff24] after:via-[#efe2ff12] after:to-[#e9f6fc24] after:m-auto after:z-[1]">
                                <div className="2xl:size-24 md:size-12 size-9 flex relative z-10 items-center justify-center 2xl:rounded-2xl md:rounded-xl rounded-lg shrink-0 bg-gradient-to-b from-[#ffffff24] via-[#efe2ff12] to-[#e9f6fc24]">
                                    <Svg name="deryClean" className="2xl:size-14 md:size-8 size-5 relative z-10 text-white" />
                                </div>
                                <h3 className="w-full 22xl:text-xl 2xl:text-lg lg:text-base md:text-sm text-xs font-semibold text-white/80 text-balance relative z-10">Laundry Service App</h3>
                            </Link>
                            <Link href="car-wash-app-development.php" className="w-full cursor-pointer flex items-center 2xl:rounded-3xl md:rounded-2xl rounded-xl 2xl:p-5 md:p-4 p-3 2xl:gap-5 md:gap-3 gap-2 bg-gradient-to-br from-[#C3C3C0] to-[#000000] relative before:absolute 2xl:before:inset-[2.75px] md:before:inset-[2px] before:inset-[1.38px] hover:lg:before:inset-1.5 before:duration-300 2xl:before:rounded-[22px] md:before:rounded-[14px] before:rounded-[10px] before:bg-[#050505] before:m-auto before:z-0 after:absolute 2xl:after:inset-[2.75px] md:after:inset-[2px] after:inset-[1.38px] hover:lg:after:inset-1.5 after:duration-300 2xl:after:rounded-[22px] md:after:rounded-[14px] after:rounded-[10px] after:bg-gradient-to-b after:from-[#ffffff24] after:via-[#efe2ff12] after:to-[#e9f6fc24] after:m-auto after:z-[1]">
                                <div className="2xl:size-24 md:size-12 size-9 flex relative z-10 items-center justify-center 2xl:rounded-2xl md:rounded-xl rounded-lg shrink-0 bg-gradient-to-b from-[#ffffff24] via-[#efe2ff12] to-[#e9f6fc24]">
                                    <Svg name="carWash" className="2xl:size-14 md:size-8 size-5 relative z-10 text-white" />
                                </div>
                                <h3 className="w-full 22xl:text-xl 2xl:text-lg lg:text-base md:text-sm text-xs font-semibold text-white/80 text-balance relative z-10">Car Wash Mobile App</h3>
                            </Link>
                            <Link href="/doctor-on-demand-app-development.php" className="w-full cursor-pointer flex items-center 2xl:rounded-3xl md:rounded-2xl rounded-xl 2xl:p-5 md:p-4 p-3 2xl:gap-5 md:gap-3 gap-2 bg-gradient-to-br from-[#C3C3C0] to-[#000000] relative before:absolute 2xl:before:inset-[2.75px] md:before:inset-[2px] before:inset-[1.38px] hover:lg:before:inset-1.5 before:duration-300 2xl:before:rounded-[22px] md:before:rounded-[14px] before:rounded-[10px] before:bg-[#050505] before:m-auto before:z-0 after:absolute 2xl:after:inset-[2.75px] md:after:inset-[2px] after:inset-[1.38px] hover:lg:after:inset-1.5 after:duration-300 2xl:after:rounded-[22px] md:after:rounded-[14px] after:rounded-[10px] after:bg-gradient-to-b after:from-[#ffffff24] after:via-[#efe2ff12] after:to-[#e9f6fc24] after:m-auto after:z-[1]">
                                <div className="2xl:size-24 md:size-12 size-9 flex relative z-10 items-center justify-center 2xl:rounded-2xl md:rounded-xl rounded-lg shrink-0 bg-gradient-to-b from-[#ffffff24] via-[#efe2ff12] to-[#e9f6fc24]">
                                    <Svg name="specialtyMedicine" className="2xl:size-14 md:size-8 size-5 relative z-10 text-white" />
                                </div>
                                <h3 className="w-full 22xl:text-xl 2xl:text-lg lg:text-base md:text-sm text-xs font-semibold text-white/80 text-balance relative z-10">Doctor on Demand App</h3>
                            </Link>
                            <Link href="grocery-app-development.php" className="w-full cursor-pointer flex items-center 2xl:rounded-3xl md:rounded-2xl rounded-xl 2xl:p-5 md:p-4 p-3 2xl:gap-5 md:gap-3 gap-2 bg-gradient-to-br from-[#C3C3C0] to-[#000000] relative before:absolute 2xl:before:inset-[2.75px] md:before:inset-[2px] before:inset-[1.38px] hover:lg:before:inset-1.5 before:duration-300 2xl:before:rounded-[22px] md:before:rounded-[14px] before:rounded-[10px] before:bg-[#050505] before:m-auto before:z-0 after:absolute 2xl:after:inset-[2.75px] md:after:inset-[2px] after:inset-[1.38px] hover:lg:after:inset-1.5 after:duration-300 2xl:after:rounded-[22px] md:after:rounded-[14px] after:rounded-[10px] after:bg-gradient-to-b after:from-[#ffffff24] after:via-[#efe2ff12] after:to-[#e9f6fc24] after:m-auto after:z-[1]">
                                <div className="2xl:size-24 md:size-12 size-9 flex relative z-10 items-center justify-center 2xl:rounded-2xl md:rounded-xl rounded-lg shrink-0 bg-gradient-to-b from-[#ffffff24] via-[#efe2ff12] to-[#e9f6fc24]">
                                    <Svg name="customMedicine" className="2xl:size-14 md:size-8 size-5 relative z-10 text-white" />
                                </div>
                                <h3 className="w-full 22xl:text-xl 2xl:text-lg lg:text-base md:text-sm text-xs font-semibold text-white/80 text-balance relative z-10">Grocery Delivery App</h3>
                            </Link>
                        </div>
                    </div>
                </div>
        </section>
        <ContactUs defaultType="Mobile App Development" />
        </>
    );
}

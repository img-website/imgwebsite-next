"use client"

import Svg from "@/components/svg";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide, Navigation, Autoplay } from '@/components/CustomSwiper';
import ContactUs from "@/components/ContactUs";


export default function FoodDeliveryAppDevelopment() {
    return (
        <>
            <section className="heroSection xl:pt-[116px] lg:pt-[90px] md:pt-[88px] pt-16 relative overflow-hidden md:min-h-dvh max-md:!h-auto flex flex-col max-md:pb-6 bg-[#F4FFFE]">
                <div className="!container flex flex-wrap relative z-10 grow justify-between max-sm:!px-0">
                    <div className="xl:w-6/12 lg:w-1/2 md:w-5/12 w-full flex flex-col max-sm:px-4">
                        <div className="grow lg:py-6 py-3"></div>
                        <h1 className="w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl md:font-bold font-semibold text-[#454444] text-balance relative max-md:text-center"><span className="text-[#216CFF]">Food Delivery </span> App Development Company</h1>
                        <div className="w-full min-h-[50px] xl:text-base md:text-sm text-sm font-normal text-[#454444] pt-4 pb-6 max-md:text-center">Develop a fast, secure, and user-friendly food delivery application. IMG Global Infotech is a market-leading food delivery app development company that will help you develop your food delivery app to deliver seamless food ordering, real-time tracking, and easy payment options. Start your food delivery business with an app designed for an excellent experience.</div>
                        <div className="w-full max-md:text-center">
                            <label htmlFor="leadPopup" className="cursor-pointer xl:text-base text-sm font-semibold text-white inline-flex items-center xl:py-3 py-2.5 xl:ps-6 ps-4 xl:pe-3 pe-2.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#4E94FF] to-[#216CFF] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#216CFF] group/btn">
                                <span>Consult Our Experts</span>
                                <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#4E94FF] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                    <Svg name="arrowCall" className="size-3 relative z-10 text-[#216CFF]" />
                                </div>
                            </label>
                        </div>
                        <div className="grow lg:py-6 py-3 max-md:hidden"></div>
                    </div>
                    <div className="xl:w-6/12 lg:w-1/2 md:w-7/12 w-full flex flex-col relative max-md:order-first">
                        <Image priority={true} src="https://d1y41eupgbwbb2.cloudfront.net/images/foodHeroImage.webp" width="683" height="416" alt="Food Delivery App Development Company" title="Food Delivery App Development Company" className="md:absolute md:top-0 md:inset-x-0 md:bottom-0 md:size-full w-full object-contain md:object-center object-center md:aspect-[683/416]"/>
                    </div>
                </div>
            </section>

            <section className="aboutSection w-full relative overflow-hidden bg-white">
                <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-wrap justify-between items-stretch bg-[#ECE8DE] rounded-2xl">
                            <div className="xl:w-5/12 lg:w-1/2 flex flex-col md:-my-3 -mx-4 relative">
                                <div className="size-full md:rounded-3xl bg-[#343333] flex items-end">
                                    <ul className="xl:w-1/2 lg:w-7/12 w-7/12 py-9 lg:ps-10 max-lg:px-8 gap-3 flex flex-col">
                                        <li className="w-full flex flex-col">
                                            <div className="w-full xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold text-white">$1.40 Trillion</div>
                                            <div className="w-full lg:text-xl md:text-lg sm:text-base text-sm font-normal text-white">Annual Revenue Generated</div>
                                        </li>
                                        <li className="w-full flex flex-col">
                                            <div className="w-full xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold text-white">$1.85 Trillion</div>
                                            <div className="w-full lg:text-xl md:text-lg sm:text-base text-sm font-normal text-white">Expected Market Size By 2029</div>
                                        </li>
                                        <li className="w-full flex flex-col">
                                            <div className="w-full xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold text-white">7.79%</div>
                                            <div className="w-full lg:text-xl md:text-lg sm:text-base text-sm font-normal text-white">Compound Annual Growth Rate</div>
                                        </li>
                                    </ul>
                                    <div className="xl:w-1/2 lg:w-5/12 w-5/12 md:translate-x-6 xl:scale-125 scale-105 lg:origin-bottom origin-bottom-right">
                                        <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodAboutBoy.webp" alt="Food Delivery App Development" title="Food Delivery App Development" className="size-full object-contain object-center max-md:-translate-y-6 aspect-[285/254]" width="285" height="254"/>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:w-7/12 lg:w-1/2 w-full flex flex-col lg:ps-8 items-center justify-center max-lg:bg-[#FFE3D9] rounded-xl relative z-10 max-md:-mt-6">
                                <div className="w-full flex flex-col xl:p-12 md:p-8 py-6 px-4">
                                    <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-[#454444] text-balance md:pb-4 pb-2">Build a Food Delivery Apps Like UberEats, Swiggy & Zomato</h2>
                                    <div className="w-full md:text-sm text-xs font-normal text-[#626262] text-balance md:pb-4 pb-2">Want to develop a <Link href="https://www.imgglobalinfotech.com/blog/10-uber-eats-alternatives-to-try-in-2025" className="hover:lg:underline font-semibold inline text-black">food ordering app like UberEats</Link>, Swiggy, or Zomato? It would be great to build a seamless food ordering app that enables customers to order food with just a few taps, track their deliveries, and make secure payments. We are one of the biggest Food Delivery App Development companies, creating innovative applications that would satisfy your customers and increase your bottom line.</div>
                                    <div className="w-full md:pt-6 pt-4">
                                        <label htmlFor="leadPopup" className="cursor-pointer xl:text-base sm:text-sm text-xs md:font-semibold font-medium text-white inline-flex items-center xl:py-3 sm:py-2.5 py-2 xl:ps-6 sm:ps-4 ps-3 xl:pe-3 sm:pe-2.5 pe-1.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#FF6B39] to-[#CB4619] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#CB4619] group/btn">
                                            <span>Let’s Connect</span>
                                            <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#FF6B39] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                                <Svg name="arrowCall" className="size-3 relative z-10 text-[#CB4619]" />
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta1Section w-full relative overflow-hidden bg-[#FA484E]">
                <div className="!container flex">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-wrap justify-between">
                            <div className="md:w-5/12 w-full xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                                <div className="md:w-10/12 w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl md:font-bold font-semibold text-white text-balance relative z-10 max-md:text-center">Your Chance To Standout In The Online Food Industry Are Higher</div>
                                <div className="w-full md:pt-6 pt-4 max-md:text-center">
                                    <label htmlFor="leadPopup" className="cursor-pointer xl:text-base sm:text-sm text-xs md:font-semibold font-medium text-[#454444] inline-flex items-center xl:py-3 sm:py-2.5 py-2 xl:ps-6 sm:ps-4 ps-3 xl:pe-3 sm:pe-2.5 pe-1.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#FFFFFF] to-[#D7E4FF] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#D7E4FF] group/btn">
                                        <span>Consult Our Experts</span>
                                        <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#D7E4FF] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                            <Svg name="arrowCall" className="size-3 relative z-10 text-[#454444]" />
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="md:w-5/12 w-full rounded-3xl flex items-center justify-center relative">
                                <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodCta1.webp" alt="If You're a Person Who think out of the Box & Dream Big" title="If You're a Person Who think out of the Box & Dream Big" className="size-full object-contain object-bottom relative z-10 aspect-[569/394]" width="569" height="394" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="servicesSection w-full relative overflow-hidden bg-[#131514]">
                <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                    <div className="flex flex-col w-full">
                        <h2 className="md:w-10/12 w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-white text-balance relative z-10 md:text-center mx-auto md:pb-6 sm:pb-5 pb-4">Leverage Custom AI-Powered Food Delivery App Development Services</h2>
                        <div className="w-full 2xl:text-lg xl:text-base md:text-sm text-xs md:font-medium font-normal text-white text-balance relative z-10 md:text-center  md:pb-20 sm:pb-16 pb-14">Opt our Food Delivery Mobile App Development Services, we offer full guidance to bring your food delivery app idea to vision. We offer top-notch food delivery solutions, either as a complete food delivery system or a custom-built solution to suit your needs.</div>
                        <div className="flex flex-wrap gap-y-14 -mx-2.5 items-stretch">
                            <div className="md:w-1/3 sm:w-1/2 w-full px-2.5">
                                <div className="w-full flex flex-col relative rounded-lg p-6 pt-12 gap-2.5 bg-gradient-to-b from-[#292929] to-[#131514] h-full">
                                    <div className="size-16 absolute top-0 rounded-full bg-[#FA6413] shrink-0 flex flex-col items-center justify-center -translate-y-1/2">
                                        <Svg name="support" className="md:size-7 size-6 text-white" />
                                    </div>
                                    <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">Food Delivery App Consultation</div>
                                    <div className="md:text-sm text-xs font-normal text-balance text-white/80 grow">Our restaurant app developers will start with understanding your needs and goals for business. We take ample time to work with you, charting the architecture of the whole application structure and features, along with users' experiences, to match your envisioning of the app.</div>
                                    <label htmlFor="leadPopup" className="inline-flex items-center gap-1 text-xs font-semibold text-[#FA6413] cursor-pointer">
                                        <span>FREE DEMO</span>
                                        <Svg name="arrowForward" className="size-5 text-[#FA6413]" />
                                    </label>
                                </div>
                            </div>
                            <div className="md:w-1/3 sm:w-1/2 w-full px-2.5">
                                <div className="w-full flex flex-col relative rounded-lg p-6 pt-12 gap-2.5 bg-gradient-to-b from-[#292929] to-[#131514] h-full">
                                    <div className="size-16 absolute top-0 rounded-full bg-[#FA6413] shrink-0 flex flex-col items-center justify-center -translate-y-1/2">
                                        <Svg name="scale2" className="md:size-7 size-6 text-white" />
                                    </div>
                                    <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">Food Delivery App Design and User Experience</div>
                                    <div className="md:text-sm text-xs font-normal text-balance text-white/80 grow">User experience is everything when it comes to app design. We aim to provide a smooth and user-friendly interface to the application. Our food delivery app development solution is specially designed to focus on delivering smooth navigation and attractive design amidst the crowded market.</div>
                                    <label htmlFor="leadPopup" className="inline-flex items-center gap-1 text-xs font-semibold text-[#FA6413] cursor-pointer">
                                        <span>FREE DEMO</span>
                                        <Svg name="arrowForward" className="size-5 text-[#FA6413]" />
                                    </label>
                                </div>
                            </div>
                            <div className="md:w-1/3 sm:w-1/2 w-full px-2.5">
                                <div className="w-full flex flex-col relative rounded-lg p-6 pt-12 gap-2.5 bg-gradient-to-b from-[#292929] to-[#131514] h-full">
                                    <div className="size-16 absolute top-0 rounded-full bg-[#FA6413] shrink-0 flex flex-col items-center justify-center -translate-y-1/2">
                                        <Svg name="laptopMobile" className="md:size-7 size-6 text-white" />
                                    </div>
                                    <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">Custom Food Delivery App Development</div>
                                    <div className="md:text-sm text-xs font-normal text-balance text-white/80 grow">Every business is unique, and thus your app needs are as well. Our food delivery app developers help in custom restaurant app development: A solution matching all your requirements. We design an app that can adapt to every need during the growth of your business, another great food delivery solution for your customers.</div>
                                    <label htmlFor="leadPopup" className="inline-flex items-center gap-1 text-xs font-semibold text-[#FA6413] cursor-pointer">
                                        <span>FREE DEMO</span>
                                        <Svg name="arrowForward" className="size-5 text-[#FA6413]" />
                                    </label>
                                </div>
                            </div>
                            <div className="md:w-1/3 sm:w-1/2 w-full px-2.5">
                                <div className="w-full flex flex-col relative rounded-lg p-6 pt-12 gap-2.5 bg-gradient-to-b from-[#292929] to-[#131514] h-full">
                                    <div className="size-16 absolute top-0 rounded-full bg-[#FA6413] shrink-0 flex flex-col items-center justify-center -translate-y-1/2">
                                        <Svg name="checkList" className="md:size-7 size-6 text-white" />
                                    </div>
                                    <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">Testing and Quality Assurance</div>
                                    <div className="md:text-sm text-xs font-normal text-balance text-white/80 grow">All food delivery apps are tested before launching. We test the app so thoroughly that it works flawlessly for the end user. We ensure rigorous testing, to identify and rectify bugs & errors. From performance testing to security checks, we cover every detail, thus catching bugs and errors early.</div>
                                    <label htmlFor="leadPopup" className="inline-flex items-center gap-1 text-xs font-semibold text-[#FA6413] cursor-pointer">
                                        <span>FREE DEMO</span>
                                        <Svg name="arrowForward" className="size-5 text-[#FA6413]" />
                                    </label>
                                </div>
                            </div>
                            <div className="md:w-1/3 sm:w-1/2 w-full px-2.5">
                                <div className="w-full flex flex-col relative rounded-lg p-6 pt-12 gap-2.5 bg-gradient-to-b from-[#292929] to-[#131514] h-full">
                                    <div className="size-16 absolute top-0 rounded-full bg-[#FA6413] shrink-0 flex flex-col items-center justify-center -translate-y-1/2">
                                        <Svg name="launch2" className="md:size-7 size-6 text-white" />
                                    </div>
                                    <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">Launch and Deployment</div>
                                    <div className="md:text-sm text-xs font-normal text-balance text-white/80 grow">Once the app is well-developed and tested, it is time to make it live. The task of successfully deploying the app in app stores is handled by our food delivery application developers. From submitting your app to your preferred store to post-launch monitoring, we provide everything for a successful food delivery solution.</div>
                                    <label htmlFor="leadPopup" className="inline-flex items-center gap-1 text-xs font-semibold text-[#FA6413] cursor-pointer">
                                        <span>FREE DEMO</span>
                                        <Svg name="arrowForward" className="size-5 text-[#FA6413]" />
                                    </label>
                                </div>
                            </div>
                            <div className="md:w-1/3 sm:w-1/2 w-full px-2.5">
                                <div className="w-full flex flex-col relative rounded-lg p-6 pt-12 gap-2.5 bg-gradient-to-b from-[#292929] to-[#131514] h-full">
                                    <div className="size-16 absolute top-0 rounded-full bg-[#FA6413] shrink-0 flex flex-col items-center justify-center -translate-y-1/2">
                                        <Svg name="homeMaintenance" className="md:size-7 size-6 text-white" />
                                    </div>
                                    <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">Maintenance and Support</div>
                                    <div className="md:text-sm text-xs font-normal text-balance text-white/80 grow">In the wake of the launch, we provide long-term maintenance and support to make sure your application doesn't become rudimentary. We offer continuous updates, fix bugs, and monitor performance for adaptations to your business changes to keep it up-to-date, secure and optimized.</div>
                                    <label htmlFor="leadPopup" className="inline-flex items-center gap-1 text-xs font-semibold text-[#FA6413] cursor-pointer">
                                        <span>FREE DEMO</span>
                                        <Svg name="arrowForward" className="size-5 text-[#FA6413]" />
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
                        <h2 className="w-full max-sm:px-4 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-[#454444] text-balance relative z-10 text-center">Key Features of On-Demand <span className="text-[#2D86FF]">Food Delivery App Development</span></h2>
                        <div className="w-full max-sm:px-4 flex items-center justify-center md:pt-8 pt-4">
                            <div className="inline-flex items-center justify-center gap-1 rounded-full bg-white shadow-[0px_3px_34px_0px_#0000001F]">
                                <label htmlFor="panel1" className="md:py-4 py-3 lg:px-12 md:px-10 sm:px-6 px-3 rounded-full xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-semibold text-[#454444] cursor-pointer group-has-[#panel1:checked]/key:bg-[#2D86FF] group-has-[#panel1:checked]/key:text-white"><h3>User <span className="max-sm:hidden">App</span></h3></label>
                                <label htmlFor="panel2" className="md:py-4 py-3 lg:px-12 md:px-10 sm:px-6 px-3 rounded-full xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-semibold text-[#454444] cursor-pointer group-has-[#panel2:checked]/key:bg-[#2D86FF] group-has-[#panel2:checked]/key:text-white"><h3>Driver <span className="max-sm:hidden">App</span></h3></label>
                                <label htmlFor="panel3" className="md:py-4 py-3 lg:px-12 md:px-10 sm:px-6 px-3 rounded-full xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-semibold text-[#454444] cursor-pointer group-has-[#panel3:checked]/key:bg-[#2D86FF] group-has-[#panel3:checked]/key:text-white"><h3>Restaurant <span className="max-sm:hidden">App</span></h3></label>
                                <label htmlFor="panel4" className="md:py-4 py-3 lg:px-12 md:px-10 sm:px-6 px-3 rounded-full xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-semibold text-[#454444] cursor-pointer group-has-[#panel4:checked]/key:bg-[#2D86FF] group-has-[#panel4:checked]/key:text-white"><h3>Admin <span className="max-sm:hidden">Panel</span></h3></label>
                            </div>
                        </div>
                        <div className="w-full items-start has-[#panel1:checked]:flex hidden">
                            <input type="radio" name="panel" id="panel1" className="hidden" defaultChecked />
                            <Swiper className="swiper xl:w-8/12 md:w-1/2 md:!pt-12 !pt-7 !pb-6 md:!overflow-visible *:max-md:!items-stretch *:md:!grid *:xl:!grid-cols-2 *:md:!grid-cols-1 *:md:!gap-x-8 *:md:!gap-y-6 *:md:!transform-none"
                                slidesPerView={1}
                                spaceBetween={8}
                                speed={1000}
                                >
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="userPanel1" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="userPanel" id="userPanel1" className="hidden" defaultChecked />
                                            <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodUserRealtimetracking.webp" alt="Real-time Order Tracking" title="Real-time Order Tracking" className="max-w-64 w-full mx-auto md:hidden aspect-[256/368]" width={256} height={368} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Real-time Order Tracking</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Providing live updates on order status, delivery driver location, and estimated arrival time keeps customers informed.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="userPanel2" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="userPanel" id="userPanel2" className="hidden" />
                                            <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodUserFilters.webp" alt="Customizable Menus and Filters" title="Customizable Menus and Filters" className="max-w-64 w-full mx-auto md:hidden aspect-[256/368]" width={256} height={368} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Customizable Menus and Filters</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Offering personalized options such as dietary preferences and sorting choices enables customers to find and order their preferred meals.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="userPanel3" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="userPanel" id="userPanel3" className="hidden" />
                                            <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodUserPayment.webp" alt="Secure Payment Options" title="Secure Payment Options" className="max-w-64 w-full mx-auto md:hidden aspect-[256/368]" width={256} height={368} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Secure Payment Options</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Integrating multiple secure payment gateways assures customers of the safety of their financial transactions, promoting trust and confidence.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="userPanel4" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="userPanel" id="userPanel4" className="hidden" />
                                            <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodUserReview.webp" alt="Rating and Review System" title="Rating and Review System" className="max-w-64 w-full mx-auto md:hidden aspect-[256/368]" width={256} height={368} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Rating and Review System</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Allowing customers to rate and review their orders helps build a community-driven feedback loop, aiding in making informed decisions.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="userPanel5" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="userPanel" id="userPanel5" className="hidden" />
                                            <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodUserSupport.webp" alt="In-app Customer Support" title="In-app Customer Support" className="max-w-64 w-full mx-auto md:hidden aspect-[256/368]" width={256} height={368} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">In-app Customer Support</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">A seamless in-app customer support system, such as live chat or a helpline, ensures prompt assistance and issue resolution.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="userPanel6" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="userPanel" id="userPanel6" className="hidden" />
                                            <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodUserPromotion.webp" alt="Social Media Integration" title="Social Media Integration" className="max-w-64 w-full mx-auto md:hidden aspect-[256/368]" width={256} height={368} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Social Media Integration</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Enabling social media sharing features allows customers to easily share their favorite dishes or promotions, contributing to organic marketing.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                            </Swiper>
                            <div className="xl:w-4/12 md:w-1/2 pl-20 md:!pt-12 !pt-7 !pb-6 md:sticky md:top-16 md:bottom-0 md:h-dvh max-md:hidden flex flex-col justify-center">
                                <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodUserRealtimetracking.webp" alt="Real-time Order Tracking" title="Real-time Order Tracking" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#userPanel1:checked]/key:md:block" />
                                <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodUserFilters.webp" alt="Customizable Menus and Filters" title="Customizable Menus and Filters" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#userPanel2:checked]/key:md:block" />
                                <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodUserPayment.webp" alt="Secure Payment Options" title="Secure Payment Options" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#userPanel3:checked]/key:md:block" />
                                <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodUserReview.webp" alt="Rating and Review System" title="Rating and Review System" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#userPanel4:checked]/key:md:block" />
                                <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodUserSupport.webp" alt="In-app Customer Support" title="In-app Customer Support" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#userPanel5:checked]/key:md:block" />
                                <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodUserPromotion.webp" alt="Social Media Integration" title="Social Media Integration" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#userPanel6:checked]/key:md:block" />
                            </div>
                        </div>
                        <div className="w-full items-start has-[#panel2:checked]:flex hidden">
                            <input type="radio" name="panel" id="panel2" className="hidden" />
                            <Swiper className="swiper xl:w-8/12 md:w-1/2 md:!pt-12 !pt-7 !pb-6 md:!overflow-visible *:max-md:!items-stretch *:md:!grid *:xl:!grid-cols-2 *:md:!grid-cols-1 *:md:!gap-x-8 *:md:!gap-y-6 *:md:!transform-none"
                                slidesPerView={1}
                                spaceBetween={8}
                                speed={1000}
                                >
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="servicePanel1" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="servicePanel" id="servicePanel1" className="hidden" defaultChecked />
                                            <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodDriverMultiOrder.webp" alt="Multi-Order Management" title="Multi-Order Management" className="max-w-64 w-full mx-auto md:hidden aspect-[256/368]" width={256} height={368} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Multi-Order Management</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Here, drivers can handle multiple orders simultaneously, optimizing their delivery routes and minimizing delays.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="servicePanel2" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="servicePanel" id="servicePanel2" className="hidden" />
                                            <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodDriverNavigation.webp" alt="In-App Navigation" title="In-App Navigation" className="max-w-64 w-full mx-auto md:hidden aspect-[256/368]" width={256} height={368} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">In-App Navigation</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Integrated navigation tools empower drivers to find the quickest routes, reducing delivery times and ensuring reliable customer service.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="servicePanel3" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="servicePanel" id="servicePanel3" className="hidden" />
                                            <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodDriverEarnings.webp" alt="Earnings Dashboard" title="Earnings Dashboard" className="max-w-64 w-full mx-auto md:hidden aspect-[256/368]" width={256} height={368} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Earnings Dashboard</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">An intuitive earnings dashboard allows drivers to track their income, view performance metrics, and access detailed breakdowns.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="servicePanel4" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="servicePanel" id="servicePanel4" className="hidden" />
                                            <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodDriverOrderaccept.webp" alt="Order Acceptance/Rejection" title="Order Acceptance/Rejection" className="max-w-64 w-full mx-auto md:hidden aspect-[256/368]" width={256} height={368} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Order Acceptance/Rejection</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Drivers can make informed decisions by previewing essential order details before acceptance to manage their workload efficiently.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="servicePanel5" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="servicePanel" id="servicePanel5" className="hidden" />
                                            <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodDriverRealtimeorder.webp" alt="Real-Time Order Tracking" title="Real-Time Order Tracking" className="max-w-64 w-full mx-auto md:hidden aspect-[256/368]" width={256} height={368} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Real-Time Order Tracking</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Drivers can efficiently navigate their routes and manage delivery times with live order tracking, ensuring timely deliveries.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="servicePanel6" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="servicePanel" id="servicePanel6" className="hidden" />
                                            <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodDriverAnalyses.webp" alt="Performance Analytics" title="Performance Analytics" className="max-w-64 w-full mx-auto md:hidden aspect-[256/368]" width={256} height={368} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Performance Analytics</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Access to performance analytics allows drivers to review their delivery history, identify patterns, and enhance their strategies.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                            </Swiper>
                            <div className="xl:w-4/12 md:w-1/2 pl-20 md:!pt-12 !pt-7 !pb-6 md:sticky md:top-16 md:bottom-0 md:h-dvh max-md:hidden flex flex-col justify-center">
                                <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodDriverMultiOrder.webp" alt="Multi-Order Management" title="Multi-Order Management" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#servicePanel1:checked]/key:md:block" />
                                <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodDriverNavigation.webp" alt="In-App Navigation" title="In-App Navigation" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#servicePanel2:checked]/key:md:block" />
                                <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodDriverEarnings.webp" alt="Earnings Dashboard" title="Earnings Dashboard" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#servicePanel3:checked]/key:md:block" />
                                <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodDriverOrderaccept.webp" alt="Order Acceptance/Rejection" title="Order Acceptance/Rejection" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#servicePanel4:checked]/key:md:block" />
                                <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodDriverRealtimeorder.webp" alt="Real-Time Order Tracking" title="Real-Time Order Tracking" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#servicePanel5:checked]/key:md:block" />
                                <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodDriverAnalyses.webp" alt="Performance Analytics" title="Performance Analytics" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#servicePanel6:checked]/key:md:block" />
                            </div>
                        </div>
                        <div className="w-full items-start has-[#panel3:checked]:flex hidden">
                            <input type="radio" name="panel" id="panel3" className="hidden" />
                            <Swiper className="swiper xl:w-8/12 md:w-1/2 md:!pt-12 !pt-7 !pb-6 md:!overflow-visible *:max-md:!items-stretch *:md:!grid *:xl:!grid-cols-2 *:md:!grid-cols-1 *:md:!gap-x-8 *:md:!gap-y-6 *:md:!transform-none"
                                slidesPerView={1}
                                spaceBetween={8}
                                speed={1000}
                                >
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="restaurant1" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="restaurant" id="restaurant1" className="hidden" defaultChecked />
                                            <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/restaurantPanelOrdermanagement.webp" alt="Order Management System" title="Order Management System" className="max-w-64 w-full mx-auto md:hidden aspect-[256/368]" width={256} height={368} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Order Management System</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Efficiently processes and organizes incoming orders, providing restaurant staff with a user-friendly interface to accept, manage, and track orders.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="restaurant2" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="restaurant" id="restaurant2" className="hidden" />
                                            <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/restaurantPanelMenu.webp" alt="Menu Customization Tools" title="Menu Customization Tools" className="max-w-64 w-full mx-auto md:hidden aspect-[256/368]" width={256} height={368} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Menu Customization Tools</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Empower restaurants to easily update and customize their digital menus while managing inventory and adjusting prices.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="restaurant3" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="restaurant" id="restaurant3" className="hidden" />
                                            <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/restaurantPanelRealtimeanalysis.webp" alt="Real-time Analytics Dashboard" title="Real-time Analytics Dashboard" className="max-w-64 w-full mx-auto md:hidden aspect-[256/368]" width={256} height={368} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Real-time Analytics Dashboard</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Equip restaurant owners with comprehensive analytics, offering insights into sales trends, popular dishes, and customer preferences.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="restaurant4" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="restaurant" id="restaurant4" className="hidden" />
                                            <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/restaurantPanelPaymentgateway.webp" alt="Integrated Payment Gateways" title="Integrated Payment Gateways" className="max-w-64 w-full mx-auto md:hidden aspect-[256/368]" width={256} height={368} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Integrated Payment Gateways</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Seamlessly integrate secure payment gateways, allowing restaurants to accept multi-payment methods, enhancing customer convenience.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="restaurant5" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="restaurant" id="restaurant5" className="hidden" />
                                            <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/restaurantPanelFeedback.webp" alt="Customer Feedback System" title="Customer Feedback System" className="max-w-64 w-full mx-auto md:hidden aspect-[256/368]" width={256} height={368} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Customer Feedback System</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Implement a feedback mechanism for customers to share their experiences, enabling restaurants to gather valuable insights.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="restaurant6" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="restaurant" id="restaurant6" className="hidden" />
                                            <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/restaurantPanelMultilocation.webp" alt="Multi-location Support" title="Multi-location Support" className="max-w-64 w-full mx-auto md:hidden aspect-[256/368]" width={256} height={368} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Multi-location Support</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Cater to restaurant chains or businesses with multiple locations by offering a centralized management system.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                            </Swiper>
                            <div className="xl:w-4/12 md:w-1/2 pl-20 md:!pt-12 !pt-7 !pb-6 md:sticky md:top-16 md:bottom-0 md:h-dvh max-md:hidden flex flex-col justify-center">
                                <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/restaurantPanelOrdermanagement.webp" alt="Order Management System" title="Order Management System" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#restaurant1:checked]/key:md:block" />
                                <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/restaurantPanelMenu.webp" alt="Menu Customization Tools" title="Menu Customization Tools" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#restaurant2:checked]/key:md:block" />
                                <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/restaurantPanelRealtimeanalysis.webp" alt="Real-time Analytics Dashboard" title="Real-time Analytics Dashboard" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#restaurant3:checked]/key:md:block" />
                                <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/restaurantPanelPaymentgateway.webp" alt="Integrated Payment Gateways" title="Integrated Payment Gateways" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#restaurant4:checked]/key:md:block" />
                                <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/restaurantPanelFeedback.webp" alt="Customer Feedback System" title="Customer Feedback System" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#restaurant5:checked]/key:md:block" />
                                <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/restaurantPanelMultilocation.webp" alt="Multi-location Support" title="Multi-location Support" width="375" height="527" className="w-full mx-auto xl:max-w-96 max-w-64 aspect-[375/527] hidden group-has-[#restaurant6:checked]/key:md:block" />
                            </div>
                        </div>
                        <div className="w-full items-start has-[#panel4:checked]:flex hidden">
                            <input type="radio" name="panel" id="panel4" className="hidden" />
                            <Swiper className="swiper xl:w-8/12 md:w-1/2 md:!pt-12 !pt-7 !pb-6 md:!overflow-visible *:max-md:!items-stretch *:md:!grid *:xl:!grid-cols-2 *:md:!grid-cols-1 *:md:!gap-x-8 *:md:!gap-y-6 *:md:!transform-none"
                                slidesPerView={1}
                                spaceBetween={8}
                                speed={1000}
                                >
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="adminPanel1" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="adminPanel" id="adminPanel1" className="hidden" defaultChecked />
                                            <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodAdmin.webp" alt="User Management" title="User Management" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]" width={256} height={179} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">User Management</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Efficiently manage user accounts and permissions to ensure a secure and seamless experience for both customers and delivery partners.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="adminPanel2" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="adminPanel" id="adminPanel2" className="hidden" />
                                            <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodAdmin.webp" alt="Order Tracking and Analytics" title="Order Tracking and Analytics" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]" width={256} height={179} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Order Tracking and Analytics</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Implement robust order-tracking tools and analytics dashboards to monitor real-time order statuses and track delivery routes.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="adminPanel3" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="adminPanel" id="adminPanel3" className="hidden" />
                                            <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodAdmin.webp" alt="Payment and Commission Tracking" title="Payment and Commission Tracking" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]" width={256} height={179} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Payment and Commission Tracking</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Integrate a transparent payment system and commission tracking feature to monitor financial transactions and process payments securely.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="adminPanel4" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="adminPanel" id="adminPanel4" className="hidden" />
                                            <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodAdmin.webp" alt="Geofencing and Location Management" title="Geofencing and Location Management" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]" width={256} height={179} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Geofencing and Location Management</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Utilize geofencing technology to define delivery zones, optimize routes, and enhance location-based services.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="adminPanel5" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="adminPanel" id="adminPanel5" className="hidden" />
                                            <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodAdmin.webp" alt="Customer Support and Communication" title="Customer Support and Communication" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]" width={256} height={179} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Customer Support and Communication</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Implement a robust customer support module, including in-app chat or messaging features, to promptly address customer queries.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide group md:!w-full max-md:!h-auto max-md:!flex max-md:!flex-col">
                                        <label htmlFor="adminPanel6" className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col">
                                            <input type="radio" name="adminPanel" id="adminPanel6" className="hidden" />
                                            <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodAdmin.webp" alt="Rating and Feedback System" title="Rating and Feedback System" className="max-w-64 w-full mx-auto md:hidden aspect-[256/179]" width={256} height={179} />
                                            <div className="flex gap-2.5 items-center justify-center pt-4 md:hidden">
                                                <Svg name="swiper" className="size-6 shrink-0 text-[#5B5B5B]" />
                                                <div className="md:text-xs text-[10px] font-normal text-[#5B5B5B]">Swipe to show features</div>
                                            </div>
                                            <div className="flex flex-col bg-white max-md:bg-[#2D86FF] group-has-[:checked]:md:bg-[#2D86FF] rounded-3xl md:shadow-[0px_3px_34.5px_0px_#0000001F] p-6 mt-4 max-md:grow md:h-[calc(100%-1rem)]">
                                                <div className="flex gap-1 md:items-start items-center pb-1 max-sm:flex-col max-sm:gap-2">
                                                    <Svg name="task" className="md:size-6 size-8 shrink-0 max-md:text-white group-has-[:checked]:md:text-white text-[#2D86FF]" />
                                                    <div className="xl:text-xl lg:text-lg text-base font-semibold text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Rating and Feedback System</div>
                                                </div>
                                                <div className="w-full xl:text-base sm:text-sm text-xs font-normal text-[#5B5B5B] max-md:text-white group-has-[:checked]:md:text-white max-sm:text-center">Integrate a user-friendly rating and feedback system, allowing customers to provide reviews and ratings.</div>
                                            </div>
                                        </label>
                                    </SwiperSlide>
                            </Swiper>
                            <div className="xl:w-4/12 md:w-1/2 pl-20 md:!pt-12 !pt-7 !pb-6 md:sticky md:top-16 md:bottom-0 md:h-dvh max-md:hidden flex flex-col justify-center">
                                <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodAdmin.webp" alt="admin" title="admin" width="375" height="262" className="w-full mx-auto xl:max-w-96 max-w-64 max-md:hidden aspect-[375/262]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="caseStudySection w-full relative overflow-hidden bg-white">
                <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                    <div className="flex flex-col w-full">
                        <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-[#454444] text-balance relative z-10 md:text-center md:pb-4 pb-2">Our Innovative Food Delivery App Development Projects</h2>
                        <div className="w-full 2xl:text-lg xl:text-base md:text-sm text-xs md:font-medium font-normal text-[#454444] text-balance relative z-10 md:text-center md:pb-12 pb-5">We craft high-performance food delivery apps that redefine convenience for restaurants, delivery partners, and customers. Our expertise in developing user-friendly, scalable, and secure restaurant apps has helped various food businesses thrive in the competitive online marketplace.</div>
                        <Swiper className="w-full swiper rounded-3xl"
                            modules={[Navigation]}
                            slidesPerView={1}
                            spaceBetween={32}
                            speed={1000}
                            navigation={{
                                nextEl: '.next',
                                prevEl: '.prev',
                            }}
                            >    
                                <SwiperSlide className="swiper-slide !flex flex-wrap justify-between items-stretch bg-[#1D1D1D] rounded-3xl xl:p-12 md:p-8 py-6 px-4 gap-y-6">
                                    <div className="md:w-7/12 w-full">
                                        <div className="w-full flex items-center xl:gap-8 md:gap-4 gap-2">
                                            <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/eatoutLogo.webp" className="w-auto md:h-14 h-12 aspect-square" width="56" height="56" alt="Eatout Logo" title="Eatout Logo" />
                                            <h3 className="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg text-base font-bold text-[#F7C6B4]">Eatout</h3>
                                        </div>
                                        <div className="w-full xl:text-sm lg:text-xs md:text-sm text-xs font-normal text-white xl:pt-4 pt-2 xl:pb-6 pb-4">EatOut is a modern food delivery platform designed to connect hungry users with their favorite local restaurants. Our team at IMG Global Infotech collaborated with the client from ideation to execution, crafting a high-performance app that delivers convenience, speed, and satisfaction.</div>
                                        <div className="flex items-center lg:gap-14 md:gap-10 gap-2">
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                                <div className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-white">50L+</div>
                                                <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-white">Downloads</div>
                                            </div>
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                                <div className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-white">4.1/5</div>
                                                <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-white">Rating</div>
                                            </div>
                                            <div className="w-auto inlne-flex flex-col gap-0.5 max-md:ml-auto">
                                                <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-white/70">Industry</div>
                                                <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-bold text-white">Food & Beverage</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center lg:gap-3 gap-2 md:pt-6 pt-3">
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center xl:text-sm lg:text-xs md:text-sm text-xs md:font-medium font-semibold text-white">Available on</div>
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center cursor-pointer">
                                                <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/playStoreBtnBlack.webp" className="w-auto xl:h-10 h-8 aspect-[120/40]" width="120" height="40" alt="PlayStore" title="PlayStore" />
                                            </div>
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center cursor-pointer">
                                                <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/appStoreBtnBlack.webp" className="w-auto xl:h-10 h-8 aspect-[120/40]" width="120" height="40" alt="AppStore" title="AppStore" />
                                            </div>
                                        </div>
                                        <div className="w-full md:pt-8 pt-6">
                                            <label htmlFor="leadPopup" className="cursor-pointer xl:text-base sm:text-sm text-xs md:font-semibold font-medium text-white inline-flex items-center xl:py-3 sm:py-2.5 py-2 xl:ps-6 sm:ps-4 ps-3 xl:pe-3 sm:pe-2.5 pe-1.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#CD7650] to-[#FED4C5] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#FED4C5] group/btn">
                                                <span>View Case Study</span>
                                                <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#CD7650] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                                    <Svg name="arrowCall" className="size-3 relative z-10 text-[#FED4C5]" />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="md:w-4/12 w-full max-md:order-first rounded-3xl aspect-square flex items-center justify-center bg-gradient-to-br from-[#CD7650] to-[#FED4C5] p-6">
                                        <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/eatout.webp" alt="Eatout" title="Eatout" className="size-full object-contain object-center aspect-square" width={284} height={370} />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide !flex flex-wrap justify-between items-stretch bg-[#1D1D1D] rounded-3xl xl:p-12 md:p-8 py-6 px-4 gap-y-6">
                                    <div className="md:w-7/12 w-full">
                                        <div className="w-full flex items-center xl:gap-8 md:gap-4 gap-2">
                                            <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/beyondMenuLogo.webp" className="w-auto md:h-14 h-12 aspect-square" width="56" height="56" alt="BeyondMenu Logo" title="BeyondMenu Logo" />
                                            <h3 className="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg text-base font-bold text-[#FFD71A]">BeyondMenu</h3>
                                        </div>
                                        <div className="w-full xl:text-sm lg:text-xs md:text-sm text-xs font-normal text-white xl:pt-4 pt-2 xl:pb-6 pb-4">BeyondMenu is an all-in-one food ordering and restaurant management platform, from browsing menus to placing orders and scheduling reservations, BeyondMenu streamlines the entire food ordering process with style and ease.</div>
                                        <div className="flex items-center lg:gap-14 md:gap-10 gap-2">
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                                <div className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-white">10L+</div>
                                                <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-white">Downloads</div>
                                            </div>
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center">
                                                <div className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-white">3.9/5</div>
                                                <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-white">Rating</div>
                                            </div>
                                            <div className="w-auto inlne-flex flex-col gap-0.5 max-md:ml-auto">
                                                <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-semibold text-white/70">Industry</div>
                                                <div className="xl:text-sm lg:text-xs md:text-sm text-xs font-bold text-white">Food & Beverage</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center lg:gap-3 gap-2 md:pt-6 pt-3">
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center xl:text-sm lg:text-xs md:text-sm text-xs md:font-medium font-semibold text-white">Available on</div>
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center cursor-pointer">
                                                <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/playStoreBtnBlack.webp" className="w-auto xl:h-10 h-8 aspect-[120/40]" width="120" height="40" alt="PlayStore" title="PlayStore" />
                                            </div>
                                            <div className="w-auto inlne-flex flex-col gap-0.5 text-center cursor-pointer">
                                                <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/appStoreBtnBlack.webp" className="w-auto xl:h-10 h-8 aspect-[120/40]" width="120" height="40" alt="AppStore" title="AppStore" />
                                            </div>
                                        </div>
                                        <div className="w-full md:pt-8 pt-6">
                                            <label htmlFor="leadPopup" className="cursor-pointer xl:text-base sm:text-sm text-xs md:font-semibold font-medium text-white inline-flex items-center xl:py-3 sm:py-2.5 py-2 xl:ps-6 sm:ps-4 ps-3 xl:pe-3 sm:pe-2.5 pe-1.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#FFD71A] to-[#E7CD55] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#E7CD55] group/btn">
                                                <span>View Case Study</span>
                                                <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#FFD71A] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                                    <Svg name="arrowCall" className="size-3 relative z-10 text-[#E7CD55]" />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="md:w-4/12 w-full max-md:order-first rounded-3xl aspect-square flex items-center justify-center bg-gradient-to-br from-[#FFD71A] to-[#E7CD55] p-6">
                                        <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/beyondMenu.webp" alt="BeyondMenu" title="BeyondMenu" className="size-full object-contain object-center aspect-square" width={284} height={370} />
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

            <section className="businessModelsSection w-full relative overflow-hidden bg-white">
                <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                    <div className="flex flex-col w-full">
                        <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-[#454444] text-balance relative z-10 md:text-center md:pb-4 pb-2">Best Food Delivery App Development Business Models</h2>
                        <div className="w-full 2xl:text-lg xl:text-base md:text-sm text-xs md:font-medium font-normal text-[#454444] text-balance relative z-10 md:text-center md:pb-12 pb-5">Choosing the right business model for your on-demand food ordering application is crucial for success. At IMG Global Infotech, we help you choose the most suitable model to maximize revenue with seamless operations in our food delivery app development services.</div>
                        <div className="flex flex-wrap xl:-mx-5 -mx-3 xl:gap-y-10 gap-y-6">
                            <div className="md:w-7/12 w-full flex flex-col xl:gap-y-10 gap-y-6">
                                <div className="w-full xl:px-5 px-3">
                                    <div className="w-full flex md:flex-row flex-col gap-6 bg-gradient-to-b from-[#FFF9EE] to-[#FFFEFB] rounded-2xl lg:p-16 md:p-10 p-8 h-full">
                                        <div className="md:w-24 w-full shrink-0">
                                            <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/singleRestaurantFoodDeliveryAppDevelopmentIcon.webp" alt="Single Restaurant Food Delivery App Development" title="Single Restaurant Food Delivery App Development" width="96" height="96" className="lg:w-full w-auto shrink-0 h-24 object-contain object-center mx-auto aspect-square" />
                                        </div>
                                        <div className="md:grow max-md:w-full flex flex-col gap-4">
                                            <h3 className="w-full max-md:text-center xl:text-2xl md:text-xl sm:text-lg text-base font-semibold text-[#454444]">Single Restaurant Food Delivery App Development</h3>
                                            <div className="w-full max-md:text-center xl:text-sm text-xs font-normal text-[#454444]">We develop custom food delivery apps for restaurants, ensuring easy menu browsing, secure payments, and efficient delivery management. Boost sales, streamline operations, and enhance customer loyalty with our tailored solution.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full xl:px-5 px-3">
                                    <div className="w-full flex md:flex-row flex-col gap-6 bg-gradient-to-b from-[#FFF9EE] to-[#FFFEFB] rounded-2xl lg:p-16 md:p-10 p-8 h-full">
                                        <div className="md:w-24 w-full shrink-0">
                                            <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodChainStoresIcon.webp" alt="Food Chain Stores" title="Food Chain Stores" width="96" height="96" className="lg:w-full w-auto shrink-0 h-24 object-contain object-center mx-auto aspect-square" />
                                        </div>
                                        <div className="md:grow max-md:w-full flex flex-col gap-4">
                                            <h3 className="w-full max-md:text-center xl:text-2xl md:text-xl sm:text-lg text-base font-semibold text-[#454444]">Food Chain Stores</h3>
                                            <div className="w-full max-md:text-center xl:text-sm text-xs font-normal text-[#454444]">Our highly skilled food delivery app developers will deliver robust and efficient apps for food chain stores that operate in multiple locations under a single brand name, typically using a standardized menu, branding, and customer experience.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-5/12 w-full xl:px-5 px-3">
                                <div className="w-full flex flex-col gap-6 bg-gradient-to-b from-[#FFF9EE] to-[#FFFEFB] rounded-2xl lg:p-16 md:p-10 p-8 h-full">
                                    <div className="w-full">
                                        <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodDeliveryAggregatorsIcon.webp" alt="Food Delivery Aggregators" title="Food Delivery Aggregators" width="192" height="192" className="w-auto xl:h-48 md:h-36 h-24 object-contain object-center mx-auto aspect-square" />
                                    </div>
                                    <div className="w-full flex flex-col gap-4">
                                        <h3 className="w-full text-center xl:text-2xl md:text-xl sm:text-lg text-base font-semibold text-[#454444]">Food Delivery Aggregators</h3>
                                        <div className="w-full text-center xl:text-sm text-xs font-normal text-[#454444]">Food delivery aggregators gather several restaurants into one app, offering a wide range of dining options in one place. By developing such food delivery apps, we create some of the most effective platforms that connect consumers with a myriad of local restaurants. It's a great way to increase market reach and become more visible to businesses.</div>
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
                                <h2 className="w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl font-semibold text-white text-balance relative z-10">Advancing Food Delivery Apps with Cutting-edge Technologies</h2>
                                <div className="w-full">
                                    <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodAdvance.webp" alt="Advancing Food Delivery Apps with Cutting-edge Technologies" title="Advancing Food Delivery Apps with Cutting-edge Technologies" width="569" height="524" className="w-full aspect-[569/524]" />
                                </div>
                            </div>
                            <div className="lg:w-6/12 md:w-7/12 w-full rounded-3xl flex flex-col relative md:pl-8">
                                <div className="w-full flex flex-col overflow-x-hidden gap-6">
                                    <div className="flex md:gap-6 gap-4 items-start md:p-6 rounded-xl duration-300 hover:lg:bg-gradient-to-r hover:lg:from-[#153C5E] hover:lg:to-[#08101D]">
                                        <div className="md:size-14 size-12 flex items-center justify-center shrink-0 rounded-xl bg-[#2D86FF]">
                                            <Svg name="artificialIntelligence" className="size-8 text-white" />
                                        </div>
                                        <div className="w-full flex flex-col md:gap-3 gap-1">
                                            <h3 className="w-full xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-white">Artificial Intelligence</h3>
                                            <div className="w-full md:text-sm text-xs font-normal text-white">By integrating AI, we enable smart order routing, and personalized recommendations, streamlining delivery operations for faster, smarter service.</div>
                                        </div>
                                    </div>
                                    <div className="flex md:gap-6 gap-4 items-start md:p-6 rounded-xl duration-300 hover:lg:bg-gradient-to-r hover:lg:from-[#153C5E] hover:lg:to-[#08101D]">
                                        <div className="md:size-14 size-12 flex items-center justify-center shrink-0 rounded-xl bg-[#2D86FF]">
                                            <Svg name="generativeAi" className="size-8 text-white" />
                                        </div>
                                        <div className="w-full flex flex-col md:gap-3 gap-1">
                                            <h3 className="w-full xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-white">AR and VR</h3>
                                            <div className="w-full md:text-sm text-xs font-normal text-white">AR and VR technologies transform food delivery by letting customers virtually explore menus or sample dishes, boosting engagement and smarter decision-making.</div>
                                        </div>
                                    </div>
                                    <div className="flex md:gap-6 gap-4 items-start md:p-6 rounded-xl duration-300 hover:lg:bg-gradient-to-r hover:lg:from-[#153C5E] hover:lg:to-[#08101D]">
                                        <div className="md:size-14 size-12 flex items-center justify-center shrink-0 rounded-xl bg-[#2D86FF]">
                                            <Svg name="blockchain" className="size-8 text-white" />
                                        </div>
                                        <div className="w-full flex flex-col md:gap-3 gap-1">
                                            <h3 className="w-full xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-white">Analytics of Data</h3>
                                            <div className="w-full md:text-sm text-xs font-normal text-white">We use data analytics to examine consumer behavior, demand patterns, and operational effectiveness to optimize food delivery apps.</div>
                                        </div>
                                    </div>
                                    <div className="flex md:gap-6 gap-4 items-start md:p-6 rounded-xl duration-300 hover:lg:bg-gradient-to-r hover:lg:from-[#153C5E] hover:lg:to-[#08101D]">
                                        <div className="md:size-14 size-12 flex items-center justify-center shrink-0 rounded-xl bg-[#2D86FF]">
                                            <Svg name="voiceAssistence" className="size-8 text-white" />
                                        </div>
                                        <div className="w-full flex flex-col md:gap-3 gap-1">
                                            <h3 className="w-full xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-white">Voice Support</h3>
                                            <div className="w-full md:text-sm text-xs font-normal text-white">By integrating voice support, we offer a hands-free experience that makes it simple for users to place orders and browse menus.</div>
                                        </div>
                                    </div>
                                    <div className="flex md:gap-6 gap-4 items-start md:p-6 rounded-xl duration-300 hover:lg:bg-gradient-to-r hover:lg:from-[#153C5E] hover:lg:to-[#08101D]">
                                        <div className="md:size-14 size-12 flex items-center justify-center shrink-0 rounded-xl bg-[#2D86FF]">
                                            <Svg name="dataScience" className="size-8 text-white" />
                                        </div>
                                        <div className="w-full flex flex-col md:gap-3 gap-1">
                                            <h3 className="w-full xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-white">Metaverse</h3>
                                            <div className="w-full md:text-sm text-xs font-normal text-white">We provide a completely immersive digital world and virtual dining experience to customers by incorporating the Metaverse into food delivery applications.</div>
                                        </div>
                                    </div>
                                    <div className="flex md:gap-6 gap-4 items-start md:p-6 rounded-xl duration-300 hover:lg:bg-gradient-to-r hover:lg:from-[#153C5E] hover:lg:to-[#08101D]">
                                        <div className="md:size-14 size-12 flex items-center justify-center shrink-0 rounded-xl bg-[#2D86FF]">
                                            <Svg name="dataScience" className="size-8 text-white" />
                                        </div>
                                        <div className="w-full flex flex-col md:gap-3 gap-1">
                                            <h3 className="w-full xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-white">Blockchain</h3>
                                            <div className="w-full md:text-sm text-xs font-normal text-white">Food delivery apps can benefit from increased security and transparency because of blockchain technology.</div>
                                        </div>
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
                        <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-white text-balance relative z-10 text-center max-sm:px-4">Your Next Food Delivery Mobile App Could Look Like This</h2>
                        <Swiper className="swiper flex xl:w-7/12 lg:w-3/4 w-full -mt-6 xl:!py-16 lg:!py-14 !py-12 before:absolute before:left-0 before:h-full before:w-1/4 before:bg-gradient-to-r before:from-[#131514]/60 before:to-transparent before:z-10 before:pointer-events-none after:absolute after:right-0 after:h-full after:w-1/4 after:bg-gradient-to-l after:from-[#131514]/60 after:to-transparent after:z-10 after:pointer-events-none"
                            modules={[Autoplay]}
                            slidesPerView={1.6}
                            spaceBetween={8}
                            speed={1000}
                            loop={true}
                            centeredSlides={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                320: { slidesPerView: 1.6, spaceBetween: 8 },
                                480: { slidesPerView: 1.6, spaceBetween: 16 },
                                640: { slidesPerView: 2, spaceBetween: 16 },
                                1024: { slidesPerView: 3, spaceBetween: 32 },
                                1350: { slidesPerView: 3, spaceBetween: 32 },
                            }}
                            >
                                <SwiperSlide className="swiper-slide relative lg:p-[1.2%] md:p-[2.2%] p-[2.7%] group [&.swiper-slide-active]:!scale-100 md:!scale-95 !scale-90 duration-300">
                                    <Svg name="blackMobileFrame" className="size-full object-contain object-center absolute inset-0 text-[#404040] opacity-0 group-[&.swiper-slide-active]:opacity-100 scale-125 group-[&.swiper-slide-active]:scale-100 duration-300" />
                                    <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodLookLike1.webp" alt="Food Delivery App Look like" title="Food Delivery App Look like" className="size-full object-contain object-center aspect-[225/506]" width="225" height="506" />
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide relative lg:p-[1.2%] md:p-[2.2%] p-[2.7%] group [&.swiper-slide-active]:!scale-100 md:!scale-95 !scale-90 duration-300">
                                    <Svg name="blackMobileFrame" className="size-full object-contain object-center absolute inset-0 text-[#404040] opacity-0 group-[&.swiper-slide-active]:opacity-100 scale-125 group-[&.swiper-slide-active]:scale-100 duration-300" />
                                    <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodLookLike2.webp" alt="Food Delivery App Look like" title="Food Delivery App Look like" className="size-full object-contain object-center aspect-[225/506]" width="225" height="506" />
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide relative lg:p-[1.2%] md:p-[2.2%] p-[2.7%] group [&.swiper-slide-active]:!scale-100 md:!scale-95 !scale-90 duration-300">
                                    <Svg name="blackMobileFrame" className="size-full object-contain object-center absolute inset-0 text-[#404040] opacity-0 group-[&.swiper-slide-active]:opacity-100 scale-125 group-[&.swiper-slide-active]:scale-100 duration-300" />
                                    <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodLookLike3.webp" alt="Food Delivery App Look like" title="Food Delivery App Look like" className="size-full object-contain object-center aspect-[225/506]" width="225" height="506" />
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide relative lg:p-[1.2%] md:p-[2.2%] p-[2.7%] group [&.swiper-slide-active]:!scale-100 md:!scale-95 !scale-90 duration-300">
                                    <Svg name="blackMobileFrame" className="size-full object-contain object-center absolute inset-0 text-[#404040] opacity-0 group-[&.swiper-slide-active]:opacity-100 scale-125 group-[&.swiper-slide-active]:scale-100 duration-300" />
                                    <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodLookLike4.webp" alt="Food Delivery App Look like" title="Food Delivery App Look like" className="size-full object-contain object-center aspect-[225/506]" width="225" height="506" />
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide relative lg:p-[1.2%] md:p-[2.2%] p-[2.7%] group [&.swiper-slide-active]:!scale-100 md:!scale-95 !scale-90 duration-300">
                                    <Svg name="blackMobileFrame" className="size-full object-contain object-center absolute inset-0 text-[#404040] opacity-0 group-[&.swiper-slide-active]:opacity-100 scale-125 group-[&.swiper-slide-active]:scale-100 duration-300" />
                                    <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodLookLike5.webp" alt="Food Delivery App Look like" title="Food Delivery App Look like" className="size-full object-contain object-center aspect-[225/506]" width="225" height="506" />
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide relative lg:p-[1.2%] md:p-[2.2%] p-[2.7%] group [&.swiper-slide-active]:!scale-100 md:!scale-95 !scale-90 duration-300">
                                    <Svg name="blackMobileFrame" className="size-full object-contain object-center absolute inset-0 text-[#404040] opacity-0 group-[&.swiper-slide-active]:opacity-100 scale-125 group-[&.swiper-slide-active]:scale-100 duration-300" />
                                    <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodLookLike6.webp" alt="Food Delivery App Look like" title="Food Delivery App Look like" className="size-full object-contain object-center aspect-[225/506]" width="225" height="506" />
                                </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>

            <section className="processSection w-full relative overflow-hidden bg-white">
                <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                    <div className="flex flex-col w-full">
                        <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-[#454444] text-balance relative z-10 md:text-center md:pb-4 pb-2">The Process We Follow to Develop the Ultimate Food Delivery App Development</h2>
                        <div className="w-full 2xl:text-lg xl:text-base md:text-sm text-xs md:font-medium font-normal text-[#454444] text-balance relative z-10 md:text-center md:pb-12 pb-5">At IMG Global Infotech, we are committed to a structured approach toward food delivery app development. This ensures that the delivered app meets all your business requirements and offers a seamless experience for your customers. So, we make sure to lay extra emphasis on the development process.</div>
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
                                                    className="xl:size-20 size-14 mx-auto object-contain aspect-square"
                                                    width="80"
                                                    height="80"
                                                    loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/app-step1.webp"
                                                    alt="Discovery & Ideation"
                                                    title="Discovery & Ideation"
                                                />
                                            </div>
                                            <h3 className="w-full xl:text-xl md:text-lg text-base font-semibold pb-2">Discovery & Ideation</h3>
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
                                                    className="xl:size-20 size-14 mx-auto object-contain aspect-square"
                                                    width="80"
                                                    height="80"
                                                    loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/app-step2.webp"
                                                    alt="Wireframing & Designing"
                                                    title="Wireframing & Designing"
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
                                                    className="xl:size-20 size-14 mx-auto object-contain aspect-square"
                                                    width="80"
                                                    height="80"
                                                    loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/app-step3.webp"
                                                    alt="Development & Integrations"
                                                    title="Development & Integrations"
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
                                                    className="xl:size-20 size-14 mx-auto object-contain aspect-square"
                                                    width="80"
                                                    height="80"
                                                    loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/app-step4.webp"
                                                    alt="Quality Assurance"
                                                    title="Quality Assurance"
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
                                                    className="xl:size-20 size-14 mx-auto object-contain aspect-square"
                                                    width="80"
                                                    height="80"
                                                    loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/app-step5.webp"
                                                    alt="Launch & Maintenance"
                                                    title="Launch & Maintenance"
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

            <section className="whyChooseUsSection w-full relative bg-[#141414] lg:overflow-hidden">
                <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                    <div className="flex flex-col w-full">
                        <h2 className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl text-xl font-semibold text-white text-balance relative z-10 md:text-center xl:pb-12 lg:pb-8 pb-8">Why Choose IMG Global Infotech for Food Delivery App Development?</h2>
                        <div className="flex flex-wrap lg:items-stretch md:items-end items-start justify-between">
                            <div className="xl:w-5/12 sm:w-5/12 w-full lg:static sm:sticky bottom-0 max-sm:order-last max-sm:-ml-4 max-sm:pt-6 max-sm:-mb-8">
                                <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/foodWhyImage.webp" alt="Why Choose IMG Global Infotech for Food Delivery App Development?" title="Why Choose IMG Global Infotech for Food Delivery App Development?" className="size-full object-contain object-right-bottom origin-bottom-right lg:scale-125 aspect-[569/478]" width="569" height="478" />
                            </div>
                            <div className="xl:w-7/12 sm:w-7/12 flex flex-wrap gap-y-5 -mx-2.5">
                                <div className="lg:w-1/2 w-full px-2.5">
                                    <div className="flex flex-col rounded-3xl size-full bg-gradient-to-b from-[#000000] to-[#979494] shadow-[0px_3px_34.5px_0px_#0000001F] p-6 relative before:absolute before:inset-px before:bg-[#242424] before:rounded-3xl before:!z-0 *:z-10">
                                        <Svg name="plus" className="absolute bottom-0 lg:right-4 max-lg:right-6 lg:-translate-x-1/2 translate-y-1/2 size-6 text-[#FF6B39]" />
                                        <h3 className="xl:text-xl md:text-lg sm:text-base text-sm font-semibold text-white pb-1">Custom Food Delivery Solutions</h3>
                                        <p className="xl:text-base sm:text-sm text-xs font-normal text-[#A9A9A9]">As a leading food delivery app development company, we help businesses launch ready-to-market, white-label apps by cutting down development time and accelerating growth.</p>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full px-2.5">
                                    <div className="flex flex-col rounded-3xl size-full bg-gradient-to-b from-[#000000] to-[#979494] shadow-[0px_3px_34.5px_0px_#0000001F] p-6 relative before:absolute before:inset-px before:bg-[#242424] before:rounded-3xl before:!z-0 *:z-10">
                                        <Svg name="plus" className="absolute lg:top-0 max-lg:bottom-0 lg:right-8 lg:-translate-x-1/2 lg:-translate-y-1/2 max-lg:translate-y-1/2 size-6 text-[#2D86FF]" />
                                        <h3 className="xl:text-xl md:text-lg sm:text-base text-sm font-semibold text-white pb-1">Effortless Integrations</h3>
                                        <p className="xl:text-base sm:text-sm text-xs font-normal text-[#A9A9A9]">Whether it's payment gateways, GPS tracking, restaurant management systems, or marketing tools, we can integrate it all to create a seamless user experience.</p>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full px-2.5">
                                    <div className="flex flex-col rounded-3xl size-full bg-gradient-to-b from-[#000000] to-[#979494] shadow-[0px_3px_34.5px_0px_#0000001F] p-6 relative before:absolute before:inset-px before:bg-[#242424] before:rounded-3xl before:!z-0 *:z-10">
                                        <Svg name="plus" className="absolute bottom-0 lg:left-8 max-lg:right-6 lg:translate-x-1/2 translate-y-1/2 size-6 text-[#FF6B39]" />
                                        <h3 className="xl:text-xl md:text-lg sm:text-base text-sm font-semibold text-white pb-1">Post-Launch Support</h3>
                                        <p className="xl:text-base sm:text-sm text-xs font-normal text-[#A9A9A9]">We believe our responsibility doesn’t end with deployment. From bug fixes to performance upgrades we provide support to our customers long after the launch.</p>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full px-2.5">
                                    <div className="flex flex-col rounded-3xl size-full bg-gradient-to-b from-[#000000] to-[#979494] shadow-[0px_3px_34.5px_0px_#0000001F] p-6 relative before:absolute before:inset-px before:bg-[#242424] before:rounded-3xl before:!z-0 *:z-10">
                                        <Svg name="plus" className="absolute lg:top-0 max-lg:bottom-0 lg:left-6 lg:translate-x-1/2 lg:-translate-y-1/2 max-lg:translate-y-1/2 size-6 text-[#2D86FF]" />
                                        <h3 className="xl:text-xl md:text-lg sm:text-base text-sm font-semibold text-white pb-1">Advanced & Scalable Features</h3>
                                        <p className="xl:text-base sm:text-sm text-xs font-normal text-[#A9A9A9]">We empower your food delivery app with smart features like real-time order tracking, AI-driven recommendations, in-app chat, loyalty programs, and more.</p>
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

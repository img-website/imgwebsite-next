"use client"

import Testimonial from "@/components/testimonials/Testimonial1";
import Image from "next/image";
import { Swiper, SwiperSlide, Autoplay } from '@/components/CustomSwiper';


export default function Testimonials() {
    return (
        <>
            <div className="flex w-full relative bg-slate-50 select-nonee lg:h-dvh">
                <div className="size-full relative !z-10">
                    <div className="colorApply1 flex size-full items-center justify-center rounded-b-2xl relative overflow-hidden shadow-lg before:absolute before:inset-0 before:bg-cover before:bg-right before:rounded-b-2xl before:bg-gradient-to-r before:mix-blend-multiply shadow-sky-950 before:from-sky-950 before:via-sky-900 before:to-sky-800">
                        <span className="colorApply2 absolute inset-0 bg-cover bg-right opacity-50 rounded-b-2xl bg-gradient-to-r mix-blend-multiply shadow-sky-950 from-sky-950 via-sky-900 to-sky-800"></span>
                        <Image
                            className="size-full object-cover object-center absolute inset-0 -z-[1] rounded-b-2xl aspect-[1519/812]"
                            width="1519"
                            height="812"
                            priority src="https://d1y41eupgbwbb2.cloudfront.net/images/client-testimonal-2048w.webp"
                            alt="client-testimonal-2048w"
                        />

                        <div className="relative overflow-hidden z-10 text-center 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-3xl max-w-2xl px-6 lg:px-8 w-full lg:pt-40 sm:pt-32 pt-28 pb-12">
                            <h1 className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight font-light text-white">
                                <span className="colorApply3 font-bold block text-balance pb-1">Our Clients, Our Pride</span>
                            </h1>
                            <div className="max-md:text-sm text-base text-white pt-5 text-balance mx-auto w-10/12 empty:hidden">Our global clients are elemental to our success story. We pride ourselves on exceptional service & retention. No matter how small or big your project, we assure you the highest level of dedication to deliver upon your expectations. See what our clients have to say about working with team IMG Global Infotech.</div>
                            <div className="mt-10 flex gap-4 justify-center">
                                <label htmlFor="leadPopup" className="cursor-pointer max-md:hidden inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 bg-white text-slate-900 ring-2 ring-white/80 hover:bg-slate-300 hover:ring-slate-900/15">
                                    <span className="flex items-center gap-1">
                                        Send Your Request
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"><g><path d="M18.79,5.67a1.5,1.5,0,0,0-1.16-1.46l-.38-1.38a1.081,1.081,0,0,0-1.05-.76H7.79a1.06,1.06,0,0,0-1.04.76L6.37,4.21A1.537,1.537,0,0,0,5.21,5.76,1.476,1.476,0,0,0,6.27,7.18l.1,2.77a.75.75,0,0,0-.42.22.768.768,0,0,0-.21.56l.24,5.76a.759.759,0,0,0,.65.72l.08,2.22a2.579,2.579,0,0,0,2.59,2.5h5.39a2.581,2.581,0,0,0,2.6-2.5l.08-2.22a.76.76,0,0,0,.64-.72l.24-5.76a.768.768,0,0,0-.21-.56.72.72,0,0,0-.41-.22l.1-2.77A1.534,1.534,0,0,0,18.79,5.67Zm-11-2.6,8.49.03.3,1.07H7.44Zm8.5,16.33a1.578,1.578,0,0,1-1.6,1.53H9.3A1.575,1.575,0,0,1,7.71,19.4l-.08-2.18h8.74ZM9.9,13.58a2.1,2.1,0,1,1,2.1,2.1A2.1,2.1,0,0,1,9.9,13.58Zm6.73-3.65H7.37l-.1-2.67h9.45Zm.66-3.67H6.71a.522.522,0,0,1-.5-.59.5.5,0,0,1,.5-.5H17.29a.528.528,0,0,1,.5.59A.5.5,0,0,1,17.29,6.26Z"></path></g></svg>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Testimonial/>

            <div className="relative bg-gray-900 py-8 sm:py-16 select-nonee text-white">
                <div className="text-white/10">
                    <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
                        <defs>
                            <pattern id="s3" width="128" height="128" patternUnits="userSpaceOnUse" x="50%" patternTransform="translate(0 80)">
                                <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#s3)"></rect>
                    </svg>
                </div>
                <Swiper className="swiper testimonialsSwiper w-full *:!flex *:!items-center"
                    modules={[Autoplay]}
                    slidesPerView={2}
                    spaceBetween={10}
                    speed={2000}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    centeredSlides={true}
                    breakpoints={{
                        320: { slidesPerView: 1.3, spaceBetween: 0 },
                        480: { slidesPerView: 1.4, spaceBetween: 10 },
                        640: { slidesPerView: 1.5, spaceBetween: 30 },
                        1024: { slidesPerView: 1.8, spaceBetween: 30 },
                        1350: { slidesPerView: 2, spaceBetween: 30 }
                    }}
                >
                    <SwiperSlide className="swiper-slide rounded-2xl overflow-hidden p-3 md:p-8 group/tst">
                        <div className="md:py-8 w-full rounded-2xl overflow-hidden group-[.swiper-slide-active]/tst:delay-0 delay-700 group-[.swiper-slide-active]/tst:opacity-100 opacity-60 duration-300">
                            <div className="my-10 flex flex-col gap-3 items-center">
                                <div className="">
                                    <div className="text-center text-lg md:text-xl font-semibold md:leading-6 tracking-tight">Joao Moura</div>
                                    <div className="text-center mt-1 text-sm md:text-base opacity-70">Founder & CEO, Fraudio</div>
                                </div>
                            </div>
                            <div className="text-base md:text-lg lg:text-xl font-medium tracking-tight text-center italic pb-2">“We were highly satisfied with their services.”</div>
                            <div className="text-sm md:text-base lg:text-lg text-center">IMG Global Infotech Pvt. Ltd's app helped the client improve their merchant partnerships and achieve higher conversion rates and consumer happiness. The app boosted financial inclusion, and the team stood out for their knowledge in the client's sector. The team continuously met project deadlines.</div>
                            <div className="flex flex-col items-center mt-10 gap-4">
                                <div className="mt-1 text-sm md:text-sm opacity-70 flex justify-center gap-1 *:w-auto md:*:h-6 *:h-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                </div>
                                <div className="text-sm md:text-base font-medium md:leading-6 tracking-tight w-auto md:h-8 h-6">
                                    <Image
                                        
                                        className="size-full object-contain object-center"
                                        width={113}
                                        height={32}
                                        
                                        loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/clutchco.svg"
                                        alt="clutch"
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide rounded-2xl overflow-hidden p-3 md:p-8 group/tst">
                        <div className="md:py-8 w-full rounded-2xl overflow-hidden group-[.swiper-slide-active]/tst:delay-0 delay-700 group-[.swiper-slide-active]/tst:opacity-100 opacity-60 duration-300">
                            <div className="my-10 flex flex-col gap-3 items-center">
                                <div className="">
                                    <div className="text-center text-lg md:text-xl font-semibold md:leading-6 tracking-tight">Imad Khalil</div>
                                    <div className="text-center mt-1 text-sm md:text-base opacity-70">Multivendor E-Commerce Web & App, Twin power</div>
                                </div>
                            </div>
                            <div className="text-base md:text-lg lg:text-xl font-medium tracking-tight text-center italic pb-2">“Their dedication to going above and beyond to ensure the final product exceeded our expectations truly set them apart.”</div>
                            <div className="text-sm md:text-base lg:text-lg text-center">IMG Global Infotech Pvt. Ltd.’s efforts improved user engagement, performance metrics, customer satisfaction, and conversion rates. The team completed tasks on time, communicated clearly, and responded promptly to needs. Their dedication and understanding of the requirements were commendable.</div>
                            <div className="flex flex-col items-center mt-10 gap-4">
                                <div className="mt-1 text-sm md:text-sm opacity-70 flex justify-center gap-1 *:w-auto md:*:h-6 *:h-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                </div>
                                <div className="text-sm md:text-base font-medium md:leading-6 tracking-tight w-auto md:h-8 h-6">
                                    <Image
                                        
                                        className="size-full object-contain object-center"
                                        width={113}
                                        height={32}
                                        
                                        loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/clutchco.svg"
                                        alt="clutch"
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide rounded-2xl overflow-hidden p-3 md:p-8 group/tst">
                        <div className="md:py-8 w-full rounded-2xl overflow-hidden group-[.swiper-slide-active]/tst:delay-0 delay-700 group-[.swiper-slide-active]/tst:opacity-100 opacity-60 duration-300">
                            <div className="my-10 flex flex-col gap-3 items-center">
                                <div className="">
                                    <div className="text-center text-lg md:text-xl font-semibold md:leading-6 tracking-tight">Alisha Sharma</div>
                                    <div className="text-center mt-1 text-sm md:text-base opacity-70">Co-Founder, YSR Infotech</div>
                                </div>
                            </div>
                            <div className="text-base md:text-lg lg:text-xl font-medium tracking-tight text-center italic pb-2">“Their project management skills and quick responses were amazing.”</div>
                            <div className="text-sm md:text-base lg:text-lg text-center">The client was very satisfied with the final product. IMG Global Infotech Pvt. Ltd provided a quick turnaround and high-quality services. They were able to strategize their deliverables well. The team utilized Scrum for project management and various apps for communication.</div>
                            <div className="flex flex-col items-center mt-10 gap-4">
                                <div className="mt-1 text-sm md:text-sm opacity-70 flex justify-center gap-1 *:w-auto md:*:h-6 *:h-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                </div>
                                <div className="text-sm md:text-base font-medium md:leading-6 tracking-tight w-auto md:h-8 h-6">
                                    <Image
                                        
                                        className="size-full object-contain object-center"
                                        width={113}
                                        height={32}
                                        
                                        loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/clutchco.svg"
                                        alt="clutch"
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide rounded-2xl overflow-hidden p-3 md:p-8 group/tst">
                        <div className="md:py-8 w-full rounded-2xl overflow-hidden group-[.swiper-slide-active]/tst:delay-0 delay-700 group-[.swiper-slide-active]/tst:opacity-100 opacity-60 duration-300">
                            <div className="my-10 flex flex-col gap-3 items-center">
                                <div className="">
                                    <div className="text-center text-lg md:text-xl font-semibold md:leading-6 tracking-tight">Arun Garg</div>
                                    <div className="text-center mt-1 text-sm md:text-base opacity-70">Founder, CoachingSelect.com</div>
                                </div>
                            </div>
                            <div className="text-base md:text-lg lg:text-xl font-medium tracking-tight text-center italic pb-2">“We have grown exponentially.”</div>
                            <div className="text-sm md:text-base lg:text-lg text-center">IMG Global Infotech Pvt. Ltd helped the client improve their digital presence through the web portal. They finished the project within six months, which exceeded the client's expectations. In addition, they were customer-focused and accommodating to the client's queries.</div>
                            <div className="flex flex-col items-center mt-10 gap-4">
                                <div className="mt-1 text-sm md:text-sm opacity-70 flex justify-center gap-1 *:w-auto md:*:h-6 *:h-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                </div>
                                <div className="text-sm md:text-base font-medium md:leading-6 tracking-tight w-auto md:h-8 h-6">
                                    <Image
                                        
                                        className="size-full object-contain object-center"
                                        width={113}
                                        height={32}
                                        
                                        loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/clutchco.svg"
                                        alt="clutch"
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide rounded-2xl overflow-hidden p-3 md:p-8 group/tst">
                        <div className="md:py-8 w-full rounded-2xl overflow-hidden group-[.swiper-slide-active]/tst:delay-0 delay-700 group-[.swiper-slide-active]/tst:opacity-100 opacity-60 duration-300">
                            <div className="my-10 flex flex-col gap-3 items-center">
                                <div className="">
                                    <div className="text-center text-lg md:text-xl font-semibold md:leading-6 tracking-tight">Pallav Bansal</div>
                                    <div className="text-center mt-1 text-sm md:text-base opacity-70">Project Manager, Moprep</div>
                                </div>
                            </div>
                            <div className="text-base md:text-lg lg:text-xl font-medium tracking-tight text-center italic pb-2">“They were open to feedback and made sure that every detail was addressed to our satisfaction.”</div>
                            <div className="text-sm md:text-base lg:text-lg text-center">IMG Global Infotech Pvt. Ltd delivered great work and leveraged their exceptional technical expertise to turn the client’s vision into reality. They were professional and had consistent communication with the client. Moreover, their members were open to feedback and produced high-quality work.</div>
                            <div className="flex flex-col items-center mt-10 gap-4">
                                <div className="mt-1 text-sm md:text-sm opacity-70 flex justify-center gap-1 *:w-auto md:*:h-6 *:h-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                </div>
                                <div className="text-sm md:text-base font-medium md:leading-6 tracking-tight w-auto md:h-8 h-6">
                                    <Image
                                        
                                        className="size-full object-contain object-center"
                                        width={113}
                                        height={32}
                                        
                                        loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/clutchco.svg"
                                        alt="clutch"
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide rounded-2xl overflow-hidden p-3 md:p-8 group/tst">
                        <div className="md:py-8 w-full rounded-2xl overflow-hidden group-[.swiper-slide-active]/tst:delay-0 delay-700 group-[.swiper-slide-active]/tst:opacity-100 opacity-60 duration-300">
                            <div className="my-10 flex flex-col gap-3 items-center">
                                <div className="">
                                    <div className="text-center text-lg md:text-xl font-semibold md:leading-6 tracking-tight">Raghav Gupta</div>
                                    <div className="text-center mt-1 text-sm md:text-base opacity-70">Employee, mahveera digital solutions LLP</div>
                                </div>
                            </div>
                            <div className="text-base md:text-lg lg:text-xl font-medium tracking-tight text-center italic pb-2">“Their project management skills are very good.”</div>
                            <div className="text-sm md:text-base lg:text-lg text-center">IMG Global Infotech Pvt. Ltd completed milestones within schedule and completed the project following the client's budget. They understood the client's business needs and delivered a custom solution that met requirements. The responsive team made the whole experience a positive one for the client.</div>
                            <div className="flex flex-col items-center mt-10 gap-4">
                                <div className="mt-1 text-sm md:text-sm opacity-70 flex justify-center gap-1 *:w-auto md:*:h-6 *:h-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.517" height="20.616" viewBox="0 0 21.517 20.616">
                                        <path id="star_3_" data-name="star (3)" d="M21.459,8.286a1.141,1.141,0,0,0-.983-.785l-6.21-.557L11.809,1.191a1.145,1.145,0,0,0-2.1,0L7.25,6.943,1.038,7.5a1.145,1.145,0,0,0-.648,2l4.694,4.115L3.7,19.714A1.143,1.143,0,0,0,5.4,20.95l5.36-3.2,5.355,3.2a1.145,1.145,0,0,0,1.7-1.236l-1.39-6.1L21.125,9.5a1.145,1.145,0,0,0,.334-1.215Zm-10.6,9.4" transform="translate(0.001 -0.497)" fill="orange"/>
                                    </svg>
                                </div>
                                <div className="text-sm md:text-base font-medium md:leading-6 tracking-tight w-auto md:h-8 h-6">
                                    <Image
                                        
                                        className="size-full object-contain object-center"
                                        width={113}
                                        height={32}
                                        
                                        loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/clutchco.svg"
                                        alt="clutch"
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="relative bg-gray-50 py-6 md:py-8 lg:py-16 select-nonee">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
                    <ul className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-32 pt-16 gap-x-6">
                        <li className="relative group !h-auto">
                            <div className="flex flex-col items-center bg-white shadow-[0px_0px_15px_#8a8788] shadow-gray-300 rounded-4xl py-10 px-8 relative h-full">
                                <svg className="h-10 w-auto absolute left-5 top-[5.5rem]" xmlns="http://www.w3.org/2000/svg" width="146" height="119" viewBox="0 0 146 119" fill="none">
                                    <path d="M0 79.4979C0 75.8769 0.328828 72.0913 0.986486 68.1411C4.6036 43.4523 16.277 20.7386 36.0068 0L45.8716 7.40665C34.0338 19.9156 27.9505 31.1079 27.6216 40.9834C27.9505 46.5795 32.0608 50.5297 39.9527 52.834C42.2545 53.4924 44.7207 54.3153 47.3514 55.3029C60.1757 61.2282 66.5878 71.2683 66.5878 85.4232C66.5878 90.6902 65.4369 95.6279 63.1351 100.236C57.2162 112.745 47.6802 119 34.527 119C29.9234 119 25.6486 118.177 21.7027 116.531C7.23423 111.264 0 98.9198 0 79.4979ZM79.4122 79.4979C79.4122 75.8769 79.741 72.0913 80.3987 68.1411C84.0158 43.4523 95.6892 20.7386 115.419 0L125.284 7.40665C113.446 19.9156 107.363 31.1079 107.034 40.9834C107.363 46.5795 111.473 50.5297 119.365 52.834C121.667 53.4924 124.133 54.3153 126.764 55.3029C139.588 61.2282 146 71.2683 146 85.4232C146 90.6902 144.849 95.6279 142.547 100.236C136.628 112.745 127.092 119 113.939 119C109.336 119 105.061 118.177 101.115 116.531C86.6464 111.264 79.4122 98.9198 79.4122 79.4979Z" fill="#8C92FD"/>
                                </svg>
                                <svg className="h-10 w-auto absolute right-5 bottom-12" xmlns="http://www.w3.org/2000/svg" width="146" height="119" viewBox="0 0 146 119" fill="none">
                                    <path d="M146 39.5021C146 43.1231 145.671 46.9087 145.014 50.8589C141.396 75.5477 129.723 98.2614 109.993 119L100.128 111.593C111.966 99.0844 118.05 87.8921 118.378 78.0166C118.05 72.4205 113.939 68.4703 106.047 66.166C103.745 65.5076 101.279 64.6847 98.6486 63.6971C85.8243 57.7718 79.4122 47.7317 79.4122 33.5768C79.4122 28.3098 80.5631 23.3721 82.8649 18.7635C88.7838 6.25451 98.3198 0 111.473 0C116.077 0 120.351 0.822952 124.297 2.46887C138.766 7.73582 146 20.0802 146 39.5021ZM66.5878 39.5021C66.5878 43.1231 66.259 46.9087 65.6013 50.8589C61.9842 75.5477 50.3108 98.2614 30.5811 119L20.7162 111.593C32.5541 99.0844 38.6374 87.8921 38.9662 78.0166C38.6374 72.4205 34.527 68.4703 26.6351 66.166C24.3333 65.5076 21.8671 64.6847 19.2365 63.6971C6.41216 57.7718 0 47.7317 0 33.5768C0 28.3098 1.15089 23.3721 3.4527 18.7635C9.37161 6.25451 18.9077 0 32.0608 0C36.6644 0 40.9392 0.822952 44.8851 2.46887C59.3536 7.73582 66.5878 20.0802 66.5878 39.5021Z" fill="#FF981F"/>
                                    </svg>
                                <div className="size-32 ring-[8px] ring-white shadow-[0px_0px_10px_6px_#8a8788] shadow-gray-400 rounded-full overflow-hidden -mt-28">
                                    <Image className="size-full object-cover" loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/asimov.webp"  alt="Review from Mr. Asimov"  width="128" height="128"/>
                                </div>
                                <div className="flex flex-col items-center pb-5 px-3 pt-5">
                                    <div className="text-center font-semibold text-[#474747] md:text-2xl text-xl">Mr. Asimov</div>
                                    <div className="text-center text-[#8a8788] md:text-base text-sm">Chief Medical Officer</div>
                                </div>
                                <div className="w-full text-center text-[#898788] text-base grow">Working with IMG Global Infotech to develop our telemedicine app was a fantastic experience. Their professionalism, HIPAA compliance expertise, and top-notch development enhanced patient consultations and healthcare delivery. I highly recommend their committed and supportive team!</div>
                                <div className="flex mx-auto w-full max-w-16 pt-4">
                                    <div className="w-1/2 h-1 bg-[#8b92fd]"></div>
                                    <div className="w-1/2 h-1 bg-[#ff981f]"></div>
                                </div>
                                <div className="flex gap-2 items-center pt-4 px-3">
                                    <div className="text-center *:size-full size-8 rounded-full *:scale-150 overflow-hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff"></rect><path d="M1.638,5.846H30.362c-.711-1.108-1.947-1.846-3.362-1.846H5c-1.414,0-2.65,.738-3.362,1.846Z" fill="#a62842"></path><path d="M2.03,7.692c-.008,.103-.03,.202-.03,.308v1.539H31v-1.539c0-.105-.022-.204-.03-.308H2.03Z" fill="#a62842"></path><path fill="#a62842" d="M2 11.385H31V13.231H2z"></path><path fill="#a62842" d="M2 15.077H31V16.923000000000002H2z"></path><path fill="#a62842" d="M1 18.769H31V20.615H1z"></path><path d="M1,24c0,.105,.023,.204,.031,.308H30.969c.008-.103,.031-.202,.031-.308v-1.539H1v1.539Z" fill="#a62842"></path><path d="M30.362,26.154H1.638c.711,1.108,1.947,1.846,3.362,1.846H27c1.414,0,2.65-.738,3.362-1.846Z" fill="#a62842"></path><path d="M5,4h11v12.923H1V8c0-2.208,1.792-4,4-4Z" fill="#102d5e"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path><path fill="#fff" d="M4.601 7.463L5.193 7.033 4.462 7.033 4.236 6.338 4.01 7.033 3.279 7.033 3.87 7.463 3.644 8.158 4.236 7.729 4.827 8.158 4.601 7.463z"></path><path fill="#fff" d="M7.58 7.463L8.172 7.033 7.441 7.033 7.215 6.338 6.989 7.033 6.258 7.033 6.849 7.463 6.623 8.158 7.215 7.729 7.806 8.158 7.58 7.463z"></path><path fill="#fff" d="M10.56 7.463L11.151 7.033 10.42 7.033 10.194 6.338 9.968 7.033 9.237 7.033 9.828 7.463 9.603 8.158 10.194 7.729 10.785 8.158 10.56 7.463z"></path><path fill="#fff" d="M6.066 9.283L6.658 8.854 5.927 8.854 5.701 8.158 5.475 8.854 4.744 8.854 5.335 9.283 5.109 9.979 5.701 9.549 6.292 9.979 6.066 9.283z"></path><path fill="#fff" d="M9.046 9.283L9.637 8.854 8.906 8.854 8.68 8.158 8.454 8.854 7.723 8.854 8.314 9.283 8.089 9.979 8.68 9.549 9.271 9.979 9.046 9.283z"></path><path fill="#fff" d="M12.025 9.283L12.616 8.854 11.885 8.854 11.659 8.158 11.433 8.854 10.702 8.854 11.294 9.283 11.068 9.979 11.659 9.549 12.251 9.979 12.025 9.283z"></path><path fill="#fff" d="M6.066 12.924L6.658 12.494 5.927 12.494 5.701 11.799 5.475 12.494 4.744 12.494 5.335 12.924 5.109 13.619 5.701 13.19 6.292 13.619 6.066 12.924z"></path><path fill="#fff" d="M9.046 12.924L9.637 12.494 8.906 12.494 8.68 11.799 8.454 12.494 7.723 12.494 8.314 12.924 8.089 13.619 8.68 13.19 9.271 13.619 9.046 12.924z"></path><path fill="#fff" d="M12.025 12.924L12.616 12.494 11.885 12.494 11.659 11.799 11.433 12.494 10.702 12.494 11.294 12.924 11.068 13.619 11.659 13.19 12.251 13.619 12.025 12.924z"></path><path fill="#fff" d="M13.539 7.463L14.13 7.033 13.399 7.033 13.173 6.338 12.947 7.033 12.216 7.033 12.808 7.463 12.582 8.158 13.173 7.729 13.765 8.158 13.539 7.463z"></path><path fill="#fff" d="M4.601 11.104L5.193 10.674 4.462 10.674 4.236 9.979 4.01 10.674 3.279 10.674 3.87 11.104 3.644 11.799 4.236 11.369 4.827 11.799 4.601 11.104z"></path><path fill="#fff" d="M7.58 11.104L8.172 10.674 7.441 10.674 7.215 9.979 6.989 10.674 6.258 10.674 6.849 11.104 6.623 11.799 7.215 11.369 7.806 11.799 7.58 11.104z"></path><path fill="#fff" d="M10.56 11.104L11.151 10.674 10.42 10.674 10.194 9.979 9.968 10.674 9.237 10.674 9.828 11.104 9.603 11.799 10.194 11.369 10.785 11.799 10.56 11.104z"></path><path fill="#fff" d="M13.539 11.104L14.13 10.674 13.399 10.674 13.173 9.979 12.947 10.674 12.216 10.674 12.808 11.104 12.582 11.799 13.173 11.369 13.765 11.799 13.539 11.104z"></path><path fill="#fff" d="M4.601 14.744L5.193 14.315 4.462 14.315 4.236 13.619 4.01 14.315 3.279 14.315 3.87 14.744 3.644 15.44 4.236 15.01 4.827 15.44 4.601 14.744z"></path><path fill="#fff" d="M7.58 14.744L8.172 14.315 7.441 14.315 7.215 13.619 6.989 14.315 6.258 14.315 6.849 14.744 6.623 15.44 7.215 15.01 7.806 15.44 7.58 14.744z"></path><path fill="#fff" d="M10.56 14.744L11.151 14.315 10.42 14.315 10.194 13.619 9.968 14.315 9.237 14.315 9.828 14.744 9.603 15.44 10.194 15.01 10.785 15.44 10.56 14.744z"></path><path fill="#fff" d="M13.539 14.744L14.13 14.315 13.399 14.315 13.173 13.619 12.947 14.315 12.216 14.315 12.808 14.744 12.582 15.44 13.173 15.01 13.765 15.44 13.539 14.744z"></path></svg>
                                    </div>
                                    <div className="text-center md:text-lg text-base text-[#898788] uppercase font-medium">USA</div>
                                </div>
                            </div>
                        </li>
                        <li className="relative group !h-auto">
                            <div className="flex flex-col items-center bg-white shadow-[0px_0px_15px_#8a8788] shadow-gray-300 rounded-4xl py-10 px-8 relative h-full">
                                <svg className="h-10 w-auto absolute left-5 top-[5.5rem]" xmlns="http://www.w3.org/2000/svg" width="146" height="119" viewBox="0 0 146 119" fill="none">
                                    <path d="M0 79.4979C0 75.8769 0.328828 72.0913 0.986486 68.1411C4.6036 43.4523 16.277 20.7386 36.0068 0L45.8716 7.40665C34.0338 19.9156 27.9505 31.1079 27.6216 40.9834C27.9505 46.5795 32.0608 50.5297 39.9527 52.834C42.2545 53.4924 44.7207 54.3153 47.3514 55.3029C60.1757 61.2282 66.5878 71.2683 66.5878 85.4232C66.5878 90.6902 65.4369 95.6279 63.1351 100.236C57.2162 112.745 47.6802 119 34.527 119C29.9234 119 25.6486 118.177 21.7027 116.531C7.23423 111.264 0 98.9198 0 79.4979ZM79.4122 79.4979C79.4122 75.8769 79.741 72.0913 80.3987 68.1411C84.0158 43.4523 95.6892 20.7386 115.419 0L125.284 7.40665C113.446 19.9156 107.363 31.1079 107.034 40.9834C107.363 46.5795 111.473 50.5297 119.365 52.834C121.667 53.4924 124.133 54.3153 126.764 55.3029C139.588 61.2282 146 71.2683 146 85.4232C146 90.6902 144.849 95.6279 142.547 100.236C136.628 112.745 127.092 119 113.939 119C109.336 119 105.061 118.177 101.115 116.531C86.6464 111.264 79.4122 98.9198 79.4122 79.4979Z" fill="#8C92FD"/>
                                </svg>
                                <svg className="h-10 w-auto absolute right-5 bottom-12" xmlns="http://www.w3.org/2000/svg" width="146" height="119" viewBox="0 0 146 119" fill="none">
                                    <path d="M146 39.5021C146 43.1231 145.671 46.9087 145.014 50.8589C141.396 75.5477 129.723 98.2614 109.993 119L100.128 111.593C111.966 99.0844 118.05 87.8921 118.378 78.0166C118.05 72.4205 113.939 68.4703 106.047 66.166C103.745 65.5076 101.279 64.6847 98.6486 63.6971C85.8243 57.7718 79.4122 47.7317 79.4122 33.5768C79.4122 28.3098 80.5631 23.3721 82.8649 18.7635C88.7838 6.25451 98.3198 0 111.473 0C116.077 0 120.351 0.822952 124.297 2.46887C138.766 7.73582 146 20.0802 146 39.5021ZM66.5878 39.5021C66.5878 43.1231 66.259 46.9087 65.6013 50.8589C61.9842 75.5477 50.3108 98.2614 30.5811 119L20.7162 111.593C32.5541 99.0844 38.6374 87.8921 38.9662 78.0166C38.6374 72.4205 34.527 68.4703 26.6351 66.166C24.3333 65.5076 21.8671 64.6847 19.2365 63.6971C6.41216 57.7718 0 47.7317 0 33.5768C0 28.3098 1.15089 23.3721 3.4527 18.7635C9.37161 6.25451 18.9077 0 32.0608 0C36.6644 0 40.9392 0.822952 44.8851 2.46887C59.3536 7.73582 66.5878 20.0802 66.5878 39.5021Z" fill="#FF981F"/>
                                    </svg>
                                <div className="size-32 ring-[8px] ring-white shadow-[0px_0px_10px_6px_#8a8788] shadow-gray-400 rounded-full overflow-hidden -mt-28">
                                    <Image className="size-full object-cover" loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/chris-ragain.webp"  alt="Review from Mr. Chris Ragain"  width="128" height="128"/>
                                </div>
                                <div className="flex flex-col items-center pb-5 px-3 pt-5">
                                    <div className="text-center font-semibold text-[#474747] md:text-2xl text-xl">Mr. Chris Ragain</div>
                                    <div className="text-center text-[#8a8788] md:text-base text-sm">CEO</div>
                                </div>
                                <div className="w-full text-center text-[#898788] text-base grow">I hired IMG for the taxi app design and development project, and  I couldn't be more thrilled with how it's going. My hired team is excellent, from the wireframing process to the development. The communication is excellent, and the attention to detail is wonderful.</div>
                                <div className="flex mx-auto w-full max-w-16 pt-4">
                                    <div className="w-1/2 h-1 bg-[#8b92fd]"></div>
                                    <div className="w-1/2 h-1 bg-[#ff981f]"></div>
                                </div>
                                <div className="flex gap-2 items-center pt-4 px-3">
                                    <div className="text-center *:size-full size-8 rounded-full *:scale-150 overflow-hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#061b65"></rect><path d="M6.5,13.774v2.226h4v-2.227l3.037,2.227h2.463v-1.241l-3.762-2.759h3.762v-4h-2.74l2.74-2.009v-1.991h-1.441l-4.059,2.977v-2.977H6.5v2.794l-3.257-2.389c-.767,.374-1.389,.983-1.786,1.738l2.532,1.858H1s0,0,0,0v4h3.763l-3.763,2.76v1.24H3.464l3.036-2.226Z" fill="#fff"></path><path d="M1.805,5.589l3.285,2.411h1.364L2.359,4.995c-.204,.18-.39,.377-.554,.594Z" fill="#d22d32"></path><path fill="#d22d32" d="M1 16L6.454 12 6.454 13 2.363 16 1 16z"></path><path id="1705926025352-5861297_Star7" d="M6.838,18.741l.536,1.666,1.636-.62-.968,1.457,1.505,.893-1.743,.152,.24,1.733-1.205-1.268-1.205,1.268,.24-1.733-1.743-.152,1.505-.893-.968-1.457,1.636,.62,.536-1.666Z" fill="#fff"></path><path id="1705926025352-5861297_Star7-2" d="M23.113,21.755l.291,.906,.89-.337-.527,.793,.819,.486-.948,.082,.131,.943-.656-.69-.656,.69,.131-.943-.948-.082,.819-.486-.527-.793,.89,.337,.291-.906Z" fill="#fff"></path><path id="1705926025352-5861297_Star7-3" d="M20.166,13.127l.291,.906,.89-.337-.527,.793,.819,.486-.948,.082,.131,.943-.656-.69-.656,.69,.131-.943-.948-.082,.819-.486-.527-.793,.89,.337,.291-.906Z" fill="#fff"></path><path id="1705926025352-5861297_Star7-4" d="M23.43,7.127l.291,.906,.89-.337-.527,.793,.819,.486-.948,.082,.131,.943-.656-.69-.656,.69,.131-.943-.948-.082,.819-.486-.527-.793,.89,.337,.291-.906Z" fill="#fff"></path><path id="1705926025352-5861297_Star7-5" d="M28.132,10.817l.291,.906,.89-.337-.527,.793,.819,.486-.948,.082,.131,.943-.656-.69-.656,.69,.131-.943-.948-.082,.819-.486-.527-.793,.89,.337,.291-.906Z" fill="#fff"></path><path id="1705926025352-5861297_Star5" d="M25.742,16l.23,.565,.608,.045-.466,.393,.146,.592-.518-.321-.518,.321,.146-.592-.466-.393,.608-.045,.23-.565Z" fill="#fff"></path><path fill="#d22d32" d="M9.5 16L7.5 16 7.5 11 1 11 1 9 7.5 9 7.5 4 9.5 4 9.5 9 16 9 16 11 9.5 11 9.5 16z"></path><path fill="#d22d32" d="M16 15.667L11 12 11 13 15.091 16 16 16 16 15.667z"></path><path fill="#d22d32" d="M16 4L15.752 4 10.291 8.004 11.655 8.004 16 4.818 16 4z"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>
                                    </div>
                                    <div className="text-center md:text-lg text-base text-[#898788] uppercase font-medium">Australia</div>
                                </div>
                            </div>
                        </li>
                        <li className="relative group !h-auto">
                            <div className="flex flex-col items-center bg-white shadow-[0px_0px_15px_#8a8788] shadow-gray-300 rounded-4xl py-10 px-8 relative h-full">
                                <svg className="h-10 w-auto absolute left-5 top-[5.5rem]" xmlns="http://www.w3.org/2000/svg" width="146" height="119" viewBox="0 0 146 119" fill="none">
                                    <path d="M0 79.4979C0 75.8769 0.328828 72.0913 0.986486 68.1411C4.6036 43.4523 16.277 20.7386 36.0068 0L45.8716 7.40665C34.0338 19.9156 27.9505 31.1079 27.6216 40.9834C27.9505 46.5795 32.0608 50.5297 39.9527 52.834C42.2545 53.4924 44.7207 54.3153 47.3514 55.3029C60.1757 61.2282 66.5878 71.2683 66.5878 85.4232C66.5878 90.6902 65.4369 95.6279 63.1351 100.236C57.2162 112.745 47.6802 119 34.527 119C29.9234 119 25.6486 118.177 21.7027 116.531C7.23423 111.264 0 98.9198 0 79.4979ZM79.4122 79.4979C79.4122 75.8769 79.741 72.0913 80.3987 68.1411C84.0158 43.4523 95.6892 20.7386 115.419 0L125.284 7.40665C113.446 19.9156 107.363 31.1079 107.034 40.9834C107.363 46.5795 111.473 50.5297 119.365 52.834C121.667 53.4924 124.133 54.3153 126.764 55.3029C139.588 61.2282 146 71.2683 146 85.4232C146 90.6902 144.849 95.6279 142.547 100.236C136.628 112.745 127.092 119 113.939 119C109.336 119 105.061 118.177 101.115 116.531C86.6464 111.264 79.4122 98.9198 79.4122 79.4979Z" fill="#8C92FD"/>
                                </svg>
                                <svg className="h-10 w-auto absolute right-5 bottom-12" xmlns="http://www.w3.org/2000/svg" width="146" height="119" viewBox="0 0 146 119" fill="none">
                                    <path d="M146 39.5021C146 43.1231 145.671 46.9087 145.014 50.8589C141.396 75.5477 129.723 98.2614 109.993 119L100.128 111.593C111.966 99.0844 118.05 87.8921 118.378 78.0166C118.05 72.4205 113.939 68.4703 106.047 66.166C103.745 65.5076 101.279 64.6847 98.6486 63.6971C85.8243 57.7718 79.4122 47.7317 79.4122 33.5768C79.4122 28.3098 80.5631 23.3721 82.8649 18.7635C88.7838 6.25451 98.3198 0 111.473 0C116.077 0 120.351 0.822952 124.297 2.46887C138.766 7.73582 146 20.0802 146 39.5021ZM66.5878 39.5021C66.5878 43.1231 66.259 46.9087 65.6013 50.8589C61.9842 75.5477 50.3108 98.2614 30.5811 119L20.7162 111.593C32.5541 99.0844 38.6374 87.8921 38.9662 78.0166C38.6374 72.4205 34.527 68.4703 26.6351 66.166C24.3333 65.5076 21.8671 64.6847 19.2365 63.6971C6.41216 57.7718 0 47.7317 0 33.5768C0 28.3098 1.15089 23.3721 3.4527 18.7635C9.37161 6.25451 18.9077 0 32.0608 0C36.6644 0 40.9392 0.822952 44.8851 2.46887C59.3536 7.73582 66.5878 20.0802 66.5878 39.5021Z" fill="#FF981F"/>
                                    </svg>
                                <div className="size-32 ring-[8px] ring-white shadow-[0px_0px_10px_6px_#8a8788] shadow-gray-400 rounded-full overflow-hidden -mt-28">
                                    <Image className="size-full object-cover" loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/rod-ferris.webp"  alt="man with phone"  width="128" height="128"/>
                                </div>
                                <div className="flex flex-col items-center pb-5 px-3 pt-5">
                                    <div className="text-center font-semibold text-[#474747] md:text-2xl text-xl">Mr. Rod Ferris</div>
                                    <div className="text-center text-[#8a8788] md:text-base text-sm">CEO</div>
                                </div>
                                <div className="w-full text-center text-[#898788] text-base grow">IMG Global Infotech developed a high-performance salon booking app that streamlined our work and boosted appointments. The app is attractive, user-friendly, and loved by our clients. Their expertise and dedication made the entire process seamless—I highly recommend them!</div>
                                <div className="flex mx-auto w-full max-w-16 pt-4">
                                    <div className="w-1/2 h-1 bg-[#8b92fd]"></div>
                                    <div className="w-1/2 h-1 bg-[#ff981f]"></div>
                                </div>
                                <div className="flex gap-2 items-center pt-4 px-3">
                                    <div className="text-center *:size-full size-8 rounded-full *:scale-150 overflow-hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff"></rect><path d="M1.638,5.846H30.362c-.711-1.108-1.947-1.846-3.362-1.846H5c-1.414,0-2.65,.738-3.362,1.846Z" fill="#a62842"></path><path d="M2.03,7.692c-.008,.103-.03,.202-.03,.308v1.539H31v-1.539c0-.105-.022-.204-.03-.308H2.03Z" fill="#a62842"></path><path fill="#a62842" d="M2 11.385H31V13.231H2z"></path><path fill="#a62842" d="M2 15.077H31V16.923000000000002H2z"></path><path fill="#a62842" d="M1 18.769H31V20.615H1z"></path><path d="M1,24c0,.105,.023,.204,.031,.308H30.969c.008-.103,.031-.202,.031-.308v-1.539H1v1.539Z" fill="#a62842"></path><path d="M30.362,26.154H1.638c.711,1.108,1.947,1.846,3.362,1.846H27c1.414,0,2.65-.738,3.362-1.846Z" fill="#a62842"></path><path d="M5,4h11v12.923H1V8c0-2.208,1.792-4,4-4Z" fill="#102d5e"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path><path fill="#fff" d="M4.601 7.463L5.193 7.033 4.462 7.033 4.236 6.338 4.01 7.033 3.279 7.033 3.87 7.463 3.644 8.158 4.236 7.729 4.827 8.158 4.601 7.463z"></path><path fill="#fff" d="M7.58 7.463L8.172 7.033 7.441 7.033 7.215 6.338 6.989 7.033 6.258 7.033 6.849 7.463 6.623 8.158 7.215 7.729 7.806 8.158 7.58 7.463z"></path><path fill="#fff" d="M10.56 7.463L11.151 7.033 10.42 7.033 10.194 6.338 9.968 7.033 9.237 7.033 9.828 7.463 9.603 8.158 10.194 7.729 10.785 8.158 10.56 7.463z"></path><path fill="#fff" d="M6.066 9.283L6.658 8.854 5.927 8.854 5.701 8.158 5.475 8.854 4.744 8.854 5.335 9.283 5.109 9.979 5.701 9.549 6.292 9.979 6.066 9.283z"></path><path fill="#fff" d="M9.046 9.283L9.637 8.854 8.906 8.854 8.68 8.158 8.454 8.854 7.723 8.854 8.314 9.283 8.089 9.979 8.68 9.549 9.271 9.979 9.046 9.283z"></path><path fill="#fff" d="M12.025 9.283L12.616 8.854 11.885 8.854 11.659 8.158 11.433 8.854 10.702 8.854 11.294 9.283 11.068 9.979 11.659 9.549 12.251 9.979 12.025 9.283z"></path><path fill="#fff" d="M6.066 12.924L6.658 12.494 5.927 12.494 5.701 11.799 5.475 12.494 4.744 12.494 5.335 12.924 5.109 13.619 5.701 13.19 6.292 13.619 6.066 12.924z"></path><path fill="#fff" d="M9.046 12.924L9.637 12.494 8.906 12.494 8.68 11.799 8.454 12.494 7.723 12.494 8.314 12.924 8.089 13.619 8.68 13.19 9.271 13.619 9.046 12.924z"></path><path fill="#fff" d="M12.025 12.924L12.616 12.494 11.885 12.494 11.659 11.799 11.433 12.494 10.702 12.494 11.294 12.924 11.068 13.619 11.659 13.19 12.251 13.619 12.025 12.924z"></path><path fill="#fff" d="M13.539 7.463L14.13 7.033 13.399 7.033 13.173 6.338 12.947 7.033 12.216 7.033 12.808 7.463 12.582 8.158 13.173 7.729 13.765 8.158 13.539 7.463z"></path><path fill="#fff" d="M4.601 11.104L5.193 10.674 4.462 10.674 4.236 9.979 4.01 10.674 3.279 10.674 3.87 11.104 3.644 11.799 4.236 11.369 4.827 11.799 4.601 11.104z"></path><path fill="#fff" d="M7.58 11.104L8.172 10.674 7.441 10.674 7.215 9.979 6.989 10.674 6.258 10.674 6.849 11.104 6.623 11.799 7.215 11.369 7.806 11.799 7.58 11.104z"></path><path fill="#fff" d="M10.56 11.104L11.151 10.674 10.42 10.674 10.194 9.979 9.968 10.674 9.237 10.674 9.828 11.104 9.603 11.799 10.194 11.369 10.785 11.799 10.56 11.104z"></path><path fill="#fff" d="M13.539 11.104L14.13 10.674 13.399 10.674 13.173 9.979 12.947 10.674 12.216 10.674 12.808 11.104 12.582 11.799 13.173 11.369 13.765 11.799 13.539 11.104z"></path><path fill="#fff" d="M4.601 14.744L5.193 14.315 4.462 14.315 4.236 13.619 4.01 14.315 3.279 14.315 3.87 14.744 3.644 15.44 4.236 15.01 4.827 15.44 4.601 14.744z"></path><path fill="#fff" d="M7.58 14.744L8.172 14.315 7.441 14.315 7.215 13.619 6.989 14.315 6.258 14.315 6.849 14.744 6.623 15.44 7.215 15.01 7.806 15.44 7.58 14.744z"></path><path fill="#fff" d="M10.56 14.744L11.151 14.315 10.42 14.315 10.194 13.619 9.968 14.315 9.237 14.315 9.828 14.744 9.603 15.44 10.194 15.01 10.785 15.44 10.56 14.744z"></path><path fill="#fff" d="M13.539 14.744L14.13 14.315 13.399 14.315 13.173 13.619 12.947 14.315 12.216 14.315 12.808 14.744 12.582 15.44 13.173 15.01 13.765 15.44 13.539 14.744z"></path></svg>
                                    </div>
                                    <div className="text-center md:text-lg text-base text-[#898788] uppercase font-medium">USA</div>
                                </div>
                            </div>
                        </li>
                        <li className="relative group !h-auto">
                            <div className="flex flex-col items-center bg-white shadow-[0px_0px_15px_#8a8788] shadow-gray-300 rounded-4xl py-10 px-8 relative h-full">
                                <svg className="h-10 w-auto absolute left-5 top-[5.5rem]" xmlns="http://www.w3.org/2000/svg" width="146" height="119" viewBox="0 0 146 119" fill="none">
                                    <path d="M0 79.4979C0 75.8769 0.328828 72.0913 0.986486 68.1411C4.6036 43.4523 16.277 20.7386 36.0068 0L45.8716 7.40665C34.0338 19.9156 27.9505 31.1079 27.6216 40.9834C27.9505 46.5795 32.0608 50.5297 39.9527 52.834C42.2545 53.4924 44.7207 54.3153 47.3514 55.3029C60.1757 61.2282 66.5878 71.2683 66.5878 85.4232C66.5878 90.6902 65.4369 95.6279 63.1351 100.236C57.2162 112.745 47.6802 119 34.527 119C29.9234 119 25.6486 118.177 21.7027 116.531C7.23423 111.264 0 98.9198 0 79.4979ZM79.4122 79.4979C79.4122 75.8769 79.741 72.0913 80.3987 68.1411C84.0158 43.4523 95.6892 20.7386 115.419 0L125.284 7.40665C113.446 19.9156 107.363 31.1079 107.034 40.9834C107.363 46.5795 111.473 50.5297 119.365 52.834C121.667 53.4924 124.133 54.3153 126.764 55.3029C139.588 61.2282 146 71.2683 146 85.4232C146 90.6902 144.849 95.6279 142.547 100.236C136.628 112.745 127.092 119 113.939 119C109.336 119 105.061 118.177 101.115 116.531C86.6464 111.264 79.4122 98.9198 79.4122 79.4979Z" fill="#8C92FD"/>
                                </svg>
                                <svg className="h-10 w-auto absolute right-5 bottom-12" xmlns="http://www.w3.org/2000/svg" width="146" height="119" viewBox="0 0 146 119" fill="none">
                                    <path d="M146 39.5021C146 43.1231 145.671 46.9087 145.014 50.8589C141.396 75.5477 129.723 98.2614 109.993 119L100.128 111.593C111.966 99.0844 118.05 87.8921 118.378 78.0166C118.05 72.4205 113.939 68.4703 106.047 66.166C103.745 65.5076 101.279 64.6847 98.6486 63.6971C85.8243 57.7718 79.4122 47.7317 79.4122 33.5768C79.4122 28.3098 80.5631 23.3721 82.8649 18.7635C88.7838 6.25451 98.3198 0 111.473 0C116.077 0 120.351 0.822952 124.297 2.46887C138.766 7.73582 146 20.0802 146 39.5021ZM66.5878 39.5021C66.5878 43.1231 66.259 46.9087 65.6013 50.8589C61.9842 75.5477 50.3108 98.2614 30.5811 119L20.7162 111.593C32.5541 99.0844 38.6374 87.8921 38.9662 78.0166C38.6374 72.4205 34.527 68.4703 26.6351 66.166C24.3333 65.5076 21.8671 64.6847 19.2365 63.6971C6.41216 57.7718 0 47.7317 0 33.5768C0 28.3098 1.15089 23.3721 3.4527 18.7635C9.37161 6.25451 18.9077 0 32.0608 0C36.6644 0 40.9392 0.822952 44.8851 2.46887C59.3536 7.73582 66.5878 20.0802 66.5878 39.5021Z" fill="#FF981F"/>
                                    </svg>
                                <div className="size-32 ring-[8px] ring-white shadow-[0px_0px_10px_6px_#8a8788] shadow-gray-400 rounded-full overflow-hidden -mt-28">
                                    <Image className="size-full object-cover" loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/joshua-mwatu.webp"  alt="Review from Mr. Joshua Mwatu"  width="128" height="128"/>
                                </div>
                                <div className="flex flex-col items-center pb-5 px-3 pt-5">
                                    <div className="text-center font-semibold text-[#474747] md:text-2xl text-xl">Mr. Joshua Mwatu</div>
                                    <div className="text-center text-[#8a8788] md:text-base text-sm">CEO</div>
                                </div>
                                <div className="w-full text-center text-[#898788] text-base grow">IMG Global Infotech developed a user-friendly grocery delivery app that improved our service coverage and efficiency. Features like real-time tracking have been a hit with our customers. Their professionalism and commitment made the collaboration seamless!</div>
                                <div className="flex mx-auto w-full max-w-16 pt-4">
                                    <div className="w-1/2 h-1 bg-[#8b92fd]"></div>
                                    <div className="w-1/2 h-1 bg-[#ff981f]"></div>
                                </div>
                                <div className="flex gap-2 items-center pt-4 px-3">
                                    <div className="text-center *:size-full size-8 rounded-full *:scale-150 overflow-hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff"></rect><path d="M1.638,5.846H30.362c-.711-1.108-1.947-1.846-3.362-1.846H5c-1.414,0-2.65,.738-3.362,1.846Z" fill="#a62842"></path><path d="M2.03,7.692c-.008,.103-.03,.202-.03,.308v1.539H31v-1.539c0-.105-.022-.204-.03-.308H2.03Z" fill="#a62842"></path><path fill="#a62842" d="M2 11.385H31V13.231H2z"></path><path fill="#a62842" d="M2 15.077H31V16.923000000000002H2z"></path><path fill="#a62842" d="M1 18.769H31V20.615H1z"></path><path d="M1,24c0,.105,.023,.204,.031,.308H30.969c.008-.103,.031-.202,.031-.308v-1.539H1v1.539Z" fill="#a62842"></path><path d="M30.362,26.154H1.638c.711,1.108,1.947,1.846,3.362,1.846H27c1.414,0,2.65-.738,3.362-1.846Z" fill="#a62842"></path><path d="M5,4h11v12.923H1V8c0-2.208,1.792-4,4-4Z" fill="#102d5e"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path><path fill="#fff" d="M4.601 7.463L5.193 7.033 4.462 7.033 4.236 6.338 4.01 7.033 3.279 7.033 3.87 7.463 3.644 8.158 4.236 7.729 4.827 8.158 4.601 7.463z"></path><path fill="#fff" d="M7.58 7.463L8.172 7.033 7.441 7.033 7.215 6.338 6.989 7.033 6.258 7.033 6.849 7.463 6.623 8.158 7.215 7.729 7.806 8.158 7.58 7.463z"></path><path fill="#fff" d="M10.56 7.463L11.151 7.033 10.42 7.033 10.194 6.338 9.968 7.033 9.237 7.033 9.828 7.463 9.603 8.158 10.194 7.729 10.785 8.158 10.56 7.463z"></path><path fill="#fff" d="M6.066 9.283L6.658 8.854 5.927 8.854 5.701 8.158 5.475 8.854 4.744 8.854 5.335 9.283 5.109 9.979 5.701 9.549 6.292 9.979 6.066 9.283z"></path><path fill="#fff" d="M9.046 9.283L9.637 8.854 8.906 8.854 8.68 8.158 8.454 8.854 7.723 8.854 8.314 9.283 8.089 9.979 8.68 9.549 9.271 9.979 9.046 9.283z"></path><path fill="#fff" d="M12.025 9.283L12.616 8.854 11.885 8.854 11.659 8.158 11.433 8.854 10.702 8.854 11.294 9.283 11.068 9.979 11.659 9.549 12.251 9.979 12.025 9.283z"></path><path fill="#fff" d="M6.066 12.924L6.658 12.494 5.927 12.494 5.701 11.799 5.475 12.494 4.744 12.494 5.335 12.924 5.109 13.619 5.701 13.19 6.292 13.619 6.066 12.924z"></path><path fill="#fff" d="M9.046 12.924L9.637 12.494 8.906 12.494 8.68 11.799 8.454 12.494 7.723 12.494 8.314 12.924 8.089 13.619 8.68 13.19 9.271 13.619 9.046 12.924z"></path><path fill="#fff" d="M12.025 12.924L12.616 12.494 11.885 12.494 11.659 11.799 11.433 12.494 10.702 12.494 11.294 12.924 11.068 13.619 11.659 13.19 12.251 13.619 12.025 12.924z"></path><path fill="#fff" d="M13.539 7.463L14.13 7.033 13.399 7.033 13.173 6.338 12.947 7.033 12.216 7.033 12.808 7.463 12.582 8.158 13.173 7.729 13.765 8.158 13.539 7.463z"></path><path fill="#fff" d="M4.601 11.104L5.193 10.674 4.462 10.674 4.236 9.979 4.01 10.674 3.279 10.674 3.87 11.104 3.644 11.799 4.236 11.369 4.827 11.799 4.601 11.104z"></path><path fill="#fff" d="M7.58 11.104L8.172 10.674 7.441 10.674 7.215 9.979 6.989 10.674 6.258 10.674 6.849 11.104 6.623 11.799 7.215 11.369 7.806 11.799 7.58 11.104z"></path><path fill="#fff" d="M10.56 11.104L11.151 10.674 10.42 10.674 10.194 9.979 9.968 10.674 9.237 10.674 9.828 11.104 9.603 11.799 10.194 11.369 10.785 11.799 10.56 11.104z"></path><path fill="#fff" d="M13.539 11.104L14.13 10.674 13.399 10.674 13.173 9.979 12.947 10.674 12.216 10.674 12.808 11.104 12.582 11.799 13.173 11.369 13.765 11.799 13.539 11.104z"></path><path fill="#fff" d="M4.601 14.744L5.193 14.315 4.462 14.315 4.236 13.619 4.01 14.315 3.279 14.315 3.87 14.744 3.644 15.44 4.236 15.01 4.827 15.44 4.601 14.744z"></path><path fill="#fff" d="M7.58 14.744L8.172 14.315 7.441 14.315 7.215 13.619 6.989 14.315 6.258 14.315 6.849 14.744 6.623 15.44 7.215 15.01 7.806 15.44 7.58 14.744z"></path><path fill="#fff" d="M10.56 14.744L11.151 14.315 10.42 14.315 10.194 13.619 9.968 14.315 9.237 14.315 9.828 14.744 9.603 15.44 10.194 15.01 10.785 15.44 10.56 14.744z"></path><path fill="#fff" d="M13.539 14.744L14.13 14.315 13.399 14.315 13.173 13.619 12.947 14.315 12.216 14.315 12.808 14.744 12.582 15.44 13.173 15.01 13.765 15.44 13.539 14.744z"></path></svg>
                                    </div>
                                    <div className="text-center md:text-lg text-base text-[#898788] uppercase font-medium">USA</div>
                                </div>
                            </div>
                        </li>
                        <li className="relative group !h-auto">
                            <div className="flex flex-col items-center bg-white shadow-[0px_0px_15px_#8a8788] shadow-gray-300 rounded-4xl py-10 px-8 relative h-full">
                                <svg className="h-10 w-auto absolute left-5 top-[5.5rem]" xmlns="http://www.w3.org/2000/svg" width="146" height="119" viewBox="0 0 146 119" fill="none">
                                    <path d="M0 79.4979C0 75.8769 0.328828 72.0913 0.986486 68.1411C4.6036 43.4523 16.277 20.7386 36.0068 0L45.8716 7.40665C34.0338 19.9156 27.9505 31.1079 27.6216 40.9834C27.9505 46.5795 32.0608 50.5297 39.9527 52.834C42.2545 53.4924 44.7207 54.3153 47.3514 55.3029C60.1757 61.2282 66.5878 71.2683 66.5878 85.4232C66.5878 90.6902 65.4369 95.6279 63.1351 100.236C57.2162 112.745 47.6802 119 34.527 119C29.9234 119 25.6486 118.177 21.7027 116.531C7.23423 111.264 0 98.9198 0 79.4979ZM79.4122 79.4979C79.4122 75.8769 79.741 72.0913 80.3987 68.1411C84.0158 43.4523 95.6892 20.7386 115.419 0L125.284 7.40665C113.446 19.9156 107.363 31.1079 107.034 40.9834C107.363 46.5795 111.473 50.5297 119.365 52.834C121.667 53.4924 124.133 54.3153 126.764 55.3029C139.588 61.2282 146 71.2683 146 85.4232C146 90.6902 144.849 95.6279 142.547 100.236C136.628 112.745 127.092 119 113.939 119C109.336 119 105.061 118.177 101.115 116.531C86.6464 111.264 79.4122 98.9198 79.4122 79.4979Z" fill="#8C92FD"/>
                                </svg>
                                <svg className="h-10 w-auto absolute right-5 bottom-12" xmlns="http://www.w3.org/2000/svg" width="146" height="119" viewBox="0 0 146 119" fill="none">
                                    <path d="M146 39.5021C146 43.1231 145.671 46.9087 145.014 50.8589C141.396 75.5477 129.723 98.2614 109.993 119L100.128 111.593C111.966 99.0844 118.05 87.8921 118.378 78.0166C118.05 72.4205 113.939 68.4703 106.047 66.166C103.745 65.5076 101.279 64.6847 98.6486 63.6971C85.8243 57.7718 79.4122 47.7317 79.4122 33.5768C79.4122 28.3098 80.5631 23.3721 82.8649 18.7635C88.7838 6.25451 98.3198 0 111.473 0C116.077 0 120.351 0.822952 124.297 2.46887C138.766 7.73582 146 20.0802 146 39.5021ZM66.5878 39.5021C66.5878 43.1231 66.259 46.9087 65.6013 50.8589C61.9842 75.5477 50.3108 98.2614 30.5811 119L20.7162 111.593C32.5541 99.0844 38.6374 87.8921 38.9662 78.0166C38.6374 72.4205 34.527 68.4703 26.6351 66.166C24.3333 65.5076 21.8671 64.6847 19.2365 63.6971C6.41216 57.7718 0 47.7317 0 33.5768C0 28.3098 1.15089 23.3721 3.4527 18.7635C9.37161 6.25451 18.9077 0 32.0608 0C36.6644 0 40.9392 0.822952 44.8851 2.46887C59.3536 7.73582 66.5878 20.0802 66.5878 39.5021Z" fill="#FF981F"/>
                                    </svg>
                                <div className="size-32 ring-[8px] ring-white shadow-[0px_0px_10px_6px_#8a8788] shadow-gray-400 rounded-full overflow-hidden -mt-28">
                                    <Image className="size-full object-cover" loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/raj-shah.webp"  alt="Review from Mr. Raj Shah"  width="128" height="128"/>
                                </div>
                                <div className="flex flex-col items-center pb-5 px-3 pt-5">
                                    <div className="text-center font-semibold text-[#474747] md:text-2xl text-xl">Mr. Raj Shah</div>
                                    <div className="text-center text-[#8a8788] md:text-base text-sm">CTO</div>
                                </div>
                                <div className="w-full text-center text-[#898788] text-base grow">Working with IMG Global Infotech was great! They created a strong fantasy sports app that provides real-time scores and smooth operation for the users. Some of the unique features they've incorporated have gotten us thousands of users in Canada. We are very happy with the outcome!</div>
                                <div className="flex mx-auto w-full max-w-16 pt-4">
                                    <div className="w-1/2 h-1 bg-[#8b92fd]"></div>
                                    <div className="w-1/2 h-1 bg-[#ff981f]"></div>
                                </div>
                                <div className="flex gap-2 items-center pt-4 px-3">
                                    <div className="text-center *:size-full size-8 rounded-full *:scale-150 overflow-hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#fff" d="M1 11H31V21H1z"></path><path d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" fill="#e06535"></path><path d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 24)" fill="#2c6837"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M16,12.292c-2.048,0-3.708,1.66-3.708,3.708s1.66,3.708,3.708,3.708,3.708-1.66,3.708-3.708-1.66-3.708-3.708-3.708Zm3.041,4.109c-.01,.076,.042,.145,.117,.157-.033,.186-.08,.367-.143,.54-.071-.028-.152,.006-.181,.077-.029,.071,.004,.151,.073,.182-.04,.085-.083,.167-.13,.248l-1.611-1.069-.592-.249c.013-.026,.024-.053,.034-.081l.595,.242,1.895,.383-1.833-.616-.636-.087c.006-.028,.009-.057,.011-.087l.638,.08,1.93-.12-1.93-.12-.638,.08c-.002-.03-.005-.059-.011-.087l.636-.087,1.833-.616-1.895,.383-.595,.242c-.009-.028-.021-.055-.034-.081l.592-.249,1.611-1.069c.047,.081,.09,.163,.13,.248-.07,.031-.103,.111-.073,.182,.029,.071,.11,.105,.181,.077,.063,.173,.111,.354,.143,.54-.075,.012-.127,.081-.117,.157,.01,.076,.078,.129,.154,.121,.008,.092,.013,.185,.013,.279s-.005,.187-.013,.279c-.075-.008-.144,.045-.154,.121Zm-.584-2.462c-.059,.048-.07,.134-.023,.194,.046,.06,.132,.072,.194,.028,.053,.076,.104,.155,.15,.236l-1.731,.861-.512,.388c-.016-.024-.034-.047-.054-.069l.508-.394,1.28-1.45-1.45,1.28-.394,.508c-.022-.019-.045-.038-.069-.054l.388-.512,.861-1.731c.081,.047,.16,.097,.236,.15-.045,.061-.033,.147,.028,.194,.061,.046,.147,.036,.194-.023,.071,.06,.141,.123,.207,.189,.066,.066,.129,.135,.189,.207Zm-2.177-1.133c-.008,.075,.045,.144,.121,.154,.076,.01,.145-.042,.157-.117,.186,.033,.367,.08,.54,.143-.028,.071,.006,.152,.077,.181,.071,.029,.151-.004,.182-.073,.085,.04,.167,.083,.248,.13l-1.069,1.611-.249,.592c-.026-.013-.053-.024-.081-.034l.242-.595,.383-1.895-.616,1.833-.087,.636c-.028-.006-.057-.009-.087-.011l.08-.638-.12-1.93-.12,1.93,.08,.638c-.03,.002-.059,.005-.087,.011l-.087-.636-.616-1.833,.383,1.895,.242,.595c-.028,.009-.055,.021-.081,.034l-.249-.592-1.069-1.611c.081-.047,.163-.09,.248-.13,.031,.07,.111,.103,.182,.073,.071-.029,.105-.11,.077-.181,.173-.063,.354-.111,.54-.143,.012,.075,.081,.127,.157,.117,.076-.01,.129-.078,.121-.154,.092-.008,.185-.013,.279-.013s.187,.005,.279,.013Zm-3.113,4.368c-.029-.071-.11-.105-.181-.077-.063-.173-.111-.354-.143-.54,.075-.012,.127-.081,.117-.157-.01-.076-.078-.129-.154-.121-.008-.092-.013-.185-.013-.279s.005-.187,.013-.279c.075,.008,.144-.045,.154-.121,.01-.076-.042-.145-.117-.157,.033-.186,.08-.367,.143-.54,.071,.028,.152-.006,.181-.077,.029-.071-.004-.151-.073-.182,.04-.085,.083-.167,.13-.248l1.611,1.069,.592,.249c-.013,.026-.024,.053-.034,.081l-.595-.242-1.895-.383,1.833,.616,.636,.087c-.006,.028-.009,.057-.011,.087l-.638-.08-1.93,.12,1.93,.12,.638-.08c.002,.03,.005,.059,.011,.087l-.636,.087-1.833,.616,1.895-.383,.595-.242c.009,.028,.021,.055,.034,.081l-.592,.249-1.611,1.069c-.047-.081-.09-.163-.13-.248,.07-.031,.103-.111,.073-.182Zm.772-3.63c.048,.059,.134,.07,.194,.023,.06-.046,.072-.132,.028-.194,.076-.053,.155-.104,.236-.15l.861,1.731,.388,.512c-.024,.016-.047,.034-.069,.054l-.394-.508-1.45-1.28,1.28,1.45,.508,.394c-.019,.022-.038,.045-.054,.069l-.512-.388-1.731-.861c.047-.081,.097-.16,.15-.236,.061,.045,.147,.033,.194-.028,.046-.061,.036-.147-.023-.194,.06-.071,.123-.141,.189-.207s.135-.129,.207-.189Zm-.395,4.518c.059-.048,.07-.134,.023-.194-.046-.06-.132-.072-.194-.028-.053-.076-.104-.155-.15-.236l1.731-.861,.512-.388c.016,.024,.034,.047,.054,.069l-.508,.394-1.28,1.45,1.45-1.28,.394-.508c.022,.019,.045,.038,.069,.054l-.388,.512-.861,1.731c-.081-.047-.16-.097-.236-.15,.045-.061,.033-.147-.028-.194-.061-.046-.147-.036-.194,.023-.071-.06-.141-.123-.207-.189-.066-.066-.129-.135-.189-.207Zm2.177,1.133c.008-.075-.045-.144-.121-.154-.076-.01-.145,.042-.157,.117-.186-.033-.367-.08-.54-.143,.028-.071-.006-.152-.077-.181-.071-.029-.151,.004-.182,.073-.085-.04-.167-.083-.248-.13l1.069-1.611,.249-.592c.026,.013,.053,.024,.081,.034l-.242,.595-.383,1.895,.616-1.833,.087-.636c.028,.006,.057,.009,.087,.011l-.08,.638,.12,1.93,.12-1.93-.08-.638c.03-.002,.059-.005,.087-.011l.087,.636,.616,1.833-.383-1.895-.242-.595c.028-.009,.055-.021,.081-.034l.249,.592,1.069,1.611c-.081,.047-.163,.09-.248,.13-.031-.07-.111-.103-.182-.073-.071,.029-.105,.11-.077,.181-.173,.063-.354,.111-.54,.143-.012-.075-.081-.127-.157-.117-.076,.01-.129,.078-.121,.154-.092,.008-.185,.013-.279,.013s-.187-.005-.279-.013Zm2.341-.738c-.048-.059-.134-.07-.194-.023-.06,.046-.072,.132-.028,.194-.076,.053-.155,.104-.236,.15l-.861-1.731-.388-.512c.024-.016,.047-.034,.069-.054l.394,.508,1.45,1.28-1.28-1.45-.508-.394c.019-.022,.038-.045,.054-.069l.512,.388,1.731,.861c-.047,.081-.097,.16-.15,.236-.061-.045-.147-.033-.194,.028-.046,.061-.036,.147,.023,.194-.06,.071-.123,.141-.189,.207s-.135,.129-.207,.189Z" fill="#2c2c6b"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>
                                    </div>
                                    <div className="text-center md:text-lg text-base text-[#898788] uppercase font-medium">India</div>
                                </div>
                            </div>
                        </li>
                        <li className="relative group !h-auto">
                            <div className="flex flex-col items-center bg-white shadow-[0px_0px_15px_#8a8788] shadow-gray-300 rounded-4xl py-10 px-8 relative h-full">
                                <svg className="h-10 w-auto absolute left-5 top-[5.5rem]" xmlns="http://www.w3.org/2000/svg" width="146" height="119" viewBox="0 0 146 119" fill="none">
                                    <path d="M0 79.4979C0 75.8769 0.328828 72.0913 0.986486 68.1411C4.6036 43.4523 16.277 20.7386 36.0068 0L45.8716 7.40665C34.0338 19.9156 27.9505 31.1079 27.6216 40.9834C27.9505 46.5795 32.0608 50.5297 39.9527 52.834C42.2545 53.4924 44.7207 54.3153 47.3514 55.3029C60.1757 61.2282 66.5878 71.2683 66.5878 85.4232C66.5878 90.6902 65.4369 95.6279 63.1351 100.236C57.2162 112.745 47.6802 119 34.527 119C29.9234 119 25.6486 118.177 21.7027 116.531C7.23423 111.264 0 98.9198 0 79.4979ZM79.4122 79.4979C79.4122 75.8769 79.741 72.0913 80.3987 68.1411C84.0158 43.4523 95.6892 20.7386 115.419 0L125.284 7.40665C113.446 19.9156 107.363 31.1079 107.034 40.9834C107.363 46.5795 111.473 50.5297 119.365 52.834C121.667 53.4924 124.133 54.3153 126.764 55.3029C139.588 61.2282 146 71.2683 146 85.4232C146 90.6902 144.849 95.6279 142.547 100.236C136.628 112.745 127.092 119 113.939 119C109.336 119 105.061 118.177 101.115 116.531C86.6464 111.264 79.4122 98.9198 79.4122 79.4979Z" fill="#8C92FD"/>
                                </svg>
                                <svg className="h-10 w-auto absolute right-5 bottom-12" xmlns="http://www.w3.org/2000/svg" width="146" height="119" viewBox="0 0 146 119" fill="none">
                                    <path d="M146 39.5021C146 43.1231 145.671 46.9087 145.014 50.8589C141.396 75.5477 129.723 98.2614 109.993 119L100.128 111.593C111.966 99.0844 118.05 87.8921 118.378 78.0166C118.05 72.4205 113.939 68.4703 106.047 66.166C103.745 65.5076 101.279 64.6847 98.6486 63.6971C85.8243 57.7718 79.4122 47.7317 79.4122 33.5768C79.4122 28.3098 80.5631 23.3721 82.8649 18.7635C88.7838 6.25451 98.3198 0 111.473 0C116.077 0 120.351 0.822952 124.297 2.46887C138.766 7.73582 146 20.0802 146 39.5021ZM66.5878 39.5021C66.5878 43.1231 66.259 46.9087 65.6013 50.8589C61.9842 75.5477 50.3108 98.2614 30.5811 119L20.7162 111.593C32.5541 99.0844 38.6374 87.8921 38.9662 78.0166C38.6374 72.4205 34.527 68.4703 26.6351 66.166C24.3333 65.5076 21.8671 64.6847 19.2365 63.6971C6.41216 57.7718 0 47.7317 0 33.5768C0 28.3098 1.15089 23.3721 3.4527 18.7635C9.37161 6.25451 18.9077 0 32.0608 0C36.6644 0 40.9392 0.822952 44.8851 2.46887C59.3536 7.73582 66.5878 20.0802 66.5878 39.5021Z" fill="#FF981F"/>
                                    </svg>
                                <div className="size-32 ring-[8px] ring-white shadow-[0px_0px_10px_6px_#8a8788] shadow-gray-400 rounded-full overflow-hidden -mt-28">
                                    <Image className="size-full object-cover" loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/mohamad.webp"  alt="Review from Mohamad Ali"  width="128" height="128"/>
                                </div>
                                <div className="flex flex-col items-center pb-5 px-3 pt-5">
                                    <div className="text-center font-semibold text-[#474747] md:text-2xl text-xl">Mohamad Ali</div>
                                    <div className="text-center text-[#8a8788] md:text-base text-sm">CEO</div>
                                </div>
                                <div className="w-full text-center text-[#898788] text-base grow">IMG Global Infotech developed a strong fintech application for our organization that is compatible with the financial environment of Dubai.  From digital wallets to the use of big data, they made our dreams come true by implementing their knowledge of compliance requirements and using innovative approaches</div>
                                <div className="flex mx-auto w-full max-w-16 pt-4">
                                    <div className="w-1/2 h-1 bg-[#8b92fd]"></div>
                                    <div className="w-1/2 h-1 bg-[#ff981f]"></div>
                                </div>
                                <div className="flex gap-2 items-center pt-4 px-3">
                                    <div className="text-center *:size-full size-8 rounded-full *:scale-150 overflow-hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" fill="#ea3323"></path><path d="M10,20v8H27c2.209,0,4-1.791,4-4v-4H10Z"></path><path fill="#fff" d="M10 11H31V21H10z"></path><path d="M27,4H10V12H31v-4c0-2.209-1.791-4-4-4Z" fill="#317234"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>
                                    </div>
                                    <div className="text-center md:text-lg text-base text-[#898788] uppercase font-medium">UAE</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <section className="bg-white">
                <div className="relative py-6 md:py-8 lg:py-16 overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-96 z-0 text-slate-600/5 [mask-image:linear-gradient(to_top,transparent,white)] pointer-events-none">
                        <svg className="absolute inset-0 size-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="pp0E" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
                                    <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#pp0E)"></rect>
                        </svg>
                    </div>
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 z-[1] relative">
                        <div className="select-nonee relative">
                            <div className="flex w-full h-auto items-center flex-wrap">
                                <div className="lg:w-[60%] lg:pe-10 pe-0 w-[100%] lg:order-1 order-2">
                                    <h2 className="
                                    max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black

                                    first:*:font-normal

                                    last:*:font-bold last:*:text-theme4
                                "> <span>Why Choose</span>
                                        <span> IMG Global Infotech?</span>
                                    </h2>
                                    <div className="md:text-base text-sm opacity-70 mt-3 mb-lg-1">At IMG Global Infotech, we provide creative, efficient solutions that help achieve goals. Our reputable mobile app development company offers quality services and products, uses advanced techniques, and puts our clients first to deliver the best results, thus being the best solution to your business needs.</div>
                                    <div className="flex flex-wrap gap-2 py-5 text-balance *:relative *:font-semibold *:md:text-sm *:text-xs *:flex *:backdrop-blur-xl *:text-gray-900/80 *:bg-gray-400/10 *:border-2 *:border-gray-400/10 *:hover:border-gray-400/20 *:items-center *:gap-x-2 *:rounded-full *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 [&amp;_svg]:shrink-0 *:*:lg:size-2.5 *:*:opacity-90">        <span className="group/db">
                                        <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                        10+ Years In Business
                                    </span>
                                    <span className="group/db">
                                        <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                        Experienced And Talented Coders
                                    </span>
                                    <span className="group/db">
                                        <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                        Cost-Effective Solutions
                                    </span>
                                    <span className="group/db">
                                        <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                        Clear Communication
                                    </span>
                                    <span className="group/db">
                                        <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                        Transparency Guaranteed
                                    </span>
                                    <span className="group/db">
                                        <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                        100+ In-House Developers
                                    </span>
                                    <span className="group/db">
                                        <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                        Flexible Engagement Models
                                    </span>
                                    <span className="group/db">
                                        <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                        Daily, Weekly, And Monthly Reporting
                                    </span>
                                    <span className="group/db">
                                        <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                        On-Time Efficiency
                                    </span>
                                    <span className="group/db">
                                        <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                        Data-Driven Algorithms
                                    </span>
                                                        
                                                </div>
                                </div>
                                <div className="lg:w-[40%] flex items-center justify-center w-[100%] lg:order-2 order-1">
                                    <div className="aspect-[446/454] object-cover size-full *:size-full"> <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/android-team.webp" width={446} height={454}  alt="Why Choose IMG Global Infotech for On-demand Food Delivery App Development?"/>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

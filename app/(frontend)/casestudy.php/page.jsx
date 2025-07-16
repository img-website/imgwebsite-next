import Image from "next/image";
import Link from "next/link";
import ContactUs from "@/components/ContactUs";

export default function CaseStudy() {
    return (
        <>
        <div className="flex w-full relative bg-slate-50 select-none lg:h-dvh lg:min-h-[650px]">
            <div className="size-full relative !z-10">
                <div className="flex size-full items-center rounded-b-2xl relative overflow-hidden shadow-lg before:absolute before:inset-0 before:bg-cover before:bg-right before:rounded-b-2xl before:bg-gradient-to-r before:mix-blend-multiply shadow-indigo-950 before:from-indigo-950/30 before:via-indigo-900/30 before:to-indigo-800/20">
                    <span className="absolute inset-0 bg-cover bg-right opacity-80 rounded-b-2xl bg-gradient-to-r mix-blend-multiply shadow-indigo-950 from-indigo-950/80 via-indigo-900/80 to-indigo-800/90"></span>
                    
                    <Image
                        className="size-full object-cover object-center absolute inset-0 -z-[1] rounded-b-2xl aspect-[1519/812]"
                        
                        width="1519"
                        height="812"
                        
                        sizes="100vw"
                        srcSet="
                            https://d1y41eupgbwbb2.cloudfront.net/images/hero/about-img-300w.webp 300w,
                            https://d1y41eupgbwbb2.cloudfront.net/images/hero/about-img-1100w.webp 1100w,
                            https://d1y41eupgbwbb2.cloudfront.net/images/hero/about-img-1519w.webp 1519w,
                            https://d1y41eupgbwbb2.cloudfront.net/images/hero/about-img-1800w.webp 1800w,
                            https://d1y41eupgbwbb2.cloudfront.net/images/hero/about-img-2048w.webp 2048w"
                        priority={true} 
                        src="https://d1y41eupgbwbb2.cloudfront.net/images/hero/about-img-300w.webp"
                        alt="about img"
                        />
                    
                    <div className="flex mx-auto max-lg:flex-col max-lg:gap-y-10 items-center 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-3xl max-w-2xl px-6 lg:px-8 w-full relative lg:pt-40 sm:pt-32 pt-28 pb-12 overflow-hidden z-10 justify-center">
                        <div className="xl:w-7/12 lg:w-1/2 grow-0 text-center">
                            <h1 className="font-light text-white max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em]">
                                <span className="font-bold text-gray-100 block pb-1 shadow-indigo-950 via-indigo-500 from-indigo-100 to-indigo-100 text-balance">Transforming Businesses Worldwide - 100+ Success Stories and Counting</span>
                            </h1>
                            <div className="max-lg:text-sm text-base text-white/80 pt-5 text-pretty w-10/12 mx-auto"></div>
                            {/* @include('tailwind.components.footer.social.social') */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative py-6 md:py-8 lg:py-16 select-none px-10 max-sm:px-4 lg:mt-10 mt-20" id="allCaseStudy">
            <div className="mx-auto max-w-7xl mb-24 last:mb-10 px-6 lg:px-8 w-full shadow-2xl shadow-red-800/60 bg-red-800 rounded-3xl *:relative *:z-10 relative">
                <Image
                    
                    className="size-full object-cover object-center !absolute !z-0 !inset-0 opacity-10 rounded-3xl"
                    width="79"
                    height="89"
                    src="https://images.unsplash.com/photo-1564868480822-32f714a0e763?crop=entropy&cs=tinysrgb&fit=max"
                    alt="mid-market-1500"
                />
                <div className="mx-auto max-w-container gap-x-7 max-sm:gap-0 flex items-center max-lg:flex-col-reverse">

                    <div className="lg:w-6/12 w-full relative z-20 h-auto shrink-1 grow-0 py-8 max-lg:pt-0 max-lg:px-10 max-sm:px-0">
                        <div className="w-full max-lg:flex max-lg:items-end max-sm:items-center max-md:pt-5 max-sm:pt-0">
                            <div className="w-auto pr-8 max-sm:pr-4 max-md:hidden">
                                <div className="logo size-28 max-sm:size-14 p-4 bg-white rounded-md shadow-md">
                                    <Image
                                        
                                        className="size-full object-contain object-center"
                                        width="79"
                                        height="89"
                                        loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/logo-tractorjunction.webp"
                                        alt="logo-tractorjunction-1500"
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="font-bold text-lg md:text-xl lg:text-2xl text-balance text-white md:pt-4">TractorJunction</div>
                                <div className="w-full">
                                    <div className="flex flex-wrap gap-2 justify-start py-3 text-balance 2xl:max-w-5xl xl:max-w-4xl lg:max-w-3xl md:max-w-2xl sm:max-w-xl max-w-lg mx-auto *:relative *:font-semibold *:md:text-sm *:text-xs *:flex *:backdrop-blur-xl *:text-white/80 *:bg-white/10 *:border-2 *:border-white/10 *:hover:border-white/20 *:items-center *:gap-x-2 *:rounded-full *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                                        <div className="group/db">
                                            <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                            Buy & Sell Used Tractors
                                        </div>
                                        <div className="group/db">
                                            <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                            Compare Tractors Online
                                        </div>
                                        <div className="group/db">
                                            <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                            Tractor Loan EMI Calculator
                                        </div>
                                        <div className="group/db">
                                            <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                            Farm Equipment
                                        </div>
                                        <div className="group/db">
                                            <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                            Tractor Insurance
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 text-sm md:text-base opacity-80 text-white">New Tractor, Tractor Prices, Compare Tractors, Buy & Sell Used Tractors in India</div>
                        <div className="flex gap-3 pt-5">
                            <Link href="casestudy/tractorjunction.php" target="_blank" className="inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-200 bg-white text-black hover:bg-white/80">
                                <span>
                                    <span className="inline-flex items-center gap-1">
                                        <span>
                                        View All Screens
                                        </span>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="size-5" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                                    </span>
                                </span>
                            </Link>
                            <Link href="contact-us.php" className="max-md:hidden inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 bg-transparent text-white ring-2 ring-white hover:bg-white/10 hover:ring-white/80">
                                <span className="flex items-center gap-1">
                                    Contact Us
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"><g><path d="M18.79,5.67a1.5,1.5,0,0,0-1.16-1.46l-.38-1.38a1.081,1.081,0,0,0-1.05-.76H7.79a1.06,1.06,0,0,0-1.04.76L6.37,4.21A1.537,1.537,0,0,0,5.21,5.76,1.476,1.476,0,0,0,6.27,7.18l.1,2.77a.75.75,0,0,0-.42.22.768.768,0,0,0-.21.56l.24,5.76a.759.759,0,0,0,.65.72l.08,2.22a2.579,2.579,0,0,0,2.59,2.5h5.39a2.581,2.581,0,0,0,2.6-2.5l.08-2.22a.76.76,0,0,0,.64-.72l.24-5.76a.768.768,0,0,0-.21-.56.72.72,0,0,0-.41-.22l.1-2.77A1.534,1.534,0,0,0,18.79,5.67Zm-11-2.6,8.49.03.3,1.07H7.44Zm8.5,16.33a1.578,1.578,0,0,1-1.6,1.53H9.3A1.575,1.575,0,0,1,7.71,19.4l-.08-2.18h8.74ZM9.9,13.58a2.1,2.1,0,1,1,2.1,2.1A2.1,2.1,0,0,1,9.9,13.58Zm6.73-3.65H7.37l-.1-2.67h9.45Zm.66-3.67H6.71a.522.522,0,0,1-.5-.59.5.5,0,0,1,.5-.5H17.29a.528.528,0,0,1,.5.59A.5.5,0,0,1,17.29,6.26Z"></path></g></svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-6/12 w-full relative z-10 h-auto max-lg:px-10 max-sm:px-2">
                        <div className="flex gap-10 max-sm:gap-8 max-sm:justify-center">
                            <div className="xl:w-1/2 lg:w-2/3 md:w-1/3 max-sm:w-5/12 aspect-[700/1556] self-baseline object-cover object-center md:ring-8 ring-4 ring-red-800 md:ring-offset-8 ring-offset-4 shadow-2xl shadow-red-800 md:rounded-3xl rounded-xl mb-10 -mt-10 overflow-hidden">
                                <Image
                                    
                                    className="w-full"
                                    width="79"
                                    height="89" 
                                    
                                    srcSet="https://d1y41eupgbwbb2.cloudfront.net/images/casestudy-tractorjunction.webp 160w"
                                    sizes="70px"
                                    loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/casestudy-tractorjunction.webp"
                                    alt="casestudy-tractorjunction"
                                />
                            </div>
                            <div className="lg:w-auto md:w-2/3 sm:w-auto xl:-ml-36 lg:-ml-24 max-md:-ml-20 mr-0 lg:aspect-[477/477] aspect-video self-end object-cover object-center md:ring-8 ring-4 ring-red-800 shadow-2xl shadow-red-800 md:rounded-3xl rounded-xl mb-10 overflow-hidden">
                                <Image
                                    
                                    className="w-full"
                                    width="79"
                                    height="89"
                                    loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/casestudy-tractorjunction2.webp"
                                    alt="casestudy-tractorjunction2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-7xl mb-24 last:mb-10 px-6 lg:px-8 w-full shadow-2xl shadow-lime-800/60 bg-lime-800 rounded-3xl *:relative *:z-10 relative">
                <Image
                    
                    className="size-full object-cover object-center !absolute !z-0 !inset-0 opacity-10 rounded-3xl"
                    width="79"
                    height="89" 
                    
                    srcSet="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?crop=entropy&cs=tinysrgb&fit=max 160w"
                    sizes="70px"
                    src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?crop=entropy&cs=tinysrgb&fit=max"
                    alt="mid-market-1500"
                />
                <div className="mx-auto max-w-container gap-x-7 max-sm:gap-0 flex items-center max-lg:flex-col-reverse">

                    <div className="lg:w-6/12 w-full relative z-20 h-auto shrink-1 grow-0 py-8 max-lg:pt-0 max-lg:px-10 max-sm:px-0">
                        <div className="w-full max-lg:flex max-lg:items-end max-sm:items-center max-md:pt-5 max-sm:pt-0">
                            <div className="w-auto pr-8 max-sm:pr-4 max-md:hidden">
                                <div className="logo size-28 max-sm:size-14 p-4 bg-white rounded-md shadow-md">
                                    <Image
                                        
                                        className="size-full object-contain object-center"
                                        width="79"
                                        height="89" 
                                        
                                        srcSet="https://d1y41eupgbwbb2.cloudfront.net/images/logo-hozzo.webp 160w"
                                        sizes="70px"
                                        loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/logo-hozzo.webp"
                                        alt="logo-hozzo-1500"
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="font-bold text-lg md:text-xl lg:text-2xl text-balance text-white md:pt-4">Hozzo - Car wash</div>
                                <div className="w-full">
                                    <div className="flex flex-wrap gap-2 justify-start py-3 text-balance 2xl:max-w-5xl xl:max-w-4xl lg:max-w-3xl md:max-w-2xl sm:max-w-xl max-w-lg mx-auto *:relative *:font-semibold *:md:text-sm *:text-xs *:flex *:backdrop-blur-xl *:text-white/80 *:bg-white/10 *:border-2 *:border-white/10 *:hover:border-white/20 *:items-center *:gap-x-2 *:rounded-full *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                                        <div className="group/db">
                                            <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                            Interactive maps
                                        </div>
                                        <div className="group/db">
                                            <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                            Multilingual support
                                        </div>
                                        <div className="group/db">
                                            <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                            Reservation system
                                        </div>
                                        <div className="group/db">
                                            <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                            Subscription
                                        </div>
                                        <div className="group/db">
                                            <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                            Audience Feedback
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 text-sm md:text-base opacity-80 text-white">Waterless car washing services across india</div>
                        <div className="flex gap-3 pt-5">
                        <Link href="casestudy/hozzo.php" target="_blank" className="inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-200 bg-white text-black hover:bg-white/80">
                                <span>
                                    <span className="inline-flex items-center gap-1">
                                        <span>
                                        View All Screens
                                        </span>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="size-5" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                                    </span>
                                </span>
                            </Link> 
                            <Link href="contact-us.php" className="max-md:hidden inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 bg-transparent text-white ring-2 ring-white hover:bg-white/10 hover:ring-white/80">
                                <span className="flex items-center gap-1">
                                    Contact Us
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"><g><path d="M18.79,5.67a1.5,1.5,0,0,0-1.16-1.46l-.38-1.38a1.081,1.081,0,0,0-1.05-.76H7.79a1.06,1.06,0,0,0-1.04.76L6.37,4.21A1.537,1.537,0,0,0,5.21,5.76,1.476,1.476,0,0,0,6.27,7.18l.1,2.77a.75.75,0,0,0-.42.22.768.768,0,0,0-.21.56l.24,5.76a.759.759,0,0,0,.65.72l.08,2.22a2.579,2.579,0,0,0,2.59,2.5h5.39a2.581,2.581,0,0,0,2.6-2.5l.08-2.22a.76.76,0,0,0,.64-.72l.24-5.76a.768.768,0,0,0-.21-.56.72.72,0,0,0-.41-.22l.1-2.77A1.534,1.534,0,0,0,18.79,5.67Zm-11-2.6,8.49.03.3,1.07H7.44Zm8.5,16.33a1.578,1.578,0,0,1-1.6,1.53H9.3A1.575,1.575,0,0,1,7.71,19.4l-.08-2.18h8.74ZM9.9,13.58a2.1,2.1,0,1,1,2.1,2.1A2.1,2.1,0,0,1,9.9,13.58Zm6.73-3.65H7.37l-.1-2.67h9.45Zm.66-3.67H6.71a.522.522,0,0,1-.5-.59.5.5,0,0,1,.5-.5H17.29a.528.528,0,0,1,.5.59A.5.5,0,0,1,17.29,6.26Z"></path></g></svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-6/12 w-full relative z-10 h-auto max-lg:px-10 max-sm:px-2">
                        <div className="flex gap-10 max-sm:gap-8 max-lg:justify-center">
                            <div className="lg:w-1/2 md:w-1/3 max-sm:w-5/12 aspect-[700/1556] self-baseline object-cover object-center md:ring-8 ring-4 ring-lime-800 md:ring-offset-8 ring-offset-4 shadow-2xl shadow-lime-800 md:rounded-3xl rounded-xl mb-10 -mt-10 overflow-hidden">
                                <Image
                                    
                                    className="w-full"
                                    width="79"
                                    height="89" 
                                    
                                    srcSet="https://d1y41eupgbwbb2.cloudfront.net/images/casestudy-hozzo1.webp 160w"
                                    sizes="70px"
                                    loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/casestudy-hozzo1.webp"
                                    alt="casestudy-hozzo1"
                                />
                            </div>
                            <div className="lg:w-1/2 md:w-1/3 max-sm:w-5/12 aspect-[700/1556] self-end object-cover object-center md:ring-8 ring-4 ring-lime-800 md:ring-offset-8 ring-offset-4 shadow-2xl shadow-lime-800 md:rounded-3xl rounded-xl lg:-mb-10 lg:mt-10 mb-10 -mt-10 overflow-hidden">
                                <Image
                                    
                                    className="w-full"
                                    width="79"
                                    height="89" 
                                    
                                    srcSet="https://d1y41eupgbwbb2.cloudfront.net/images/casestudy-hozzo2.webp 160w"
                                    sizes="70px"
                                    loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/casestudy-hozzo2.webp"
                                    alt="casestudy-hozzo2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-7xl mb-24 last:mb-10 px-6 lg:px-8 w-full shadow-2xl shadow-rose-800/60 bg-rose-800 rounded-3xl *:relative *:z-10 relative">
                <Image
                    
                    className="size-full object-cover object-center !absolute !z-0 !inset-0 opacity-10 rounded-3xl"
                    width="79"
                    height="89" 
                    
                    srcSet="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?crop=entropy&cs=tinysrgb&fit=max 160w"
                    sizes="70px"
                    src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?crop=entropy&cs=tinysrgb&fit=max"
                    alt="mid-market-1500"
                />
                <div className="mx-auto max-w-container gap-x-7 max-sm:gap-0 flex items-center max-lg:flex-col-reverse">

                    <div className="lg:w-6/12 w-full relative z-20 h-auto shrink-1 grow-0 py-8 max-lg:pt-0 max-lg:px-10 max-sm:px-0">
                        <div className="w-full max-lg:flex max-lg:items-end max-sm:items-center max-md:pt-5 max-sm:pt-0">
                            <div className="w-auto pr-8 max-sm:pr-4 max-md:hidden">
                                <div className="logo size-28 max-sm:size-14 p-4 bg-white rounded-md shadow-md">
                                    <Image
                                        
                                        className="size-full object-contain object-center"
                                        width="79"
                                        height="89" 
                                        
                                        srcSet="https://d1y41eupgbwbb2.cloudfront.net/images/logo-fabindia.webp 160w"
                                        sizes="70px"
                                        loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/logo-fabindia.webp"
                                        alt="logo-fabindia-1500"
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="font-bold text-lg md:text-xl lg:text-2xl text-balance text-white md:pt-4">Fabindia</div>
                                <div className="w-full">
                                    <div className="flex flex-wrap gap-2 justify-start py-3 text-balance 2xl:max-w-5xl xl:max-w-4xl lg:max-w-3xl md:max-w-2xl sm:max-w-xl max-w-lg mx-auto *:relative *:font-semibold *:md:text-sm *:text-xs *:flex *:backdrop-blur-xl *:text-white/80 *:bg-white/10 *:border-2 *:border-white/10 *:hover:border-white/20 *:items-center *:gap-x-2 *:rounded-full *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                                        <div className="group/db">
                                            <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                            User-Friendly
                                        </div>
                                        <div className="group/db">
                                            <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                            Search Functionality
                                        </div>
                                        <div className="group/db">
                                            <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                            Product Catalog
                                        </div>
                                        <div className="group/db">
                                            <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                            Convenient Shopping
                                        </div>
                                        <div className="group/db">
                                            <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                            Store Locator
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 text-sm md:text-base opacity-80 text-white">Shop for Handwoven Garments & home furnishings</div>
                        <div className="flex gap-3 pt-5">
                          <Link href="casestudy/fabindia.php" target="_blank" className="inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-200 bg-white text-black hover:bg-white/80">
                                <span>
                                    <span className="inline-flex items-center gap-1">
                                        <span>
                                        View All Screens
                                        </span>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="size-5" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                                    </span>
                                </span>
                            </Link> 
                            <Link href="contact-us.php" className="max-md:hidden inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 bg-transparent text-white ring-2 ring-white hover:bg-white/10 hover:ring-white/80">
                                <span className="flex items-center gap-1">
                                    Contact Us
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"><g><path d="M18.79,5.67a1.5,1.5,0,0,0-1.16-1.46l-.38-1.38a1.081,1.081,0,0,0-1.05-.76H7.79a1.06,1.06,0,0,0-1.04.76L6.37,4.21A1.537,1.537,0,0,0,5.21,5.76,1.476,1.476,0,0,0,6.27,7.18l.1,2.77a.75.75,0,0,0-.42.22.768.768,0,0,0-.21.56l.24,5.76a.759.759,0,0,0,.65.72l.08,2.22a2.579,2.579,0,0,0,2.59,2.5h5.39a2.581,2.581,0,0,0,2.6-2.5l.08-2.22a.76.76,0,0,0,.64-.72l.24-5.76a.768.768,0,0,0-.21-.56.72.72,0,0,0-.41-.22l.1-2.77A1.534,1.534,0,0,0,18.79,5.67Zm-11-2.6,8.49.03.3,1.07H7.44Zm8.5,16.33a1.578,1.578,0,0,1-1.6,1.53H9.3A1.575,1.575,0,0,1,7.71,19.4l-.08-2.18h8.74ZM9.9,13.58a2.1,2.1,0,1,1,2.1,2.1A2.1,2.1,0,0,1,9.9,13.58Zm6.73-3.65H7.37l-.1-2.67h9.45Zm.66-3.67H6.71a.522.522,0,0,1-.5-.59.5.5,0,0,1,.5-.5H17.29a.528.528,0,0,1,.5.59A.5.5,0,0,1,17.29,6.26Z"></path></g></svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-6/12 w-full relative z-10 h-auto max-lg:px-10 max-sm:px-2">
                        <div className="flex gap-10 max-sm:gap-8 max-lg:justify-center">
                            <div className="lg:w-1/2 md:w-1/3 max-sm:w-5/12 aspect-[700/1556] self-baseline object-cover object-center md:ring-8 ring-4 ring-rose-800 md:ring-offset-8 ring-offset-4 shadow-2xl shadow-rose-800 md:rounded-3xl rounded-xl mb-10 -mt-10 overflow-hidden">
                                <Image
                                    
                                    className="w-full"
                                    width="79"
                                    height="89" 
                                    
                                    srcSet="https://d1y41eupgbwbb2.cloudfront.net/images/casestudy-fabindia1.webp 160w"
                                    sizes="70px"
                                    loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/casestudy-fabindia1.webp"
                                    alt="casestudy-fabindia1"
                                />
                            </div>
                            <div className="lg:w-1/2 md:w-1/3 max-sm:w-5/12 aspect-[700/1556] self-end object-cover object-center md:ring-8 ring-4 ring-rose-800 md:ring-offset-8 ring-offset-4 shadow-2xl shadow-rose-800 md:rounded-3xl rounded-xl lg:-mb-10 lg:mt-10 mb-10 -mt-10 overflow-hidden">
                                <Image
                                    
                                    className="w-full"
                                    width="79"
                                    height="89" 
                                    
                                    srcSet="https://d1y41eupgbwbb2.cloudfront.net/images/casestudy-fabindia2.webp 160w"
                                    sizes="70px"
                                    loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/casestudy-fabindia2.webp"
                                    alt="casestudy-fabindia2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-7xl mb-24 last:mb-10 px-6 lg:px-8 w-full shadow-2xl shadow-green-800/60 bg-green-800 rounded-3xl *:relative *:z-10 relative">
                <Image
                    
                    className="size-full object-cover object-center !absolute !z-0 !inset-0 opacity-10 rounded-3xl"
                    width="79"
                    height="89" 
                    
                    srcSet="https://images.unsplash.com/photo-1624526251258-e2948e581c05?crop=entropy&cs=tinysrgb&fit=max 160w"
                    sizes="70px"
                    src="https://images.unsplash.com/photo-1624526251258-e2948e581c05?crop=entropy&cs=tinysrgb&fit=max"
                    alt="mid-market-1500"
                />
                <div className="mx-auto max-w-container gap-x-7 max-sm:gap-0 flex items-center max-lg:flex-col-reverse">

                    <div className="lg:w-6/12 w-full relative z-20 h-auto shrink-1 grow-0 py-8 max-lg:pt-0 max-lg:px-10 max-sm:px-0">
                        <div className="w-full max-lg:flex max-lg:items-end max-sm:items-center max-md:pt-5 max-sm:pt-0">
                            <div className="w-auto pr-8 max-sm:pr-4 max-md:hidden">
                                <div className="logo size-28 max-sm:size-14 p-4 bg-white rounded-md shadow-md">
                                    <Image
                                        
                                        className="size-full object-contain object-center"
                                        width="79"
                                        height="89" 
                                        
                                        srcSet="https://d1y41eupgbwbb2.cloudfront.net/images/logo-myfab.webp 160w"
                                        sizes="70px"
                                        loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/logo-myfab.webp"
                                        alt="logo-myfab-1500"
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="font-bold text-lg md:text-xl lg:text-2xl text-balance text-white md:pt-4">MyFab11</div>
                                <div className="w-full">
                                    <div className="flex flex-wrap gap-2 justify-start py-3 text-balance 2xl:max-w-5xl xl:max-w-4xl lg:max-w-3xl md:max-w-2xl sm:max-w-xl max-w-lg mx-auto *:relative *:font-semibold *:md:text-sm *:text-xs *:flex *:backdrop-blur-xl *:text-white/80 *:bg-white/10 *:border-2 *:border-white/10 *:hover:border-white/20 *:items-center *:gap-x-2 *:rounded-full *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                                        <div className="group/db">
                                            <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                            Player Pool
                                        </div>
                                        <div className="group/db">
                                            <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                            Injury Updates
                                        </div>
                                        <div className="group/db">
                                            <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                            Budget Management
                                        </div>
                                        <div className="group/db">
                                            <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                            Multiple Teams
                                        </div>
                                        <div className="group/db">
                                            <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                            Player Search
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 text-sm md:text-base opacity-80 text-white">Principle Partner of KKR. india's most trusted Fantasy Cricket App</div>
                        <div className="flex gap-3 pt-5">
                        <Link href="casestudy/myfab11.php" target="_blank" className="inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-200 bg-white text-black hover:bg-white/80">
                                <span>
                                    <span className="inline-flex items-center gap-1">
                                        <span>
                                        View All Screens
                                        </span>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="size-5" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                                    </span>
                                </span>
                            </Link> 
                            <Link href="contact-us.php" className="max-md:hidden inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 bg-transparent text-white ring-2 ring-white hover:bg-white/10 hover:ring-white/80">
                                <span className="flex items-center gap-1">
                                    Contact Us
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"><g><path d="M18.79,5.67a1.5,1.5,0,0,0-1.16-1.46l-.38-1.38a1.081,1.081,0,0,0-1.05-.76H7.79a1.06,1.06,0,0,0-1.04.76L6.37,4.21A1.537,1.537,0,0,0,5.21,5.76,1.476,1.476,0,0,0,6.27,7.18l.1,2.77a.75.75,0,0,0-.42.22.768.768,0,0,0-.21.56l.24,5.76a.759.759,0,0,0,.65.72l.08,2.22a2.579,2.579,0,0,0,2.59,2.5h5.39a2.581,2.581,0,0,0,2.6-2.5l.08-2.22a.76.76,0,0,0,.64-.72l.24-5.76a.768.768,0,0,0-.21-.56.72.72,0,0,0-.41-.22l.1-2.77A1.534,1.534,0,0,0,18.79,5.67Zm-11-2.6,8.49.03.3,1.07H7.44Zm8.5,16.33a1.578,1.578,0,0,1-1.6,1.53H9.3A1.575,1.575,0,0,1,7.71,19.4l-.08-2.18h8.74ZM9.9,13.58a2.1,2.1,0,1,1,2.1,2.1A2.1,2.1,0,0,1,9.9,13.58Zm6.73-3.65H7.37l-.1-2.67h9.45Zm.66-3.67H6.71a.522.522,0,0,1-.5-.59.5.5,0,0,1,.5-.5H17.29a.528.528,0,0,1,.5.59A.5.5,0,0,1,17.29,6.26Z"></path></g></svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-6/12 w-full relative z-10 h-auto max-lg:px-10 max-sm:px-2">
                        <div className="flex gap-10 max-sm:gap-8 max-lg:justify-center">
                            <div className="lg:w-1/2 md:w-1/3 max-sm:w-5/12 aspect-[700/1556] self-baseline object-cover object-center md:ring-8 ring-4 ring-green-800 md:ring-offset-8 ring-offset-4 shadow-2xl shadow-green-800 md:rounded-3xl rounded-xl mb-10 -mt-10 overflow-hidden">
                                <Image
                                    
                                    className="w-full"
                                    width="79"
                                    height="89" 
                                    
                                    srcSet="https://d1y41eupgbwbb2.cloudfront.net/images/casestudy-myfab1.webp 160w"
                                    sizes="70px"
                                    loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/casestudy-myfab1.webp"
                                    alt="casestudy-myfab1"
                                />
                            </div>
                            <div className="lg:w-1/2 md:w-1/3 max-sm:w-5/12 aspect-[700/1556] self-end object-cover object-center md:ring-8 ring-4 ring-green-800 md:ring-offset-8 ring-offset-4 shadow-2xl shadow-green-800 md:rounded-3xl rounded-xl lg:-mb-10 lg:mt-10 mb-10 -mt-10 overflow-hidden">
                                <Image
                                    
                                    className="w-full"
                                    width="79"
                                    height="89" 
                                    
                                    srcSet="https://d1y41eupgbwbb2.cloudfront.net/images/casestudy-myfab2.webp 160w"
                                    sizes="70px"
                                    loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/casestudy-myfab2.webp"
                                    alt="casestudy-myfab2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-7xl mb-24 last:mb-10 px-6 lg:px-8 w-full shadow-2xl shadow-red-800/60 bg-red-800 rounded-3xl *:relative *:z-10 relative">
                <Image
                    
                    className="size-full object-cover object-center !absolute !z-0 !inset-0 opacity-10 rounded-3xl"
                    width="79"
                    height="89" 
                    
                    srcSet="https://images.unsplash.com/photo-1503174971373-b1f69850bded?crop=entropy&cs=tinysrgb&fit=max 160w"
                    sizes="70px"
                    src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?crop=entropy&cs=tinysrgb&fit=max"
                    alt="mid-market-1500"
                />
                <div className="mx-auto max-w-container gap-x-7 max-sm:gap-0 flex items-center max-lg:flex-col-reverse">

                    <div className="lg:w-6/12 w-full relative z-20 h-auto shrink-1 grow-0 py-8 max-lg:pt-0 max-lg:px-10 max-sm:px-0">
                        <div className="w-full max-lg:flex max-lg:items-end max-sm:items-center max-md:pt-5 max-sm:pt-0">
                            <div className="w-auto pr-8 max-sm:pr-4 max-md:hidden">
                                <div className="logo size-28 max-sm:size-14 p-4 bg-white rounded-md shadow-md">
                                    <Image
                                        
                                        className="size-full object-contain object-center"
                                        width="79"
                                        height="89" 
                                        
                                        srcSet="https://d1y41eupgbwbb2.cloudfront.net/images/logo-propira.webp 160w"
                                        sizes="70px"
                                        loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/logo-propira.webp"
                                        alt="logo-propira-1500"
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="font-bold text-lg md:text-xl lg:text-2xl text-balance text-white md:pt-4">Propira</div>
                                <div className="w-full">
                                    <div className="flex flex-wrap gap-2 justify-start py-3 text-balance 2xl:max-w-5xl xl:max-w-4xl lg:max-w-3xl md:max-w-2xl sm:max-w-xl max-w-lg mx-auto *:relative *:font-semibold *:md:text-sm *:text-xs *:flex *:backdrop-blur-xl *:text-white/80 *:bg-white/10 *:border-2 *:border-white/10 *:hover:border-white/20 *:items-center *:gap-x-2 *:rounded-full *:md:pr-4 *:pr-3 *:pl-3 *:py-1 *:*:size-2 *:*:lg:size-2.5 *:*:opacity-90">
                                        <div className="group/db">
                                            <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                            Diverse Lifestyle Options
                                        </div>
                                        <div className="group/db">
                                            <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                            Immersive Visual Journey
                                        </div>
                                        <div className="group/db">
                                            <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                            Beyond the Ordinary
                                        </div>
                                        <div className="group/db">
                                            <svg className="group-hover/db:opacity-80 group-hover/db:animate-spin" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>
                                            Effortless Precision
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 text-sm md:text-base opacity-80 text-white">Your Local Property Expert</div>
                        <div className="flex gap-3 pt-5">
                            <Link href="casestudy/propira.php" target="_blank" className="inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-200 bg-white text-black hover:bg-white/80">
                                <span>
                                    <span className="inline-flex items-center gap-1">
                                        <span>
                                        View All Screens
                                        </span>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="size-5" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                                    </span>
                                </span>
                            </Link>
                            <Link href="contact-us.php" className="max-md:hidden inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 bg-transparent text-white ring-2 ring-white hover:bg-white/10 hover:ring-white/80">
                                <span className="flex items-center gap-1">
                                    Contact Us
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"><g><path d="M18.79,5.67a1.5,1.5,0,0,0-1.16-1.46l-.38-1.38a1.081,1.081,0,0,0-1.05-.76H7.79a1.06,1.06,0,0,0-1.04.76L6.37,4.21A1.537,1.537,0,0,0,5.21,5.76,1.476,1.476,0,0,0,6.27,7.18l.1,2.77a.75.75,0,0,0-.42.22.768.768,0,0,0-.21.56l.24,5.76a.759.759,0,0,0,.65.72l.08,2.22a2.579,2.579,0,0,0,2.59,2.5h5.39a2.581,2.581,0,0,0,2.6-2.5l.08-2.22a.76.76,0,0,0,.64-.72l.24-5.76a.768.768,0,0,0-.21-.56.72.72,0,0,0-.41-.22l.1-2.77A1.534,1.534,0,0,0,18.79,5.67Zm-11-2.6,8.49.03.3,1.07H7.44Zm8.5,16.33a1.578,1.578,0,0,1-1.6,1.53H9.3A1.575,1.575,0,0,1,7.71,19.4l-.08-2.18h8.74ZM9.9,13.58a2.1,2.1,0,1,1,2.1,2.1A2.1,2.1,0,0,1,9.9,13.58Zm6.73-3.65H7.37l-.1-2.67h9.45Zm.66-3.67H6.71a.522.522,0,0,1-.5-.59.5.5,0,0,1,.5-.5H17.29a.528.528,0,0,1,.5.59A.5.5,0,0,1,17.29,6.26Z"></path></g></svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-6/12 w-full relative z-10 h-auto max-lg:px-10 max-sm:px-2">
                        <div className="flex gap-10 max-sm:gap-8 max-sm:justify-center">
                            <div className="xl:w-1/2 lg:w-2/3 md:w-1/3 max-sm:w-5/12 aspect-[700/1556] self-baseline object-cover object-center md:ring-8 ring-4 ring-red-800 md:ring-offset-8 ring-offset-4 shadow-2xl shadow-red-800 md:rounded-3xl rounded-xl mb-10 -mt-10 overflow-hidden">
                                <Image
                                    
                                    className="w-full"
                                    width="79"
                                    height="89" 
                                    
                                    srcSet="https://d1y41eupgbwbb2.cloudfront.net/images/casestudy-propira1.webp 160w"
                                    sizes="70px"
                                    loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/casestudy-propira1.webp"
                                    alt="casestudy-propira1"
                                />
                            </div>
                            <div className="lg:w-auto md:w-2/3 sm:w-auto xl:-ml-36 lg:-ml-24 max-md:-ml-20 mr-0 lg:aspect-[477/477] aspect-video self-end object-cover object-center md:ring-8 ring-4 ring-red-800 shadow-2xl shadow-red-800 md:rounded-3xl rounded-xl mb-10 overflow-hidden">
                                <Image
                                    
                                    className="w-full"
                                    width="79"
                                    height="89" 
                                    
                                    srcSet="https://d1y41eupgbwbb2.cloudfront.net/images/casestudy-propira2.webp 160w"
                                    sizes="70px"
                                    loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/casestudy-propira2.webp"
                                    alt="casestudy-propira2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ContactUs defaultType="Mobile App Development" />
        </>
    );
}

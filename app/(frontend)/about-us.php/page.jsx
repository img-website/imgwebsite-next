import Image from "next/image";
import Link from "next/link";
import getDynamicMeta from "@/helpers/getDynamicMeta";

export async function generateMetadata() {
  return await getDynamicMeta("/about-us.php");
}

export default function AboutUs() {
  return (
    <>
      <div className="flex w-full relative bg-slate-50 select-none lg:h-dvh min-h-[650px]">
          <div className="size-full relative !z-10">
              <div className="flex size-full items-center rounded-b-2xl relative overflow-hidden shadow-lg before:absolute before:inset-0 before:bg-cover before:bg-right before:rounded-b-2xl before:bg-gradient-to-r before:mix-blend-multiply shadow-indigo-950 before:from-indigo-950/30 before:via-indigo-900/30 before:to-indigo-800/20">
                  <span className="absolute inset-0 bg-cover bg-right opacity-80 rounded-b-2xl bg-gradient-to-r mix-blend-multiply shadow-indigo-950 from-indigo-950/80 via-indigo-900/80 to-indigo-800/90"></span>
                  
                  <Image className="size-full object-cover object-center absolute inset-0 -z-[1] rounded-b-2xl aspect-[1519/812]"
                      priority="true"
                      width="1519"
                      height="812"
                      sizes="100vw"
                      src="https://d1y41eupgbwbb2.cloudfront.net/images/hero/about-img-2048w.webp"
                      alt="Empowering Businesses through Innovative Web & Mobile App Solutions"
                      />
                  
                  <div className="flex mx-auto max-lg:flex-col max-lg:gap-y-10 items-center 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-3xl max-w-2xl px-6 lg:px-8 w-full relative lg:pt-40 sm:pt-32 pt-28 pb-12 overflow-hidden z-10 justify-center">
                      <div className="xl:w-7/12 lg:w-1/2 grow-0 text-center">
                          <h1 className="font-light text-white max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em]">
                              <span className="font-bold text-gray-100 block pb-1 shadow-indigo-950 via-indigo-500 from-indigo-100 to-indigo-100 text-balance">Empowering Businesses through Innovative Web & Mobile App Solutions</span>
                          </h1>
                          <div className="max-lg:text-sm text-base text-white/80 pt-5 text-pretty w-10/12 mx-auto">A leading mobile app development company with a team of expert professionals extending remarkable business solutions globally.</div>
                      
                          <div className="mt-10 flex gap-4 justify-center">
                              <Link href="contact-us.php" className="inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-200 bg-slate-900 text-white hover:bg-slate-700">
                                  <span>
                                      <span className="inline-flex items-center gap-1">
                                          <span>
                                              Get Free Consultation
                                          </span>
                                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="size-5" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                                      </span>
                                  </span>
                              </Link>
                          </div>
                          <div className="inline-flex mx-auto justify-center *:gap-2">
                              {/* @include('tailwind.components.footer.social.social2') */}
                          </div>
                          
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="relative bg-white py-6 md:py-8 lg:py-16 select-none">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
            
              <div className="mx-auto max-w-container gap-7 flex md:flex-row-reverse flex-col max-lg:gap-4 items-center">

                  <div className="md:w-3/5 w-full relative z-20 h-auto shrink-1 grow-0">
                      <h2 className="
                          max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance max-md:text-center

                          first:*:font-normal

                          last:*:font-bold last:*:text-theme4
                      ">
                          <span>Get More </span> <span>Insight About Us</span>
                          
                      </h2>
                      <p className="mt-4 text-sm md:text-base leading-7 text-slate-600 text-balance max-md:text-center">IMG is one of the trusted and Promising IT service providers delivering web development, mobile app development and custom software development services to start-up, mid level organizations and various big enterprises aiming to proffer digital success with robust applications. We have a proven track record in having 1200+ satisfied business clients and individuals from different verticals. We are committed to establish a long lasting and happy relationship with our clients.</p>


                      
                      

                      
                      <div className="mt-10 grid grid-cols-2 sm:mt-10 lg:grid-cols-4">

                          <div className="flex flex-col-reverse py-3 px-2">
                              <div className="text-base leading-7 opacity-70">Projects Delivered</div>
                              <div className="text-xl font-bold leading-9 tracking-tight">1200+ Successful</div>
                              <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" className="size-10 mb-4 text-left" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path></svg>
                          </div>


              
                          <div className="flex flex-col-reverse py-3 px-2">
                              <div className="text-base leading-7 opacity-70">Apps Developed</div>
                              <div className="text-xl font-bold leading-9 tracking-tight">300+ Apps</div>
                              <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" className="size-10 mb-4 text-left" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"></path></svg>
                          </div>


                          <div className="flex flex-col-reverse py-3 px-2">
                              <div className="text-base leading-7 opacity-70">Of Industry Experience</div>
                              <div className="text-xl font-bold leading-9 tracking-tight">10+ Years</div>
                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="size-10 mb-4 text-left" xmlns="http://www.w3.org/2000/svg"><path d="M12.596 2.043c1.075.076 2.059.281 2.743.956.698.688.92 1.696.92 2.941 0 .432-.057.955-.117 1.438-.026.2-.051.392-.076.572l-.056.429h2.05c.752 0 1.446.108 2.036.404.612.306 1.062.787 1.355 1.431.551 1.214.542 3.008.223 5.394l-.051.39c-.134 1.01-.248 1.872-.396 2.58-.166.795-.394 1.496-.816 2.05-.89 1.168-2.395 1.372-4.583 1.372-2.331 0-4.08-.418-5.544-.824l-.602-.17c-1.023-.29-1.852-.526-2.69-.586A1.75 1.75 0 0 1 5.25 22h-1.5A1.75 1.75 0 0 1 2 20.25V9.75C2 8.784 2.784 8 3.75 8h1.5a1.75 1.75 0 0 1 1.746 1.633 1.85 1.85 0 0 0 .523-.131c.961-.415 2.774-1.534 2.774-4.2V4.249c0-1.22 1.002-2.298 2.303-2.206ZM7 18.918c1.059.064 2.079.355 3.118.652l.568.16c1.406.39 3.006.77 5.142.77 2.277 0 3.004-.274 3.39-.781.216-.283.388-.718.54-1.448.136-.65.242-1.45.379-2.477l.05-.384c.32-2.4.253-3.795-.102-4.575-.16-.352-.375-.568-.66-.711-.305-.153-.74-.245-1.365-.245h-2.37c-.681 0-1.293-.57-1.211-1.328.026-.243.065-.537.105-.834l.07-.527c.06-.482.105-.921.105-1.25 0-1.125-.213-1.617-.473-1.873-.275-.27-.774-.455-1.795-.528-.351-.024-.698.274-.698.71v1.053c0 3.55-2.488 5.063-3.68 5.577-.372.16-.754.232-1.113.26ZM3.75 20.5h1.5a.25.25 0 0 0 .25-.25V9.75a.25.25 0 0 0-.25-.25h-1.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25Z"></path></svg>
                          </div>
                    
                        
                          <div className="flex flex-col-reverse py-3 px-2">
                              <div className="text-base leading-7 opacity-70">Expert Programmers</div>
                              <div className="text-xl font-bold leading-9 tracking-tight">99% Certified</div>
                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="size-10 mb-4 text-left" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM7 13H9C9 14.6569 10.3431 16 12 16C13.6569 16 15 14.6569 15 13H17C17 15.7614 14.7614 18 12 18C9.23858 18 7 15.7614 7 13ZM8 11C7.17157 11 6.5 10.3284 6.5 9.5C6.5 8.67157 7.17157 8 8 8C8.82843 8 9.5 8.67157 9.5 9.5C9.5 10.3284 8.82843 11 8 11ZM16 11C15.1716 11 14.5 10.3284 14.5 9.5C14.5 8.67157 15.1716 8 16 8C16.8284 8 17.5 8.67157 17.5 9.5C17.5 10.3284 16.8284 11 16 11Z"></path></svg>
                          </div>
                          
                      </div>  
                      
                  </div>
                  <div className="md:w-2/5 w-full relative z-10 h-auto">
                      <div className="relative flex-shrink-0 p-4 w-full">
                          <div className="flex flex-wrap gap-5 justify-center">
                              <div className="rounded-xl aspect-square grid items-center md:hover:scale-95 duration-300 justify-center  bg-black/5 p-2 ring-1 ring-black/10">
                                  <Image
                                      
                                      className="size-full object-contain object-center"
                                      width="79"
                                      height="89" 
                                      loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/mid-market.webp"
                                      alt="mid market"
                                  />
                              </div>
                              <div className="rounded-xl aspect-square grid items-center md:hover:scale-95 duration-300 justify-center  bg-black/5 p-2 ring-1 ring-black/10">
                                  <Image
                                      
                                      className="size-full object-contain object-center"
                                      width="79"
                                      height="89"
                                      loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/clutch.webp"
                                      alt="clutch"
                                  />
                              </div>
                              <div className="rounded-xl aspect-square grid items-center md:hover:scale-95 duration-300 justify-center  bg-black/5 p-2 ring-1 ring-black/10">
                                  <Image
                                      
                                      className="size-full object-contain object-center"
                                      width="79"
                                      height="89" 
                                      loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/goodfirms.webp"
                                      alt="goodfirms"
                                  />
                              </div>
                              <div className="rounded-xl aspect-square grid items-center md:hover:scale-95 duration-300 justify-center  bg-black/5 p-2 ring-1 ring-black/10">
                                  <Image
                                      
                                      className="size-full object-contain object-center"
                                      width="79"
                                      height="89" 
                                      loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/top-developers.webp"
                                      alt="top developers"
                                  />
                              </div>
                              <div className="rounded-xl aspect-square grid items-center md:hover:scale-95 duration-300 justify-center  bg-black/5 p-2 ring-1 ring-black/10">
                                  <Image
                                      
                                      className="size-full object-contain object-center"
                                      width="79"
                                      height="89"
                                      loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/designrush.webp"
                                      alt="designrush"
                                  />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="relative bg-gray-100 py-6 md:py-8 lg:py-16 select-none">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full relative">
            
              <div className="mx-auto max-w-container gap-7 flex flex-col max-lg:gap-4 items-center">

                  <div className="w-full relative z-20 h-auto shrink-1 grow-0">
                      <h2 className="
                          max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance text-center

                          first:*:font-normal

                          last:*:font-bold last:*:text-theme4
                      ">
                          <span>Our </span> <span>Value</span>
                          
                      </h2>
                  </div>
                  <div className="w-full grid md:grid-cols-3 gap-8">
                      <div className="border-2 p-5 group rounded-4xl border-black relative before:absolute before:size-24 before:border-t-[10px] before:border-l-[10px] before:rounded-tl-4xl before:border-indigo-500 before:-inset-[5px] md:hover:shadow-xl md:hover:shadow-indigo-700/40 duration-300">
                          <div className="bg-white duration-300 p-2 shadow-xl shadow-black/20 md:group-hover:shadow-black/0 rounded-3xl">
                              <div className="flex p-3 flex-col gap-3">
                                  <div className="size-16 text-indigo-500 *:size-full">
                                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h64v-6a32.15,32.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z"></path></svg>
                                  </div>
                                  <h3 className="md:text-xl sm:text-lg text-base font-medium leading-6">
                                      Ensure Impactful Innovations
                                  </h3>
                                  <div className="mt-2 sm:text-base text-sm leading-6 line-clamp-4 text-ellipsis">An unwavering commitment to drive maximum customer satisfaction, infused with integrity and passion.</div>
                              </div>
                          </div>
                          <div className="absolute flex justify-center items-end -left-[5px] top-20 w-[10px] h-10 bg-gray-100 before:absolute before:size-2 before:rounded-full before:bg-black before:-translate-x-1/2 before:translate-y-1/2 before:bottom-0 before:left-[calc(50%-1px)]"></div>
                          <div className="absolute flex item-center-center justify-end left-20 -top-[5px] h-[10px] w-10 bg-gray-100 before:absolute before:size-2 before:rounded-full before:bg-black before:translate-x-1/2 before:-translate-y-1/2 before:top-[calc(50%-1px)] before:right-0"></div>
                      </div>
                      <div className="border-2 p-5 group rounded-4xl border-black relative before:absolute before:size-24 before:border-t-[10px] before:border-l-[10px] before:rounded-tl-4xl before:border-violet-500 before:-inset-[5px] md:hover:shadow-xl md:hover:shadow-violet-700/40 duration-300">
                          <div className="bg-white duration-300 p-2 shadow-xl shadow-black/20 md:group-hover:shadow-black/0 rounded-3xl">
                              <div className="flex p-3 flex-col gap-3">
                                  <div className="size-16 text-violet-500 *:size-full">
                                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M904 747H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM165.7 621.8l39.7 39.5c3.1 3.1 8.2 3.1 11.3 0l234.7-233.9 97.6 97.3a32.11 32.11 0 0 0 45.2 0l264.2-263.2c3.1-3.1 3.1-8.2 0-11.3l-39.7-39.6a8.03 8.03 0 0 0-11.3 0l-235.7 235-97.7-97.3a32.11 32.11 0 0 0-45.2 0L165.7 610.5a7.94 7.94 0 0 0 0 11.3z"></path></svg>
                                  </div>
                                  <h3 className="md:text-xl sm:text-lg text-base font-medium leading-6">
                                      Focus On Self-Development
                                  </h3>
                                  <div className="mt-2 sm:text-base text-sm leading-6 line-clamp-4 text-ellipsis">Training and mentorship programs, interactive sessions and community meetups to drive personal growth.</div>
                              </div>
                          </div>
                          <div className="absolute flex justify-center items-end -left-[5px] top-20 w-[10px] h-10 bg-gray-100 before:absolute before:size-2 before:rounded-full before:bg-black before:-translate-x-1/2 before:translate-y-1/2 before:bottom-0 before:left-[calc(50%-1px)]"></div>
                          <div className="absolute flex item-center-center justify-end left-20 -top-[5px] h-[10px] w-10 bg-gray-100 before:absolute before:size-2 before:rounded-full before:bg-black before:translate-x-1/2 before:-translate-y-1/2 before:top-[calc(50%-1px)] before:right-0"></div>
                      </div>
                      <div className="border-2 p-5 group rounded-4xl border-black relative before:absolute before:size-24 before:border-t-[10px] before:border-l-[10px] before:rounded-tl-4xl before:border-purple-500 before:-inset-[5px] md:hover:shadow-xl md:hover:shadow-purple-700/40 duration-300">
                          <div className="bg-white duration-300 p-2 shadow-xl shadow-black/20 md:group-hover:shadow-black/0 rounded-3xl">
                              <div className="flex p-3 flex-col gap-3">
                                  <div className="size-16 text-purple-500 *:size-full">
                                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M 9.15625 4.1875 L 8.875 4.6875 L 2.625 15.59375 L 2.34375 16.09375 L 2.625 16.59375 L 8.875 27.5 L 9.15625 28 L 22.84375 28 L 23.125 27.5 L 29.375 16.59375 L 29.65625 16.09375 L 29.375 15.59375 L 23.125 4.6875 L 22.84375 4.1875 Z M 11.59375 6.1875 L 17.71875 6.1875 L 13.15625 7.8125 Z M 20.71875 6.1875 L 16.125 10.875 L 13.9375 8.59375 Z M 10.28125 6.28125 L 12.15625 8.1875 L 10.25 8.875 L 10.25 6.34375 Z M 21.8125 6.46875 L 24.4375 11 L 20.40625 15.28125 L 16.84375 11.59375 Z M 9.25 8.09375 L 9.25 9.21875 L 8.4375 9.5 Z M 12.90625 8.96875 L 15.4375 11.59375 L 11.71875 15.375 L 10.25 13.8125 L 10.25 9.9375 Z M 9.25 10.28125 L 9.25 12.75 L 7.59375 10.96875 L 7.65625 10.84375 Z M 7.0625 11.875 L 9.25 14.21875 L 9.25 17.9375 L 7.03125 20.21875 L 4.65625 16.09375 Z M 24.875 12 L 23.5 18.46875 L 21.09375 16 Z M 16.125 12.3125 L 19.71875 16 L 16 19.9375 L 12.40625 16.125 Z M 25.65625 13.15625 L 27.34375 16.09375 L 25.0625 20.0625 L 24.375 19.34375 Z M 10.25 15.28125 L 11.03125 16.09375 L 10.25 16.90625 Z M 20.40625 16.71875 L 23.28125 19.65625 L 22.9375 21.25 L 17.21875 21.25 L 16.6875 20.6875 Z M 11.71875 16.84375 L 15.3125 20.6875 L 14.75 21.25 L 10.25 21.25 L 10.25 18.3125 Z M 9.25 19.34375 L 9.25 21.25 L 7.625 21.25 L 7.53125 21.125 Z M 24.125 20.53125 L 24.53125 20.96875 L 24.375 21.25 L 23.96875 21.25 Z M 8.1875 22.25 L 9.25 22.25 L 9.25 24.09375 Z M 10.25 22.25 L 13.8125 22.25 L 10.3125 25.96875 L 10.25 25.84375 Z M 15.1875 22.25 L 16.78125 22.25 L 20.28125 26 L 11.65625 26 Z M 18.15625 22.25 L 22.71875 22.25 L 22.09375 25.25 L 21.65625 26 Z M 23.75 22.25 L 23.8125 22.25 L 23.71875 22.40625 Z"></path></svg>
                                  </div>
                                  <h3 className="md:text-xl sm:text-lg text-base font-medium leading-6">
                                      Integrate Work-Life Balance
                                  </h3>
                                  <div className="mt-2 sm:text-base text-sm leading-6 line-clamp-4 text-ellipsis">Latest infrastructure and flexible working hours along with many other privileges that inculcate healthy lifestyle choices.</div>
                              </div>
                          </div>
                          <div className="absolute flex justify-center items-end -left-[5px] top-20 w-[10px] h-10 bg-gray-100 before:absolute before:size-2 before:rounded-full before:bg-black before:-translate-x-1/2 before:translate-y-1/2 before:bottom-0 before:left-[calc(50%-1px)]"></div>
                          <div className="absolute flex item-center-center justify-end left-20 -top-[5px] h-[10px] w-10 bg-gray-100 before:absolute before:size-2 before:rounded-full before:bg-black before:translate-x-1/2 before:-translate-y-1/2 before:top-[calc(50%-1px)] before:right-0"></div>
                      </div>
                  </div>
              </div>
          </div>


      </div>
      <div className="relative bg-white py-6 md:py-8 lg:py-16 select-none">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
            
              <div className="mx-auto max-w-container gap-7 flex md:flex-row flex-col max-lg:gap-4 items-center">

                  <div className="md:w-3/5 w-full relative z-20 h-auto shrink-1 grow-0">
                      <h2 className="
                          max-md:text-lg/tight max-xl:text-xl/tight text-2xl/tight tracking-[-0.04em] text-black text-balance

                          first:*:font-normal

                          last:*:font-bold last:*:text-theme4
                      ">
                          <span>Our </span> <span>Mission</span>
                          
                      </h2>
                      <p className="mt-2 pb-6 text-sm md:text-base leading-7 text-slate-600 text-balance">Our mission at IMG Global Infotech is to work towards the success of our clients in the most passionate and innovative way. We believe in incorporating dedication.</p>
                      <h2 className="
                          max-md:text-lg/tight max-xl:text-xl/tight text-2xl/tight tracking-[-0.04em] text-black text-balance

                          first:*:font-normal

                          last:*:font-bold last:*:text-theme4
                      ">
                          <span>Our </span> <span>Vision</span>
                          
                      </h2>
                      <p className="mt-2 pb-6 text-sm md:text-base leading-7 text-slate-600 text-balance">Our Vision at IMG Global Infotech is to grow both vertically and horizontally to ascertain ourselves on top as a preferred IT solution provider in India. outstanding software.</p>
                      <h2 className="
                          max-md:text-lg/tight max-xl:text-xl/tight text-2xl/tight tracking-[-0.04em] text-black text-balance

                          first:*:font-normal

                          last:*:font-bold last:*:text-theme4
                      ">
                          <span>Our </span> <span>Values</span>
                          
                      </h2>
                      <p className="mt-2 pb-6 text-sm md:text-base leading-7 text-slate-600 text-balance">Customer satisfaction is our #1 Priority. IMG Global Infotech was founded on the principle of offering reliable and efficient solution to customers and satisfying their needs. The irresistible force behind everything we do in our business is our strong ethics and beliefs.</p>
                      
                  </div>
                  <div className="md:w-2/5 w-full relative z-10 h-auto">
                      <Link href="https://www.designrush.com/agency/profile/img-global-infotech-private-limited" target="_blank" className="relative flex-shrink-0 p-4 w-full text-center">
                          <div className="mx-auto">
                              <Image  className="lg:w-72 md:w-56 w-full mx-auto" width="336" height="487" src="https://d1y41eupgbwbb2.cloudfront.net/images/top-mobile-app-development-company.webp" alt="Review IMG GLOBAL INFOTECH PRIVATE LIMITED ON DesignRush"/>
                          </div>
                          <div className="mt-2 pb-6 text-sm md:text-base leading-7 text-slate-600 text-center font-bold block text-balance cursor-pointer">Review IMG GLOBAL INFOTECH PRIVATE LIMITED ON DesignRush</div>
                      </Link>
                  </div>
              </div>
          </div>
      </div>
      <div className="relative bg-gray-900 py-6 md:py-8 lg:py-16 select-none">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full relative">
            
              <div className="mx-auto max-w-container gap-7 flex flex-col max-lg:gap-4 items-center">

                  <div className="w-full relative z-20 h-auto shrink-1 grow-0">
                      <h2 className="
                          max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-white text-balance text-center

                          first:*:font-normal

                          last:*:font-bold last:*:text-white
                      ">
                          <span>Awards and </span> <span>Recognition</span>
                          
                      </h2>
                  </div>
                  <div className="w-full flex flex-wrap items-center justify-center gap-6 lg:gap-12 text-white">
                      <div className="w-auto">
                          <div className="w-full inline-flex items-center gap-1 justify-center">
                              <span className="size-6 inline-block text-base">
                                  <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"></path></g></svg>
                              </span>
                              <span>4.9/5</span>
                          </div>
                          <div className="w-full h-14 -mt-1">
                              <Image className="size-full object-contain"  width="110" height="48" src="https://d1y41eupgbwbb2.cloudfront.net/images/footer-clutch.webp" alt="clutch"/>
                          </div>
                      </div>
                      <div className="w-auto">
                          <div className="w-full inline-flex items-center gap-1 justify-center">
                              <span className="size-6 inline-block text-base">
                                  <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"></path></g></svg>
                              </span>
                              <span>4.6/5</span>
                          </div>
                          <div className="w-full h-14 -mt-1">
                              <Image className="size-full object-contain"  width="110" height="48" src="https://d1y41eupgbwbb2.cloudfront.net/images/google.webp" alt="google"/>
                          </div>
                      </div>
                      <div className="w-auto">
                          <div className="w-full inline-flex items-center gap-1 justify-center">
                              <span className="size-6 inline-block text-base">
                                  <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"></path></g></svg>
                              </span>
                              <span>4.8/5</span>
                          </div>
                          <div className="w-full h-14 -mt-1">
                              <Image className="size-full object-contain"  width="110" height="48" src="https://d1y41eupgbwbb2.cloudfront.net/images/mobileapp.webp" alt="mobileapp"/>
                          </div>
                      </div>
                      <div className="w-auto">
                          <div className="w-full inline-flex items-center gap-1 justify-center">
                              <span className="size-6 inline-block text-base">
                                  <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"></path></g></svg>
                              </span>
                              <span>4.4/5</span>
                          </div>
                          <div className="w-full h-14 -mt-1">
                              <Image className="size-full object-contain"  width="110" height="48" src="https://d1y41eupgbwbb2.cloudfront.net/images/trustpilot.webp" alt="trustpilot"/>
                          </div>
                      </div>
                      <div className="w-auto">
                          <div className="w-full inline-flex items-center gap-1 justify-center">
                              <span className="size-6 inline-block text-base">
                                  <svg className="size-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"></path></g></svg>
                              </span>
                              <span>4.6/5</span>
                          </div>
                          <div className="w-full h-14 -mt-1">
                              <Image className="size-full object-contain"  width="110" height="48" src="https://d1y41eupgbwbb2.cloudfront.net/images/bussinesapp.webp" alt="bussinesapp"/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>


      </div>
      <section className="bg-gray-100 pb-8 py-6 md:py-8 lg:py-16 overflow-hidden">
          <div className="flex flex-wrap w-full max-w-7xl mx-auto px-6 lg:px-8 max-lg:gap-y-8">
              <div className="w-full lg:pl-8">
                  <h2 className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black empty:hidden text-balance text-center">
                      <span>Our</span> 
                      <span className="font-bold text-theme4"> Process</span>
                  </h2>
                  <p className="mt-4 text-sm md:text-base leading-7 text-slate-600 text-center"> Well organized team empowered with expansive experience and advanced infrastructure</p>
              </div>
          </div>
          <div className="flex flex-wrap w-full px-6 lg:px-8 max-lg:gap-y-8">
              <div className="w-full pt-8">
                  <div className="flex max-md:flex-col overflow-x-auto py-16 px-8 -my-10">
                      <div className="
                          relative rounded-[50px] text-center -m-[2px] max-xl:min-w-[300px] xl:w-1/5 md:hover:bg-white md:hover:shadow-2xl md:hover:shadow-pink-500 duration-300
                          
                          md:before:rounded-b-[50px] max-md:before:rounded-l-[50px] before:absolute before:inset-0 md:before:top-1/4 before:z-10 md:before:border-l-4 md:before:border-b-4 max-md:before:right-1/4 max-md:before:border-l-4 max-md:before:border-t-4 before:border-pink-500
                          
                          md:after:rounded-b-[50px] max-md:after:rounded-l-[50px] after:absolute after:inset-0 md:after:top-1/2 after:z-10 md:after:border-r-4 md:after:border-b-4 max-md:after:right-1/2 max-md:after:border-l-4 max-md:after:border-b-4 after:border-pink-500
                          ">
                          <div className="flex rounded-[50px] flex-col p-8 relative h-full 
                              
                              before:absolute md:before:left-[1.5px] md:before:top-1/4 md:before:-translate-x-1/2 md:before:-translate-y-full max-md:before:top-[1.5px] max-md:before:right-1/4 max-md:before:-translate-y-1/2 max-md:before:translate-x-full before:z-20 before:text-pink-500 before:bg-white before:content-['Start'] md:before:font-extrabold max-md:before:font-semibold md:before:text-sm max-md:before:text-xs before:uppercase before:rounded-full md:before:ring-4 max-md:before:ring-2 before:ring-pink-500 before:ring-offset-4 md:before:[writing-mode:tb]
                              
                              after:absolute after:rounded-full md:after:right-0 md:after:inset-y-0 md:after:m-auto md:after:translate-x-[calc(50%-2px)] md:after:-translate-y-[calc(50%-2px)] max-md:after:bottom-[1.5px] max-md:after:right-1/2 max-md:after:translate-x-1/2 max-md:after:translate-y-1/2 after:z-20 after:size-4 after:ring-4 after:ring-pink-500 after:bg-white
                              ">
                              <div className="w-full pb-3">
                                  <Image
                                      className="size-20 mx-auto"
                                      
                                      width="80"
                                      height="80"
                                      
                                      loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/design-process-research.svg"
                                      alt="design process research"
                                  />
                              </div>
                              <h3 className="w-full lg:text-xl md:text-lg text-base font-bold pb-2">Research</h3>
                              <div className="w-full md:text-base text-sm font-semibold pb-3">We start by conducting thorough research to understand your target audience, market trends, and competition. outstanding software.</div>
                          </div>
                      </div>
                      <div className="
                          relative rounded-[50px] text-center -m-[2px] max-xl:min-w-[300px] xl:w-1/5 md:hover:bg-white md:hover:shadow-2xl md:hover:shadow-purple-500 duration-300
                          
                          md:before:rounded-t-[50px] max-md:before:rounded-r-[50px] before:absolute before:inset-0 md:before:bottom-1/2 max-md:before:left-1/2 before:z-10 md:before:border-l-4 md:before:border-t-4 max-md:before:border-b-4 max-md:before:border-r-4 before:border-purple-500
                          
                          md:after:rounded-t-[50px] max-md:after:rounded-r-[50px] after:absolute after:inset-0 md:after:bottom-1/2 max-md:after:left-1/2 after:z-10 md:after:border-r-4 md:after:border-t-4 max-md:after:border-r-4 max-md:after:border-t-4 after:border-purple-500
                          ">
                          <div className="flex rounded-[50px] flex-col p-8 relative h-full 
                              
                              before:absolute before:rounded-full md:before:left-0 md:before:inset-y-0 md:before:my-auto md:before:translate-x-[calc(50%-2px)] md:before:translate-y-[calc(-50%-4px)] max-md:before:top-[2px] max-md:before:right-1/2 max-md:before:-translate-y-1/2 max-md:before:translate-x-1/2 before:z-20 before:size-1 before:ring-4 before:ring-purple-500 before:bg-white
                              
                              after:absolute after:rounded-full md:after:right-0 md:after:inset-y-0 md:after:my-auto md:after:translate-x-[calc(50%-2px)] md:after:translate-y-[calc(-50%+2px)] max-md:after:bottom-[1.5px] max-md:after:left-1/2 max-md:after:translate-y-1/2 max-md:after:-translate-x-1/2 after:z-20 after:size-4 after:ring-4 after:ring-purple-500 after:bg-white
                              ">
                              <div className="w-full pb-3">
                                  <Image
                                      className="size-20 mx-auto"
                                      
                                      width="80"
                                      height="80"
                                      
                                      loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/design-process-empathize.svg"
                                      alt="design process plan"
                                  />
                              </div>
                              <h3 className="w-full lg:text-xl md:text-lg text-base font-bold pb-2">Plan</h3>
                              <div className="w-full md:text-base text-sm font-semibold pb-3">Based on the research findings, we work closely with you to define the app's goals, features, and functionalities. outstanding software.</div>
                          </div>
                      </div>
                      <div className="
                          relative rounded-[50px] text-center -m-[2px] max-xl:min-w-[300px] xl:w-1/5 md:hover:bg-white md:hover:shadow-2xl md:hover:shadow-indigo-500 duration-300
                          
                          md:before:rounded-b-[50px] max-md:before:rounded-l-[50px] before:absolute before:inset-0 md:before:top-1/2 max-md:before:right-1/2 before:z-10 md:before:border-l-4 md:before:border-b-4 max-md:before:border-l-4 max-md:before:border-b-4 before:border-indigo-500
                          
                          md:after:rounded-b-[50px] max-md:after:rounded-l-[50px] after:absolute after:inset-0 md:after:top-1/2 max-md:after:right-1/2 after:z-10 md:after:border-r-4 md:after:border-b-4 max-md:after:border-l-4 max-md:after:border-t-4 after:border-indigo-500
                          ">
                          <div className="flex rounded-[50px] flex-col p-8 relative h-full 
                              
                              before:absolute before:rounded-full md:before:left-0 md:before:inset-y-0 md:before:my-auto md:before:translate-x-[calc(50%-2px)] md:before:translate-y-[calc(-50%-4px)] max-md:before:top-[2px] max-md:before:left-1/2 max-md:before:-translate-y-1/2 max-md:before:-translate-x-1/2 before:z-20 before:size-1 before:ring-4 before:ring-indigo-500 before:bg-white
                              
                              after:absolute after:rounded-full md:after:right-0 md:after:inset-y-0 md:after:my-auto md:after:translate-x-[calc(50%-2px)] md:after:translate-y-[calc(-50%+2px)] max-md:after:bottom-[1.5px] max-md:after:left-1/2 max-md:after:translate-y-1/2 max-md:after:-translate-x-1/2 after:z-20 after:size-4 after:ring-4 after:ring-indigo-500 after:bg-white
                              ">
                              <div className="w-full pb-3">
                                  <Image
                                      className="size-20 mx-auto"
                                      
                                      width="80"
                                      height="80"
                                      
                                      loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/design-process-create.svg"
                                      alt="design process implement"
                                  />
                              </div>
                              <h3 className="w-full lg:text-xl md:text-lg text-base font-bold pb-2">Implement</h3>
                              <div className="w-full md:text-base text-sm font-semibold pb-3">Our skilled development team begins the implementation phase, where we build the app's architecture, database, and backend infrastructure.</div>
                          </div>
                      </div>
                      <div className="
                          relative rounded-[50px] text-center -m-[2px] max-xl:min-w-[300px] xl:w-1/5 md:hover:bg-white md:hover:shadow-2xl md:hover:shadow-sky-500 duration-300
                          
                          md:before:rounded-t-[50px] max-md:before:rounded-r-[50px] before:absolute before:inset-0 md:before:bottom-1/2 max-md:before:left-1/2 before:z-10 md:before:border-l-4 md:before:border-t-4 max-md:before:border-r-4 max-md:before:border-t-4 before:border-sky-500
                          
                          md:after:rounded-t-[50px] max-md:after:rounded-r-[50px] after:absolute after:inset-0 md:after:bottom-1/2 max-md:after:left-1/2 after:z-10 md:after:border-r-4 md:after:border-t-4 max-md:after:border-r-4 max-md:after:border-b-4 after:border-sky-500
                          ">
                          <div className="flex rounded-[50px] flex-col p-8 relative h-full 
                              
                              before:absolute before:rounded-full md:before:left-0 md:before:inset-y-0 md:before:my-auto md:before:translate-x-[calc(50%-2px)] md:before:translate-y-[calc(-50%-4px)] max-md:before:top-[2px] max-md:before:left-1/2 max-md:before:-translate-y-1/2 max-md:before:-translate-x-1/2 before:z-20 before:size-1 before:ring-4 before:ring-sky-500 before:bg-white
                              
                              after:absolute after:rounded-full md:after:right-0 md:after:inset-y-0 md:after:my-auto md:after:translate-x-[calc(50%-2px)] md:after:translate-y-[calc(-50%+2px)] max-md:after:bottom-[1.5px] max-md:after:left-1/2 max-md:after:translate-y-1/2 max-md:after:-translate-x-1/2 after:z-20 after:size-4 after:ring-4 after:ring-sky-500 after:bg-white
                              ">
                              <div className="w-full pb-3">
                                  <Image
                                      className="size-20 mx-auto"
                                      
                                      width="80"
                                      height="80"
                                      
                                      loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/design-process-test.svg"
                                      alt="design process testing"
                                  />
                              </div>
                              <h3 className="w-full lg:text-xl md:text-lg text-base font-bold pb-2">Testing</h3>
                              <div className="w-full md:text-base text-sm font-semibold pb-3">Quality assurance is a critical step in our process. We conduct various tests, including functional testing, usability testing, performance testing.</div>
                          </div>
                      </div>
                      <div className="
                          relative rounded-[50px] text-center -m-[2px] max-xl:min-w-[300px] xl:w-1/5 md:hover:bg-white md:hover:shadow-2xl md:hover:shadow-teal-500 duration-300
                          
                          md:before:rounded-b-[50px] max-md:before:rounded-l-[50px] before:absolute before:inset-0 md:before:top-1/2 max-md:before:right-1/2 before:z-10 md:before:border-l-4 md:before:border-b-4 max-md:before:border-l-4 max-md:before:border-t-4 before:border-teal-500
                          
                          md:after:rounded-b-[50px] max-md:after:rounded-l-[50px] after:absolute after:inset-0 md:after:top-1/4 max-md:after:right-1/4 after:z-10 md:after:border-r-4 md:after:border-b-4 max-md:after:border-l-4 max-md:after:border-b-4 after:border-teal-500
                          ">
                          <div className="flex rounded-[50px] flex-col p-8 relative h-full 
                              
                              before:absolute before:rounded-full md:before:left-0 md:before:inset-y-0 md:before:my-auto md:before:translate-x-[calc(50%-2px)] md:before:translate-y-[calc(-50%-4px)] max-md:before:top-[2px] max-md:before:right-1/2 max-md:before:-translate-y-1/2 max-md:before:translate-x-1/2 before:z-20 before:size-1 before:ring-4 before:ring-teal-500 before:bg-white
                              
                              after:absolute md:after:right-[1.5px] md:after:top-1/4 md:after:translate-x-1/2 md:after:-translate-y-full max-md:after:bottom-[1.5px] max-md:after:right-1/4 max-md:after:translate-y-1/2 max-md:after:translate-x-full after:z-20 after:text-teal-500 after:bg-white after:content-['End'] md:after:font-extrabold max-md:after:font-semibold md:after:text-sm max-md:after:text-xs after:uppercase after:rounded-full md:after:ring-4 max-md:after:ring-2 after:ring-teal-500 after:ring-offset-4 md:after:[writing-mode:tb]
                              ">
                              <div className="w-full pb-3">
                                  <Image
                                      className="size-20 mx-auto"
                                      
                                      width="80"
                                      height="80"
                                      
                                      loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/design-process-develop.svg"
                                      alt="design process Optimize"
                                  />
                              </div>
                              <h3 className="w-full lg:text-xl md:text-lg text-base font-bold pb-2">Optimize</h3>
                              <div className="w-full md:text-base text-sm font-semibold pb-3">We continually optimize the app to enhance its performance, speed, and user experience. outstanding software.</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}

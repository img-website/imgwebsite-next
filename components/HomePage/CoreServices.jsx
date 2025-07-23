
import Image from 'next/image';
import Btn from '@/components/ui/button/button';

const CoreServices = () => {
    return (
        <section className="coreServicesSection w-full group/cs relative overflow-hidden bg-gradient-to-b from-[#0C0B0E] to-[#000000]">
            <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                <div className="flex flex-col w-full md:gap-12 gap-4">
                    <h2 className="w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl md:font-bold font-semibold text-white text-balance relative z-10">Fuel up Businesses with Future Proof Solutions</h2>
                    <div className="flex flex-wrap items-stretch">
                        <div className="lg:w-3/12 w-full flex flex-wrap relative z-10">
                            <div className="w-full flex lg:flex-col flex-row gap-3 max-lg:overflow-x-auto max-lg:pb-2">
                                <label htmlFor="coreServices1" className="bg-[#1C1C1C] lg:text-base md:text-sm text-xs font-medium cursor-pointer md:h-16 h-9 flex justify-center items-center py-1 max-lg:px-3 ring-1 ring-inset ring-[#4A4A4A] lg:w-full w-auto shrink-0 md:rounded-2xl rounded-lg text-white/80 uppercase text-center group-has-[#coreServices1:checked]/cs:bg-white group-has-[#coreServices1:checked]/cs:text-[#454444] group-has-[#coreServices1:checked]/cs:font-bold group-has-[#coreServices1:checked]/cs:ring-white duration-300">
                                    <input type="radio" defaultChecked name="coreServices" id="coreServices1" className="hidden" />
                                    <span className="max-lg:whitespace-nowrap">AI DRIVEN APP DEVELOPMENT</span>
                                </label>
                                <label htmlFor="coreServices2" className="bg-[#1C1C1C] lg:text-base md:text-sm text-xs font-medium cursor-pointer md:h-16 h-9 flex justify-center items-center py-1 max-lg:px-3 ring-1 ring-inset ring-[#4A4A4A] lg:w-full w-auto shrink-0 md:rounded-2xl rounded-lg text-white/80 uppercase text-center group-has-[#coreServices2:checked]/cs:bg-white group-has-[#coreServices2:checked]/cs:text-[#454444] group-has-[#coreServices2:checked]/cs:font-bold group-has-[#coreServices2:checked]/cs:ring-white duration-300">
                                    <input type="radio" name="coreServices" id="coreServices2" className="hidden" />
                                    <span className="max-lg:whitespace-nowrap">SAAS DEVELOPMENT</span>
                                </label>
                                <label htmlFor="coreServices3" className="bg-[#1C1C1C] lg:text-base md:text-sm text-xs font-medium cursor-pointer md:h-16 h-9 flex justify-center items-center py-1 max-lg:px-3 ring-1 ring-inset ring-[#4A4A4A] lg:w-full w-auto shrink-0 md:rounded-2xl rounded-lg text-white/80 uppercase text-center group-has-[#coreServices3:checked]/cs:bg-white group-has-[#coreServices3:checked]/cs:text-[#454444] group-has-[#coreServices3:checked]/cs:font-bold group-has-[#coreServices3:checked]/cs:ring-white duration-300">
                                    <input type="radio" name="coreServices" id="coreServices3" className="hidden" />
                                    <span className="max-lg:whitespace-nowrap">ON DEMAND MOBILE APPS</span>
                                </label>
                                <label htmlFor="coreServices4" className="bg-[#1C1C1C] lg:text-base md:text-sm text-xs font-medium cursor-pointer md:h-16 h-9 flex justify-center items-center py-1 max-lg:px-3 ring-1 ring-inset ring-[#4A4A4A] lg:w-full w-auto shrink-0 md:rounded-2xl rounded-lg text-white/80 uppercase text-center group-has-[#coreServices4:checked]/cs:bg-white group-has-[#coreServices4:checked]/cs:text-[#454444] group-has-[#coreServices4:checked]/cs:font-bold group-has-[#coreServices4:checked]/cs:ring-white duration-300">
                                    <input type="radio" name="coreServices" id="coreServices4" className="hidden" />
                                    <span className="max-lg:whitespace-nowrap">E-COMMERCE  SOLUTIONS</span>
                                </label>
                                <label htmlFor="coreServices5" className="bg-[#1C1C1C] lg:text-base md:text-sm text-xs font-medium cursor-pointer md:h-16 h-9 flex justify-center items-center py-1 max-lg:px-3 ring-1 ring-inset ring-[#4A4A4A] lg:w-full w-auto shrink-0 md:rounded-2xl rounded-lg text-white/80 uppercase text-center group-has-[#coreServices5:checked]/cs:bg-white group-has-[#coreServices5:checked]/cs:text-[#454444] group-has-[#coreServices5:checked]/cs:font-bold group-has-[#coreServices5:checked]/cs:ring-white duration-300">
                                    <input type="radio" name="coreServices" id="coreServices5" className="hidden" />
                                    <span className="max-lg:whitespace-nowrap">HIRE DEDICATED PROFESSIONALS</span>
                                </label>
                            </div>
                        </div>
                        <div className="lg:w-9/12 w-full flex flex-wrap max-lg:pt-8 relative z-10">
                            <div className="xl:w-5/12 md:w-6/12 w-full flex-col max-md:pt-4 lg:px-12 group-has-[#coreServices1:checked]/cs:flex hidden">
                                <h3 className="w-full xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-semibold text-white text-balance md:pb-4 pb-2">Futuristic AI Powered Mobile Apps</h3>
                                <div className="w-full lg:text-sm text-xs font-normal text-white text-balance">Fuel sustainable growth htmlFor your business with futuristic AI-driven mobile app development. We engineer the apps that meet your vision and goals.</div>
                                <div className="w-full md:pt-8 pt-6">
                                    <Btn/>
                                </div>
                            </div>
                            <div className="xl:w-5/12 md:w-6/12 w-full flex-col max-md:pt-4 lg:ps-12 pe-2 group-has-[#coreServices2:checked]/cs:flex hidden">
                                <h3 className="w-full xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-semibold text-white text-balance md:pb-4 pb-2">Data-driven SaaS AI development</h3>
                                <div className="w-full lg:text-sm text-xs font-normal text-white text-balance">With our years of expertise, we solve every SaaS development challenge. Get tailored SaaS solutions to thrive in the competitive market.</div>
                                <div className="w-full md:pt-8 pt-6">
                                    <Btn/>
                                </div>
                            </div>
                            <div className="xl:w-5/12 md:w-6/12 w-full flex-col max-md:pt-4 lg:ps-12 pe-2 group-has-[#coreServices3:checked]/cs:flex hidden">
                                <h3 className="w-full xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-semibold text-white text-balance md:pb-4 pb-2">AI-Driven On-Demand App Development</h3>
                                <div className="w-full lg:text-sm text-xs font-normal text-white text-balance">Utilize AI htmlFor robust and seamless mobility solutions htmlFor your business. Make instant delivery possible, providing an ultimate user experience and satisfaction.</div>
                                <div className="w-full md:pt-8 pt-6">
                                    <Btn/>
                                </div>
                            </div>
                            <div className="xl:w-5/12 md:w-6/12 w-full flex-col max-md:pt-4 lg:ps-12 pe-2 group-has-[#coreServices4:checked]/cs:flex hidden">
                                <h3 className="w-full xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-semibold text-white text-balance md:pb-4 pb-2">Future-First Ecommerce Driven by AI</h3>
                                <div className="w-full lg:text-sm text-xs font-normal text-white text-balance">Using AI-driven e-commerce development, personalize user experience, automate tasks, and drive business growth. Make your e-commerce idea realistic with the power of AI.</div>
                                <div className="w-full md:pt-8 pt-6">
                                    <Btn/>
                                </div>
                            </div>
                            <div className="xl:w-5/12 md:w-6/12 w-full flex-col max-md:pt-4 lg:ps-12 pe-2 group-has-[#coreServices5:checked]/cs:flex hidden">
                                <h3 className="w-full xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-semibold text-white text-balance md:pb-4 pb-2">Hire Top Talent At Your Convenience</h3>
                                <div className="w-full lg:text-sm text-xs font-normal text-white text-balance">Develop innovative solutions aligned to your vision. Hire dedicated developers, designers, and quality analysts ready to work on your terms.</div>
                                <div className="w-full md:pt-8 pt-6">
                                    <Btn/>
                                </div>
                            </div>
                            <div className="xl:w-7/12 md:w-6/12 sm:w-8/12 w-full max-sm:px-5 duration-300 relative max-md:order-first">
                                <Image loading="lazy" width={597} height={368} sizes="(max-width: 768px) 100vw, 50vw" src="https://d1y41eupgbwbb2.cloudfront.net/images/FuturisticAIPoweredMobileApps.webp" alt="Futuristic AI-powered Mobile Apps" title="Futuristic AI-powered Mobile Apps" className="md:absolute inset-0 object-contain object-center size-full group-has-[#coreServices1:checked]/cs:flex hidden duration-300 md:scale-[1.3]" />
                                
                                <Image loading="lazy" width={597} height={368} sizes="(max-width: 768px) 100vw, 50vw" src="https://d1y41eupgbwbb2.cloudfront.net/images/saasLaptop.webp" alt="Data-driven SaaS AI development" title="Data-driven SaaS AI development" className="md:absolute inset-0 object-contain object-center size-full group-has-[#coreServices2:checked]/cs:flex hidden duration-300 md:scale-[1.1]" />

                                <Image loading="lazy" width={597} height={368} sizes="(max-width: 768px) 100vw, 50vw" src="https://d1y41eupgbwbb2.cloudfront.net/images/onDemandImage.webp" alt="AI-Driven On-Demand App Development" title="AI-Driven On-Demand App Development" className="md:absolute inset-0 object-contain object-center size-full group-has-[#coreServices3:checked]/cs:flex hidden duration-300 md:scale-[1.3] origin-bottom" />

                                <Image loading="lazy" width={597} height={368} sizes="(max-width: 768px) 100vw, 50vw" src="https://d1y41eupgbwbb2.cloudfront.net/images/ecommerceImage.webp" alt="Future-First Ecommerce Driven by AI" title="Future-First Ecommerce Driven by AI" className="md:absolute inset-0 object-contain object-center size-full group-has-[#coreServices4:checked]/cs:flex hidden duration-300 md:scale-[1.2]" />
                            </div>
                        </div>
                        <Image loading="lazy" width={500} height={500} sizes="(max-width: 768px) 100vw, 90vw" src="https://d1y41eupgbwbb2.cloudfront.net/images/hireImage.webp" alt="Hire Top Talent At Your Convenience" title="Hire Top Talent At Your Convenience" className="absolute inset-0 z-0 object-contain object-right size-full group-has-[#coreServices5:checked]/cs:flex hidden duration-300 pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CoreServices
"use client";
import Svg from "@/components/svg";
import Image from "next/image";
import LeadForm from "@/components/leadForm";
import { usePathname } from "next/navigation";

const defaultMap = {
  "/": "Mobile App Development",
  "/about-us.php": "Fantasy Cricket App Development",
};
const ContactUs = ({ defaultType }) => {
    const pathname = usePathname();
    const computedType = defaultType || defaultMap[pathname] || "Mobile App Development";
    return (
        <section className="contactSection w-full group/cs relative overflow-hidden bg-white">
            <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                <div className="flex flex-col w-full">
                    <div className="flex flex-wrap md:pt-12 pt-4 md:-mx-4 -mx-2 md:gap-y-8 gap-y-4">
                        <div className="xl:w-7/12 md:w-1/2 w-full flex flex-col md:px-4 px-2 relative">
                            <h2 className="w-full xl:text-4xl lg:text-3xl md:text-2xl text-xl font-medium text-[#454444] text-balance relative z-10">
                                <b className="text-[#FF6B39]">Looking for a reliable technology partner?</b> <br />
                                Let’s <b>make it</b> simple. <br />
                                Schedule a call and <br />
                                <b className="text-[#2D86FF]">we’ll be in touch shortly.</b></h2>
                            <div className="w-full max-md:hidden">
                                <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/contactImage.webp" alt="How can we assist you?" title="How can we assist you?" className="w-6/12 mt-8 max-md:hidden aspect-[196/141]" width="392" height="282" />
                            </div>
                            <Svg name="birdMask" className="size-8 object-contain absolute top-0 right-8 z-10 max-lg:hidden text-[#39c0ff]" />
                        </div>
                        <div className="xl:w-5/12 md:w-1/2 w-full flex flex-col md:px-4 px-2 relative">
                            <div className="w-full flex flex-col bg-white md:shadow-[0px_4px_14px_0px_#0000001F] shadow-[0px_2.61px_9.15px_0px_#0000001F] md:rounded-4xl rounded-2xl lg:p-8 py-5 px-4 [&_form]:pe-0">
                                <LeadForm defaultType={computedType} />
                                <ul className="grid grid-cols-6 gap-3 lg:pt-8 pt-5">
                                    <li className="relative">
                                        <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/cocacolaLogo2.webp" className="w-full h-8 object-contain object-center aspect-[71/32]" width="71" height="32" alt="Coca-Cola" title="Coca-Cola" />
                                    </li>
                                    <li className="relative">
                                        <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/titanLogo2.webp" className="w-full h-8 object-contain object-center aspect-[71/32]" width="71" height="32" alt="Titan" title="Titan" />
                                    </li>
                                    <li className="relative">
                                        <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/adaniLogo2.webp" className="w-full h-8 object-contain object-center aspect-[71/32]" width="71" height="32" alt="Adani" title="Adani" />
                                    </li>
                                    <li className="relative">
                                        <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/pepsicoLogo2.webp" className="w-full h-8 object-contain object-center aspect-[71/32]" width="71" height="32" alt="PepsiCo" title="PepsiCo" />
                                    </li>
                                    <li className="relative">
                                        <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/heroLogo2.webp" className="w-full h-8 object-contain object-center aspect-[71/32]" width="71" height="32" alt="Hero" title="Hero" />
                                    </li>
                                    <li className="relative">
                                        <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/samsungLogo2.webp" className="w-full h-8 object-contain object-center aspect-[71/32]" width="71" height="32" alt="Samsung" title="Samsung" />
                                    </li>
                                </ul>
                            </div>
                            <div className="flex items-center gap-2 lg:pt-6 pt-4 justify-center">
                                <Svg name="shield" className="lg:size-6 size-5" />
                                <span className="lg:text-base md:text-sm text-xs font-normal text-[#5D6571]">Your Information will be safe with us</span>
                            </div>
                            <Image src="https://d1y41eupgbwbb2.cloudfront.net/images/dotsMask.webp" alt="Dots Mask" title="Dots Mask" width="96" height="96" className="size-24 object-contain absolute -bottom-10 left-4 z-10 max-lg:hidden" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs
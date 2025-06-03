
import Image from "next/image"
import Svg from "@/components/svg"

const Cta2 = () => {
    return (
        <section className="cta2Section w-full relative overflow-hidden bg-[#13262D]">
            <div className="!container flex">
                <div className="flex flex-col w-full">
                    <div className="flex flex-wrap justify-between">
                        <div className="lg:w-5/12 md:w-1/2 w-full xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8 max-md:-mt-8">
                            <div className="md:w-10/12 w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl md:font-bold font-semibold text-white text-balance relative z-10 max-md:text-center">Let's turn your business idea into reality</div>
                            <div className="md:text-sm text-xs font-normal text-white md:pt-2 pt-3 md:pb-8 pb-6 max-md:text-center">Do you want to experience the best-in-class quality mobile apps? Send us your inquiry and one of our executives will catch you up in no time by Call, Email or Skype.</div>
                            <div className="w-full md:pt-6 pt-4 max-md:text-center">
                                <label htmlFor="leadPopup" className="cursor-pointer xl:text-base sm:text-sm text-xs md:font-semibold font-medium text-[#454444] inline-flex items-center xl:py-3 sm:py-2.5 py-2 xl:ps-6 sm:ps-4 ps-3 xl:pe-3 sm:pe-2.5 pe-1.5 xl:gap-3 gap-2 rounded-full bg-gradient-to-b from-[#FFFFFF] to-[#D7E4FF] duration-500 hover:lg:ring-4 hover:lg:ring-inset hover:lg:ring-[#D7E4FF] group/btn">
                                    <span><span className="max-md:hidden">Book a Discovery Call</span><span className="md:hidden">Let's Create Something Big Together</span></span>
                                    <div className="inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-white group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[#4B92FF] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300">
                                        <Svg name="arrowCall" className="size-3 relative z-10 text-[#4B92FF]" />
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="lg:w-6/12 md:w-1/2 max-md:-mx-4 rounded-3xl overflow-hidden flex md:flex-row flex-col items-center justify-center relative max-md:order-first before:max-md:hidden before:h-full before:w-0 before:shadow-[0px_0px_40px_60px_#13262d] before:z-20 after:md:h-full after:h-0 after:md:w-0 after:w-full after:shadow-[0px_0px_40px_60px_#13262d] after:z-20">
                            <Image loading="lazy" width={683} height={415} src="https://d1y41eupgbwbb2.cloudfront.net/images/cta2Image.webp" alt="Let's turn your business idea into reality" title="Let's turn your business idea into reality" className="size-full object-cover object-center relative z-10"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cta2

import Image from "next/image"
import Btn from "@/components/ui/button/button";

const Cta1 = () => {
    return (
      <section className="cta1Section w-full relative overflow-hidden bg-[#2A74ED]">
          <div className="!container flex">
              <div className="flex flex-col w-full">
                  <div className="flex flex-wrap justify-between">
                      <div className="md:w-5/12 w-full xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                          <div className="md:w-10/12 w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl md:font-bold font-semibold text-white text-balance relative z-10 max-md:text-center">If you are a brand that wants to disrupt the trends and think beyond the box.</div>
                          <div className="w-full md:pt-6 pt-4 max-md:text-center">
                              <Btn from="#D7E4FF" to="#FFFFFF" iconBg="#454444">
                                Let's Create Something <span className="max-md:hidden">Amazing</span><span className="md:hidden">Big</span> Together
                              </Btn>
                          </div>
                      </div>
                      <div className="md:w-5/12 w-full rounded-3xl flex items-center justify-center relative max-md:order-first max-md:pt-8">
                          <Image loading="lazy" width={256} height={256} sizes="(max-width: 768px) 100vw, 42vw" src="https://d1y41eupgbwbb2.cloudfront.net/images/svg/waveIcon1.svg" alt="Wave Icon" title="Wave Icon" className="md:size-64 size-40 object-contain max-md:m-auto absolute sm:inset-16 inset-0 z-0 md:-mb-28 md:-translate-x-1/4"/>
                          <Image loading="lazy" width={256} height={256} sizes="(max-width: 768px) 100vw, 42vw" src="https://d1y41eupgbwbb2.cloudfront.net/images/cta1Image.webp" alt="If You're a Person Who think out of the Box & Dream Big" className="size-full object-contain object-bottom relative z-10 mix-blend-hard-light"/>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
}

export default Cta1
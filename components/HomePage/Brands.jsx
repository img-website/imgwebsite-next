
import Image from "next/image"

const Brands = () => {
    return (
      <section className="brandsSection w-full relative overflow-hidden bg-gradient-to-br from-[#FD1E24] to-[#FFA600]">
          <div className="!container flex">
              <div className="flex flex-col w-full">
                  <div className="flex flex-wrap">
                      <div className="md:w-7/12 w-full xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                          <h2 className="w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl md:font-bold font-semibold text-white text-pretty relative z-10 max-md:text-center">When Brands think there's no more water, we show them an ocean. Here are some of the many Brands that took a dive!</h2>
                          <div className="w-10/12 h-px bg-white mt-3 mb-12 bg-opacity-50 max-md:hidden"></div>
                          <div className="w-full flex flex-wrap md:gap-12 gap-x-8 gap-y-4 max-md:justify-center max-md:pt-5">
                              <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/svg/adaniLogo.svg" width="128" height="48" alt="Adani Logo" title="Adani Logo" className="w-auto md:max-w-32 max-w-24 md:h-12 h-8 object-contain" />
                              <Image loading="lazy" alt="Hero Logo" title="Hero Logo" src="https://d1y41eupgbwbb2.cloudfront.net/images/svg/heroLogo.svg" width="128" height="48" className="w-auto md:max-w-32 max-w-24 md:h-12 h-8 object-contain" />
                              <Image loading="lazy" alt="Godrej Logo" title="Godrej Logo" src="https://d1y41eupgbwbb2.cloudfront.net/images/svg/godrejLogo.svg" width="99" height="48" className="w-auto md:max-w-32 max-w-24 md:h-12 h-8 object-contain" />
                              <Image loading="lazy" alt="Colgate Logo" title="Colgate Logo" src="https://d1y41eupgbwbb2.cloudfront.net/images/svg/colgateLogo.svg" width="128" height="48" className="w-auto md:max-w-32 max-w-24 md:h-12 h-8 object-contain" />
                              <Image loading="lazy" alt="Samsung Logo" title="Samsung Logo" src="https://d1y41eupgbwbb2.cloudfront.net/images/svg/samsungLogo.svg" width="128" height="48" className="w-auto md:max-w-32 max-w-24 md:h-12 h-8 object-contain" />
                              <Image loading="lazy" alt="Tata Logo" title="Tata Logo" src="https://d1y41eupgbwbb2.cloudfront.net/images/svg/tataLogo.svg" width="52" height="48" className="w-auto md:max-w-32 max-w-24 md:h-12 h-8 object-contain" />
                              <Image loading="lazy" alt="Eicher Logo" title="Eicher Logo" src="https://d1y41eupgbwbb2.cloudfront.net/images/svg/eicherLogo.svg" width="128" height="48" className="w-auto md:max-w-32 max-w-24 md:h-12 h-8 object-contain" />
                          </div>
                      </div>
                      <div className="md:w-5/12 w-full max-md:px-10 rounded-3xl aspect-square flex items-center justify-center md:pt-24 relative max-md:-mt-8">
                          <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/svg/waveIcon2.svg" alt="Wave Icon" width={300} height={300} sizes="(max-width: 768px) 100vw, 42vw" title="Wave Icon" className="size-full object-contain absolute inset-0 z-0 md:translate-y-5" />
                          <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/brandsImage.webp" alt="Brands" width={300} height={300} sizes="(max-width: 768px) 100vw, 42vw" className="size-full object-contain object-bottom relative z-10 -translate-x-5 md:translate-y-1/4" />
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
}

export default Brands
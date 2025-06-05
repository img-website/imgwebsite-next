
import Image from "next/image"

const QuickInsight = () => {
    return (
      <section className="quickInsightSection w-full relative overflow-hidden bg-white">
          <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/portfolioBg.webp" alt="Portfolio Background" width="1340" height="523" sizes="100vw" className="absolute inset-0 top-1/2 w-full z-0 pointer-events-none max-md:hidden"/>
          <div className="!container flex relative z-10">
              <div className="flex flex-col w-full">
                  <div className="flex flex-wrap justify-between">
                      <div className="md:w-5/12 w-full xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
                          <h2 className="w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl md:font-bold font-semibold text-[#454444] text-balance relative z-10">A Quick Insight into <span className="text-[#2D86FF]">IMG</span> <span className="text-[#FF6B39]">Global Infotech</span></h2>
                          <div className="md:text-sm text-xs font-normal text-[#454444] line-clamp-3 pt-4">Step into the future with cutting-edge services and reshape the digital landscape with state-of-the-art solutions. Our dynamic work environment fosters creativity and collaboration to fuel groundbreaking ideas.</div>
                          <div className="w-full md:pt-20 max-md:hidden">
                              <Image loading="lazy" width="569" height="321" sizes="(max-width: 768px) 100vw, 42vw" src="https://d1y41eupgbwbb2.cloudfront.net/images/svg/quickInsightImage.svg" className="w-full h-auto aspect-[569/321]" alt="QuickInsight" title="QuickInsight"/>
                          </div>
                      </div>
                      <div className="md:w-7/12 w-full rounded-3xl flex items-center justify-center relative md:pl-8">
                          <Image loading="lazy" width="765" height="539" sizes="(max-width: 768px) 100vw, 58vw" src="https://d1y41eupgbwbb2.cloudfront.net/images/quickInsightDesktop.webp" alt="A Quick Insight into IMG Global Infotech" className="w-full relative z-0 max-md:hidden aspect-[765/539]"/>

                          <Image loading="lazy" width="386" height="475" sizes="100vw" src="https://d1y41eupgbwbb2.cloudfront.net/images/quickInsightMobile.webp" alt="A Quick Insight into IMG Global Infotech" className="w-full relative z-0 md:hidden aspect-[386/475]"/>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
}

export default QuickInsight

import Image from "next/image"
import Svg from "@/components/svg"

const Usp = () => {
    return (
      <section className="uspSection w-full relative overflow-hidden bg-white">
          <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
              <div className="flex sm:gap-6 gap-2 items-start justify-between">
                <div className="xl:w-5/12 lg:w-6/12 w-7/12">
                  <h2 className="w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl md:font-bold font-semibold text-[#454444] text-balance relative z-10 md:pb-6 sm:h-20 h-12 max-md:flex max-md:items-center">Our USP's</h2>
                  <div className="flex lg:flex-row flex-col items-start lg:gap-6 gap-2.5 lg:h-40 h-32 md:pt-6 pt-4 max-md:border-none border-b border-[#C9BDBD]/50 last:border-none">
                    <div className="bg-[#2D86FF] md:size-14 size-12 shrink-0 flex items-center justify-center rounded-xl">
                      <Svg name="ux" className="md:size-8 size-6 text-white" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="lg:text-xl md:text-lg text-base font-semibold text-[#454444] text-balance">100% Custom Development</h3>
                      <p className="md:text-sm text-xs font-normal text-[#454444] line-clamp-3 max-lg:hidden">We don't follow templates; we create masterpieces through complete customization, tailoring apps that drive real results.</p>
                    </div>
                  </div>
          
                  <div className="flex lg:flex-row flex-col items-start lg:gap-6 gap-2.5 lg:h-40 h-32 md:pt-6 pt-4 max-md:border-none border-b border-[#C9BDBD]/50 last:border-none">
                    <div className="bg-[#2D86FF] md:size-14 size-12 shrink-0 flex items-center justify-center rounded-xl">
                      <Svg name="sourceCode" className="md:size-8 size-6 text-white" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="lg:text-xl md:text-lg text-base font-semibold text-[#454444] text-balance">Full Ownership</h3>
                      <p className="md:text-sm text-xs font-normal text-[#454444] line-clamp-3 max-lg:hidden">Get complete ownership of source code and scale anytime. From a single line of code to a module, everything will be yours, including IP rights.</p>
                    </div>
                  </div>
          
                  <div className="flex lg:flex-row flex-col items-start lg:gap-6 gap-2.5 lg:h-40 h-32 md:pt-6 pt-4 max-md:border-none border-b border-[#C9BDBD]/50 last:border-none">
                    <div className="bg-[#2D86FF] md:size-14 size-12 shrink-0 flex items-center justify-center rounded-xl">
                      <Svg name="integration" className="md:size-8 size-6 text-white" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="lg:text-xl md:text-lg text-base font-semibold text-[#454444] text-balance">Limitless Integrations</h3>
                      <p className="md:text-sm text-xs font-normal text-[#454444] line-clamp-3 max-lg:hidden">Seamlessly integrate APIs and third-party services to extend your app's functionality. We build adaptable solutions that scale with your needs.</p>
                    </div>
                  </div>
          
                  <div className="flex lg:flex-row flex-col items-start lg:gap-6 gap-2.5 lg:h-40 h-32 md:pt-6 pt-4 max-md:border-none border-b border-[#C9BDBD]/50 last:border-none">
                    <div className="bg-[#2D86FF] md:size-14 size-12 shrink-0 flex items-center justify-center rounded-xl">
                      <Svg name="justInMinute" className="md:size-8 size-6 text-white" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="lg:text-xl md:text-lg text-base font-semibold text-[#454444] text-balance">Launch MVP in Just 72 Hours</h3>
                      <p className="md:text-sm text-xs font-normal text-[#454444] line-clamp-3 max-lg:hidden">Get your app under the timeline. We excel at delivering solutions on time without compromising the quality, aligning with our clients' needs.</p>
                    </div>
                  </div>
          
                  <div className="flex lg:flex-row flex-col items-start lg:gap-6 gap-2.5 lg:h-40 h-32 md:pt-6 pt-4 max-md:border-none border-b border-[#C9BDBD]/50 last:border-none">
                    <div className="bg-[#2D86FF] md:size-14 size-12 shrink-0 flex items-center justify-center rounded-xl">
                      <Svg name="codeFolder" className="md:size-8 size-6 text-white" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="lg:text-xl md:text-lg text-base font-semibold text-[#454444] text-balance">70% Ready Code Architecture</h3>
                      <p className="md:text-sm text-xs font-normal text-[#454444] line-clamp-3 max-lg:hidden">Our highly experienced team uses customized, code-ready architecture that covers your minor to major requirements. Get something better than pre-built solutions.</p>
                    </div>
                  </div>
                </div>
          
                <div className="max-w-60 lg:w-full max-sm:w-3/12 md:grow bg-[#F9FFFB] border border-[#2DC768] rounded-xl flex flex-col items-center">
                  <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/xl-logo.webp" width={238} height={48} alt="IMG Global Infotech" className="sm:h-20 h-12 py-4 object-contain object-center w-full" />
                  <div className="flex flex-col items-center">
                    <div className="lg:h-40 h-32 flex items-center justify-center last:border-none">
                      <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/svg/checkGreenIcon.svg" width={36} height={36} className="md:size-9 size-7 shrink-0" alt="Check Green Icon" title="Check green Icon"/>
                    </div>
                    <div className="lg:h-40 h-32 flex items-center justify-center last:border-none">
                      <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/svg/checkGreenIcon.svg" width={36} height={36} className="md:size-9 size-7 shrink-0" alt="Check Green Icon" title="Check green Icon"/>
                    </div>
                    <div className="lg:h-40 h-32 flex items-center justify-center last:border-none">
                      <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/svg/checkGreenIcon.svg" width={36} height={36} className="md:size-9 size-7 shrink-0" alt="Check Green Icon" title="Check green Icon"/>
                    </div>
                    <div className="lg:h-40 h-32 flex items-center justify-center last:border-none">
                      <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/svg/checkGreenIcon.svg" width={36} height={36} className="md:size-9 size-7 shrink-0" alt="Check Green Icon" title="Check green Icon"/>
                    </div>
                    <div className="lg:h-40 h-32 flex items-center justify-center last:border-none">
                      <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/svg/checkGreenIcon.svg" width={36} height={36} className="md:size-9 size-7 shrink-0" alt="Check Green Icon" title="Check green Icon"/>
                    </div>
                  </div>
                </div>
          
                <div className="max-w-60 lg:w-full max-sm:w-3/12 md:grow flex flex-col justify-center items-center">
                  <h4 className="lg:text-2xl md:text-lg sm:text-base text-sm font-semibold text-[#454444] sm:h-20 h-12 flex justify-center items-center text-center">Other Solutions</h4>
                  <div className="lg:h-40 h-32 flex items-center justify-center last:border-none">
                      <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/svg/closeRedIcon.svg" width={36} height={36} className="md:size-9 size-7 shrink-0" alt="Close Red Icon" title="Close Red Icon"/>
                  </div>
                  <div className="lg:h-40 h-32 flex items-center justify-center last:border-none">
                      <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/svg/closeRedIcon.svg" width={36} height={36} className="md:size-9 size-7 shrink-0" alt="Close Red Icon" title="Close Red Icon"/>
                  </div>
                  <div className="lg:h-40 h-32 flex items-center justify-center last:border-none">
                      <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/svg/closeRedIcon.svg" width={36} height={36} className="md:size-9 size-7 shrink-0" alt="Close Red Icon" title="Close Red Icon"/>
                  </div>
                  <div className="lg:h-40 h-32 flex items-center justify-center last:border-none">
                      <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/svg/closeRedIcon.svg" width={36} height={36} className="md:size-9 size-7 shrink-0" alt="Close Red Icon" title="Close Red Icon"/>
                  </div>
                  <div className="lg:h-40 h-32 flex items-center justify-center last:border-none">
                      <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/svg/closeRedIcon.svg" width={36} height={36} className="md:size-9 size-7 shrink-0" alt="Close Red Icon" title="Close Red Icon"/>
                  </div>
                </div>
              </div>
          </div>
      </section>
    )
}

export default Usp
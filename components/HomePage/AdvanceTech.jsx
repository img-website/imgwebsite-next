
import Image from "next/image"
import Svg from "@/components/svg"

const AdvanceTech = () => {
    return (
      <section className="advanceTechSection w-full relative bg-[#08101D]">
          <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8 z-10 relative">
              <div className="flex flex-col w-full">
                  <div className="flex flex-wrap justify-between relative items-start">
                      <div className="lg:w-6/12 md:w-5/12 w-full md:sticky md:top-32">
                          <h2 className="w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl md:font-bold font-semibold text-white text-balance relative z-10">Future-ready Solutions, Powered By Smart Technology</h2>
                          <div className="w-full">
                              <Image loading="lazy" width="683" height="455" sizes="(max-width: 768px) 100vw, (min-width: 1024px) 50vw, 42vw" src="https://d1y41eupgbwbb2.cloudfront.net/images/advanceTechImage.webp" alt="Future-ready Solutions, Powered By Smart Technology" className="w-full aspect-[683/455]"/>
                          </div>
                      </div>
                      <div className="lg:w-6/12 md:w-7/12 w-full rounded-3xl flex flex-col relative md:pl-8">
                          <div className="w-full flex flex-col overflow-x-hidden gap-6">
                              <div className="flex md:gap-6 gap-4 items-start md:p-6 rounded-xl duration-300 hover:lg:bg-gradient-to-r hover:lg:from-[#153C5E] hover:lg:to-[#08101D]">
                                  <div className="md:size-14 size-12 flex items-center justify-center shrink-0 rounded-xl bg-[#2D86FF]">
                                      <Svg name="artificialIntelligence" className="size-8 text-white" />
                                  </div>
                                  <div className="w-full flex flex-col md:gap-3 gap-1">
                                      <h3 className="w-full xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-white">Artificial Intelligence</h3>
                                      <div className="w-full md:text-sm text-xs font-normal text-white">Address your business or industry challenges with a futuristic AI-driven solution and accelerate your business and revenue growth.</div>
                                  </div>
                              </div>
                              <div className="flex md:gap-6 gap-4 items-start md:p-6 rounded-xl duration-300 hover:lg:bg-gradient-to-r hover:lg:from-[#153C5E] hover:lg:to-[#08101D]">
                                  <div className="md:size-14 size-12 flex items-center justify-center shrink-0 rounded-xl bg-[#2D86FF]">
                                      <Svg name="generativeAi" className="size-8 text-white" />
                                  </div>
                                  <div className="w-full flex flex-col md:gap-3 gap-1">
                                      <h3 className="w-full xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-white">Generative AI</h3>
                                      <div className="w-full md:text-sm text-xs font-normal text-white">Leverage the power of Generative AI and be the creator of solutions that solve the challenges for end customers.</div>
                                  </div>
                              </div>
                              <div className="flex md:gap-6 gap-4 items-start md:p-6 rounded-xl duration-300 hover:lg:bg-gradient-to-r hover:lg:from-[#153C5E] hover:lg:to-[#08101D]">
                                  <div className="md:size-14 size-12 flex items-center justify-center shrink-0 rounded-xl bg-[#2D86FF]">
                                      <Svg name="blockchain" className="size-8 text-white" />
                                  </div>
                                  <div className="w-full flex flex-col md:gap-3 gap-1">
                                      <h3 className="w-full xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-white">Blockchain</h3>
                                      <div className="w-full md:text-sm text-xs font-normal text-white">Be a part of the decentralized revolution and set the milestones for transparency and trust using blockchain-powered solutions.</div>
                                  </div>
                              </div>
                              <div className="flex md:gap-6 gap-4 items-start md:p-6 rounded-xl duration-300 hover:lg:bg-gradient-to-r hover:lg:from-[#153C5E] hover:lg:to-[#08101D]">
                                  <div className="md:size-14 size-12 flex items-center justify-center shrink-0 rounded-xl bg-[#2D86FF]">
                                      <Svg name="machinelearning" className="size-8 text-white" />
                                  </div>
                                  <div className="w-full flex flex-col md:gap-3 gap-1">
                                      <h3 className="w-full xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-white">Machine Learning</h3>
                                      <div className="w-full md:text-sm text-xs font-normal text-white">Make every business decision a game changer, refine predictions, automate tasks, and improve productivity with machine learning.</div>
                                  </div>
                              </div>
                              <div className="flex md:gap-6 gap-4 items-start md:p-6 rounded-xl duration-300 hover:lg:bg-gradient-to-r hover:lg:from-[#153C5E] hover:lg:to-[#08101D]">
                                  <div className="md:size-14 size-12 flex items-center justify-center shrink-0 rounded-xl bg-[#2D86FF]">
                                      <Svg name="dataScience" className="size-8 text-white" />
                                  </div>
                                  <div className="w-full flex flex-col md:gap-3 gap-1">
                                      <h3 className="w-full xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-white">Data Science</h3>
                                      <div className="w-full md:text-sm text-xs font-normal text-white">Uncover hidden possibilities and turn your data into the fuel to propel your business beyond the growth horizon.</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
}

export default AdvanceTech

import Image from "next/image"
import Link from "next/link"

const Industries = () => {
    return (
      <section className="industriesSection w-full relative overflow-hidden bg-white">
          <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
              <div className="flex flex-col w-full">
                  <h2 className="w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl md:font-bold font-semibold text-[#454444] text-balance relative z-10 text-center md:pb-4 pb-2">Wide Range of Industries Covered By Us!</h2>
                  <div className="w-full xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs md:font-medium font-normal text-[#454444] text-balance relative z-10 text-center md:pb-12 pb-5">Discover the endless possibilities with our versatile mobile app and web development solutions. From tech to healthcare, we cater to a diverse array of industries, ensuring innovation and excellence across every sector. Explore the major sector we deal in!</div>
                  <div className="flex flex-wrap justify-between items-stretch rounded-3xl">
                      <div className="flex flex-row flex-wrap w-full gap3 font-semibold md:text-base text-sm uppercase text-white">
                          <div className="xl:w-1/4 md:w-1/3 w-1/2 p-1">
                              <Link href="fintech-software-development.php" className="relative text-decoration-none group/ind flex items-center rounded-2xl overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-black/70 after:via-black/60 after:to-transparent after:duration-700 duration-300">
                              <Image
                                  className="size-full object-cover duration-1000 group-hover/ind:scale-150"
                                  width="333"
                                  height="222"
                                  
                                  loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/bankingAndFinance.webp"
                                  alt="Banking and Finance Icon"
                                  title="Banking and Finance Icon"
                              />
              
                                  <h3 className="group absolute left-0 bottom-0 w-full h-16 group-hover/ind:h-full flex items-center justify-center text-center duration-1000 group-hover/ind:opacity-75 z-20">Banking and Finance</h3>
                              </Link>
                          </div>
                          <div className="xl:w-1/3  md:w-1/3 w-1/2 p-1">
                              <Link href="fantasy-sports-app-development.php" className="relative text-decoration-none group/ind flex items-center rounded-2xl overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-black/70 after:via-black/60 after:to-transparent after:duration-700 duration-300">
                              <Image
                                  className="size-full object-cover duration-1000 group-hover/ind:scale-150"
                                  width="447"
                                  height="222"
                                  
                                  loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/fantasySports.webp"
                                  alt="Fantasy Sports Icon"
                                  title="Fantasy Sports Icon"
                              />
              
                                  <h3 className="group absolute left-0 bottom-0 w-full h-16 group-hover/ind:h-full flex items-center justify-center text-center duration-1000 group-hover/ind:opacity-75 z-20">Fantasy Sports</h3>
                              </Link>
                          </div>
                          <div className="xl:w-1/6  md:w-1/3 w-1/2 p-1">
                              <Link href="healthcare-software-development.php" className="relative text-decoration-none group/ind flex items-center rounded-2xl overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-black/70 after:via-black/60 after:to-transparent after:duration-700 duration-300">
                              <Image
                                  className="size-full object-cover duration-1000 group-hover/ind:scale-150"
                                  width="220"
                                  height="222"
                                  
                                  loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/healthcare.webp"
                                  alt="Healthcare Icon"
                                  title="Healthcare Icon"
                              />
              
                                  <h3 className="group absolute left-0 bottom-0 w-full h-16 group-hover/ind:h-full flex items-center justify-center text-center duration-1000 group-hover/ind:opacity-75 z-20">Healthcare</h3>
                              </Link>
                          </div>
                          <div className="xl:w-1/4 md:w-1/3 w-1/2 p-1">
                              <Link href="edtech-software-development.php" className="relative text-decoration-none group/ind flex items-center rounded-2xl overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-black/70 after:via-black/60 after:to-transparent after:duration-700 duration-300">
                              <Image
                                  className="size-full object-cover duration-1000 group-hover/ind:scale-150"
                                  width="333"
                                  height="222"
                                  
                                  loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/edTechSolution.webp"
                                  alt="EdTech Solution Icon"
                                  title="EdTech Solution Icon"
                              />
              
                                  <h3 className="group absolute left-0 bottom-0 w-full h-16 group-hover/ind:h-full flex items-center justify-center text-center duration-1000 group-hover/ind:opacity-75 z-20">EdTech Solution</h3>
                              </Link>
              
                          
                          </div>
                          <div className="xl:w-1/4 md:w-1/3 sm:w-1/2 w-full p-1">
                              <Link href="travel-app-development.php" className="relative text-decoration-none group/ind flex items-center rounded-2xl overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-black/70 after:via-black/60 after:to-transparent after:duration-700 duration-300">
                              <Image
                                  className="size-full object-cover duration-1000 group-hover/ind:scale-150"
                                  width="333"
                                  height="222"
                                  
                                  loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/travelAndTourism.webp"
                                  alt="Travel and Tourism Icon"
                                  title="Travel and Tourism Icon"
                              />
              
                                  <h3 className="group absolute left-0 bottom-0 w-full h-16 group-hover/ind:h-full flex items-center justify-center text-center duration-1000 group-hover/ind:opacity-75 z-20">Travel and Tourism</h3>
                              </Link>
              
                          
                          </div>
                          <div className="xl:w-1/2 md:w-1/3 sm:w-1/2 w-full p-1">
                              <Link href="media-and-entertainment-app-development.php" className="relative text-decoration-none group/ind flex items-center rounded-2xl overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-black/70 after:via-black/60 after:to-transparent after:duration-700 duration-300">
                              <Image
                                  className="size-full object-cover duration-1000 group-hover/ind:scale-150"
                                  width="675"
                                  height="222"
                                  
                                  loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/mediaAndEntertainment.webp"
                                  alt="Media and Entertainment Icon"
                                  title="Media and Entertainment Icon"
                              />
              
                                  <h3 className="group absolute left-0 bottom-0 w-full h-16 group-hover/ind:h-full flex items-center justify-center text-center duration-1000 group-hover/ind:opacity-75 z-20">Media and Entertainment</h3>
                              </Link>
                          </div>
                          <div className="xl:w-1/4 md:w-1/3 w-1/2 p-1">
                              <Link href="" className="relative text-decoration-none group/ind flex items-center rounded-2xl overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-black/70 after:via-black/60 after:to-transparent after:duration-700 duration-300">
                              <Image
                                  className="size-full object-cover duration-1000 group-hover/ind:scale-150"
                                  width="333"
                                  height="222"
                                  
                                  loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/retailAndECommerceApp.webp"
                                  alt="Retail and eCommerce App Icon"
                                  title="Retail and eCommerce App Icon"
                              />
              
                                  <h3 className="group absolute left-0 bottom-0 w-full h-16 group-hover/ind:h-full flex items-center justify-center text-center duration-1000 group-hover/ind:opacity-75 z-20">Retail and eCommerce App</h3>
                              </Link>
                          </div>
                          <div className="xl:w-1/4 md:w-1/3 w-1/2 p-1">
                              <Link href="logistics-software-development.php" className="relative text-decoration-none group/ind flex items-center rounded-2xl overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-black/70 after:via-black/60 after:to-transparent after:duration-700 duration-300">
                              <Image
                                  className="size-full object-cover duration-1000 group-hover/ind:scale-150"
                                  width="333"
                                  height="222"
                                  
                                  loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/logisticsServicesApp.webp"
                                  alt="Logistics Services App Icon"
                                  title="Logistics Services App Icon"
                              />
              
                                  <h3 className="group absolute left-0 bottom-0 w-full h-16 group-hover/ind:h-full flex items-center justify-center text-center duration-1000 group-hover/ind:opacity-75 z-20">Logistics Services App</h3>
                              </Link>
              
                          
                          </div>
                          <div className="xl:w-1/6 md:w-1/3 w-1/2 p-1">
                              <Link href="social-media-app-development.php" className="relative text-decoration-none group/ind flex items-center rounded-2xl overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-black/70 after:via-black/60 after:to-transparent after:duration-700 duration-300">
                              <Image
                                  className="size-full object-cover duration-1000 group-hover/ind:scale-150"
                                  width="220"
                                  height="222"
                                  
                                  loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/socialApp.webp"
                                  alt="Social App Icon"
                                  title="Social App Icon"
                              />
              
                                  <h3 className="group absolute left-0 bottom-0 w-full h-16 group-hover/ind:h-full flex items-center justify-center text-center duration-1000 group-hover/ind:opacity-75 z-20">Social App</h3>
                              </Link>
                          </div>
                          <div className="xl:w-1/3 md:w-1/2 w-1/2 p-1">
                              <Link href="real-estate-app-development.php" className="relative text-decoration-none group/ind flex items-center rounded-2xl overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-black/70 after:via-black/60 after:to-transparent after:duration-700 duration-300">
                              <Image
                                  className="size-full object-cover duration-1000 group-hover/ind:scale-150"
                                  width="447"
                                  height="222"
                                  
                                  loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/realEstate.webp"
                                  alt="Real Estate Icon"
                                  title="Real Estate Icon"
                              />
              
                                  <h3 className="group absolute left-0 bottom-0 w-full h-16 group-hover/ind:h-full flex items-center justify-center text-center duration-1000 group-hover/ind:opacity-75 z-20">Real Estate</h3>
                              </Link>
                          </div>
                          <div className="xl:w-1/4 md:w-1/2 sm:w-1/2 w-full p-1">
                              <Link href="event-app-development.php" className="relative text-decoration-none group/ind flex items-center rounded-2xl overflow-hidden md:h-[222px] sm:h-[200px] h-[190px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-28 hover:after:h-full after:bg-gradient-to-t after:from-black/70 after:via-black/60 after:to-transparent after:duration-700 duration-300">
                              <Image
                                  className="size-full object-cover duration-1000 group-hover/ind:scale-150"
                                  width="333"
                                  height="222"
                                  
                                  loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/eventManagement.webp"
                                  alt="Event management Icon"
                                  title="Event management Icon"
                              />
              
                                  <h3 className="group absolute left-0 bottom-0 w-full h-16 group-hover/ind:h-full flex items-center justify-center text-center duration-1000 group-hover/ind:opacity-75 z-20">Event management</h3>
                              </Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
}

export default Industries
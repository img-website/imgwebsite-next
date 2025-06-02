
import Image from "next/image"
const Address = () => {
    return (
      <div className="w-full flex flex-wrap py-12 my-8 gap-y-8 sm:gap-y-10 border-y border-white/20">
          <div className="w-full sm:w-1/2 lg:w-1/4 relative group/f hover:lg:scale-110 py-3 text-center *:relative *:z-10 opacity-80 hover:lg:opacity-100 duration-300">
              <div className="size-full !absolute inset-0 !z-0 blur-3xl bg-gradient-to-tr from-cyan-600 to-amber-800 opacity-0 duration-300 scale-0 group-hover/f:lg:scale-100 group-hover/f:opacity-40"></div>
              <Image loading="lazy" width={128} height={76} src="https://d1y41eupgbwbb2.cloudfront.net/images/hq-india.webp" alt="India" title="India" className="h-40 w-full max-w-[200px] text-white mx-auto border-b object-contain border-white pb-5" />
              <div className="uppercase font-bold text-white py-4 text-base lg:text-lg flex flex-row items-center gap-2 justify-center group-hover/f:lg:scale-125 duration-300">
                  <span className="size-6 shrink-0 rounded-full object-cover object-center ring-2 ring-inset ring-white inline-block *:size-full *:scale-125 overflow-hidden">
                      <Image loading="lazy" width="24" height="24" src="https://d1y41eupgbwbb2.cloudfront.net/images/indiaFlag.webp" alt="India" title="India" />
                  </span>
                  <span>india</span>
              </div>
              <div className="text-white text-xs lg:text-[15px] sm:w-2/3 w-full text-center mx-auto leading-6">880, Rani Sati Nagar, Gautam Marg, Nirman Nagar, Jaipur, <a href="tel:+918058100200">+918058100200</a></div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 relative group/f hover:lg:scale-110 py-3 text-center *:relative *:z-10 opacity-80 hover:lg:opacity-100 duration-300">
              <div className="size-full !absolute inset-0 !z-0 blur-3xl bg-gradient-to-tr from-cyan-600 to-amber-800 opacity-0 duration-300 scale-0 group-hover/f:lg:scale-100 group-hover/f:opacity-40"></div>
              <Image loading="lazy" width={128} height={76} src="https://d1y41eupgbwbb2.cloudfront.net/images/hq-usa.webp" alt="United States of America" title="United States of America" className="h-40 w-full max-w-[200px] text-white pt-10 mx-auto border-b object-contain border-white pb-5" />
              <div className="uppercase font-bold text-white py-4 text-base lg:text-lg flex flex-row items-center gap-2 justify-center group-hover/f:lg:scale-125 duration-300">
                  <span className="size-6 shrink-0 rounded-full object-cover object-center ring-2 ring-inset ring-white inline-block *:size-full *:scale-125 overflow-hidden">
                      <Image loading="lazy" width="24" height="24" src="https://d1y41eupgbwbb2.cloudfront.net/images/usaFlag.webp" alt="United States of America" title="United States of America" />
                  </span>
                  <span>usa</span>
              </div>
              <div className="text-white text-xs lg:text-[15px] sm:w-2/3 w-full text-center mx-auto leading-6">50 W San Fernando St, San Jose, CA 95113, <br className="max-sm:hidden" />United States of America</div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 relative group/f hover:lg:scale-110 py-3 text-center *:relative *:z-10 opacity-80 hover:lg:opacity-100 duration-300">
              <div className="size-full !absolute inset-0 !z-0 blur-3xl bg-gradient-to-tr from-cyan-600 to-amber-800 opacity-0 duration-300 scale-0 group-hover/f:lg:scale-100 group-hover/f:opacity-40"></div>
              <Image loading="lazy" width={128} height={76} src="https://d1y41eupgbwbb2.cloudfront.net/images/hq-uae.webp" alt="United Arab Emirates" title="United Arab Emirates" className="h-40 w-full max-w-[200px] text-white mx-auto border-b object-contain border-white pb-5" />
              <div className="uppercase font-bold text-white py-4 text-base lg:text-lg flex flex-row items-center gap-2 justify-center group-hover/f:lg:scale-125 duration-300">
                  <span className="size-6 shrink-0 rounded-full object-cover object-center ring-2 ring-inset ring-white inline-block *:size-full *:scale-125 overflow-hidden">
                      <Image loading="lazy" width="24" height="24" src="https://d1y41eupgbwbb2.cloudfront.net/images/uaeFlag.webp" alt="United Arab Emirates" title="United Arab Emirates" />
                  </span>
                  <span>uae</span>
              </div>
              <div className="text-white text-xs lg:text-[15px] sm:w-2/3 w-full text-center mx-auto leading-6">P1-TH-099, Cherrywoods Phase 1, Al Yelaiss 1, Dubai, United Arab Emirates, <br/><a href="tel:+971-525939552">+971 52 593 9552</a></div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 relative group/f hover:lg:scale-110 py-3 text-center *:relative *:z-10 opacity-80 hover:lg:opacity-100 duration-300">
              <div className="size-full !absolute inset-0 !z-0 blur-3xl bg-gradient-to-tr from-cyan-600 to-amber-800 opacity-0 duration-300 scale-0 group-hover/f:lg:scale-100 group-hover/f:opacity-40"></div>
              <Image loading="lazy" width={128} height={76} src="https://d1y41eupgbwbb2.cloudfront.net/images/hq-canada.webp" alt="Canada" title="Canada" className="h-40 w-full max-w-[200px] text-white mx-auto border-b object-contain border-white pb-5 [transform:rotateY(180deg)]" />
              <div className="uppercase font-bold text-white py-4 text-base lg:text-lg flex flex-row items-center gap-2 justify-center group-hover/f:lg:scale-125 duration-300">
                  <span className="size-6 shrink-0 rounded-full object-cover object-center ring-2 ring-inset ring-white inline-block *:size-full *:scale-125 overflow-hidden">
                      <Image loading="lazy" width="24" height="24" src="https://d1y41eupgbwbb2.cloudfront.net/images/canadaFlag.webp" alt="Canada" title="Canada" />
                  </span>
                  <span>Germany</span>
              </div>
              <div className="text-white text-xs lg:text-[15px] sm:w-2/3 w-full text-center mx-auto leading-6">Mulackstraße 15-20 <br className="max-sm:hidden" />10119 Berlin, <br className="max-sm:hidden" />Germany</div>
          </div>
      </div>
    )
}

export default Address
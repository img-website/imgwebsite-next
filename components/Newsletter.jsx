import Svg from "@/components/svg"
import NewsLetterForm from "@/components/NewsletterForm"


const NewsLetter = () => {
    return (
      <div className="flex flex-col w-full px-8 bg-gray-800 ring-2 ring-inset ring-gray-950 ring-offset-2 ring-offset-gray-800 py-8 rounded-2xl">
        <div className="w-full font-bold text-lg lg:text-2xl pb-4">Subscribe US</div>
        <div className="w-full font-medium text-sm lg:text-[15px] pb-4">Make the right business move.</div>
        <NewsLetterForm />
    
        <div className="w-full text-xs lg:text-sm pb-4 opacity-70 pt-2">Your email ID is confidential.</div>
        <div className="border-b border-white/20 pt-4"></div>
        <div className="w-full flex flex-wrap items-center sm:justify-between justify-center max-sm:gap-2 pt-8">
          <a target="_blank" title="Facebook" href="https://www.facebook.com/imgglobalinfotech" className="inline-flex group/social justify-center items-center bg-white text-center relative overflow-hidden rounded-xl shadow-xl shadow-white/20 border-2 border-white duration-300 size-10 text-base before:bg-blue-900 before:w-[136%] before:h-[133%] before:absolute before:[transform:rotate(45deg)] before:top-[90%] before:-left-[110%] before:duration-300 text-blue-900 p-2 hover:before:-top-[16%] hover:before:-left-[16%] before:ease-[cubic-bezier(0.31,-0.105,0.43,1.59)]">
            <Svg name="facebook" className="size-full group-hover/social:text-white group-hover/social:scale-100 scale-95 duration-300" />  
          </a>
          <a target="_blank" title="Twitter" href="https://x.com/imgglobal" className="inline-flex group/social justify-center items-center bg-white text-center relative overflow-hidden rounded-xl shadow-xl shadow-white/20 border-2 border-white duration-300 size-10 text-base before:bg-black before:w-[136%] before:h-[133%] before:absolute before:[transform:rotate(45deg)] before:top-[90%] before:-left-[110%] before:duration-300 text-black p-2 hover:before:-top-[16%] hover:before:-left-[16%] before:ease-[cubic-bezier(0.31,-0.105,0.43,1.59)]">
            <Svg name="x" className="size-full group-hover/social:text-white group-hover/social:scale-100 scale-95 duration-300" />
          </a>
          <a target="_blank" title="Instagram" href="https://www.instagram.com/imgglobalinfotech" className="inline-flex group/social justify-center items-center bg-white text-center relative overflow-hidden rounded-xl shadow-xl shadow-white/20 border-2 border-white duration-300 size-10 text-base before:bg-rose-500 before:w-[136%] before:h-[133%] before:absolute before:[transform:rotate(45deg)] before:top-[90%] before:-left-[110%] before:duration-300 text-rose-500 p-2 hover:before:-top-[16%] hover:before:-left-[16%] before:ease-[cubic-bezier(0.31,-0.105,0.43,1.59)]">
            <Svg name="instagram" className="size-full group-hover/social:text-white group-hover/social:scale-100 scale-95 duration-300" />
          </a>
          <a target="_blank" title="Youtube" href="https://www.youtube.com/@imgglobalinfotech" className="inline-flex group/social justify-center items-center bg-white text-center relative overflow-hidden rounded-xl shadow-xl shadow-white/20 border-2 border-white duration-300 size-10 text-base before:bg-red-700 before:w-[136%] before:h-[133%] before:absolute before:[transform:rotate(45deg)] before:top-[90%] before:-left-[110%] before:duration-300 text-red-700 p-2 hover:before:-top-[16%] hover:before:-left-[16%] before:ease-[cubic-bezier(0.31,-0.105,0.43,1.59)]">
            <Svg name="youtube" className="size-full group-hover/social:text-white group-hover/social:scale-100 scale-95 duration-300" />
          </a>
          <a target="_blank" title="Linkedin" href="https://www.linkedin.com/company/imgglobalinfotech" className="inline-flex group/social justify-center items-center bg-white text-center relative overflow-hidden rounded-xl shadow-xl shadow-white/20 border-2 border-white duration-300 size-10 text-base before:bg-sky-700 before:w-[136%] before:h-[133%] before:absolute before:[transform:rotate(45deg)] before:top-[90%] before:-left-[110%] before:duration-300 text-sky-700 p-2 hover:before:-top-[16%] hover:before:-left-[16%] before:ease-[cubic-bezier(0.31,-0.105,0.43,1.59)]">
            <Svg name="linkedin" className="size-full group-hover/social:text-white group-hover/social:scale-100 scale-95 duration-300" />
          </a>
        </div>
      </div>
    )
}

export default NewsLetter

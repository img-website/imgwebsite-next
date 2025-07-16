import Svg from "@/components/svg"


const NewsLetterForm = () => {
    return (
      <form className="flex w-full items-center leadForm">
        <div className="flex w-full items-center space-x-2">
          <input type="email" className="flex h-10 w-full rounded-md ring-2 ring-inset ring-white/30 bg-transparent px-3 pb-1.5 text-base shadow-sm transition-colors file:ring-0 file:bg-transparent file:text-sm file:font-medium file:text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50 md:text-sm flex-1" placeholder="Email Address" />
      
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-white text-theme4 shadow hover:bg-white/90 size-10" type="submit">
              <Svg name="send" />
              <span className="sr-only">Send</span>
          </button>
        </div>
      </form>
    )
}

export default NewsLetterForm
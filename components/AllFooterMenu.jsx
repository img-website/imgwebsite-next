import Image from "next/image"
import Link from "next/link"

const AllFooterMenu = () => {
    return (
      <div className="w-full flex flex-wrap py-8 gap-y-10 text-sm lg:text-[15px]">
    <div className="w-full md:w-1/2 lg:w-1/4">
        <div className="flex flex-col w-full px-3">
            <div className="w-full font-bold text-lg lg:text-xl pb-4">Quick Links</div>
            <div className="flex flex-col md:max-h-[19rem] overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar]:bg-white/5 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar]:rounded-full ps-1">
                <Link href="about-us.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">About Us</span>
                </Link>
                <Link href="testimonials.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Client Testimonials</span>
                </Link>
                <a href="https://www.flickr.com/photos/imgglobalinfotech"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Life @IMG</span>
                </a>
                <Link href="career.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Career <span className="uppercase ms-1 bg-amber-400 rounded-md ring-1 ring-amber-500 ring-offset-1 ring-offset-amber-400 text-[10px] px-1 text-black font-semibold">Click here</span></span>
                </Link>
                <Link href="blog"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Blog</span>
                </Link>
                <Link href="portfolio.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Portfolio</span>
                </Link>
                <Link href="casestudy.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Case Study</span>
                </Link>
            </div>
        </div>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/4">
        <div className="flex flex-col w-full px-3">
            <div className="w-full font-bold text-lg lg:text-xl pb-4">Expertise</div>
            <div className="flex flex-col md:max-h-[19rem] overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar]:bg-white/5 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar]:rounded-full ps-1">
                <Link href="mobile-app-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Mobile App Development</span>
                </Link>
                <Link href="fantasy-sports-app-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Fantasy Sports App Development</span>
                </Link>
                <Link href="ui-ux-design-services.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Fantasy Cricket App Development</span>
                </Link>
                <Link href="ui-ux-design-services.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">UX/UI Designing</span>
                </Link>
                <Link href="web-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Web Development</span>
                </Link>
                <Link href="ecommerce-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Ecommerce Development</span>
                </Link>
                <Link href="software-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Software Solutions for Startups</span>
                </Link>
                <Link href="digital-marketing-services.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Digital Marketing</span>
                </Link>
                <Link href=""
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Offshore Outsourcing</span>
                </Link>
                <Link href="seo-services.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">SEO Services</span>
                </Link>
                <Link href="wordpress-website-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Wordpress Website Development</span>
                </Link>
                <Link href="shopify-ecommerce-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Shopify Ecommerce Development</span>
                </Link>
                <Link href="woocommerce-website-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Woocommerce Website Development</span>
                </Link>
                <Link href="b2b-ecommerce-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">B2B Ecommerce Development</span>
                </Link>
                <Link href="b2c-ecommerce-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">B2C Ecommerce Development</span>
                </Link>
                <Link href="d2c-ecommerce-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">D2C Ecommerce Development</span>
                </Link>
                <Link href="market-place-ecommerce-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Marketplace Ecommerce Development</span>
                </Link>
            </div>
        </div>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/4">
        <div className="flex flex-col w-full px-3">
            <div className="w-full font-bold text-lg lg:text-xl pb-4">Trending Solutions</div>
            <div className="flex flex-col md:max-h-[19rem] overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar]:bg-white/5 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar]:rounded-full ps-1">
                <Link href=""
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Blockchain Development</span>
                </Link>
                <a href="{{asset('pet-care-app-development-company.php')}}"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Pet Care App Development</span>
                </a>
                <Link href="ar-vr-app-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">AR VR App Development</span>
                </Link>
                <Link href=""
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">IoT Development</span>
                </Link>
                <Link href="cryptocurrency-app-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Cryptocurrency App Development</span>
                </Link>
                <Link href="ott-app-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">OTT Platform Development</span>
                </Link>
                <Link href=""
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Artificial Intelligence Development</span>
                </Link>
                <Link href="progressive-web-app-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Progressive Web App Development</span>
                </Link>
                <Link href="astrology-app-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Astrology App Development</span>
                </Link>
                <Link href="dating-app-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Dating App Development</span>
                </Link>
                <Link href=""
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Loan App Development</span>
                </Link>
            </div>
        </div>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/4">
        <div className="flex flex-col w-full px-3">
            <div className="w-full font-bold text-lg lg:text-xl pb-4">On-demand Solutions</div>
            <div className="flex flex-col md:max-h-[19rem] overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar]:bg-white/5 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar]:rounded-full ps-1">
                <Link href="food-delivery-app-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Food App Development</span>
                </Link>
                <Link href="grocery-app-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Grocery App Development</span>
                </Link>
                <Link href="taxi-app-development-company.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Taxi Booking App Development</span>
                </Link>
                <Link href="medicine-delivery-app-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Medicine Delivery App Development</span>
                </Link>
                <Link href="doctor-on-demand-app-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Doctor Consulting App Development</span>
                </Link>
                <Link href="car-wash-app-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Car Wash App Development</span>
                </Link>
                <Link href="fuel-delivery-app-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Fuel Delivery App Development</span>
                </Link>
                <Link href="home-service-app-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Home Services App Development</span>
                </Link>
                <Link href="alcohol-delivery-app-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Alcohol Delivery App Development</span>
                </Link>
            </div>
        </div>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/4">
        <div className="flex flex-col w-full px-3">
            <div className="w-full font-bold text-lg lg:text-xl pb-4">Industries We Serve</div>
            <div className="flex flex-col md:max-h-[19rem] overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar]:bg-white/5 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar]:rounded-full ps-1">
                <Link href="fantasy-sports-app-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Sports</span>
                </Link>
                <Link href="healthcare-software-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Healthcare</span>
                </Link>
                <Link href="real-estate-app-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Real Estate</span>
                </Link>
                <Link href="travel-app-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Travel and Tourism</span>
                </Link>
                <Link href="edtech-software-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Education</span>
                </Link>
                <Link href="fintech-software-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Banking and Finance</span>
                </Link>
                <Link href="event-app-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Event Management</span>
                </Link>
                <Link href="media-and-entertainment-app-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Media and Entertainment</span>
                </Link>
                <Link href="logistics-software-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Logistics</span>
                </Link>
                <Link href="social-media-app-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Social Media</span>
                </Link>
            </div>
        </div>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/4">
        <div className="flex flex-col w-full px-3">
            <div className="w-full font-bold text-lg lg:text-xl pb-4">Other Services</div>
            <div className="flex flex-col md:max-h-[19rem] overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar]:bg-white/5 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar]:rounded-full ps-1">
                <Link href="mobile-app-development-company-in-new-york-usa.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Mobile App Development in New York</span>
                </Link>
                <Link href="mobile-app-development-company-in-uk.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Mobile App Development in UK</span>
                </Link>
                <Link href="mobile-app-development-company-in-canada.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Mobile App Development in Canada</span>
                </Link>
                <Link href="mobile-app-development-company-in-dubai-uae.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Mobile App Development in Dubai</span>
                </Link>
                <Link href="mobile-app-development-in-jaipur.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Mobile App Development in Jaipur</span>
                </Link>
                <Link href="web-development-company-in-jaipur.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Website Development in Jaipur</span>
                </Link>
                <Link href="ecommerce-development-company-in-jaipur.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">eCommerce Development in Jaipur</span>
                </Link>
                <Link href="web-development-company-in-delhi.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Website Development in Delhi</span>
                </Link>
                <Link href="mobile-app-development-company-in-delhi.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Mobile App Development in Delhi</span>
                </Link>
                <Link href="ecommerce-development-company-in-delhi.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">eCommerce Development in Delhi</span>
                </Link>
                <Link href="school-management-software-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">School Management Software Development</span>
                </Link>
                <Link href="healthcare-software-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Healthcare Software Development</span>
                </Link>
                <Link href="hospital-management-software.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Hospital Management Software Development</span>
                </Link>
                <Link href="mlm-software-development-company.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">MLM Software Development</span>
                </Link>
                <Link href="online-exam-app-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Online Exam Software Development</span>
                </Link>
                <Link href="gps-tracking-software.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">GPS Tracking Software Development</span>
                </Link>
                <Link href="matrimonial-portal-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Matrimonial Portal Development</span>
                </Link>
                <Link href="news-portal-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">News Portal Development</span>
                </Link>
                <Link href="industrial-erp-development.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Industrial Software Development</span>
                </Link>
                <Link href="payroll-management-software.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Payroll Management Software Development</span>
                </Link>
                <Link href="hotel-management-software.php"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Hotel Management Software Development</span>
                </Link>
            </div>
        </div>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/4">
        <div className="flex flex-col w-full px-3">
            <div className="w-full font-bold text-lg lg:text-xl pb-4">Cost and Features</div>
            <div className="flex flex-col md:max-h-[19rem] overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar]:bg-white/5 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar]:rounded-full ps-1">
                <Link href="blog/how-much-does-it-cost-to-build-a-mobile-app-in-uk"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Mobile App Development Cost</span>
                </Link>
                <Link href="blog/readymade-fantasy-cricket-app-development-cost"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Fantasy Cricket App Development Cost</span>
                </Link>
                <Link href="blog/how-much-does-it-cost-to-develop-an-food-delivery-app-like-zomato"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Food Delivery App Development Cost</span>
                </Link>
                <Link href="blog/grocery-delivery-app-development"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Grocery App Development Cost</span>
                </Link>
                <Link href="blog/how-much-does-it-cost-to-develop-real-estate-website-app-like-magicbricks"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Real Estate App Development Cost</span>
                </Link>
                <Link href="blog/building-a-multi-vendor-marketplace-app-like-amazon"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Marketplace App Development Cost</span>
                </Link>
                <Link href="blog/ecommerce-app-development-cost"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Ecommerce App Development Cost</span>
                </Link>
                <Link href="blog/dating-app-development-cost"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Dating App Development Cost</span>
                </Link>
                <Link href="blog/taxi-booking-mobile-app-development-cost-features"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Taxi Booking App Development Cost</span>
                </Link>
                <Link href="blog/doctor-on-demand-mobile-application-development-cost-and-features"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Doctor Appointment App Development Cost</span>
                </Link>
                <Link href="blog/telemedicine-app-development-features-and-cost"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Medicine Delivery App Development Cost</span>
                </Link>
                <Link href="blog/astrology-app-development"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Astrology App Development Cost</span>
                </Link>
                <Link href="blog/Social-media-app-development-cost"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Social Media App Development Cost</span>
                </Link>
                <Link href="blog/casino-game-app-development-cost-and-key-features"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Casino App Development Cost</span>
                </Link>
                <Link href="blog/telemedicine-app-development-features-and-cost"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Telemedicine App Development Cost</span>
                </Link>
                <Link href="blog/how-much-does-it-cost-to-build-an-app-like-snapchat"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Snapchat App Development Cost</span>
                </Link>
                <Link href="blog/cost-to-develop-a-shopping-app-like-temu"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Shopping App Development Cost</span>
                </Link>
                <Link href="blog/cost-to-build-an-educational-app"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Educational App Development Cost</span>
                </Link>
                <Link href="blog/event-ticket-booking-app-development-cost-features"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Event Ticket Booking App Development Cost</span>
                </Link>
                <Link href="blog/tiktok-app-development-cost"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">TikTok Like App Development Cost</span>
                </Link>
                <Link href="blog/how-much-does-it-cost-to-develop-real-estate-website-app-like-magicbricks"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Magicbricks Like App Development Cost</span>
                </Link>
                <Link href="blog/how-much-does-it-cost-to-develop-an-app-like-makemytrip"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">MakeMyTrip Like App Development Cost</span>
                </Link>
                <Link href="blog/how-much-does-it-cost-to-develop-an-app-like-rapido"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Rapido Like App Development Cost</span>
                </Link>
                <Link href="blog/fantasy-sports-app-development-like-dream11-cost-and-features"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Dream11 Like App Development Cost</span>
                </Link>
                <Link href="blog/cost-features-to-develop-an-ecommerce-app-like-flipkart"
                    className="group/m w-full opacity-80 hover:lg:text-amber-400 duration-300 transition-all py-4 md:py-1 hoverLink flex items-center gap-2 [&_svg]:size-2.5 [&_svg]:opacity-0 hover:[&_svg]:lg:opacity-100 hover:[&_svg]:lg:stroke-[5] [&_svg]:duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>
                    <span className="-translate-x-[1.15rem] group-hover/m:lg:-translate-x-0 transition-all duration-300">Flipkart Like App Development Cost</span>
                </Link>
            </div>
        </div>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/4">
        {/* @include('tailwind.components.footer.newsletter.newsletter1') */}
        <Image className="h-6 mt-6 mx-auto object-contain aspect-[121/24]" loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/dmca_protected_sml_120l.webp" width={121} height={24} alt="bussinesapp" title="bussinesapp" />
    </div>
</div>



    )
}

export default AllFooterMenu
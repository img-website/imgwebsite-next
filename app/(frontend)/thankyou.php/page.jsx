import Image from "next/image";
import Link from "next/link";

export default function ThankYou() {
    return (
        <div className="flex w-full relative bg-white select-nonee lg:h-[calc(100dvh-160px)] h-[calc(100dvh-112px)] lg:mt-40 mt-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full relative z-10">
                    <div className="flex flex-col items-center justify-center">
                        <div className="md:h-64 h-56">
                            <Image
                                className="size-full object-contain object-center aspect-[283/256]"
                                width="283"
                                height="256"
                                loading="eager" src="https://d1y41eupgbwbb2.cloudfront.net/images/thankyou.webp"
                                alt="Thank you"
                            />
                        </div>
                        <div className="flex flex-col w-full max-w-7xl mx-auto pb-8 px-6 lg:px-8 text-center">
                            <div className="text-center text-base text-black font-semibold">IMG Global Infotech</div>
                            <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black empty:hidden text-balance">
                                <span>Thank you for taking</span> 
                                <span className="font-bold text-theme4">the time to contact us</span>
                            </p>
                            <div className="mt-4 md:text-base text-sm leading-7 text-slate-600 empty:hidden text-balance">We will be in touch shortly...Have a wonderful day!!</div>
                            <div className="mt-10 flex gap-4 justify-center">
                                <Link href="/" className="inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-200 bg-slate-900 text-white hover:bg-slate-700">
                                    <span>
                                        <span className="inline-flex items-center gap-1">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg>
                                            <span>
                                            Back to Home Page
                                            </span>
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

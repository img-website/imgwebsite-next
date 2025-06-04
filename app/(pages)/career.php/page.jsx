import Image from "next/image";

export const metadata = {
        title: "Job Openings & Career Growth Opportunities - IMG Global Infotech",
        description: "Explore exciting career opportunities at IMG Global Infotech. Join our talented professionals and take your skills to the next level with IT, software, and web developer job openings.",
        keywords: [
            'Mobile App Development',
            'IT Consulting',
            'Software Development',
            'USA',
            'UK',
            'UAE',
            'India',
            'IMG Global Infotech',
        ],
        openGraph: {
            title: "Job Openings & Career Growth Opportunities - IMG Global Infotech",
            description: "Explore exciting career opportunities at IMG Global Infotech. Join our talented professionals and take your skills to the next level with IT, software, and web developer job openings.",
            images: [
                {
                url: 'https://d1y41eupgbwbb2.cloudfront.net/images/og/career.jpg',
                width: 1200,
                height: 630,
                alt: 'IMG Global Infotech',
                type: 'image/png',
                },
            ],
            url: process.env.NEXT_PUBLIC_BASE_URL,
        },
        twitter: {
            title: "Job Openings & Career Growth Opportunities - IMG Global Infotech",
            description: "Explore exciting career opportunities at IMG Global Infotech. Join our talented professionals and take your skills to the next level with IT, software, and web developer job openings.",
            images: ["https://d1y41eupgbwbb2.cloudfront.net/images/og/career.jpg"]
        },
        robots: {
            index: process.env.NODE_ENV === 'production',
            follow: process.env.NODE_ENV === 'production',
            nocache: false,
            googleBot: {
                index: process.env.NODE_ENV === 'production',
                follow: process.env.NODE_ENV === 'production',
                noimageindex: process.env.NODE_ENV === 'production',
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        other: {
            classification: 'Technology'
        },
        alternates: {
            canonical: "/career.php"
        }
};

export default function Career() {
    return (
        <>
          <div className="flex w-full relative bg-slate-50 select-nonee lg:h-dvh">
              <div className="size-full relative !z-10">
                  <div className="colorApply1 flex size-full items-center justify-center rounded-b-2xl relative overflow-hidden shadow-lg before:absolute before:inset-0 before:bg-cover before:bg-right before:rounded-b-2xl before:bg-gradient-to-r before:mix-blend-multiply shadow-green-950 before:from-green-950 before:via-green-900 before:to-green-800">
                      <span className="colorApply2 absolute inset-0 bg-cover bg-right opacity-50 rounded-b-2xl bg-gradient-to-r mix-blend-multiply shadow-green-950 from-green-950 via-green-900 to-green-800"></span>
                      <Image
                          className="size-full object-cover object-center absolute inset-0 -z-[1] rounded-b-2xl aspect-[1519/812]"
                          width="1519"
                          height="812"
                          priority={true} 
                          src="https://d1y41eupgbwbb2.cloudfront.net/images/career-2048w.webp"
                          alt="career-2048w"
                      />

                      <div className="relative overflow-hidden z-10 text-center 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-3xl max-w-2xl px-6 lg:px-8 w-full lg:pt-40 sm:pt-32 pt-28 pb-12">
                          <h1 className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight font-light text-white">
                              <span className="colorApply3 font-bold block text-balance pb-1">Together at IMG Global Infotech</span>
                          </h1>
                          <div className="max-md:text-sm text-base text-white pt-5 text-balance mx-auto w-10/12 empty:hidden">We offer a truly inspiring and flexible work environment where you will be empowered to follow your passion, see possibilities, and learn and grow continuously.</div>
                          <div className="mt-10 flex gap-4 justify-center">
                              <label htmlFor="hireModal" className="inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-200 bg-slate-900 text-white hover:bg-slate-700 cursor-pointer">
                                  <span>
                                      <span className="inline-flex items-center gap-1">
                                          <span>
                                              Apply Now
                                          </span>
                                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="size-5" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                                          <span>
                                              hr@imgglobalinfotech.com
                                          </span>
                                      </span>
                                  </span>
                              </label>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="relative bg-gray-100 py-6 md:py-8 lg:py-16 select-nonee">
              <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full relative">
                
                  <div className="mx-auto max-w-container gap-7 flex flex-col max-lg:gap-4 items-center">

                      <div className="w-full relative z-20 h-auto shrink-1 grow-0">
                          <h2 className="
                              max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance text-center

                              first:*:font-normal

                              last:*:font-bold last:*:text-theme4
                          ">
                              <span>Work Life At</span> <span> Its Best</span>
                              
                          </h2>
                      </div>
                      <div className="w-full grid md:grid-cols-3 gap-8">
                          <div className="overflow-hidden group items-center h-full relative before:absolute before:bottom-0 before:z-[100] before:w-full before:h-16 before:bg-rose-500 before:content drop-shadow-2xl">
                              <div className="bg-white pb-24 md:group-hover:-translate-y-2 duration-300 px-10 pt-10 rounded-t-[40px] rounded-tl-[80px] flex flex-col m-3 items-center overflow-hidden justify-center relative before:absolute before:w-16 before:h-6 before:-skew-x-12 before:m-2 before:border-2 before:border-gray-100 before:-right-5 before:top-8 before:bg-rose-500">
                                <div className="*:size-12 *:text-rose-600">
                                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path></svg>
                                </div>
                                <h3 className="md:text-lg sm:text-base text-sm leading-6 font-bold pt-4">
                                  Learning & Development
                                </h3>
                                <div className="mt-2 sm:text-base text-sm leading-6 text-center text-pretty">
                                  Describes work staff to develop academic practices. Still, many leaders struggle to keep their developers on a lifelong path of skill development
                                </div>
                              </div>
                            <div className="size-4 bg-rose-600 absolute bottom-[56px] left-[3px] rotate-45 -z-10"></div>
                            <div className="size-4 bg-rose-600 absolute bottom-[56px] right-[3px] rotate-45 -z-10"></div>
                              <div className="size-20 p-4 bg-rose-500 absolute z-[1000] rounded-full bottom-6 left-1/2 -translate-x-1/2">
                                <div className="bg-white flex items-center justify-center size-full text-3xl font-bold rounded-full ">
                                  01
                                </div>
                              </div>
                          </div>
                          <div className="overflow-hidden group items-center h-full relative before:absolute before:bottom-0 before:z-[100] before:w-full before:h-16 before:bg-yellow-500 before:content drop-shadow-2xl">
                              <div className="bg-white pb-24 md:group-hover:-translate-y-2 duration-300 px-10 pt-10 rounded-t-[40px] rounded-tl-[80px] flex flex-col m-3 items-center overflow-hidden justify-center relative before:absolute before:w-16 before:h-6 before:-skew-x-12 before:m-2 before:border-2 before:border-gray-100 before:-right-5 before:top-8 before:bg-yellow-500">
                                <div className="*:size-12 *:text-yellow-500">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.2 0A3.193 3.193 0 0 0 0 3.2v17.6C0 22.573 1.427 24 3.2 24h17.6c1.773 0 3.2-1.427 3.2-3.2V3.2C24 1.427 22.573 0 20.8 0H3.2Zm11.113 4.002.049.002c1.052.209 1.438.376 1.438.62 0 .01-.004.034-.008.044l-.058.19c-.043.137-.11.345-.183.606.3-.106.556-.242.766-.407.426-.332.808-.437 1.059-.297a.411.411 0 0 1 .2.435c-.033.277-.322.671-1.017.86-.422.115-.821.2-1.215.266a9.147 9.147 0 0 0-.192 1.58 5.61 5.61 0 0 1 1.03-.266c-.112-.105-.328-.223-.554-.346-.06-.034-.205-.112-.205-.26 0-.016.006-.062.014-.078.04-.136.203-.152.322-.152.056 0 .128.003.216.015.68.033 1.102.19 1.288.474a.535.535 0 0 1 .088.296v.013c.766.081 1.412.374 1.83.836.333.369.509.832.508 1.34 0 .042-.003.084-.006.127-.12 2.178-2.942 2.996-3.062 3.03a.253.253 0 0 1-.052.007.35.35 0 0 1-.067-.012c-.102-.04-.306-.12-.306-.303.012-.12.08-.239.336-.268-.003-.003 2.311-.877 2.311-2.3 0-.059-.004-.12-.01-.183-.142-1.017-.705-1.548-1.722-1.621-.416.959-.862 1.766-1.327 2.404.145.223.307.422.482.586a.195.195 0 0 1 .035.237.446.446 0 0 1-.317.218c-.203.033-.421-.072-.657-.306-.026-.028-.055-.057-.08-.087-.822.867-1.535 1.053-1.992 1.053-.336 0-.552-.099-.61-.128-.258-.133-.54-.556-.542-1.17 0-.62.285-1.792 2.188-2.78a10.019 10.019 0 0 1-.013-.485c0-.411.025-.87.068-1.366a8.057 8.057 0 0 1-1.19-.033.223.223 0 0 1-.07-.022 1.708 1.708 0 0 1-.578-.483l-.08-.095c-.087-.1-.186-.215-.134-.361.019-.053.075-.144.237-.167-.005 0 .24-.041.432.11.05.037.09.083.136.133.083.094.143.163.216.172.065.009.297.034.622.034.165 0 .328-.008.488-.02.037-.306.086-.63.142-.967a.396.396 0 0 0-.219-.209c-.157-.062-.32-.128-.32-.287 0-.01.002-.032.005-.04.019-.158.188-.178.28-.19Zm-8.97 1.772 1.648 1.652c1.683-1.16 3.887-.807 5.013-.066-1.206.088-2.59.802-3.239 1.846l1.808 1.813h-5.23V5.774Zm10.812 2.533a5.66 5.66 0 0 0-.995.269c.027.414.097.802.205 1.156.39-.605.681-1.158.765-1.366.01-.02.017-.04.025-.059Zm-1.807.674c-.757.528-1.413 1.519-1.413 2.178l.001.059c.014.227.117.375.323.458.325.128.868-.271 1.512-1.099-.204-.435-.346-.971-.423-1.596Zm-6.47 3.434c.823 0 1.458.17 1.907.512.45.34.674.923.674 1.744 0 .216-.012.613-.032 1.184-.02.574-.032.955-.032 1.146.001.845.064 1.597.189 2.256l-1.089.041a2.738 2.738 0 0 1-.083-.647h-.07c-.57.52-1.343.78-2.325.78-.532 0-.99-.156-1.374-.469-.383-.314-.576-.878-.576-1.459 0-.715.196-1.33.744-1.832.654-.598 2.016-.868 3.509-.458.108.03.022-.24.022-.383 0-.571-.153-.952-.455-1.142-.302-.19-.762-.285-1.377-.285-.728 0-.666.147-1.37.327l-.177-.96c.695-.199 1.012-.355 1.914-.355Zm5.282 1.806h5.228v5.246l-1.645-1.652c-1.685 1.16-3.888.806-5.015.065 1.206-.087 2.591-.8 3.241-1.845L13.16 14.22Zm-5.038 1.624a2.57 2.57 0 0 0-.895.173c-.551.24-1.056.558-1.03 1.373.019.63.445 1.086 1.334 1.086.762 0 1.37-.191 1.825-.571a58.944 58.944 0 0 1-.036-1.9 3.685 3.685 0 0 0-1.198-.16Z"></path></svg>
                                </div>
                                <h3 className="md:text-lg sm:text-base text-sm leading-6 font-bold pt-4">
                                  Mindful Personal Guidance
                                </h3>
                                <div className="mt-2 sm:text-base text-sm leading-6 text-center text-pretty">
                                  If you want your organization to function better and create a healthy working environment for your employees.
                                </div>
                              </div>
                            <div className="size-4 bg-yellow-600 absolute bottom-[56px] left-[3px] rotate-45 -z-10"></div>
                            <div className="size-4 bg-yellow-600 absolute bottom-[56px] right-[3px] rotate-45 -z-10"></div>
                              <div className="size-20 p-4 bg-yellow-500 absolute z-[1000] rounded-full bottom-6 left-1/2 -translate-x-1/2">
                                <div className="bg-white flex items-center justify-center size-full text-3xl font-bold rounded-full ">
                                  02
                                </div>
                              </div>
                          </div>
                          <div className="overflow-hidden group items-center h-full relative before:absolute before:bottom-0 before:z-[100] before:w-full before:h-16 before:bg-gray-500 before:content drop-shadow-2xl">
                              <div className="bg-white pb-24 md:group-hover:-translate-y-2 duration-300 px-10 pt-10 rounded-t-[40px] rounded-tl-[80px] flex flex-col m-3 items-center overflow-hidden justify-center relative before:absolute before:w-16 before:h-6 before:-skew-x-12 before:m-2 before:border-2 before:border-gray-100 before:-right-5 before:top-8 before:bg-gray-500">
                                <div className="*:size-12 *:text-gray-600">
                                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM11 13V15H13V13H11ZM11 7V12H13V7H11Z"></path></svg>
                                </div>
                                <h3 className="md:text-lg sm:text-base text-sm leading-6 font-bold pt-4">
                                  Constructive Feedback
                                </h3>
                                <div className="mt-2 sm:text-base text-sm leading-6 text-center text-pretty">
                                  Creating a good quality requires solving problems and exercising our minds to find the best methods or tools.
                                </div>
                              </div>
                            <div className="size-4 bg-gray-600 absolute bottom-[56px] left-[3px] rotate-45 -z-10"></div>
                            <div className="size-4 bg-gray-600 absolute bottom-[56px] right-[3px] rotate-45 -z-10"></div>
                              <div className="size-20 p-4 bg-gray-500 absolute z-[1000] rounded-full bottom-6 left-1/2 -translate-x-1/2">
                                <div className="bg-white flex items-center justify-center size-full text-3xl font-bold rounded-full ">
                                  03
                                </div>
                              </div>
                          </div>
                          <div className="overflow-hidden group items-center h-full relative before:absolute before:bottom-0 before:z-[100] before:w-full before:h-16 before:bg-purple-500 before:content drop-shadow-2xl">
                              <div className="bg-white pb-24 md:group-hover:-translate-y-2 duration-300 px-10 pt-10 rounded-t-[40px] rounded-tl-[80px] flex flex-col m-3 items-center overflow-hidden justify-center relative before:absolute before:w-16 before:h-6 before:-skew-x-12 before:m-2 before:border-2 before:border-purple-100 before:-right-5 before:top-8 before:bg-purple-500">
                                <div className="*:size-12 *:text-purple-600">
                                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M226.25 21.22c-7.37-.076-14.458.815-21.594 2.936 29.88 18.046 40.87 41.507 35.03 63.063-45.987-37.932-112.6-41.75-146.592-5.845 34.904.688 55.595 15.218 61.312 36.813-58.69-9.694-118.192 20.31-129.656 68.312 30.896-17.035 56.737-14.552 72.438 1.75-55.758 20.907-92.336 76.467-78.25 123.813 18.253-30.226 41.895-41.334 63.656-35.032-38.078 45.996-42.39 112.556-6.438 146.595.694-35.202 15.48-56.406 37.375-61.906-9.707 58.698 19.74 118.19 67.75 129.655-17.033-30.896-14.553-56.737 1.75-72.438 20.867 55.836 76.43 92.94 123.814 78.844-30.186-18.228-41.28-41.916-35.03-63.655 45.984 37.86 112.595 41.724 146.56 5.844-34.904-.69-56.188-15.188-61.905-36.783 58.698 9.71 118.19-20.332 129.655-68.343-30.69 16.922-56.674 14.852-72.406-1.156 55.868-20.85 92.945-77.005 78.842-124.407-18.036 29.867-41.514 41.448-63.062 35.626 37.86-45.985 41.132-112.625 5.25-146.594-.688 34.905-15.22 55.627-36.813 61.344 9.71-58.7-20.3-118.19-68.312-129.656 16.923 30.69 14.82 56.674-1.188 72.406-17.744-47.38-60.633-80.79-102.187-81.187zm28.875 82.124c40.494-.113 81.018 15.362 111.97 46.312 48.312 48.312 58.91 119.93 31.374 178.406 10.386-48.018-9.547-107.827-55.75-154.03-46.205-46.205-106.014-66.138-154.033-55.75 21.016-9.896 43.722-14.875 66.438-14.938zm.813 55.812c25.955.08 51.88 10.1 71.718 29.938 31.206 31.206 38.067 77.45 20.28 115.22 6.71-31.015-6.188-69.658-36.03-99.502-29.842-29.843-68.453-42.71-99.47-36 12.985-6.113 26.97-9.322 41-9.625.84-.018 1.664-.033 2.5-.03zm-142.813 34.688c-10.387 48.018 9.11 108.233 55.313 154.437 46.203 46.205 106.45 65.732 154.468 55.345-58.476 27.536-130.5 17.343-178.812-30.97-48.314-48.31-58.505-120.335-30.97-178.81zm157.688 10.844l3.812 3.812 33.594 33.594 3.81 3.812-1.405 5.22L298.345 297l-1.408 5.22-5.218 1.405-45.876 12.28-5.22 1.408-3.81-3.813-33.595-33.594-3.814-3.812 1.406-5.22L213.125 225l1.375-5.22 5.22-1.405 45.874-12.28 5.22-1.407zm-107.188 12.937c-6.71 31.016 5.875 69.908 35.72 99.75 29.843 29.842 68.764 42.46 99.78 35.75-37.77 17.786-84.296 11.206-115.5-20-31.204-31.206-37.784-77.73-20-115.5zm101.594 7.906l-35.47 9.5-9.47 35.5 25.907 25.908 35.5-9.47 9.5-35.468-25.968-25.97z"></path></svg>
                                </div>
                                <h3 className="md:text-lg sm:text-base text-sm leading-6 font-bold pt-4">
                                  Inclusive & Open-Culture
                                </h3>
                                <div className="mt-2 sm:text-base text-sm leading-6 text-center text-pretty">
                                  Cultural inclusion starts at the top business leaders must display inclusive behavior.
                                </div>
                              </div>
                            <div className="size-4 bg-purple-600 absolute bottom-[56px] left-[3px] rotate-45 -z-10"></div>
                            <div className="size-4 bg-purple-600 absolute bottom-[56px] right-[3px] rotate-45 -z-10"></div>
                              <div className="size-20 p-4 bg-purple-500 absolute z-[1000] rounded-full bottom-6 left-1/2 -translate-x-1/2">
                                <div className="bg-white flex items-center justify-center size-full text-3xl font-bold rounded-full ">
                                  04
                                </div>
                              </div>
                          </div>
                          <div className="overflow-hidden group items-center h-full relative before:absolute before:bottom-0 before:z-[100] before:w-full before:h-16 before:bg-fuchsia-500 before:content drop-shadow-2xl">
                              <div className="bg-white pb-24 md:group-hover:-translate-y-2 duration-300 px-10 pt-10 rounded-t-[40px] rounded-tl-[80px] flex flex-col m-3 items-center overflow-hidden justify-center relative before:absolute before:w-16 before:h-6 before:-skew-x-12 before:m-2 before:border-2 before:border-fuchsia-100 before:-right-5 before:top-8 before:bg-fuchsia-500">
                                <div className="*:size-12 *:text-fuchsia-600">
                                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="352" r="32"></circle><path d="M99.78 32a48 48 0 0 0-42.94 26.53l-31 62A48.26 48.26 0 0 0 24.28 160h278.2a4 4 0 0 0 3.39-1.87l75.5-120A4 4 0 0 0 378 32z"></path><path d="m486.17 120.56-31-62a47.7 47.7 0 0 0-32.79-25.46L342.5 160 298 231.08a128 128 0 0 0-84 0l-23.32-37.2a4 4 0 0 0-3.39-1.88H51.14a4 4 0 0 0-3.36 6.16l82.7 128.73a128 128 0 1 0 251 0L483.62 168a48.22 48.22 0 0 0 2.55-47.44zm-226 295.31a64 64 0 1 1 59.69-59.69 64.08 64.08 0 0 1-59.68 59.69z"></path></svg>
                                </div>
                                <h3 className="md:text-lg sm:text-base text-sm leading-6 font-bold pt-4">
                                  Innovation & Quality First
                                </h3>
                                <div className="mt-2 sm:text-base text-sm leading-6 text-center text-pretty">
                                  We always let our staff take initiative and to innovate with new ideas and come up with better.
                                </div>
                              </div>
                            <div className="size-4 bg-fuchsia-600 absolute bottom-[56px] left-[3px] rotate-45 -z-10"></div>
                            <div className="size-4 bg-fuchsia-600 absolute bottom-[56px] right-[3px] rotate-45 -z-10"></div>
                              <div className="size-20 p-4 bg-fuchsia-500 absolute z-[1000] rounded-full bottom-6 left-1/2 -translate-x-1/2">
                                <div className="bg-white flex items-center justify-center size-full text-3xl font-bold rounded-full ">
                                  05
                                </div>
                              </div>
                          </div>
                          <div className="overflow-hidden group items-center h-full relative before:absolute before:bottom-0 before:z-[100] before:w-full before:h-16 before:bg-pink-500 before:content drop-shadow-2xl">
                              <div className="bg-white pb-24 md:group-hover:-translate-y-2 duration-300 px-10 pt-10 rounded-t-[40px] rounded-tl-[80px] flex flex-col m-3 items-center overflow-hidden justify-center relative before:absolute before:w-16 before:h-6 before:-skew-x-12 before:m-2 before:border-2 before:border-pink-100 before:-right-5 before:top-8 before:bg-pink-500">
                                <div className="*:size-12 *:text-pink-600">
                                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.999 0a12 12 0 100 24A12 12 0 0012 0zm1.183 5.255h.048c3.273 0 5.247 1.48 5.247 4.103 0 2.727-1.974 4.536-5.295 4.669v-1.742c1.837-.11 2.801-1.061 2.801-2.744 0-1.498-.957-2.442-2.8-2.516zm-1.773.026l.005 11.896c.779.052 1.583.18 2.26.337l-.269 1.324H6.788v-1.324a14.96 14.96 0 012.26-.337V6.993a14.71 14.71 0 01-2.26-.337V5.33h2.26c.64 0 1.469-.028 2.361-.05z"></path></svg>
                                </div>
                                <h3 className="md:text-lg sm:text-base text-sm leading-6 font-bold pt-4">
                                  Proactive Implementation
                                </h3>
                                <div className="mt-2 sm:text-base text-sm leading-6 text-center text-pretty">
                                  Strong emotional reactions are common in reactive people, as they allow themselves to be defined by other people’s actions.
                                </div>
                              </div>
                            <div className="size-4 bg-pink-600 absolute bottom-[56px] left-[3px] rotate-45 -z-10"></div>
                            <div className="size-4 bg-pink-600 absolute bottom-[56px] right-[3px] rotate-45 -z-10"></div>
                              <div className="size-20 p-4 bg-pink-500 absolute z-[1000] rounded-full bottom-6 left-1/2 -translate-x-1/2">
                                <div className="bg-white flex items-center justify-center size-full text-3xl font-bold rounded-full ">
                                  06
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="relative py-8">
              <div className="text-blue-50">
                  <div className="absolute top-0 left-0 h-full w-full overflow-hidden"><svg className="w-auto h-[550px] fill-blue-50 opacity-70" viewBox="0 0 95 52.8"><path d="M27.3 0H0l26.4 26.4L0 52.8h27.3l26.4-26.4z"></path><path d="M68.6 0H41.3l26.4 26.4-26.4 26.4h27.3L95 26.4z"></path></svg></div>
              </div>
              <div className="mx-auto max-w-7xl px-6 lg:px-8 z-[1] relative">

                  <div className="py-xl-5 py-lg-5 py-md-5 py-5 sm:w-3/4 w-full mx-auto select-nonee relative">
                      <div className="flex w-full h-auto items-center flex-wrap">
                          <div className="lg:w-[60%] lg:pe-10 pe-0 w-[100%] lg:order-1 order-2">
                              <div className="">
                                  <p className="
                                  max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance
                      
                                  first:*:font-normal
                      
                                  last:*:font-bold last:*:text-theme4
                                  ">
                                  <span className="font-normal">Join The </span> <span className="font-bold bg-gradient-to-r from-gray-500 via-sky-600 to-gray-500 bg-clip-text text-theme4"> IMG Global Infotech Team today !!</span>
                                  </p>
                                  <p className="mt-4 text-sm md:text-base leading-7 text-balance text-slate-600">Innovate with the latest and greatest technologies & get to work on some of the coolest projects you can imagine.</p>
                              </div>
                              <div className="flex items-center mt-6 flex-wrap gap-3 w-full  lg:w-[90%]">
                                  <label htmlFor="hireModal" className=" inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-200 bg-slate-900 text-white hover:bg-slate-700 cursor-pointer" data-bs-toggle="modal" data-bs-target="#myModal" opening-id="15" opening-postname="Node.js Developer" data-tilt data-tilt-max="3" data-tilt-speed="400" data-tilt-perspective="2500">
                                      <span>
                                          <span className="sr-only">Open menu</span>
                                          <span className="inline-flex items-center gap-1">
                                              <span>
                                                Apply Now
                                              </span>
                                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z"></path><circle cx="9" cy="13" r="1"></circle><circle cx="15" cy="13" r="1"></circle><path d="M18 11.03A6.04 6.04 0 0012.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 004.86-5.89c1.31 2.63 4 4.44 7.12 4.47z"></path></svg>
                                          </span>
                                      </span>
                                  </label>
                              </div>
                          </div>
                          <div className="lg:w-[40%] flex items-center justify-center w-[100%] lg:order-2 order-1">
                              <div className="aspect-[3/2.8] object-cover mx-auto">
                              <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/carers/img-team.webp" width={365} height={340} alt="thanku" className="img-fluid h-full w-full"/>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div> 
          <div className="bg-gray-100 relative overflow-hidden">
              <div className="mx-auto max-w-7xl px-6 lg:px-8  z-[1] relative py-10 overflow-hidden">
                  <div className="">
                      <p className="
                      max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-center text-black text-balance

                      first:*:font-normal

                      last:*:font-bold last:*:text-theme4
                      ">
                      <span className="font-normal">Trending  </span> <span className="font-bold bg-gradient-to-r from-gray-500 via-sky-600 to-gray-500 bg-clip-text text-theme4"> Opportunities</span>
                      </p>
                      
                  </div>
                  <div className="flex flex-wrap flex-row">
                      <div className="md:w-1/2 md:p-4 p-3 w-full">
                          <div className="card h-full lg:flex items-center bg-white shadow-sm  px-6 py-5 w-full duration-300 border-transparent border hover:border hover:border-orange-500">
                              <div className="grow">
                                  <div className="text-gray-500 font-semibold text-sm">FULL TIME</div>
                                  <div className="text-slate-950 sm:text-lg text-base font-bold ">Flutter Developer</div>
                                  <div className="flex items-center mt-1 gap-3">
                                      <div className="flex items-center text-black text-sm"> <span className="flex items-center jsutify-center"> <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-5 w-5 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg"><path d="M124.813 31.5L21.593 134.688 150.44 263.53l4.687-27.28 18.438 3.156-19.875 115.78c.314-.073.62-.14.937-.217l36.03 26.53 10-129.406 18.626 1.437-10.874 141.032 38.188 28.125v-164.28l-31-84.563 40.344 15.406 40.343-15.438-31 84.563v164.313l38.22-28.157-10.906-141 18.625-1.436L321.25 381.5l36.094-26.594c.355.09.71.166 1.062.25l-20.094-115.72 18.407-3.186 4.75 27.25 128.81-128.813L387.095 31.5 255.938 74.78 124.813 31.5zm14.843 45.813l36.438 112.624L73.47 147.03l66.186-69.718zm229.72 0l66.187 69.718-102.625 42.907 36.437-112.625zm-.063 231.406l8.343 48.124c18.14-1.61 34.37-13.527 52.125-41.625-20.87 3.008-40.78.415-60.467-6.5zm-226.625.06c-19.613 6.86-39.458 9.437-60.25 6.44 17.718 28.036 33.906 39.973 52 41.624l8.25-48.063zm221.375 64.376l-37.032 27.28c14.147 15.196 34.73 19.897 70.845 11.752-14.33-10.72-25.298-23.82-33.813-39.032zm-215.813.344c-8.737 16.542-20.235 30.682-35.53 42.125 38.18 8.612 59.01 2.917 73.218-14.406L148.25 373.5zm54 39.75c.29 24.56-2.662 48.25-9.78 71.406 25.805-11.198 41.003-24.887 49.155-42.437l-39.375-28.97zm106.156.875l-39.562 29.156c8.114 17.697 23.35 31.485 49.312 42.75-7.17-23.32-10.098-47.167-9.75-71.905z"></path></svg></span>  1 Year </div>
                                      <div className="flex items-center text-black text-sm"> <span className="flex items-center jsutify-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="h-5 w-5 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg"><path d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"></path></svg></span> On Site</div>
                                      <div className="flex items-center text-black text-sm"> <span className="flex items-center jsutify-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="h-5 w-5 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg></span>  jaipur </div>
                                  </div>
                  
                              </div>
                              <div className="flex-none lg:mt-0 mt-5">
                                  <label htmlFor="hireModal" className=" inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-200 bg-slate-900 text-white hover:bg-slate-700 cursor-pointer" data-bs-toggle="modal" data-bs-target="#myModal" opening-id="15" opening-postname="Node.js Developer" data-tilt data-tilt-max="3" data-tilt-speed="400" data-tilt-perspective="2500">
                                      <span>
                                          <span className="sr-only">Open menu</span>
                                          <span className="inline-flex items-center gap-1">
                                              <span>
                                                Apply Now
                                              </span>
                                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z"></path><circle cx="9" cy="13" r="1"></circle><circle cx="15" cy="13" r="1"></circle><path d="M18 11.03A6.04 6.04 0 0012.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 004.86-5.89c1.31 2.63 4 4.44 7.12 4.47z"></path></svg>
                                          </span>
                                      </span>
                                  </label>
                              </div>
                          </div>
                      </div>
                      <div className="md:w-1/2 md:p-4 p-3 w-full">
                          <div className="card h-full lg:flex items-center bg-white shadow-sm  px-6 py-5 w-full duration-300 border-transparent border hover:border hover:border-orange-500">
                              <div className="grow">
                                  <div className="text-gray-500 font-semibold text-sm">FULL TIME</div>
                                  <div className="text-slate-950 sm:text-lg text-base font-bold ">React Js Developer</div>
                                  <div className="flex items-center mt-1 gap-3">
                                      <div className="flex items-center text-black text-sm"> <span className="flex items-center jsutify-center"> <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-5 w-5 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg"><path d="M124.813 31.5L21.593 134.688 150.44 263.53l4.687-27.28 18.438 3.156-19.875 115.78c.314-.073.62-.14.937-.217l36.03 26.53 10-129.406 18.626 1.437-10.874 141.032 38.188 28.125v-164.28l-31-84.563 40.344 15.406 40.343-15.438-31 84.563v164.313l38.22-28.157-10.906-141 18.625-1.436L321.25 381.5l36.094-26.594c.355.09.71.166 1.062.25l-20.094-115.72 18.407-3.186 4.75 27.25 128.81-128.813L387.095 31.5 255.938 74.78 124.813 31.5zm14.843 45.813l36.438 112.624L73.47 147.03l66.186-69.718zm229.72 0l66.187 69.718-102.625 42.907 36.437-112.625zm-.063 231.406l8.343 48.124c18.14-1.61 34.37-13.527 52.125-41.625-20.87 3.008-40.78.415-60.467-6.5zm-226.625.06c-19.613 6.86-39.458 9.437-60.25 6.44 17.718 28.036 33.906 39.973 52 41.624l8.25-48.063zm221.375 64.376l-37.032 27.28c14.147 15.196 34.73 19.897 70.845 11.752-14.33-10.72-25.298-23.82-33.813-39.032zm-215.813.344c-8.737 16.542-20.235 30.682-35.53 42.125 38.18 8.612 59.01 2.917 73.218-14.406L148.25 373.5zm54 39.75c.29 24.56-2.662 48.25-9.78 71.406 25.805-11.198 41.003-24.887 49.155-42.437l-39.375-28.97zm106.156.875l-39.562 29.156c8.114 17.697 23.35 31.485 49.312 42.75-7.17-23.32-10.098-47.167-9.75-71.905z"></path></svg></span>  1-2 Years </div>
                                      <div className="flex items-center text-black text-sm"> <span className="flex items-center jsutify-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="h-5 w-5 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg"><path d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"></path></svg></span> On Site</div>
                                      <div className="flex items-center text-black text-sm"> <span className="flex items-center jsutify-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="h-5 w-5 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg></span>  jaipur </div>
                                  </div>
                  
                              </div>
                              <div className="flex-none lg:mt-0 mt-5">
                                  <label htmlFor="hireModal" className=" inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-200 bg-slate-900 text-white hover:bg-slate-700 cursor-pointer" data-bs-toggle="modal" data-bs-target="#myModal" opening-id="15" opening-postname="Node.js Developer" data-tilt data-tilt-max="3" data-tilt-speed="400" data-tilt-perspective="2500">
                                      <span>
                                          <span className="sr-only">Open menu</span>
                                          <span className="inline-flex items-center gap-1">
                                              <span>
                                                Apply Now
                                              </span>
                                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z"></path><circle cx="9" cy="13" r="1"></circle><circle cx="15" cy="13" r="1"></circle><path d="M18 11.03A6.04 6.04 0 0012.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 004.86-5.89c1.31 2.63 4 4.44 7.12 4.47z"></path></svg>
                                          </span>
                                      </span>
                                  </label>
                              </div>
                          </div>
                      </div>
                      <div className="md:w-1/2 md:p-4 p-3 w-full">
                          <div className="card h-full lg:flex items-center bg-white shadow-sm  px-6 py-5 w-full duration-300 border-transparent border hover:border hover:border-orange-500">
                              <div className="grow">
                                  <div className="text-gray-500 font-semibold text-sm">FULL TIME</div>
                                  <div className="text-slate-950 sm:text-lg text-base font-bold ">Node.js Developer</div>
                                  <div className="flex items-center mt-1 gap-3">
                                      <div className="flex items-center text-black text-sm"> <span className="flex items-center jsutify-center"> <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-5 w-5 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg"><path d="M124.813 31.5L21.593 134.688 150.44 263.53l4.687-27.28 18.438 3.156-19.875 115.78c.314-.073.62-.14.937-.217l36.03 26.53 10-129.406 18.626 1.437-10.874 141.032 38.188 28.125v-164.28l-31-84.563 40.344 15.406 40.343-15.438-31 84.563v164.313l38.22-28.157-10.906-141 18.625-1.436L321.25 381.5l36.094-26.594c.355.09.71.166 1.062.25l-20.094-115.72 18.407-3.186 4.75 27.25 128.81-128.813L387.095 31.5 255.938 74.78 124.813 31.5zm14.843 45.813l36.438 112.624L73.47 147.03l66.186-69.718zm229.72 0l66.187 69.718-102.625 42.907 36.437-112.625zm-.063 231.406l8.343 48.124c18.14-1.61 34.37-13.527 52.125-41.625-20.87 3.008-40.78.415-60.467-6.5zm-226.625.06c-19.613 6.86-39.458 9.437-60.25 6.44 17.718 28.036 33.906 39.973 52 41.624l8.25-48.063zm221.375 64.376l-37.032 27.28c14.147 15.196 34.73 19.897 70.845 11.752-14.33-10.72-25.298-23.82-33.813-39.032zm-215.813.344c-8.737 16.542-20.235 30.682-35.53 42.125 38.18 8.612 59.01 2.917 73.218-14.406L148.25 373.5zm54 39.75c.29 24.56-2.662 48.25-9.78 71.406 25.805-11.198 41.003-24.887 49.155-42.437l-39.375-28.97zm106.156.875l-39.562 29.156c8.114 17.697 23.35 31.485 49.312 42.75-7.17-23.32-10.098-47.167-9.75-71.905z"></path></svg></span>  1-2 Years </div>
                                      <div className="flex items-center text-black text-sm"> <span className="flex items-center jsutify-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="h-5 w-5 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg"><path d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"></path></svg></span> On Site</div>
                                      <div className="flex items-center text-black text-sm"> <span className="flex items-center jsutify-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="h-5 w-5 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg></span>  jaipur </div>
                                  </div>
                  
                              </div>
                              <div className="flex-none lg:mt-0 mt-5">
                                  <label htmlFor="hireModal" className=" inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-200 bg-slate-900 text-white hover:bg-slate-700 cursor-pointer" data-bs-toggle="modal" data-bs-target="#myModal" opening-id="15" opening-postname="Node.js Developer" data-tilt data-tilt-max="3" data-tilt-speed="400" data-tilt-perspective="2500">
                                      <span>
                                          <span className="sr-only">Open menu</span>
                                          <span className="inline-flex items-center gap-1">
                                              <span>
                                                Apply Now
                                              </span>
                                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z"></path><circle cx="9" cy="13" r="1"></circle><circle cx="15" cy="13" r="1"></circle><path d="M18 11.03A6.04 6.04 0 0012.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 004.86-5.89c1.31 2.63 4 4.44 7.12 4.47z"></path></svg>
                                          </span>
                                      </span>
                                  </label>
                              </div>
                          </div>
                      </div>
                      <div className="md:w-1/2 md:p-4 p-3 w-full">
                          <div className="card h-full lg:flex items-center bg-white shadow-sm  px-6 py-5 w-full duration-300 border-transparent border hover:border hover:border-orange-500">
                              <div className="grow">
                                  <div className="text-gray-500 font-semibold text-sm">FULL TIME</div>
                                  <div className="text-slate-950 sm:text-lg text-base font-bold ">MERN Stack Developer</div>
                                  <div className="flex items-center mt-1 gap-3">
                                      <div className="flex items-center text-black text-sm"> <span className="flex items-center jsutify-center"> <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-5 w-5 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg"><path d="M124.813 31.5L21.593 134.688 150.44 263.53l4.687-27.28 18.438 3.156-19.875 115.78c.314-.073.62-.14.937-.217l36.03 26.53 10-129.406 18.626 1.437-10.874 141.032 38.188 28.125v-164.28l-31-84.563 40.344 15.406 40.343-15.438-31 84.563v164.313l38.22-28.157-10.906-141 18.625-1.436L321.25 381.5l36.094-26.594c.355.09.71.166 1.062.25l-20.094-115.72 18.407-3.186 4.75 27.25 128.81-128.813L387.095 31.5 255.938 74.78 124.813 31.5zm14.843 45.813l36.438 112.624L73.47 147.03l66.186-69.718zm229.72 0l66.187 69.718-102.625 42.907 36.437-112.625zm-.063 231.406l8.343 48.124c18.14-1.61 34.37-13.527 52.125-41.625-20.87 3.008-40.78.415-60.467-6.5zm-226.625.06c-19.613 6.86-39.458 9.437-60.25 6.44 17.718 28.036 33.906 39.973 52 41.624l8.25-48.063zm221.375 64.376l-37.032 27.28c14.147 15.196 34.73 19.897 70.845 11.752-14.33-10.72-25.298-23.82-33.813-39.032zm-215.813.344c-8.737 16.542-20.235 30.682-35.53 42.125 38.18 8.612 59.01 2.917 73.218-14.406L148.25 373.5zm54 39.75c.29 24.56-2.662 48.25-9.78 71.406 25.805-11.198 41.003-24.887 49.155-42.437l-39.375-28.97zm106.156.875l-39.562 29.156c8.114 17.697 23.35 31.485 49.312 42.75-7.17-23.32-10.098-47.167-9.75-71.905z"></path></svg></span>  1-3 Years </div>
                                      <div className="flex items-center text-black text-sm"> <span className="flex items-center jsutify-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="h-5 w-5 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg"><path d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"></path></svg></span> On Site</div>
                                      <div className="flex items-center text-black text-sm"> <span className="flex items-center jsutify-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="h-5 w-5 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg></span>  jaipur </div>
                                  </div>
                  
                              </div>
                              <div className="flex-none lg:mt-0 mt-5">
                                  <label htmlFor="hireModal" className=" inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-200 bg-slate-900 text-white hover:bg-slate-700 cursor-pointer" data-bs-toggle="modal" data-bs-target="#myModal" opening-id="15" opening-postname="Node.js Developer" data-tilt data-tilt-max="3" data-tilt-speed="400" data-tilt-perspective="2500">
                                      <span>
                                          <span className="sr-only">Open menu</span>
                                          <span className="inline-flex items-center gap-1">
                                              <span>
                                                Apply Now
                                              </span>
                                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z"></path><circle cx="9" cy="13" r="1"></circle><circle cx="15" cy="13" r="1"></circle><path d="M18 11.03A6.04 6.04 0 0012.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 004.86-5.89c1.31 2.63 4 4.44 7.12 4.47z"></path></svg>
                                          </span>
                                      </span>
                                  </label>
                              </div>
                          </div>
                      </div>
                      <div className="md:w-1/2 md:p-4 p-3 w-full">
                          <div className="card h-full lg:flex items-center bg-white shadow-sm  px-6 py-5 w-full duration-300 border-transparent border hover:border hover:border-orange-500">
                              <div className="grow">
                                  <div className="text-gray-500 font-semibold text-sm">FULL TIME</div>
                                  <div className="text-slate-950 sm:text-lg text-base font-bold ">React Native Developer</div>
                                  <div className="flex items-center mt-1 gap-3">
                                      <div className="flex items-center text-black text-sm"> <span className="flex items-center jsutify-center"> <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-5 w-5 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg"><path d="M124.813 31.5L21.593 134.688 150.44 263.53l4.687-27.28 18.438 3.156-19.875 115.78c.314-.073.62-.14.937-.217l36.03 26.53 10-129.406 18.626 1.437-10.874 141.032 38.188 28.125v-164.28l-31-84.563 40.344 15.406 40.343-15.438-31 84.563v164.313l38.22-28.157-10.906-141 18.625-1.436L321.25 381.5l36.094-26.594c.355.09.71.166 1.062.25l-20.094-115.72 18.407-3.186 4.75 27.25 128.81-128.813L387.095 31.5 255.938 74.78 124.813 31.5zm14.843 45.813l36.438 112.624L73.47 147.03l66.186-69.718zm229.72 0l66.187 69.718-102.625 42.907 36.437-112.625zm-.063 231.406l8.343 48.124c18.14-1.61 34.37-13.527 52.125-41.625-20.87 3.008-40.78.415-60.467-6.5zm-226.625.06c-19.613 6.86-39.458 9.437-60.25 6.44 17.718 28.036 33.906 39.973 52 41.624l8.25-48.063zm221.375 64.376l-37.032 27.28c14.147 15.196 34.73 19.897 70.845 11.752-14.33-10.72-25.298-23.82-33.813-39.032zm-215.813.344c-8.737 16.542-20.235 30.682-35.53 42.125 38.18 8.612 59.01 2.917 73.218-14.406L148.25 373.5zm54 39.75c.29 24.56-2.662 48.25-9.78 71.406 25.805-11.198 41.003-24.887 49.155-42.437l-39.375-28.97zm106.156.875l-39.562 29.156c8.114 17.697 23.35 31.485 49.312 42.75-7.17-23.32-10.098-47.167-9.75-71.905z"></path></svg></span>  1 Year </div>
                                      <div className="flex items-center text-black text-sm"> <span className="flex items-center jsutify-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="h-5 w-5 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg"><path d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"></path></svg></span> On Site</div>
                                      <div className="flex items-center text-black text-sm"> <span className="flex items-center jsutify-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="h-5 w-5 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg></span>  jaipur </div>
                                  </div>
                  
                              </div>
                              <div className="flex-none lg:mt-0 mt-5">
                                  <label htmlFor="hireModal" className=" inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-200 bg-slate-900 text-white hover:bg-slate-700 cursor-pointer" data-bs-toggle="modal" data-bs-target="#myModal" opening-id="15" opening-postname="Node.js Developer" data-tilt data-tilt-max="3" data-tilt-speed="400" data-tilt-perspective="2500">
                                      <span>
                                          <span className="sr-only">Open menu</span>
                                          <span className="inline-flex items-center gap-1">
                                              <span>
                                                Apply Now
                                              </span>
                                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z"></path><circle cx="9" cy="13" r="1"></circle><circle cx="15" cy="13" r="1"></circle><path d="M18 11.03A6.04 6.04 0 0012.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 004.86-5.89c1.31 2.63 4 4.44 7.12 4.47z"></path></svg>
                                          </span>
                                      </span>
                                  </label>
                              </div>
                          </div>
                      </div>
                      <div className="md:w-1/2 md:p-4 p-3 w-full">
                          <div className="card h-full lg:flex items-center bg-white shadow-sm  px-6 py-5 w-full duration-300 border-transparent border hover:border hover:border-orange-500">
                              <div className="grow">
                                  <div className="text-gray-500 font-semibold text-sm">FULL TIME</div>
                                  <div className="text-slate-950 sm:text-lg text-base font-bold ">PHP Developer</div>
                                  <div className="flex items-center mt-1 gap-3">
                                      <div className="flex items-center text-black text-sm"> <span className="flex items-center jsutify-center"> <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-5 w-5 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg"><path d="M124.813 31.5L21.593 134.688 150.44 263.53l4.687-27.28 18.438 3.156-19.875 115.78c.314-.073.62-.14.937-.217l36.03 26.53 10-129.406 18.626 1.437-10.874 141.032 38.188 28.125v-164.28l-31-84.563 40.344 15.406 40.343-15.438-31 84.563v164.313l38.22-28.157-10.906-141 18.625-1.436L321.25 381.5l36.094-26.594c.355.09.71.166 1.062.25l-20.094-115.72 18.407-3.186 4.75 27.25 128.81-128.813L387.095 31.5 255.938 74.78 124.813 31.5zm14.843 45.813l36.438 112.624L73.47 147.03l66.186-69.718zm229.72 0l66.187 69.718-102.625 42.907 36.437-112.625zm-.063 231.406l8.343 48.124c18.14-1.61 34.37-13.527 52.125-41.625-20.87 3.008-40.78.415-60.467-6.5zm-226.625.06c-19.613 6.86-39.458 9.437-60.25 6.44 17.718 28.036 33.906 39.973 52 41.624l8.25-48.063zm221.375 64.376l-37.032 27.28c14.147 15.196 34.73 19.897 70.845 11.752-14.33-10.72-25.298-23.82-33.813-39.032zm-215.813.344c-8.737 16.542-20.235 30.682-35.53 42.125 38.18 8.612 59.01 2.917 73.218-14.406L148.25 373.5zm54 39.75c.29 24.56-2.662 48.25-9.78 71.406 25.805-11.198 41.003-24.887 49.155-42.437l-39.375-28.97zm106.156.875l-39.562 29.156c8.114 17.697 23.35 31.485 49.312 42.75-7.17-23.32-10.098-47.167-9.75-71.905z"></path></svg></span>  1 Year </div>
                                      <div className="flex items-center text-black text-sm"> <span className="flex items-center jsutify-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="h-5 w-5 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg"><path d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"></path></svg></span> On Site</div>
                                      <div className="flex items-center text-black text-sm"> <span className="flex items-center jsutify-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="h-5 w-5 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg></span>  jaipur </div>
                                  </div>
                  
                              </div>
                              <div className="flex-none lg:mt-0 mt-5">
                                  <label htmlFor="hireModal" className=" inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-200 bg-slate-900 text-white hover:bg-slate-700 cursor-pointer" data-bs-toggle="modal" data-bs-target="#myModal" opening-id="15" opening-postname="Node.js Developer" data-tilt data-tilt-max="3" data-tilt-speed="400" data-tilt-perspective="2500">
                                      <span>
                                          <span className="sr-only">Open menu</span>
                                          <span className="inline-flex items-center gap-1">
                                              <span>
                                                Apply Now
                                              </span>
                                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z"></path><circle cx="9" cy="13" r="1"></circle><circle cx="15" cy="13" r="1"></circle><path d="M18 11.03A6.04 6.04 0 0012.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 004.86-5.89c1.31 2.63 4 4.44 7.12 4.47z"></path></svg>
                                          </span>
                                      </span>
                                  </label>
                              </div>
                          </div>
                      </div>
                      <div className="md:w-1/2 md:p-4 p-3 w-full">
                          <div className="card h-full lg:flex items-center bg-white shadow-sm  px-6 py-5 w-full duration-300 border-transparent border hover:border hover:border-orange-500">
                              <div className="grow">
                                  <div className="text-gray-500 font-semibold text-sm">FULL TIME</div>
                                  <div className="text-slate-950 sm:text-lg text-base font-bold ">SEO Executive</div>
                                  <div className="flex items-center mt-1 gap-3">
                                      <div className="flex items-center text-black text-sm"> <span className="flex items-center jsutify-center"> <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-5 w-5 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg"><path d="M124.813 31.5L21.593 134.688 150.44 263.53l4.687-27.28 18.438 3.156-19.875 115.78c.314-.073.62-.14.937-.217l36.03 26.53 10-129.406 18.626 1.437-10.874 141.032 38.188 28.125v-164.28l-31-84.563 40.344 15.406 40.343-15.438-31 84.563v164.313l38.22-28.157-10.906-141 18.625-1.436L321.25 381.5l36.094-26.594c.355.09.71.166 1.062.25l-20.094-115.72 18.407-3.186 4.75 27.25 128.81-128.813L387.095 31.5 255.938 74.78 124.813 31.5zm14.843 45.813l36.438 112.624L73.47 147.03l66.186-69.718zm229.72 0l66.187 69.718-102.625 42.907 36.437-112.625zm-.063 231.406l8.343 48.124c18.14-1.61 34.37-13.527 52.125-41.625-20.87 3.008-40.78.415-60.467-6.5zm-226.625.06c-19.613 6.86-39.458 9.437-60.25 6.44 17.718 28.036 33.906 39.973 52 41.624l8.25-48.063zm221.375 64.376l-37.032 27.28c14.147 15.196 34.73 19.897 70.845 11.752-14.33-10.72-25.298-23.82-33.813-39.032zm-215.813.344c-8.737 16.542-20.235 30.682-35.53 42.125 38.18 8.612 59.01 2.917 73.218-14.406L148.25 373.5zm54 39.75c.29 24.56-2.662 48.25-9.78 71.406 25.805-11.198 41.003-24.887 49.155-42.437l-39.375-28.97zm106.156.875l-39.562 29.156c8.114 17.697 23.35 31.485 49.312 42.75-7.17-23.32-10.098-47.167-9.75-71.905z"></path></svg></span>  1 Year </div>
                                      <div className="flex items-center text-black text-sm"> <span className="flex items-center jsutify-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="h-5 w-5 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg"><path d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"></path></svg></span> On Site</div>
                                      <div className="flex items-center text-black text-sm"> <span className="flex items-center jsutify-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="h-5 w-5 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg></span>  jaipur </div>
                                  </div>
                  
                              </div>
                              <div className="flex-none lg:mt-0 mt-5">
                                  <label htmlFor="hireModal" className=" inline-flex justify-center rounded-full max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-gray-200 bg-slate-900 text-white hover:bg-slate-700 cursor-pointer" data-bs-toggle="modal" data-bs-target="#myModal" opening-id="15" opening-postname="Node.js Developer" data-tilt data-tilt-max="3" data-tilt-speed="400" data-tilt-perspective="2500">
                                      <span>
                                          <span className="sr-only">Open menu</span>
                                          <span className="inline-flex items-center gap-1">
                                              <span>
                                                Apply Now
                                              </span>
                                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z"></path><circle cx="9" cy="13" r="1"></circle><circle cx="15" cy="13" r="1"></circle><path d="M18 11.03A6.04 6.04 0 0012.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 004.86-5.89c1.31 2.63 4 4.44 7.12 4.47z"></path></svg>
                                          </span>
                                      </span>
                                  </label>
                              </div>
                          </div>
                      </div>
                  </div>

                
              </div>
          </div>
          <div className="py-6 md:py-8 lg:py-16 select-nonee relative bg-gray-100 -z-[-1]">
              <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                  <div className="">
                      <h2 className="
                      max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-center text-balance

                      first:*:font-normal

                      last:*:font-bold last:*:text-theme4
                      ">
                      <span className="font-normal">Why We Love  </span> <span className="font-bold bg-gradient-to-r from-gray-500 via-sky-600 to-gray-500 bg-clip-text text-theme4">It Here Value</span>
                      </h2>
                      <p className="mt-4 text-sm md:text-base leading-7 text-center text-balance text-slate-600">We believe that our employees are our biggest strength, we can not achieve our goals if your team is not on board. That is why we put our team first in everything.</p>
                  </div>
                  <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-5 relative z-20">
                      <div className=" group hover:shadow-2xl hover:shadow-sky-300 duration-300 bg-white p-4 pb-0 m-4 rounded-lg shadow-2xl relative before:absolute before:h-12 before:z-50 before:w-4 before:bg-sky-600 before:-left-4 before:top-5 after:absolute after:size-8 after:-z-10 after:rotate-45 after:top-[52px] after:-left-2 after:bg-sky-600 ">
                          <div className="*:size-12 *:text-sky-500 *:p-1 *:ms-auto">
                              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 8l2 2l4 -4l4 4l2 -2l-6 -6z"></path><path d="M6 16l2 -2l4 4l3.5 -3.5l2 2l-5.5 5.5z"></path><path d="M20 10l2 2l-2 2l-2 -2z"></path><path d="M4 10l2 2l-2 2l-2 -2z"></path><path d="M12 10l2 2l-2 2l-2 -2z"></path></svg>
                          </div>
                          <div className="flex flex-col justify-center items-center">
                              <div className="flex flex-1 flex-col justify-center items-center rounded-xl p-4">
                                  <div className="md:text-xl mt-4 sm:text-lg text-base font-medium leading-6 text-sky-500 text-center">
                                      Work With Amazing Brands
                                  </div>
                                  <p className="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center text-ellipsis w-full">The product quality is our main bone of contention. Whatever comes from SemiDot work desk is QA tested and assures word class quality.</p>
                                </div>
                                <div className="flex absolute bottom-0 items-center justify-center">
                                  <div className="w-28 h-5 bg-sky-500 rounded-full border-t-4 border-sky-600 relative before:absolute before:w-12 before:aspect-[1/1] before:rounded-full before:bg-sky-500 before:-top-8 before:left-1/2 before:-translate-x-1/2 before:content-['A'] before:text-3xl before:font-bold before:text-white before:flex before:items-center before:justify-center "></div>
                                </div>
                          </div>
                            <div className="absolute top-5 py-1 left-0 flex flex-col justify-center items-center size-max bg-sky-500 px-5 rounded-r-full">
                              <div className="text-base font-semibold text-white">01</div>
                              <div className="text-base -mt-1 font-semibold text-white">STEP</div>
                            </div>
                      </div>
                      <div className=" group hover:shadow-2xl hover:shadow-amber-300 duration-300 bg-white p-4 pb-0 m-4 rounded-lg shadow-2xl relative before:absolute before:h-12 before:z-50 before:w-4 before:bg-amber-600 before:-left-4 before:top-5 after:absolute after:size-8 after:-z-10 after:rotate-45 after:top-[52px] after:-left-2 after:bg-amber-600 ">
                          <div className="*:size-12 *:text-amber-500 *:p-1 *:ms-auto">
                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M267.785 16.48L203.56 67.027l75.544 159.854L359.057 34.18 267.785 16.48zm-126.988 1.965L95.7 27.595l157.327 213.89-112.23-223.04zm-96.57 9.842L17.865 65.135l207.877 180.478L44.227 28.287zm383.63 29.95L366.324 88.56l-56.822 144.817L453.72 98.367l-25.863-40.13zm54.235 44.972l-64.012 83.163 74.236-38.38-10.224-44.784zm-452.2 45.636l-11.35 58.642 195.21 58.627L112.5 184.158l-13.242 30.9-69.365-66.212zM493 188.518l-81.836 38.34 23.11 53.92-13.274 51.67 72 8.835V188.518zM19.863 234.83l.9 39.863 104.135-1.816L19.863 234.83zm25.45 63.164L28.81 342.65l171.92-41.332-155.416-3.324zm335.36 48.334l-42.708 46.11 33.232 35.515-97.865 2.7 12.658 62.208h207.008V360.114l-112.326-13.785zM133.85 356.783L19.697 410.266v82.595h107.51l45.453-87.233-38.81-48.844zm65.158 38.686l.015.007-50.744 97.384h118.64l-15.916-78.208-51.996-19.183z"></path></svg>
                          </div>
                          <div className="flex flex-col justify-center items-center">
                              <div className="flex flex-1 flex-col justify-center items-center rounded-xl p-4">
                                  <div className="md:text-xl mt-4 sm:text-lg text-base font-medium leading-6 text-amber-500 ">
                                      Learn & Grow
                                  </div>
                                  <p className="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center text-ellipsis w-full">Our team comprises of full stack developers and designers who are aware of all the latest IT trends and can implement them in your product.</p>
                                </div>
                                <div className="flex absolute bottom-0 items-center justify-center">
                                  <div className="w-28 h-5 bg-amber-500 rounded-full border-t-4 border-amber-600 relative before:absolute before:w-12 before:aspect-[1/1] before:rounded-full before:bg-amber-500 before:-top-8 before:left-1/2 before:-translate-x-1/2 before:content-['B'] before:text-3xl before:font-bold before:text-white before:flex before:items-center before:justify-center "></div>
                                </div>
                          </div>
                            <div className="absolute top-5 py-1 left-0 flex flex-col justify-center items-center size-max bg-amber-500 px-5 rounded-r-full">
                              <div className="text-base font-semibold text-white">02</div>
                              <div className="text-base -mt-1 font-semibold text-white">STEP</div>
                            </div>
                      </div>
                      <div className=" group hover:shadow-2xl hover:shadow-lime-300 duration-300 bg-white p-4 pb-0 m-4 rounded-lg shadow-2xl relative before:absolute before:h-12 before:z-50 before:w-4 before:bg-lime-600 before:-left-4 before:top-5 after:absolute after:size-8 after:-z-10 after:rotate-45 after:top-[52px] after:-left-2 after:bg-lime-600 ">
                          <div className="*:size-12 *:text-lime-500 *:p-1 *:ms-auto">
                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M15.9 5c-.17 0-.32.09-.41.23l-.07.15-5.18 11.65c-.16.29-.26.61-.26.96 0 1.11.9 2.01 2.01 2.01.96 0 1.77-.68 1.96-1.59l.01-.03L16.4 5.5c0-.28-.22-.5-.5-.5zM1 9l2 2c2.88-2.88 6.79-4.08 10.53-3.62l1.19-2.68C9.89 3.84 4.74 5.27 1 9zm20 2 2-2a15.367 15.367 0 0 0-5.59-3.57l-.53 2.82c1.5.62 2.9 1.53 4.12 2.75zm-4 4 2-2c-.8-.8-1.7-1.42-2.66-1.89l-.55 2.92c.42.27.83.59 1.21.97zM5 13l2 2a7.1 7.1 0 0 1 4.03-2l1.28-2.88c-2.63-.08-5.3.87-7.31 2.88z"></path></svg>
                          </div>
                          <div className="flex flex-col justify-center items-center">
                              <div className="flex flex-1 flex-col justify-center items-center rounded-xl p-4">
                                  <div className="md:text-xl mt-4 sm:text-lg text-base font-medium leading-6 text-lime-500 ">
                                      Work/Life Balance
                                  </div>
                                  <p className="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center text-ellipsis w-full">In this fast pace world, time is literally money for any professional, we strive at making our product available to you on or before our promised date.</p>
                                </div>
                                <div className="flex absolute bottom-0 items-center justify-center">
                                  <div className="w-28 h-5 bg-lime-500 rounded-full border-t-4 border-lime-600 relative before:absolute before:w-12 before:aspect-[1/1] before:rounded-full before:bg-lime-500 before:-top-8 before:left-1/2 before:-translate-x-1/2 before:content-['C'] before:text-3xl before:font-bold before:text-white before:flex before:items-center before:justify-center "></div>
                                </div>
                          </div>
                            <div className="absolute top-5 py-1 left-0 flex flex-col justify-center items-center size-max bg-lime-500 px-5 rounded-r-full">
                              <div className="text-base font-semibold text-white">03</div>
                              <div className="text-base -mt-1 font-semibold text-white">STEP</div>
                            </div>
                      </div>
                      <div className=" group hover:shadow-2xl hover:shadow-rose-300 duration-300 bg-white p-4 pb-0 m-4 rounded-lg shadow-2xl relative before:absolute before:h-12 before:z-50 before:w-4 before:bg-rose-600 before:-left-4 before:top-5 after:absolute after:size-8 after:-z-10 after:rotate-45 after:top-[52px] after:-left-2 after:bg-rose-600 ">
                          <div className="*:size-12 *:text-rose-500 *:p-1 *:ms-auto">
                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M118.3 238.4c3.5-12.5 6.9-33.6 13.2-33.6 8.3 1.8 9.6 23.4 18.6 36.6 4.6-23.5 5.3-85.1 14.1-86.7 9-.7 19.7 66.5 22 77.5 9.9 4.1 48.9 6.6 48.9 6.6 1.9 7.3-24 7.6-40 7.8-4.6 14.8-5.4 27.7-11.4 28-4.7.2-8.2-28.8-17.5-49.6l-9.4 65.5c-4.4 13-15.5-22.5-21.9-39.3-3.3-.1-62.4-1.6-47.6-7.8l31-5zM228 448c21.2 0 21.2-32 0-32H92c-21.2 0-21.2 32 0 32h136zm-24 64c21.2 0 21.2-32 0-32h-88c-21.2 0-21.2 32 0 32h88zm34.2-141.5c3.2-18.9 5.2-36.4 11.9-48.8 7.9-14.7 16.1-28.1 24-41 24.6-40.4 45.9-75.2 45.9-125.5C320 69.6 248.2 0 160 0S0 69.6 0 155.2c0 50.2 21.3 85.1 45.9 125.5 7.9 12.9 16 26.3 24 41 6.7 12.5 8.7 29.8 11.9 48.9 3.5 21 36.1 15.7 32.6-5.1-3.6-21.7-5.6-40.7-15.3-58.6C66.5 246.5 33 211.3 33 155.2 33 87.3 90 32 160 32s127 55.3 127 123.2c0 56.1-33.5 91.3-66.1 151.6-9.7 18-11.7 37.4-15.3 58.6-3.4 20.6 29 26.4 32.6 5.1z"></path></svg>
                          </div>
                          <div className="flex flex-col justify-center items-center">
                              <div className="flex flex-1 flex-col justify-center items-center rounded-xl p-4">
                                  <div className="md:text-xl mt-4 sm:text-lg text-base font-medium leading-6 text-rose-500 ">
                                      Cutting Edge
                                  </div>
                                  <p className="mt-2 mb-10 sm:text-base text-sm leading-6 font-normal text-gray-500 text-center text-ellipsis w-full">We love the latest technologies, and we are more likely to work on the latest tech, rather than an outdated toolset, unless there is a specific requirement.</p>
                                </div>
                                <div className="flex absolute bottom-0 items-center justify-center">
                                  <div className="w-28 h-5 bg-rose-500 rounded-full border-t-4 border-rose-600 relative before:absolute before:w-12 before:aspect-[1/1] before:rounded-full before:bg-rose-500 before:-top-8 before:left-1/2 before:-translate-x-1/2 before:content-['D'] before:text-3xl before:font-bold before:text-white before:flex before:items-center before:justify-center "></div>
                                </div>
                          </div>
                            <div className="absolute top-5 py-1 left-0 flex flex-col justify-center items-center size-max bg-rose-500 px-5 rounded-r-full">
                              <div className="text-base font-semibold text-white">04</div>
                              <div className="text-base -mt-1 font-semibold text-white">STEP</div>
                            </div>
                      </div>
                  </div>
              </div>
          </div>
          <input type="checkbox" className="peer/hireModal mobileMenu hidden" name="hireModal" id="hireModal" />
          <label htmlFor="hireModal" className="fixed inset-0 -z-[1011] backdrop-blur-sm bg-gray-100/10 peer-checked/hireModal:z-[1010] peer-checked/hireModal:opacity-100 opacity-0 duration-100"></label>
          <div className="fixed  flex-col h-32 inset-y-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1011] w-full overflow-hidden bg-black/70 rounded-md text-black p-1 sm:max-w-xl max-w-lg sm:ring-1 sm:ring-black/10 peer-checked/hireModal:opacity-100 peer-checked/hireModal:flex opacity-0 hidden duration-300">
              <div className="bg-white size-full p-4 rounded-md">
                  <div className="flex justify-end">
                      <label htmlFor="hireModal" type="button" className="-m-2.5 rounded-md p-2.5 text-black border">
                          <span className="sr-only">Close menu</span>
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                      </label>
                  </div>
                  <div className="text-sky-500 font-semibold text-base text-center ">Share your resume at</div>
                  <div className="text-black font-semibold text-base text-center select-all">hr@imgglobalinfotech.com</div>
              </div>
          </div>
        </>
    );
}

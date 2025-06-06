export default function Disclaimer() {
    return (
        <>
            <div className="relative pt-16 md:pt-20 lg:pt-32 select-none">
                <div className="text-black/10">
                    <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
                        <defs>
                            <pattern id="t47" width="128" height="128" patternUnits="userSpaceOnUse" x="50%" patternTransform="translate(0 80)">
                                <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#t47)"></rect>
                    </svg>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 z-[1] relative py-10 shadow-md shadow-sky-950/20 border-2 bg-white my-10 rounded-xl">
                    <h1 className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black pb-8">
                        <span className="font-normal">Disclaimer - </span> 
                        <span className="font-bold text-theme4"> IMG Global Infotech</span>
                    </h1>
                    <div className="w-full text-sm md:text-base text-gray-600 flex flex-col gap-y-4">
                        <div>The information contained in this website is for general information purposes only. The information is provided by <b>IMG GLOBAL INFOTECH</b> and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.</div> 
                        <div>In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
                            Through this website you are able to link to other websites which are not under the control of <b>IMG GLOBAL INFOTECH</b> We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
                            <b>IMG Global Infotech</b> does not intend to infringe the copyright of any outlet by using images and content. For any copyright-related issues right to us and we would reply within 48 Hours.</div> 
                    </div>
                </div>
            </div>
        </>
    );
}

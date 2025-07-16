import Image from 'next/image';
import Svg from '@/components/svg';
import LeadForm from '@/components/leadForm';

export default function LeadPopup({ defaultType="Mobile App Development" }) {
    const computedType = defaultType || "Mobile App Development";
    return (
        <div className="size-full group/leadPopup fixed inset-0 z-[100000] px-4 has-[.leadPopup:checked]:opacity-100 has-[.leadPopup:checked]:pointer-events-auto opacity-0 pointer-events-none duration-500 flex flex-col items-center overflow-y-auto overflow-x-hidden">
            <input type="checkbox" name="leadPopup" id="leadPopup" className="hidden leadPopup" />
            <label htmlFor="leadPopup" className="fixed inset-0 z-0 bg-black/60 group-has-[.leadPopup:checked]/leadPopup:opacity-100 opacity-0 duration-500"></label>
            <div className="grow py-2"></div>
            <div className="max-w-5xl w-full flex flex-wrap items-stretch md:bg-[#2D86FF] md:rounded-4xl rounded-3xl lg:p-8 md:p-7 relative z-10 group-has-[.leadPopup:checked]/leadPopup:opacity-100 group-has-[.leadPopup:checked]/leadPopup:pointer-events-auto group-has-[.leadPopup:checked]/leadPopup:translate-y-0 group-has-[.leadPopup:checked]/leadPopup:scale-100 opacity-0 pointer-events-none scale-75 -translate-y-10 duration-500 transition-[cubic-bezier(0.74,_-0.03,_0.45,_1.23)]">
                <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/svg/popupLayer2.svg" alt="Popup Layer 2" title="Popup Layer 2" className="w-32 absolute top-0 right-1/2 aspect-[137/69] h-auto" width={137} height={69} />
                <div className="md:w-1/2 md:flex hidden flex-col relative select-none pointer-events-none">
                    <div className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg font-extrabold text-white md:pb-2 pb-1 relative">Hold on! <br/> Before you go..... <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/hangWaveIcon.webp" alt="Hold on! Before you go....." title="Hold on! Before you go....." className="size-8 shrink-0 inline" width={32} height={32}/></div>
                    <div className="xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm font-bold text-white">Grab your FREE personalized <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/starsIcon.webp" alt="Grab your FREE personalized" title="Grab your FREE personalized" className="size-7 shrink-0 inline -mt-6 ml-3" width={28} height={28}/></div>
                    <ul className="flex flex-col gap-3 mt-5">
                        <li className="flex items-start gap-3 lg:text-base md:text-sm sm:text-xs text-[10px] font-bold text-white"><Svg name="launch" className="size-5" /> <span>Custom Development Blueprint</span></li>
                        <li className="flex items-start gap-3 lg:text-base md:text-sm sm:text-xs text-[10px] font-bold text-white"><Svg name="moneyBag" className="size-5" /> <span>Personalized Budget Estimate</span></li>
                        <li className="flex items-start gap-3 lg:text-base md:text-sm sm:text-xs text-[10px] font-bold text-white"><Svg name="alarmOn" className="size-5" /> <span>Accurate Time-to-Market Projection</span></li>
                    </ul>
                    <div className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-black text-[#FFE539] md:pt-2 pb-1">Don’t Miss Out!</div>
                    <div className="lg:text-base md:text-sm sm:text-xs text-[10px] font-medium text-white pb-1">Our experts are ready to</div>
                    <div className="lg:text-base md:text-sm sm:text-xs text-[10px] font-bold text-white">help you kickstart your project</div>
                    <div className="pt-5">
                        <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/popupRecord.webp" alt="A proven track record admired by" title="A proven track record admired by" className="w-full max-w-80 aspect-[322/116]" width={322} height={116} />
                    </div>
                    <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/popupImage.webp" alt="help you kickstart your project" title="help you kickstart your project" className="max-w-44 w-full m-auto aspect-[176/257] shrink-0 absolute -translate-y-8 top-1/3 bottom-0 right-0 lg:block hidden" width={176} height={257} />
                    <Image loading="lazy" src="https://d1y41eupgbwbb2.cloudfront.net/images/svg/popupLayer3.svg" alt="Popup Layer 3" title="Popup Layer 3" className="w-20 absolute -bottom-6 right-8 aspect-square h-auto" width={80} height={80}/>
                </div>
                <div className="md:w-1/2 sm:w-10/12 w-full flex flex-col relative md:pl-5 max-md:mx-auto">
                    <div className="w-full flex flex-col rounded-4xl bg-white shadow-[0px_4px_14px_0px_#0000001F] md:p-7 p-6 h-full *:!px-0 [&_.safeInfo]:hidden *:!overflow-visible [&_.grid.grid-cols-2.gap-2]:max-sm:grid-cols-1 [&_.grid.grid-cols-2.gap-2]:max-sm:gap-1">
                        <label htmlFor="leadPopup" className="size-6 ml-auto relative shrink-0 cursor-pointer p-0.5 ring-1 ring-inset ring-[#78777D] rounded-full mb-7 hover:lg:ring-2 duration-300">
                            <Svg name="close" className="size-full" />
                        </label>
                        <LeadForm defaultType={computedType} />
                        <div className="md:text-xs text-[10px] font-medium text-[#5D6571] pt-4 text-center select-none pointer-events-none">
                            <Svg name="shield" className="w-5 aspect-square inline -mt-1 text-[#467CDB]" />
                            <span>Your Information will be safe with us</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grow py-2"></div>
        </div>
    );
}

import dynamic from 'next/dynamic';
import CaseStudySlides from './CaseStudySlides';

const CaseStudySwiper = dynamic(() => import('./CaseStudySwiper'), { ssr: false });

export default function CaseStudy() {
  return (
    <section className="caseStudySection w-full relative overflow-hidden bg-[#2D86FF]">
      <div className="!container flex xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8">
        <div className="flex flex-col w-full">
          <h2 className="w-full 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl md:font-bold font-semibold text-white text-balance relative z-10 md:text-center md:pb-4 pb-2">We Build Apps That Make a Difference</h2>
          <div className="w-full xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs md:font-medium font-normal text-white text-balance relative z-10 md:text-center md:pb-12 pb-5">Here is how we have created a success story for brands dreaming big and something exceptional.</div>
          <CaseStudySwiper>
            <CaseStudySlides />
          </CaseStudySwiper>
        </div>
      </div>
    </section>
  );
}

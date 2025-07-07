'use client';
import { Swiper, Autoplay, Navigation } from '@/components/CustomSwiper';
import Svg from '@/components/svg';
import { useInView } from 'react-intersection-observer';

export default function CaseStudySwiper({ children }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div ref={ref} className="min-h-[519.33px]">
      {inView && (
        <Swiper
          className="w-full swiper rounded-3xl"
          observer
          observeParents
          modules={[Autoplay, Navigation]}
          slidesPerView={1}
          spaceBetween={32}
          speed={1000}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          navigation={{ nextEl: '.next', prevEl: '.prev' }}
        >
          <div className="flex md:justify-center justify-end absolute inset-x-0 bottom-0 z-10">
            <div className="inline-flex items-center justify-center md:gap-8 gap-6 relative bg-[#2D86FF] md:rounded-t-3xl rounded-tl-3xl p-2">
              <Svg name="clipLeftBottom" className="size-6 absolute bottom-0 left-0 -translate-x-full z-10 text-[#2D86FF]" />
              <Svg name="clipRightBottom" className="size-6 absolute md:bottom-0 max-md:top-0 right-0 md:translate-x-full max-md:-translate-y-full z-10 max-md:-rotate-90 text-[#2D86FF]" />
              <div className="prev rounded-full size-10 bg-gradient-to-b from-white to-[#666666] p-px inline-flex items-center justify-center relative hover:lg:before:inset-1 before:duration-300 shadow-[0px_4px_4px_0px_#0000001F] before:absolute before:inset-0.5 before:m-auto before:bg-[#1D1D1D] before:rounded-full before:z-0">
                <Svg name="arrowPrev" className="size-6 relative z-10 text-white" />
              </div>
              <div className="next rounded-full size-10 bg-gradient-to-b from-white to-[#666666] p-px inline-flex items-center justify-center relative hover:lg:before:inset-1 before:duration-300 shadow-[0px_4px_4px_0px_#0000001F] before:absolute before:inset-0.5 before:m-auto before:bg-[#1D1D1D] before:rounded-full before:z-0">
                <Svg name="arrowNext" className="size-6 relative z-10 text-white" />
              </div>
            </div>
          </div>
          {children}
        </Swiper>
      )}
    </div>
  );
}

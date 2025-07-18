import dynamic from 'next/dynamic';
const HomeHero = dynamic(() => import('@/components/HomeHero'), {
  loading: () => <HomeHeroSkeleton />
})
import CoreServices from '@/components/HomePage/CoreServices';
const CaseStudy = dynamic(() => import('@/components/HomePage/CaseStudy'), {
  loading: () =>  <div className="flex justify-center items-center w-full min-h-[519.33px] bg-gray-300 animate-pulse"></div>
})

import Brands from '@/components/HomePage/Brands';
import Cta1 from '@/components/cta/Cta1';
import Portfolio1 from '@/components/portfolios/Portfolio1';
import AdvanceTech from '@/components/HomePage/AdvanceTech';
import Industries from '@/components/HomePage/Industries';
import QuickInsight from '@/components/HomePage/QuickInsight';
import WhyChooseUs from '@/components/HomePage/WhyChooseUs';
import Cta2 from '@/components/cta/Cta2';
import Usp from '@/components/Usp';
import Testimonial from '@/components/testimonials/Testimonial1';
import Faq from '@/components/Faq';
import HomeHeroSkeleton from '@/components/skeleton/HomeHeroSkeleton';
import getDynamicMeta from '@/helpers/getDynamicMeta';
import ContactUs from '@/components/ContactUs';
import Blog from '@/components/blog';

export async function generateMetadata() {
  return await getDynamicMeta('/');
}


export default function Home() {
  return (
    <>
      <HomeHero />
      <CoreServices/>
      <CaseStudy/>
      <Brands/>
      <Cta1/>
      <Portfolio1/>
      <AdvanceTech/>
      <Industries/>
      <QuickInsight/>
      <WhyChooseUs/>
      <Cta2/>
      <Usp/>
      <Testimonial/>
      <Faq/>
      <Blog/>
      <ContactUs defaultType="Mobile App Development" />
    </>
  );
}

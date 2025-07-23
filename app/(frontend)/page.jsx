import HomeHero from '@/components/HomeHero';
import CoreServices from '@/components/HomePage/CoreServices';
import CaseStudy from '@/components/HomePage/CaseStudy';
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
import getDynamicMeta from '@/helpers/getDynamicMeta';
import Blog from '@/components/blog';
import ContactUs from '@/components/ContactUs';

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

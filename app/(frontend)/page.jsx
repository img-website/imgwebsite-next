// export const dynamic = 'force-static';


import dynamic from 'next/dynamic';
import { fetchCurrentDynamicMeta } from '@/app/lib/dynamicMeta';
const HomeHero = dynamic(() => import('@/components/HomeHero'), {
  loading: () => <HomeHeroSkeleton />
})
import CoreServices from '@/components/HomePage/CoreServices';
const CaseStudy = dynamic(() => import('@/components/HomePage/CaseStudy'), {
  loading: () =>  <div className="flex justify-center items-center w-full min-h-[519.33px] bg-gray-300 animate-pulse"></div>
})

import Brands from '@/components/HomePage/Brands';
import Cta1 from '@/components/cta/Cta1';
const Portfolio1 = dynamic(() => import('@/components/portfolios/Portfolio1'), {
  loading: () =>  <div className="flex justify-center items-center w-full min-h-[436px] bg-gray-300 animate-pulse"></div>
})
import AdvanceTech from '@/components/HomePage/AdvanceTech';
import Industries from '@/components/HomePage/Industries';
import QuickInsight from '@/components/HomePage/QuickInsight';
import WhyChooseUs from '@/components/HomePage/WhyChooseUs';
import Cta2 from '@/components/cta/Cta2';
import Usp from '@/components/Usp';
const Testimonial = dynamic(() => import('@/components/testimonials/Testimonial1'), {
  loading: () =>  <div className="flex justify-center items-center w-full h-[565.39px] bg-gray-300 animate-pulse"></div>
})
import Faq from '@/components/Faq';
import HomeHeroSkeleton from '@/components/skeleton/HomeHeroSkeleton';


export async function generateMetadata() {
  return (await fetchCurrentDynamicMeta()) || {};
}


  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${process.env.NEXT_PUBLIC_BASE_URL}/#organization`,
        "url": process.env.NEXT_PUBLIC_BASE_URL,
        "name": "IMG Global Infotech",
        "sameAs": []
      },
      {
        "@type": "WebSite",
        "@id": `${process.env.NEXT_PUBLIC_BASE_URL}/#website`,
        "url": process.env.NEXT_PUBLIC_BASE_URL,
        "name": "IMG Global Infotech",
        "publisher": {
          "@id": `${process.env.NEXT_PUBLIC_BASE_URL}/#organization`
        }
      },
      {
        "@type": "WebPage",
        "@id": `${process.env.NEXT_PUBLIC_BASE_URL}/#webpage`,
        "url": process.env.NEXT_PUBLIC_BASE_URL,
        "inLanguage": "en-US",
        "name": "IMG Global Infotech | Mobile App Development & IT Consulting Agency in USA, UK, UAE & India",
        "isPartOf": { "@id": `${process.env.NEXT_PUBLIC_BASE_URL}/#website` },
        "datePublished": "2013-11-08T00:09:11-08:00",
        "dateModified": "2024-04-06T00:31:05-08:00",
        "description": "IMG Global Infotech is the best IT consulting Company that provides the best IT consulting services to startups, mid-size, medium-size and large-size businesses."
      }
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": process.env.NEXT_PUBLIC_BASE_URL
      }
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile App Development & IT Consulting Agency in USA, UK, UAE & India",
    "provider": {
      "@type": "Organization",
      "name": "IMG Global Infotech",
      "url": process.env.NEXT_PUBLIC_BASE_URL
    },
    "description": "IMG Global Infotech is the best IT consulting Company that provides the best app and web consulting services to startups, mid-size, medium-size and large-size businesses.",
    "url": process.env.NEXT_PUBLIC_BASE_URL,
    "mainEntityOfPage": process.env.NEXT_PUBLIC_BASE_URL,
    "areaServed": "Global",
    "serviceType": [
      "Mobile App Development",
      "Android App Development",
      "IOS App Development",
      "Cross Platform App Development",
      "Flutter App Development",
      "React Native App Development",
      "Website Development",
      "Bespoke Software Development",
      "Saas Software Development",
      "Inventory Management Software",
      "GYM Software Development",
      "CRM Software Development",
      "Fantasy Sports App Development",
      "Fantasy Cricket App Development",
      "Fantasy Football App Development",
      "Fantasy Kabaddi App Development",
      "Fantasy Stock Market App Development",
      "Sports Betting App Development",
      "Casino App Development",
      "eCommerce Development"
    ],
    "sameAs": [
      "https://www.facebook.com/imgglobalinfotech",
      "https://www.linkedin.com/company/imgglobalinfotech"
    ]
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IMG Global Infotech Inc.",
    "url": process.env.NEXT_PUBLIC_BASE_URL,
    "logo": "https://d1y41eupgbwbb2.cloudfront.net/images/xl-logo.webp",
    "sameAs": [
      "https://www.facebook.com/imgglobalinfotech",
      "https://twitter.com/imgglobal",
      "https://www.instagram.com/imgglobalinfotech",
      "https://www.youtube.com/@imgglobalinfotech",
      "https://www.linkedin.com/company/imgglobalinfotech"
    ]
  }
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What mobile app development services does IMG Global Infotech offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As a trusted and experienced mobile app development company, we offer a wide range of AI-powered mobile app development services such as:\n\nAndroid app development\niOS app development\nCross-platform app development\nFlutter app development\nReact Native app development and more.\n\nWe prioritize client satisfaction and go the extra mile to offer our clients outstanding solutions in the form of a mobile app."
        }
      },
      {
        "@type": "Question",
        "name": "How Do You Ensure the Security of My Data and That of My Users?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We care about the safety of your data. We use multiple layers of security like encryption both at rest and in motion, safe coding, and regular security checks. In addition, we follow the GDPR and other relevant data security rules, which means that data is treated with the utmost privacy and safety."
        }
      },
      {
        "@type": "Question",
        "name": "Does IMG Global Infotech offer post-release support and maintenance services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As a leading AI-driven digital transformation company, we provide best-in-class post-release and maintenance services. Whether you are building your app from scratch or upgrading from a legacy version, we are ready to assist you at every step."
        }
      },
      {
        "@type": "Question",
        "name": "What about other services such as integration and migration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IMG Global Infotech, a custom digital transformation solutions provider, offers an array of services fulfilling the digitalization needs of diverse industries. Whether you need to integrate APIs, software, or legacy systems or want to migrate to the latest technologies such as AI, Blockchain, IoT, etc., we are ready to help."
        }
      },
      {
        "@type": "Question",
        "name": "What types of specialization can I expect from IMG Global Infotech?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Serving all industry domains, the specialization you can expect from us includes:\n\nAI-powered app and software solutions\nSaaS product development\nAgile software development\nEmerging technology integration\nUI/UX designing and development\nFuturistic AI-driven E-commerce\nSoftware product engineering and more."
        }
      },
      {
        "@type": "Question",
        "name": "What are the benefits of AI-driven digital transformation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The digital transformation is the new normal, but it has some challenges. We are ready to assist in removing all roadblocks to your digital journey. The benefits our solutions can provide you with:\n\nImproved ROI\n2X growth\nEnhanced efficiency\nInformed decision making\nHigh profitability"
        }
      },
      {
        "@type": "Question",
        "name": "What’s required to start with IMG Global Infotech?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The answer is only an idea with a vision, and we ensure that we provide you with a futuristic solution to make your business dreams come true. But first, we want to know about your goals, which you can make simple for us by scheduling a discovery call."
        }
      },
      {
        "@type": "Question",
        "name": "What makes IMG Global Infotech different?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our win-win factor is simplifying challenges with a solution-oriented mindset. What makes us different is:\n\nFuture-ready solutions: Our talented professionals focus on futuristic solutions, leveraging their knowledge and skills in utilizing emerging technologies.\nProven Track Record: Since our inception, we have established ourselves as a trusted AI-driven solutions provider, ensuring quality and on-time delivery.\nTech+Human: We utilize a perfect combination of technology and human resources to deliver outstanding solutions that exceed our clients’ expectations."
        }
      }
    ]
  }


export default function Home() {
  return (
    <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(graphSchema).replace(/</g, '\\u003c'),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c'),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema).replace(/</g, '\\u003c'),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, '\\u003c'),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
          }}
        />
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
    </>
  );
}

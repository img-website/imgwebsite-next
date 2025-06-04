export const dynamic = 'force-static';


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

export const metadata = {
    title: "Mobile App Development & IT Consulting Services in USA | IMG Global Infotech",
    description: "IMG Global Infotech is a top mobile app development company in USA, UK, UAE, and India, providing expert IT consulting services for startups to large enterprises.",keywords: [
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
      title: "IMG Global Infotech | Mobile App Development & IT Consulting Agency in USA, UK, UAE & India",
      description: "IMG Global Infotech is the best IT consulting Company that provides the best IT consulting services to startups, mid-size, medium-size and large-size businesses.",
      images: [
        {
          url: 'https://d1y41eupgbwbb2.cloudfront.net/images/android-chrome-192x192.png',
          width: 1200,
          height: 630,
          alt: 'Mobile App Development & IT Consulting Services in USA | IMG Global Infotech',
          type: 'image/png',
        },
      ],
      url: process.env.NEXT_PUBLIC_BASE_URL,
    },
    twitter: {
      title: "IMG Global Infotech | Mobile App Development & IT Consulting Agency in USA, UK, UAE & India",
      description: "IMG Global Infotech is the best IT consulting Company that provides the best IT consulting services to startups, mid-size, medium-size and large-size businesses.",
      images: ["https://d1y41eupgbwbb2.cloudfront.net/images/android-chrome-192x192.png"]
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
      canonical: '/'
    }
};


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

  const corporationSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
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
            __html: JSON.stringify(corporationSchema).replace(/</g, '\\u003c'),
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

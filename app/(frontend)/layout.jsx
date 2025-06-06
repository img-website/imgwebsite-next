import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadPopup from "@/components/leadPopup";
import TawkToWidget from "@/components/TawkToWidget";
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
export default function RootLayout({ children }) {
  const LocalBusiness = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "IMG GLOBAL INFOTECH",
      "image": "https://d1y41eupgbwbb2.cloudfront.net/images/xl-logo.webp",
      "@id": `${process.env.NEXT_PUBLIC_BASE_URL}#localbusiness`,
      "url": `${process.env.NEXT_PUBLIC_BASE_URL}`,
      "telephone": "+91-9694097244",
      "priceRange": "$",
      "address": {
          "@type": "PostalAddress",
          "streetAddress": "880, Gautam Marg, Rani Sati Nagar, Nirman Nagar",
          "addressLocality": "Jaipur",
          "postalCode": "302019",
          "addressCountry": "IN"
      }  
  }
  const LocalBusiness2 = {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "IMG GLOBAL INFOTECH",
          "image": "https://d1y41eupgbwbb2.cloudfront.net/images/xl-logo.webp",
          "@id": `${process.env.NEXT_PUBLIC_BASE_URL}#localbusiness`,
          "url": `${process.env.NEXT_PUBLIC_BASE_URL}`,
          "telephone": "+91-9694097244",
          "priceRange": "$",
          "address": {
              "@type": "PostalAddress",
              "streetAddress": "P1-TH-099, Cherrywoods Phase 1, Al Yelaiss 1",
              "addressLocality": "Dubai",
              "postalCode": "16020",
              "addressCountry": "AE" 
          }   
  }
  const Organization = {
          "@context": "https://schema.org", 
          "@type": "Organization", 
          "name": "IMG Global Infotech", 
          "legalName" : "IMG Global Infotech", 
          "url": `${process.env.NEXT_PUBLIC_BASE_URL}`, 
          "logo": "https://d1y41eupgbwbb2.cloudfront.net/images/xl-logo.webp", 
          "foundingDate": "2014", 
          "founders": [ 
              { 
                  "@type": "Person", 
                  "name": "MOHIT KUMAR MITTAL" 
              }, 
              { 
                  "@type": "Person", 
                  "name": "NEERAJ SINGH RAJPUT" 
              } 
          ], 
          "address": { 
              "@type": "PostalAddress", 
              "streetAddress": "880, Rani Sati Nagar, Gautam Marg, Nirman Nagar", 
              "addressLocality": "Jaipur", 
              "addressRegion": "India", 
              "postalCode": "302019", 
              "addressCountry": "IN" 
          }, 
          "contactPoint": { 
              "@type": "ContactPoint", 
              "contactType": "customer support", 
              "telephone": "[+91-9694097244]", 
              "email": "info@imgglobalinfotech.com"
          },
          "areaServed": ["US","CA","GB","AD","AU","AT","BS","BH","IO","KM","CU","AR","CW","CY","DK","DM","EG","FK","FI","FR","DE","GR","GL","HK","IS","IN","ID","IT","JP","JE","JO","KW","KG","KR","MX","FM","NZ","NI","OM","PE","PH","PL","PT","QA","RO","RU","SA","SG","SE","SZ","CH","TH","TR","TN","UA","UM","AE","039","155","154","151","150"],
          "sameAs": [ 
              "https://www.facebook.com/imgglobalinfotech", 
              "https://x.com/imgglobal", 
              "https://www.instagram.com/imgglobalinfotech/", 
              "https://www.linkedin.com/company/imgglobalinfotech/", 
              "https://www.youtube.com/@imgglobalinfotech" 
          ]
  }
  const isProd = process.env.NODE_ENV === 'production'
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(LocalBusiness).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(LocalBusiness2).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(Organization).replace(/</g, '\\u003c'),
        }}
      />
        <Navbar/>
        <main>
        {children}
        </main>
        <LeadPopup/>
        <Footer/>
        {isProd && (
          <>
            <TawkToWidget />
            <GoogleAnalytics gaId="G-N2Q0NVDS4P" />
            <SpeedInsights/>
          </>
        )}
    </>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadPopup from "@/components/leadPopup";
import TawkToWidget from "@/components/TawkToWidget";
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
export default async function RootLayout({ children }) {
  async function getSchema(type) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/schema?global=true&type=${type}`, { cache: "no-store" });
      const json = await res.json();
      return json.success && json.data ? json.data.data : null;
    } catch {
      return null;
    }
  }

  const [lb, lb2, org] = await Promise.all([
    getSchema("LocalBusiness"),
    getSchema("LocalBusiness2"),
    getSchema("Organization"),
  ]);

  const toLd = (type, data) => {
    if (!data) return null;
    const base = {
      "@context": "https://schema.org",
      "@type": type === "LocalBusiness2" ? "LocalBusiness" : type,
    };
    if (type === "Organization") {
      const {
        streetAddress,
        addressLocality,
        addressRegion,
        postalCode,
        addressCountry,
        contactEmail,
        contactPhone,
        founders = [],
        ...rest
      } = data;
      const org = {
        ...base,
        ...rest,
        address: {
          "@type": "PostalAddress",
          streetAddress,
          addressLocality,
          addressRegion,
          postalCode,
          addressCountry,
        },
        founders: founders.map((name) => ({ "@type": "Person", name })),
      };
      if (contactEmail || contactPhone) {
        org.contactPoint = {
          "@type": "ContactPoint",
          ...(contactPhone ? { telephone: contactPhone } : {}),
          ...(contactEmail ? { email: contactEmail } : {}),
        };
      }
      return org;
    }
    if (type === "LocalBusiness" || type === "LocalBusiness2") {
      const {
        businessName,
        image,
        phoneNumber,
        priceRange,
        streetAddress,
        addressLocality,
        addressRegion,
        postalCode,
        addressCountry,
      } = data;

      const lb = {
        ...base,
        name: businessName,
        image,
        telephone: phoneNumber,
        priceRange,
        "@id": `${process.env.NEXT_PUBLIC_BASE_URL}#localbusiness`,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
        address: {
          "@type": "PostalAddress",
          streetAddress,
          addressLocality,
          addressRegion,
          postalCode,
          addressCountry,
        },
      };
      return lb;
    }
    if (type === "BreadcrumbList") {
      const { items = [] } = data;
      return {
        ...base,
        itemListElement: items.map((it, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: it.name,
          item: it.item,
        })),
      };
    }
    return { ...base, ...data };
  };

  const LocalBusiness = toLd("LocalBusiness", lb);
  const LocalBusiness2 = toLd("LocalBusiness2", lb2);
  const Organization = toLd("Organization", org);

  const isProd = process.env.NODE_ENV === 'production'
  return (
    <>
      {LocalBusiness && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(LocalBusiness).replace(/</g, '\\u003c'),
          }}
        />
      )}
      {LocalBusiness2 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(LocalBusiness2).replace(/</g, '\\u003c'),
          }}
        />
      )}
      {Organization && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(Organization).replace(/</g, '\\u003c'),
          }}
        />
      )}
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

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadPopup from "@/components/leadPopup";
import TawkToWidget from "@/components/TawkToWidget";
import PageSchema from "@/components/page-schema";
import FCMInit from "@/components/FCMInit";
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import schemaToLd from "@/helpers/schemaToLd";
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

  const LocalBusiness = schemaToLd("LocalBusiness", lb);
  const LocalBusiness2 = schemaToLd("LocalBusiness2", lb2);
  const Organization = schemaToLd("Organization", org);

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
        <PageSchema />
        <Navbar/>
        <main>
        {children}
        </main>
        <FCMInit />
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

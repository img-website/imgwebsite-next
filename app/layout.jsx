import { Poppins } from "next/font/google";
import "@/app/globals.css";
import { Toaster } from "sonner";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // choose weights you want
  variable: "--font-poppins",
  subsets: ["latin"],
});

export async function generateMetadata() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/meta/static`);
    const json = await res.json();
    const meta = json?.data;
    if (meta) {
      const toUrl = (name) =>
        name && !name.startsWith('http')
          ? `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/${name}`
          : name;
      meta.appleWebApp.startupImage.mainImageUrl = toUrl(
        meta.appleWebApp.startupImage.mainImageUrl
      );
      meta.appleWebApp.startupImage.url = toUrl(meta.appleWebApp.startupImage.url);
      meta.icons.icon = meta.icons.icon.map((i) => ({ ...i, url: toUrl(i.url) }));
      meta.icons.shortcut = toUrl(meta.icons.shortcut);
      meta.icons.apple = toUrl(meta.icons.apple);
      meta.icons.other = meta.icons.other.map((i) => ({ ...i, url: toUrl(i.url) }));
      meta.twitter.images = meta.twitter.images.map(toUrl);
      meta.openGraph.images = meta.openGraph.images.map((img) => ({ ...img, url: toUrl(img.url) }));

      return {
        metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
        referrer: 'origin-when-cross-origin',
        manifest: '/site.webmanifest',
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
        ...meta,
      };
    }
  } catch (err) {
    console.error('Error fetching static meta:', err);
  }
  return {};
}

export const viewport = {
  themeColor: '#000019',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  interactiveWidget: 'resizes-visual',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" className="scroll-smooth [scrollbar-width:thin] has-[.peer\/leadPopup:checked]:overflow-hidden [&_*]:tracking-[.5px]">
      <body
        className={`${poppins.variable} antialiased scroll font-poppins group overflow-x-hidden overflow-y-auto has-[.leadPopup:checked]:overflow-hidden`}
      >
        <Toaster position="bottom-center" richColors />
        {children}
      </body>
    </html>
  );
}

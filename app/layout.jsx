import { Poppins } from "next/font/google";
import "@/app/globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // choose weights you want
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://www.imgglobalinfotech.com'),
  title: {
    default: 'Mobile App Development & IT Consulting Services in USA | IMG Global Infotech',
    template: '%s',
  },
  description:
    'IMG Global Infotech is a top mobile app development company in USA, UK, UAE, and India, providing expert IT consulting services for startups to large enterprises.',
  keywords: [
    'Mobile App Development',
    'IT Consulting',
    'Software Development',
    'USA',
    'UK',
    'UAE',
    'India',
    'IMG Global Infotech',
  ],
  authors: [
    { name: 'Mr. Mohit Mittal' },
    { name: 'IMG Global Infotech', url: 'https://www.imgglobalinfotech.com' },
  ],
  creator: 'IMG Global Infotech',
  publisher: 'IMG Global Infotech',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  generator: 'Next.js 15.3.3 + Tailwind CSS',
  applicationName: 'IMG Global Infotech',
  referrer: 'origin-when-cross-origin',
  manifest: '/site.webmanifest',
  openGraph: {
    title:
      'IMG Global Infotech | Mobile App Development & IT Consulting Agency in USA, UK, UAE & India',
    description:
      'IMG Global Infotech is the best IT consulting Company that provides the best IT consulting services to startups, mid-size, medium-size and large-size businesses.',
    url: 'https://www.imgglobalinfotech.com/',
    siteName: 'IMG Global Infotech',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/android-chrome-192x192.png',
        width: 1200,
        height: 630,
        alt: 'IMG Global Infotech',
        type: 'image/jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IMG Global Infotech | Mobile App Development & IT Consulting Agency in USA, UK, UAE & India',
    description: 'IMG Global Infotech is the best IT consulting Company that provides the best IT consulting services to startups, mid-size, medium-size and large-size businesses.',
    site: '@imgglobal',
    creator: '@imgglobal',
    images: ['/android-chrome-192x192.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#000019',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon.png',
      },
    ],
  },
  verification: {
    google: process.env.NODE_ENV === 'production'
      ? 'bGEWH2c3JpZuiXFhSZGexm_7YdIzsPNhH2w7k6Buk-Q'
      : 'b3JyKKuxkNseCK4ci5FbXB7AQnSW5jFjBkdW22XWmsc',
    microsoft: process.env.NODE_ENV === 'production'
      ? '1CF4AABD4C8EFCCFAFF1458BE10E8FC8'
      : '',
    other: {
      fb: '151060611741013',
    },
  },
  appleWebApp: {
    title: 'IMG Global Infotech',
    statusBarStyle: 'black-translucent',
    capable: true,
    startupImage: [
      '/apple-touch-startup-image-768x1004.png',
      {
        url: '/apple-touch-startup-image-1536x2008.png',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
  category: 'technology',
  pinterest: {
    richPin: true,
  },
};

export const viewport = {
  themeColor: '#000019',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: 'resizes-visual',
};




export default function RootLayout({ children }) {
  return (
    <html lang="en-US" className="scroll-smooth [scrollbar-width:thin] has-[.peer\/leadPopup:checked]:overflow-hidden [&_*]:tracking-[.5px]">
      <body
        className={`${poppins.variable} antialiased scroll font-poppins group overflow-x-hidden overflow-y-auto has-[.leadPopup:checked]:overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

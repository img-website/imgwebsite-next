import { z } from 'zod';

const image = z.object({
  url: z.string().url(),
  width: z.number(),
  height: z.number(),
  alt: z.string(),
  type: z.string(),
});

export const staticMetaSchema = z.object({
  creator: z.string(),
  publisher: z.string(),
  applicationName: z.string(),
  verification: z.object({
    google: z.string(),
    microsoft: z.string(),
    other: z.object({ fb: z.string() }),
  }),
  appleWebApp: z.object({
    title: z.string(),
    statusBarStyle: z.string(),
    capable: z.boolean(),
    startupImage: z.object({
      mainImageUrl: z.string(),
      url: z.string(),
    }),
  }),
  icons: z.object({
    icon: z.array(z.object({ url: z.string(), sizes: z.string() })),
    shortcut: z.string(),
    apple: z.string(),
    other: z.array(z.object({ rel: z.string(), url: z.string(), color: z.string().optional() })),
  }),
  generator: z.string(),
  formatDetection: z.object({
    email: z.boolean(),
    address: z.boolean(),
    telephone: z.boolean(),
  }),
  pinterest: z.object({ richPin: z.boolean() }),
  category: z.string(),
  twitter: z.object({
    site: z.string(),
    creator: z.string(),
    images: z.array(z.string()),
  }),
  openGraph: z.object({
    url: z.string(),
    siteName: z.string(),
    locale: z.string(),
    type: z.string(),
    images: z.array(image),
  }),
  authors: z.array(z.object({ name: z.string(), url: z.string().optional() })),
  keywords: z.array(z.string()),
  description: z.string(),
  title: z.object({ default: z.string() }),
});

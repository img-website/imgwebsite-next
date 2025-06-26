import { z } from 'zod';

const image = z.object({
  url: z.string().min(1),
  width: z.coerce.number(),
  height: z.coerce.number(),
  alt: z.string().min(1),
  type: z.string().min(1),
});

export const staticMetaSchema = z.object({
  creator: z.string().min(1),
  publisher: z.string().min(1),
  applicationName: z.string().min(1),
  verification: z.object({
    google: z.string().min(1),
    microsoft: z.string().min(1),
    other: z.object({ fb: z.string().min(1) }),
  }),
  appleWebApp: z.object({
    title: z.string().min(1),
    statusBarStyle: z.string().min(1),
    capable: z.boolean(),
    startupImage: z.object({
      mainImageUrl: z.string().min(1),
      url: z.string().min(1),
    }),
  }),
  icons: z.object({
    icon: z.array(z.object({ url: z.string().min(1), sizes: z.string().min(1) })),
    shortcut: z.string().min(1),
    apple: z.string().min(1),
    other: z.array(z.object({ rel: z.string().min(1), url: z.string().min(1), color: z.string().optional() })),
  }),
  generator: z.string().min(1),
  formatDetection: z.object({
    email: z.boolean(),
    address: z.boolean(),
    telephone: z.boolean(),
  }),
  pinterest: z.object({ richPin: z.boolean() }),
  category: z.string().min(1),
  twitter: z.object({
    site: z.string().min(1),
    creator: z.string().min(1),
    images: z.array(z.string().min(1)),
  }),
  openGraph: z.object({
    url: z.string().min(1),
    siteName: z.string().min(1),
    locale: z.string().min(1),
    type: z.string().min(1),
    images: z.array(image),
  }),
  authors: z.array(z.object({ name: z.string().min(1), url: z.string().min(1).optional() })),
  keywords: z.array(z.string().min(1)),
  description: z.string().min(1),
  title: z.object({ default: z.string().min(1) }),
});

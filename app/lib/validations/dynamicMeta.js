import { z } from 'zod';

const requiredString = (name) => z.string({ required_error: `${name} is required` }).min(1, `${name} is required`);

const image = z.object({
  url: requiredString('Image URL'),
  width: z.coerce.number(),
  height: z.coerce.number(),
  alt: requiredString('Alt text'),
  type: requiredString('Image type'),
});

export const dynamicMetaSchema = z.object({
  pageUrl: requiredString('Page URL'),
  title: requiredString('Title'),
  description: requiredString('Description'),
  keywords: z.array(requiredString('Keyword')).optional(),
  openGraph: z.object({
    title: requiredString('OG title'),
    description: requiredString('OG description'),
    images: z.array(image),
    url: z.string().optional(),
  }),
  twitter: z.object({
    title: requiredString('Twitter title'),
    description: requiredString('Twitter description'),
    images: z.array(requiredString('Twitter image URL')),
  }),
  robots: z.object({
    index: z.boolean().optional(),
    follow: z.boolean().optional(),
    nocache: z.boolean().optional(),
    googleBot: z.object({
      index: z.boolean().optional(),
      follow: z.boolean().optional(),
      noimageindex: z.boolean().optional(),
      'max-video-preview': z.number().optional(),
      'max-image-preview': z.string().optional(),
      'max-snippet': z.number().optional(),
    }),
  }),
  other: z.object({ classification: z.string().optional() }).optional(),
  alternates: z.object({ canonical: z.string().optional() }).optional(),
});

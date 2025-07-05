import { z } from 'zod';

const requiredString = (name) => z.string({ required_error: `${name} is required` }).min(1, `${name} is required`);

const image = z.object({
  url: requiredString('Image URL'),
  width: z.coerce.number().default(1200),
  height: z.coerce.number().default(630),
  alt: requiredString('Alt text'),
  type: z
    .enum(['image/jpeg', 'image/png', 'image/webp'])
    .default('image/jpeg'),
});

export const dynamicMetaSchema = z.object({
  pageUrl: requiredString('Page URL'),
  title: requiredString('Title'),
  description: requiredString('Description'),
  keywords: z.array(requiredString('Keyword')).optional(),
  openGraph: z.object({
    title: requiredString('OG title'),
    description: requiredString('OG description'),
    images: z.array(image).max(1),
    url: z.string().optional(),
  }),
  twitter: z.object({
    title: requiredString('Twitter title'),
    description: requiredString('Twitter description'),
    images: z.array(requiredString('Twitter image URL')).max(1),
  }),
  robots: z
    .object({
      index: z.coerce.boolean().default(false),
      follow: z.coerce.boolean().default(false),
      nocache: z.coerce.boolean().default(false),
      googleBot: z
        .object({
          index: z.coerce.boolean().default(false),
          follow: z.coerce.boolean().default(false),
          noimageindex: z.coerce.boolean().default(false),
          'max-video-preview': z.number().default(-1),
          'max-image-preview': z.string().default('large'),
          'max-snippet': z.number().default(-1),
        })
        .default({}),
    })
    .default({}),
  other: z.object({ classification: z.string().optional() }).optional(),
  alternates: z.object({ canonical: z.string().optional() }).optional(),
});

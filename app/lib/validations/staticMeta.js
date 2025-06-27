import { z } from 'zod';

const requiredString = (name) =>
  z.string({ required_error: `${name} is required` }).min(1, `${name} is required`);

const image = z.object({
  url: requiredString('Image URL'),
  width: z.coerce.number(),
  height: z.coerce.number(),
  alt: requiredString('Alt text'),
  type: requiredString('Image type'),
});

export const staticMetaSchema = z.object({
  creator: requiredString('Creator'),
  publisher: requiredString('Publisher'),
  applicationName: requiredString('Application name'),
  verification: z.object({
    google: requiredString('Google verification'),
    microsoft: requiredString('Microsoft verification'),
    other: z.object({ fb: requiredString('Facebook verification') }),
  }),
  appleWebApp: z.object({
    title: requiredString('Apple web app title'),
    statusBarStyle: requiredString('Status bar style'),
    capable: z.boolean(),
    startupImage: z.object({
      mainImageUrl: requiredString('Startup main image URL'),
      url: requiredString('Startup image URL'),
    }),
  }),
  icons: z.object({
    icon: z.array(
      z.object({
        url: requiredString('Icon URL'),
        sizes: requiredString('Icon sizes'),
      })
    ),
    shortcut: requiredString('Shortcut icon'),
    apple: requiredString('Apple icon'),
    other: z.array(
      z.object({
        rel: requiredString('Rel'),
        url: requiredString('Icon URL'),
        color: z.string().optional(),
      })
    ),
  }),
  generator: requiredString('Generator'),
  formatDetection: z.object({
    email: z.boolean(),
    address: z.boolean(),
    telephone: z.boolean(),
  }),
  pinterest: z.object({ richPin: z.boolean() }),
  category: requiredString('Category'),
  twitter: z.object({
    site: requiredString('Twitter site'),
    creator: requiredString('Twitter creator'),
    images: z.array(requiredString('Twitter image URL')),
  }),
  openGraph: z.object({
    url: requiredString('OpenGraph URL'),
    siteName: requiredString('OpenGraph site name'),
    locale: requiredString('OpenGraph locale'),
    type: requiredString('OpenGraph type'),
    images: z.array(image),
  }),
  authors: z.array(
    z.object({
      name: requiredString('Author name'),
      url: requiredString('Author URL').optional(),
    })
  ),
  keywords: z.array(requiredString('Keyword')),
  description: requiredString('Description'),
  title: z.object({ default: requiredString('Title') }),
});

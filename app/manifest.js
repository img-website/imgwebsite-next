export default function manifest() {
  return {
    name: 'IMG Global Infotech',
    short_name: 'IMG',
    start_url: '/',
    display: 'standalone',
    background_color: '#000019',
    theme_color: '#000019',
    lang: 'en-US',
    orientation: 'portrait',
    prefer_related_applications: false,
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    description:
      'IMG Global Infotech is a leading mobile app and web development company in India, USA, UK & UAE, offering innovative IT consulting services.',
    categories: [
      'business',
      'technology',
      'software',
      'web development',
      'mobile app development',
      'IT consulting'
    ],
    screenshots: [
      {
        src: "https://d1y41eupgbwbb2.cloudfront.net/images/heroBot-768.webp",
        sizes: "1080x1920",
        type: "image/webp",
        form_factor: "wide"
      },
      {
        src: "https://d1y41eupgbwbb2.cloudfront.net/images/FuturisticAIPoweredMobileApps.webp",
        sizes: "1080x1920",
        type: "image/webp",
        form_factor: "wide"
      },
      {
        src: "https://d1y41eupgbwbb2.cloudfront.net/images/cta1Image.webp",
        sizes: "1080x1920",
        type: "image/webp",
        form_factor: "wide"
      }
    ],
    share_target: {
      action: "/?utm_medium=PWA&utm_source=share-target&share-target",
      method: "POST",
      enctype: "multipart/form-data",
      params: {
        files: [
          {
            name: "file",
            accept: [
              "image/*"
            ]
          }
        ]
      }
    }
  };
}

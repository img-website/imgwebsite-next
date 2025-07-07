export default function manifest() {
  return {
    name: 'IMG Global Infotech',
    short_name: 'IMG',
    description:
      'IMG Global Infotech is a leading mobile app and web development company in India, USA, UK & UAE, offering innovative IT consulting services.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000019',
    theme_color: '#000019',
    lang: 'en-US',
    orientation: 'portrait',
    prefer_related_applications: false,
    screenshots: [
      {
        src: "https://d1y41eupgbwbb2.cloudfront.net/images/heroBot-768.webp",
        sizes: "1080x1920",
        type: "image/webp"
      },
      {
        src: "https://d1y41eupgbwbb2.cloudfront.net/images/FuturisticAIPoweredMobileApps.webp",
        sizes: "1080x1920",
        type: "image/webp"
      },
      {
        src: "https://d1y41eupgbwbb2.cloudfront.net/images/cta1Image.webp",
        sizes: "1080x1920",
        type: "image/webp"
      }
    ],
    shortcuts: [
      {
        name: 'Home',
        url: '/',
        icons: [
          {
            src: '/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
            purpose: 'any',
          },
        ],
      },
      {
        name: 'Contact Us',
        url: '/contact-us',
        icons: [
          {
            src: '/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
            purpose: 'any',
          },
        ],
      },
    ],
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
  };
}

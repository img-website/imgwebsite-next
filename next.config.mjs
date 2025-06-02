
const withTM = require('next-transpile-modules');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1y41eupgbwbb2.cloudfront.net',
        pathname: '/**',
      },
    ],
  },
  compiler: {
    removeConsole: true,
  },
};

module.exports = withTM([
  'swiper',
  'swiper/react', // Important: Include this if you're using the React components
])(nextConfig);

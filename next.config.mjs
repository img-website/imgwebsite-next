
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1y41eupgbwbb2.cloudfront.net',
        pathname: '/images/**',
      },
    ],
  },
  compiler: {
    removeConsole: true,
    turbopack: false,
  },
};

export default nextConfig;

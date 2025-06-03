
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [],
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 2678400, // 31 days
    dangerouslyAllowSVG: true,
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
  },
};

export default nextConfig;

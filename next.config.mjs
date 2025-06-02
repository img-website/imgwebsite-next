/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1y41eupgbwbb2.cloudfront.net',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    legacyBrowsers: false, // 🚫 Stop supporting old browsers like IE11
  },
  compiler: {
    removeConsole: true,
  },
};

export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 2678400, // 31 days
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1y41eupgbwbb2.cloudfront.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'imgglobalinfotech-website.s3.ap-south-1.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['swiper'],
    staticGenerationRetryCount: 1,
    staticGenerationMaxConcurrency: 8,
    staticGenerationMinPagesPerWorker: 25,
    useCache: true
  },
  transpilePackages: ['swiper'],
};

export default nextConfig;

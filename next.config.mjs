
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
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'https://imgglobalinfotech-website.s3.ap-south-1.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    cssChunking: true, // default
    // inlineCss: true,
    optimizePackageImports: ['swiper'],
    staticGenerationRetryCount: 1,
    staticGenerationMaxConcurrency: 8,
    staticGenerationMinPagesPerWorker: 25,
    useCache: true,
    webVitalsAttribution: ['CLS', 'LCP'],
  },
  transpilePackages: ['swiper'],
};

export default nextConfig;

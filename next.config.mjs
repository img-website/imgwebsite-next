
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
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    // inlineCss: true,
    // optimizePackageImports: ['swiper'],
    // staticGenerationRetryCount: 1,
    // staticGenerationMaxConcurrency: 8,
    // staticGenerationMinPagesPerWorker: 25,
    // useCache: true
    serverActions: {
      allowedOrigins: ['localhost:3000']
    }
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          // Content Security Policy is set via middleware with a nonce
        ]
      },
      {
        source: '/sw.js',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/javascript; charset=utf-8'
          },
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self'"
          }
        ]
      }
    ]
  },
  // transpilePackages: ['swiper'],
};

export default nextConfig;

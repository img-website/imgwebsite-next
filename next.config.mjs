
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
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self' https: blob:; connect-src 'self' https://ipinfo.io https://cdn.tiny.cloud https://embed.tawk.to https://va.tawk.to wss://*.tawk.to https://www.googletagmanager.com https://www.google-analytics.com; img-src 'self' https://cdn.tiny.cloud blob: data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.tiny.cloud https://www.googletagmanager.com https://embed.tawk.to; style-src 'self' 'unsafe-inline' https://cdn.tiny.cloud https://embed.tawk.to; font-src 'self' 'unsafe-inline' data: https://cdn.tiny.cloud"
          }
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

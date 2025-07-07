import { NextResponse } from 'next/server';

/**
 * Security middleware to add security headers and handle CORS
 * @param {Request} req - Next.js request object
 * @returns {NextResponse} Next.js response object with security headers
 */
export function securityMiddleware(req) {
  const response = NextResponse.next();

  // CORS headers
  response.headers.set('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGINS || '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  response.headers.set('Access-Control-Max-Age', '86400'); // 24 hours

  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  response.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self' https: blob:",
      "connect-src 'self' https://ipinfo.io https://cdn.tiny.cloud https://embed.tawk.to https://www.googletagmanager.com https://www.google-analytics.com",
      "img-src 'self' https://cdn.tiny.cloud blob: data: https:",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.tiny.cloud https://www.googletagmanager.com https://embed.tawk.to",
      "style-src 'self' 'unsafe-inline' https://cdn.tiny.cloud",
      "font-src 'self' 'unsafe-inline' data: https://cdn.tiny.cloud",
    ].join('; ')
  );
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');

  return response;
} 
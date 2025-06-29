import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { getRedirections } from './app/lib/redirections';

async function verifyToken(token) {
    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const { payload } = await jwtVerify(token, secret);
        return payload; // Return decoded payload
    } catch (error) {
        console.log(`❤️  ${error.message}`);
        return null;
    }
}

export const config = {
  matcher: '/:path*'
};

export async function middleware(request) {
  // Add security headers
  const response = NextResponse.next();

  // CORS headers
  response.headers.set('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGINS || '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  response.headers.set('Access-Control-Max-Age', '86400');

  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  response.headers.set('Content-Security-Policy', "default-src 'self' https://cdn.tiny.cloud; img-src 'self' https://cdn.tiny.cloud blob: data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.tiny.cloud; style-src 'self' 'unsafe-inline' https://cdn.tiny.cloud; font-src 'self' 'unsafe-inline' data: https://cdn.tiny.cloud;");
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');

  const { pathname, search, origin } = request.nextUrl;

  if (pathname.startsWith('/api') || pathname.startsWith('/_next')) {
    return response;
  }

  const redirects = await getRedirections(origin);
  const pathWithQuery = pathname + search;
  const match = redirects.find(r => r.from === pathWithQuery || r.from === pathname);
  if (match) {
    const url = match.to.startsWith('http') ? match.to : `${origin}${match.to}`;
    return NextResponse.redirect(url, match.methodCode);
  }

    const token = request.cookies.get('token')?.value;
    let decodedToken = null;

    // Verify the token if present
    if (token) {
        decodedToken = await verifyToken(token);
    }

    const isLoggedIn = !!decodedToken;
    const isRole = decodedToken?.role;
    const isEmail = decodedToken?.email;

    // If token verification fails, clear the token cookies
    if (token && !decodedToken) {
        const response = NextResponse.redirect(new URL("/", request.url));
        response.cookies.set("token", "", { maxAge: -1, path: "/" }); // Remove token cookie
        response.cookies.set("userEmail", "", { maxAge: -1, path: "/" }); // Remove token cookie
        response.cookies.set("userRole", "", { maxAge: -1, path: "/" }); // Remove token cookie
        return response;
    }

    // Bypass middleware for login and register API routes to avoid redirect loop
    if (pathname.startsWith("/api/admin/login") || pathname.startsWith("/api/admin/register") || pathname.startsWith("/api/admin/forgot-password") || pathname.startsWith("/api/admin/reset-password")) {
        return NextResponse.next();
    }

    if (pathname.startsWith("/register")) {
        if (!isLoggedIn) {
            return NextResponse.redirect(new URL(`/login?redirectTo=${pathname}`, request.url));
        }
        if (isRole !== "superadmin") {
            const redirectUrl = isRole === "admin" ? "/admin" : "/";
            return NextResponse.redirect(new URL(redirectUrl, request.url));
        }
    }

    if (pathname.startsWith("/admin/departments")) {
        if (!isLoggedIn || isRole !== "superadmin") {
            return NextResponse.redirect(new URL(isLoggedIn ? "/admin" : `/login?redirectTo=${pathname}`, request.url));
        }
    }
    // If the user is not logged in and trying to access admin pages, redirect to /login
    if (!isLoggedIn && pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL(`/login?redirectTo=${pathname}`, request.url));
    }

    // If the user is not logged in and trying to access blog pages, redirect to /login
    if (!isLoggedIn && pathname.startsWith("/blog")) {
        return NextResponse.redirect(new URL(`/login?redirectTo=${pathname}`, request.url));
    }

    // Logic when the user is logged in
    if (isLoggedIn) {
        // Admin Role Handling
        if (isRole === "admin") {
            // If logged in as admin, prevent access to /login or /register
            if (pathname.startsWith("/login") || pathname.startsWith("/register") || pathname.startsWith("/forgot-password") || pathname.startsWith("/reset-password")) {
                const response = NextResponse.redirect(new URL("/admin", request.url));
                response.cookies.set("userEmail", isEmail, { maxAge: 86400, path: "/" });
                response.cookies.set("userRole", isRole, { maxAge: 86400, path: "/" });
                return response;
            }
        }

        // User Role Handling
        if (isRole === "user") {
            // Prevent users from accessing admin pages
            if (pathname.startsWith("/admin")) {
                return NextResponse.redirect(new URL("/", request.url));
            }

            // If logged in as user, prevent access to /login or /register or forgot-password or reset-password
            if (pathname.startsWith("/login") || pathname.startsWith("/register") || pathname.startsWith("/forgot-password") || pathname.startsWith("/reset-password")) {
                const response = NextResponse.redirect(new URL("/", request.url));
                response.cookies.set("userEmail", isEmail, { maxAge: 86400, path: "/" });
                response.cookies.set("userRole", isRole, { maxAge: 86400, path: "/" });
                return response;
            }
        }
    }

    // If user tries to access /register or /forgot-password or /reset-password and is already logged in
    if (pathname.startsWith("/register") || pathname.startsWith("/forgot-password") || pathname.startsWith("/reset-password")) {
        if (isLoggedIn && isRole !== "superadmin") {
            const redirectUrl = isRole === "admin" ? "/admin" : "/";
            return NextResponse.redirect(new URL(redirectUrl, request.url));
        }
    }

    if (isLoggedIn && isRole) {
        response.cookies.set("userEmail", isEmail, { maxAge: 86400, path: "/" });
        response.cookies.set("userRole", isRole, { maxAge: 86400, path: "/" });
    }

  return response;
}

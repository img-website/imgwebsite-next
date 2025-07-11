import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { getRedirections } from './app/lib/redirections';

function getModuleAction(pathname) {
  if (!pathname.startsWith('/admin')) return null;
  if (pathname.startsWith('/admin/profile')) return null;
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length < 2) return null;
  let mod = parts[1];
  if (mod === 'blogs' && ['authors','categories','images'].includes(parts[2])) {
    mod = parts[2];
    parts.splice(2, 1);
  }
  if (mod === 'schema') mod = 'schemas';
  let action = 'read';
  if (parts.includes('add')) action = 'write';
  if (parts.includes('edit')) action = 'edit';
  return { module: mod, action };
}

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
  response.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self' https: blob:",
      "connect-src 'self' https://ipinfo.io https://cdn.tiny.cloud https://embed.tawk.to https://va.tawk.to wss://*.tawk.to https://www.googletagmanager.com https://www.google-analytics.com",
      "img-src 'self' https://cdn.tiny.cloud blob: data: https:",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.tiny.cloud https://www.googletagmanager.com https://embed.tawk.to",
      "style-src 'self' 'unsafe-inline' https://cdn.tiny.cloud https://embed.tawk.to",
      "font-src 'self' 'unsafe-inline' data: https://cdn.tiny.cloud https://embed.tawk.to",
    ].join('; ')
  );
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');

  const { pathname, search, origin } = request.nextUrl;

  if (pathname.startsWith('/api') || pathname.startsWith('/_next')) {
    return response;
  }

  if (pathname.startsWith('/blogs/')) {
    const redirects = await getRedirections(origin);
    const pathWithQuery = pathname + search;
    const match = redirects.find(
      (r) => r.from === pathWithQuery || r.from === pathname,
    );
    if (match) {
      const url = match.to.startsWith('http')
        ? match.to
        : `${origin}${match.to}`;
      return NextResponse.redirect(url, match.methodCode);
    }
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

    const permStamp = request.cookies.get('permissionsStamp')?.value;
    const shouldCheckPermissions = pathname.startsWith('/admin') || pathname.startsWith('/blog');
    if (shouldCheckPermissions && decodedToken && permStamp) {
        try {
            const res = await fetch(`${origin}/api/v1/admin/admins/me`, {
                headers: { Authorization: `Bearer ${token}` },
                cache: 'no-store'
            });
            if (res.ok) {
                const json = await res.json();
                const rec = json.data;
                if (rec && rec.permissionsUpdatedAt && permStamp !== rec.permissionsUpdatedAt) {
                    const resLogout = NextResponse.redirect(new URL(`/login?redirectTo=${pathname}`, request.url));
                    resLogout.cookies.set("token", "", { maxAge: -1, path: "/" });
                    resLogout.cookies.set("userEmail", "", { maxAge: -1, path: "/" });
                    resLogout.cookies.set("userRole", "", { maxAge: -1, path: "/" });
                    resLogout.cookies.set("userPermissions", "", { maxAge: -1, path: "/" });
                    resLogout.cookies.set("permissionsStamp", "", { maxAge: -1, path: "/" });
                    return resLogout;
                }
            }
        } catch (err) {
            console.error('Failed to check permissions stamp', err);
        }
    }

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

    if (pathname.startsWith("/admin/new-admin")) {
        if (!isLoggedIn) {
            return NextResponse.redirect(new URL(`/login?redirectTo=${pathname}`, request.url));
        }
        if (isRole !== "superadmin") {
            const redirectUrl = isRole === "admin" ? "/admin" : "/";
            return NextResponse.redirect(new URL(redirectUrl, request.url));
        }
    }

    if (pathname.startsWith("/admin/departments") || pathname.startsWith("/admin/admins")) {
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
            // If logged in as admin, prevent access to /login or /admin/new-admin
            if (pathname.startsWith("/login") || pathname.startsWith("/admin/new-admin") || pathname.startsWith("/forgot-password") || pathname.startsWith("/reset-password")) {
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

            // If logged in as user, prevent access to /login or /admin/new-admin or forgot-password or reset-password
            if (pathname.startsWith("/login") || pathname.startsWith("/admin/new-admin") || pathname.startsWith("/forgot-password") || pathname.startsWith("/reset-password")) {
                const response = NextResponse.redirect(new URL("/", request.url));
                response.cookies.set("userEmail", isEmail, { maxAge: 86400, path: "/" });
                response.cookies.set("userRole", isRole, { maxAge: 86400, path: "/" });
                return response;
            }
        }
    }

    // If user tries to access /admin/new-admin or /forgot-password or /reset-password and is already logged in
    if (pathname.startsWith("/admin/new-admin") || pathname.startsWith("/forgot-password") || pathname.startsWith("/reset-password")) {
        if (isLoggedIn && isRole !== "superadmin") {
            const redirectUrl = isRole === "admin" ? "/admin" : "/";
            return NextResponse.redirect(new URL(redirectUrl, request.url));
        }
    }

    if (isLoggedIn && isRole) {
        response.cookies.set("userEmail", isEmail, { maxAge: 86400, path: "/" });
        response.cookies.set("userRole", isRole, { maxAge: 86400, path: "/" });
    }

    if (isLoggedIn && isRole !== "superadmin" && pathname.startsWith("/admin")) {
        const permData = request.cookies.get('userPermissions')?.value || '';
        let perms = {};
        if (permData) {
            try { perms = JSON.parse(Buffer.from(permData, 'base64').toString()); } catch { perms = {}; }
        }
        const info = getModuleAction(pathname);
        if (info) {
            if (!perms[info.module] || !perms[info.module][info.action]) {
                return NextResponse.redirect(new URL('/admin', request.url));
            }
        }
    }

  return response;
}

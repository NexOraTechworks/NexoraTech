
import { NextResponse } from "next/server";

const protectedRoute = ["/admin"];

export function proxy(request) {
    const path = request.nextUrl.pathname;
    const token = request.cookies.get("token")?.value;

    const isProtectedRoute = protectedRoute.some(
        (route) =>
            path === route || path.startsWith(`${route}/`)
    );

    const isLoginPage = path === "/admin/login";

    if (isProtectedRoute && !isLoginPage && !token) {
        return NextResponse.redirect(
            new URL("/admin/login", request.url)
        );
    }

    if (isLoginPage && token) {
        return NextResponse.redirect(
            new URL("/admin", request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};

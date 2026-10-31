
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();

        // Forward login request to Express backend
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            }
        );

        const data = await response.json();

        // Handle backend login errors
        if (!response.ok) {
            return NextResponse.json(data, {
                status: response.status,
            });
        }

        // Get individual cookies from backend response
        const cookies = response.headers.getSetCookie();

        // Find the authentication token cookie
        const tokenCookie = cookies.find((cookie) =>
            cookie.startsWith("token=")
        );

        if (!tokenCookie) {
            return NextResponse.json(
                { message: "Authentication cookie missing" },
                { status: 500 }
            );
        }

        // Extract JWT from cookie
        const token = tokenCookie
            .split(";")[0]
            .substring("token=".length);

        if (!token) {
            return NextResponse.json(
                { message: "Authentication token missing" },
                { status: 500 }
            );
        }

        // Create response and set cookie on Vercel domain
        const result = NextResponse.json(data);

        result.cookies.set("token", decodeURIComponent(token), {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            path: "/",
            maxAge: 7 * 24 * 60 * 60,
        });

        return result;

    } catch (error) {
        console.error("Login proxy error:", error);

        return NextResponse.json(
            { message: "Unable to connect to authentication server" },
            { status: 500 }
        );
    }
}

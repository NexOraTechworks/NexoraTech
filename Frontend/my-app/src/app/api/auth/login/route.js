
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();

        const backendResponse = await fetch(
            `${process.env.BACKEND_URL}/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            }
        );

        const data = await backendResponse.json();

        if (!backendResponse.ok) {
            return NextResponse.json(data, {
                status: backendResponse.status,
            });
        }

        const cookies = backendResponse.headers.getSetCookie();
        const tokenCookie = cookies.find(cookie =>
            cookie.startsWith("token=")
        );

        if (!tokenCookie) {
            return NextResponse.json(
                { message: "Login succeeded, but no authentication cookie was received." },
                { status: 500 }
            );
        }

        const token = tokenCookie
            .split(";")[0]
            .substring("token=".length);

        const response = NextResponse.json(data);

        response.cookies.set("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            path: "/",
            maxAge: 7 * 24 * 60 * 60,
        });

        return response;

    } catch (error) {
        console.error("Login proxy error:", error);

        return NextResponse.json(
            { message: "Unable to connect to backend." },
            { status: 500 }
        );
    }
}

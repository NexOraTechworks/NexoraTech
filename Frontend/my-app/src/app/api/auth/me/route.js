
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;

        if (!token) {
            return NextResponse.json(
                { message: "Not authenticated" },
                { status: 401 }
            );
        }

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/me`,
            {
                method: "GET",
                headers: {
                    Cookie: `token=${token}`,
                },
                cache: "no-store",
            }
        );

        const data = await response.json();

        return NextResponse.json(data, {
            status: response.status,
        });

    } catch (error) {
        console.error("Me proxy error:", error);

        return NextResponse.json(
            { message: "Unable to verify session" },
            { status: 500 }
        );
    }
}


import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// GET: Fetch all projects
export async function GET() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;

        if (!token) {
            return NextResponse.json(
                { message: "Authentication token is required" },
                { status: 401 }
            );
        }

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`,
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
        console.error("Fetch projects proxy error:", error);

        return NextResponse.json(
            { message: "Unable to fetch projects" },
            { status: 500 }
        );
    }
}


// POST: Create a new project
export async function POST(request) {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;

        if (!token) {
            return NextResponse.json(
                { message: "Authentication token is required" },
                { status: 401 }
            );
        }

        // Read multipart form data from the frontend
        const formData = await request.formData();

        // Forward the form data and JWT to Express
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`,
            {
                method: "POST",
                headers: {
                    Cookie: `token=${token}`,
                },
                body: formData,
                cache: "no-store",
            }
        );

        const data = await response.json();

        return NextResponse.json(data, {
            status: response.status,
        });

    } catch (error) {
        console.error("Create project proxy error:", error);

        return NextResponse.json(
            { message: "Unable to create project" },
            { status: 500 }
        );
    }
}

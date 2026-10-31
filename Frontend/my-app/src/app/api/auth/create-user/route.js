
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request) {
  try {
    const body = await request.json();

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Authentication token is required" },
        { status: 401 }
      );
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/create-user`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: `token=${token}`,
        },
        body: JSON.stringify(body),
        cache: "no-store",
      }
    );

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("Create user proxy error:", error);

    return NextResponse.json(
      { message: "Unable to create user" },
      { status: 500 }
    );
  }
}

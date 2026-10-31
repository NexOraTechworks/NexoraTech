
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Authentication token is required" },
        { status: 401 }
      );
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/${id}`,
      {
        method: "DELETE",
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
    console.error("Delete project proxy error:", error);

    return NextResponse.json(
      { message: "Unable to delete project" },
      { status: 500 }
    );
  }
}

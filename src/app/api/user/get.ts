import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GetUserInfo(response: Response, request: Request) {
    const session = await getServerSession();
    return NextResponse.json({ message: "Hello, World!" });
}

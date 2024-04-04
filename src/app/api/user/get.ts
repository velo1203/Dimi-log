import { getUser } from "@/model/user.model";
import { Http2ServerRequest } from "http2";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GetUserInfo() {
    const session: any = await getServerSession();
    if (!session) {
        return NextResponse.json({ error: "Not authorized" }, { status: 401 });
    }
    const user = await getUser(session.user.email);

    return NextResponse.json(user);
}

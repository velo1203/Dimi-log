import { getUserStatus } from "@/model/user.model";
import { Http2ServerRequest } from "http2";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GetUserInfo(response: Response, request: Request) {
    const session: any = await getServerSession();
    if (!session) {
        return NextResponse.json({ error: "Not authorized" }, { status: 401 });
    }
    const status = await getUserStatus(session.user.email);
    if (!status?.status) {
        return NextResponse.json({ status: "활동중이지 않습니다" });
    }
    return NextResponse.json(status);
}

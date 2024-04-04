import { getSetting } from "@/model/setting.model";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GetSettingInfo(response: Response, request: Request) {
    const session: any = await getServerSession();
    if (!session) {
        return NextResponse.json({ error: "Not authorized" }, { status: 401 });
    }
    const setting = await getSetting(session.user.email);
    return NextResponse.json(setting);
}

import { ChangeAllUserStatusToSelfStudy } from "@/model/status.model";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
    try {
        await ChangeAllUserStatusToSelfStudy();
    } catch (error) {}

    return NextResponse.json({ ok: true });
}

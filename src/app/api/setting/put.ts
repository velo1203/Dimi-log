import { updateSetting } from "@/model/setting.model";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const Setting = z.object({
    department: z.string(),
    grade: z.string(),
    classNumber: z.string().min(1),
    club: z.string().optional(),
    afterSchool: z.string().optional(),
});

export async function putSetting(request: NextRequest) {
    try {
        const session: any = await getServerSession();
        if (!session) {
            return NextResponse.json(
                { error: "Not authorized" },
                { status: 401 }
            );
        }
        const setting = await request.json();
        Setting.parse(setting); // Validate settin  g
        await updateSetting(session.user.email, setting);
        return NextResponse.json({ message: "Setting updated" });
    } catch (e: any) {
        return NextResponse.json({ error: "failed" }, { status: 400 });
    }
}

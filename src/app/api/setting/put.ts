import { updateSetting } from "@/model/setting.model";
import { getUserByEmail } from "@/model/user.model";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import classkey from "@/config/classconfig.json";

const SettingNotverify = z.object({
    classNumber: z.string().min(1),
    club: z.string().optional(),
    afterSchool: z.string().optional().nullable(),
    verifycode: z.string().nullable(),
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
        const user = await getUserByEmail(session.user.email);
        const setting = await request.json();
        if (user?.verified === false) {
            SettingNotverify.parse(setting); // Validate settin
            const ClassKey = classkey[setting.classNumber];
            if (ClassKey && setting.verifycode === ClassKey) {
                setting.verifycode = null;
            }
        }
        await updateSetting(session.user.email, setting);
        return NextResponse.json({ message: "Setting updated" });
    } catch (e: any) {
        console.log(e);
        return NextResponse.json({ error: "failed" }, { status: 400 });
    }
}

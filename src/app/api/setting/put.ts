import { updateSetting } from "@/model/setting.model";
import { getUserByEmail } from "@/model/user.model";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const classkey = JSON.parse(
    Buffer.from(process.env.CLASS_CODE || "", "base64").toString("utf-8")
);

const SettingNotverify = z.object({
    classNumber: z.string().min(1),
    club: z.string().optional(),
    afterSchool: z.string().optional().nullable(),
    verifycode: z.string().nullable(),
});

const Settingverify = z.object({
    club: z.string().optional(),
    afterSchool: z.string().optional().nullable(),
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
        if (setting.club === null) {
            setting.club = "선택되지 않음";
        }

        console.log("Setting", setting);
        if (user?.verified === false) {
            console.log("User not verified", setting.verifycode, setting);

            SettingNotverify.parse(setting);

            const ClassKey: string | undefined =
                classkey[setting.classNumber as keyof typeof classkey];

            if (ClassKey && setting.verifycode === ClassKey) {
                delete setting.verifycode;
                setting.verified = true;
            } else {
                return NextResponse.json(
                    { message: "Invalid verify code" },
                    { status: 401 }
                );
            }
        } else {
            Settingverify.parse(setting);
        }

        await updateSetting(session.user.email, setting);
        return NextResponse.json({ message: "Setting updated" });
    } catch (e: any) {
        console.log(e);
        return NextResponse.json({ error: e }, { status: 400 });
    }
}

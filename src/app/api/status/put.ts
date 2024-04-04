import { getSetting, updateSetting } from "@/model/setting.model";
import { updateStatus } from "@/model/status.model";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const Status = z.object({
    status: z.string(),
    moreinfo: z.string().optional(),
});

export async function putStatus(request: NextRequest) {
    try {
        const session: any = await getServerSession();
        if (!session) {
            return NextResponse.json(
                { error: "Not authorized" },
                { status: 401 }
            );
        }
        const status = await request.json();
        Status.parse(status); // Validate settin  g
        const setting: any = await getSetting(session.user.email);
        let statusMsg;
        switch (status.status) {
            case "Club":
                statusMsg = "창업동아리(" + setting.club + ") 활동중입니다.";
                break;
            case "AfterSchool":
                statusMsg =
                    "방과후 (" + setting.afterSchool + ") 활동중입니다.";
                break;
            case "Others":
                statusMsg = "기타 활동중입니다.";
                break;
            case "SelfStudy":
                statusMsg = "자율학습중입니다.";
                break;
        }
        await updateStatus(
            {
                statuscategory: status.status,
                status: statusMsg,
                statusmoreInfo: status.moreinfo,
            },
            session.user.email
        );
        return NextResponse.json({ message: "status changed" });
    } catch (e: any) {
        console.log(e);
        return NextResponse.json({ error: "failed" }, { status: 400 });
    }
}

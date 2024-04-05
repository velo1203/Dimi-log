import { getStatusList } from "@/model/statuslist.model";
import { getUserByEmail } from "@/model/user.model";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function getUserList() {
    try {
        const session: any = await getServerSession();
        if (!session) {
            return NextResponse.json(
                { error: "Not authorized" },
                { status: 401 }
            );
        }
        const user = await getUserByEmail(session.user.email);
        if (!user?.verified || !user?.classNumber) {
            return NextResponse.json(
                { error: "Not authorized" },
                { status: 401 }
            );
        }
        const classNumber = user.classNumber;
        const list = await getStatusList(classNumber);
        let CurrentCount = 0;
        list.forEach((item) => {
            if (item.statuscategory === "SelfStudy") {
                CurrentCount++;
            }
        });
        return NextResponse.json({
            list: list,
            currentCount: CurrentCount,
            totalCount: list.length,
        });
    } catch (e: any) {
        return NextResponse.json({ error: "failed" }, { status: 400 });
    }
}

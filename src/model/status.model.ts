import prisma from "@/lib/prisma";

export async function updateStatus(status: any, email: string) {
    try {
        const updatedSetting = await prisma.user.update({
            where: {
                email: email,
            },
            data: status,
        });
        return updatedSetting;
    } catch (err) {
        throw err;
    }
}
export async function ChangeAllUserStatusToSelfStudy() {
    try {
        const updatedSetting = await prisma.user.updateMany({
            data: {
                statuscategory: "SelfStudy",
            },
        });
        return updatedSetting;
    } catch (err) {
        throw err;
    }
}

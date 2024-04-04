import prisma from "@/lib/prisma";

export async function getSetting(email: string) {
    try {
        const setting = await prisma.user.findUnique({
            where: {
                email: email,
            },
            select: {
                classNumber: true,
                club: true,
                afterSchool: true,
                verified: true,
            },
        });
        return setting;
    } catch (err) {
        throw err;
    }
}

export async function updateSetting(email: string, setting: any) {
    try {
        const updatedSetting = await prisma.user.update({
            where: {
                email: email,
            },
            data: setting,
        });
        return updatedSetting;
    } catch (err) {
        throw err;
    }
}

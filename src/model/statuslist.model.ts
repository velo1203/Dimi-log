import prisma from "@/lib/prisma";

export async function getStatusList(classNum: string) {
    try {
        const statusList = await prisma.user.findMany({
            where: {
                classNumber: classNum,
            },
            select: {
                name: true,
                status: true,
                statusmoreInfo: true,
                statuscategory: true,
            },
        });
        return statusList;
    } catch (err) {
        throw err;
    }
}

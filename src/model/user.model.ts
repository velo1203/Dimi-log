import { PrismaClient } from "@prisma/client";
import prisma from "@/lib/prisma";

export async function createUser(name: string, email: string) {
    try {
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
            },
        });
        console.log("Created user:", user);
        return user;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error; // 또는 에러 처리를 적절하게 해주시기 바랍니다.
    }
}

export async function getUserByEmail(email: string) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        return user;
    } catch (err) {
        throw err;
    }
}

export async function getUser(email: string) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        return user;
    } catch (err) {
        throw err;
    }
}

// 함수를 사용하여 사용자를 생성합니다. 예: createUser('Alice', 'alice@example.com');

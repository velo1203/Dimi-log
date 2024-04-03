import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
    ],
    callbacks: {
        async signIn({ account, profile }: any) {
            if (
                account.provider === "google" &&
                profile.email_verified &&
                profile.email.endsWith("@dimigo.hs.kr")
            ) {
                return true;
            }
            return false;
        },
        async redirect({
            url,
            baseUrl,
        }: {
            url: string;
            baseUrl: string;
        }): Promise<string> {
            return baseUrl;
        },
    },
    pages: {
        signIn: "/login",
    },
});

export { handler as GET, handler as POST };

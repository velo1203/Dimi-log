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
            if (account.provider === "google") {
                return (
                    profile.email_verified &&
                    profile.email.endsWith("@dimigo.hs.kr")
                );
            }
            return true; // Do different verification for other providers that don't have `email_verified`
        },
    },
});

export { handler as GET, handler as POST };

import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import AuthProvider from "./api/auth/provider";

const notosans = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Dimilog",
    description: "디미고 학급 인트라넷",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <AuthProvider>
                <body className={notosans.className}>{children}</body>
            </AuthProvider>
        </html>
    );
}

import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import AuthProvider from "./api/auth/provider";
import StyledComponentsRegistry from "@/lib/registry";
import Header from "@/components/header";

const notosans = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "디미로그",
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
                <body className={notosans.className}>
                    <StyledComponentsRegistry>
                        <div className="defaultsize">
                            <Header />
                            {children}
                        </div>
                    </StyledComponentsRegistry>
                </body>
            </AuthProvider>
        </html>
    );
}

"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { signIn } from "next-auth/react";

export default function Home() {
    return (
        <main>
            <p
                onClick={() => {
                    signIn("google");
                }}
            >
                로그인하기
            </p>
        </main>
    );
}

"use client";

import { signIn, signOut } from "next-auth/react";
import { useSession, getSession } from "next-auth/react";

export default function Home() {
    const { data: session, status } = useSession();
    return <div></div>;
}

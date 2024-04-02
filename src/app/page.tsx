"use client";

import Setting from "@/ui/setting";
import State from "@/ui/state";
import StateList from "@/ui/statelist";
import { signIn, signOut } from "next-auth/react";
import { useSession, getSession } from "next-auth/react";

export default function Home() {
    const { data: session, status } = useSession();
    return (
        <div>
            <State></State>
            <StateList></StateList>
        </div>
    );
}

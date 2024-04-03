"use client";

import State from "@/components/state";
import StateList from "@/components/statelist";
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

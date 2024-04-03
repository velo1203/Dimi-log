"use client";

import styled from "styled-components";
import { IoIosSettings } from "react-icons/io";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const StyledHeader = styled.header`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledHeaderTitle = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    & > a {
        color: var(--FontColor);
        text-decoration: none;
        &:hover {
            opacity: 0.8;
        }
    }
`;

const StyledHeaderOptions = styled.div`
    display: flex;
    align-items: center;
    & > a,
    p {
        color: var(--FontGray);
        margin-right: 1rem;
        text-decoration: none;
        &:hover {
            opacity: 0.8;
        }
        cursor: pointer;
    }
`;

function Header() {
    const { data: session, status } = useSession();
    return (
        <StyledHeader>
            <StyledHeaderTitle>
                <Link href="/">Dimilog</Link>
            </StyledHeaderTitle>
            <StyledHeaderOptions>
                {session ? <Link href="/setting">setting</Link> : ""}
                {!session ? <Link href="/login">login</Link> : ""}
                {session ? (
                    <p
                        onClick={() => {
                            signOut();
                        }}
                    >
                        logout
                    </p>
                ) : (
                    ""
                )}
            </StyledHeaderOptions>
        </StyledHeader>
    );
}

export default Header;

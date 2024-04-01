"use client";

import styled from "styled-components";
import { IoIosSettings } from "react-icons/io";
import Link from "next/link";

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
    & > a {
        color: var(--FontGray);
        margin-right: 1rem;
        text-decoration: none;
        &:hover {
            opacity: 0.8;
        }
    }
`;

function Header() {
    return (
        <StyledHeader>
            <StyledHeaderTitle>
                <Link href="/">Dimilog</Link>
            </StyledHeaderTitle>
            <StyledHeaderOptions>
                <Link href="/setting">setting</Link>
            </StyledHeaderOptions>
        </StyledHeader>
    );
}

export default Header;

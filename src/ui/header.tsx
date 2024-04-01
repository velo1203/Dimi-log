"use client";

import styled from "styled-components";
import { IoIosSettings } from "react-icons/io";

const StyledHeader = styled.header`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledHeaderTitle = styled.h1`
    font-size: 1.5rem;
    color: var(--FontColor);
`;

function Header() {
    return (
        <StyledHeader>
            <StyledHeaderTitle>Dimilog</StyledHeaderTitle>
        </StyledHeader>
    );
}

export default Header;

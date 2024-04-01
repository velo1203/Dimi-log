import styled from "styled-components";

export const Button = styled.button`
    background-color: var(--FontColor);
    width: 100%;
    padding: 15px;
    border: none;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.2s;
    &:hover {
        opacity: 0.8;
        transform: scale(1.005);
    }
    &:active {
        transform: scale(0.99);
    }
`;

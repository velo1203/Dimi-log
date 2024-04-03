"use client";
import { Button } from "@/ui/Button";
import { signIn } from "next-auth/react";
import styled from "styled-components";

const StyledLogin = styled.div`
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledLoginContainer = styled.div`
    padding: 20px;
    min-width: 300px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
`;

const StyledLoginTitle = styled.div`
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;
    gap: 10px;
    font-weight: bold;
    & > h1 {
        font-size: 1.2rem;
    }
    & > p {
        font-size: 1rem;
        color: var(--Gray);
    }
    & > h1 > span {
        color: var(--FontColor);
    }
`;

export default function Login() {
    return (
        <StyledLogin>
            <StyledLoginContainer>
                <StyledLoginTitle>
                    <h1>
                        <span>디미고</span> 계정으로 로그인
                    </h1>
                    <p>학교에서 발급받은 계정으로 로그인!</p>
                </StyledLoginTitle>
                <Button
                    onClick={() => {
                        signIn("google");
                    }}
                >
                    로그인
                </Button>
            </StyledLoginContainer>
        </StyledLogin>
    );
}

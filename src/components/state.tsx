"use client";

import { Button } from "@/ui/Button";
import PopupWrapper from "@/ui/popup";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import StatusChange from "./statuschage";

const StyledState = styled.div`
    padding: 20px;
    background-color: white;
    margin-top: 25px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const StyledClubContainer = styled.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
    & > p {
        font-size: 1rem;
        font-weight: bold;
        color: var(--Gray);
    }
`;
const StyledClub = styled.div`
    padding: 20px;
    background-color: var(--BackGray);
    display: flex;
`;

const StyledStatusMessage = styled.div`
    display: flex;
    flex-direction: column;

    gap: 5px;
    & > h1 {
        font-size: 1.3rem;
        font-weight: bold;
        color: var(--Gray);
    }
    & > h1 > span {
        color: var(--FontColor);
    }
    & > p {
        font-size: 1rem;
        font-weight: bold;
        color: var(--Gray);
    }
`;

const StyledStatusContainer = styled.div`
    width: 80%;
    margin: auto;
`;
const StyledStatusInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    & > p {
        font-size: 1rem;
        font-weight: bold;
        color: var(--Gray);
    }
`;

function State() {
    const [status, setStatus] = useState("상태로딩중..");
    const [statusChange, setStatusChange] = useState(false); //status change popup status
    useEffect(() => {
        const interval = setInterval(() => {
            axios
                .get("/api/user")
                .then((res) => {
                    if (res.data.status === null) {
                        setStatus("활동이 없습니다");
                    } else {
                        setStatus(res.data.status);
                    }
                })
                .catch((error) => {
                    console.error("There was an error!", error);
                });
        }, 5000); // 5000ms = 5초마다 실행

        // 컴포넌트가 언마운트되거나 useEffect가 다시 실행될 때 이전 인터벌을 정리
        return () => clearInterval(interval);
    }, [statusChange]); // statusChange가 변경될 때마다 useEffect가 다시 실행됩니다
    return (
        <StyledState>
            <PopupWrapper //status change popup
                onClose={() => {
                    setStatusChange(false);
                }}
                isOpen={statusChange}
            >
                <StatusChange setStatusChange={setStatusChange} />
            </PopupWrapper>
            <StyledClubContainer>
                <p>현재 활동</p>
                <StyledClub>
                    <StyledStatusContainer>
                        <StyledStatusMessage>
                            <h1>
                                <span>심호성</span>님은 현재
                            </h1>
                            <p>{status}</p>
                        </StyledStatusMessage>
                    </StyledStatusContainer>
                </StyledClub>
            </StyledClubContainer>
            <Button
                onClick={() => {
                    setStatusChange(true);
                }}
            >
                활동 변경
            </Button>
        </StyledState>
    );
}

export default State;

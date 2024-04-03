"use client";

import { Button } from "@/ui/Button";
import { Input } from "@/ui/Input";
import { Select } from "@/ui/Select";
import styled from "styled-components";

const StyledStateList = styled.div`
    padding: 20px;
    background-color: white;
    margin-top: 25px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 500px;
    & > h1 {
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--Gray);
    }
`;

const StyledStatusContainer = styled.ul`
    background-color: var(--BackGray);
    height: 100%;
    border-radius: 5px;
    overflow-y: scroll;
    padding: 10px;
`;

const StyledStateOptions = styled.div`
    display: flex;
    gap: 20px;
    & > button {
        width: 20%;
    }
    & > input {
        flex-grow: 5;
    }
`;

const StyledStateUser = styled.li`
    height: 50px;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;
    justify-content: space-between;
    font-size: 0.9rem;
    color: var(--FontGray);
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
    & > p:first-child {
        font-size: 1rem;
        color: var(--Gray);
    }
    & > p > span {
        color: var(--FontColor);
    }
`;

function StateList() {
    return (
        <StyledStateList>
            <h1>활동중인 사람들</h1>
            <StyledStateOptions>
                <Select>
                    <option>학년 선택</option>
                </Select>
                <Select>
                    <option>반 선택</option>
                </Select>
            </StyledStateOptions>
            <StyledStateOptions>
                <Input placeholder="이름 검색" />
                <Button>검색</Button>
            </StyledStateOptions>
            <StyledStatusContainer>
                <StyledStateUser>
                    <p>1412 심호성</p>
                    <p>
                        <span>루나</span> 활동중
                    </p>
                    <p>휴머노이드실</p>
                </StyledStateUser>
            </StyledStatusContainer>
        </StyledStateList>
    );
}

export default StateList;

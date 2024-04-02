"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
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
`;

const StyledStateOptions = styled.div`
    display: flex;
    gap: 20px;
    & > button {
        width: 125px;
    }
    & > input {
        width: 100%;
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
            <StyledStatusContainer></StyledStatusContainer>
        </StyledStateList>
    );
}

export default StateList;

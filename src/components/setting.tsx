"use client";

import { Button } from "@/ui/Button";
import { Input } from "@/ui/Input";
import { Select } from "@/ui/Select";
import styled from "styled-components";

const StyledSetting = styled.div`
    padding: 20px;
    background-color: white;
    margin-top: 25px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const StyledSettingTitle = styled.h1`
    font-size: 1.3rem;
    font-weight: bold;
    color: var(--Gray);
`;

const StyledSettingSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
    & > h1 {
        font-size: 1.1rem;
    }
`;

function Setting() {
    return (
        <StyledSetting>
            <StyledSettingTitle>개인 설정</StyledSettingTitle>
            <StyledSettingSection>
                <StyledSettingTitle>학년 설정 </StyledSettingTitle>
                <Select>
                    <option>학과 선택</option>
                </Select>
                <Select>
                    <option>학년 선택</option>
                </Select>
                <Select>
                    <option>반 선택</option>
                </Select>
            </StyledSettingSection>
            <StyledSettingSection>
                <StyledSettingTitle>창업동아리 설정</StyledSettingTitle>
                <Select>
                    <option>창업동아리 선택</option>
                </Select>
            </StyledSettingSection>
            <StyledSettingSection>
                <StyledSettingTitle>일반동아리 설정</StyledSettingTitle>
                <Select>
                    <option>일반동아리 선택</option>
                </Select>
            </StyledSettingSection>
            <StyledSettingSection>
                <StyledSettingTitle>방과후</StyledSettingTitle>
                <Input placeholder="방과후를 입력해주세요." />
            </StyledSettingSection>
            <Button>저장</Button>
        </StyledSetting>
    );
}

export default Setting;

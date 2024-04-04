"use client";

import { Button } from "@/ui/Button";
import { Input } from "@/ui/Input";
import { Select } from "@/ui/Select";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledSetting = styled.form`
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
    & > span {
        color: var(--FontColor);
        font-size: 0.8rem;
    }
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

function Setting({ settingConfig }: { settingConfig: any }) {
    const [classNumber, setClassNumber] = useState("");
    const [club, setClub] = useState("");
    const [verifycode, setVerifycode] = useState("");
    const [afterSchool, setAfterSchool] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("/api/setting");
            setClassNumber(result.data.classNumber);
            setClub(result.data.club);
            setAfterSchool(result.data.afterSchool);
        };
        fetchData();
    }, []);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // 폼의 기본 제출 동작을 방지
        try {
            const setting = {
                classNumber,
                club,
                afterSchool,
                verifycode,
            };
            if (!setting.classNumber) {
                alert("학년 설정은 필수입니다");
                return;
            }
            const result = await axios.put("/api/setting", setting);
            alert("세팅이 저장되었습니다.");
        } catch (e: any) {
            alert("등록에 실패했습니다");
        }
    };

    return (
        <StyledSetting onSubmit={handleSubmit}>
            <StyledSettingTitle>개인 설정</StyledSettingTitle>
            <StyledSettingSection>
                <StyledSettingTitle>
                    학급 설정 <span>필수!!</span>
                </StyledSettingTitle>
                <Select
                    value={classNumber}
                    onChange={(e) => setClassNumber(e.target.value)}
                >
                    <option value="">반 선택</option>
                    <option value="1">1반</option>
                    <option value="2">2반</option>
                    <option value="3">3반</option>
                    <option value="4">4반</option>
                    <option value="5">5반</option>
                    <option value="6">6반</option>
                </Select>
                <Input
                    placeholder="인증코드를 입력해주세요."
                    onChange={(e) => {
                        setVerifycode(e.target.value);
                    }}
                />
            </StyledSettingSection>
            <StyledSettingSection>
                <StyledSettingTitle>
                    동아리 설정<span>일반/창업</span>
                </StyledSettingTitle>
                <Select value={club} onChange={(e) => setClub(e.target.value)}>
                    <option>동아리 선택</option>
                    {settingConfig.clubs.map((club: any, i: any) => {
                        return <option key={i}>{club}</option>;
                    })}
                </Select>
            </StyledSettingSection>
            <StyledSettingSection>
                <StyledSettingTitle>방과후</StyledSettingTitle>
                <Input
                    placeholder="방과후를 입력해주세요."
                    value={afterSchool}
                    onChange={(e) => setAfterSchool(e.target.value)}
                />
            </StyledSettingSection>
            <Button>저장</Button>
        </StyledSetting>
    );
}

export default Setting;

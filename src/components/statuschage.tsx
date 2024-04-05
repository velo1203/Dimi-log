import { Button } from "@/ui/Button";
import { Input } from "@/ui/Input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledStatusChange = styled.form`
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    & > h1 {
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--FontColor);
    }
`;

const StyedStatusList = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: space-around;
`;

interface StyledStatusProps {
    isSelected?: boolean; // isSelected prop의 타입을 boolean으로 명시
}

const StyledStatus = styled.div<StyledStatusProps>`
    width: 100%;

    box-sizing: border-box;
    margin-bottom: 10px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    font-weight: bold;
    color: ${(props) =>
        props.isSelected
            ? "white"
            : "var(--Gray)"}; // 선택되지 않았을 때 투명한 보더 적용
    border-radius: 5px;
    cursor: pointer;
    background-color: ${(props) =>
        props.isSelected
            ? "var(--FontColor)"
            : "var(--BackGray)"}; // 선택되지 않았을 때 투명한 보더 적용
    @media (min-width: 600px) {
        width: calc(50% - 10px);
    }
    @media (min-width: 900px) {
        width: calc(25% - 15px);
    }
    transition: all 0.2s ease-in-out;
    &:active {
        transform: scale(0.95);
    }
    &:hover {
        opacity: 0.8;
    }
`;

const StyedStatusSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    & > h1 {
        font-size: 1.1rem;
        color: var(--Gray);
    }
    & > h1 > span {
        color: var(--FontColor);
        font-size: 0.8rem;
    }
`;
const StyledStatusInfo = styled.div`
    & > input {
        width: 100%;
    }
`;

const StyledStatusPreview = styled.div`
    padding: 20px;
    background-color: var(--BackGray);
    display: flex;
    flex-direction: column;
    gap: 5px;
    & > h1 {
        font-size: 1.3rem;
        font-weight: bold;
        color: var(--Gray);
    }
    & > p {
        font-size: 1rem;
        font-weight: bold;
        color: var(--Gray);
    }
    & > p > span {
        color: var(--FontColor);
    }
`;

export default function StatusChange({
    setStatusChange,
}: {
    setStatusChange: any;
}) {
    const [selectedActivity, setSelectedActivity] = useState("");
    const [statusMessage, setStatusMessage] = useState("");
    const [moreinfo, setMoreinfo] = useState("");
    const [User, setUser] = useState(null);
    const router = useRouter();
    useEffect(() => {
        axios.get("/api/user").then((res) => {
            const user = res.data;
            if (!user.verified) {
                alert("활동을 설정하려면, 학년정보를 입력해야합니다");
                router.push("/setting");
            }

            setSelectedActivity(user.statuscategory);
        });
    }, []);

    useEffect(() => {
        switch (selectedActivity) {
            case "SelfStudy":
                setStatusMessage("자율학습");
                break;
            case "Club":
                setStatusMessage("동아리");
                break;
            case "AfterSchool":
                setStatusMessage("방과후");
                break;
            case "Others":
                setStatusMessage("기타");
                break;
        }
    }, [selectedActivity]);

    const handleOnsubmit = async (e: any) => {
        e.preventDefault();
        try {
            const result = await axios.put("/api/status", {
                status: selectedActivity,
                moreinfo: moreinfo,
            });
            alert("활동이 변경되었습니다");
            setStatusChange(false);
        } catch (e: any) {
            alert("활동 변경에 실패했습니다");
        }
    };

    // 활동을 선택하는 함수입니다.
    const selectActivity = (activity: string) => {
        setSelectedActivity(activity);
    };
    return (
        <StyledStatusChange onSubmit={handleOnsubmit}>
            <h1>활동 변경하기</h1>
            <StyedStatusSection>
                <h1>활동 종류</h1>
                <StyedStatusList>
                    <StyledStatus
                        isSelected={selectedActivity === "SelfStudy"}
                        onClick={() => selectActivity("SelfStudy")}
                    >
                        자율학습
                    </StyledStatus>
                    <StyledStatus
                        isSelected={selectedActivity === "Club"}
                        onClick={() => selectActivity("Club")}
                    >
                        동아리
                    </StyledStatus>
                    <StyledStatus
                        isSelected={selectedActivity === "AfterSchool"}
                        onClick={() => selectActivity("AfterSchool")}
                    >
                        방과후
                    </StyledStatus>
                    <StyledStatus
                        isSelected={selectedActivity === "Others"}
                        onClick={() => selectActivity("Others")}
                    >
                        기타
                    </StyledStatus>
                </StyedStatusList>
            </StyedStatusSection>
            <StyedStatusSection>
                <h1>
                    상세 정보 <span>선택</span>
                </h1>
                <StyledStatusInfo>
                    <Input
                        placeholder="상세 정보를 입력해 주세요"
                        onChange={(e) => {
                            setMoreinfo(e.target.value);
                        }}
                    />
                </StyledStatusInfo>
            </StyedStatusSection>
            <StyedStatusSection>
                <h1>활동 상태 메시지</h1>
                <StyledStatusPreview>
                    <p>
                        심호성님은 <span>{statusMessage}</span> 활동중입니다.
                    </p>
                </StyledStatusPreview>
            </StyedStatusSection>
            <StyedStatusSection>
                <Button>활동 변경하기</Button>
            </StyedStatusSection>
        </StyledStatusChange>
    );
}

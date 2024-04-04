import { Button } from "@/ui/Button";
import { Input } from "@/ui/Input";
import styled from "styled-components";

const StyledStatusChange = styled.div`
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    & > h1 {
        font-size: 1.5rem;
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
    transition: all 0.3s;
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
`;

export default function StatusChange() {
    return (
        <StyledStatusChange>
            <h1>활동 변경하기</h1>
            <StyedStatusSection>
                <h1>활동 종류</h1>
                <StyedStatusList>
                    <StyledStatus isSelected={true}>자율학습</StyledStatus>
                    <StyledStatus>동아리</StyledStatus>
                    <StyledStatus>방과후</StyledStatus>
                    <StyledStatus>기타</StyledStatus>
                </StyedStatusList>
            </StyedStatusSection>
            <StyedStatusSection>
                <h1>
                    상세 정보 <span>선택</span>
                </h1>
                <StyledStatusInfo>
                    <Input placeholder="상세 정보를 입력해 주세요" />
                </StyledStatusInfo>
            </StyedStatusSection>
            <StyedStatusSection>
                <h1>활동 상태 메시지</h1>
                <StyledStatusPreview>
                    <p>심호성님은 루나에서 활동중입니다.</p>
                </StyledStatusPreview>
            </StyedStatusSection>
            <StyedStatusSection>
                <Button>활동 변경하기</Button>
            </StyedStatusSection>
        </StyledStatusChange>
    );
}

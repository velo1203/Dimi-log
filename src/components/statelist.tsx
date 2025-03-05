"use client";

import { Button } from "@/ui/Button";
import { Input } from "@/ui/Input";
import { Select } from "@/ui/Select";
import axios from "axios";
import { useEffect, useState } from "react";
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
`;

const StyledStatusHeader = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 10px;
    & > h1 {
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--Gray);
    }
    & > h1:last-child {
        color: var(--FontColor);
        font-size: 1rem;
    }
`;

const StyledStatusContainer = styled.ul`
    background-color: var(--BackGray);
    height: 100%;
    border-radius: 5px;
    overflow-y: scroll;
    padding: 10px;
`;

const StyledStateOptions = styled.form`
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
    margin-bottom: 5px;
    font-size: 0.9rem;
    color: var(--FontGray);

    & > p:first-child {
        font-size: 1rem;
        color: var(--Gray);
    }
    & > p > span {
        color: var(--FontColor);
    }
`;

const StyledStatusAlert = styled.div`
    text-align: center;
    padding: 25px;
    font-size: 0.8rem;
    color: var(--FontGray);
`;

function StateList() {
    const [list, setList] = useState([]);
    const [currentCount, setCurrentCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [verified, setVerified] = useState(false);
    const [isloading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [realSearchTerm, setRealSearchTerm] = useState("");

    const onSearch = (e: any) => {
        e.preventDefault();
        setRealSearchTerm(searchTerm);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = await axios.get("/api/user");
                setVerified(user.data.verified);
                if (user.data.verified) {
                    const result = await axios.get("/api/statuslist");
                    setList(result.data.list);
                    setCurrentCount(result.data.currentCount);
                    setTotalCount(result.data.totalCount);
                }
                setIsLoading(false);
            } catch (error) {
                alert("설정을 로드하는 데 실패했습니다.");
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 10000);

        return () => clearInterval(interval);
    }, []);
    const sortedList = [...list].sort((a: any, b: any) => {
        const getStudentId = (name: string) =>
            parseInt(name.slice(0, 4), 10) || 0;
        return getStudentId(a.name) - getStudentId(b.name);
    });

    const filteredList = sortedList.filter((user: any) =>
        user.name.toLowerCase().includes(realSearchTerm.toLowerCase())
    );
    return (
        <>
            {verified ? (
                <StyledStateList>
                    <StyledStatusHeader>
                        <h1>학급 활동 목록</h1>
                        <h1>
                            총원:{totalCount} 현원: {currentCount}/{totalCount}
                        </h1>
                    </StyledStatusHeader>
                    <StyledStateOptions onSubmit={onSearch}>
                        <Input
                            placeholder="이름 검색"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Button>검색</Button>
                    </StyledStateOptions>
                    <StyledStatusContainer>
                        {filteredList.map((user: any, i) => (
                            <StyledStateUser key={i}>
                                <p>{user.name}</p>
                                <p>{user.status}</p>
                                <p>{user.statusmoreInfo}</p>
                            </StyledStateUser>
                        ))}
                    </StyledStatusContainer>
                </StyledStateList>
            ) : (
                <StyledStatusAlert>
                    {isloading ? (
                        <h1>로딩중입니다...</h1>
                    ) : (
                        <h1>학급 상태를 보려면 반설정을 해주세요.</h1>
                    )}
                </StyledStatusAlert>
            )}
        </>
    );
}

export default StateList;

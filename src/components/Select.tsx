import styled from "styled-components";

export const Select = styled.select`
    width: 100%;
    padding: 15px;
    font-size: 15px;
    transition: all 0.2s;
    border-radius: 5px;
    background-color: var(--BackGray);
    color: var(--FontGray);
    border: none;
    outline: none;
    appearance: none; /* 네이티브 select 스타일 제거 */
    -moz-appearance: none;
    -webkit-appearance: none;
    background-image: url('data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path fill="%23black" d="M2048 384v128h-2048v-128h2048zm0 512v128h-2048v-128h2048zm0 512v128h-2048v-128h2048z"/></svg>'); /* 드롭다운 화살표 커스텀 */
    background-repeat: no-repeat;
    background-position: right 15px center;
    background-size: 12px 12px;
    cursor: pointer; /* 커서를 포인터로 변경 */
    font-weight: bold;
    &:hover {
        opacity: 0.8;
    }
`;

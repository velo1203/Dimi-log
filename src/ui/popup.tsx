import { useEffect, useRef } from "react";
import styled from "styled-components";

export const StyledPopupBackground = styled.div`
    position: fixed; /* 고정 위치 */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3); /* 반투명 검정색 */
    display: flex;
    align-items: center; /* 수직 정렬 */
    justify-content: center; /* 수평 정렬 */
    z-index: 1000;
    overflow-y: auto;
`;

export const StyledPopupContent = styled.div`
    background-color: var(--White); /* 배경색 */
    border-radius: 10px; /* 모서리 둥글게 */
    max-width: 720px; /* 최대 너비 */
    width: 90%; /* 너비 */
`;

const PopupWrapper = ({
    children,
    isOpen,
    onClose,
}: {
    children: any;
    isOpen: boolean;
    onClose: () => void;
}) => {
    const popupRef: any = useRef();

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                onClose();
            }
        };

        // 이벤트 리스너 등록
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <>
            {isOpen ? (
                <StyledPopupBackground>
                    <StyledPopupContent ref={popupRef}>
                        {children}
                    </StyledPopupContent>
                </StyledPopupBackground>
            ) : (
                ""
            )}
        </>
    );
};

export default PopupWrapper;

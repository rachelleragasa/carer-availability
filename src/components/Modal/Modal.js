import React, { useEffect, useRef, useCallback } from "react"
import { createPortal } from "react-dom";
import styled from "styled-components"
import tw from "twin.macro"

import { above } from "../../styles"

const Modal = ({ children, showModal, toggleModal }) => {
    const wrapperRef = useRef(null);

    const closeModal = useCallback(({ target }) => {
        if (wrapperRef && wrapperRef.current && !wrapperRef.current.contains(target)) {
            toggleModal();
        }
    }, [toggleModal]);

    useEffect(() => {
        document.addEventListener("click", closeModal, { capture: true });

        return () => {
            document.removeEventListener("click", closeModal, { capture: true });
        }
    }, [closeModal]);

    return showModal ? createPortal(
        <>
            <Overlay />
            <WindowContainer>
                <ModalContainer>
                    <ModalContent ref={wrapperRef}>{children}</ModalContent>
                </ModalContainer>
            </WindowContainer>
        </>, document.body
    ) : null
}

const Overlay = styled.div`
    ${tw`opacity-100 top-0 left-0 right-0 bottom-0 fixed`};
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    z-index: -1;
    touch-action: none;
    background-color: rgba(196,196,196, 0.67);
`

const WindowContainer = styled.div`
    ${tw`fixed top-0 right-0 bottom-0 left-0 overflow-auto outline-none`};
    animation: fade-in 200ms 0s ease-in-out forwards;
    z-index: 100;
`

const ModalContainer = styled.div`
    ${tw`opacity-100 flex items-center justify-center h-full outline-none`};
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    margin: 0 10px;

    ${above.tabletLarge`
        ${tw`m-0`};
    `};
`

const ModalContent = styled.div`
    ${tw`w-full flex flex-col relative overflow-y-auto items-center`};
    min-height: 374px;
    padding: 20px;
    background-color: var(--grey);
    border: 1px solid #000;
    border-radius: 4px;

    ${above.tabletLarge`
        width: 324px;
        padding: 0;
    `};
`

export default Modal
import React, { useContext } from "react"
import styled from "styled-components"
import tw from "twin.macro"

import Portal from "../Portal/Portal"
import { above } from "../../styles"
import { GlobalContext } from "../../contexts/GlobalContext"
import Button from "../Button/Button"
import getTimeOfDay from "../../utils/getTimeOfDay"

const Modal = () => {
    const { carerName, availableTimeSlots } = useContext(GlobalContext);

    return (
        <Portal>
            <ModalWrapper>
                <Content>
                    <Heading>Schedule Carer</Heading>
                    <CarerName>{carerName}</CarerName>
                    <>
                        {
                            availableTimeSlots?.map((timeSlot) => <StyledButton key={timeSlot} text={getTimeOfDay(timeSlot)} />)
                        }
                    </>
                </Content>
            </ModalWrapper>
        </Portal>
    )
}

const ModalWrapper = styled.div`
    ${tw`fixed left-0 top-0 w-full h-full overflow-auto`};
    z-index: 1;
    padding-top: 100px;
    background-color: rgba(196,196,196,0.67);

`

const Content = styled.div`
    ${tw`flex flex-col items-center m-auto`};
    width: 90%;
    background-color: var(--grey);
    min-height: 374px;
    border: 1px solid #000;

    ${above.tablet`
        width: 324px;
    `}
`

const Heading = styled.h2`
    ${tw`font-normal m-0`};
    font-size: 24px;
    line-height: 24px;
    padding-top: 30px;

`

const CarerName = styled.p`
    font-size: 18px;
    line-height: 24px;
    margin: 0 0 35px 0;
`

const StyledButton = styled(Button)`
    ${tw`font-bold`};
    width: 90%;
    margin-bottom: 25px;

    ${above.tabletLarge`
        width: 248px;
    `}
`

export default Modal;
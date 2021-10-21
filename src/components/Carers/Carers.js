import React, { useEffect, useState, useCallback } from "react"
import axios from "axios"
import styled from "styled-components"
import tw from "twin.macro"

import { above } from "../../styles"
import Button from "../Button/Button"
import Modal from "../Modal/Modal"
import getTimeOfday from "../../utils/getTimeOfDay"
import SuccessImg from "../../assets/images/check.png"

const Carers = () => {
    const [carersList, setCarersList] = useState([]);
    const [carerName, setCarerName] = useState('');
    const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
    const [bookingSuccess, setBookingSuccess] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const toggleModal = useCallback(() => {
        setShowModal((prevState) => !prevState);
        setBookingSuccess(false);
    }, []);


    const getCarers = async () => {
        const url = "https://ceracare.github.io/carers.json"
        const { data } = await axios.get(url);
        return setCarersList(data?.carers);
    }

    const checkAvailability = async (name) => {
        const url = "https://ceracare.github.io/availableSlots.json"
        const { data } = await axios.get(url);
        setCarerName(name);
        toggleModal();
        return setAvailableTimeSlots(data?.UTCAvailableSlots);
    };

    const bookTimeSlot = async () => {
        const url = "https://ceracare.github.io/bookSlot.json"
        const { data } = await axios.get(url);
        setBookingSuccess(data?.success);
        console.log(data?.success);
    }

    useEffect(() => {
        getCarers();
    },[]);

    return (
        <>
        <CarersList>
            {
                carersList?.map(({ name, slots, photo }) =>
                    <ListItem key={name}>
                        <Image>
                            <img src={photo} alt={name}/>
                        </Image>
                        <ListDescription>
                            <Text>
                                <Name>{name}</Name>
                                <NumberOfSlots>{`${slots} slots available`}</NumberOfSlots>
                            </Text>
                            <Button text="Check Availability" handleClick={() => checkAvailability(name)}/>
                        </ListDescription>
                    </ListItem>
                )
            }
        </CarersList>
        <Modal showModal={showModal} toggleModal={toggleModal}>
            <ModalHeading>Schedule Carer</ModalHeading>
            <ModalSubTitle>{carerName}</ModalSubTitle>
            <>
                {
                    !bookingSuccess && availableTimeSlots?.map((timeSlot) => <ModalButton key={timeSlot} text={getTimeOfday(timeSlot)} handleClick={() => bookTimeSlot()} />)
                }
            </>
            <>
                {
                    bookingSuccess && (
                        <>
                            <BookingSuccessImg src={SuccessImg} alt="booking success" />
                            <p>Thanks for booking your slot!</p>
                        </>
                    )
                }
            </>
        </Modal>
        </>
    )
}

const CarersList = styled.ul`
    ${tw`list-none p-0 m-0 flex flex-wrap flex-col justify-center`};

    ${above.tablet`
        ${tw`flex-row`};
    `};
`

const ListItem = styled.li`
    ${tw`w-full`};
    margin-bottom: 25px;

    ${above.tablet`
        ${tw`w-1/2`};
        max-width: 354px;
    `};

    ${above.tabletLarge`
        ${tw`w-1/3`};
        max-width: 323px;
        margin-right: 5px;
    `};

    ${above.desktop`
        ${tw`w-1/4`};
         margin-right: 20px;
    `};

    &:nth-of-type(odd){
        margin-right: 20px;

        ${above.tabletLarge`
            margin-right: 5px;
        `};

        ${above.desktop`
             margin-right: 20px;
        `};
    }
`

const ListDescription = styled.div`
    ${tw`flex flex-col`};

    ${above.tablet`
        ${tw`flex-row justify-between`};
    `};
`

const Text = styled.div`
    margin-bottom: 10px;
`

const Name = styled.p`
    font-weight: bold;
    margin: 0;
`

const NumberOfSlots = styled.p`
    color: var(--red);
    margin: 0
`

const Image = styled.div`
    width: 100%;
    height: 220px;
    margin-bottom: 10px;

    img {
        ${tw`object-cover object-center w-full h-full`};
    }

`

const ModalHeading = styled.h2`
    ${tw`font-normal m-0`};
    font-size: 24px;
    line-height: 24px;

    ${above.tabletLarge`
        margin-top: 20px;
    `};
`

const ModalSubTitle = styled.p`
    font-size: 18px;
    line-height: 24px;
    margin: 0 0 35px 0;
`

const ModalButton = styled(Button)`
    ${tw`font-bold w-full`};
    margin-bottom: 25px;

    ${above.tabletLarge`
        width: 248px;
    `};
`

const BookingSuccessImg = styled.img`
    width: 100px;
`

export default Carers
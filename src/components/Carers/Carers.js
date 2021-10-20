import React, { useEffect, useContext } from "react"
import axios from "axios"
import styled from "styled-components"
import tw from "twin.macro"

import { above } from "../../styles"
import Button from "../Button/Button"
import Modal from "../Modal/Modal"
import { GlobalContext } from "../../contexts/GlobalContext"

const Carers = () => {
    const { carersList, setCarersList, setAvailableTimeSlots, setCarerName, showModal, setShowModal } = useContext(GlobalContext);

    const getCarers = async () => {
        const url = "https://ceracare.github.io/carers.json"
        const { data } = await axios.get(url);
        return setCarersList(data?.carers);
    }

    const checkAvailability = async (name) => {
        const url = "https://ceracare.github.io/availableSlots.json"
        const { data } = await axios.get(url);
        setCarerName(name);
        setShowModal(true);
        return setAvailableTimeSlots(data?.UTCAvailableSlots);
    };

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
        {showModal && <Modal />}
        </>
    )
}

const CarersList = styled.ul`
    ${tw`list-none p-0 m-0 flex flex-wrap flex-col justify-center`};

    ${above.tablet`
        ${tw`flex-row`};
    `}

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
    `}

    &:nth-of-type(odd){
        margin-right: 20px;

        ${above.tabletLarge`
            margin-right: 5px;
        `};

        ${above.desktop`
             margin-right: 20px;
        `}
    }


`

const ListDescription = styled.div`
    ${tw`flex flex-col`};

    ${above.tablet`
        ${tw`flex-row justify-between`};
    `}
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
export default Carers
import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"
import Imgix from "react-imgix"
import tw from "twin.macro"

import { above } from "../../styles"

const Carers = () => {
    const [carers, setCarers] = useState([]);

    const getCarers = async () => {
        const url = "https://ceracare.github.io/carers.json"
        const { data } = await axios.get(url);
        setCarers(data?.carers);

    }

    useEffect(() => {
        getCarers();
    },[]);

    return (
        <CarersList>
            {
                carers.map(({ name, slots, photo }) =>
                    <ListItem key={name}>
                        {/* <Image> */}
                            {/* <img src={photo} alt={`Headshot of ${name}`} /> */}
                            {/* <Imgix src={photo} srcSet={photo} alt={`Headshot of ${name}`} sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw" width={328} height={220} /> */}

                        {/* </Image> */}
                        {/* <Image src={photo} srcSet={photo} alt={`Headshot of ${name}`} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" width={328} /> */}
                        <Image>
                        <img src={photo} alt={name}/>
                        </Image>

                        <Name>{name}</Name>
                        <NumberOfSlots>{`${slots} slots available`}</NumberOfSlots>
                    </ListItem>
                )
            }
        </CarersList>
    )
}

const CarersList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;


    ${above.tabletLarge`
        flex-direction: row;
        flex-wrap: wrap;
    `}

`

const ListItem = styled.li`
    ${tw`w-full`};

    ${above.tabletLarge`
        ${tw`w-1/4`};
    `};
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

    ${above.tablet`
        width: 323px;
    `};

    img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
    }

`
export default Carers
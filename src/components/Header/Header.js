import React, { useEffect, useCallback } from "react"
import styled from "styled-components"
import tw from "twin.macro"

import CeraLogo from "../../assets/images/logo.png"
import { above } from "../../styles"

const Header = () => {
    const getCurrentTime = useCallback(() => {
        const currentTime = new Date();
        let currentHours = currentTime.getHours();
        let currentMinutes = currentTime.getMinutes();

        currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;

        const timeOfDay = currentHours < 12 ? "AM" : "PM"
        const currentTimeString = `${currentHours}:${currentMinutes} ${timeOfDay}`

        return document.getElementById('clock').innerHTML = currentTimeString;
    }, []);

    useEffect(() => {
        setInterval(getCurrentTime, 1000);
    }, [getCurrentTime]);

    return (
        <HeaderWrapper>
            <Logo>
                <img src={CeraLogo} alt="Cera brand logo" />
            </Logo>
            <Introduction>
                <Title>Carers</Title>
                <SubTitle>Here you'll be able to schedule your carer visits</SubTitle>
            </Introduction>
            <CurrentTime id="clock"></CurrentTime>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
    ${tw`flex flex-row items-center`};
    background-color: var(--red);
    height: 85px;
    padding: 15px;

    ${above.tabletLarge`
        height: 148px;
        padding: 0 20px;
    `};
`

const Introduction = styled.div`
    ${tw`flex-grow`};
`

const Logo = styled.div`
    width: 100px;
    margin-right: 20px;

    ${above.tabletLarge`
        width: 196px;
        margin-right: 35px;
    `}

    img {
       ${tw`w-full`};
    }

`

const Title = styled.h1`
    ${tw`m-0 font-normal`};
    font-size: 28px;
    line-height: 35px;
    color: var(--white);

    ${above.tabletLarge`
        font-size: 36px;
        line-height: 67px;
    `}
`

const SubTitle = styled.h2`
    ${tw`m-0 font-normal`};
    font-size: 16px;
    line-height: 18px;
    color: var(--white);

    ${above.tabletLarge`
        font-size: 20px;
        line-height: 28px;
    `};
`

const CurrentTime = styled.div`
    font-size: 20px;
    line-height: 28px;
    color: var(--white);

    ${above.tabletLarge`
        font-size: 24px;
        line-height: 28px;
    `};
`

export default Header
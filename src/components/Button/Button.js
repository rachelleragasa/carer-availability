import React from "react"
import styled from "styled-components"

import { above } from "../../styles"

const Button = ({ text, className }) => <StyledButton type="button" className={className}>{text}</StyledButton>

const StyledButton = styled.button`
    background-color: var(--red);
    color: var(--white);
    font-size: 12px;
    width: 100%;
    height: 34px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #853660;
    }

    &:focus,
    &:focus-visible {
        border: 2px solid var(--blue);
        outline: none;
    }

    ${above.tablet`
        width: 126px;
    `};
`

export default Button
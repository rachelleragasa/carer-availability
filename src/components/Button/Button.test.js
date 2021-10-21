import React from "react"
import { render, fireEvent } from "@testing-library/react"

import Button from "./Button"

describe('Button Componenet', () => {
    it('fires an onClick event', () => {
        const props = {
            text: "Show Availability",
            className: "m-0",
            handleClick: jest.fn()
        }

        const { getByText } = render(<Button {...props} />);
        fireEvent.click(getByText(props.text));
        expect(props.handleClick).toHaveBeenCalled();
    });
});
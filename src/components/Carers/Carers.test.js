import React from "react"
import { render, screen } from "@testing-library/react"
import Carers from "./Carers"

describe('Carers Component', () => {
    // Emulating user behaviour
    it('displays a list of carers', async () => {

        // My intention here was to mock getting the data which is set in state after the component is mounted.
        // Only then will I be able to get the list items and check if a list of carers were rendered on the page.
        // This would be how the user behaves:
        // 1. User loads page
        // 2. User sees a list of cares on the page
        // const carers = [
        //     {
        //     "name": "Jo",
        //     "slots": 6,
        //     "photo": "test.jpg"
        //     },
        //     {
        //         "name": "Jane",
        //         "slots": 6,
        //         "photo": "test.jpg"
        //     }
        // ];

        // const { getAllByTestId } = render(<Carers carers={carers}/>);
        // const yo = screen.getAllByTestId('carers-list');
        // expect(yo.length).toBe(2);
    })

        // beforeEach(() => {

        // }

        // render(<Carers />);
        // const list = screen.getByRole("list", {
        //     name: /carers-list/i,
        // })
        // const { getAllByRole } = within(list);
        // const items = getAllByRole("listitem");
        // expect(items.length).toBe(8);
});

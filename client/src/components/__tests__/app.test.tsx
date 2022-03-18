/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";

import App from "../app";

describe("<App />", () => {
    test("should render the application",() => {
        const container = render(<App />).container;
        expect(App).toBeDefined();
    });
});

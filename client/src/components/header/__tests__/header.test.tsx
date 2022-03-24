/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";

import Header from "../header";

describe("<Header />", () => {
  test("should render the title",() => {
    const propText = "cheese";
    render(<Header title={propText} />);
    const headingText = screen.getByRole('heading').textContent;
    expect(headingText).toEqual(propText);
  });
});

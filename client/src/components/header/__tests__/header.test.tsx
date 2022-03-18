/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";

import Header from "../header";

describe("<Header />", () => {
  test("should render the title",() => {
    render(<Header title="cheese" />);
    const headingText = screen.getByRole('heading').textContent;
    expect(headingText).toEqual("cheese");
  });
});

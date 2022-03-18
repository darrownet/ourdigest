/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";

import Footer from "../footer";

describe("<Header />", () => {
  test("should render the footer",() => {
    const container = render(<Footer />).container;
    const footerText = container.querySelector('footer p')?.innerHTML;
    expect(footerText).toEqual('footer content...');
  });
  test("should not render the footer",() => {
    const container = render(<Footer activated={false} />).container;
    const footer = container.querySelector('footer');
    expect(footer).toEqual(null);
  });
});

import React from "react";
import { render } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer test suite", () => {
  it("Should render Footer correctly", () => {
    const { container } = render(<Footer />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

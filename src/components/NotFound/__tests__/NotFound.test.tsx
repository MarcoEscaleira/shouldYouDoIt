import React from "react";
import NotFound from "../NotFound";
import { renderWithRedux } from "~/utils/test-utils";

describe("Not Found test suite", () => {
  it("Should render Not Found correctly", () => {
    const { container } = renderWithRedux(<NotFound />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

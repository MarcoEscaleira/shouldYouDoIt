import React from "react";
import Form from "../Form";
import { renderWithRedux } from "~/utils/test-utils";

describe("Form test suite", () => {
  it("Should render Form correctly", () => {
    const { container } = renderWithRedux(<Form />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

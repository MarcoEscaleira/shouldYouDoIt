import React from "react";
import ErrorModal from "../ErrorModal";
import { renderWithRedux } from "~/utils/test-utils";

describe("Error Modal test suite", () => {
  it("Should render Error Modal correctly", () => {
    const { container } = renderWithRedux(
      <ErrorModal show text="Error modal text" />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should hide Error Modal", () => {
    const { container } = renderWithRedux(<ErrorModal show={false} text="" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

import React from "react";
import AppRouter from "../AppRouter";
import { renderWithRedux } from "~/utils/test-utils";

describe("App Router test suite", () => {
  it("Should render App Router correctly", () => {
    const { container } = renderWithRedux(<AppRouter />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

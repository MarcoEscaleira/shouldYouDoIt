import React from "react";
import GalleryPage from "../GalleryPage";
import { renderWithRedux } from "~/utils/test-utils";

describe("Gallery Page test suite", () => {
  it("Should render Gallery Page correctly", () => {
    Object.defineProperty(window, "fetch", {
      value: jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue([])
      }),
      writable: true
    });

    const { container } = renderWithRedux(<GalleryPage />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

import React from "react";
import GalleryPage from "../GalleryPage";
import { renderWithRedux } from "~/utils/test-utils";

const answersMock = [
  {
    msg: "do it",
    img: "https://media.giphy.com/media/nFjDu1LjEADh6/giphy.gif"
  },
  {
    msg: "don't do it",
    img: "https://media.giphy.com/media/g69ZPJfLy7hD2/giphy.gif"
  }
];

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

  it("Should render Gallery Page with data", () => {
    Object.defineProperty(window, "fetch", {
      value: jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue(answersMock)
      }),
      writable: true
    });

    const { container } = renderWithRedux(<GalleryPage />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

import React from "react";
import Form, { request, handleTextInput, handleFormSubmit } from "../Form";
import { renderWithRedux } from "~/utils/test-utils";

describe("Form test suite", () => {
  it("Should render Form correctly", () => {
    const { container } = renderWithRedux(<Form />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should request and setData correctly", async () => {
    const requestMock = {
      msg: "Do It",
      img: "random gif"
    };

    const textMock = "random input";

    Object.defineProperty(window, "fetch", {
      writable: true,
      value: jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue(requestMock)
      })
    });

    const setDataSpy = jest.fn();

    await request(textMock, setDataSpy);

    expect(setDataSpy).toHaveBeenCalledWith(requestMock, textMock);
  });

  it("Should handle text input corectly", () => {
    const input = "";
    const setTextInputSpy = jest.fn();

    handleTextInput(input, setTextInputSpy);

    expect(setTextInputSpy).toHaveBeenCalledWith(input);
  });

  it("Should handle text input corectly", () => {
    const input = "random text";
    const setTextInputSpy = jest.fn();

    handleTextInput(input, setTextInputSpy);

    expect(setTextInputSpy).toHaveBeenCalledWith(input);
  });

  it("Should handle text input with wrong input", () => {
    const input = "!random4234text";
    const setTextInputSpy = jest.fn();

    handleTextInput(input, setTextInputSpy);

    expect(setTextInputSpy).not.toHaveBeenCalled();
  });

  const eventSpy = { preventDefault: jest.fn() };
  const resetDataSpy = jest.fn();
  let textInput = "";
  let oldTextInput = "";
  const setLoadingAnimationSpy = jest.fn();
  const openErrorModalSpy = jest.fn();
  const setDataSpy = jest.fn();

  it("Should handle form submit with empty text input", () => {
    handleFormSubmit(
      eventSpy,
      resetDataSpy,
      textInput,
      oldTextInput,
      setLoadingAnimationSpy,
      openErrorModalSpy,
      setDataSpy
    );

    expect(eventSpy.preventDefault).toHaveBeenCalled();
    expect(resetDataSpy).toHaveBeenCalled();
    expect(openErrorModalSpy).toHaveBeenCalledWith(
      "Please enter what you want to do."
    );
  });

  it("Should handle form submit with same text input as previous", () => {
    textInput = "abc";
    oldTextInput = "abc";

    handleFormSubmit(
      eventSpy,
      resetDataSpy,
      textInput,
      oldTextInput,
      setLoadingAnimationSpy,
      openErrorModalSpy,
      setDataSpy
    );

    expect(eventSpy.preventDefault).toHaveBeenCalled();
    expect(resetDataSpy).toHaveBeenCalled();
    expect(openErrorModalSpy).toHaveBeenCalledWith("Please do another thing!");
  });

  it("Should handle form submit with success", () => {
    textInput = "custom input";

    handleFormSubmit(
      eventSpy,
      resetDataSpy,
      textInput,
      oldTextInput,
      setLoadingAnimationSpy,
      openErrorModalSpy,
      setDataSpy
    );

    expect(eventSpy.preventDefault).toHaveBeenCalled();
    expect(resetDataSpy).toHaveBeenCalled();
    expect(setLoadingAnimationSpy).toHaveBeenCalled();
  });
});

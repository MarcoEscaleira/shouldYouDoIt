import { ActionTypes } from "~/store/actionTypes";
import { resetData, setLoadingAnimation, setData } from "../actions";

describe("Decisions actions tests", () => {
  const dispatchSpy = jest.fn();

  test("It should return reset data action", () => {
    resetData()(dispatchSpy);

    expect(dispatchSpy).toHaveBeenCalledWith({
      type: ActionTypes.RESET_DATA
    });
  });

  test("It should return loading animation action", () => {
    setLoadingAnimation()(dispatchSpy);

    expect(dispatchSpy).toHaveBeenCalledWith({
      type: ActionTypes.SET_LOADING_ANIMATION
    });
  });

  test("It should return set data action", () => {
    const data = {
      msg: "msg",
      img: "img"
    };
    const inputText = "text";

    setData(data, inputText)(dispatchSpy);

    expect(dispatchSpy).toHaveBeenCalledWith({
      type: ActionTypes.SET_DATA,
      payload: {
        data,
        inputText
      }
    });
  });
});

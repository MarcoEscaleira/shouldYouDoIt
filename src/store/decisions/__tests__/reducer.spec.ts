import { ActionTypes } from "~/store/actionTypes";
import decisionsReducer from "../reducer";

describe("Decisions reducer tests", () => {
  test("It should return reset data reducer", () => {
    expect(
      decisionsReducer(undefined, {
        type: ActionTypes.RESET_DATA
      })
    ).toEqual({ oldTextInput: "", print: false });
  });

  test("It should return set loading animation reducer", () => {
    expect(
      decisionsReducer(undefined, {
        type: ActionTypes.SET_LOADING_ANIMATION
      })
    ).toEqual({ oldTextInput: "", print: true });
  });

  test("It should return set data reducer", () => {
    expect(
      decisionsReducer(undefined, {
        type: ActionTypes.SET_DATA,
        payload: {
          data: {
            msg: "msg",
            img: "img"
          },
          inputText: "text"
        }
      })
    ).toEqual({
      data: {
        img: "img",
        msg: "msg"
      },
      oldTextInput: "text",
      print: true
    });
  });
});

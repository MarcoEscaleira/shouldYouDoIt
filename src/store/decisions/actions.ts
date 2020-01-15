import { Dispatch } from "redux";
import { DecisionsStateData } from "./index";
import { ActionTypes } from "../actionTypes";

export interface ResetData {
  type: ActionTypes.RESET_DATA;
}

export interface SetLoadingAnimation {
  type: ActionTypes.SET_LOADING_ANIMATION;
}

export interface SetData {
  type: ActionTypes.SET_DATA;
  payload: {
    data: DecisionsStateData;
    inputText: string;
  };
}

export type DecisionsActions = ResetData | SetLoadingAnimation | SetData;

export const resetData = () => (dispatch: Dispatch<DecisionsActions>): void => {
  dispatch({
    type: ActionTypes.RESET_DATA
  });
};

export const setLoadingAnimation = () => (
  dispatch: Dispatch<DecisionsActions>
): void => {
  dispatch({
    type: ActionTypes.SET_LOADING_ANIMATION
  });
};

export const setData = (data: DecisionsStateData, inputText: string) => (
  dispatch: Dispatch<DecisionsActions>
): void => {
  dispatch({
    type: ActionTypes.SET_DATA,
    payload: {
      data,
      inputText
    }
  });
};

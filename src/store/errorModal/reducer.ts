import { ActionTypes } from "../actionTypes";
import { ErrorModalActions } from "./actions";
import { ErrorModalState } from ".";

export const defaultErrorModalState: ErrorModalState = {
  isOpen: false,
  message: ""
};

const decisionsReducer = (
  state: ErrorModalState = defaultErrorModalState,
  action: ErrorModalActions
): ErrorModalState => {
  switch (action.type) {
    case ActionTypes.OPEN_MODAL:
      return {
        isOpen: true,
        message: action.payload.message
      };
    case ActionTypes.CLOSE_MODAL:
      return defaultErrorModalState;
    default:
      return state;
  }
};

export default decisionsReducer;

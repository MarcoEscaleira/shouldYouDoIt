import { ActionTypes } from '../actionTypes';
import { DecisionsActions } from './actions';
import { DecisionsState } from '.';

export const defaultDecisionsState: DecisionsState = {
  print: false,
  oldTextInput: ''
};

const decisionsReducer = (state: DecisionsState = defaultDecisionsState, action: DecisionsActions) => {
  switch (action.type) {
    case ActionTypes.RESET_DATA:
      return {
        ...state,
        print: false,
        data: {}
      };
    case ActionTypes.SET_LOADING_ANIMATION:
      return {
        ...state,
        print: true
      };
    case ActionTypes.SET_DATA:
      return {
        print: true,
        data: action.payload.data,
        oldTextInput: action.payload.inputText
      };
    default:
      return state;
  }
};

export default decisionsReducer;

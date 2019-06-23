import { RESET_DATA, SET_LOADING_ANIMATION, SET_DATA } from '../actionTypes';

export const defaultDecisionsState = {
  print: false,
  data: {},
  oldTextInput: ''
};

const decisionsReducer = (state = defaultDecisionsState, action) => {
  switch (action.type) {
    case RESET_DATA:
      return {
        ...state,
        print: false,
        data: {}
      };
    case SET_LOADING_ANIMATION:
      return {
        ...state,
        print: true
      };
    case SET_DATA:
      return {
        ...state,
        print: true,
        data: action.data,
        oldTextInput: action.inputText
      };
    default:
      return state;
  }
};

export default decisionsReducer;

import { RESET_DATA, SET_LOADING_ANIMATION, SET_DATA } from '../actionTypes';

export const resetData = () => dispatch => {
  dispatch({
    type: RESET_DATA
  });
};

export const setLoadingAnimation = () => dispatch => {
  dispatch({
    type: SET_LOADING_ANIMATION
  });
};

export const setData = (data = {}, inputText) => dispatch => {
  dispatch({
    type: SET_DATA,
    data,
    inputText
  });
};

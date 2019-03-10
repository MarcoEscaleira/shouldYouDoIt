export const resetState = () => (dispatch) => { // handleState
  dispatch({
    type: 'RESET_STATE'
  });
};

export const resetData = () => (dispatch) => { //handleData
  dispatch({
    type: 'RESET_DATA'
  });
};

export const handleTypeError = (text = '') => (dispatch) => {
 dispatch({
   type: 'HANDLE_TYPE_ERROR',
   text
 })
};

export const setLoadingAnimation = () => (dispatch) => {
  dispatch({
    type: 'SET_LOADING_ANIMATION',
    msg: 'loading',
    img: './gifs/Blocks-1s-200px.gif'
  });
};

export const setData = (data = {}, inputText) => (dispatch) => {
  dispatch({
    type: 'SET_DATA',
    data,
    inputText
  });
};

export const closeTypeError = () => (dispatch) => {
  dispatch({
    type: 'CLOSE_TYPE_ERROR'
  });
};

export const handleTextInput = (textInput = '') => (dispatch) => {
  if(!textInput || /^[a-z\d\-_\s]+$/i.test(textInput)) {
    dispatch({
      type: 'HANDLE_TEXT_INPUT',
      textInput
    });
  }
};
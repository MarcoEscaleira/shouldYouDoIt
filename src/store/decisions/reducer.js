const defaultDecisionsState = {
  print: false,
  data: {},
  oldTextInput: '',
  textInput: '',
  typeError: {
    showModal: false,
    text: ''
  }
};

const decisionsReducer = (state = defaultDecisionsState, action) => {
  switch (action.type) {
    case 'RESET_STATE':
      return defaultDecisionsState;
    case 'RESET_DATA':
      return {
        ...state,
        print: false,
        data: {}
      };
    case 'HANDLE_TYPE_ERROR':
      return {
        ...state,
        typeError: {
          showModal: true,
          text: action.text
        }
      };
    case 'CLOSE_TYPE_ERROR':
      return {
        ...state,
        showModal: false,
        typeError: {
          showModal: false,
          text: ''
        }
      };
    case 'SET_LOADING_ANIMATION':
      return {
        ...state,
        print: true,
        data: {
          msg: action.msg,
          img: action.img
        }
      };
    case 'SET_DATA':
      return {
        ...state,
        print: true,
        data: action.data,
        oldTextInput: action.inputText
      };
    case 'HANDLE_TEXT_INPUT':
      return {
        ...state,
        textInput: action.textInput
      };
    default:
      return state;
  }
};

export default decisionsReducer;
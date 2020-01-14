import { Dispatch } from 'redux';
import { ActionTypes } from '../actionTypes';

export interface OpenModal {
  type: ActionTypes.OPEN_MODAL,
  payload: {
    message: string
  }
};

export interface CloseModal {
  type: ActionTypes.CLOSE_MODAL;
};

export type ErrorModalActions = OpenModal | CloseModal;

export const openModal = (message: string) => (dispatch: Dispatch<ErrorModalActions>) => {
  dispatch({
    type: ActionTypes.OPEN_MODAL,
    payload: {
      message
    }
  });
};

export const closeModal = () => (dispatch: Dispatch<ErrorModalActions>) => {
  dispatch({
    type: ActionTypes.CLOSE_MODAL
  });
};

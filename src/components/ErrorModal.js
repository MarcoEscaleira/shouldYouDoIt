import React from 'react';
import Modal from 'react-modal';

const ErrorModal = ({handleTypeError, typeError: { status, text }}) => (
  <Modal 
    isOpen={status}
    onRequestClose={handleTypeError}
    contentLabel='Error'
    className="modal"
  >
    <h3 className="modal__title">Error</h3>
    { text && <p className="modal__body">{text}</p>}
    <button onClick={handleTypeError} className="modal__button">Okay</button>
  </Modal>
);

export default ErrorModal;
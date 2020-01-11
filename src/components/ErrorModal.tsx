import React from 'react';
import { NullaryFn } from 'utils/functionalTypes';

interface Props {
  show: boolean,
  text: string,
  closeCallback: NullaryFn<void>
};

const ErrorModal: React.FC<Props> = ({ show, text, closeCallback }) => (
  <div className={`modal ${!show ? 'modal--invisible' : ''}`}>
    <div className="modal__overlay" onClick={closeCallback}>
      <div className="modal__content">
        <h3 className="modal__title">Error</h3>
        <p className="modal__body">{text}</p>
        <button className="modal__button" onClick={closeCallback}>
          Okay
        </button>
      </div>
    </div>
  </div>
);

ErrorModal.defaultProps = {
  show: false
}

export default ErrorModal;

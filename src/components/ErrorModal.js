import React from 'react';
import PropTypes from 'prop-types';

const ErrorModal = ({ show, text, closeCallback}) => (
  <div className={`modal ${!show ? 'modal--invisible' : ''}`}>
    <div className="modal__overlay" onClick={closeCallback}></div>
    <div className="modal__content">
      <h3 className="modal__title">Error</h3>
      <p className="modal__body">{text}</p>
      <button 
        className="modal__button"
        onClick={closeCallback}
      > 
        Okay
      </button>
    </div>
  </div>
);

ErrorModal.propTypes = {
  show: PropTypes.bool,
  text: PropTypes.string,
  closeCallback: PropTypes.func
}

export default ErrorModal;
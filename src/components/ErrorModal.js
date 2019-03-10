import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {actions} from "../store/decisions";

const ErrorModal = ({ show, text, closeTypeError}) => (
  <div className={`modal ${!show ? 'modal--invisible' : ''}`}>
    <div className="modal__overlay" onClick={closeTypeError}>
      <div className="modal__content">
        <h3 className="modal__title">Error</h3>
        <p className="modal__body">{text}</p>
        <button 
          className="modal__button"
          onClick={closeTypeError}
        > 
          Okay
        </button>
      </div>
    </div>
  </div>
);

ErrorModal.propTypes = {
  show: PropTypes.bool,
  text: PropTypes.string,
  closeCallback: PropTypes.func
};

const mapStateToProps = state => ({
  show: state.typeError.showModal,
  text: state.typeError.text
});

const mapDispatchToProps = {
  closeTypeError: actions.closeTypeError
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModal);
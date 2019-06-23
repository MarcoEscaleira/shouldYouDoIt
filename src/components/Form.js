import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ErrorModal from './ErrorModal';
import { actions, selectors } from '../store/decisions';
import { API_URL } from '../config';

const Form = ({ resetData, oldTextInput, setLoadingAnimation, setData }) => {
  const [textInput, setTextInput] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const request = async () => {
    const response = await fetch(`${API_URL}/?search=${textInput}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();

    setData(data, textInput);
  };

  const handleErrorModal = text => {
    resetData();
    setShowModal(!showModal);
    setModalMessage(text || '');
  };

  const handleTextInput = text => {
    if (!text || /^[a-z\d\-_\s]+$/i.test(text)) {
      setTextInput(text.trim());
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    resetData();

    if (!textInput) {
      handleErrorModal('Please enter what you want to do');
      return;
    }

    if (oldTextInput === textInput) {
      handleErrorModal('Please do another thing!');
      return;
    }

    setLoadingAnimation();

    request();
  };

  return (
    <Fragment>
      <div className="questionForm">
        <h1 className="questionForm__title">What do you want to do?</h1>
        <form
          className="questionForm__form"
          onSubmit={handleFormSubmit}
          autoComplete="off"
        >
          <input
            type="text"
            name="toDo"
            value={textInput}
            onChange={e => handleTextInput(e.target.value)}
            className="questionForm__form__input"
          />
          <button type="submit" className="questionForm__form__btn">
            Decide
          </button>
        </form>
      </div>
      <ErrorModal
        show={showModal}
        text={modalMessage}
        closeCallback={() => handleErrorModal()}
      />
    </Fragment>
  );
};

Form.propTypes = {
  resetData: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
  oldTextInput: PropTypes.string.isRequired,
  setLoadingAnimation: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  oldTextInput: selectors.getOldTextInput(state)
});

const mapDispatchToProps = {
  resetData: actions.resetData,
  setLoadingAnimation: actions.setLoadingAnimation,
  setData: actions.setData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

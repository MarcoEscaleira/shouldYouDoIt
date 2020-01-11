import React, { Fragment, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { actions, selectors } from '~store/decisions';
import { API_URL } from '../config';
import { UnaryFn, NullaryFn, BinaryFn } from '~utils/functionalTypes';
import ErrorModal from './ErrorModal';
import { StoreState } from '~store';

type SetDataType = BinaryFn<string, string, void>;
type ResetDataType = NullaryFn<void>;
type SetLoadingAnimationType = NullaryFn<void>;

type Props = {
  setData: SetDataType,
  resetData: ResetDataType,
  setLoadingAnimation: SetLoadingAnimationType,
  oldTextInput: string
};

const request = async (textInput: string, setData: SetDataType) => {
  const response = await fetch(`${API_URL}/?search=${textInput}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();

  setData(data, textInput);
};

const handleTextInput = (textInput: string, setTextInput: UnaryFn<string, void>) => {
  if (!textInput || /^[a-z\d\-_\s]+$/i.test(textInput)) {
    setTextInput(textInput.trim());
  }
};

const handleFormSubmit = (
  event,
  resetData: ResetDataType,
  textInput: string,
  oldTextInput: string,
  handleErrorModal: UnaryFn<string, void>,
  setLoadingAnimation: SetLoadingAnimationType,
  setData: SetDataType
) => {
  event.preventDefault();
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

  request(textInput, setData);
};

const Form: React.FC<Props> = ({ resetData, oldTextInput, setLoadingAnimation, setData }) => {
  const [textInput, setTextInput] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');

  const handleErrorModal = useCallback(() => {
    resetData();
    setShowModal(!showModal);
    setModalMessage(textInput || '');
  }, [showModal, textInput]);

  return (
    <Fragment>
      <div className="questionForm">
        <h1 className="questionForm__title">What do you want to do?</h1>
        <form
          className="questionForm__form"
          onSubmit={e => handleFormSubmit(e, resetData, textInput, oldTextInput, handleErrorModal, setLoadingAnimation, setData)}
          autoComplete="off"
        >
          <input
            type="text"
            name="toDo"
            value={textInput}
            onChange={e => handleTextInput(e.target.value, setTextInput)}
            className="questionForm__form__input"
            data-testid="input"
          />
          <button type="submit" className="questionForm__form__btn">
            Decide
          </button>
        </form>
      </div>
      <ErrorModal
        show={showModal}
        text={modalMessage}
        closeCallback={handleErrorModal}
      />
    </Fragment>
  );
};

const mapStateToProps = (state: StoreState) => ({
  oldTextInput: selectors.getOldTextInput(state)
});

const mapDispatchToProps = {
  resetData: actions.resetData,
  setLoadingAnimation: actions.setLoadingAnimation,
  setData: actions.setData
};

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Form);

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { actions } from "../store/decisions";
import { API_URL } from "../config";

const Form = ({
  textInput,
  resetData,
  handleTypeError,
  oldTextInput,
  setLoadingAnimation,
  setData,
  handleTextInput
}) => {
  const handleFormSubmit = e => {
    e.preventDefault();

    resetData();

    const inputText = e.target.toDo.value.trim();

    if (!inputText) {
      resetData();
      handleTypeError("Please enter what you want to do");
      return;
    }

    if (oldTextInput === inputText) {
      resetData();
      handleTypeError("Please do another thing!");
      return;
    }

    setLoadingAnimation();

    const request = async () => {
      const response = await fetch(`${API_URL}/?search=${inputText}`, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();

      setData(data, inputText);
    };
    request();
  };

  return (
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
  );
};

Form.propTypes = {
  textInput: PropTypes.string,
  handleTextInput: PropTypes.func
};

const mapStateToProps = state => ({
  textInput: state.textInput,
  oldTextInput: state.oldTextInput
});

const mapDispatchToProps = {
  handleTextInput: actions.handleTextInput,
  resetData: actions.resetData,
  handleTypeError: actions.handleTypeError,
  setLoadingAnimation: actions.setLoadingAnimation,
  setData: actions.setData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

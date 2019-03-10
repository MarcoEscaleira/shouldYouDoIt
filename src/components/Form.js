import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {actions} from "../store/decisions";
import {API_URL} from "../config";


class Form extends React.Component {
  handleFormSubmit = (e) => {
    e.preventDefault();
    
    this.props.resetData();
    
    const inputText = e.target.toDo.value.trim();
    
    // Check if input is empty
    if (!inputText) {
      this.props.resetData();
      this.props.handleTypeError("Please enter what you want to do");
      return;
    }
    
    // Check if input is same as before
    if (this.props.oldTextInput === inputText) {
      this.props.resetData();
      this.props.handleTypeError("Please do another thing!");
      return;
    }
    
    this.props.setLoadingAnimation();
    
    const request = async () => {
      const response = await fetch(`${API_URL}/?search=${inputText}`, {
        headers: {
          "Content-Type": "application/json",
        }
      });
      const data = await response.json();
      
      this.props.setData(data, inputText);
    };
    request();
  };
  
  handleTextInput = (e) => {
    const textInput = e.target.value;
    this.props.handleTextInput(textInput);
  };
  
  render() {
    return (
      <div className="questionForm">
        <h1 className="questionForm__title">What do you want to do?</h1>
        <form
          className="questionForm__form"
          onSubmit={this.handleFormSubmit}
          autoComplete="off"
        >
          <input
            type="text"
            name="toDo"
            value={this.props.textInput}
            onChange={this.handleTextInput}
            className="questionForm__form__input"
          />
          <button
            type="submit" className="questionForm__form__btn"
          >
            Decide
          </button>
        </form>
      </div>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Form);
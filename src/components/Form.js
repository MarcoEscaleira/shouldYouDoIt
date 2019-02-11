import React from 'react';
import PropTypes from 'prop-types';

const Form = (props) => (
  <div className="questionForm">
    <h1 className="questionForm__title">What do you want to do?</h1>
    <form 
      className="questionForm__form" 
      onSubmit={props.handleFormSubmit} 
      autoComplete="off"
    >
      <input 
        type="text" 
        name="toDo" 
        value={props.text} 
        onChange={props.handleTextInput}
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

Form.propTypes = {
  handleFormSubmit: PropTypes.func,
  text: PropTypes.string,
  handleTextInput: PropTypes.func
}

export default Form;
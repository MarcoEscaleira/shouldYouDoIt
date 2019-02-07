import React from 'react';
import PropTypes from 'prop-types';

const Form = (props) => (
  <div className="questionForm">
    <h1>What do you want to do?</h1>
    <form 
      className="uselessForm" 
      onSubmit={props.handleFormSubmit} 
      autoComplete="off"
    >
      <input 
        type="text" 
        name="toDo" 
        value={props.text} 
        onChange={props.handleTextInput} 
      />
      <button type="submit">Decide</button>
    </form>
  </div>
);

Form.propTypes = {
  handleFormSubmit: PropTypes.func,
  text: PropTypes.string,
  handleTextInput: PropTypes.func
}

export default Form;
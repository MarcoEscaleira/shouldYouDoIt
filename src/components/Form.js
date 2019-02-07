import React from 'react'

const Form = ({handleFormSubmit}) => (
  <div className="questionForm">
    <h1>What do you want to do?</h1>
    <form className="uselessForm" onSubmit={handleFormSubmit}>
      <input type="text" name="toDo"/>
      <button type="submit">Decide</button>
    </form>
  </div>
);

export default Form;
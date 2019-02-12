import React from 'react'
import PropTypes from 'prop-types';

const Answer = ({handleData, data: {answer, image}}) => (
  <div className="answer">
    <h1 className="answer__title">{ (answer === 'loading') ? "Loading" : (answer === 'yes') ? "Do it" : "Don't do it" }</h1>
    <img 
      src={image} 
      alt="yesOrNoApiImage"
      className="answer__image"
    />
    <button 
      onClick={handleData}
      className="answer__btn"
    >
      Clean
    </button>
  </div>
);

Answer.propTypes = {
  handleData: PropTypes.func,
  data: PropTypes.object
};

export default Answer;
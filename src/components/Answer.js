import React from 'react'
import PropTypes from 'prop-types';

const Answer = ({handleData, data: {msg, img}}) => (
  <div className="answer">
    <h1 className="answer__title">{ (msg === 'loading') ? "Loading" : msg }</h1>
    <img 
      src={img}
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
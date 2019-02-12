import React from 'react'
import PropTypes from 'prop-types';

const handleMsg = (str) => {
    return str.toLowerCase().replace(/^[a-z]{1}/igm, (m) => { return m.toUpperCase() });
};

const Answer = ({handleData, data: {msg, img}}) => (
  <div className="answer">
    <h1 className="answer__title">{ (msg === 'loading') ? "Loading" : handleMsg(msg) }</h1>
    <img 
      src={img}
      alt="Should You Do It image"
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
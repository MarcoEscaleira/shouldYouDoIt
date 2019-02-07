import React from 'react'
import PropTypes from 'prop-types';

const Answer = ({handleData, data: {answer, image}}) => (
  <div className="answer">
    { (answer === 'loading') ? <h1>Loading</h1> : (answer === 'yes') ? <h1>Do it</h1> : <h1>Don't do it</h1> }
    <img src={image} alt="yesOrNoApiImage"/>
    <button onClick={handleData}>Clean</button>
  </div>
);

Answer.propTypes = {
  handleData: PropTypes.func,
  data: PropTypes.object
}

export default Answer;
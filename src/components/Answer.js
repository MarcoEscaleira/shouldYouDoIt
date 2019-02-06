import React from 'react'

// BUGS:
// data is coming duplicated

const Answer = ({handleData, data: {answer, image}}) => (
  <div className="answer">
    <h1>{answer === 'yes' ? 'Do it' : 'Don\'t do it'}</h1>
    <img src={image} alt="yesOrNoApiImage"/>
    <button onClick={handleData}>Clean</button>
  </div>
);

export default Answer;
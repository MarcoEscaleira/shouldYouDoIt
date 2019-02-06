import React from 'react'

const Answer = ({handleData, data: {answer, image}}) => (
  <div className="answer">
    <h1>{answer === 'yes' ? 'Do it' : 'Don\'t do it'}</h1>
    <img src={image} alt="yesOrNoApiImage"/>
    <button onClick={handleData}>Clean</button>
  </div>
);

export default Answer;
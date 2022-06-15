import React from 'react';

export default function Quizzical(props) {
  const { handleClick } = props;
  return (
    <>
      <div className="topRight"></div>
      <div className="quizzical">
        <h1 className="h1">Quizzical</h1>
        <h4 className="h4">Come have fun!</h4>
        <button className="button" onClick={() => handleClick()}>Start Quiz</button>
      </div>
      <div className="bottomLeft"></div>
    </>
  );
}

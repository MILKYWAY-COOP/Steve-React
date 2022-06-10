import React from 'react';

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? '#59E391' : 'white'
  };

  function Dots(value) {
    const dot = '&#x2022;';
    return(dot.repeat(value))
  }

  const test = Dots(props.value)
  console.log(test)

  return (
    <div
      className="die-face"
      style={styles}
      onClick={() => props.holdDice(props.id)}
    >
      <h2 className="die-value">{props.value}</h2>
    </div>
  );
}

import { findByLabelText } from '@testing-library/react';
import React from 'react';

export default function Die(props) {
  const {value, isHeld, id} = props

  const styles = {
    backgroundColor: isHeld ? '#59E391' : 'white'
  };

  return (
    <div className="die-face" style={styles} onClick={() => props.holdDice(id)}>
      {/* {value.map((i) => (
        <div className="die-value">{ dot.repeat(i)}</div>
      ))} */}
      <div className="die-value">{value}</div>
    </div>
  );
}

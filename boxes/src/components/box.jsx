import React from 'react';

export default function Boxy(props) {
  const styles = {
    backgroundColor: props.isOn ? '	#272727' : '#ebf2f2'
  };
  return <div style={styles} className="box" onClick={() => props.handleClick(props.id)}></div>;
}

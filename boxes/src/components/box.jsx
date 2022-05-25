import React from 'react';

export default function Boxy(props) {
  const styles = {
    backgroundColor: props.isOn ? '#36454F' : '#ebf2f2'
  };
  return <div
    style={styles}
    className="box"></div>;
}
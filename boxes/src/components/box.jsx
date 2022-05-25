import React from 'react';

export default function Boxy(props) {
  const [isOn, setIsOn] = React.useState(props.isOn);

  function toggle() {
    setIsOn(!isOn);
  }
  const styles = {
    backgroundColor: isOn ? '#36454F' : '#ebf2f2'
  };
  return <div style={styles} className="box" onClick={toggle}></div>;
}

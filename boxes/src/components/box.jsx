import React from 'react';

export default function Box(props) {
  const [onOff, setOnOff] = React.useState(props.on);

  const styles = {
    backgroundColor: onOff ? '#222222' : 'transparent'
    };
    
    function toggle() {
        console.log(setOnOff)
        setOnOff(prevOnOff => !prevOnOff)
    }
  return <div style={styles} className="box" onClick={toggle}></div>;
}
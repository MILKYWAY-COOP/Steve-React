import React from 'react';
import boxes from './components/boxes';

export default function App(props) {
  const [box, setBox] = React.useState(boxes);

  const styles = {
    backgroundColor: props.darkMode ? '#36454F' : '#F5F5F5'
  };

  const boxElements = box.map((item) => (
    <div key={item.id} style={styles} className="box"></div>)
  );

  return <main>{boxElements}</main>;
}

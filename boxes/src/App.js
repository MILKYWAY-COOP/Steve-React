import React from 'react';
import boxes from './components/boxes';
import Boxy from './components/box';

export default function App(props) {
  const [box, setBox] = React.useState(boxes);
  const boxElements = box.map((item) => (
    <Boxy
      isOn={item.on}
      key={item.id} />)
  );

  return <main>{boxElements}</main>;
}

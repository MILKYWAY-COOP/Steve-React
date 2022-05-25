import React from 'react';
import boxes from './components/boxes';
import Boxy from './components/box';

export default function App(props) {
  const [box, setBox] = React.useState(boxes);

  function toggle(id) {
    setBox((prevBox) => {
      return prevBox.map((i) => {
        return i.id === id ? { ...i, on: !i.on } : i;
      });
    });
  }

  const boxElements = box.map((item) => (
    <Boxy isOn={item.on} key={item.id} id={item.id} handleClick={toggle} />
  ));

  return <main>{boxElements}</main>;
}

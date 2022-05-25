import React from 'react';
import boxes from './components/boxes';
import Boxy from './components/box';

export default function App(props) {
  const [box, setBox] = React.useState(boxes);

  function toggle(id) {
    setBox((prevBox) => {
      const newBoxes = [];
      for (let i = 0; i < prevBox.length; i++) {
        const currentBox = prevBox[i];
        if (currentBox.id === id) {
          const updatedBox = {
            ...currentBox,
            on: !currentBox.on
          };
          newBoxes.push(updatedBox)
        }
        else {
          newBoxes.push(currentBox)
        }
      }
      return newBoxes
    });
  }

  const boxElements = box.map((item) => (
    <Boxy isOn={item.on} key={item.id} id={item.id} handleClick={toggle} />
  ));

  return <main>{boxElements}</main>;
}

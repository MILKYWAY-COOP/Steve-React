import React from 'react'
import boxes from './components/boxes'
import Box from './components/box'

export default function App(props) {
  const [squares, setSquares] = React.useState(boxes)

  function toggle(id) {
     setSquares((prevSquares) => {
       const newSquares = [];
       for (let i = 0; i < prevSquares.length; i++) {
         const currentSquare = prevSquares[i];
         if (currentSquare.id === id) {
           const updatedSquare = {
             ...currentSquare,
             on: !currentSquare.on
           };
           newSquares.push(updatedSquare);
         } else {
           newSquares.push(currentSquare);
         }
       }
       return newSquares;
     });
  }
  
  const styles = {
    backgroundColor: props.darkMode ? '#222222' : '#cccccc'
  }

  const squaresElements = squares.map((square) => (
    <Box
      key={square.id}
      id={square.id}
      on={square.on}
      toggle={toggle} />
  ));

  return (
    <main>
      {squaresElements }
    </main>
  )
}
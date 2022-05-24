import React from 'react'
import boxes from './components/boxes'
import Box from './components/box'

export default function App(props) {
  const [squares, setSquares] = React.useState(boxes)

  const styles = {
    backgroundColor: props.darkMode ? '#222222' : '#cccccc'
  }

  const squaresElements = squares.map(square => (
    <Box key={square.id} on={ square.on}/>
  ))
  return (
    <main>
      {squaresElements }
    </main>
  )
}
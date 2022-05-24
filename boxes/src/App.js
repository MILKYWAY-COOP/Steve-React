import React from 'react'
import box from './components/box'

export default function App(props) {
  const [squares, setSquares] = React.useState(box)

  const styles = {
    backgroundColor: props.darkMode ? '#222222' : '#cccccc'
  }

  const squaresElements = squares.map(square => (
    <div style={styles} className='box' key={square.id}></div>
  ))
  return (
    <main>
      {squaresElements }
    </main>
  )
}
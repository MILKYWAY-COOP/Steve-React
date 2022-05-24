import React from 'react'
import box from './components/box'

export default function App(props) {
  const [squares, setSquares] = React.useState(box)

  const squaresElements = squares.map(square => (
    <div className='box' key={square.id}></div>
  ))
  return (
    <main>
      {squaresElements }
    </main>
  )
}
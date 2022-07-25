import React from 'react';
import Counter from './components/count';

export default function App() {
  const [count, setCount] = React.useState(0);

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className='counter'>
      {/* create a subtract button */}
      <button onClick={subtract} className="counter--minus">-</button>
      <Counter number={count} />
      <button className='counter--plus' onClick={add}>+</button>
    </div>
  )
}
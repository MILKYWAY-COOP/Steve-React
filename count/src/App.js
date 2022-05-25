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
    <div className="counter">
      <button className="counter--minus" onClick={subtract}>
        –
      </button>
      <Counter number={ count}/>
      <button className="counter--plus" onClick={add}>
        +
      </button>
    </div>
  );
}

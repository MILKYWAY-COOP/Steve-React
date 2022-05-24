import React from 'react';

export default function App() {
  /**
   * Challenge: Create a function called `add` that runs
   * when the + button is clicked. (Can just console.log("add") for now)
   */
  const [count, setCount] = React.useState(0);

  function add() {
    count += 1;
  }

  return (
    <div className="counter">
      <button className="counter--minus" onClick={add}>
        –
      </button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button className="counter--plus">+</button>
    </div>
  );
}
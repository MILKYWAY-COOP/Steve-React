import React from 'react';
import Die from './components/Die';
import { nanoid } from 'nanoid';

function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const myList = [];
    for (let i = 0; i < 10; i++) {
      const myNum = Math.floor(Math.random() * 10) + 1;
      myNum > 6
        ? myList.push({ value: myNum - 4, isHeld: true, id: nanoid() })
        : myList.push({ value: myNum, isHeld: true, id: nanoid() });
    }
    return myList;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  const die = dice.map((item) => {
    return <Die key={item.id} value={item.value} />;
  });

  return (
    <main>
      <div className="dice-container">{die}</div>
      <button className="roll-btn" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;

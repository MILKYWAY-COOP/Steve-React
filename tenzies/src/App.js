import React from 'react';
import Die from './components/Die';

function App() {
  function allNewDice() {
    const myList = [];
    for (let i = 0; i < 10; i++) {
      const myNum = Math.floor(Math.random() * 10) + 1;
      myNum > 6 ? myList.push(myNum - 4) : myList.push(myNum);
    }
    return myList
  }

  return (
    <main>
      <div className="dice-container">
        <Die value="1" />
        <Die value="2" />
        <Die value="3" />
        <Die value="4" />
        <Die value="5" />
        <Die value="6" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
      </div>
    </main>
  );
}

export default App;

import React from 'react';
import Die from './components/Die';

function App() {
  const [dice, setDice] = React.useState(allNewDice);

  function allNewDice() {
    const myList = [];
    for (let i = 0; i < 10; i++) {
      const myNum = Math.floor(Math.random() * 10) + 1;
      myNum > 6 ? myList.push(myNum - 4) : myList.push(myNum);
    }
    return myList;
  }

  const die = dice.map((item) => {
    return <Die value={item} />;
  });

  return (
    <main>
      <div className="dice-container">{die}</div>
    </main>
  );
}

export default App;

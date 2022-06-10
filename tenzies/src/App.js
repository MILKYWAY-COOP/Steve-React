import React from 'react';
import Die from './components/Die';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  const buttonMessage = tenzies ? 'New Game' : 'Roll';

  React.useEffect(() => {
    const myValues = [];
    const myHelds = [];
    const allEqual = (arr) => arr.every((v) => v === arr[0]);
    for (let i = 0; i < dice.length; i++) {
      myValues.push(dice[i].value);
      myHelds.push(dice[i].isHeld);
    }
    if (allEqual(myValues) && allEqual(myHelds)) {
      setTenzies(true);
      console.log('You won');
    }
  }, [dice]);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    };
  }

  function allNewDice() {
    const myList = [];
    for (let i = 0; i < 10; i++) {
      myList.push(generateNewDie());
    }
    return myList;
  }

  function rollDice() {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.isHeld ? die : generateNewDie();
      })
    );
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const die = dice.map((item) => {
    return (
      <Die
        key={item.id}
        id={item.id}
        value={item.value}
        isHeld={item.isHeld}
        holdDice={holdDice}
      />
    );
  });

  return (
    <>
      {tenzies ? <Confetti /> : ''}
      <main>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice-container">{die}</div>
        <button className="roll-btn" onClick={rollDice}>
          {buttonMessage}
        </button>
      </main>
    </>
  );
}

export default App;

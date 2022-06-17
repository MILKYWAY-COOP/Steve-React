import React, { useEffect, useState } from 'react';
import Quizzical from './components/Quizzical';
import Quizzes from './components/Quizzes';
import { useApp } from './components/quizContext';

function App() {
  const [home, setHome] = useState(true);
  const [checkAnswers, setCheckAnswers] = useState(false);
  const { quiz } = useApp();

  function handleClick() {
    setHome(false);
  }

  const Data = quiz.map(
    ({ difficulty, question, correct_answer, answers }, index) => {
      return (
        <Quizzes
          key={index}
          {...{
            difficulty,
            question,
            correctAnswer: correct_answer,
            answers,
            checkAnswers
          }}
          qIndex={index}
        />
      );
    }
  );

  return (
    <div className="App">
      {home ? (
        <Quizzical handleClick={handleClick} />
      ) : (
        <div className="Card">
          {Data}
          <button
            className="checkAnswers"
            onClick={() => setCheckAnswers(!checkAnswers)}
          >
            Check Answers
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

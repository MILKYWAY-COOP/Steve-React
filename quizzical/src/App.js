import React, { useEffect, useState } from 'react';
import Quizzical from './components/Quizzical';
import Quizzes from './components/Quizzes';
import { useApp } from './components/quizContext';

function App() {
  const [home, setHome] = useState(true);
  const { quiz } = useApp();

  function handleClick() {
    setHome(false);
  }

  const Data = quiz.map(
    ({ difficulty, question, correct_answer, incorrect_answers }, index) => {
      return (
        <Quizzes
          key={index}
          question={question}
          difficulty={difficulty}
          correctAnswer={correct_answer}
          incorrectAnswers={incorrect_answers}
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
          <button className="checkAnswers">Check Answers</button>
        </div>
      )}
    </div>
  );
}

export default App;

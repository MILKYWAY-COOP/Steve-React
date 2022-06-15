import React, { useEffect, useState } from 'react';
import Quizzical from './components/Quizzical';
import Quizzes from './components/Quizzes';

function App() {
  const [home, setHome] = useState(true);
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    getQuiz();
  }, []);

  function getQuiz() {
    fetch('https://opentdb.com/api.php?amount=5&type=multiple')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setQuiz(data.results);
      });
  }

  function handleClick() {
    setHome(false);
  }

  const Data = quiz.map(({ difficulty, question, correct_answer, incorrect_answers }) => {
    return (
      <Quizzes
        question={question}
        difficulty={difficulty}
        correctAnswer={correct_answer}
        incorrectAnswers={incorrect_answers}
      />
    );
  });

  return (
    <div className="App">
      {home ? <Quizzical handleClick={handleClick} /> : <div>{Data}</div>}
    </div>
  );
}

export default App;

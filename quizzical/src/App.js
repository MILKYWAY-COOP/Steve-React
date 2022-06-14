import React, { useEffect, useState } from 'react';
import Quizzical from './components/Quizzical';
import Quizzes from './components/Quizzes';

function App() {
  const [home, setHome] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [quiz, setQuiz] = useState([]);

  React.useEffect(() => {
    getQuiz()
  }, [])

  function getQuiz() {
    fetch('https://opentdb.com/api.php?amount=50&type=multiple').then((res) => {
      if (!res.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${res.status}`
        );
      }
      return res.json();
    }).then((data) => {
      setQuiz(data.results)
    })
  }

  function handleClick() {
    setHome(true);
  }

  console.log(quiz);

  const Data = quiz.items?.map((item) => {
    return (
      <Quizzes
        question={item.question}
        difficulty={item.difficulty}
        correctAnswer={item.correct_answer}
      />
    );
  });

  return (
    <div className="App" onClick={() => handleClick()}>
      {!home ? <Quizzical /> : <>{!isLoading && Data}</>}
    </div>
  );
}

export default App;

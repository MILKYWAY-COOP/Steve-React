import React, { useEffect, useState } from 'react';
import Quizzical from './components/Quizzical';
import Quiz from './components/Quizzes';

function App() {
  const [home, setHome] = useState(false);
  const [quiz, setQuiz] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleClick() {
    getLocation();
    setHome(true);
  }

  const getLocation = async () => {
    // if we were already searching for a location, don't do it again
    if (isLoading) return;

    //fetching the data
    const quizData = await fetch(
      'https://opentdb.com/api.php?amount=10&type=multiple'
    );
    const quizDataJson = await quizData.json();

    //saving the data to state
    setQuiz(quizDataJson.results[0]);
    setIsLoading(false);
  };

  console.log(quiz)

  const questionsData = quiz.map((item) => {
    console.log(item)
    return (
      <Quiz
        question={item.question}
        difficulty={item.difficulty}
        correctAnswer={item.correct_answer}
      />
    );
  });
  return (
    <div className="App" onClick={() => handleClick()}>
      {!home ? <Quizzical /> : questionsData}
    </div>
  );
}

export default App;

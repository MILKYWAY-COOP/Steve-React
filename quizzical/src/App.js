import React, { useEffect, useState } from 'react';
import Quizzical from './components/Quizzical';
import Quiz from './components/Quizzes';

function App() {
  const [home, setHome] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [quiz, setQuiz] = useState([]);

  function handleClick() {
    getLocation();
    setHome(true);
  }

  const getLocation = async () => {
    // if we were already searching for a location, don't do it again
    if (isLoading) return;

    //fetching the data 10x
    // for (let i = 0; i++; i < 10) {
    //   const quizData = await fetch(
    //     'https://opentdb.com/api.php?amount=1&type=multiple'
    //   );
    //   const quizDataJson = await quizData.json();
    //   console.log(quizDataJson.results);
    //   console.log("This is working")
    //   //saving the data to state
    //   setQuiz((preQuiz) => preQuiz.push(quizDataJson.results[0]));
    //   setIsLoading(false);
    // }

    for (let i = 0; i < 10; i++) {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=1&type=multiple`
      );
      const json = await response.json();
      setQuiz((preQuiz) => preQuiz.push(json.results[0]));
    }
  };

  console.log(quiz);

  // const questionsData = quiz.map((item) => {
  //   console.log(item)
  //   return (

  //   );
  // });
  return (
    <div className="App" onClick={() => handleClick()}>
      {!home ? (
        <Quizzical />
      ) : (
        <Quiz
          question={quiz.question}
          difficulty={quiz.difficulty}
          correctAnswer={quiz.correct_answer}
        />
      )}
      <div>{Object.keys(quiz)}</div>
    </div>
  );
}

export default App;

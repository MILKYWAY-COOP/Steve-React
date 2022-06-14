import React, { useEffect, useState } from 'react';
import Quizzical from './components/Quizzical';
import Quizzes from './components/Quizzes';

function App() {
  const [home, setHome] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [quiz, setQuiz] = useState([
    {
      category: 'Animals',
      correct_answer: 'Burrow',
      difficulty: 'easy',
      incorrect_answers: ['Nest', 'Den', 'Dray'],
      question: 'What is the name of a rabbit&#039;s abode?',
      type: 'multiple'
    }
  ]);

  const getQuiz = async () => {
    if (isLoading) return;
    try {
      setIsLoading(true);
      for (let i = 0; i < 10; i++) {
        const response = await fetch(
          `https://opentdb.com/api.php?amount=1&type=multiple`
        );
        const json = await response.json();
        setQuiz(prevQuiz => {
          return [
            ...prevQuiz, 
            quiz.push(json.results[0])
          ]
        }) 
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getQuiz();
  }, []);

  function handleClick() {
    setHome(true);
  }

  //console.log(quiz[2].category);
  //console.log(Object.keys(quiz).length)
  console.log(Object.entries(quiz))

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

import React, { useContext, useState, useEffect, createContext } from 'react';

const QuizContext = createContext();

export function useApp() {
  return useContext(QuizContext);
}

export const ContextProvider = ({ children }) => {
  const [quiz, setQuiz] = useState([]);
  const [allQuestions, setAllQuestions] = useState([]);

  const getQuiz = async () => {
    const res = await fetch(
      'https://opentdb.com/api.php?amount=10&type=multiple'
    );
    const data = await res.json();
    setQuiz(data.results);
    getAllQuestions(data.results);
  };

  const getAllQuestions = (questions) =>
    setAllQuestions(
      questions.map((q, index) => {
        return {
          question: index,
          userAnswer: null
        };
      })
    );

  useEffect(() => {
    getQuiz();
  }, []);

  return (
    <QuizContext.Provider value={{ quiz, allQuestions, setAllQuestions }}>{children}</QuizContext.Provider>
  );
};

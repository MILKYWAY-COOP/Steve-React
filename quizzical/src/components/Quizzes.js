import styles from './styles/Quizzes.module.css';
import { useApp } from './quizContext';
import { useEffect } from 'react';

export default function Quiz(props) {
  const { question, correctAnswer, answers, qIndex, checkAnswers } = props;
  const { setAllQuestions, allQuestions } = useApp();

  const ans = answers.map((answer, index) => {
    // check if user has answered this question
    const userAnswer = allQuestions[qIndex].userAnswer;
    const isChecked = userAnswer === answer ? true : false;

    // toggle class for correct/incorrect answer
    const checked = isChecked ? styles.answerChecked : styles.answer;

    const isCorrect =
      answer === correctAnswer ? styles.correct : styles.incorrect;

    return (
      <div
        key={index}
        className={`${checkAnswers ? isCorrect : checked}`}
        onClick={() => toggleClick(answer)}
      >
        {answer}
      </div>
    );
  });

  function toggleClick(answer) {
    if (checkAnswers) return;
    const newQuestion = {
      question: qIndex,
      userAnswer: answer
    };
    // replace old question with new question
    const newAllQuestions = allQuestions.map((question, index) => {
      if (question.question === qIndex) {
        return newQuestion;
      } else {
        return question;
      }
    });
    setAllQuestions(newAllQuestions);
  }

  return (
    <div className={styles.quiz}>
      <div className={styles.question}>{question}</div>
      <div className={styles.answers}>{ans}</div>
      <div className={styles.horizontalLine}></div>
    </div>
  );
}

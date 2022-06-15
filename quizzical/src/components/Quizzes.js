import styles from './styles/Quizzes.module.css';
import { useApp } from './quizContext';

export default function Quiz(props) {
  const { question, correctAnswer, incorrectAnswers, qIndex } = props;

  const answers = [correctAnswer, ...incorrectAnswers];
  const shuffledAnswers = answers.sort(() => 0.5 - Math.random());
  const { setAllQuestions, allQuestions } = useApp();
  

  const ans = shuffledAnswers.map((answer, index) => {
    return (
      <div key={index} className={styles.answer} onClick={() => toggleClick(answer)}>
        {answer}
      </div>
    );
  });

  function toggleClick(answer) {
    // add user answer to allQuestions
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
    }
    );
    setAllQuestions(newAllQuestions);
    console.log(allQuestions);
  }

  return (
    <div className={styles.quiz}>
      <div className={styles.question}>{question}</div>
      <div className={styles.answers} >
        {ans}
      </div>
      <div className={styles.horizontalLine}></div>
    </div>
  );
}

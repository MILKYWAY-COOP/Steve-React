import styles from './styles/Quizzes.module.css';
import { nanoid } from 'nanoid';

export default function Quiz(props) {
  const { question, correctAnswer, incorrectAnswers } = props;
  const answers = [correctAnswer, ...incorrectAnswers];
  const shuffledAnswers = answers.sort(() => 0.5 - Math.random());

  const ans = shuffledAnswers.map((answer, index) => {
    return <div key={index} className={styles.answer}>{answer}</div>;
  });

  function toggleClick(event) {
    console.log(event.currentTarget.innerText);
  }

  return (
    <div className={styles.quiz}>
      <div className={styles.question}>{question}</div>
      <div className={styles.answers} onClick={() => toggleClick()}>{ans}</div>
      <div className={styles.horizontalLine}></div>
    </div>
  );
}

export default function Quiz(props) {
  const { question, difficulty, correctAnswer, incorrectAnswers } = props;
  const answers = [correctAnswer, ...incorrectAnswers];
  const shuffledAnswers = answers.sort((a, b) => 0.5 - Math.random());

  const ans = answers.map((answer, index) => {
    return <div key={index}>{shuffledAnswers}</div>;
  });

  return (
    <>
      <div className="quiz">
        <div className="question">{question}</div>
        <div className="difficulty">{difficulty}</div>
        <div className="answers">{ans}</div>
      </div>
    </>
  );
}

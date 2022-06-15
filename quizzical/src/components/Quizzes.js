export default function Quiz(props) {
  const { question, difficulty, correctAnswer } = props;
  console.log(props.incorrectAnswers);

  return (
    <>
      <div className="quiz">
        <div className="question">{}</div>
        <div className="difficulty">{difficulty}</div>
        <div className="answers"></div>
      </div>
    </>
  );
}

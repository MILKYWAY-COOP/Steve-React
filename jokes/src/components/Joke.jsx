import React from 'react';

export default function Joke(props) {
  const [isShown, setIsShown] = React.useState(false)

  function toggleShown() {
    setIsShown(prevShown => !prevShown)
    console.log(isShown)
  }

  return (
    <>
      <div className="joke">
        <h3>{props.setup}</h3>
        <hr />
        {isShown && <p>{props.punchline}</p>}
        <button onClick={toggleShown}>Punchline</button>
      </div>
    </>
  );
}

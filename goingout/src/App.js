import React from 'react';

export default function App() {
  const [isGoingOut, setIsGoingOut] = React.useState(true);

  function changeState() {
    setIsGoingOut(prevState => !prevState);
  }

  return (
    <div className="state">
      <h1 className="state--title">Do I feel like going out tonight?</h1>
      <div className="state--value" onClick={changeState}>
        <h1>{isGoingOut? "Yes" : "No"}</h1>
      </div>
    </div>
  );
}
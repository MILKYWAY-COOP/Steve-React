import React from 'react';

export default function App() {
  const [isGoingOut, setIsGoingOut] = React.useState(true);
  /**
   * Challenge:
   * - Initialize state for `isGoingOut` as a boolean
   * - Make it so clicking the div.state--value flips that
   *   boolean value (true -> false, false -> true)
   * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
   */
  function changeState() {
    setIsGoingOut(!isGoingOut);
    
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
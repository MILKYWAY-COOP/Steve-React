import React from 'react';


export default function App() {
  const [isImportant, setIsImportant] = React.useState("Yes")

  function handleClick() {
    setIsImportant("No")
  }

  return (
    <div className="state">
      <h1 className="state--title"> Is state important to Know?</h1>
      <div onClick={handleClick} className="state--value">
        <h1>{isImportant}</h1>
      </div>
    </div>
  );
}
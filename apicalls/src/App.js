import React from 'react';

export default function App() {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(1);

  React.useEffect(() => {
    console.log('Effect ran');
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [count]);

  function previousCount() {
    count >= 2
      ? setCount((prevCount) => prevCount - 1)
      : alert('Cannot find 0 or negative value');
  }

  return (
    <div>
      <h2>The Count is {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Get Next Character
      </button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <button onClick={previousCount}>Get Previous Character</button>
    </div>
  );
}

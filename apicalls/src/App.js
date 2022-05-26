import React from 'react';

export default function App() {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log('Effect ran');
    fetch(``)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, []);

  return (
    <div>
      <h2>The Count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}

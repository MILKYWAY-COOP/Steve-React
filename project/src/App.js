import React from 'react';
import './index.css';

export default function App() {
  const [location, setLocation] = React.useState('');
  const [image, setImage] = React.useState([]);
  const [place, setPlace] = React.useState('');


  function handleClick() {
    fetch(
      `https://imdb-api.com/API/AdvancedSearch/k_nxc9dbfe?locations=${place}`,
      {
        method: 'GET' // or 'PUT'
      }
    )
      .then((res) => res.json())
      .then((data) => setLocation(data));
  }

  setImage([...location.results])
  console.log(setImage)

  // function getLocation() {
  //   fetch(
  //     `https://imdb-api.com/API/AdvancedSearch/k_iawy09dx?locations=${place}`,
  //     {
  //       method: 'GET', // or 'PUT'
  //       headers: {
  //         'X-Api-Key': 'z+MsJ/LjQJqDeN8ITnug3w==OXqGX13g8JJgQPXI'
  //       }
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setLocation(data));
  // }

  function handleChange(event) {
    setPlace(event.target.value);
  }

  return (
    <div className="App">
      <div className="form">
        <label htmlFor="place">Tell us where you want to go..</label>
        <input
          type="text"
          name="place"
          placeholder="Example San Fransisco"
          onChange={handleChange}
        />
        <button onClick={() => handleClick()}>Get place</button>
      </div>
      <div>
        <div>
          <pre>{JSON.stringify(location.results, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}

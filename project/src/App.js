import React from 'react';
import './index.css';

export default function App() {
  const [location, setLocation] = React.useState('');
  const [image, setImage] = React.useState('');
  const [place, setPlace] = React.useState('New York');

  console.log(location);
  // const images = [location.results];
  // console.log(images)

  function handleChange(event) {
    setPlace(event.target.value);
  }

  React.useEffect(() => {
    fetch(
      `https://imdb-api.com/API/AdvancedSearch/k_iawy09dx?locations=${place}`,
      {
        method: 'GET', // or 'PUT'
        headers: {
          'X-Api-Key': 'i7oVWpYi/IOshCqTmDSz6A==BiCSSO2IJvwqqeO4'
        }
      }
    )
      .then((res) => res.json())
      .then((data) => setLocation(data));
  }, [place]);

  return (
    <div className="App">
      <div className="form">
        <label htmlFor="place">Tell us where you want to go..</label>
        <input
          type="text"
          name="place"
          placeholder="Example San Fransisco"
        />
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
}

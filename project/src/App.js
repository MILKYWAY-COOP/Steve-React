import React from 'react';
import './index.css';

export default function App() {
  const [movie, setMovie] = React.useState({});
  const [location, setLocation] = React.useState('');
  const [image, setImage] = React.useState('')

  React.useEffect(() => {
    console.log('Effect ran');
    fetch(`https://imdb-api.com/en/API/Title/k_1234567/tt1832382`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [location]);

  function handleChange(event) {
    setLocation(event.target.value)
  }

  console.log(location)
  return (
    <div className="App">
      <div className="form">
        <label for="place">Tell us where you want to go..</label>
        <input type="text" name="place" onChange={handleChange} placeholder="place"/>
      </div>
    </div>
  );
}

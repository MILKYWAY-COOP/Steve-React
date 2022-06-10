import React from 'react';
import './index.css';

export default function App() {
  const [movie, setMovie] = React.useState({});
  const [place, setPlace] = React.useState('');

  React.useEffect(() => {
    console.log('Effect ran');
    fetch(`https://imdb-api.com/en/API/Title/k_1234567/tt1832382`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [place]);

  console.log(movie.title);

  return (
    <div className="App">
      <form className="form--form">
        <label for="place">Tell us where you want to go..</label>
        <input type="text" name="place" />
      </form>
    </div>
  );
}

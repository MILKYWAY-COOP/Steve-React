import { useState } from 'react';
import { Plane } from 'react-loader-spinner';

import Map from './components/map';
import Movies from './components/movies';

import './index.css';

export default function App() {
  const [location, setLocation] = useState('');
  const [place, setPlace] = useState('');
  const [movies, setMovies] = useState([]);
  const [showMovies, setShowMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // get the location when someone clicks the search button
  const handleClick = () => getLocation();

  // save the location to the state when someone types in the search box
  const handleChange = (event) => setPlace(event.target.value);

  const getLocation = async () => {
    // if we were already searching for a location, don't do it again
    if (isLoading) return;

    // set the loading state to true
    setIsLoading(true);
    const locationData = await fetch(
      `https://api.api-ninjas.com/v1/city?name=${place}`,
      {
        method: 'GET',
        headers: {
          'X-Api-Key': process.env.REACT_APP_API_NINJAS_KEY
        }
      }
    );

    const movieData = await fetch(
      `https://imdb-api.com/API/AdvancedSearch/${process.env.REACT_APP_API_IMDB_KEY}?locations=${place}`
    );
    const movieDataJson = await movieData.json();
    const dataJson = await locationData.json();

    // save the location and movies to the state
    setMovies(movieDataJson.results);
    setLocation(dataJson[0]);

    // set the loading state to false and show the movies
    setShowMovies(true);
    setIsLoading(false);
  };

  return (
    <div className="App">
      {/* if we are not (!) showing moves show the search form */}
      {!showMovies ? (
        <div className="form">
          <label htmlFor="place">Tell us where you want to go..</label>
          <input
            type="text"
            name="place"
            placeholder="Example: San Francisco"
            onChange={handleChange}
          />
          <div className="buttonWrapper">
            <button
              onClick={() => handleClick()}
              className={isLoading ? 'loading' : ''}
            >
              {isLoading ? 'Loading...' : 'Get Movies'}
            </button>
            {isLoading && (
              <Plane ariaLabel="loading-indicator" wrapperClass="loader" />
            )}
          </div>
        </div>
      ) : (
        <>
          {/* else show the map and movies */}
          <div className="info-window">
            <Movies movies={movies} name={location.name} />
            <div className="mapWrapper">
              <Map {...location} />
            </div>
          </div>
          <button onClick={() => setShowMovies(false)} className="back-button">
            Search again...
          </button>
        </>
      )}
    </div>
  );
}

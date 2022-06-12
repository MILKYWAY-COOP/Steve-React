import { useState, useRef, useEffect } from 'react';

import PopOut from './popout';
import styles from './styles/movies.module.css';

export default function Movies(props) {
  const { movies, name } = props;

  // the state for the movies
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isPopoutVisible, setPopoutVisibility] = useState(false);

  const handleClick = (movie) => {
    // save the movie to the state and show the popout
    setSelectedMovie(movie);
    setPopoutVisibility(true);
  };

  const header = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      // if the user scrolls down, re-style the header
      if (window.scrollY > 10) {
        header.current.classList.add(styles.headerScrolled);
      } else {
        header.current.classList.remove(styles.headerScrolled);
      }
    });

    return () => {
      // remove the event listener when the component unmounts
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <div>
      {name && (
        <h1 className={styles.location} ref={header}>
          Movies filmed in {name}
        </h1>
      )}
      <div className={styles.movies}>
        {/* loop through the movies and create a list of them */}
        {movies.map((movie) => (
          <div
            className={styles.movie}
            key={movie.id}
            onClick={() => handleClick(movie)}
          >
            <img src={movie.image} alt={movie.title} />
            <h2 className={styles.title}>{movie.title}</h2>
          </div>
        ))}
      </div>

      {/* if the popout is visible, show it */}
      {isPopoutVisible && (
        <PopOut
          plot={selectedMovie.plot}
          rating={selectedMovie.imDbRating}
          title={selectedMovie.title}
          onClose={() => setPopoutVisibility(false)}
        />
      )}
    </div>
  );
}

import React, { useEffect, useState } from 'react';

function MovieData() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((res) => res.json())
      // .then((json) => json.movies)
      // .then((item) => item)
      .then((json) => setMovieData(json.movies));
  }, []);

  let newMovie = movieData.map((movie) => {
    return <li key={movie.id}>{JSON.stringify(movie)}</li>;
    // return <li>{movie.title}</li>;
  });

  return (
    <>
      <h1>hello Movie Data</h1>
      <ul>{newMovie}</ul>
      {/* <ul>{newMovie}</ul> */}
    </>
  );
}

export default MovieData;

import React from "react";
import { Movie } from "./Movie";

function Movies(props) {
  const { movies = [] } = props;
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imbdID} {...movie} />)
      ) : (
        <h2>No results</h2>
      )}
    </div>
  );
}

export { Movies };

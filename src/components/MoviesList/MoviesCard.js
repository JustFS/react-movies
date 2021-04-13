import React, { useState } from "react";
import "./movieCard.scss";

const MoviesCard = (props) => {
  const [movie] = useState(props.movie);
  return (
    <div className="moviesCard">
      <img
        className="img"
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt=""
      />
      <h2>{movie.original_title}</h2>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MoviesCard;

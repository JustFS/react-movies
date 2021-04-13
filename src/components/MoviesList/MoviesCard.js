import React, { useState } from "react";
import "./movieCard.scss";

const MoviesCard = ({ movie }) => {
  const [data] = useState(movie);
  return (
    <div className="moviesCard">
      {data.poster_path && (
        <img
          className="img"
          src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
          alt=""
        />
      )}
      <h2>{data.original_title}</h2>
      <p>{data.overview}</p>
    </div>
  );
};

export default MoviesCard;

import React from "react";

const MovieCard = ({ movie, index }) => {
  return (
    <div className="movie">
      <div className="">
        <p>{movie.Year}</p>
      </div>
      <div className="">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div className="">
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;

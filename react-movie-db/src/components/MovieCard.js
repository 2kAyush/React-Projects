import React from "react";
import { Link } from "react-router-dom";

import "../styles/MovieCard.css";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie-list/${movie.imdbID}`}>
      <div>
        <div className="movie-card">
          <img src={movie.Poster} alt={movie.title} />
          <h3>{movie.Title}</h3>
          <h4>Year: {movie.Year}</h4>
        </div>
      </div>
    </Link>
  );
}

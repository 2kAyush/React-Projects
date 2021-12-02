import React from "react";
import "../styles/MovieList.css";
import MovieCard from "./MovieCard";

export default function MovieList({ isLoading, movieList }) {
  if (isLoading) return <div className="movie-list">Loading...</div>;
  if (movieList.length === 1) {
    if (movieList[0].Title === "Sorry") {
      return (
        <div className="movie-list">
          <h1>No movies Found...</h1>
        </div>
      );
    }
  }
  return (
    <div className="movie-list">
      {movieList.map((movie) => (
        <MovieCard movie={movie} key={movie.imdbID} />
      ))}
    </div>
  );
}

/* {movieList.map((movie, idx) => (
        <div className="movie-item" key={idx}>
          <img src={movie.Poster} alt={movie.title} />
          <div className="movie-item-info">
            <h3>{movie.Title}</h3>
            <h4>{movie.Year}</h4>
          </div>
        </div>
      ))} */

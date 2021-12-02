import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "../styles/MovieDetails.css";

export default function MovieDetails() {
  const [isLoading, setisLoading] = useState(true);
  const [movieDetails, setmovieDetails] = useState(null);

  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setisLoading(true);
      const res = await axios.get(
        `https://www.omdbapi.com/?i=${id}&&apikey=aa660442`
      );
      // console.log(res);
      setmovieDetails(res.data);
      setisLoading(false);
    };
    fetchMovieDetails();
  }, [id]);
  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (movieDetails) {
    return (
      <div className="movie-details">
        <h1>{movieDetails.Title}</h1>
        <img src={movieDetails.Poster} alt={movieDetails.Title} />
        <p>Actors: {movieDetails.Actors}</p>
        <p>Awards: {movieDetails.Awards}</p>
        <p>Plot: {movieDetails.Plot}</p>
      </div>
    );
  }
  return null;
}

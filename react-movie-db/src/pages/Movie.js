import React from "react";

import { MovieList, Footer } from "../components";

export default function Movie({
  isLoading,
  movieList,
  nextPage,
  previousPage,
}) {
  return (
    <div>
      <MovieList isLoading={isLoading} movieList={movieList} />
      <Footer nextPage={nextPage} previousPage={previousPage} />
    </div>
  );
}

import React, { useState } from "react"; // React is !imp IG
import "./App.css";
import { Navbar /* MovieList,  Footer */ } from "./components";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

import { /* Home, */ About, Movie, MovieDetails } from "./pages";

const API_BASE_URL = "http://www.omdbapi.com";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [page, changePage] = useState(1);
  let totalPages = 0;
  const search = async (e) => {
    if (e.code === "Enter") {
      changePage(1);
      handleChange(); // paste here the commented thing
    }
  };

  const handleChange = async () => {
    setIsLoading(true);
    const RES = await axios.get(
      `${API_BASE_URL}/?s=${inputValue}&apikey=aa660442&page=${page}`
    );
    // console.log(RES.data["Search"]);
    console.log(RES);
    if (RES.data.Response === "True") {
      setMovies(RES.data["Search"]);
      totalPages = Math.floor(Number(RES.data.totalResults) / 10);
      // console.log("pages: ", totalPages);
      // console.log("current: ", page);
    } else {
      setMovies([{ Title: "Sorry" }]);
    }
    setIsLoading(false);
  };

  const previousPage = () => {
    if (page !== 0) {
      changePage(page - 1);
      console.log(page);
      handleChange();
    }
  };

  const nextPage = () => {
    if (page !== totalPages) {
      console.log("before next:", page);
      changePage(page + 1);
      console.log("after next:", page);
      handleChange();
    }
  };

  return (
    <div className="main">
      <Navbar
        search={search}
        innputValue={inputValue}
        setInputValue={setInputValue}
      />
      <Router>
        <Routes>
          {["/", "/movie-list"].map((path) => (
            <Route
              path={path}
              element={
                <Movie
                  isLoading={isLoading}
                  movieList={movies}
                  nextPage={nextPage}
                  previousPage={previousPage}
                />
              }
            />
          ))}
          <Route path="/movie-list/:id" element={<MovieDetails />} />

          <Route path="/about" element={<About />} />
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/movie" element={<Movie />} /> */}
        </Routes>
      </Router>
      {/* <h1>{isLoading ? "Loading" : "Not Loading"}</h1> */}
      {/* <Footer nextPage={nextPage} previousPage={previousPage} /> */}
    </div>
  );
}

export default App;

// element={<MovieList isLoading={isLoading} movieList={movies} />}

/* setIsLoading(true);
      const RES = await axios.get(
        `${API_BASE_URL}/?s=${inputValue}&apikey=aa660442&page=${page}`
      );
      // console.log(RES.data["Search"]);
      console.log(RES);
      if (RES.data.Response === "True") {
        setMovies(RES.data["Search"]);
        totalPages = Math.floor(Number(RES.data.totalResults) / 10);
      } else {
        setMovies([{ Title: "Sorry not Found" }]);
      }
      setIsLoading(false); */
/* <MovieList isLoading={isLoading} movieList={movies} /> */

// This is for routing in /movie-list page

/* <Route
            // path="/movie-list"
            path={["/movie-list", "/"]}
            element={
              <Movie
                isLoading={isLoading}
                movieList={movies}
                nextPage={nextPage}
                previousPage={previousPage}
              />
            }
          /> */

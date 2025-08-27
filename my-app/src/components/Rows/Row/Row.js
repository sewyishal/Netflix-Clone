import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState(""); // ✅ FIXED

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v")); // ✅ FIXED
        })
        .catch((error) => console.log("Trailer not found:", error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: { autoplay: 1 },
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (
            movie,
            index // ✅ FIXED (added index)
          ) => (
            <img
              onClick={() => handleClick(movie)}
              key={index}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`} // ✅ FIXED
              alt={movie.name}
            />
          )
        )}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}{" "}
        {/* ✅ FIXED */}
      </div>
    </div>
  );
};

export default Row;

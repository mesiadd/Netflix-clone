import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";
const base_Url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      // console.log(request.data.results)

      return request;
    }
    fetchData();
  }, [fetchUrl]);
  // console.log(movies)
  const opts = {
    innerHeight: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_Url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;

// import React,{useState,useEffect} from 'react';
// import "./Row.css";
// import axios from "./axios";
// const base_Url = "https://image.tmdb.org/t/p/original/";

// function Row({ title, fetchUrl })  {
//     const [movies, setMovies] = useState([]);

//     useEffect(() => {
//         async function fetchData() {
//             const request = await axios.get(fetchUrl)
//             setMovies(request.data.results);
//             // console.log(request.data.results);
//             return request;

//         }
//         fetchData()

//     }, [fetchUrl])
//     //  console.log(movies);
// return (
//     <div className="row">
//     <h1>{title}</h1>
//     <div className="row_poster">

//         {movies?.map((movie) => (
//         <img
//             className="row_posters"
//             src={`${base_Url}${movie.poster_path}`}
//             alt={movie.name}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Row;

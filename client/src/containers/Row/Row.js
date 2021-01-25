import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../../request/axios";
import ButtonSwift from "../../components/ButtonSwift/ButtonSwift";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [grid, setGrid] = useState(false);

  function handleClick() {
    if (grid) {
      setGrid(false);
    } else {
      setGrid(true);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      {/* title */}
      <div className="row__header">
        <h2 className="row__title">{title}</h2>
        <ButtonSwift handleClick={handleClick} />
      </div>

      {/* container => posters */}
      <div className={grid ? "row__posters--gridMode" : "row__posters"}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;

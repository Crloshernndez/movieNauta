import React from "react";
import MovieDetail from "../MovieDetail/MovieDetail";

function MoviePoster({
  url,
  name,
  movieName,
  grid,
  title,
  description,
  movie,
}) {
  return (
    <>
      {grid ? (
        <div>
          <img className={`row__poster`} src={url} alt={name} />
          <div className="MoviePoster__gridMode">
            <h2>{movieName}</h2>
            <MovieDetail
              title={title}
              description={description}
              movie={movie}
            />
          </div>
        </div>
      ) : (
        <img className={`row__poster`} src={url} alt={name} />
      )}
    </>
  );
}

export default MoviePoster;

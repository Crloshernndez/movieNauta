import React from "react";
import "./Movie.css";
import Row from "../../containers/Row/Row";
import requests from "../../request/Tmdb";

function Movies() {
  return (
    <div className="movies">
      <h1 className="movies__title">Movie</h1>
      <Row
        className="movies__row"
        fetchUrl={requests.fetchTrending}
        title="Trending Now"
      />
    </div>
  );
}

export default Movies;

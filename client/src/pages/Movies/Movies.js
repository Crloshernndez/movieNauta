import React from "react";
import "./Movie.css";
import Row from "../../containers/Row/Row";
import requests from "../../request/requests";

function Movies() {
  return (
    <div className="movies">
      <h1 className="movies__title">Movies</h1>
      <Row
        className="movies__row"
        fetchUrl={requests.popularMovies}
        title="Popular Movies"
      />
      <Row
        className="movies__row"
        fetchUrl={requests.top_ratedMovies}
        title="Top Rated xb"
      />
      <Row
        className="movies__row"
        fetchUrl={requests.upcomingMovies}
        title="Comming Soon !!!"
      />
      <Row
        className="movies__row"
        fetchUrl={requests.documentariesMovies}
        title="Documentaries"
      />
    </div>
  );
}

export default Movies;

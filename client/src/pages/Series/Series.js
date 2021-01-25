import React from "react";
import "./Series.css";

import Row from "../../containers/Row/Row";
import requests from "../../request/Tmdb";

function Series() {
  return (
    <div className="series">
      <h1 className="series__title">Series</h1>
      <Row
        className="movies__row"
        fetchUrl={requests.fetchTrending}
        title="Trending Now"
      />
    </div>
  );
}

export default Series;

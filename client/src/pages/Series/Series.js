import React from "react";
import "./Series.css";

import Row from "../../containers/Row/Row";
import requests from "../../request/requests";

function Series() {
  return (
    <div className="series">
      <h1 className="series__title">Series</h1>
      <Row
        className="movies__row"
        fetchUrl={requests.popularSeries}
        title="Popular Series Now"
      />
      <Row
        className="movies__row"
        fetchUrl={requests.netflixOriginalsSeries}
        title="Netflix Originals <--"
      />
      <Row
        className="movies__row"
        fetchUrl={requests.top_ratedSeries}
        title="Top_Rated !!!"
      />
    </div>
  );
}

export default Series;

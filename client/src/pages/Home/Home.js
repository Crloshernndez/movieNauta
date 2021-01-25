import React from "react";
import Banner from "../../components/Banner/Banner";
import Row from "../../containers/Row/Row";
import requests from "../../request/Tmdb";

function Home() {
  return (
    <div className="home">
      <Banner />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default Home;

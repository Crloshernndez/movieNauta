import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Row from "../../containers/Row/Row";
import requests from "../../request/Tmdb";
import axios from "../../request/axios";

function Home() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        //   bloque para pedir pelicula random
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="home">
      <Banner
        title={movie?.title || movie?.name || movie?.original_name}
        description={truncate(movie?.overview, 150)}
        movie={movie?.backdrop_path}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default Home;

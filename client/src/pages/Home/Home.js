import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Row from "../../containers/Row/Row";
import requests from "../../request/requests";
import axios from "../../request/axios";

function Home() {
  const [movie, setMovie] = useState([]);

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.popularMovies);
      const data = request.data.body.results;
      console.log(data);

      setMovie(
        //   bloque para pedir pelicula random
        data[Math.floor(Math.random() * data.length - 1)]
      );
      return data;
    }
    fetchData();
  }, []);
  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="home">
      <Banner
        title={movie?.title || movie?.name || movie?.original_name}
        description={truncate(movie?.overview, 150)}
        image={movie?.backdrop_path}
      />
      <Row title="Popular Now" fetchUrl={requests.popularMovies} />
    </div>
  );
}

export default Home;

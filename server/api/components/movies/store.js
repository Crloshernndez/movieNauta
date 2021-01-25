const config = require("../../../config");

const fetch = require("node-fetch");

const upcoming = async () => {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=d25c60689f82d78efa196342437cdd62&language=en-US"
    // `${config.tmdb.baseUrl}/movie/upcoming?api_key=${config.tmdb.apiKey}&language=en-US`
  );
  const response = data.json();
  return response;
};

module.exports = {
  upcoming,
};

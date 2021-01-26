const config = require("../../../config");
const request = require("./requests");

const fetch = require("node-fetch");

const getPopular = async () => {
  const data = await fetch(
    `${config.tmdb.baseUrl}${request.popular}${config.tmdb.apiKey}`
  );
  const response = data.json();
  return response;
};
const getTop_rated = async () => {
  const data = await fetch(
    `${config.tmdb.baseUrl}${request.top_rated}${config.tmdb.apiKey}`
  );
  const response = data.json();
  return response;
};
const getNetflixOriginals = async () => {
  const data = await fetch(
    `${config.tmdb.baseUrl}${request.netflixOriginals}${config.tmdb.apiKey}`
  );
  const response = data.json();
  return response;
};

module.exports = {
  getPopular,
  getTop_rated,
  getNetflixOriginals,
};

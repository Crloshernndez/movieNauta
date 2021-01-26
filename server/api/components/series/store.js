const config = require("../../../config");
const request = require("./requests");

const fetch = require("node-fetch");

const popular = async () => {
  const data = await fetch(
    `${config.tmdb.baseUrl}${request.popular}${config.tmdb.apiKey}`
  );
  const response = data.json();
  return response;
};
const toprated = async () => {
  const data = await fetch(
    `${config.tmdb.baseUrl}${request.toprated}${config.tmdb.apiKey}`
  );
  const response = data.json();
  return response;
};
const fetchNetflixOriginals = async () => {
  const data = await fetch(
    `${config.tmdb.baseUrl}${request.fetchNetflixOriginals}${config.tmdb.apiKey}`
  );
  const response = data.json();
  return response;
};

module.exports = {
  upcoming,
  popular,
  toprated,
  fetchNetflixOriginals,
};

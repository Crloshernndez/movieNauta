const config = require("../../../config");
const request = require("./requests");

const fetch = require("node-fetch");

const getUpcoming = async () => {
  const data = await fetch(
    `${config.tmdb.baseUrl}${request.upcoming}${config.tmdb.apiKey}`
  );
  const response = data.json();
  return response;
};
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
const getDocumentaries = async () => {
  const data = await fetch(
    `${config.tmdb.baseUrl}${request.documentaries}${config.tmdb.apiKey}`
  );
  const response = data.json();
  return response;
};

module.exports = {
  getUpcoming,
  getPopular,
  getTop_rated,
  getDocumentaries,
};

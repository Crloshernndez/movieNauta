const config = require("../../../config");
const request = require("./requests");

const fetch = require("node-fetch");

const upcoming = async () => {
  const data = await fetch(
    `${config.tmdb.baseUrl}${request.upcoming}${config.tmdb.apiKey}`
  );
  const response = data.json();
  return response;
};
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
const documentaries = async () => {
  const data = await fetch(
    `${config.tmdb.baseUrl}${request.documentaries}${config.tmdb.apiKey}`
  );
  const response = data.json();
  return response;
};

module.exports = {
  upcoming,
  popular,
  toprated,
  documentaries,
};

require("dotenv").config;

module.exports = {
  api: {
    port: process.env.PORT || 3010,
    host: process.env.HOST || "http://localhost:",
  },
  tmdb: {
    apiKey: process.env.ApiKey || "d25c60689f82d78efa196342437cdd62",
    baseUrl: "https://api.themoviedb.org/3/",
  },
};

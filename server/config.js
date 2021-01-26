require("dotenv").config();

module.exports = {
  api: {
    port: process.env.PORT || 3010,
    host: process.env.HOST || "http://localhost:",
  },
  tmdb: {
    apiKey: process.env.ApiKey,
    baseUrl: "https://api.themoviedb.org/3/",
  },
};

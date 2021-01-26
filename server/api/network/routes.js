const express = require("express");

//traeremos cada componente desde su respectivo network file
const movies = require("../components/movies/network");
const series = require("../components/series/network");

const routes = function (server) {
  // se crean las rutas para cada componente
  server.use("/movies", movies);
  server.use("/series", series);
};

module.exports = routes;

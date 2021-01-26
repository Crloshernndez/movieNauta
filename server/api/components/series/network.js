const express = require("express");
const response = require("../../network/responses");
const controller = require("./controller");

const router = express.Router();

router.get("/popular", popular);
router.get("/top_rated", toprated);
router.get("/fetchNetflixOriginals", fetchNetflixOriginals);

function popular(req, res) {
  controller
    .popular()
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch((err) => response.error(req, res, err.message, 500));
}
function toprated(req, res) {
  controller
    .toprated()
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch((err) => response.error(req, res, err.message, 500));
}
function fetchNetflixOriginals(req, res) {
  controller
    .fetchNetflixOriginals()
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch((err) => response.error(req, res, err.message, 500));
}

module.exports = router;

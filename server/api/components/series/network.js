const express = require("express");
const response = require("../../network/responses");
const controller = require("./controller");

const router = express.Router();

router.get("/popular", getPopular);
router.get("/top_rated", getTop_rated);
router.get("/netflixOriginals", getNetflixOriginals);

function getPopular(req, res) {
  controller
    .getPopular()
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch((err) => response.error(req, res, err.message, 500));
}
function getTop_rated(req, res) {
  controller
    .getTop_rated()
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch((err) => response.error(req, res, err.message, 500));
}
function getNetflixOriginals(req, res) {
  controller
    .getNetflixOriginals()
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch((err) => response.error(req, res, err.message, 500));
}

module.exports = router;

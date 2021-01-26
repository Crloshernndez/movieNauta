const express = require("express");
const response = require("../../network/responses");
const controller = require("./controller");

const router = express.Router();

router.get("/upcoming", getUpcoming);
router.get("/popular", getPopular);
router.get("/top_rated", getTop_rated);
router.get("/documentaries", getDocumentaries);

function getUpcoming(req, res) {
  controller
    .getUpcoming()
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch((err) => response.error(req, res, err.message, 500));
}
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
function getDocumentaries(req, res) {
  controller
    .getDocumentaries()
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch((err) => response.error(req, res, err.message, 500));
}

module.exports = router;

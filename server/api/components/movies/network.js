const express = require("express");
const response = require("../../network/responses");
const controller = require("./controller");

const router = express.Router();

router.get("/upcoming", upcoming);
router.get("/popular", popular);
router.get("/top_rated", toprated);
router.get("/documentaries", documentaries);

function upcoming(req, res) {
  controller
    .upcoming()
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch((err) => response.error(req, res, err.message, 500));
}
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
function documentaries(req, res) {
  controller
    .documentaries()
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch((err) => response.error(req, res, err.message, 500));
}

module.exports = router;

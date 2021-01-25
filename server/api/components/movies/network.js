const express = require("express");
const response = require("../../network/responses");
const controller = require("./controller");

const router = express.Router();

router.get("/upcoming", upcoming);

function upcoming(req, res) {
  controller
    .upcoming()
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch((err) => response.error(req, res, err.message, 500));
}

module.exports = router;

const express = require("express");
const bodyParser = require("body-parser");
const config = require("../config");
const router = require("./network/routes");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(config.api.port, () => {
  console.log(`Api listening on ${config.api.host}${config.api.port}`);
});

router(app);

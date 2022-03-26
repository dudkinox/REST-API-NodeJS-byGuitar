"use strict";
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config");
const api = require("./routes/routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api", api.routes);

app.listen(config.port, () => console.log("http://localhost:" + config.port));

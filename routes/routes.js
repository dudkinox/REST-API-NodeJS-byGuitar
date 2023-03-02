const express = require("express");
const { getAllAccount } = require("../controllers/loginController");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("../swagger");

const router = express.Router();

router.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

router.get("/display", getAllAccount);

module.exports = {
  routes: router,
};

const express = require("express");
const {
  addAccount,
  getAllAccount,
  getAccount,
  updateAccount,
  deleteAccount,
} = require("../controllers/loginController");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("../swagger");

const router = express.Router();

router.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
router.post("/login", addAccount);
router.get("/login", getAllAccount);
router.get("/login/:id", getAccount);
router.put("/login/:id", updateAccount);
router.delete("/login/:id", deleteAccount);

module.exports = {
  routes: router,
};

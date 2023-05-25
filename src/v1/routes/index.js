const express = require("express");
const router = express.Router();

// Import route handlers
const v1ItemRouter = require("./item-routes");

// Use route handlers
router.use("/api/v1/items", v1ItemRouter);

module.exports = router;

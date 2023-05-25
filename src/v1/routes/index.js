const express = require("express");
const router = express.Router();

// Import route handlers
const v1ItemRouter = require("./item-routes");
const v1SupplierRouter = require("./supplier-routes");

// Use route handlers
router.use("/api/v1/items", v1ItemRouter);
router.use("/api/v1/suppliers", v1SupplierRouter);

module.exports = router;

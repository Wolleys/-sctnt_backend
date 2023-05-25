const express = require("express");
const router = express.Router();

// Import supplier controllers
const {
    getOneSupplier,
    getAllSuppliers,
    createNewSupplier,
    updateOneSupplier,
    deleteOneSupplier,
} = require("../../../controllers/supplier-controller");

// Import middleware
const { validateSchema } = require("../../../middlewares/validate-schema");

// Import schema
const { supplierSchema } = require("../../../schemas/supplier-schema");

// Supplier routes
// 1. Get all suppliers
router.get("/", getAllSuppliers);

// 2. Get one supplier by id
router.get("/:supplierId", getOneSupplier);

// 3. Create a new supplier
router.post("/", validateSchema(supplierSchema), createNewSupplier);

// 4. Update one supplier by id
router.patch("/:supplierId", validateSchema(supplierSchema), updateOneSupplier);

// 5. Delete one supplier by id
router.delete("/:supplierId", deleteOneSupplier);

module.exports = router;

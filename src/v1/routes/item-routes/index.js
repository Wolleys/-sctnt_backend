const express = require("express");
const router = express.Router();

// Import item controllers
const {
    getOneItem,
    getAllItems,
    createNewItem,
    updateOneItem,
    deleteOneItem,
} = require("../../../controllers/item-controller");

// Import middleware
const { validateSchema } = require("../../../middlewares/validate-schema");

// Import schema
const { itemSchema } = require("../../../schemas/item-schema");

// Item routes
// 1. Get all items
router.get("/", getAllItems);

// 2. Get one item by id
router.get("/:itemId", getOneItem);

// 3. Create a new item
router.post("/", validateSchema(itemSchema), createNewItem);

// 4. Update one item by id
router.patch("/:itemId", updateOneItem);

// 5. Delete one item by id
router.delete("/:itemId", deleteOneItem);

module.exports = router;

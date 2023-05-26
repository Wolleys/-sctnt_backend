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

/**
 * @openapi
 * /api/v1/items:
 *   get:
 *     tags:
 *       - Items
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: Get a specific item
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Items"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 error:
 *                    type: string 
 *                    example: "Some error message"
 */
router.get("/", getAllItems);

// 2. Get one item by id
router.get("/:itemId", getOneItem);

// 3. Create a new item
router.post("/", validateSchema(itemSchema), createNewItem);

// 4. Update one item by id
router.patch("/:itemId", validateSchema(itemSchema), updateOneItem);

// 5. Delete one item by id
router.delete("/:itemId", deleteOneItem);

module.exports = router;

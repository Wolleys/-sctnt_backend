const { getOneItem } = require("./getOneItem");
const { getAllItems } = require("./getAllItems");
const { createNewItem } = require("./createNewItem");
const { updateOneItem } = require("./updateOneItem");
const { deleteOneItem } = require("./deleteOneItem");

/**
 * @openapi
 * components:
 *   schemas:
 *     Items:
 *       type: object
 *       properties:
 *         description: 
 *           type: string
 *           example: Smartphone  
 *         part_number:
 *           type: string
 *           example: SMT65464
 *         price:
 *           type: FLOAT(11, 2)
 *           example: 2500.00
 *         part_status:
 *           type: string
 *           example: New
 *         location:
 *           type: string
 *           example: Bin2
 *         supplier_id:
 *           type: string
 *           example: 88e46482-5495-4ac2-b5a7-4d79d5dcf2e2
 */


module.exports = {
    getOneItem,
    getAllItems,
    createNewItem,
    updateOneItem,
    deleteOneItem,
};

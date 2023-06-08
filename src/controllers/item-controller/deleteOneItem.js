const { deleteOneEntity } = require("../controller-module");
const itemService = require("../../services/item-service");

const deleteOneItem = (req, res) => {
    deleteOneEntity(req, res, "itemId", itemService.deleteOneItem);
};

module.exports = { deleteOneItem };

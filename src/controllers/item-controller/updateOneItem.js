const { updateOneEntity } = require("../controller-module");
const itemService = require("../../services/item-service");

const updateOneItem = (req, res) => {
    updateOneEntity(req, res, "itemId", itemService.updateOneItem);
};

module.exports = { updateOneItem };

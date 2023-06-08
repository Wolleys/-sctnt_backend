const { getOneEntity } = require("../controller-module");
const itemService = require("../../services/item-service");

const getOneItem = (req, res) => {
    getOneEntity(req, res, "itemId", itemService.getOneItem);
};

module.exports = { getOneItem };

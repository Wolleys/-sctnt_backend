const { createEntity } = require("../controller-module");
const itemService = require("../../services/item-service");

const createNewItem = (req, res) => {
    createEntity(req, res, itemService.createNewItem);
};

module.exports = { createNewItem };

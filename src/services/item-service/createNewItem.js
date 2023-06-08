const { createNewEntity } = require("../service-module");
const Item = require("../../data-access/Item");

const createNewItem = (model, newItem) => {
    return createNewEntity(model, newItem, Item.createNewItem);
};

module.exports = { createNewItem };

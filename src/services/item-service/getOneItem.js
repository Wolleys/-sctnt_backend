const { getOneEntity } = require("../service-module");
const Item = require("../../data-access/Item");

const getOneItem = (model, itemId) => {
    return getOneEntity(model, itemId, Item.getOneItem);
};

module.exports = { getOneItem };

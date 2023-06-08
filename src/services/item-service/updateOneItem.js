const { updateOneEntity } = require("../service-module");
const Item = require("../../data-access/Item");

const updateOneItem = (model, itemId, data) => {
    return updateOneEntity(model, itemId, data, Item.updateOneItem);
};

module.exports = { updateOneItem };

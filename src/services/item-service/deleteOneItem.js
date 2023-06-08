const { deleteOneEntity } = require("../service-module");
const Item = require("../../data-access/Item");

const deleteOneItem = (model, itemId) => {
    return deleteOneEntity(model, itemId, Item.deleteOneItem);
};

module.exports = { deleteOneItem };

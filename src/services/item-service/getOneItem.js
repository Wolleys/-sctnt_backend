const Item = require("../../database/Item");

const getOneItem = (itemId) => {
    const item = Item.getAllItems(itemId);
    return item;
};

module.exports = { getOneItem };

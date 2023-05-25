const Item = require("../../database/Item");

const updateOneItem = (itemId, data) => {
    const item = Item.updateOneItem(itemId, data);
    return item;
};

module.exports = { updateOneItem };

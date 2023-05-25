const Item = require("../../database/Item");

const deleteOneItem = (itemId) => {
    const item = Item.deleteOneItem(itemId);
    return item;
};

module.exports = { deleteOneItem };

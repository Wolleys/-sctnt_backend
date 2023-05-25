const Item = require("../../database/Item");

const createNewItem = (newItem) => {
    const createdItem = Item.createNewItem(newItem);
    return createdItem;
};

module.exports = { createNewItem };

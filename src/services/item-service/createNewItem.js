const Item = require("../../data-access/Item");

const createNewItem = (model, newItem) => {
    try {
        const createdItem = Item.createNewItem(model, newItem);
        return createdItem;
    } catch (error) {
        throw error;
    }
};

module.exports = { createNewItem };

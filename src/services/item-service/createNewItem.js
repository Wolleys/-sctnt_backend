const Item = require("../../database/Item");

const createNewItem = (model, newItem) => {
    try {
        const createdItem = Item.createNewItem(model, newItem);
        return createdItem;
    } catch (error) {
        throw error;
    }
};

module.exports = { createNewItem };

const Item = require("../../database/Item");

const getAllItems = (model, page, size, q) => {
    try {
        const allItems = Item.getAllItems(model, page, size, q);
        return allItems;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllItems };

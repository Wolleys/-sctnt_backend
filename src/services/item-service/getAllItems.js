const Item = require("../../database/Item");

const getAllItems = (model) => {
    try {
        const allItems = Item.getAllItems(model);
        return allItems;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllItems };

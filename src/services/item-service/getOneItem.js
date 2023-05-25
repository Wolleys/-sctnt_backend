const Item = require("../../database/Item");

const getOneItem = (model, itemId) => {
    try {
        const item = Item.getOneItem(model, itemId);
        return item;
    } catch (error) {
        throw error;
    }
};

module.exports = { getOneItem };

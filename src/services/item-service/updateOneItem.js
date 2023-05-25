const Item = require("../../database/Item");

const updateOneItem = (model, itemId, data) => {
    try {
        const item = Item.updateOneItem(model, itemId, data);
        return item;
    } catch (error) {
        throw error;
    }
};

module.exports = { updateOneItem };

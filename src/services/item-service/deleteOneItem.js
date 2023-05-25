const Item = require("../../database/Item");

const deleteOneItem = (model, itemId) => {
    try {
        const item = Item.deleteOneItem(model, itemId);
        return item;
    } catch (error) {
        throw error;
    }
};

module.exports = { deleteOneItem };

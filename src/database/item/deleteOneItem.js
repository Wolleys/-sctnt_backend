const { deleteRecord } = require("../helpers/deleteRecord");
const deleteOneItem = async (model, itemId) => {
    try {
        const itemModel = model.Item;
        const findItem = "an item";
        await deleteRecord(itemModel, findItem, itemId);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { deleteOneItem };

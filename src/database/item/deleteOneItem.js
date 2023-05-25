const { deleteRecord } = require("../helpers/deleteRecord");

const deleteOneItem = async (model, itemId) => {
    try {
        const findItem = "an item";
        await deleteRecord(model.Item, findItem, itemId);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { deleteOneItem };

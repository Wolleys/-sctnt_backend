const { findRecord } = require("../helpers/findRecord");

const updateOneItem = async (model, itemId, data) => {
    const itemModel = model.Item;
    const findItem = "an item";
    await findRecord(itemModel, findItem, itemId);

    try {
        await model.Item.update({ ...data }, { where: { id: itemId } });
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { updateOneItem };

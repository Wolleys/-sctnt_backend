const { findRecord } = require("../helpers/findRecord");

const updateOneItem = async (model, itemId, data) => {
    const findItem = "an item";
    await findRecord(model.Item, findItem, itemId);

    try {
        await model.Item.update({ ...data }, { where: { id: itemId } });
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { updateOneItem };

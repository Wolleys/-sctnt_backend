const { findRecord } = require("../helpers/findRecord");
const { updateOneEntity } = require("../data-access-module");

const updateOneItem = async (model, itemId, data) => {
    // Check the supplied supplier id
    const suppDesc = "a supplier";
    const suppId = data.supplier_id;
    const suppCond = { id: data.supplier_id };
    const suppAttrs = ["id"];

    await findRecord(model.Supplier, suppDesc, suppId, suppCond, suppAttrs);

    // Check the item id parameter
    const itemDesc = "an item";
    const itemCond = { id: itemId };
    const itemAttrs = ["id"];

    await findRecord(model.Item, itemDesc, itemId, itemCond, itemAttrs);
    updateOneEntity(model.Item, itemCond, data);
};

module.exports = { updateOneItem };

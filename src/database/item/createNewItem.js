const { findRecord } = require("../helpers/findRecord");
const { alreadyExists } = require("../helpers/alreadyExists");

const createNewItem = async (model, newItem) => {
    // Check the supplied supplier id
    const supplierModel = model.Supplier;
    const findSupplier = "a supplier";
    await findRecord(supplierModel, findSupplier, newItem.supplier_id);

    // Check if part number already exists
    const partNumCol = "part_number";
    const partNumVal = newItem.part_number;
    const partNumAttrs = ["part_number"];
    await alreadyExists(model.Item, partNumCol, partNumVal, partNumAttrs);

    try {
        const createdItem = await model.Item.create(newItem);
        return createdItem;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { createNewItem };

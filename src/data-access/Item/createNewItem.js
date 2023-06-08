const { findRecord } = require("../helpers/findRecord");
const { alreadyExists } = require("../helpers/alreadyExists");
const { createNewEntity } = require("../data-access-module");

const createNewItem = async (model, newItem) => {
    // Check the supplied supplier id
    const desc = "a supplier";
    const idCond = { id: newItem.supplier_id };
    const idAttr = ["id"];
    await findRecord(model.Supplier, desc, newItem.supplier_id, idCond, idAttr);

    // Check if part number already exists
    const partNumCond = { part_number: newItem.part_number };
    const partNumVal = newItem.part_number;
    const partNumAttr = ["part_number"];

    await alreadyExists(model.Item, partNumCond, partNumVal, partNumAttr);
    return createNewEntity(model.Item, newItem);
};

module.exports = { createNewItem };

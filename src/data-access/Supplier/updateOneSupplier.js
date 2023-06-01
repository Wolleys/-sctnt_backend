const { findRecord } = require("../helpers/findRecord");
const { updateOneEntity } = require("../data-access-module");

const updateOneSupplier = async (model, supplierId, data) => {
    const desc = "a supplier";
    const cond = { id: supplierId };
    const attrs = ["id"];

    await findRecord(model.Supplier, desc, cond, attrs);
    updateOneEntity(model.Supplier, cond, data);
};

module.exports = { updateOneSupplier };

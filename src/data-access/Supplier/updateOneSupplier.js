const { findRecord } = require("../helpers/findRecord");
const { updateOneEntity } = require("../data-access-module");

const updateOneSupplier = async (model, supplierId, data) => {
    const findSupplier = "a supplier";
    const condition = { id: supplierId };

    await findRecord(model.Supplier, findSupplier, condition, ["id"]);
    updateOneEntity(model.Supplier, supplierId, data);
};

module.exports = { updateOneSupplier };

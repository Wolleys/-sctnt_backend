const { updateOneEntity } = require("../service-module");
const Supplier = require("../../data-access/Supplier");

const updateOneSupplier = (model, supplierId, data) => {
    return updateOneEntity(model, supplierId, data, Supplier.updateOneSupplier);
};

module.exports = { updateOneSupplier };

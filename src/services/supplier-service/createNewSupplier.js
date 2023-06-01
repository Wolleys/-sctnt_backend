const Supplier = require("../../data-access/Supplier");
const { createNewEntity } = require("../service-module");

const createNewSupplier = (model, newSupplier) => {
    return createNewEntity(model, newSupplier, Supplier.createNewSupplier);
};

module.exports = { createNewSupplier };

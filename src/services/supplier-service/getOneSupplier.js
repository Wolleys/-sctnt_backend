const { getOneEntity } = require("../service-module");
const Supplier = require("../../data-access/Supplier");

const getOneSupplier = (model, supplierId) => {
    return getOneEntity(model, supplierId, Supplier.getOneSupplier);
};

module.exports = { getOneSupplier };

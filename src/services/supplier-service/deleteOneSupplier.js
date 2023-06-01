const { deleteOneEntity } = require("../service-module");
const Supplier = require("../../data-access/Supplier");

const deleteOneSupplier = (model, supplierId) => {
    return deleteOneEntity(model, supplierId, Supplier.deleteOneSupplier);
};

module.exports = { deleteOneSupplier };

const { getAllEntities } = require("../service-module");
const Supplier = require("../../data-access/Supplier");

const getAllSuppliers = (model) => {
    return getAllEntities(model, Supplier.getAllSuppliers);
};

module.exports = { getAllSuppliers };

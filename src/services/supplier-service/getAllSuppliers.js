const Supplier = require("../../data-access/Supplier");
const { getAllEntities } = require("../service-module");

const getAllSuppliers = (model) => {
    return getAllEntities(model, Supplier.getAllSuppliers);
};

module.exports = { getAllSuppliers };

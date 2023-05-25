const Supplier = require("../../database/Supplier");

const getAllSuppliers = (model) => {
    try {
        const allSuppliers = Supplier.getAllSuppliers(model);
        return allSuppliers;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllSuppliers };

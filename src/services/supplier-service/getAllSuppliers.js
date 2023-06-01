const Supplier = require("../../data-access/Supplier");

const getAllSuppliers = (model) => {
    try {
        const allSuppliers = Supplier.getAllSuppliers(model);
        return allSuppliers;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllSuppliers };

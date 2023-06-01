const Supplier = require("../../data-access/Supplier");

const getOneSupplier = (model, supplierId) => {
    try {
        const supplier = Supplier.getOneSupplier(model, supplierId);
        return supplier;
    } catch (error) {
        throw error;
    }
};

module.exports = { getOneSupplier };

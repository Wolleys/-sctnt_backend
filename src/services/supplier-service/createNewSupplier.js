const Supplier = require("../../database/Supplier");

const createNewSupplier = (model, newSupplier) => {
    try {
        const createdSupplier = Supplier.createNewSupplier(model, newSupplier);
        return createdSupplier;
    } catch (error) {
        throw error;
    }
};

module.exports = { createNewSupplier };

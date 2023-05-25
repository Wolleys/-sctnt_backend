const Supplier = require("../../database/Supplier");

const updateOneSupplier = (model, supplierId, data) => {
    try {
        const supplier = Supplier.updateOneSupplier(model, supplierId, data);
        return supplier;
    } catch (error) {
        throw error;
    }
};

module.exports = { updateOneSupplier };

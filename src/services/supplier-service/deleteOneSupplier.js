const Supplier = require("../../database/Supplier");

const deleteOneSupplier = (model, supplierId) => {
    try {
        const supplier = Supplier.deleteOneSupplier(model, supplierId);
        return supplier;
    } catch (error) {
        throw error;
    }
};

module.exports = { deleteOneSupplier };

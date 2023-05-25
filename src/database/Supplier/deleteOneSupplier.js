const { deleteRecord } = require("../helpers/deleteRecord");

const deleteOneSupplier = async (model, supplierId) => {
    try {
        const findItem = "a supplier";
        await deleteRecord(model.Supplier, findItem, supplierId);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { deleteOneSupplier };

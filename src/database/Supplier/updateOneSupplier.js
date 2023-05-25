const { findRecord } = require("../helpers/findRecord");

const updateOneSupplier = async (model, supplierId, data) => {
    const findSupplier = "a supplier";
    await findRecord(model.Supplier, findSupplier, supplierId);

    try {
        await model.Supplier.update({ ...data }, { where: { id: supplierId } });
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { updateOneSupplier };

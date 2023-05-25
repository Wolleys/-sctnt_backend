const { alreadyExists } = require("../helpers/alreadyExists");

const createNewSupplier = async (model, newSupplier) => {
    // Check if email already exists
    const emailCol = "email";
    const emailVal = newSupplier.email;
    const emailAttrs = ["email"];
    await alreadyExists(model.Supplier, emailCol, emailVal, emailAttrs);

    try {
        const createdSupplier = await model.Supplier.create(newSupplier);
        return createdSupplier;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { createNewSupplier };

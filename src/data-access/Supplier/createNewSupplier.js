const { alreadyExists } = require("../helpers/alreadyExists");
const { createNewEntity } = require("../data-access-module");

const createNewSupplier = async (model, newSupplier) => {
    // Check if email already exists
    const cond = { email: newSupplier.email };
    const emailVal = newSupplier.email;
    const attrs = ["email"];

    await alreadyExists(model.Supplier, cond, emailVal, attrs);
    return createNewEntity(model.Supplier, newSupplier);
};

module.exports = { createNewSupplier };

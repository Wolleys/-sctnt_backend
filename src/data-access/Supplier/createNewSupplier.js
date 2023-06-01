const { alreadyExists } = require("../helpers/alreadyExists");
const { createNewEntity } = require("../data-access-module");

const createNewSupplier = async (model, newSupplier) => {
    // Check if email already exists
    const emailCol = "email";
    const emailVal = newSupplier.email;
    const emailAttrs = ["email"];
    await alreadyExists(model.Supplier, emailCol, emailVal, emailAttrs);

    await createNewEntity(model.Supplier, newSupplier);
};

module.exports = { createNewSupplier };

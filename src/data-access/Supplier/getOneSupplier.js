const { getOneEntity } = require("../data-access-module");

const getOneSupplier = (model, supplierId) => {
    const desc = "a supplier";
    const cond = { id: supplierId };
    const attrs = ["id", "first_name", "last_name", "phone_number", "email"];

    return getOneEntity(model.Supplier, desc, supplierId, cond, attrs);
};

module.exports = { getOneSupplier };
